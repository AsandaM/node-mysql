import {getFruitsDb, getFruitDb, deleteFruitDb, insertFruitDb, editFruitDb, addToCartDb,} from '../model/fruitsDb.js'
import { getUserDb } from '../model/usersDb.js'

const getFruits = async(req, res)=>{
    res.json(await getFruitsDb())
}

const getFruit = async(req, res)=>{
    res.json(await getFruitDb(req.params.id))
}

const insertFruit = async(req, res)=>{
    let {fruit_name, weight, amount} = req.body
        await insertFruitDb(fruit_name, weight, amount)
        res.send('Data was inserted successfully')
}

const deleteFruit = async(req, res)=>{
    await deleteFruitDb(req.params.id)
    res.send('Fruit has been deleted')
}

const editFruit = async(req, res)=>{
    let {fruit_name, weight, amount} = req.body
    let fruit = await getFruitDb(req.params.id)
    fruit_name? fruit_name = fruit_name: fruit_name = fruit.fruit_name
    weight? weight = weight: weight = fruit.weight
    amount? amount = amount: amount = fruit.amount
    
    await editFruitDb(fruit_name, weight, amount, req.params.id)
    res.send(await getFruitsDb())

}

const addToCart = async(req, res)=>{

    let {id} = await getUserDb(req.body.user)
    console.log(id);
    
    await addToCartDb(id, req.body.id )
    res.json({message:"You've added an item to cart"})
}

export {getFruits, getFruit, insertFruit, deleteFruit, editFruit, addToCart}