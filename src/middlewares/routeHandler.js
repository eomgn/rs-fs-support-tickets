import { routes } from "../routes/index.js";
import { Database } from "../database/database.js";
import { extractQueryParams } from "../utils/extractQueryParams.js";

const database = new Database();

export function routeHandler(request, response) {
  const route = routes.find((route) => {
    return route.method === request.method && route.path.test(request.url);
  });

  if (route) {
    const routeParams = request.url.match(route.path);
    // console.log(routeParams); // verificando os parametros passandos para a rota

    // capturando os grupos de paramtros passados na rota
    const { query } = routeParams.groups;
    // console.log(extractQueryParams(query));

    request.query = query ? extractQueryParams(query) : {}; // criando um novo 'metodo' em request

    return route.controller({ request, response, database });
  }

  response.writeHead(404).end("not found");
}
