import 'reflect-metadata'
import './database/Connection'
import { ApolloServer } from 'apollo-server'
import { buildSchema } from 'type-graphql'
import UserResolver from './resolvers/UserResolver'

async function startServer() {

    const server = new ApolloServer({
        schema: await buildSchema({
            resolvers: [UserResolver]
        })
    })

    server.listen().then(server => {
        console.log(server.url);
    })

}

startServer()