# API de Usuários / CRUD completo com JWT e Middleware

## Endpoints

### Porta:

```
localhost:2632
```

### POST /auth

Endpoint primordial, utilizado para fazer o login no sistema, sem passar por ele você será incapaz de fazer qualquer outra requisição.

#### Parâmertos

email: e-mail do usuário cadastrado no sistema.
password: senha do usuário cadastrado no sistema

exemplo:

```
{
    "email": "vini@javascript.com",
    "password": "1234"
}
```

#### Respostas do servidor

##### ° OK! 200.

exemplo:

```
{
    "Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZpbmlAamF2YXNjcmlwdC5jb20iLCJpZCI6IjIyMjlmOTVhLTljMTktNDkzOS05NDhjLWRkYmQ2OGZkNTMxMyIsImlhdCI6MTY2MjY3NDU2NSwiZXhwIjoxNjYyODQ3MzY1fQ.mMkk65CWUBT-T0bxXlTajBuXTVsqhqQG7DN5VKF-kJk"
}
```

##### ° Não autorizado! 401.

exemplo:

```
[
    {
        "err": "O email ou senha não encontrado no sistema.",
        "payload": "Tente novamente com as credencias corretas."
    }
]
```

##### ° Erro interno do servidor! 500.

exemplo:

```
{
    "status_500": {
        err: "Houve uma falha interna no servidor.",
        payload: "Tente novamente",
    }
}
```

### GET /findall

Endpoint responsável por buscar todos os usuários cadastrados no banco de dados

#### Parâmetros

Nenhum.

#### Respostas do servidor

##### ° OK! 200.

exemplo:

```
{
    "author": {
        "id": "2229f95a-9c19-4939-948c-ddbd68fd5313",
        "email": "vini@javascript.com"
    },
    "response": [
        {
            "id": "8e5b9a36-a231-4926-a99b-dd31b75200bf",
            "email": "kyua@javascript.com",
            "password": "123",
            "username": "Kyua Kizuguchi",
            "createdAt": "2022-09-08T20:02:19.000Z",
            "updatedAt": "2022-09-08T20:02:19.000Z"
        },
        {
            "id": "ad6b2fa9-a6b4-463e-9691-1e369cbd1859",
            "email": "kyua@javascript.com",
            "password": "123",
            "username": "Kyua Kizuguchi",
            "createdAt": "2022-09-08T17:41:25.000Z",
            "updatedAt": "2022-09-08T17:41:25.000Z"
        },
        {
            "id": "bed8a40a-6301-457b-a1b3-a63a1fdb2d69",
            "email": "kyula@javascript.com",
            "password": "123",
            "username": "Kyula Zobal",
            "createdAt": "2022-09-08T17:40:19.000Z",
            "updatedAt": "2022-09-08T17:40:19.000Z"
        },
        {
            "id": "6c6ce246-1e26-43d2-bcde-8f5621b57801",
            "email": "kyulla@javascript.com",
            "password": "123",
            "username": "Kyulla Eliotrope",
            "createdAt": "2022-09-08T17:40:05.000Z",
            "updatedAt": "2022-09-08T17:40:05.000Z"
        },
        {
            "id": "2229f95a-9c19-4939-948c-ddbd68fd5313",
            "email": "vini@javascript.com",
            "password": "1234",
            "username": "Vinícius S. Pinto",
            "createdAt": "2022-09-05T23:25:20.000Z",
            "updatedAt": "2022-09-06T20:34:21.000Z"
        }
    ]
}
```

##### ° Não autorizado! 401

exemplo:

```
{
    "err": "Não autorizado",
    "payload": "utilize um token de acesso válido"
}
```

### GET /findone/:id

Endpoint responsável por trazer um determinado usuário pelo o ID.

#### Parâmetros

ID do usuário

#### Resposta do Servidor

##### ° OK! 200.

exemplo:

```
{
    "author": {
        "id": "2229f95a-9c19-4939-948c-ddbd68fd5313",
        "email": "vini@javascript.com"
    },
    "response": [
        {
            "id": "2229f95a-9c19-4939-948c-ddbd68fd5313",
            "email": "vini@javascript.com",
            "password": "1234",
            "username": "Vinícius S. Pinto",
            "createdAt": "2022-09-05T23:25:20.000Z",
            "updatedAt": "2022-09-06T20:34:21.000Z"
        }
    ]
}
```

##### ° Não autorizado! 401.

exemplo:

```
{
    "err": "Não autorizado",
    "payload": "utilize um token de acesso válido"
}
```

##### °Não encontrado! 404.

exemplo:

```
{
    "status_404": {
        "err": "O id inserido não foi encontrado.",
        "payload": "Insira um id válido para a busca."
    }
}
```
