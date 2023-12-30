import { Routes, Route } from 'react-router-dom';

import About from './About';
import ContactUs from './ContactUs';
import Home from './Home';
import Blog from './Blog/Blog';
import Support from './Support/Support';
import NotFound from './Pages/NotFound';
import Software from './Software/Software';
import Attendance from './Attendance/Attendance';
import Rule from './Pages/Rule';
import Privacy from './Pages/Privacy';
import Faq from './Pages/Faq';

import './App.css';

function App() {
  return (       
    
    <div className="App">
        <Routes>
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/about" element={<About />} />
          <Route path='/' element={<Home/>} />
          <Route path='/Blog' element={<Blog/>} />
          <Route path='/Support' element={<Support/>} />
          <Route path='*' exact={true} element={<NotFound/>} />
          <Route path='/Attendance' element={<Attendance/>} />
          <Route path='/Software' element={<Software/>} />
          <Route path='/Faq' element={<Faq/>} />
          <Route path='/Privacy' element={<Privacy/>} />
          <Route path='/Rule' element={<Rule/>} />
       </Routes>           
    </div>
    
    
  );
}
export default App;
