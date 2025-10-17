
class JWTAuthCookieMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        print("hellooo from custom middleware......!!!")
        token = request.COOKIES.get('access')
        print(request.method)
        print(request.path)
        print(request.COOKIES)
        print(request.META.get('HTTP_AUTHORIZATION'))

        if token:
            request.META['HTTP_AUTHORIZATION'] = f'Bearer {token}'
        return self.get_response(request)
