from services.services import incluir_pessoa, alterar_pessoa, excluir_pessoa_por_id, buscar_pessoa_por_id, listar_todas_pessoas, calcular_peso_ideal_pessoa
from DTO.dto import PessoaCreateUpdateDTO

def criar_pessoa_controller(request):
    dados_formulario = request.POST

    pessoa_dto = PessoaCreateUpdateDTO(
        nome=dados_formulario['nome'],
        data_nasc=dados_formulario['data_nasc'],
        cpf=dados_formulario['cpf'],
        sexo=dados_formulario['sexo'],
        altura=float(dados_formulario['altura']),
        peso=float(dados_formulario['peso'])
    )

    incluir_pessoa(pessoa_dto)

    return HttpResponse("Pessoa criada com sucesso!")