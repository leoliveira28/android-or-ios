import React, { useState } from 'react'
import Head from 'next/head'

import RocketseatLogo from '../assets/rocketseat.svg'

import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  const [device, setDevice] = useState([])
  function androidOrIOS() {
    setDevice([{id: 1, deviceName: navigator.platform}])
    const userAgent = navigator.userAgent;
    if(/android/i.test(userAgent)){
      setDevice([{id: 1, deviceName: navigator.platform}])
      return 'android';
    }
    if(/iPad|iPhone|iPod/i.test(userAgent)){
      console.log('ios')
        return <h1>IOS</h1>;
    }
  }
return (
    <div>
      <button onClick={androidOrIOS}>Clique aqui para testar</button>
      {device.map(device =>
        <h1>{device.deviceName}</h1>
        )}
    </div>
  )
}

export default Home
