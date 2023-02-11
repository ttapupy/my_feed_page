import React from 'react'
import './App.css'
import { QueryClient, QueryClientProvider } from "react-query";
import Page from "./components/Page";

function App() {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });


  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Page />
      </QueryClientProvider>
    </div>
  )
}

export default App
