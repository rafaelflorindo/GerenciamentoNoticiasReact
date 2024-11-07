// EditarNoticia.js
import React, { useEffect, useState } from 'react';
import './CadastroNoticia.css'; // Usar o mesmo estilo do cadastro, se aplicável

const EditarNoticia = ({ noticiaId, aoSalvar }) => {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [link, setLink] = useState('');
    const [imagem, setImagem] = useState('');
    const [mensagem, setMensagem] = useState('');

    useEffect(() => {
        // Carrega os dados da notícia ao montar o componente
        const carregarNoticia = async () => {
            try {
                const response = await fetch(`http://localhost:8082/noticias/${noticiaId}`);
                if (!response.ok) {
                    throw new Error('Erro ao carregar notícia');
                }
                const data = await response.json();
                setTitulo(data.titulo);
                setDescricao(data.descricao);
                setLink(data.link);
                setImagem(data.imagem);
            } catch (error) {
                setMensagem(`Erro: ${error.message}`);
            }
        };

        if (noticiaId) {
            carregarNoticia();
        }
    }, [noticiaId]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const noticia = { titulo, descricao, link, imagem };

        try {
            const response = await fetch(`http://localhost:8082/noticias/${noticiaId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(noticia),
            });

            if (!response.ok) {
                throw new Error('Erro ao atualizar a notícia');
            }

            setMensagem('Notícia atualizada com sucesso!');
            
            if (aoSalvar) aoSalvar(); // Callback para atualizar a lista de notícias após salvar

        } catch (error) {
            setMensagem(`Erro: ${error.message}`);
        }
    };

    return (
        <div className='formulario-noticia'>
            <h1>Painel Administrativo - Editar Notícia</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Título:</label>
                    <input
                        type="text"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Descrição:</label>
                    <textarea
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Link:</label>
                    <input
                        type="url"
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Imagem (URL):</label>
                    <input
                        type="url"
                        value={imagem}
                        onChange={(e) => setImagem(e.target.value)}
                    />
                </div>
                <button type="submit">Salvar Alterações</button>
            </form>
            {mensagem && <p className='mensagem'>{mensagem}</p>}
        </div>
    );
};

export default EditarNoticia;
