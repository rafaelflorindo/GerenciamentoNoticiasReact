import React, { useEffect, useState } from 'react';
import ListNoticia from './ListarNoticias';
import './Main.css';

function Noticias(){
    const [noticias, setNoticias] = useState([]);
    const [mensagem, setMensagem] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchNoticias();
    }, []);

    const fetchNoticias = async () => {
        try {
            const response = await fetch('http://localhost:8082/noticias');
            if (!response.ok) {
                throw new Error('Erro ao buscar notícias');
            }
            const data = await response.json();
            setNoticias(data);
        } catch (error) {
            setMensagem(`Erro: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <p>Carregando...</p>;
    }

    if (error) {
        return <p>Erro: {error}</p>;
    }
    return(
        <div className='Main'>
            <div className="app">
            {mensagem && <p>{mensagem}</p>}
                <h1>Tecnologia & Programação</h1>
                <ListNoticia news={noticias} />
            </div>
        </div>
    )

}
export default Noticias;