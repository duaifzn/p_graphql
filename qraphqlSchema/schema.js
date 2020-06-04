const { GraphQLSchema, GraphQLObjectType, GraphQLList, GraphQLString, GraphQLID } = require("graphql")
const User = require('../models/user')
const UserType = require('./user')


const rootQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'root query',
  fields: () => ({
    user: {
      type: UserType,
      description: 'user',
      args: { id: { type: GraphQLID } },
      resolve: (parent, args) => {
        return User.findById(args.id)
      }
    },
    users: {
      type: GraphQLList(UserType),
      description: 'users list',
      resolve: (parent, args) => {
        return User.find({})
      }
    }
  })
})


module.exports = new GraphQLSchema({
  query: rootQueryType
})

