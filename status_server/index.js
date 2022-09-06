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
];

const status_400 = {
  err: "O id passado é do tipo texto.",
  Payload: "O id deve conter apenas número(s).",
};

const status_404 = {
  err: "O id inserido não foi encontrado.",
  Payload: "Insira um id válido para a busca.",
};

const status_203 = {
  oi: "oi",
};

module.exports = { status_200, status_400, status_404, status_203 };
