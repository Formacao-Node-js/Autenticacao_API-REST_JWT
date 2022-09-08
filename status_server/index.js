const status_200 = [
  [
    {
      Payload: "Usuario criado com sucesso.",
    },
  ],
  [
    {
      Payload: "Usuário atualizado com sucesso.",
    },
  ],
  [
    {
      Payload: "Usário deletado com sucesso.",
    },
  ],
];

const status_400 = {
  Err: "O id passado é do tipo texto.",
  Payload: "O id deve conter apenas número(s).",
};

const status_401 = {
  Err: "O email ou senha não encontrado no sistema.",
  Payload: "Tente novamente com as credencias corretas.",
};

const status_404 = {
  Err: "O id inserido não foi encontrado.",
  Payload: "Insira um id válido para a busca.",
};

module.exports = { status_200, status_400, status_401, status_404 };
