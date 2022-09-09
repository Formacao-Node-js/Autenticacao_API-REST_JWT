# API-REST + HATEOAS de Usuários
API criada com o intuito de praticar, fixar e melhorar minhas habilidades com Node.js / CRUD /  Express / JWT / Middleware / bcrypt / Sequelize / UUID

## Endpoints

### Porta:

```
localhost:2632
```
### Nome do Banco de Dados no MySQL
```
usuarios_senhas
```
### POST /auth

Endpoint primordial, utilizado para fazer o login no sistema, sem passar por ele você será incapaz de fazer qualquer outra requisição.

#### Parâmetros

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
    "Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZpbmlAamF2YXNjcmlwdC5jb20iLCJpZCI6ImIzMTUxZTEwLTY4YTEtNGJiYi04NDA4LWQ0ZjczOWQ5Y2Q1OSIsImlhdCI6MTY2Mjc0MjI3MiwiZXhwIjoxNjYyOTE1MDcyfQ.lrgYgZG0sBxnGjZvcR7HWinbq6a8d6GrEIaFgEXMU1E",
    "_link": [
        {
            "href": "http://localhost:2632/findall",
            "rel": "get_all_user",
            "type": "GET"
        },
        {
            "href": "http://localhost:2632/findone/b3151e10-68a1-4bbb-8408-d4f739d9cd59",
            "rel": "self_self_user",
            "type": "GET"
        },
        {
            "href": "http://localhost:2632/update/b3151e10-68a1-4bbb-8408-d4f739d9cd59",
            "rel": "update_self_user",
            "type": "PUT"
        },
        {
            "href": "http://localhost:2632/delete/b3151e10-68a1-4bbb-8408-d4f739d9cd59",
            "rel": "delete",
            "type": "DELETE"
        }
    ]
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
    "server": {
        "id": "b3151e10-68a1-4bbb-8408-d4f739d9cd59",
        "email": "vini@javascript.com",
        "password": "$2a$10$2aZatid13v517xzZ1pICu.k/EMV0yuSxFFst0saOg5bJL2wERt3LO",
        "username": "Vinicius Soares",
        "createdAt": "2022-09-09T15:09:47.000Z",
        "updatedAt": "2022-09-09T15:09:47.000Z"
    },
    "_link": [
        {
            "href": "http://localhost:2632/findall",
            "rel": "get_all_user",
            "type": "GET"
        },
        {
            "href": "http://localhost:2632/update/b3151e10-68a1-4bbb-8408-d4f739d9cd59",
            "rel": "update_self_user",
            "type": "PUT"
        },
        {
            "href": "http://localhost:2632/delete/b3151e10-68a1-4bbb-8408-d4f739d9cd59",
            "rel": "delete_self_user",
            "type": "DELETE"
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
