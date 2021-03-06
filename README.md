# Teste-Devnology
Repositorio criado com o intuito de realizar o teste para trainee da Devnology

## Teste

Antes de mais nada, crie um repositório no git e cole o conteúdo desse texto no readme.

Você precisará construir um sistema para uma agência de veículos, ele será composto por uma api e um frontend (Desktop ou Mobile).

Sinta-se à vontade para usar a linguagem que achar melhor e pode usar templates prontos, frameworks e/ou outras coisas que possam facilitar a sua vida.

Crie um arquivo readme falando um pouco sobre quais as decisões que você tomou para a resolução do exercício, e, caso não tenha feito algo, explique o motivo. Também informe os passos para fazer sua aplicação rodar, e caso tenha, o processo de deploy.

Precisamos que nosso sistema seja capaz de:

- Cadastrar a compra de um veículo, modelo, marca, ano de fabricação, placa, cor, chassi, data da compra e valor da compra.

- Registrar a venda de um veículo, com data da venda, valor da venda e comissão do vendedor (10% sobre o lucro da venda).

- Deverá ser possível listar todos os veículos, veículos disponíveis e histórico de veículos vendidos.

- Listar o valor total em compras e vendas, lucro/prejuízo do mês e o valor pago em comissões.

Caso queira criar mais funcionalidades fique à vontade, apenas se lembre de mencionar sobre elas no readme.

## Primeiros passos

Decidi começar por analisar a estrutura que seria utilizada no banco de dados para salvar as informações acabei decidindo seguir a seguinte estrutura

### Veículos
- Id
- Modelo
- Marca
- Ano de Fabricação
- Placa
- Cor
- Chassi
- Data da compra
- Valor da compra

### Veículos Vendidos
- Id
- Id Veiculo
- Data da venda
- Valor venda
- Comissão do vendedor

Após isso comecei a criar uma estrutura dos endpoints que seriam necessarios para a construição da api o resultado foi o seguinte

#### Tela Financeiro
- [x] Um get para o historico de compra e venda
- [x] Um get para o lucro/prejuizo da empresa por mês
- [x] Um get para listagem das comissões por mês



- [x] Um get, post, put e delete para o gerenciamento de Veiculos
- [x] Um post para criar uma venda
- [x] Um get para Listagem de veiculos vendidos
- [x] Um get para Listagem dos veiculos não vendidos

## Próximos passos foi criados algumas telas de referencia para o projeto

<img src="/images-readme/compras.jpeg" />

<img src="/images-readme/compraveiculo.jpeg" />

<img src="/images-readme/vendas.jpeg" />

<img src="/images-readme/vendaveiculo.jpeg" />

<img src="/images-readme/financeiro.jpeg" />

<img src="/images-readme/todosveiculos.jpeg" />


## Próxima etapa

- Desenvolvimento do backend da aplicação

### Para rodar o backend da aplicação use os seguintes comandos:
Com o repositorio ja clonado e o node instalado na sua maquina
- Abra o terminal no repositorio clonado
- Execute o comando cd backend
- npm install ou yarn install
- npm run dev ou yarn dev

Nota sobre o Backend

Na raiz do projeto tem uma collection com todas as rotas criadas
Após startar o servidor a collection poderá ser utilizada para testar as rotas

## Após isso foi criado o frontend

Foi desenvolvido o frontend da aplicação e ja integrando com o backend

### Para rodar o backend da aplicação use os seguintes comandos:
Com o repositorio ja clonado e o backend rodando na sua maquina
- Abra o terminal no repositorio clonado
- Execute o comando cd frontend
- npm install ou yarn install
- npm start ou yarn start




