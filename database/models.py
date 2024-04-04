from django.db import models


#Classe di creazione tabella su db django online /admin/database (ci posso accedere solo io perchè è prottetto
#da password come misura di sicurezza)
#crea tutti i campi e ci inserisce un tipo di valore
class Product(models.Model):
    name = models.CharField('Product Name', max_length=120)
    image = models.ImageField(upload_to=None, height_field=None, width_field=None, max_length=100)
    uploaded_time = models.DateTimeField('Upload date')
    price = models.IntegerField('Price Field', max_length=4)
    description = models.CharField('description', max_length=120)
    owner=models.CharField('Owner Name', max_length=120)
    availability = models.IntegerField('disponibilità', max_length=3)

    def __str__(self): #funzione che serve a ritornare il nome della classe
        return self.name
