import React from 'react';
import { useState } from 'react';
import './App.css';
import html2canvas from 'html2canvas';

function App() {
  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [imagen, setImagen] = useState('');

  const onChangeLinea1 = function (evento) {
    setLinea1(evento.target.value);
  }

  const onChangeLinea2 = function (evento) {
    setLinea2(evento.target.value);
  }

  const onChangeImagen = function (evento) {
    setImagen(evento.target.value);
  }

  const onClickExportar = function (evento) {
    html2canvas(document.querySelector("#memeImg")).then(canvas => {
      var img = canvas.toDataURL("image/png");

      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
    });
  }

  return (
    <div className="App">

      <select onChange={onChangeImagen}>
        <option value="admingod">Admin God</option>
        <option value="american_asian">Asiatico Americano</option>
        <option value="bts">BTS</option>
        <option value="burguer">Pasado de Burger</option>
        <option value="dox">IP Dox</option>
        <option value="insultos_raciales">N word</option>
        <option value="ora_del_dox">Oral del dox</option>
        <option value="sheen">Sheen xenofobo</option>
        <option value="stay_at_home">Quedate en casa</option>
        <option value="wtf_korean">뭐야 씨발?!</option>
      </select> <br />

      <input onChange={onChangeLinea1} type="text" placeholder="Linea 1" /> <br />
      <input onChange={onChangeLinea2} type="text" placeholder="Linea 2" /> <br />
      <button onClick={onClickExportar}>Exportar</button>

      <div className="img" id="memeImg">
        <span>{linea1}</span> <br />
        <span>{linea2}</span>
        <img src={"/memes/" + imagen + ".jpg"} />
      </div>
    </div>
  );
}

export default App;
