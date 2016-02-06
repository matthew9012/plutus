# -*- coding: utf-8 -*-
# Generated by Django 1.9.2 on 2016-02-06 11:28
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('money', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Transaction',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('primary_key', models.IntegerField(default=0)),
                ('CONTAINER', models.CharField(max_length=30)),
                ('amount', models.DecimalField(decimal_places=2, default=0, max_digits=20)),
                ('currency_type', models.CharField(max_length=3)),
                ('basetype', models.CharField(max_length=15)),
                ('category', models.CharField(max_length=30)),
                ('description', models.CharField(max_length=30)),
                ('original_description', models.CharField(max_length=30)),
                ('date', models.DateField()),
                ('postDate', models.DateField()),
                ('merchantName', models.CharField(max_length=30)),
                ('status', models.CharField(max_length=15)),
                ('accountID', models.IntegerField(default=0)),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]