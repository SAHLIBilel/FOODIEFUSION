import EspaceAdmin from './Pages/EspaceAdmin';
import Login from './Pages/login';
import logo from './logo.svg';
import {Route , Routes} from 'react-router-dom'

function App() {
  return (
    <>
    <Routes>
      <Route index path='/' element={<Login/>}/>
      <Route path='/EspaceAdmin' element={<EspaceAdmin/>}/>
    </Routes>
    </>
  );
}

export default App;
