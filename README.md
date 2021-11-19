# Projeto Final API RESTful - Loja Esportiva

## Rotas: Roupas, Calçados, Suplementos, Equipamentos e Acessórios

API com rotas e banco de dados distintos, através do VS Code.

**** Existem os seguintes Endpoints por rota:

[GET] Leitura de todos os itens
[GET] Leitura de itens individuais (por ID)
[POST] Cadastro
[PUT] Edição de item por ID
[DELETE] Exclusão de item por ID

## **** Endpoints - Roupas ****

[GET] Leitura de todos os itens
http://localhost:3000/roupas/listall

[GET] Leitura de itens individuais (por ID)
http://localhost:3000/roupas/listid/id

[POST] Cadastro
http://localhost:3000/roupas/add

Todos os campos são obrigatórios:
{ "tipo": "String", 
  "genero": "String",
  "marca": "String", 
  "tamanho": "String",
  "cor": "String"
}

[PUT] Edição de item por ID
http://localhost:3000/roupas/update/id

Todos os campos são obrigatórios:
{ "tipo": "String", 
  "genero": "String",
  "marca": "String", 
  "tamanho": "String",
  "cor": "String"
}

[DELETE] Exclusão de item por ID
http://localhost:3000/roupas/delete/id

//////////////////////////////////////////////////////////////////////////
