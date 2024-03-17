from django.contrib import admin
from django.urls import path
from pessoa.services.services import (
    incluir_pessoa,
    alterar_pessoa,
    excluir_pessoa,
    buscar_pessoa,
    listar_todas_pessoas,
    calcular_peso_ideal_pessoa
)

urlpatterns = [
    path('admin', admin.site.urls),
    path('pessoa', listar_todas_pessoas),
    path('pessoa/<str:parametro>', buscar_pessoa),
    path('pessoa/incluir/', incluir_pessoa),
    path('pessoa/alterar/<str:nome>', alterar_pessoa),
    path('pessoa/excluir/<str:nome>', excluir_pessoa),
    path('pessoa/calcular-peso-ideal/<str:nome>', calcular_peso_ideal_pessoa),
]