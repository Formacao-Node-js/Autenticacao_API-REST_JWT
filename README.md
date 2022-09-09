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
        "id": "b3151e10-68a1-4bbb-8408-d4f739d9cd59",
        "email": "vini@javascript.com"
    },
    "response": [
        {
            "id": "b3151e10-68a1-4bbb-8408-d4f739d9cd59",
            "email": "vini@javascript.com",
            "password": "$2a$10$2aZatid13v517xzZ1pICu.k/EMV0yuSxFFst0saOg5bJL2wERt3LO",
            "username": "Vinicius Soares",
            "createdAt": "2022-09-09T15:09:47.000Z",
            "updatedAt": "2022-09-09T15:09:47.000Z"
        },
        {
            "id": "c27cac9b-2b82-45b6-9a72-51457e2b46ae",
            "email": "bill@javascript.com",
            "password": "$2a$10$.w.vq09UDBkubp.2CP2lXO4VDQeWiS3nLzL7NXSGsCaQXgBw1Z1W.",
            "username": "Bill Notorious",
            "createdAt": "2022-09-09T02:38:28.000Z",
            "updatedAt": "2022-09-09T02:38:28.000Z"
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
        "id": "b3151e10-68a1-4bbb-8408-d4f739d9cd59",
        "email": "vini@javascript.com"
    },
    "response": {
        "id": "b3151e10-68a1-4bbb-8408-d4f739d9cd59",
        "email": "vini@javascript.com",
        "password": "$2a$10$2aZatid13v517xzZ1pICu.k/EMV0yuSxFFst0saOg5bJL2wERt3LO",
        "username": "Vinicius Soares",
        "createdAt": "2022-09-09T15:09:47.000Z",
        "updatedAt": "2022-09-09T15:09:47.000Z"
    }
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
