const { GraphQLSchema, GraphQLObjectType, GraphQLList, GraphQLString, GraphQLID } = require("graphql")
const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    address: { type: GraphQLString },
    telephone: { type: GraphQLString },
    role: { type: GraphQLString }
  })
})

module.exports = UserType