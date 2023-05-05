import './App.css';
import { Button } from './Components/Button';
import { Navbar } from './Components/Navbar';
import { HomePage } from './Pages/HomePage';
import MainRoutes from './Pages/MainRoutes';

function App() {
  return (
    <div>
      <Navbar />

      <MainRoutes />
    </div>
  );
}

export default App;
