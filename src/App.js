import './App.css';
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
