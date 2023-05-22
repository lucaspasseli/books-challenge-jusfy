import { QueryClient, QueryCache } from 'react-query'

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 30000
    }
  }
})

export default client
