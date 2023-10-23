import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import RoutesMain from './components/routes/RoutesMain';

const queryClient = new QueryClient();

function App() {
  return (
<>
<QueryClientProvider client={queryClient} >
<RoutesMain/>
</QueryClientProvider>

</>
  )
}

export default App
