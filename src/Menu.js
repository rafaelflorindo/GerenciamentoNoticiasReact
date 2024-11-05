import './Menu.css';
import { Link } from 'react-router-dom';

function Menu(){
    return(
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/QuemSomos">Quem Somos</Link></li>
                <li><Link to="/Noticias">Noticias</Link></li>
                <li><Link to="/Contato">Contato</Link></li>
                <li><Link to="/CadastroNoticia">ADM - Cadastro de Noticias</Link></li>
                <li><Link to="/AdmListaNoticias">ADM - Listando Noticias</Link></li>
            </ul>
        </nav>
    );
}
export default Menu;