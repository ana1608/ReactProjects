const config = require('./dbConfig');
sql =require('mssql');


const addUser= async(user)=>{
    try{
        let pool =await sql.connect(config);
        let users= await pool.request().query(`INSERT INTO Users VALUES ('${user.nameC}','${user.email}','${user.password}')`);
        return users;
    }catch(error){
        console.log(error);
    }
}


const getUsers= async()=>{
    try{
        let pool =await sql.connect(config);
        let users= await pool.request().query(`SELECT * from Users`);
        console.log(users);
        return users;
    }catch(error){
        console.log(error);
    }
}

const getUserbyEmail= async(user)=>{
    try{
     
        let pool =await sql.connect(config);
        let users= await pool.request().query(`SELECT * from Users WHERE Email = ${user.email}`);
        console.log(users);
        return users;
    }catch(error){
        console.log(error);
    }
}

const getUserbyid= async(user)=>{
    try{
        let pool =await sql.connect(config);
        let users= await pool.request().query(`SELECT * from Users WHERE id = ${user.id}`);
        console.log(users);
        return users;
    }catch(error){
        console.log(error);
    }
}

const getUserbyemailandpass= async(user)=>{
    try{
        let pool =await sql.connect(config);
        let users= await pool.request().query(`SELECT * from Users WHERE email = ${user.email} AND senha = ${user.password}`);
        console.log(users);
        return users;
    }catch(error){
        console.log(error);
    }
}



module.exports = {
    addUser,
    getUsers,
    getUserbyEmail,
    getUserbyid,
    getUserbyemailandpass
    
}