from django.shortcuts import render,get_object_or_404
from django.http import HttpResponse
from django.template import loader
from django.http import Http404,JsonResponse
from .models import User
import logging
logger = logging.getLogger('django')

# Create your views here.
def index(request):

    return JsonResponse({'token':'hi'})

def login(request):
    
    return JsonResponse({'token':'hello','success':'ok'})


def signup(request):
    if request.method == 'POST':
        logger.debug(request.body)
        User.save(request.body)
        return JsonResponse({'token':'hello','success':'ok'}) 


def post(request):
    if request.method == 'POST':
        logger.debug(request.body)
        User.save(request.body)
        return JsonResponse({'token':'hello','success':'ok'}) 

    if request.method=='GET':
        return JsonResponse([{'url':'./assets/imgs/salad.jpg','title':'watermelon'},{'url':'./assets/imgs/salad.jpg','title':'salad'}],safe=False)