import { create } from "../controllers/tickets/create.js";
import { index } from "../controllers/tickets/index.js";
import { updtate } from "../controllers/tickets/update.js";
import { updateStatus } from "../controllers/tickets/updateStatus.js";

export const tickets = [
  {
    method: "POST",
    path: "/tickets",
    controller: create,
  },
  {
    method: "GET",
    path: "/tickets",
    controller: index,
  },
  {
    method: "PUT",
    path: "/tickets/:id",
    controller: updtate,
  },
  {
    method: "PATCH",
    path: "/tickets/:id/closed",
    controller: updateStatus,
  },
];
