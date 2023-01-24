from rest_framework import generics
from .serializers import TransactionSerializer
from .models import Transaction

class TransactionView(generics.ListCreateAPIView):
    serializer_class = TransactionSerializer
    queryset = Transaction.objects.all()