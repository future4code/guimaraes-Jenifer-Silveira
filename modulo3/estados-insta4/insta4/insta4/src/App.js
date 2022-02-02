import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import foto1 from '../src/img/mae.jpeg';
import foto2 from '../src/img/maeepai.jpeg';
import foto3 from '../src/img/eu.jfif';
import foto4 from '../src/img/euemae.jpeg';
import foto5 from '../src/img/kin.jpeg';
import foto6 from '../src/img/nina.jpeg';
// import foto2 from '../img'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'Bette Kindermann'}
          fotoUsuario={foto1}
          fotoPost={foto2}
        />

<Post
          nomeUsuario={'Jenifer Kindermann'}
          fotoUsuario={foto3}
          fotoPost={foto4}
        />

<Post
          nomeUsuario={'Akin Kindermann'}
          fotoUsuario={foto5}
          fotoPost={foto6}
        />
      </MainContainer>
    );
  }
}

export default App;
