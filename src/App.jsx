import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './components/Login/LoginPage';
import { AuthProvider } from './context/AuthContext';
import RoutesMain from './components/routes/RoutesMain';

const queryClient = new QueryClient();

function App() {
  return (
<>
<AuthProvider>
<QueryClientProvider client={queryClient} >
<BrowserRouter>
<Routes>
  <Route exact path="/" element={<LoginPage/>}></Route>
  <Route path="/Main/*" element={<RoutesMain/>}></Route>
</Routes>
</BrowserRouter>
</QueryClientProvider>
</AuthProvider>

</>
  )
}

export default App
