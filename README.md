# Projeto Final API RESTful - Loja Esportiva

## Rotas: Roupas, Calçados, Suplementos, Equipamentos e Acessórios

##### Integração Frontend + Backend + Mongo Atlas + Heroku.

API com rotas e banco de dados distintos, através do VS Code.

**** Existem os seguintes Endpoints por rota:

[GET] Leitura de todos os itens
[GET] Leitura de itens individuais (por ID)
[POST] Cadastro
[PUT] Edição de item por ID
[DELETE] Exclusão de item por ID

###  Url_heroku = "https://lojasesportivas.herokuapp.com"

## **** Endpoints - Roupas ****

[GET] Leitura de todos os itens
Url_heroku/roupas/listall

[GET] Leitura de itens individuais (por ID)
Url_heroku/roupas/listid/id

[POST] Cadastro
Url_heroku/roupas/add


Todos os campos são obrigatórios:
```

{
  "tipo": "String", 
  "genero": "String",
  "marca": "String", 
  "tamanho": "String",
  "cor": "String"
}

```

[PUT] Edição de item por ID
Url_heroku/roupas/update/id


Todos os campos são obrigatórios:
```

{ 
  "tipo": "String", 
  "genero": "String",
  "marca": "String", 
  "tamanho": "String",
  "cor": "String"
}

```
[DELETE] Exclusão de item por ID
Url_heroku/roupas/delete/id

## **** Endpoints - Calçados ****

[GET] Leitura de todos os itens
Url_heroku/calcados/listall

[GET] Leitura de itens individuais (por ID)
Url_heroku/calcados/listid/id

[POST] Cadastro
Url_heroku/calcados/add


Todos os campos são obrigatórios:
```

{
  "tipo": "String", 
  "genero": "String",
  "marca": "String", 
  "tamanho": "String",
  "cor": "String"
}

```
[PUT] Edição de item por ID
Url_heroku/calcados/update/id


Todos os campos são obrigatórios:
```

{ 
  "tipo": "String", 
  "genero": "String",
  "marca": "String", 
  "tamanho": "String",
  "cor": "String"
}

```

[DELETE] Exclusão de item por ID
Url_heroku/calcados/delete/id

## **** Endpoints - Suplementos ****

[GET] Leitura de todos os itens
Url_heroku/suplementos/listall

[GET] Leitura de itens individuais (por ID)
Url_heroku/suplementos/listid/id

[POST] Cadastro
Url_heroku/suplementos/add


Todos os campos são obrigatórios:
```

{ 
  "produto": "String", 
  "marca": "String",
  "caracteristicas": "String", 
  "peso": "Number",
  "volume": "Number",
  "valor": "Number"
}

```
[PUT] Edição de item por ID
Url_heroku/suplementos/update/id


Todos os campos são obrigatórios:
```

{ 
  "produto": "String", 
  "marca": "String",
  "caracteristicas": "String", 
  "peso": "Number",
  "volume": "Number",
  "valor": "Number"
}

```

[DELETE] Exclusão de item por ID
Url_heroku/suplementos/delete/id

## **** Endpoints - Equipamentos ****

[GET] Leitura de todos os itens
Url_heroku/equipamentos/listall

[GET] Leitura de itens individuais (por ID)
Url_heroku/equipamentos/listid/id

[POST] Cadastro
Url_heroku/equipamentos/add


Todos os campos são obrigatórios:
```

{ 
  "produto": "String", 
  "marca": "String",
  "caracteristicas": "String", 
  "peso": "Number",
  "volume": "Number",
  "valor": "Number"
}

```

[PUT] Edição de item por ID
Url_heroku/equipamentos/update/id


Todos os campos são obrigatórios:
```

{ 
  "produto": "String", 
  "marca": "String",
  "caracteristicas": "String", 
  "peso": "Number",
  "volume": "Number",
  "valor": "Number"
}

```

[DELETE] Exclusão de item por ID
Url_heroku/equipamentos/delete/id

## **** Endpoints - Acessórios ****

[GET] Leitura de todos os itens
Url_heroku/acessorios/listall

[GET] Leitura de itens individuais (por ID)
Url_heroku/acessorios/listid/id

[POST] Cadastro
Url_heroku/acessorios/add


Todos os campos são obrigatórios:
```

{ 
  "produto": "String", 
  "marca": "String",
  "caracteristicas": "String", 
  "peso": "Number",
  "volume": "Number",
  "valor": "Number"
}

```

[PUT] Edição de item por ID
Url_heroku/acessorios/update/id


Todos os campos são obrigatórios:
```

{ 
  "produto": "String", 
  "marca": "String",
  "caracteristicas": "String", 
  "peso": "Number",
  "volume": "Number",
  "valor": "Number"
}

```

[DELETE] Exclusão de item por ID
```
Url_heroku/acessorios/delete/id
```
### Projeto configurado e conectado ao Mongo Atlas.

### Deploy do projeto no Heroku.
