const status_200 = [
  [
    {
      payload: "Usuario criado com sucesso.",
    },
  ],
  [
    {
      payload: "Usuário atualizado com sucesso.",
    },
  ],
  [
    {
      payload: "Usário deletado com sucesso.",
    },
  ],
];

const status_400 = {
  err: "O id passado é do tipo texto.",
  payload: "O id deve conter apenas número(s).",
};

const status_401 = {
  err: "O email ou senha não encontrado no sistema.",
  payload: "Tente novamente com as credencias corretas.",
};

const status_404 = {
  err: "O id inserido não foi encontrado.",
  payload: "Insira um id válido para a busca.",
};

const status_500 = {
  err: "Houve uma falha interna no servidor.",
  payload: "Tente novamente",
};

module.exports = { status_200, status_400, status_401, status_404, status_500 };
