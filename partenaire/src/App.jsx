import './App.css';
import { Route , Routes } from 'react-router-dom';
import Login from './Pages/Login';
import InfoBar from './Composant/InfoBar';
import Produit from './Composant/Produit';
import ProposerProduit from './Pages/ProposerProduit';
import Button from './Composant/Button';
import Accueil from './Pages/Accueil';
import Reclamer from './Pages/reclamer';
import ConsulteFinance from './Pages/ConsulteFinance';
import { RequireAuth } from 'react-auth-kit';

function App() {
  return (
    <div>
      
      <Routes>
        <Route index path='/' element={<Login />}/>
        <>
        <Route  path='/Proposer' element={<RequireAuth loginPath='/'><ProposerProduit /></RequireAuth>}/>
        <Route path='/Accueil' element={<RequireAuth loginPath='/'><Accueil/></RequireAuth>}/>
        <Route path='/reclamer' element={<RequireAuth loginPath='/'><Reclamer/></RequireAuth>}/>
        <Route path='/Consulter' element={<RequireAuth loginPath='/'><ConsulteFinance/></RequireAuth>}/>
        </>
      </Routes>
    </div>
  );
}

export default App;
