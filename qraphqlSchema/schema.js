const { GraphQLSchema, GraphQLObjectType, GraphQLList, GraphQLNonNull, GraphQLString, GraphQLID } = require("graphql")
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
        //console.log(User.findById(args.id))
        return User.findById(args.id)
      }
    },
    users: {
      type: new GraphQLList(UserType),
      description: 'users list',
      resolve: (parent, args) => {
        return User.find({})
      }
    }
  })
})


const rootMutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'root mutation',
  fields: () => ({
    addUser: {
      type: UserType,
      description: "add a user",
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        password: { type: GraphQLNonNull(GraphQLString) },
        address: { type: GraphQLNonNull(GraphQLString) },
        telephone: { type: GraphQLNonNull(GraphQLString) },
        role: { type: GraphQLNonNull(GraphQLString) }
      },
      resolve: (parent, args) => {
        let user = new User({
          name: args.name,
          email: args.email,
          password: args.password,
          address: args.address,
          telephone: args.telephone,
          role: args.role
        })

        return user.save()

      }
    }
  })
})

module.exports = new GraphQLSchema({
  query: rootQueryType,
  mutation: rootMutationType
})

