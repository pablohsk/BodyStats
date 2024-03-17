## Gerenciador de Pessoas - README
Este projeto consiste em um sistema de gerenciamento de pessoas, desenvolvido com React no front-end e Django no back-end. Abaixo, você encontrará detalhes sobre a estrutura do projeto, suas funcionalidades, configuração e como executar localmente.

<details>
  <summary><b>Estrutura do Projeto</b></summary>
  <ul>
    <li>
      <details>
        <summary><b>BodyStats</b></summary>
        <ul>
          <li><code>asgi.py</code></li>
          <li><code>settings.py</code></li>
          <li><code>urls.py</code></li>
          <li><code>wsgi.py</code></li>
          <li>
            <details>
              <summary><b>client</b></summary>
              <ul>
                <li>
                  <details>
                    <summary><b>src</b></summary>
                    <ul>
                      <li>
                        <details>
                          <summary><b>components</b></summary>
                          <ul>
                            <li><code>PessoaDetails.js</code></li>
                            <li><code>PessoaForm.js</code></li>
                            <li><code>PessoaList.js</code></li>
                          </ul>
                        </details>
                      </li>
                      <li><code>App.js</code></li>
                      <li><code>index.js</code></li>
                      <!-- ... -->
                    </ul>
                  </details>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary><b>pessoa</b></summary>
              <ul>
                <li>
                  <details>
                    <summary><b>controller</b></summary>
                    <ul>
                      <li><code>controller.py</code></li>
                    </ul>
                  </details>
                </li>
                <li>
                  <details>
                    <summary><b>DTO</b></summary>
                    <ul>
                      <li><code>dto.py</code></li>
                    </ul>
                  </details>
                </li>
                <li>
                  <details>
                    <summary><b>models</b></summary>
                    <ul>
                      <li><code>models.py</code></li>
                    </ul>
                  </details>
                </li>
                <li>
                  <details>
                    <summary><b>services</b></summary>
                    <ul>
                      <li><code>services.py</code></li>
                    </ul>
                  </details>
                </li>
                <li>
                  <details>
                    <summary><b>tasks</b></summary>
                    <ul>
                      <li><code>tasks.py</code></li>
                    </ul>
                  </details>
                </li>
                <li><code>admin.py</code></li>
                <li><code>apps.py</code></li>
              </ul>
            </details>
          </li>
          <li><code>manage.py</code></li>
          <li><code>README.md</code></li>
        </ul>
      </details>
    </li>
    <li><code>node_modules</code></li>
    <li><code>package-lock.json</code></li>
    <li><code>package.json</code></li>
  </ul>
</details>

## Funcionalidades
O sistema oferece diversas funcionalidades tanto no front-end quanto no back-end. Abaixo estão as principais:

### Front-end (React)
#### 1. Listagem de Pessoas
O front-end exibe uma lista de pessoas cadastradas no sistema. Ele permite buscar pessoas por nome e visualizar detalhes individuais de cada pessoa.

#### 2. Adição de Nova Pessoa
O front-end oferece um formulário para adicionar uma nova pessoa ao sistema. O usuário pode inserir os dados da pessoa, como nome, data de nascimento, CPF, sexo, altura e peso.

#### 3. Detalhes da Pessoa
Ao clicar em uma pessoa da lista, o front-end exibe os detalhes dessa pessoa, incluindo nome, email, CPF, sexo, altura e peso.

### Back-end (Django)
O back-end fornece uma API RESTful para interação com o banco de dados PostgreSQL e outras funcionalidades.

## Configuração
### 1. Instalação de Dependências: - Execute npm install no diretório my-node-project/client. - Execute pip install -r requirements.txt no diretório raiz do projeto Django.
### 2. Configuração do Banco de Dados: - Certifique-se de ter um banco de dados PostgreSQL em execução. - Edite o arquivo settings.py do Django com as configurações do seu banco de dados.
### 3. Execução do Front-end: - No diretório my-node-project/client, execute npm start para iniciar a aplicação React.
### 4. Execução do Back-end: - No diretório raiz do projeto Django, execute python manage.py runserver para iniciar o servidor Django.
### 5. Acesso à Aplicação: - Abra o navegador e acesse http://localhost:3000 para utilizar a aplicação React.

## Desenvolvedor

Este projeto foi desenvolvido por Pablo Fidelis Dias. Para mais detalhes, consulte o link: https://github.com/pablohsk/BodyStats.

Qualquer dúvida ou sugestão, sinta-se à vontade para entrar em contato. Obrigado por utilizar o Gerenciador de Pessoas!

Se precisar de mais alguma coisa, estou à disposição para ajudar!


  # # # # # # # # # #  
#   #   #   #   #   #  #
#   #   #   #   #   #  #
  #         #         #
    #  Me contrata! #
      #           #
        #       #
          #   #
            #
#   #   #   #   #   #   #   #   #   #   #
#   #   #   #   #   #   #   #   #   #   #
#   #   #   #   #   #   #   #   #   #   #
