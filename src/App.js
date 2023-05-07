import './App.css';
import { Button } from './Components/Button';
import { Footer } from './Components/Footer';
import { Navbar } from './Components/Navbar';
import { HomePage } from './Pages/HomePage';
import MainRoutes from './Pages/MainRoutes';

function App() {
  return (
    <div style={{fontFamily:'sans-serif'}}>
      <Navbar />

      <MainRoutes />
      <Footer/>
    </div>
  );
}

export default App;
