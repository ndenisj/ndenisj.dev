from django.contrib import admin
from .models import *


@admin.register(Post)
class BookAdmin(admin.ModelAdmin):
    list_display = ['title', 'pub_date']
    list_filter = ['title', 'pub_date']
    search_fields = ['title']


@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ['address', 'phone_1', 'phone_2', 'mail_1', 'mail_2']
