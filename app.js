const express = require("express") 
const app = express() 
const Sequelize = require("sequelize") 
const {DataTypes} = require("sequelize") 
const Hewan = require('./models').hewans;

app.use(express.json()) 
app.use(express.urlencoded({
    extended: true
}));

const sequelize = new Sequelize('db_sequelize', "root", "wikeeadp123", {
    host : '127.0.0.1',
    dialect: "mysql"
})

async function checkConnection(){
    try{
        await sequelize.authenticate();
        console.log('Connection has been established successfully');
        Hewan.sync().then(() => console.log('table hewan created'))
    } catch (error) {
        console.error('unable to connect to the database:', error);
    }
}
checkConnection()

app.get('/hewan', (req,res) => {
    Hewan.findAll().then(result => {
        res.json({
            message: "OK",
            data : result
        })
    })
})

app.get('/hewan/:id', (req, res) => {
    const todoId = req.params.id
    Hewan.findOne({
        where: {
            id : todoId
        }
    }).then(result => {
        res.send({
            message: "OK",
            data : result
        })
    }).catch(error => {
        res.send({
            message : error
        })
    })
})

app.post('/addhewan', async (req, res) => {
    const body = req.body;
    const todo = {
        nama : body['nama'],
        namaSpesies : body['namaSpesies'],
        umur : body['umur']
    }
    try {
        await Hewan.create(todo)
        res.status(201).send(todo)
    } catch (error) {
        res.status(500).send({
            message : error.message
        })
    }
})

app.put('/updatehewan/:id', async (req, res) => {
    try {
        const todoId = req.params.id
        const body = req.body
        const todo = {
            nama : body['nama'],
            namaSpesies : body['namaSpesies'],
            umur : body['umur']
        }
        await Hewan.update(todo, {
            where : {
                id : todoId
            }
        })
        res.status(200).send(todo)
    } catch (error) {
        res.status(500).send({message: error.message})
    }
})

app.delete('/deletehewan/:id', async (req, res) => {
    try {
        const todoId = req.params.id

        await Hewan.destroy({
            where : {
                id : todoId
            }
        })
        res.status(200).json({
            message : "delete"
        })
    } catch (error) {
        res.status(500).send({
            message : error.message
        })
    }
})

app.listen("3002", () => { 
    console.log(`listening at http://localhost:${3002}`)})