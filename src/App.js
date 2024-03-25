import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';

import Contact from './components/Contact/Contact';
import Orders from './components/Orders/Orders';

function App() {


  const router = createBrowserRouter([
    { path: '/home', element: <Home></Home> },
    { path: '/about', element: <About></About> },
    { path: '/contact', element: <Contact></Contact> },
    { path: '/orders', element: <Orders></Orders> }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
