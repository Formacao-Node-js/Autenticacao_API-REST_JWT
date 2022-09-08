# API / CRUD completo com JWT e Middleware

## Endpoints

### Porta:
```
localhost:2632
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


### GET /findone/
