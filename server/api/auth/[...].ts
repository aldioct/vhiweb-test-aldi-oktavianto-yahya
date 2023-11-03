import { NuxtAuthHandler } from '#auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export default NuxtAuthHandler({
    secret: 'GpB9yyLAsBXfo/VpzilURF1Z/iReD18J/CUUWG3JofM=',
    pages: {
        signIn: '/',
    },
    providers: [
        // @ts-expect-error
        CredentialsProvider.default({
            name: 'Credentials',
            async authorize(authentication: any) {
                return {
                    email: authentication.email,
                    token: authentication.token,
                }
            }
        })
    ]
})