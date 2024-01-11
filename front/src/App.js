import { Routes, Route } from 'react-router-dom';

import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';
import Blog from './pages/Blog/Blog';
import Support from './pages/Support/Support';
import NotFound from './pages/NotFound';
import Software from './pages/Software/Software';
import Attendance from './pages/Attendance/Attendance';
import Rule from './pages/Rule';
import Privacy from './pages/Privacy';
import Faq from './pages/Faq';
import Login from './authentication/Login';
import Register from './authentication/Register';
import Hardware from './pages/Hardware/Hardware';

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
          <Route path='/Login' element={<Login/>} />
          <Route path='/Register' element={<Register/>} />
          <Route path='/Hardware' element={<Hardware/>} />
       </Routes>           
    </div>
    
    
  );
}
export default App;
