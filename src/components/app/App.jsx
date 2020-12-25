import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Layout from '../layout/Layout';
import Routes from '../routes';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Routes />
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
