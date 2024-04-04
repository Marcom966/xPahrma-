from django.apps import AppConfig

#serve a configurare il database in /admin/ online
class DatabaseConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'database'
