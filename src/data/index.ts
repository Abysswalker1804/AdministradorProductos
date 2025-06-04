import {exit} from 'node:process'
import db from '../config/db'
import { error } from 'node:console'

const clearDB = async () => {
    try {
        await db.sync({force: true})
        console.log('Datos eliminados correctamente')
        exit(0)
    }catch {
        console.log(error)
        exit()
    }
}
if(process.argv[2] === '--clear'){
    clearDB()
}
