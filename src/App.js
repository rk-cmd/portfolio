import {useState} from 'react'

import NavBar from './components/NavBar'
import Content from './components/Content'
import Footer from './components/Footer'


import styled from 'styled-components'

function App() {

  const [ Sheets, setSheets] = useState ([
    {
      id: 1,
      heading: "ABOUT ME",
      description: "Hi, I'm Rohith. Contrary to popular belief, Lorem Ipsum is not simply random text. " +
                  "It has roots in a piece of classical Latin literature from 45 BC, making it over " + 
                  "2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in " + 
                  "Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem " + 
                  "Ipsum passage, and going through the cites of the word in classical literature, discovered " + 
                  "the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus " + 
                  "Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book " + 
                  "is a treatise on the theory of ethics, very popular during the Renaissance.",
      image: "others/rohith.jpg",
      position: 'left',
      background: '#C0C0C0',
      fontColor: '#404040'
    },
    {
      id: 2,
      heading: "QUALIFICATIONS",
      description: "Njanoru sambhavama. Contrary to popular belief, Lorem Ipsum is not simply random text. " +
                  "It has roots in a piece of classical Latin literature from 45 BC, making it over " + 
                  "2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in " + 
                  "Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem " + 
                  "Ipsum passage, and going through the cites of the word in classical literature, discovered " + 
                  "the undoubtable source.",
      image: "others/qualification.jpg",
      position: 'right',
      background: '#202020',
      fontColor: 'white'
    }
  ])

  const [ SocialMedia, setSocialMedia] = useState ([
    {
        id: 1,
        description: 'Whatsapp',
        iconUrl: 'others/whatsapp-brands.svg',
        linkUrl: 'https://web.whatsapp.com/'
    },
    {
        id: 2,
        description: 'Facebook',
        iconUrl: 'others/facebook-f-brands.svg',
        linkUrl: 'https://www.facebook.com/'
    },
    {
        id: 3,
        description: 'Instagram',
        iconUrl: 'others/instagram-brands.svg',
        linkUrl: 'https://www.instagram.com/'
    },
    {
        id: 4,
        description: 'LinkedIn',
        iconUrl: 'others/linkedin-in-brands.svg',
        linkUrl: 'https://in.linkedin.com/'
    },
])

  return (
    <Container id="container">
      <NavBar sheets={Sheets}/>
      <Content sheets={Sheets}/>
      <Footer socialMedia={SocialMedia}/>
    </Container>
  );
}

const Container = styled.div`
  // text-align: center;
  background-color: red;
  color: white;
  height: 100vh;
  // font-size: 4px;
  min-width: 320px;
`
export default App;
