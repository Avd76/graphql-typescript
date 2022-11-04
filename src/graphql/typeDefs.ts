import {GraphQLObjectType, GraphQLInt, GraphQLString} from 'graphql'


export const todoType = new GraphQLObjectType({
    name: 'todo',
    fields: ()=>({
    todo_id: {type: GraphQLInt},
    description: {type: GraphQLString}
    })

})