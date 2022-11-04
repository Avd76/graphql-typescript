import {GraphQLList} from 'graphql'
import {todoType} from './typeDefs'
import { pool } from '../database/db'

export const getAllTodos = {
    type: new GraphQLList(todoType),
   async resolve(){
   
    return (await pool.query("SELECT * FROM todos")).rows
    }
}