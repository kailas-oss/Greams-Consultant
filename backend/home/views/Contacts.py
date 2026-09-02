from django.utils import timezone
from django.utils.html import strip_tags
from django.core.validators import validate_email
from django.core.exceptions import ValidationError
from django.core.mail import send_mail
from django.conf import settings
from rest_framework.views import APIView
from rest_framework import status

from .Common import Common


class ContactView(APIView):
    def post(self, request):
        datas = request.data
        required_fields = ["name", "email", "phone", "message"]

        for field in required_fields:
            if not datas.get(field):
                return Common.response(
                    self,
                    status.HTTP_400_BAD_REQUEST,
                    f"{field.capitalize()} is required"
                )

        name = strip_tags(datas.get("name")).strip()
        email = strip_tags(datas.get("email")).strip()
        phone = strip_tags(datas.get("phone")).strip()
        message = strip_tags(datas.get("message")).strip()

        # Validate email
        try:
            validate_email(email)
        except ValidationError:
            return Common.response(
                self,
                status.HTTP_400_BAD_REQUEST,
                "Invalid email address"
            )

        # Validate phone
        if not phone.isdigit() or len(phone) < 10 or len(phone) > 15:
            return Common.response(
                self,
                status.HTTP_400_BAD_REQUEST,
                "Invalid phone number"
            )

        # Email content
        subject = "New Contact Form Submission"
        email_message = f"""
You have received a new contact request:

Name: {name}
Email: {email}
Phone: {phone}

Message:
{message}

Submitted on: {timezone.now().strftime('%Y-%m-%d %H:%M:%S')}
"""

        try:
            send_mail(
                subject,
                email_message,
                settings.DEFAULT_FROM_EMAIL,
                [settings.TOOL_OWNER_EMAIL],
                fail_silently=False,
            )
        except Exception:
            return Common.response(
                self,
                status.HTTP_500_INTERNAL_SERVER_ERROR,
                "Unable to send email. Please try again later."
            )

        return Common.response(
            self,
            status.HTTP_200_OK,
            "Thank you! Your message has been sent successfully."
        )
