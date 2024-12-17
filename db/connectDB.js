const mongoose = require("mongoose")

const localURL = "mongodb://127.0.0.1:27017/blogprojectexpress"
// const liveUrl= "mongodb+srv://soravrathor:sorav12@cluster0.tkmjxwk.mongodb.net/blogPoject13?retryWrites=true&w=majority&appName=Cluster0"

const connect = () => {
    return mongoose.connect(localURL)
        .then(() => {
            console.log('connect success')
        }).catch((error) => {
            console.log(error)
        })
}
module.exports = connect