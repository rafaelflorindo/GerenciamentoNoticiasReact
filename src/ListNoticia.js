import React from 'react';
import './ListNoticia.css'

// Componente para um item de notícia
const ItemNoticia = ({ titulo, descricao, imagem }) => {
  return (
    <div className="news-item">
      {imagem && <img src={imagem} alt={titulo} className="news-image" />}
      <h2 className="news-title">{titulo}</h2>
      <p className="news-description">{descricao}</p>
    </div>
  );
};

// Componente para listar notícias
const ListNoticia = ({ news }) => {
  return (
    <div className="news-list">
      {news.map((item, index) => (
        <ItemNoticia 
          key={index} 
          titulo={item.titulo} 
          descricao={item.descricao} 
          imagem={item.imagem} 
        />
      ))}
    </div>
  );
};

export default ListNoticia;