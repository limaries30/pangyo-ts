from django.contrib.auth.models import AbstractBaseUser,BaseUserManager,PermissionsMixin
from django.db import models 

class UserManager(BaseUserManager):    
    
    use_in_migrations = True    
    
    def create_user(self, email, password, username):        
        
        if not email :            
            raise ValueError('must have user email')        
        user = self.model(            
            email = self.normalize_email(email),            
            password = password,
            username = username

        )        

        user.set_password(password)        
        user.save(using=self._db)        
        
        return user     
    def create_superuser(self, email, password, username ):        
       
        user = self.create_user(            
            email = self.normalize_email(email),            
            password = password,
            username = username   
        )        
        user.is_admin = True        
        user.is_superuser = True        
        user.is_staff = True        
        user.save(using=self._db)        
        return user 

class User(AbstractBaseUser,PermissionsMixin):    
    
    objects = UserManager()
    
    email = models.EmailField(        
        max_length=255,        
        unique=True,    
    )    
    username = models.CharField(
        max_length=20,
        null=False,
        unique=True
    )     
    
    is_active = models.BooleanField(default=True)    
    is_admin = models.BooleanField(default=False)    

    is_superuser = models.BooleanField(default=False)    
    is_staff = models.BooleanField(default=False)     
    
    USERNAME_FIELD = 'username'    
    REQUIRED_FIELDS = ['email']

# class Choice(models.Model):
#     question = models.ForeignKey(Question, on_delete=models.CASCADE)
#     choice_text = models.CharField(max_length=200)
#     votes = models.IntegerField(default=0)
