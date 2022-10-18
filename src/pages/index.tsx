import React from 'react'
import Head from 'next/head'

import RocketseatLogo from '../assets/rocketseat.svg'

import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  function androidOrIOS() {
    console.log(navigator.platform)
    const userAgent = navigator.userAgent;
    if(/android/i.test(userAgent)){
      console.log('android')
        return <h1>Android</h1>;
    }
    if(/iPad|iPhone|iPod/i.test(userAgent)){
      console.log('ios')
        return <h1>IOS</h1>;
    }
  }
return (
    <div>
      <button onClick={androidOrIOS}>Clique aqui para testar</button>
    </div>
  )
}

export default Home
