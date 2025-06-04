import express from 'express'
import colors from 'colors'
import router from './router'
import db from './config/db'

//COnectar a base de datos
async function connectDB(){
    try{
        await db.authenticate()
        db.sync()
       // console.log(colors.magenta.bold('Conexion exitoosa a la DB'))
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

server.get('/api', (req , res) => {
    res.json({ msg: 'Desde api' })
})
export default server