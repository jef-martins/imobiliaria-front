import '../App.css';
import '../bootstrap.css';
import Header from '../components/header';
import Logo from '../components/logo';
import PesquisaAvancada from '../components/pesquisaAvancada';
import Slider from '../components/slider';
import Destaque from '../components/destaque';
import Card from '../components/card';
import Footer from '../components/footer';
import { Component } from 'react';
import Road from '../img/road.jpg';


class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Logo />
        <Slider />
        <PesquisaAvancada />
        <Destaque descricao="DESTAQUES PARA VENDA" foto={Road}/>
        <Destaque descricao="DESTAQUES PARA LOCAÇÃO" foto={Road}/>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <Card titulo="Quem somos" descricao="Marília Imóveis, esta é a nossa marca no mercado imobiliário desde 2002." />
            <Card titulo="Cadastre seu imóvel" descricao="Anuncie conosco! Nós encontraremos o melhor negócio para você." />
            <Card titulo="Financiamento" descricao="As melhores ofertas de crédito para você financiar seu imóvel." />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Home;


/* {
  this.state.fotos.map((item) =>
      <img key={item.idFoto} style={{ width: "100px" }} src={item.url}></img>
  )
} */