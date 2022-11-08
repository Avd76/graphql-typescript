import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import * as bcrypt from 'bcrypt'
import {graphqlHTTP} from 'express-graphql'
 import { schema } from './graphql/Schema'
import { Request, Response } from 'express'
import { createToken } from './util/createToken'
import {request, response} from 'express'
import { pool } from './database/db'
dotenv.config()


async function Main() {
   const app = express()

  

     app.use(express.json())
     app.use(cors())
        
        
    
        app.use('/graphql', graphqlHTTP({
            schema,
              context: {
                 request,
                response,
                pool,
                createToken,
                bcrypt
              },
            graphiql: true
        }))

    app.listen(5001, ()=>{
        console.log("Hello app")
    })
}

Main()
