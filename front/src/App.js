import { Routes, Route } from 'react-router-dom';

import About from './About';
import ContactUs from './ContactUs';
import Home from './Home';

import './App.css';

function App() {
  return (       
    
    <div className="App">
        <Routes>
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/about" element={<About />} />
          <Route path='/' element={<Home/>} />
       </Routes>           
    </div>
    
    
  );
}
export default App;
