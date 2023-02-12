import React, { useState } from 'react'
import './App.css'
import { QueryClient, QueryClientProvider } from "react-query";
import Page from "./components/Page";
import ErrorSection from "./components/ErrorSection";
import { ErrorBoundary } from "react-error-boundary";

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
