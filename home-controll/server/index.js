const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const Database = require('./database/db')
const saveData = require('./database/saveData')

const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res) => {
    const request = req.body
    console.log(request)
    res.send("This is Home Automation Server")
})

app.get('/getdata', async (req, res) => {
    const db = await Database;
    const data = await db.all("SELECT * FROM rooms")
    try {
        return res.json(data)
    } catch (error) {
        console.log(error)
        return res.send('Erro no banco de dados')
    }    
})

app.post('/savedata', async (req, res) => {
    const name = req.body.name
    const ip = req.body.ip
    try {
        const db = await Database;
        await saveData(db, {
            name: name,
            ip: ip
        })
        const dbColector = await db.all("SELECT * FROM rooms")
         console.log(dbColector)
        return res.redirect('Successful')
    } catch (error) {
        console.log(error)
        return res.send('Erro no banco de dados') 
    }
})

app.post('/removedata', async (req, res) => {
    const id = req.body.id
    try {
        const db = await Database;
        await db.run(`DELETE FROM rooms WHERE id = ${id}`)
        const dbColector = await db.all("SELECT * FROM rooms")
        console.log(dbColector)
    } catch (error) {
        console.log(error)
        return res.send('Erro no banco de dados')         
    }
})

app.listen(5500, () => {
    console.log("Running my server")
})