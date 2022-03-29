import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import NotFound from './Components/NotFound/NotFound';
import Shop from './Components/Shop/Shop';

function App() {
  return (
    <div>
      <Header/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
