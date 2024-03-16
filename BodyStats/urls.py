from django.contrib import admin
from django.urls import path
from pessoa.services.services import (
    incluir_pessoa,
    alterar_pessoa,
    excluir_pessoa,
    buscar_pessoa_por_id,
    listar_todas_pessoas,
    calcular_peso_ideal_pessoa
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('pessoa/', listar_todas_pessoas),
    path('pessoa/<int:id>/', buscar_pessoa_por_id),
    path('pessoa/incluir', incluir_pessoa),
    path('pessoa/alterar/<int:id>/', alterar_pessoa),
    path('pessoa/excluir/<int:id>/', excluir_pessoa),
    path('pessoa/calcular-peso-ideal/', calcular_peso_ideal_pessoa),
]