import {GraphQLList} from 'graphql'
import {todoType, userType} from './typeDefs'
import { pool } from '../database/db'

export const getAllTodos = {
    type: new GraphQLList(todoType),
   async resolve(){
   
    return (await pool.query("SELECT * FROM todos")).rows
    }
}

export const getAllUsers = {
    type: new GraphQLList(userType),
   async resolve(){
   
    return (await pool.query("SELECT * FROM users")).rows
    }
}