import React from 'react';
import './App.css';

import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem = {'https://scontent.ffln10-1.fna.fbcdn.net/v/t1.6435-9/62468627_1069500719921161_8964596108332367872_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEuQngko5EcZBnxTx1slnD_wT3Bw_Vjm9vBPcHD9WOb2-jGCsr_0sNkBNqybjm4krUmfuM5NSx3aovZlgTHKPfs&_nc_ohc=mVlzk54HCKQAX9ul5VX&_nc_ht=scontent.ffln10-1.fna&oh=00_AT98PuapQZ9uHPYGBvE-fcLD-jzAacSv8hqHT5BhsLLzCg&oe=62190F29'} 
          descricao={"Olá, Me chamo Jenifer Kindermann e sou programadora. Atualmente realizo o curso de Desenvolvedora FullStack na instituição Labenu, mas também já fiz os cursos de Lógica de programação, front-end e banco de dados SQL. Meu foco é trabalhar com o desenvolvimento de websites, tanto em projetos Front-end, quanto o Back-end ."}
        />
        
        <ImagemButton 
          imagem={"https://image.flaticon.com/icons/png/512/117/117472.png" }
          texto={"Ver mais"}
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={"https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" }
          nome={"Labenu"} 
          descricao={"Formando desenvolvedores para o mercado de trabalho!"}
        />
        
        <CardGrande 
          imagem={"https://imagens.canaltech.com.br/empresas/4418.400.jpg" }
          nome={"NASA"} 
          descricao={"Apontando defeitos."} 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem={"https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"} 
          texto={"Facebook" }
        />        

        <ImagemButton 
          imagem={"https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"} 
          texto={"Twitter"} 
        />        
      </div>
    </div>
  );
}

export default App;
