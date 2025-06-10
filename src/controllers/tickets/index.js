/*
    CREATE - criar
    INDEX - listar todos os items
    UPDATE - atualizar
    REMOVE - remover
    SHOW - listar único item
 */
let route = "tickets";

export function index({ request, response, database }) {
  let select = database.select(route);

  return response.writeHead(200).end(JSON.stringify(select));
}
