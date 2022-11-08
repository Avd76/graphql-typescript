
import { genSalt } from 'bcrypt'
import {GraphQLObjectType, GraphQLInt, GraphQLList, GraphQLString, GraphQLScalarType} from 'graphql'
import { todoType, userType } from './typeDefs'



export const createTodo = {
    type: todoType,
    args: {
       
     todo_desc: {type: GraphQLString}
    },
    async resolve(parent: any, args: any, context: any ){
      let {pool} = context
      let {todo_desc} = args
    return (await pool.query("INSERT INTO todos(todo_desc) VALUES  ($1) RETURNING *", [todo_desc])).rows[0]
    }
}

export const deleteTodo = {
  type: todoType,
  args: {
    todo_id: {type: GraphQLInt},
   
  },
   async resolve(parent: any, args: any, context: any) {
    let {pool} = context
      let {todo_id} = args 
     await pool.query("DELETE FROM todos WHERE todo_id = $1", [todo_id])
      
    
     return {successful: true, message: "Deleted"}
    
   }
}

export const updateTodo = {
  type: todoType,
  args: {
     todo_id: {type: GraphQLInt},
      todo_desc: {type: GraphQLString}
  },
  async resolve(parent: any, args: any, context: any){
   let {pool} = context
    let {todo_desc, todo_id} = args
  return (await pool.query("UPDATE todos SET todo_desc= $1 WHERE todo_id = $2 RETURNING *", [todo_desc, todo_id])).rows[0]
  }
}



export const register = {
  type: userType,
  args: {
    username: {type: GraphQLString},
    password: {type: GraphQLString}
  },
  async resolve(parent: any, args: any, context: any){
    let {pool, bcrypt, createToken} = context
   let {username, password} = args

   let {genSalt, hash} = bcrypt

      let salt = await bcrypt.genSalt(10)

    let hashedPass = await bcrypt.hash(password, salt)

    return await pool.query("INSERT INTO users (username, pass) VALUES($1, $2)", [username, hashedPass])

     
   
  }
}