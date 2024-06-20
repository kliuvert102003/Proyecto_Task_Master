import { Sequelize } from "sequelize";

const db = new Sequelize("railway", "root", "UOZRCPjHBgRBIHGkNmaToUjQTknsloci", {
  host: "monorail.proxy.rlwy.net",
  dialect: "mysql",
  port: 58127,
});

export default db;
