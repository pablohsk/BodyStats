import json
from django.http import JsonResponse
from pessoa.DTO.dto import PessoaCreateUpdateDTO
from pessoa.controller.controller import criar_pessoa
import logging
from pessoa.controller.controller import (
    criar_pessoa,
    atualizar_pessoa,
    excluir_pessoa,
    buscar_pessoa,
    listar_pessoas,
    calcular_peso_ideal
)
from pessoa.DTO.dto import PessoaCreateUpdateDTO, PessoaViewDTO
from typing import List

logger = logging.getLogger(__name__)

def incluir_pessoa(request):
    if request.method == 'POST':
        # Verifica se a solicitação possui dados JSON no corpo
        if request.body:
            # Decodifica os dados JSON para um dicionário Python
            json_data = json.loads(request.body)
            # Cria um objeto PessoaCreateUpdateDTO com os dados
            pessoa_dto = PessoaCreateUpdateDTO(
                nome=json_data.get('nome'),
                data_nasc=json_data.get('data_nasc'),
                cpf=json_data.get('cpf'),
                sexo=json_data.get('sexo'),
                altura=json_data.get('altura'),
                peso=json_data.get('peso')
            )
            # Chama a função criar_pessoa com os argumentos necessários
            pessoa = criar_pessoa(
                pessoa_dto.nome,
                pessoa_dto.data_nasc,
                pessoa_dto.cpf,
                pessoa_dto.sexo,
                pessoa_dto.altura,
                pessoa_dto.peso
            )
            return JsonResponse({'message': 'Pessoa criada com sucesso!'}, status=201)
        else:
            return JsonResponse({'error': 'Nenhum dado JSON foi enviado no corpo da solicitação.'}, status=400)
    else:
        return JsonResponse({'error': 'Método não permitido.'}, status=405)

def alterar_pessoa(id, pessoa_dto: PessoaCreateUpdateDTO):
    logger.info(f"Solicitação recebida para alterar pessoa: id={id}, dados={pessoa_dto.__dict__}")
    pessoa = atualizar_pessoa(id, pessoa_dto)
    logger.info(f"Pessoa alterada com sucesso: id={pessoa.id}")
    return pessoa

def buscar_pessoa_por_id(id):
    logger.info(f"Solicitação recebida para buscar pessoa por ID: id={id}")
    pessoa = buscar_pessoa(id)
    logger.info(f"Pessoa encontrada: {pessoa.__dict__}")
    return PessoaViewDTO(id=pessoa.id, nome=pessoa.nome, data_nasc=pessoa.data_nasc, cpf=pessoa.cpf, sexo=pessoa.sexo, altura=pessoa.altura, peso=pessoa.peso)

def listar_todas_pessoas() -> List[PessoaViewDTO]:
    logger.info("Solicitação recebida para listar todas as pessoas")
    pessoas = listar_pessoas()
    pessoas_dto = [PessoaViewDTO(id=pessoa.id, nome=pessoa.nome, data_nasc=pessoa.data_nasc, cpf=pessoa.cpf, sexo=pessoa.sexo, altura=pessoa.altura, peso=pessoa.peso) for pessoa in pessoas]
    logger.info(f"Lista de pessoas retornada: {pessoas_dto}")
    return pessoas_dto

def calcular_peso_ideal_pessoa(altura, sexo):
    logger.info(f"Solicitação recebida para calcular peso ideal: altura={altura}, sexo={sexo}")
    peso_ideal = calcular_peso_ideal(altura, sexo)
    logger.info(f"Peso ideal calculado: {peso_ideal}")
    return peso_ideal