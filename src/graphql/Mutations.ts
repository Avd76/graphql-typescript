import {GraphQLObjectType, GraphQLInt, GraphQLList, GraphQLString} from 'graphql'
import { todoType } from './typeDefs'
import { pool } from '../database/db' 


export const createTodo = {
    type: todoType,
    args: {
        todo_id: {type: GraphQLInt},
        description: {type: GraphQLString}
    },
    async resolve(parent: any, args: any, ){
      let {todo_id, description} = args
    return (await pool.query("INSERT INTO todos(todo_id, description) VALUES ($1, $2) RETURNING *", [todo_id, description])).rows[0]
    }
}
