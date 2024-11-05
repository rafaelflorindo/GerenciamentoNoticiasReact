// Routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//importando componente de tela
import Menu from './Menu';
import Footer from './Footer';

//importando os componentes de rotas
import Home from './Home';
import QuemSomos from './QuemSomos';
import Noticias from './Noticias';
import Contato from './Contato';
import DetalheNoticia from './DetalheNoticia'
import CadastroNoticia from './CadastroNoticia';
import AdmListaNoticias from './AdmListaNoticias';

function AppRoutes() {
    return (
        <Router>
            <Menu />
            <Routes>
                <Route path="/QuemSomos" element={<QuemSomos />} />
                <Route path="/Noticias" element={<Noticias />} />
                <Route path="/DetalheNoticia/:id" element={<DetalheNoticia />} />
                <Route path="/CadastroNoticia" element={<CadastroNoticia />} />
                <Route path="/AdmListaNoticias" element={<AdmListaNoticias />} />
                <Route path="/Contato" element={<Contato />} />
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default AppRoutes;
//<Route path="/" element={<h1>Bem-vindo à nossa página inicial!</h1>} />