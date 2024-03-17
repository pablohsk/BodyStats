import json
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from pessoa.DTO.dto import PessoaCreateUpdateDTO
from pessoa.controller.controller import criar_pessoa, atualizar_pessoa, listar_pessoas
from pessoa.models.models import Pessoa

import logging

logger = logging.getLogger(__name__)

def incluir_pessoa(request):
    if request.method == 'POST':
        json_data = json.loads(request.body)
        pessoa_dto = PessoaCreateUpdateDTO(**json_data)
        pessoa = criar_pessoa(
            pessoa_dto.nome, pessoa_dto.data_nasc, pessoa_dto.cpf,
            pessoa_dto.sexo, pessoa_dto.altura, pessoa_dto.peso
        )
        return JsonResponse({'message': 'Pessoa criada com sucesso!'}, status=201)
    else:
        return JsonResponse({'error': 'Método não permitido.'}, status=405)

def alterar_pessoa(request, nome): 
    
    if request.method == 'PUT':
        if request.body:
            json_data = json.loads(request.body)
            data_nasc = json_data.get('data_nasc')
            cpf = json_data.get('cpf')
            sexo = json_data.get('sexo')
            altura = json_data.get('altura')
            peso = json_data.get('peso')

            pessoa_atualizada = atualizar_pessoa(
                nome, data_nasc, cpf, sexo, altura, peso)

            if pessoa_atualizada:
                return JsonResponse({'message': 'Pessoa atualizada com sucesso!'}, status=200)
            else:
                return JsonResponse({'error': 'Pessoa não encontrada.'}, status=404)
        else:
            return JsonResponse({'error': 'Nenhum dado JSON foi enviado no corpo da solicitação.'}, status=400)
    else:
        return JsonResponse({'error': 'Método não permitido. Utilize o método PUT.'}, status=405)

def buscar_pessoa(request, parametro):
    logger.info(f"Solicitação recebida para buscar pessoa por parâmetro: {parametro}")
    
    pessoa = get_object_or_404(Pessoa, nome=parametro)
    logger.info(f"Pessoa encontrada: {pessoa.__dict__}")

    return JsonResponse({
        'id': pessoa.id, 
        'nome': pessoa.nome, 
        'data_nasc': pessoa.data_nasc, 
        'cpf': pessoa.cpf, 
        'sexo': pessoa.sexo, 
        'altura': pessoa.altura, 
        'peso': pessoa.peso
    })

def listar_todas_pessoas(request):
    logger.info("Solicitação recebida para listar todas as pessoas")
    pessoas = listar_pessoas()
    pessoas_dto = [{
        'id': pessoa.id, 
        'nome': pessoa.nome, 
        'data_nasc': pessoa.data_nasc, 
        'cpf': pessoa.cpf, 
        'sexo': pessoa.sexo, 
        'altura': pessoa.altura, 
        'peso': pessoa.peso
    } for pessoa in pessoas]
    logger.info(f"Lista de pessoas retornada: {pessoas_dto}")
    return JsonResponse({'pessoas': pessoas_dto})

def calcular_peso_ideal_pessoa(request, nome):
    logger.info(f"Solicitação recebida para calcular peso ideal para a pessoa: {nome}")
    try:
        pessoa = Pessoa.objects.get(nome=nome)
        logger.info(f"Pessoa encontrada: {pessoa.nome}")
        
        altura = float(pessoa.altura) 
        sexo = pessoa.sexo
        
        if sexo == 'M':
            peso_ideal = (72.7 * altura) - 58
        elif sexo == 'F':
            peso_ideal = (62.1 * altura) - 44.7
        else:
            logger.error("Sexo inválido. O sexo deve ser 'M' para masculino ou 'F' para feminino.")
            return JsonResponse({'error': 'Sexo inválido'}, status=400)
        
        logger.info(f"Peso ideal calculado para {pessoa.nome}: {peso_ideal}")
        return JsonResponse({'peso_ideal': peso_ideal}, status=200)
        
    except Pessoa.DoesNotExist:
        logger.error("Pessoa não encontrada.")
        return JsonResponse({'error': 'Pessoa não encontrada.'}, status=404)

def excluir_pessoa(request, nome):
    logger.info(f"Solicitação recebida para excluir pessoa por nome: {nome}")
    
    try:
        pessoa = Pessoa.objects.get(nome=nome)
        pessoa.delete()
        logger.info(f"Pessoa excluída com sucesso: {nome}")
        return JsonResponse({'message': f'Pessoa {nome} excluída com sucesso!'}, status=200)
    except Pessoa.DoesNotExist:
        logger.info(f"Pessoa não encontrada: {nome}")
        return JsonResponse({'error': f'Pessoa {nome} não encontrada.'}, status=404)