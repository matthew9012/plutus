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
    
class Transaction(models.Model):
    primary_key = models.IntegerField(default=0)
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    
    CONTAINER = models.CharField(max_length=30)
    
    amount = models.DecimalField(default=0, decimal_places=2, max_digits=20)
    currency_type = models.CharField(max_length=3)
    
    basetype = models.CharField(max_length=15)
    
    category = models.CharField(max_length=30)
    description = models.CharField(max_length=30)
    original_description = models.CharField(max_length=30)
    date = models.DateField()
    postDate = models.DateField()
    
    merchantName = models.CharField(max_length=30)
    status = models.CharField(max_length=15)
    accountID = models.IntegerField(default=0)
    
class MintTransaction(models.Model):
    
    fk_to_user = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateField()
    description = models.CharField(max_length=30)
    original_description = models.CharField(max_length=30)
    amount = models.DecimalField(decimal_places=2, max_digits=20)
    acc_type = models.CharField(max_length=30)
    category = models.CharField(max_length=30)
    acc_name = models.CharField(max_length=30)
    

class Budget(models.Model):
    fk_to_user = models.ForeignKey(User, on_delete=models.CASCADE)
    budget = models.IntegerField(default=500)
    

class ChatTokens(models.Model):
    fk_to_user = models.ForeignKey(User, on_delete=models.CASCADE)
    
    dialog_id = models.CharField(max_length=30)
    conversation_id = models.CharField(max_length=30)
    client_id = models.CharField(max_length=30)