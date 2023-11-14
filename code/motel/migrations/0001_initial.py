# Generated by Django 4.0 on 2023-11-14 20:27

import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ConsumableItem',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('name', models.CharField(max_length=120)),
                ('price', models.FloatField(validators=[django.core.validators.MinValueValidator(0.0)])),
                ('description', models.TextField(blank=True, null=True)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Room',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('number', models.IntegerField()),
                ('hour_value', models.FloatField(validators=[django.core.validators.MinValueValidator(0.0)])),
                ('type', models.CharField(choices=[('NORMAL', 'Normal'), ('LUX', 'Lux')], max_length=6)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Accommodation',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('alias', models.CharField(max_length=120)),
                ('value', models.FloatField(blank=True, null=True)),
                ('entry_time', models.DateTimeField()),
                ('exit_time', models.DateTimeField(blank=True, null=True)),
                ('discount', models.BooleanField(default=False)),
                ('paid', models.BooleanField(default=False)),
                ('consumable_items', models.ManyToManyField(blank=True, to='motel.ConsumableItem')),
                ('room', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='accommodations', to='motel.room')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
