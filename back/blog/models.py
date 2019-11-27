from django.db import models

class Post(models.Model):
    title = models.CharField(max_length=200)
    body = models.TextField()
    pub_date = models.DateTimeField(auto_now_add=True)
    cover = models.ImageField(upload_to='media/')

    def __str__(self):
        return self.title

    def summary(self):
        return self.body[:100]

    def pub_date_pretty(self):
        return self.pub_date.strftime('%b %e %Y')


class Contact(models.Model):
    address = models.CharField(max_length=200)
    phone_1 = models.CharField(max_length=150)
    phone_2 = models.CharField(max_length=150)
    mail_1 = models.CharField(max_length=200)
    mail_2 = models.CharField(max_length=200)
    facebook = models.CharField(max_length=200)
    github = models.CharField(max_length=200)
    twitter = models.CharField(max_length=200)
    linkedin = models.CharField(max_length=200)
    youtube = models.CharField(max_length=200)
    pub_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.address
