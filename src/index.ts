<<<<<<< HEAD
import server from './server'

server.listen(4000, () => {
    console.log('REST API en el puerto 4000')
})
=======
import colors from 'colors'
import server from "./server"

const port = process.env.PORT || 4000
server.listen(port, () =>{
    console.log(colors.cyan.bold(`REST API en el puerto ${port}`))
})
>>>>>>> e6d42d1 (Actualización 03/06/2025)
