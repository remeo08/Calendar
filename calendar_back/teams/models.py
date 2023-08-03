from django.db import models
from users.models import User

# Create your models here.
class Team(models.Model):
    teamname = models.CharField(max_length=20, null=False)
    color = models.CharField(max_length=15, null=False)

    members = models.ManyToManyField(User)
    
    def __str__(self) -> str:
        return self.teamname