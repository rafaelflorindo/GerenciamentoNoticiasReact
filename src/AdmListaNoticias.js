// ListaNoticias.js
import React, { useEffect, useState } from 'react';
import './ListaNoticias.css';
import EditarNoticia from './EditarNoticia';

const AdmListaNoticias = () => {
    const [noticias, setNoticias] = useState([]);
    const [mensagem, setMensagem] = useState('');
    const [editandoNoticiaId, setEditandoNoticiaId] = useState(null); // Estado para controlar a notícia em edição

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
        }
    };

    const excluirNoticia = async (id) => {
        if (window.confirm('Tem certeza que deseja excluir esta notícia?')) {
            try {
                const response = await fetch(`http://localhost:8080/noticias/${id}`, {
                    method: 'DELETE',
                });
                if (!response.ok) {
                    throw new Error('Erro ao excluir a notícia');
                }
                setMensagem('Notícia excluída com sucesso!');
                fetchNoticias(); // Atualizar a lista de notícias
            } catch (error) {
                setMensagem(`Erro: ${error.message}`);
            }
        }
    };
    const limitarTexto = (texto, limite = 250) => {
        if (texto.length > limite) {
            return texto.slice(0, limite) + '...';
        }
        return texto;
    };
    return (
        <div>
        
        {mensagem && <p>{mensagem}</p>}
        
        {editandoNoticiaId ? (
            <EditarNoticia 
                noticiaId={editandoNoticiaId} 
                aoSalvar={() => {
                    setEditandoNoticiaId(null); // Fecha o modo de edição
                    fetchNoticias(); // Atualiza a lista após salvar
                }} 
            />
        ) : (
            <div>
                <h1>Painel Administrativo - Lista de Notícias</h1>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Descrição</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {noticias.map((noticia) => (
                        <tr key={noticia.id}>
                            <td>{noticia.titulo}</td>
                            <td>{noticia.descricao.substring(0, 250)}...</td>
                            <td>
                                <button onClick={() => setEditandoNoticiaId(noticia.id)}>
                                    Editar
                                </button>
                                <button onClick={() => excluirNoticia(noticia.id)}>
                                    Excluir
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        )}
    </div>
    );
};

export default AdmListaNoticias;
