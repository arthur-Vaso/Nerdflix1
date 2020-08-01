import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;
function create(obetoDoVideo) {
  // console.log(config.URL_BACKEND);
  return fetch(`${URL_VIDEOS}`, {
    method: 'POST',
    headers: {
      'content-type': 'aplication/json',
    },
    body: JSON.stringify(obetoDoVideo),
  })
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possivel cadastrar o video :(');
    });
}

export default {
  create,
};
