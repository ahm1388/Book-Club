import mongoose from 'mongoose'

const bookSchema = mongoose.Schema({
    title: String,
    author: String,
    genre: [String],
    picture: String,
    rating: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const postBook = mongoose.model('PostBook', bookSchema)

export default postBook