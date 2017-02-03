exports.up = function(knex, Promise) {
	return Promise.all([
		knex.schema.createTable("cards", function(table) {
			table.increments("id").primary();
			table.enum("color", ["white", "black"]);
			table.enum("status", ["submitted", "approved"]);
			table.json("votes")
			table.string("email")
		})
	]);
};

exports.down = function(knex, Promise) {
	return Promise.all([
		knex.schema.dropTable("cards")
	]);
};
