import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/UseForm';
import Formfield from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriaRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  // console.log(categorias.titulo);
  // const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleChange, values } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  useEffect(() => {
    categoriaRepository.getAll().then((categoriasFromServer) => {
      setCategorias(categoriasFromServer);
    });
    setCategorias();
  }, []); // NÃO ESQUECER DO [] PARA NAO MANDAR um ZILHAO DE REQUESTS PARA O SERVER

  return (
    <PageDefault>
      <h1>Cadastro de video</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        // eslint-disable-next-line no-alert
        // alert('Video cadastrado com sucesso!!!');

        const categoriaEscolhida = categorias.find((categoria) => categoria.titulo === values.categoria);
        // estava const categoriaEscolhida = categorias.find((categoria) => categoriastitulo === values.categoria);

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: 1,
        })
          .then(() => {
            history.push('/');
          });
      }}
      >

        <Formfield
          label="Titulo do video"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />
        <Formfield
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />
        <Formfield
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestion="nome" // estava sugestions
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      <Link to="/cadastro/categoria">
        Cadastrar categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
