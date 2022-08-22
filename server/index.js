import 'dotenv/config'
import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import 'path'

import postRoutes from './routes/posts.js'
import userRoutes from './routes/users.js'

const app = express()


app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

app.use('/posts', postRoutes)
app.use('/user', userRoutes)
const PORT = process.env.PORT || 5000

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('./client/build'))
}

mongoose.connect(process.env.MONGO_URI)
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error))