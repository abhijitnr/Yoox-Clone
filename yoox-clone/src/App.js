import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Allroutes from './Routes/AllRoutes';

function App() {
  return (
    <div className="App">
      {/* Navbar added */}
      <Navbar />
      {/* Allroutes is added */}
      <Allroutes />
      {/* Footer added */}
      <Footer />
    </div>
  );
}

export default App;
