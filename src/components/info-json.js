import  React, { Component } from "react";

import Epyphny from "./img/epypha.jpg";
import EpyphnyImg from "./img/EhN8T5hWoAYlzOx.jpg";
import belarus from "./img/belarus.jpg";
import navalny from "./img/F2Aws-10.jpg";
import china from "./img/q_0-Yddo.jpg";

const Information = [
  {
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male",
  },
  {
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female",
  },
  {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666",
  },
  {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female",
  },
  {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male",
  },
  {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male",
  },
];

export const userList = [
  {
    name: "Митрополит Епіфаній",
    tasks: "Epifaniy",
    backgroundImage: `url(${Epyphny})`,
    p:
      "Ми маємо почати дивитися під «екологічним» кутом зору на все наше життя, прагнути зробити екологічно чистими наші звички, і на основі Слова Божого і духовної мудрості Церкви переосмислити екологічну культуру життя, виробництва і споживання. І нехай нам допоможе у цьому Господь!",
    srsimg: `${EpyphnyImg}`,
    likes: 510,
    comments: 30,
    shares: 54,
    time: "15 год",
  },
  {
    name: "Украънська правда",
    p: "Глава МВС Білорусі: Наша міліції найгуманніша міліція в світі",
    link: "https://t.co/VrozL1hGzv?amp=1",
    backgroundImage: `url(${"https://pbs.twimg.com/profile_images/1250728995341111296/R7DHZ3zY_bigger.jpg"})`,
    srsimg: `${belarus}`,
    likes: 15,
    tasks: "ukrpravda_news",
    comments: 3,
    shares: 4,
    time: "13 хв",
  },
  {
    name: "TСН",
    p:
      "У Росії озвучили власну версію погіршення здоров'я Навального та розповіли про хід перевірки",
    tasks: "tsnua",
    link:
      "https://tsn.ua/svit/u-rosiyi-ozvuchili-vlasnu-versiyu-pogirshennya-zdorov-ya-navalnogo-ta-rozpovili-pro-hid-perevirki-1620460.html",
    backgroundImage: `url(${"https://pbs.twimg.com/profile_images/1235120916562051073/iIRGqz9__bigger.png"})`,
    srsimg: `${navalny}`,
    likes: 32,
    comments: 34,
    shares: 6,
    time: "59 хв",
  },
  {
    name: "Edward Wong",
    p:
      "NEW: China has stopped renewing press cards for journalists at US organizations. Chinese officials imply journalists will be expelled if Trump administration doesn’t renew visas of Chinese media employees this fall. CNN, WSJ and Getty are all affected.",
    tasks: "ewong",
    backgroundImage: `url(${"https://pbs.twimg.com/profile_images/205473227/Wong1_Becherer0306_bigger.jpg"})`,
    srsimg: `${china}`,
    likes: 239,
    comments: 10,
    shares: 273,
    time: "10 год",
  },
];

export default Information;
