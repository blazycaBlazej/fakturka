import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { ApolloServer } from '@apollo/server'
import { type PrismaClient } from '@prisma/client'
import { resolvers } from '@/graphql/resolvers'
import { typeDefs } from '@/graphql/graphqlSchema'
import { prisma } from '@/../prisma/db'

export type Context = {
   prisma: PrismaClient
}

const server = new ApolloServer<Context>({
   resolvers,
   typeDefs,
})

const handler = startServerAndCreateNextHandler(server, {
   context: async (req, res) => ({ req, res, prisma }),
})

export { handler as GET, handler as POST }
