import logging
from pessoa.models.models import Pessoa

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

def atualizar_pessoa(nome, data_nasc, cpf, sexo, altura, peso):
    logger.info(f"Solicitação recebida para atualizar pessoa: nome={nome}, data_nasc={data_nasc}, cpf={cpf}, sexo={sexo}, altura={altura}, peso={peso}")
    try:
        pessoa = Pessoa.objects.get(nome=nome)
        pessoa.nome = nome
        pessoa.data_nasc = data_nasc
        pessoa.cpf = cpf
        pessoa.sexo = sexo
        pessoa.altura = altura
        pessoa.peso = peso
        pessoa.save()
        logger.info(f"Pessoa atualizada com sucesso: nome={pessoa.nome}")
        return pessoa
    except Pessoa.DoesNotExist:
        logger.error("Pessoa não encontrada.")
        return None

def listar_pessoas():
    logger.info("Solicitação recebida para listar todas as pessoas")
    return Pessoa.objects.all()