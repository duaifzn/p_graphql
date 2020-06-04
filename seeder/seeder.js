const mongoose = require('mongoose')
const User = require('../models/user')

mongoose.connect('mongodb://localhost/gql')
const db = mongoose.connection

db.on('error', error => {
  console.error(error)
})

db.once('open', () => {
  User.create({
    name: 'John',
    email: 'test@test.com',
    password: '12345678',
    address: 'imei road',
    telephone: '0923444555',
    role: 'admin'
  }).then(() => {
    console.log('seeder done...')
  })
})