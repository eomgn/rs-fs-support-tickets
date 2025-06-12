export function updtate({ request, response, database }) {
  // rota (tabela)
  const table = "tickets";

  // desestruturando para capturar o id passado em params
  const { id } = request.params;

  // capturando as propriedades do corpo da requisicao que então tem o id do parametro passado
  const { equipament, description } = request.body;

  database.update(table, id, {
    equipament,
    description,
    udpated_at: new Date(),
  });
  response.end(equipament);
}
