import {GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLID, GraphQLList} from 'graphql'


export const todoType = new GraphQLObjectType({
    name: 'todo',
    fields: ()=>({
    todo_id: {type: GraphQLInt},
     todo_desc: {type: GraphQLString}
    })

})


export const userType = new GraphQLObjectType({
    name: 'user',
    fields: ()=>({
        
        user_id: {type: GraphQLID},
        username: {type: GraphQLString},
        password: {type: GraphQLString},
        todos: {type: GraphQLList(todoType)}
    })
})