import { ApolloClient, InMemoryCache} from "@apollo/client"

export const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT,
  headers: {
    "Authorization": `Bearer ${process.env.NEXT_PUBLIC_GRAPHCMS_TOKEN}`
  },
  
    cache: new InMemoryCache()
})