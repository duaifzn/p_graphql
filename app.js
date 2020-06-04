const express = require("express")
const app = express()
const port = process.env.PORT || 3000
const mongoose = require('mongoose')
const graphqlHTTP = require('express-graphql');
const {
  GraphQLSchema,
  GraphQLObjectType
} = require("graphql")

mongoose.connect('mongodb://localhost/gql', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', error => { console.error(error) })
db.once('open', () => { console.log('connected to mongoDB') })


app.use('/graphql', graphqlHTTP({
  //schema: MyGraphQLSchema,
  graphiql: true,
}),
);

app.listen(port, () => {
  console.log(`server running`)
})