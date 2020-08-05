import React, { useEffect, useState } from 'react';
// import Menu from '../../components/Menu';
import PageDefaelt from '../../components/PageDefault';
// import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
// import Footer from '../../components/Footer';
// import URL_BACKEND from '../../config';
import categoriasRepository from '../../repositories/categorias';

// vercel - connect with git and create an online version

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos() // eu tinha deixado um;
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos);
      })// aqui não se usa ;
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div style={{ backgroundColor: '#141414' }}>
      <PageDefaelt paddingAll={0}>

        {dadosIniciais.length === 0 && (<div>Loading...</div>)}

        {/* {JSON.stringify(dadosIniciais)} */}

        {dadosIniciais.map((categoria, indice) => { //estava categoria
          if (indice === 0) {
            return (
              <div key={categoria.id}> {/*estava categoria*/}
                <BannerMain
                  videoTitle={dadosIniciais[0].videos[0].titulo}
                  url={dadosIniciais[0].videos[0].url}
                  videoDescription=""
                />

                <Carousel
                  ignoreFirstVideo
                  category={dadosIniciais[0]}
                />
              </div>
            );
          }

          return (
            <Carousel
              key={categoria.cor} //estava categoria.
              category={categoria} //estava categoria
            />
          );
        })}

      </PageDefaelt>
    </div>
  );
}

export default Home;
