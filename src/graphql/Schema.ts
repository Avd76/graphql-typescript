import {GraphQLObjectType, GraphQLSchema} from 'graphql'
import { getAllTodos, getAllUsers } from './Queries'
import { createTodo, deleteTodo, updateTodo, register } from './Mutations'
const rootQuery = new GraphQLObjectType({
    name: 'rootQuery',
    fields: {
        getAllTodos,
        getAllUsers
    }


})

const rootMutation = new GraphQLObjectType({
    name: 'rootMutation',
    fields: {
        createTodo,
         deleteTodo,
         updateTodo,
         register
    }
})


export const schema = new GraphQLSchema( {
    query: rootQuery,
    mutation: rootMutation
})