import {getUsersDb, getUserDb, deleteUserDb, insertUserDb, editUserDb} from '../model/usersDb.js'
import {hash} from 'bcrypt'

const getUsers = async(req, res)=>{
    res.json(await getUsersDb())
}

const getUser = async(req, res)=>{
    res.json(await getUserDb(req.params.id))
}

const insertUser = async(req, res)=>{
    let {name, surname, age, fav_coding_lang, fav_car, eye_color, password, username} = req.body

    hash(password, 10, async(err, hashedP)=>{
        if(err) throw err
        console.log(hashedP); 
        await insertUserDb(name, surname, age, fav_coding_lang, fav_car, eye_color, hashedP, username)
    })
    // console.log(req.headers);
    
    res.send('Data was inserted successfully')
}
// OR
// const insertUser = async(req, res)=>{
//     let {name, surname, age, fav_coding_lang, fav_car, eye_color, password, username} = req.body
//     let hashedP = hash(password, 10)
//     if(hashedP.stack) throw hashedP 
//     await insertUserDb(name, surname, age, fav_coding_lang, fav_car, eye_color, hashedP, username)
//     res.send('Data was inserted successfully')
// }

const deleteUser = async(req, res)=>{
    await deleteUserDb(req.params.id)
    res.send('User has been deleted')
}

const editUser = async(req, res)=>{
    let {name, surname, age, fav_coding_lang, fav_car, eye_color} = req.body
    let user = await getUserDb(req.params.id)
    name? name = name: name = user.name
    surname? surname = surname: surname = user.surname
    age? age = age: age = user.age
    fav_coding_lang? fav_coding_lang = fav_coding_lang: fav_coding_lang = user.fav_coding_lang
    fav_car? fav_car = fav_car: fav_car = user.fav_car
    eye_color? eye_color = eye_color: eye_color = user.eye_color
    await editUserDb(name, surname, age, fav_coding_lang, fav_car, eye_color, req.params.id)
    res.send(await getUsersDb())

}

const loginUser = (req,res)=>{
    res.json({message:"you have signed in ", token:req.body.token})
}

export {getUsers, getUser, insertUser, deleteUser, editUser, loginUser}