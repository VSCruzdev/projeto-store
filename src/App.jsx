// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './pages/Layout'; // Seu componente de layout
import { HomePage } from './pages/HomePage';
import { ProductListingPage } from './pages/ProductListingPage'; // Assumindo que você tem esta página
import { Categorias } from './pages/Categorias'; // Assumindo que você tem esta página
import { MeusPedidos } from './pages/MeusPedidos'; // Assumindo que você tem esta página
import './App.css'; // Seu CSS global

function App() {
  return (
    <Router>
      <Routes>
        {/* A rota principal "/" renderiza o Layout, e o Layout renderiza o HomePage como filho */}
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/HomePage" element={<Layout><HomePage /></Layout>} />
        <Route path="/ProductListingPage" element={<Layout><ProductListingPage /></Layout>} />
        <Route path="/Categorias" element={<Layout><Categorias /></Layout>} />
        <Route path="/MeusPedidos" element={<Layout><MeusPedidos /></Layout>} />
        {/* Adicione outras rotas conforme necessário, sempre envolvendo-as com o Layout */}
      </Routes>
    </Router>
  );
}

export default App;