import fs from "node:fs/promises";

const DATABASE_PATH = new URL("db.json", import.meta.url);

export class Database {
  #database = {};

  constructor() {
    fs.readFile(DATABASE_PATH, "utf8")
      .then((data) => {
        this.#database = JSON.parse(data);
      })
      .catch(() => {
        this.#persist();
      });
  }

  #persist() {
    fs.writeFile(DATABASE_PATH, JSON.stringify(this.#database));
  }

  insert(table, data) {
    if (Array.isArray(this.#database[table])) {
      this.#database[table].push(data);
    } else {
      this.#database[table] = [data];
    }

    this.#persist();
  }

  select(table, filters) {
    let data = this.#database[table] ?? null;

    if (filters) {
      data = data.filter((row) => {
        return Object.entries(filters).some(([key, value]) => {
          return row[key].toLowerCase().includes(value.toLowerCase());
        });
      });
    }

    return data;
  }

  update(table, id, data) {
    //o uso do método findIndex para encontrar o registro desejado
    const rowIndex = this.#database[table].findIndex((row) => {
      return row.id === id;
    });
    // console.log(rowIndex);

    if (rowIndex > -1) {
      // sobrescrever propriedades existentes
      this.#database[table][rowIndex] = {
        ...this.#database[table][rowIndex], // despeja os dados ja existentes
        ...data, // sobrescreve
      };
    }

    this.#persist(); // para salvar no banco de dados
  }
}
