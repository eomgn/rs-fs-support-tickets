import { randomUUID } from "node:crypto";

export function create({ request, response, database }) {
  const { equipament, description, user_name } = request.body;

  const ticket = {
    id: randomUUID(),
    equipament,
    description,
    user_name,
    status: "open",
    created_at: new Date(),
    udpated_at: new Date(),
  };

  database.insert("tickets", ticket);

  return response.writeHead(201).end(JSON.stringify(ticket));
}
