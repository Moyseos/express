const sql = require("../util/sql");
const Sequelize = require("sequelize");

module.exports = sql.define("post", {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	title: {
		type: Sequelize.STRING(155),
		notNull: true,
	},
	article: {
		type: Sequelize.STRING(5000),
		notNull: true,
	},
});
