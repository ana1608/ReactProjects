const config = require("./dbConfig");
sql = require("mssql");

const addUser = async (user) => {
  try {
    let pool = await sql.connect(config);
    let users = await pool
      .request()
      .query(
        `INSERT INTO Users VALUES ('${user.nameC}','${user.email}','${user.password}')`
      );
    return users;
  } catch (error) {}
};

const getUsers = async () => {
  try {
    let pool = await sql.connect(config);
    let users = await pool.request().query(`SELECT * from Users`);
    return users;
  } catch (error) {}
};

const getUserbyEmail = async (user) => {
  try {
    let pool = await sql.connect(config);
    let users = await pool
      .request()
      .query(`SELECT * from Users WHERE Email = '${user.email}'`);

    return users;
  } catch (error) {}
};

const getUserbyid = async (user) => {
  try {
    let pool = await sql.connect(config);
    let users = await pool
      .request()
      .query(`SELECT * from Users WHERE id = '${user.id}'`);
    return users;
  } catch (error) {}
};

const getUserbyemailandpass = async (user) => {
  try {
    let pool = await sql.connect(config);
    let users = await pool
      .request()
      .query(
        `SELECT * from Users WHERE email = '${user.email}' AND senha = '${user.password}'`
      );
    return users;
  } catch (error) {}
};

module.exports = {
  addUser,
  getUsers,
  getUserbyEmail,
  getUserbyid,
  getUserbyemailandpass,
};
