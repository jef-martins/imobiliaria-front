import '../App.css';
import '../bootstrap.css';
import Header from '../components/header';
import Logo from '../components/logo';
import Footer from '../components/footer';
import Menu from '../components/menu';
import Itens from '../components/itens';


function Venda() {
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
                        <Itens />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Venda;
