from django.contrib import admin
from .models import *


@admin.register(Post)
class BookAdmin(admin.ModelAdmin):
    list_display = ['title', 'pub_date']
    list_filter = ['title', 'pub_date']
    search_fields = ['title']

