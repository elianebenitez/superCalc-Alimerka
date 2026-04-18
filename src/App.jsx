import { Link, Outlet} from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div>
      {/* Este Navbar se verá en TODAS las páginas */}
      <nav>
        <div>navbar</div>
      </nav>

      <main>
        {/* Aquí es donde se "inyectan" Home o About según la URL */}
        <Outlet />
      </main>
      
      <footer>footer</footer>
    </div>
  );
}

export default App
