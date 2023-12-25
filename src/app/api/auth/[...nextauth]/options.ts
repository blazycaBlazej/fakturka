import CredentialsProvider from 'next-auth/providers/credentials'

import { PrismaAdapter } from '@auth/prisma-adapter'
import { prisma } from '@/../prisma/db'

export const options = {
   adapter: PrismaAdapter(prisma),
   providers: [
      CredentialsProvider({
         name: 'Credentials',
         credentials: {
            email: {
               label: 'email',
               type: 'text',
               placeholder: 'email',
            },
            password: {
               label: 'password',
               type: 'password',
               placeholder: 'password',
            },
         },
         // eslint-disable-next-line @typescript-eslint/ban-ts-comment
         // @ts-expect-error
         async authorize(credentials: { email: string; password: string }, _req) {
            try {
               const { email, password } = credentials
               if (email === 'user@gmail.pl' && password === 'wsxqaz111') {
                  return { email: 'xd@wp.pl', role: 'unverified EMail' }
               }
            } catch (error) {
               console.log(error)
            }
            return null
         },
      }),
   ],
}
