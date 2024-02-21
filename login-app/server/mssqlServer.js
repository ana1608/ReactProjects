const sql = require('mssql/msnodesqlv8')

var config = {
  server: '',
  database: 'LoginProject',
  driver:"msnodesqlv8",
  options: {
    encrypt: true,
  }
}

const pool = new sql.ConnectionPool(config);

useEffect(() => {
  async function fetchUsers() {
   
    const request = pool.request();
    const result = await request.query("SELECT * FROM user");
    console.log(result);
    setUsers(result.recordset);
  }

  fetchUsers();
}, []);



