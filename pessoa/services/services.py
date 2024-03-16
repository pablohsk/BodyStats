import logging
from controller.controller import (
    criar_pessoa,
    atualizar_pessoa,
    excluir_pessoa,
    buscar_pessoa,
    listar_pessoas,
    calcular_peso_ideal
)
from DTO.dto import PessoaCreateUpdateDTO, PessoaViewDTO

# Configuração do logger
logger = logging.getLogger(__name__)

def incluir_pessoa(pessoa_dto):
    logger.info(f"Solicitação recebida para incluir pessoa: {pessoa_dto.__dict__}")
    pessoa = criar_pessoa(pessoa_dto.nome, pessoa_dto.data_nasc, pessoa_dto.cpf, pessoa_dto.sexo, pessoa_dto.altura, pessoa_dto.peso)
    logger.info(f"Pessoa incluída com sucesso: {pessoa.__dict__}")
    return pessoa

def alterar_pessoa(id, pessoa_dto):
    logger.info(f"Solicitação recebida para alterar pessoa: id={id}, dados={pessoa_dto.__dict__}")
    pessoa = atualizar_pessoa(id, pessoa_dto.nome, pessoa_dto.data_nasc, pessoa_dto.cpf, pessoa_dto.sexo, pessoa_dto.altura, pessoa_dto.peso)
    logger.info(f"Pessoa alterada com sucesso: id={pessoa.id}")
    return pessoa

def buscar_pessoa_por_id(id):
    logger.info(f"Solicitação recebida para buscar pessoa por ID: id={id}")
    pessoa = buscar_pessoa(id)
    logger.info(f"Pessoa encontrada: {pessoa.__dict__}")
    return PessoaViewDTO(id=pessoa.id, nome=pessoa.nome, data_nasc=pessoa.data_nasc, cpf=pessoa.cpf, sexo=pessoa.sexo, altura=pessoa.altura, peso=pessoa.peso)

def listar_todas_pessoas():
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