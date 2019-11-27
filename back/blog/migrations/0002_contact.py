# Generated by Django 2.2.7 on 2019-11-26 10:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('address', models.CharField(max_length=200)),
                ('phone_1', models.CharField(max_length=150)),
                ('phone_2', models.CharField(max_length=150)),
                ('mail_1', models.CharField(max_length=200)),
                ('mail_2', models.CharField(max_length=200)),
                ('facebook', models.CharField(max_length=200)),
                ('github', models.CharField(max_length=200)),
                ('twitter', models.CharField(max_length=200)),
                ('linkedin', models.CharField(max_length=200)),
                ('youtube', models.CharField(max_length=200)),
                ('pub_date', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]