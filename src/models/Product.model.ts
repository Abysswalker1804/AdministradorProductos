import {Table, Column, Model, DataType, Default}from 'sequelize-typescript'

@Table({
    tableName: 'products'
})

class Product extends Model{
    @Column({
        type: DataType.STRING(100)
    })
<<<<<<< HEAD
    name: String
    @Column({
        type: DataType.FLOAT(6,2)
    })
    price: number
=======
   declare name: String
    @Column({
        type: DataType.FLOAT
    })
    declare price: number
>>>>>>> e4f2b1166ce3e96d445cceec4a2d9a1e34894a8c
    @Default(true)
    @Column({
        type: DataType.BOOLEAN
    })
<<<<<<< HEAD
    availability: boolean
=======
    declare availability: boolean
>>>>>>> e4f2b1166ce3e96d445cceec4a2d9a1e34894a8c
    
}

export default Product