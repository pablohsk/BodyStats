from django.db import models

class Pessoa(models.Model):
    nome = models.CharField(max_length=100)
    data_nasc = models.DateField()
    cpf = models.CharField(max_length=14, unique=True)
    sexo = models.CharField(max_length=1, choices=(('M', 'Masculino'), ('F', 'Feminino')))
    altura = models.DecimalField(max_digits=4, decimal_places=2)
    peso = models.DecimalField(max_digits=5, decimal_places=2)

    def __str__(self):
        return self.nome