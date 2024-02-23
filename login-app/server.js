const express = require("express"),
  dbOperation = require("./dbFiles/dbOperation"),
  cors = require("cors"),
  bodyParser = require("body-parser");

User = require("./dbFiles/user");
const bcrypt = require("bcryptjs");
const API_PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post("/apiadd", async (req, res) => {
  //var salt = bcrypt.genSaltSync(10);
  req.body.password = await bcrypt.hash(
    req.body.password,
    "$2a$10$CwsycUPWue0Tsd9StPWM0u"
  );
  const result = await dbOperation.addUser(req.body);
  res.send(result.recordset);
});

app.post("/apiemail", async (req, res) => {
  const result = await dbOperation.getUserbyEmail(req.body);
  res.send(result.recordset);
});

app.post("/apilogin", async (req, res) => {
  //var salt = bcrypt.genSaltSync(10);
  req.body.password = await bcrypt.hash(
    req.body.password,
    "$2a$10$CwsycUPWue0Tsd9StPWM0u"
  );

  const result = await dbOperation.getUserbyemailandpass(req.body);
  res.send(result.recordset);
});
/**/

app.listen(API_PORT, () => console.log(`listening on port ${API_PORT}`));
//  dbOperation.addUser(Pam);
