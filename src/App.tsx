import './App.css'
import Index from './pages'
import 'bootstrap/dist/css/bootstrap.min.css';
import TiledBackground from './components/TiledBackground';

function App() {

  return (
    <>
      <TiledBackground />
      <div className="header-wrapper">
        <Index />
      </div>
    </>
  )
}

export default App
