# Take Blip
## _Teste da Take Blip_

## Solicitado:

- Criação de API intermediária que consuma a API do github e retorne dados específicos para serem consumidos na aplicação desenvolvida na plataforma Blip
- Criar um chatbot de acordo com o fluxo conversacional enviado
- Exportar o fluxo do chatbot para avaliação junto com a API criada

# Descrição do projeto

## Criação do chatbot
Primeiramente crie uma conta no nosso portal e depois crie um chatbot usando a opção "Criar do zero".

Com o auxílio do material de apoio você deve desenvolver o chatbot seguindo o fluxo conversacional e fazer exatamente como foi solicitado. Nesse fluxo estão as interações e mensagens que seu chatbot deve exibir.

É importante que antes de iniciar qualquer parte você acesse o fluxo proposto para entender o que esperamos que o seu chatbot faça.

Outro ponto importante é acessar os materiais de apoio e estudar os conteúdos disponibilizados para entender como você fará o seu chatbot.

No fluxo conversacional existe um componente de carrossel com informações sobre o Desafio, ao clicar nessa opção o chatbot deve listar informações sobre os 5 repositórios de linguagem C# mais antigos da Take, ordenados de forma crescente por data de criação.

Para isso será necessário que você crie uma API que realize a integração com a API pública do GitHub.

A imagem de cada card do carrossel deve ser o avatar da Take no GitHub. O título de cada card deve ser o nome completo do repositório, e o subtítulo deve ser a descrição do repositório. Os cards não devem ter nenhum botão.

IMPORTANTE -> Não tentar chamar a API do git direto pelo Builder (plataforma da Take). A chamada da API do git tem que partir da API que você irá construir.

## Criação da API
Para criar a API solicitada, você pode usar qualquer uma das linguagens a seguir:
- C#
- Javascript.

Para publicar a sua API, você pode utilizar qualquer serviço disponível no mercado hoje. Alguns sites que oferecem esse serviço são: Azure, Google, Amazon, Heroku, etc.

## Tecnologias utilizadas
- Node
- Express
- Heroku (deploy)

## Como utilizar

- Realizar o download do arquivo JSON que se encontra na pasta Flow (dentro de challenge) e importar o fluxo em seu bot criado no Builder.

Link da API https://take-chatbot.herokuapp.com/
