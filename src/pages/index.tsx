import React, { useState } from 'react'


import { useRouter } from 'next/dist/client/router'
import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  const [device, setDevice] = useState([])
  const router = useRouter()
  function androidOrIOS() {
    setDevice([{id: 1, deviceName: navigator.platform}])
    const userAgent = navigator.userAgent;
    if(/android/i.test(userAgent)){
      setDevice([{id: 1, deviceName: 'Sou Android'}])
      router.push('https://play.google.com/store/apps/details?id=br.com.triibo.segcap')
      return 'android';
    }
    if(/iPad|iPhone|iPod/i.test(userAgent)){
      router.push('https://apps.apple.com/br/app/sorte-sa%C3%BAde/id1626853627')
      setDevice([{id: 1, deviceName: 'Sou Ios'}])
        return 'ios';
    }
  }
return (
    <div>
      <Container>
      <button onClick={androidOrIOS}>Clique aqui para testar</button>
      </Container>

    </div>
  )
}

export default Home
