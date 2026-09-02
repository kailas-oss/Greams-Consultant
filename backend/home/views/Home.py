from django.http import JsonResponse
from django.utils import timezone
from rest_framework.decorators import api_view
from .models import Session, Visitors
import uuid


@api_view(['GET'])
def welcome(request):
    """
    Create a session entry for a visitor
    """

    # 1. Get or create visitor
    visitor_ip = get_client_ip(request)
    qs = Visitors.objects.filter(r_visitors_id=visitor_ip).get_or_create(visitor_ip)

    # 2. Generate unique session key
    session_key = str(uuid.uuid4())
    return JsonResponse({
        "message": "KAILAS",
        "visitor_ip": visitor_ip
    })

    # 3. Store session in DB
    # session = Session.objects.create(
    #     session_key=session_key,           # optional if you store uuid
    #     r_visitors_id=visitor.id,
    #     session_start=timezone.now(),
    #     session_end=timezone.now()
    # )

    # # 4. Store session id in Django session
    # request.session['session_id'] = session.session_id

    # return JsonResponse({
    #     "message": "Welcome",
    #     "session_id": session.session_id,
    #     "visitor_id": visitor.id,
    #     "session_start": session.session_start
    # })

def get_client_ip(request):
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')

    if x_forwarded_for:
        # First IP is the original client
        ip = x_forwarded_for.split(',')[0].strip()
    else:
        ip = request.META.get('REMOTE_ADDR')

        return ip
