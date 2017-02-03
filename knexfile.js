// Update with your config settings.

module.exports = {
	development: {
		client: 'pg',
		connection: "postgres://localhost/carbs-against-hummus"
	},
	production: {
		client: 'pg',
		connection: process.env.DATABASE_URL
	}
};
