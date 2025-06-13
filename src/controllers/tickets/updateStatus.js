export function updateStatus({ request, response, database }) {
  const { id } = request.params;

  // incluindo informacao de solucao no database
  const { solution } = request.body;
  // console.log(solution);

  database.update("tickets", id, { status: "closed", solution });

  return response.writeHead(200).end();
}
