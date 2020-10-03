const express = require('express')
const axios = require('axios')
const app = express()
const port = 5000
const name = process.env.name || "World"

app.get('/', async (req, res) => {
  try {
    const result = await axios.get('https://gorest.co.in/public-api/users')
    console.log("HELP", result)
    res.json(result.data)

  } catch (error) {
    console.error(error)
  }
})

app.listen(port, () => {
    console.log(`Server Started on Port  ${port}`)
})