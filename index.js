import express from 'express'
import cors from 'cors'
import userRoutes from './routes/userRoutes.js'
import fruitsRoute from './routes/fruitsRoutes.js'


let port = process.env.PORT || 5002

const app = express()
app.use(express.json())
app.use(cors({origin:'http://localhost:8080', credentials:true}))
app.use('/users', userRoutes)
app.use('/fruits', fruitsRoute)

app.use(express.static('public'))


app.listen(port, ()=>{
    console.log('http://localhost:' + port)
})