const database = require("./database-connection");

module.exports = {
  list() {
    return database("poemz").select();
  },
  read(id) {
    return database("test")
      .select()
      .where("id", id)
      .first();
  },
  create(resolution) {
    return database("test")
      .insert(resolution)
      .returning("*")
      .then(record => record[0]);
  },
  update(id, resolution) {
    return database("test")
      .update(resolution)
      .where("id", id)
      .returning("*")
      .then(record => record);
  },
  delete(id) {
    return database("test")
      .delete()
      .where("id", id);
  }
};
