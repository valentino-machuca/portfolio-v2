import React from 'react';
import { useSelector } from 'react-redux';
import s from './Home.module.scss';

//framer motion
import { AnimatePresence } from 'framer-motion';
import Techs from '../Techs/Techs';
import Card from '../Card/Card';
import Nav from '../Nav/Nav';
import About from '../About/About';

//data
import boreal from '../Resources/boreal/boreal.webp';
import boreal2 from '../Resources/boreal/boreal2.jpg';
import boreal3 from '../Resources/boreal/boreal3.jpg';
import boreal4 from '../Resources/boreal/boreal4.jpg';

import hangloose from '../Resources/hangloose/hangloose.png';
import hangloose2 from '../Resources/hangloose/hangloose2.png';
import hangloose3 from '../Resources/hangloose/hangloose3.png';
import hangloose4 from '../Resources/hangloose/hangloose4.png';

import weather from '../Resources/weather/weather.png';
import weather2 from '../Resources/weather/weather2.png';
import weather3 from '../Resources/weather/weather3.png';
import weather4 from '../Resources/weather/weather4.png';

import jobhub from '../Resources/jobhub/jobhub.png';
import jobhub2 from '../Resources/jobhub/jobhub2.png';
import jobhub3 from '../Resources/jobhub/jobhub3.png';
import jobhub4 from '../Resources/jobhub/jobhub4.png';

let borealData = {
  name: 'Boreal Technologies',
  description: 'Desde noviembre de 2023, trabajo como desarrollador web en una consultora IT, participando activamente en diversos proyectos como desarrollador full stack. Esta experiencia ha fortalecido mis conocimientos en entornos de trabajo real, permitiéndome enfrentar desafíos técnicos y colaborar eficazmente en equipos multidisciplinarios.',
  img1: boreal,
  img2: boreal2,
  img3: boreal3,
  img4: boreal4,
  link: 'https://it.borealtech.com/',
}

let hanglooseData = {
  name: 'Hangloose',
  description: 'Hangloose es un sitio que lista videojuegos, los cuales se pueden filtrar, ordenar y buscar, además se pueden crear titulos propios mediante formulario controlado. En este proyecto individual logré poner en practica de manera conjunta mis conocimientos full stack, utilizando tecnologías tales como react, redux, express, sequelize.',
  img1: hangloose,
  img2: hangloose2,
  img3: hangloose3,
  img4: hangloose4,
  link: 'https://hangloose-games.vercel.app/',
}

let weatherData = {
  name: 'Weather App',
  description: 'Weather App es una web de clima en la que se puede solicitar, a la api openweather, la informacion del clima de lugares especificos. Aquí puse en practica por primera vez mis habilidades en React, react-router-dom y estados.',
  img1: weather,
  img2: weather2,
  img3: weather3,
  img4: weather4,
  link: 'https://weather-appv.vercel.app/',
}

let jobhubData = {
  name: 'JobHub',
  description: 'JobHub es un proyecto full stack grupal que nació con el objetivo de conectar personas con profesionales que ofrezcan sus servicios. Con este proyecto logré reforzar mis habilidades blandas como el trabajo en equipo y la metodología SCRUM. En este proyecto cumplí el rol de Front End Developer.',
  img1: jobhub,
  img2: jobhub2,
  img3: jobhub3,
  img4: jobhub4,
  link: 'https://jobhub.vercel.app/',
}

const Home = () => {
    const joined = useSelector(state => state.joined);
    const night = useSelector(state => state.night);

  return (
    <div className={joined ? `${s.container} ${night ? '' : s.day }` : s.noDisplay} >
        <AnimatePresence>
          {
            joined &&
            <>
            <Nav />
            <div className={s.content}>
                <div className={s.about}>
                    <About />
                    <Techs />
                </div>
                <div className={s.cards}>
                  <Card data={borealData}/>
                  <Card data={jobhubData}/>
                  <Card data={hanglooseData}/>
                  <Card data={weatherData}/>
                </div>
            </div>
            </>
          }
        </AnimatePresence>
    </div>
  )
}

export default Home;