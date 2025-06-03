<<<<<<< HEAD
import express from "express";
import router from "./router";
import db from "./config/db";

//conectar a base de datos
=======
import express from 'express'
import colors from 'colors'
import router from './router'
import db from './config/db'

//COnectar a base de datos
>>>>>>> e6d42d1 (Actualización 03/06/2025)
async function connectDB(){
    try{
        await db.authenticate()
        db.sync()
<<<<<<< HEAD
        console.log('Conexion exitoda a la BD')
    }catch(error){
        console.log(error)
        console.log('Hubo un error al concetar a la base de datos')
    }
}
connectDB

const server = express()

server.use('/api/products', router)

=======
        console.log(colors.magenta.bold('Conexion exitoosa a la DB'))
    }catch (error){
        //console.log(error)
        console.log(colors.bgRed.white('Hubo un problema al conectar con la DB'))
    }
}
connectDB()
const server = express()

//Leer datos
server.use(express.json())

server.use('/api/products',router)
>>>>>>> e6d42d1 (Actualización 03/06/2025)
export default server