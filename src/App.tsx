//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import { TopContent } from "./components/TopContent";
import { Search } from "./components/Search";
import { Banner } from "./components/Banner";
import { LowerContent } from "./components/LowerContent";
import './App.css'

// пропсы для компонента TopContent
export const topcontent = { 
  topicTitle: [
   "Сечас в СМИ",
    "в Германии",
    "Рекомендуем", 
  ],

  date: '31 июля, среда 02 32',
     
  newsList: [
    {after: "вести", text: "Путин упростил получение мобильных номеров", icon: "iconNews/redNews.jpg"},
    {after: "вести", text:"В команде Зеленского раскрыли план реформ на Украине", icon: "iconNews/redNews.jpg"},
    {after: "Неизвестный", text:"'Турпомощ' прокоментировала гибель десятков россиян в Анталье ", icon: "iconNews/hugo.jpg"},
    {after: "Неизвестный", text:"Суд закрыл дело Демпартии США против России", icon: "iconNews/hugo.jpg"},
    {after: "весНеизвестный", text:"На Украине призвали создать ракеты для удара по Москве", icon: "iconNews/hugo.jpg"},
  ],

  stockPrises: [
     {name: 'USD MOEX', prise: 63.52, percent: "+" + 0.09},
    {name: 'EUR MOEX', prise: 63.52, percent: "+" + 0.14},
    {name: 'НЕФТЬ', prise: 64.90, percent: "+" + 1.63 + "%"},
  ]
 }

 const banner = 'baners/2222235.png'; //баннер для компонента Banner

 // пропсы для компонента LowerContent
 export const lowerContent = {
  title: {
    columLeftFirstTitle: 'Погода',
    columLeftSecondTitle: 'Посещаемое',
    columnCenterFirstTitle: "Карта Германии",
    columnCenterSecondTitle: "Телепрограмма",
    columnRightTitle: "Эфир",
  },
  
  weather: {
    weatherIcon: 'iconWeather/1584881280_2430.png',
    temperature: '+17',
    morningTemperature: "+17",
    daiTemperature: "+17",
  },

  visited: [
    "Недвижимость - о сталинках",
    "Маркет - люстры и светильники",
    "Авто.ру - привод 4x4 до 500 000",
  ],

  columnCenterFirstInfo: "Расписание",

  programmTV: [
    {programm: "02:00 ТНТ.Best ТНТ", canal: "ТНТ internetional"},
    {programm: "02:00 ТНТ.Best ТНТ", canal: "Карусель INT"},
    {programm: "02:00 ТНТ.Best ТНТ", canal: "Первый"},
  ],

  air: [
    {programm: "Управление как искуство", canal: "Успех"},
    {programm: "Ночь. Мир в это время", canal: "eathTV"},
    {programm: "Андрей Возн...", canal: "Совершенно секретно"}, 
  ]

 }

function App() {
  //const [count, setCount] = useState(0)
  return (
    <>
      <TopContent top={topcontent} />
      <Search />        
      <Banner bn={banner} />
      <LowerContent lc={lowerContent} />              
    </>
  )
}

export default App
