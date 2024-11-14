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

    const ativarNoticia = async (id) => {
        try {
            const response = await fetch(`http://localhost:8082/noticias/ativar/${id}`, {
                method: 'PUT',
            });
            if (!response.ok) {
                throw new Error('Erro ao ativar a notícia');
            }
            setMensagem('Notícia ativada com sucesso!');
            fetchNoticias(); // Atualizar a lista de notícias
        } catch (error) {
            setMensagem(`Erro: ${error.message}`);
        }
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
                    
                    <div className="noticias-lista">
                        <h1>Painel Administrativo - Lista de Notícias</h1>
                        {noticias.map((noticia) => (
                            <div key={noticia.id} className="noticia-linha">
                                <div className="noticia-campo imagem-container">
                                    <img src={noticia.imagem} alt={noticia.titulo} className="imagem-pequena" />
                                </div>
                                <div className="noticia-campo">
                                    <strong>Título:</strong>
                                    <p>{noticia.titulo.substring(0, 50)}</p>
                                </div>
                                <div className="noticia-campo">
                                    <strong>Descrição:</strong>
                                    <p>{noticia.descricao.substring(0, 100)}...</p>
                                </div>
                                <div className="noticia-botoes">
                                    <button onClick={() => setEditandoNoticiaId(noticia.id)} className="btn editar">
                                        <i className="fas fa-edit"></i> Editar
                                    </button>
                                    <button onClick={() => excluirNoticia(noticia.id)} className="btn excluir">
                                        <i className="fas fa-trash"></i> Excluir
                                    </button>
                                    <button onClick={() => ativarNoticia(noticia.id)} className="btn ativar">
                                        <i className="fas fa-check-circle"></i> Ativar
                                    </button>
                                    <button className="btn visualizar">
                                        <i className="fas fa-eye"></i> Visualizar
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            )}
        </div>
    );
};

export default AdmListaNoticias;
