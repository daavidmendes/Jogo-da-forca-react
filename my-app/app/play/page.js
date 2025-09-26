'use client';

import React, { useState, useEffect } from 'react';
import { Letra } from '@/components/letra'
import { GameoverPopup } from '@/components/popup/gameoverPopup';
import { palavras } from './palavras';
import { Audio } from './audio';

export default function Play() {
  function rand(max) {
    return parseInt(Math.random() * max, 10);
  }

  const letras = palavras[rand(palavras.length - 1)].toUpperCase().split('');

  const [palavra, setPalavra] = useState([]);          // [{ content: 'A', active: false }, ...]
  const [input, setInput] = useState('');
  const [letrasMarcadas, setLetrasMarcadas] = useState([]); // [{ content: 'A', has: true/false }, ...]
  const [win, setWin] = useState(true);
  const [quantErros, setQuantErros] = useState(0);
  const [popupGameoverIsOpen, setPopupGameoverIsOpen] = useState(false);

  function ajeitarPalavra(p) {
    const uniqueArr = p.filter(
      (item, index, self) => index === self.findIndex(obj => obj.content === item.content)
    );
    setLetrasMarcadas(uniqueArr);
  }

  useEffect(() => {
    const formatacao = letras.map(letra => ({
      content: letra,
      active: false
    }));
    setPalavra(formatacao);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function jogada(l) {
    if (!l) return;

    // Copias imutáveis
    const novaFormatacao = palavra.map(letra => ({ ...letra }));
    let lm = letrasMarcadas.map(letra => ({ ...letra }));

    let encontrado = false;

    for (let i = 0; i < novaFormatacao.length; i++) {
      if (novaFormatacao[i].content.toUpperCase() === l.toUpperCase()) {
        novaFormatacao[i].active = true;
        encontrado = true;
        lm.push({
          content: novaFormatacao[i].content.toUpperCase(),
          has: true
        });
        ajeitarPalavra(lm);
      }
    }

    if (encontrado === false) {
      setQuantErros(prev => prev + 1);
      lm.push({
        content: l.toUpperCase(),
        has: false
      });

      if (quantErros >= 5) {
        setWin(false);
        setPopupGameoverIsOpen(true);
      }
    }

    setLetrasMarcadas(lm);
    setPalavra(novaFormatacao);

    // Verifica se completou usando o array atualizado
    const completo = novaFormatacao.every(p => p.active === true);
    setWin(completo);

    if (completo === true) {
      console.log('você venceu');
      setPopupGameoverIsOpen(true);
    } else {
      console.log('incompleto');
    }
  }

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  return (
    <main className="flex flex-col flex-1 h-screen">
      <section className="flex fixed top-0 w-screen b-bottom-1 h-60">
        <div className="b-1 w-40 h-60">
          <img
            src={`/person/stage${quantErros}.svg`}
            alt="forca"
            className="w-full h-full"
          />
        </div>
        <div className="flex items-center h-full flex-1 justify-center gap-2">
          {letrasMarcadas.map((l) =>
            l.has === true ? (
              <span key={`ok-${l.content}`}>{l.content}</span>
            ) : (
              <del key={`no-${l.content}`}>{l.content}</del>
            )
          )}
        </div>
      </section>

      <section className="flex items-center justify-center h-full gap-2 transform-3d">
        {palavra.map((letra, index) => (
          <Letra content={letra.content} active={letra.active} key={index} />
        ))}
      </section>

      <section className="flex items-center justify-center fixed bottom-0 bg-gray-400 w-screen p-4">
        <div className="bg-gray-300 overflow-hidden rounded-xl text-gray-800">
          <input
            className="py-4 px-8 focus:outline-none"
            type="text"
            placeholder="Digite uma letra"
            onChange={handleInput}
            value={input}
            maxLength={1}
          />
          <button
            className="bg-blue-400 py-4 px-8 text-white font-semibold cursor-pointer"
            onClick={() => {
              jogada(input);
              setInput('');
            }}
          >
            Enviar
          </button>
        </div>
      </section>

      <Audio />
      <GameoverPopup active={popupGameoverIsOpen} win={win} />
    </main>
  );
}
