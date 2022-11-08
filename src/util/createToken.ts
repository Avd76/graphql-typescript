import dotenv from 'dotenv'
import * as jwt from 'jsonwebtoken'

dotenv.config()

export const createToken = async (id: unknown)=>{
  return jwt.sign({id}, 'abc123' , {expiresIn: '30min'})


}