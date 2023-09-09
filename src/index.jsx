import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.scss';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Landing from './components/landing';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Landing/>
      <Footer/>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)