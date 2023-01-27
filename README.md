## Financial Transactions

## Status

<p align="justify"> Em andamento.. </p>

## Tabela de Conteúdos
  - Front End
    - Página principal
      - Formulário para envio de arquivos
  - Back end
    - Model da aplicação
    - Serializer da aplicação
    - Views da aplicação
    - Rotas da aplicação

## Descrição do Projeto

<p align="justify">Uma interface web que normaliza os dados e amazena-os em um banco de dados relacional e forneça essa informações para o usuário.</p>

## Dependências e Libs Utilizadas
  - Python
  - Djangorestframework
  - Python-dotenv
  - React
  - Axios

## Como rodar a aplicação provisóriamente
    1. Clone o repositório
    2. Use o comando "cd financial-transactions"
    3. Crie um ambiente virtual através do comando "python -m venv venv"
    4. Rode o comando ".\venv\Scripts\activate" para ativar o ambiente virtual
    5. Instale as dependências do projeto utilizando o comando "pip install -r requirements.txt"
    6. Apague a parte ".example" do dotenv e configure as variaveis de ambiente
    7. Execute o comando "python manage.py makemigrations"
    8. Execute o comando "python manage.py migrate"
    9. Execute o comando "python manage.py runserver"
    10. Acesse o link: "localhost:8000/api/transactions" no seu navegador
    11. Para persistir os dados no banco de dados utilize o formulário na parte inferior da interface do Django.
        - Exemplo de Data: {
            "id": 5,
            "tipo": 1,
            "descricao": "Débito",
            "natureza": "Entrada",
            "sinal": "+",
            "data": "2019-03-01",
            "valor": 62.71,
            "cpf": "00000000000",
            "cartao": "1111****2222",
            "hora": "14:34:00",
            "dono_loja": "JOÃO MACEDO",
            "nome_loja": "BAR DO JOÃO"
        }
    12. Para ler os dados já persistidos no banco utilize o botão "GET" na parte superior.

## Como rodar a aplicação Full-Stack(Em desenvolvimento)
   - Em Desenvolvimento.
   - Idéia: Formulário que recebe um arquivo .txt, através desses dados, fazer a requisição no back-end e imprimir os dados para o usuário.
   - Idéia de código: 
      1. Transformar o arquivo txt em uma lista

      2. Criar uma função que vai separar os items da lista e atribuir a um objeto, como essa:

        const ridingObj = (item) => {
        obj = {
            tipo: item[0],
            data: slice[2-9],
            valor: slice[10-19],
            cpf: slice[20-30], 
            cartao: slice[31-42],
            hora: slice[43-48],
            dono_loja: slice[49-62],
            nome_loja: slice[63-81]
        }

        api.post("url", obj).then().catch()
        }
  

      3. Fazer um loop da lista, e chamar a função para cada item da lista algo do tipo:
        lista.map((elem) => {
        ridingObj(elem)
        })

    Ainda não foi desenvolvido uma maneira de manipular os dados .txt

## Próximas features
    - Desenvolvimento completo do front-end
    - Integração do front-end com o back-end
  
# Contato
    Guilherme K Hirata - <a href="https://www.linkedin.com/in/guilhermekhirata/" target="_blank">Linkedin</a> <br>
    Email - guilhermekhirata@hotmail.com
   
  
  
