import React, { useEffect, useState } from 'react'


import { useRouter } from 'next/dist/client/router'
import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  const [device, setDevice] = useState([])
  const router = useRouter()

  useEffect(() => {
    function androidOrIOS() {
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
  }, [])



return (
    <div>
      <Container>
      <h3>Você será direcionado para sua loja de aplicativos</h3>
      </Container>

    </div>
  )
}

export default Home
