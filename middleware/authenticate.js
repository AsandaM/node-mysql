import { compare } from "bcrypt"
import { getUserDb } from "../model/usersDb.js"
import jwt from 'jsonwebtoken'
import {config} from 'dotenv'

config()


const checkUser = async(req, res, next)=>{
    const {username, password} = req.body
    let hashedPassword = (await getUserDb(username)).password
    console.log(hashedPassword);
     
    compare(password, hashedPassword, (err, result)=>{
        if(result == true){
            let token = jwt.sign({username:username}, process.env.SECRET_KEY, {expiresIn: '1h'})
            console.log(token);
            
            req.body.token = token
            next()
            return
        }
        res.send('Password incorrect')

    })

}

const verifyAToken = (req, res, next)=>{
    let {cookie} = req.headers
    //checks if the token exits first
    let token = cookie && cookie.split('=')[1]
    // console.log(token)

    jwt.verify(token, process.env.SECRET_KEY, (err, decoded)=>{
        if(err){
            res.json({message: 'Token is invalid'})
            return
        }
        // req.body.username = decoded.username
        // req.body = decoded.username
        req.body.user = decoded.username
        // console.log(decoded);
        next()       
    })
}




export {checkUser, verifyAToken}