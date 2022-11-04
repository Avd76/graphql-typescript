import {GraphQLObjectType, GraphQLSchema} from 'graphql'
import { getAllTodos } from './Queries'
import { createTodo } from './Mutations'
const rootQuery = new GraphQLObjectType({
    name: 'rootQuery',
    fields: {
        getAllTodos
    }


})

const rootMutation = new GraphQLObjectType({
    name: 'rootMutation',
    fields: {
        createTodo
    }
})


export const schema = new GraphQLSchema( {
    query: rootQuery,
    mutation: rootMutation
})