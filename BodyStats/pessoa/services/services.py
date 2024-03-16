from .controller import (
    criar_pessoa,
    atualizar_pessoa,
    excluir_pessoa,
    buscar_pessoa,
    listar_pessoas,
    calcular_peso_ideal
)
from .dto import PessoaCreateUpdateDTO, PessoaViewDTO

def incluir_pessoa(pessoa_dto):
    return criar_pessoa(pessoa_dto.nome, pessoa_dto.data_nasc, pessoa_dto.cpf, pessoa_dto.sexo, pessoa_dto.altura, pessoa_dto.peso)

def alterar_pessoa(id, pessoa_dto):
    return atualizar_pessoa(id, pessoa_dto.nome, pessoa_dto.data_nasc, pessoa_dto.cpf, pessoa_dto.sexo, pessoa_dto.altura, pessoa_dto.peso)

def buscar_pessoa_por_id(id):
    pessoa = buscar_pessoa(id)
    return PessoaViewDTO(id=pessoa.id, nome=pessoa.nome, data_nasc=pessoa.data_nasc, cpf=pessoa.cpf, sexo=pessoa.sexo, altura=pessoa.altura, peso=pessoa.peso)

def listar_todas_pessoas():
    pessoas = listar_pessoas()
    pessoas_dto = [PessoaViewDTO(id=pessoa.id, nome=pessoa.nome, data_nasc=pessoa.data_nasc, cpf=pessoa.cpf, sexo=pessoa.sexo, altura=pessoa.altura, peso=pessoa.peso) for pessoa in pessoas]
    return pessoas_dto

def calcular_peso_ideal_pessoa(altura, sexo):
    return calcular_peso_ideal(altura, sexo)