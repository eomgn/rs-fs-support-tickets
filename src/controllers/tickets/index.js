/*
    CREATE - criar
    INDEX - listar todos os items
    UPDATE - atualizar
    REMOVE - remover
    SHOW - listar único item
 */
let route = "tickets";

export function index({ request, response, database }) {
  const { status } = request.query; // desestruturação, capturando o nome do parametro passado
  // console.log(status);

  const filters = status ? { status } : null;

  let select = database.select(route, filters);

  return response.writeHead(200).end(JSON.stringify(select));
}
