from pessoa.DTO.dto import PessoaCreateUpdateDTO
from pessoa.models.models import Pessoa
from pessoa.services.services import incluir_pessoa as service_incluir_pessoa, alterar_pessoa as service_alterar_pessoa, excluir_pessoa as service_excluir_pessoa, buscar_pessoa as service_buscar_pessoa, listar_pessoas as service_listar_pessoas, calcular_peso_ideal_pessoa as service_calcular_peso_ideal_pessoa

class PessoaTask:
    @staticmethod
    def incluir_pessoa(nome, data_nasc, cpf, sexo, altura, peso):
        pessoa_dto = PessoaCreateUpdateDTO(nome, data_nasc, cpf, sexo, altura, peso)
        return service_incluir_pessoa(pessoa_dto)

    @staticmethod
    def atualizar_pessoa(id, nome, data_nasc, cpf, sexo, altura, peso):
        pessoa_dto = PessoaCreateUpdateDTO(nome, data_nasc, cpf, sexo, altura, peso)
        return service_alterar_pessoa(id, pessoa_dto)

    @staticmethod
    def excluir_pessoa(id):
        return service_excluir_pessoa(id)

    @staticmethod
    def buscar_pessoa(id):
        return service_buscar_pessoa(id)

    @staticmethod
    def listar_pessoas():
        return service_listar_pessoas()

    @staticmethod
    def calcular_peso_ideal(altura, sexo):
        return service_calcular_peso_ideal_pessoa(altura, sexo)