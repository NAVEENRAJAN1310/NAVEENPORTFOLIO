import React, { useState } from 'react'
import "./Home.css"
import { useDime } from '../context/Context';

import {paragraphStyle, h1Style} from "./HomeStyles"

const Home = () => {

  const [text] = useState("build and test");

  const dimensions = useDime();



  return (
    <div id="home">
        <div class="homeContainer">
          <h3>Hi, my name is</h3>
          <h1 style={{...h1Style(dimensions.windowPos.wwidth)}}>NAVEEN RAJAN.</h1>
          <h2 style={{...h1Style(dimensions.windowPos.wwidth)}}>I <span>{text}</span> things for the web </h2>
          <p style={{...paragraphStyle(dimensions.windowPos.wwidth)}}>I am a software engineer who have vast experience in Testing and handful experience in developement. Currently I am focused on creating mutiple automation frameworks to make testers life easier</p>
        </div>
    </div>
  )
}

export default Home