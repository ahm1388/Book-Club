import PostBook from '../models/postBook.js'

export const getBooks = async (req, res) => {
    try {
        const postBooks = await PostBook.find()

        console.log(postBooks)

        res.status(200).json(postBooks)
    } catch (error) {
        res.status(404).json({ message: error.message })   
    }
  }

export const createBook = async (req, res) => {
    const book = req.body

    const newBook = new PostBook(book)

    try {
        await newBook.save()

        res.status(201).json(newBook)
    } catch (error) {
        res.status(409).json({ message: error.message })   
    }
}