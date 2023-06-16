import './App.css';
import { Home,Gallery,About,Services,Contact } from './components/index';
import { Route, Routes } from 'react-router-dom';
import {Navbar,Footer} from './containers/index';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/aboutus' element = {<About/>} />
        <Route path='/gallery' element = {<Gallery/>} />
        <Route path='/services' element = {<Services/>} />
        <Route path='/contactus' element = {<Contact/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
