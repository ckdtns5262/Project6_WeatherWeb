
import './App.css';
import WeatherMain from './com/WeatherMain';
import { Route, Routes} from 'react-router-dom';
import WeatherMain2 from './com/WeatherMain2';
import WeatherHome from './com/WeatherHome';
import WeatherNav from './com/WeatherNav';

// import Home from './pages/Home';
// import Page1 from './pages/Page1';
// import Page2 from './pages/Page2';
// import Nav1 from './pages/Nav1';


function App() {
  return (
    <>

    {/* <Nav1/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Page1/:item' element={<Page1/>}/>
    <Route path='/Page2' element={<Page2/>}/>
  </Routes> */}
 
    
    
    <WeatherNav/>
    <Routes>
      <Route path='/' element={<WeatherHome/>}/>
      <Route path='/Main1' element={<WeatherMain/>}/>
      <Route path='/Main2' element={<WeatherMain2/>}/>
    </Routes> 

   </>
  );
}

export default App;
