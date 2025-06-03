<<<<<<< HEAD
import { Sequelize } from "sequelize";

const db = new Sequelize('postgresql://rest_api_node_typescript_jmli_user:WJaIjmKi39iyhYNNiEx6T9sBS5Fbu4wm@dpg-d0qvvjpr0fns73fqimlg-a.oregon-postgres.render.com/rest_api_node_typescript_jmli?ssl=true')

export default db
=======
import {Sequelize} from 'sequelize-typescript'
import dotenv from 'dotenv'
dotenv.config()

const db = new Sequelize(process.env.DATABASE_URL!,{
    models:[__dirname + '/../models/**/*.ts']
})

export default db
>>>>>>> e6d42d1 (Actualización 03/06/2025)
