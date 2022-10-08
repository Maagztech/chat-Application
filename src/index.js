const express = require('express')
const hbs = require('hbs')
const path= require('path')

const port = 3000 | process.env.PORT

const app = express()


const publicDirectoryPath =  path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)


// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('',(req,res)=>{
    res.render('index')
})


app.listen(port, () => {
    console.log('Server is running on ', port)
})