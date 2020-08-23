from django.shortcuts import render,get_object_or_404
from django.http import HttpResponse
from .models import Question
from django.template import loader
from django.http import Http404,JsonResponse
# Create your views here.
def index(request):

    # latest_question_list = Question.objects.order_by('-pub_date')[:5]
    # #output = ', '.join([q.question_text for q in latest_question_list])
    # template = loader.get_template('polls/index.html')
    # context = {
    #     'latest_question_list': latest_question_list,
    # }
    # return HttpResponse(template.render(context, request))

    latest_question_list = Question.objects.order_by('-pub_date')[:5]
    context = {'latest_question_list': latest_question_list}
    return render(request, 'api/index.html', context)

    
def detail(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    return render(request, 'api/detail.html', {'question': question})

    # try:
    #     question = Question.objects.get(pk=question_id)
    #     print(question)
    # except Question.DoesNotExist:
    #     raise Http404("Question does not exist")
    # return render(request,'api/detail.html',{'question':question})

def results(request, question_id):
    response = "You're looking at the results of question %s."
    return HttpResponse(response % question_id)

def vote(request, question_id):
    return HttpResponse("You're voting on question %s." % question_id)

def login(request):
    return JsonResponse({'token':'hi'})