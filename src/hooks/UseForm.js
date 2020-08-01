import {useState} from 'react';

function useForm(valoresIniciais) {
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

  function clearform() {
    setVelues(valoresIniciais);
  }

  return {
    values,
    handleChange,
    clearform,
  };
}

export default useForm;