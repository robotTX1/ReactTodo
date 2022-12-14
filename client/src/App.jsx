import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query'
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Counter } from './components/Counter'
import { Login } from './components/Login'
import { Todo } from './components/Todo'
import { Home } from './components/Home'
import { MyNavbar } from './components/MyNavbar';
import { Products } from './components/Products'
import { Product } from './components/Product'

const queryClient = new QueryClient();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container">
        <MyNavbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <div className="holder">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='counter' element={<Counter />} />
            <Route path='login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            {isLoggedIn && <Route path='todo' element={<Todo setIsLoggedIn={setIsLoggedIn} />} />}
            <Route path='products' element={<Products />} />
            <Route path='products/:id' element={<Product />} />
          </Routes>
        </div>
      </div>
    </QueryClientProvider>

  );
}

export default App;
