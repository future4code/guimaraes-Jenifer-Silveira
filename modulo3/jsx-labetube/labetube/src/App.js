import React from 'react'
import {NavButton} from './Components/NavButton'
import VideoCard from './Components/VideoCard'
import { StyledFooter, StyledHeader } from './styled'
import './styles.css'


function App() {

  return (
    <div>
      <div className="tela-inteira">
        <StyledHeader>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </StyledHeader>

        <main>
          <nav className="menu-vertical">
            <ul>
              <NavButton texto={'Inicio'}/>
              <NavButton texto={'Em alta'}/>
              <NavButton texto={'Inscrições'}/>
              <NavButton texto={'Originais'}/>
              <NavButton texto={'Biblioteca'}/>
              <NavButton texto={'Histórico'}/>
              
            </ul>
          </nav>

          <section className="painel-de-videos">

            <VideoCard imagem={'https://picsum.photos/400/400?a=1'}  titulo={'Titulo 1'}/>
            <VideoCard imagem={'https://picsum.photos/400/400?a=2'}  titulo={'Titulo 2'}/>
            <VideoCard imagem={'https://picsum.photos/400/400?a=3'}  titulo={'Titulo 3'}/>
            <VideoCard imagem={'https://picsum.photos/400/400?a=4'}  titulo={'Titulo 4'}/>
            <VideoCard imagem={'https://picsum.photos/400/400?a=5'}  titulo={'Titulo 5'}/>
            <VideoCard imagem={'https://picsum.photos/400/400?a=6'}  titulo={'Titulo 6'}/>
            <VideoCard imagem={'https://picsum.photos/400/400?a=7'}  titulo={'Titulo 7'}/>
            <VideoCard imagem={'https://picsum.photos/400/400?a=8'}  titulo={'Titulo 8'}/>
            
          </section>
        </main>

        <StyledFooter>
          <h4>Oi! Eu moro no footer!</h4>
        </StyledFooter>
      </div>
    </div>
  );
}

export default App;
