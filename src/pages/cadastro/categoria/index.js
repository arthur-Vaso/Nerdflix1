import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import Formfield from '../../../components/FormField';
import Button from '../../../components/Button';
/* import { useState } from 'react'; */

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setVelues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setVelues({
      ...values,
      [chave]: valor,
    });
  }
  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }
  // first commit
  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL = window.location.hostname.includes('localhost')
        ? 'http://localhost:8080/categorias'
        : 'https://nerdflix1.herokuapp.com/categorias'; // a url para por online vai aqui
      fetch(URL)
        .then(async (respostaDoServer) => {
          if (respostaDoServer.ok) {
            const resposta = await respostaDoServer.json();
            // setCategorias(resposta);
          }
          // throw new Error('Não foi possível pegar os dados');
        });
    }
  }, []);

  { /* informa erro
    function handleChange(infosDoEvento){
    const { getAttribute, value } = infosDoEvento.target;
    setValue(
      getAttribute('name'),
       value);
  } */ }

  return (
    <PageDefault>
      <h1>
        Cadastro de categoria:
        {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);

        setVelues(valoresIniciais);
      }}
      >
        <Formfield
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />
        <Formfield
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <Formfield
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          {/* Cargando... */}
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para a home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
