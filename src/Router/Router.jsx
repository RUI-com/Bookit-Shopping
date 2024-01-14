import {BrowserRouter,Routes,Route} from 'react-router-dom';

// import Pages .....
import Home from '../Pages/Home';
import About from '../Pages/About';
import AudioBooks from '../Pages/AudioBooks';
import Library from '../Pages/Library';
import Articles from '../Pages/Articles';
import Contact from '../Pages/Contact';
// import NotFound .....
import NotFound from '../Pages/NotFound/NotFound';

//import Components .....
import Nav from '../Components/Navigation/Nav';
import Footer from '../Components/Footer/Footer';

export default function Router() {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
      {/* Pages */}
    <Route 
          path='/'
          element={<Home/>}
        />
         <Route 
          path='/about'
          element={<About/>}
        />
        <Route 
          path='/audiobooks'
          element={<AudioBooks/>}
        />
         <Route 
          path='/library'
          element={<Library/>}
        />
        <Route 
          path='/articles'
          element={<Articles/>}
        />
        <Route 
          path='/contact'
          element={<Contact/>}
        />
        


        {/* Error Handler */}
        <Route 
          path='*'
          element={<NotFound/>}
        />
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

