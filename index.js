const express = require('express')
var morgan = require('morgan')

const app = express()

morgan.token('body', function (req, res) { return JSON.stringify(req.body)})

app.use(express.static('build'))
app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

let persons = [
    { 
        name: "Arto Hellas", 
        number: "040-123456",
        id: 1
      },
      { 
        name: "Ada Lovelace", 
        number: "39-44-5323523",
        id: 2
      },
      { 
        name: "Dan Abramov", 
        number: "12-43-234345",
        id: 3
      },
      { 
        name: "Mary Poppendieck", 
        number: "39-23-6423122",
        id: 4
      }
    
  ]  


app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
  })
  
app.get('/api/persons', (req, res) => {
    res.json(persons)
  })

app.get('/info', (req, res) => {
    res.send(`<p>Phone book has info for ${persons.length} people</p>`+ new Date() + '')
})

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    person = persons.find(pers => pers.id === id)
      
    if (person) {
      res.json(person)
    } else {
      res.status(404).end()
    }
})

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    persons = persons.filter(pers => pers.id !== id)
  
    res.status(204).end()
})



app.post('/api/persons', (req, res) => {
    const body = req.body
  
    if (!body.name || !body.number) {
      return res.status(400).json({ 
        error: 'content missing' 
      })
    }    

    if (persons.some(p => p.name === body.name)) {
        return res.status(400).json({ 
          error: 'name must be unique' 
        })
      }
  
    const person = {
      name: body.name,
      number: body.number,
      id: Math.floor((Math.random()*10000) + 1)
    }
  
    persons = persons.concat(person)
  
    res.json(person)
  })



const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })