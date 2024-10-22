// Noticias.js
import React from 'react';
import './ListNoticia.css'

// Componente para um item de notícia
const ItemNoticia = ({ titulo, imagem }) => {
  return (
    <div className="news-item">
      {imagem && <img src={imagem} alt={titulo} className="news-image" />}
      <h2 className="news-title">{titulo}</h2>
    </div>
  );
};

// Componente para listar notícias
const ListarNoticias = ({ news }) => {
  return (
    <div className="news-list">
      {news.map((item, index) => (
        <ItemNoticia 
          key={index} 
          titulo={item.titulo} 
          imagem={item.imagem} 
        />
      ))}
    </div>
  );
};

export default ListarNoticias

//<p className="news-description">{descricao}</p>