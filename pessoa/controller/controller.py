import logging
from models.models import Pessoa

# Configuração do logger
logger = logging.getLogger(__name__)

def criar_pessoa(nome, data_nasc, cpf, sexo, altura, peso):
    logger.info(f"Solicitação recebida para criar pessoa: nome={nome}, data_nasc={data_nasc}, cpf={cpf}, sexo={sexo}, altura={altura}, peso={peso}")
    return Pessoa.objects.create(
        nome=nome,
        data_nasc=data_nasc,
        cpf=cpf,
        sexo=sexo,
        altura=altura,
        peso=peso
    )

def atualizar_pessoa(id, nome, data_nasc, cpf, sexo, altura, peso):
    logger.info(f"Solicitação recebida para atualizar pessoa: id={id}, nome={nome}, data_nasc={data_nasc}, cpf={cpf}, sexo={sexo}, altura={altura}, peso={peso}")
    pessoa = Pessoa.objects.get(pk=id)
    pessoa.nome = nome
    pessoa.data_nasc = data_nasc
    pessoa.cpf = cpf
    pessoa.sexo = sexo
    pessoa.altura = altura
    pessoa.peso = peso
    pessoa.save()
    logger.info(f"Pessoa atualizada com sucesso: id={pessoa.id}")
    return pessoa

def excluir_pessoa(id):
    logger.info(f"Solicitação recebida para excluir pessoa: id={id}")
    Pessoa.objects.filter(pk=id).delete()
    logger.info(f"Pessoa excluída com sucesso: id={id}")

def buscar_pessoa(id):
    logger.info(f"Solicitação recebida para buscar pessoa: id={id}")
    return Pessoa.objects.get(pk=id)

def listar_pessoas():
    logger.info("Solicitação recebida para listar todas as pessoas")
    return Pessoa.objects.all()