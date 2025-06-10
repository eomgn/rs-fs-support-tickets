export async function jsonHandler(request, response) {
  const buffers = [];

  for await (const chunk of request) {
    buffers.push(chunk);
  }

  try {
    // cria um corpo para a requisição: body - transformando em um JSON
    request.body = JSON.parse(Buffer.concat(buffers).toString());
  } catch (error) {
    request.body = null;
  }

  // cabeçalho para definir tipo do conteúdo
  response.setHeader("Content-Type", "application/json");
}
