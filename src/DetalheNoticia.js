//DetalheNoticia.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DetalheNoticia = () => {
    const { id } = useParams();
    const [noticia, setNoticia] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNoticia = async () => {
            try {
                const response = await fetch(`http://localhost:8082/noticias/${id}`);
                if (!response.ok) {
                    throw new Error('Erro ao buscar a notícia');
                }
                const data = await response.json();
                setNoticia(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchNoticia();
    }, [id]);

    if (loading) {
        return <p>Carregando...</p>;
    }

    if (error) {
        return <p>Erro: {error}</p>;
    }

    return (
        <div>
            <h1>Detalhes da Notícia {id}</h1>
            {noticia ? (
                <div>
                    {noticia.imagem && <img src={noticia.imagem} alt={noticia.titulo} className="news-image" />}
                    <h2>{noticia.titulo}</h2>
                    <p>{noticia.descricao}</p>
                </div>
            ) : (
                <p>Notícia não encontrada.</p>
            )}
        </div>
    );
};

export default DetalheNoticia;