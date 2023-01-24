from django.db import models

class Transaction(models.Model):
    tipo = models.IntegerField()
    descricao = models.CharField(max_length=22)
    natureza = models.CharField(max_length=7)
    sinal = models.CharField(max_length=1)
    data = models.DateField()
    valor = models.FloatField()
    cpf = models.CharField(max_length=11)
    cartao = models.CharField(max_length=12)
    hora = models.TimeField()
    dono_loja = models.CharField(max_length=14)
    nome_loja = models.CharField(max_length=19)


