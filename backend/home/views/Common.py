from django.http import JsonResponse


class Common:
    @staticmethod
    def response(self,status, message, data=None):
        response = {
            "status": status,
            "message": message
        }
        if data is not None:
            response["data"] = data
            
        return JsonResponse(response)       