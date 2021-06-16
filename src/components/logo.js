import '../App.css';
import '../bootstrap.css';
import logo from '../img/logo.png'



function Logo() {
    return (
        <div className="margem">
            <div className="row">
                <div className="col-3"></div>
                <div className="col-3">
                    <img src={logo} className="" alt="..." />
                </div>
                <div className="col-4 text-center">
                    <span className="texto"><strong>Tel: </strong> (14) 99799-2525</span><br></br>
                    <span className="texto"><strong>Whatsapp: </strong> (14) 99799-2525</span><br></br>
                    <span className="texto"><strong>Email: </strong> imobiliaria@email.com</span><br></br>
                    <span className="texto"><strong>Horário de Atendimento de 2ª a 6ª das 08:00h às 18:00h</strong></span>
                </div>
                <div className="col-2"></div>
            </div>
        </div>
    );
}

export default Logo;


