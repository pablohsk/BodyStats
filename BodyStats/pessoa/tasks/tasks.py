from models.models import Pessoa

class PessoaTask:
    @staticmethod
    def incluir_pessoa(nome, data_nasc, cpf, sexo, altura, peso):
        return Pessoa.objects.create(
            nome=nome,
            data_nasc=data_nasc,
            cpf=cpf,
            sexo=sexo,
            altura=altura,
            peso=peso
        )

    @staticmethod
    def atualizar_pessoa(id, nome, data_nasc, cpf, sexo, altura, peso):
        pessoa = Pessoa.objects.get(pk=id)
        pessoa.nome = nome
        pessoa.data_nasc = data_nasc
        pessoa.cpf = cpf
        pessoa.sexo = sexo
        pessoa.altura = altura
        pessoa.peso = peso
        pessoa.save()
        return pessoa

    @staticmethod
    def excluir_pessoa(id):
        Pessoa.objects.filter(pk=id).delete()

    @staticmethod
    def buscar_pessoa(id):
        return Pessoa.objects.get(pk=id)

    @staticmethod
    def listar_pessoas():
        return Pessoa.objects.all()

    @staticmethod
    def calcular_peso_ideal(altura, sexo):
        if sexo == 'M':
            return round((72.7 * altura) - 58, 2)
        elif sexo == 'F':
            return round((62.1 * altura) - 44.7, 2)
        else:
            return None