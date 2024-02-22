const express = require('express'),
      dbOperation = require ('./dbFiles/dbOperation'),
      cors = require ('cors'),
      bodyParser = require('body-parser');
      User = require ('./dbFiles/user');
      
const API_PORT = process.env.PORT || 5000;
const app = express();
let client;
let session;
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post('/apiadd', async (req,res) =>{
   const result = await dbOperation.addUser(req.body);
   res.send(result.recordset);
});

app.post('/apiemail',async (req,res) => {
    const result = await dbOperation.getUserbyEmail(req.body);
    res.send(result.recordset);
});

   

/**/

app.listen(API_PORT,()=>console.log(`listening on port ${API_PORT}`));
//  dbOperation.addUser(Pam);