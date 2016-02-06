from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Bill(models.Model):
    primary_key = models.ForeignKey(User, on_delete=models.CASCADE)

    title = models.CharField(max_length=30)
    amount = models.IntegerField(default=0)
    due = models.DateField()
    
class Income(models.Model):
    primary_key = models.ForeignKey(User, on_delete=models.CASCADE)

    title = models.CharField(max_length=30)
    amount = models.DecimalField(default=0, decimal_places=2, max_digits=20)
    category = models.CharField(max_length=30)
    
class BankAccount(models.Model):
    primary_key = models.ForeignKey(User, on_delete=models.CASCADE)
    
    title = models.CharField(max_length=30)
    balance = models.DecimalField(default=0, decimal_places=2, max_digits=20)
    credit = models.DecimalField(default=0, decimal_places=2, max_digits=20)
    debit = models.DecimalField(default=0, decimal_places=2, max_digits=20)