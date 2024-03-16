class PessoaCreateUpdateDTO:
    def __init__(self, nome, data_nasc, cpf, sexo, altura, peso):
        self.nome = nome
        self.data_nasc = data_nasc
        self.cpf = cpf
        self.sexo = sexo
        self.altura = altura
        self.peso = peso

class PessoaViewDTO:
    def __init__(self, id, nome, data_nasc, cpf, sexo, altura, peso):
        self.id = id
        self.nome = nome
        self.data_nasc = data_nasc
        self.cpf = cpf
        self.sexo = sexo
        self.altura = altura
        self.peso = peso
