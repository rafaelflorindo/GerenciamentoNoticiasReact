// Contato.js
import React, { useState } from 'react';
import './FormularioContato.css'; // Opcional: estilo para o formulário

const Contato = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [descricao, setDescricao] = useState('');
    const [mensagem, setMensagem] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();//impede que a página seja recarregada ao enviar o formulário.

        // Validação simples
        if (!nome || !email || !descricao) {
            setMensagem('Por favor, preencha todos os campos.');
            return;
        }

        // Aqui você pode fazer algo com os dados do formulário, como enviá-los para um servidor
        console.log('Nome:', nome);
        console.log('E-mail:', email);
        console.log('Descrição:', descricao);

        alert('Um nome foi enviado: ' + nome);
        

        // Limpar os campos após o envio
        setNome('');
        setEmail('');
        setDescricao('');
        setMensagem('Mensagem enviada com sucesso!');
    };

    return (
        <div className="formulario-contato">
            <h2>Contato</h2>
            {mensagem && <p className="mensagem">{mensagem}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nome">Nome:</label>
                    <input
                        type="text"
                        id="nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">E-mail:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="descricao">Descrição:</label>
                    <textarea
                        id="descricao"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default Contato;

/*
import React from 'react';

class Contato extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Um nome foi enviado: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Nome:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Enviar" />
        </form>
      );
    }
  }
  export default Contato;

  */