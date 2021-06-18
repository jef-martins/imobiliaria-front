import '../App.css';
import '../bootstrap.css';
import Header from '../components/header';
import Logo from '../components/logo';
import Footer from '../components/footer';
import Menu from '../components/menu';
import Itens from '../components/itens';


function Locacao() {
    return (
        <div>
            <Header />
            <Logo />
            <div className="container mt-4">
                <div className="row">
                    <div className="col-3">
                        <Menu />
                    </div>
                    <div className="col-9">
                        <Itens qtd="65"/>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Locacao;
