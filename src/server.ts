import express from "express";
import router from "./router";
import db from "./config/db";

//conectar a base de datos
async function connectDB(){
    try{
        await db.authenticate()
        db.sync()
        console.log('Conexion exitoda a la BD')
    }catch(error){
        console.log(error)
        console.log('Hubo un error al concetar a la base de datos')
    }
}
connectDB

const server = express()

server.use('/api/products', router)

export default server