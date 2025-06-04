<<<<<<< HEAD

=======
>>>>>>> e4f2b1166ce3e96d445cceec4a2d9a1e34894a8c
import colors from 'colors'
import server from "./server"

const port = process.env.PORT || 4000
server.listen(port, () =>{
    console.log(colors.cyan.bold(`REST API en el puerto ${port}`))
<<<<<<< HEAD
})
=======
})
>>>>>>> e4f2b1166ce3e96d445cceec4a2d9a1e34894a8c
