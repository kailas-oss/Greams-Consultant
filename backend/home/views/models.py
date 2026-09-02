from django.db import models

# Create your models here.
class Session(models.Model):
    session_id = models.IntegerField(primary_key=True)
    r_visitor_id = models.IntegerField(null=False)
    start = models.DateTimeField()
    end = models.DateTimeField()

    class Meta:
        db_table = 'session'
        
class Visitors(models.Model):
    visitor_id = models.IntegerField(primary_key=True)
    ip_address = models.CharField(max_length=50, null=False)
    user_agent = models.TextField(null=False)
    browser = models.CharField(max_length=50, null=False)
    country = models.CharField(max_length=70, null=False)
    city = models.CharField(max_length=50, null=False)
    entry_time = models.DateTimeField()

    class Meta:
        db_table = 'visitors'
        
class Userdetails(models.Model):
    user_id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=100, null=False)
    email = models.CharField(max_length=100, null=False)
    phone_no = models.BigIntegerField( null=False)
    mes = models.CharField(max_length=500)
    created_time = models.DateTimeField()

    class Meta:
        db_table = 'user_details'
        
        