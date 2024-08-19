import {pool} from '../config/config.js'

const getFruitsDb = async()=>{
    let [data] = await pool.query('SELECT * FROM fruits')
    return data
}

const getFruitDb = async(id)=>{
    let [[data]] = await pool.query('SELECT * FROM fruits WHERE id = ?', [id])
    return data
}

const deleteFruitDb = async(id)=>{
    await pool.query('DELETE FROM fruits WHERE id = ?', [id])
}

const insertFruitDb = async(fruit_name, weight, amount)=>{
    let [data] = await pool.query(`INSERT INTO fruits (fruit_name, weight, amount) VALUES (?,?,?)`, [fruit_name, weight, amount])
    return data
}

// console.log(await insertFruitsDb('John', 'Smith', 31, 'C++', 'Toyota', 'Green' ))

const editFruitDb = async(fruit_name, weight, amount, id)=>{
    await pool.query(`UPDATE fruits 
        SET fruit_name = ?, weight = ?, amount = ? 
        WHERE id = ?`, [fruit_name, weight, amount, id])
}

const addToCartDb = async(user_id, fruit_id)=>{
    await pool.query(`INSERT INTO cart (user_id, fruit_id) VALUES (?,?)`, [user_id, fruit_id])
}

export {getFruitsDb, getFruitDb, deleteFruitDb, insertFruitDb, editFruitDb, addToCartDb}