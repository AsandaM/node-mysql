import {pool} from '../config/config.js'

const getUsersDb = async()=>{
    let [data] = await pool.query('SELECT * FROM users')
    return data
}

const getUserDb = async(username)=>{
    let [[data]] = await pool.query('SELECT * FROM users WHERE username = ?', [username])
    return data
}

const deleteUserDb = async(id)=>{
    await pool.query('DELETE FROM users WHERE id = ?', [id])
}

const insertUserDb = async(name, surname, age, fav_coding_lang, fav_car, eye_color, password, username)=>{
    let [data] = await pool.query(`INSERT INTO users (name, surname, age, fav_coding_lang, fav_car, eye_color, password, username) VALUES (?,?,?,?,?,?,?,?)`, [name, surname, age, fav_coding_lang, fav_car, eye_color, password, username])
    return data
}

// console.log(await insertUserDb('John', 'Smith', 31, 'C++', 'Toyota', 'Green' ))

const editUserDb = async(name, surname, age, fav_coding_lang, fav_car, eye_color, id)=>{
    await pool.query(`UPDATE users 
        SET name = ?, surname = ?, age = ?, fav_coding_lang = ?, fav_car = ?, eye_color = ? 
        WHERE id = ?`, [name, surname, age, fav_coding_lang, fav_car, eye_color, id])
}

export {getUsersDb, getUserDb, deleteUserDb, insertUserDb, editUserDb}