const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars') //inserir uma variável que armazenan o valor temporariamente; que vai sumir dps

app.get('/peixe', (req,res) => {
   res.render('peixe')

})
app.get('/', (req,res) => { //associa uma propriedade a uma função

    const user ={

    name:'Rafa',
    age:'18',
    email:'rafael_donde@estudante.sesisenai.org.br'

    }
const auth = false

const approved = true

    res.render('acai',{user:user, auth, approved})  
})



app.listen(3000)