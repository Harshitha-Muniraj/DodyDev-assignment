
import './App.css';
import { ParallaxProvider } from "react-scroll-parallax";
import Header from './HomePage/Header/Header';
import Main from './HomePage/Body/Main';
import Foot from './HomePage/Footer/Footer';

function App() {
  return (
    
    <ParallaxProvider>
    <Header/>
    <Main/>
    <Foot/>
    </ParallaxProvider>
   
  );
}

export default App;
