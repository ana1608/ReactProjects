const config = {
  user: "Userlogin",
  password: "1234",
  server: "NomedoServidor",
  database: "LoginProject",
  options: {
    trustServerCertificate: true,
    trustedConnection: false,
    enableArithAbort: true,
    instancename: "SQLEXPRESS",
  },
  port: 1433,
};

module.exports = config;
