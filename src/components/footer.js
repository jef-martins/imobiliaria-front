import '../App.css';
import '../bootstrap.css';
import Logo from '../components/logo';


function Footer() {
    return (
        <div>
            <div class="card">
                <div class="card-body">
                    <Logo />
                </div>
                <div class="card-footer text-muted">
                    <div className="container">
                        <div class="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
                            <div class="input-group">
                                <div>
                                    INSTITUCIONAL
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" />
                                        <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </div>
                                <div>
                                    <br></br>
                                    <span className="texto"><a className="text-decoration-none" href="#">Sobre nós</a></span><br></br>
                                    <span className="texto"><a className="text-decoration-none" href="#">Trabalhe Conosco</a></span><br></br>
                                    <span className="texto"><a className="text-decoration-none" href="#">Contato</a></span><br></br>
                                </div>
                            </div>
                            <div class="input-group">
                                <div>
                                    IMÓVEIS
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" />
                                        <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </div>
                                <div>
                                    <br></br>
                                    <span className="texto"><a className="text-decoration-none" href="#">Cadastre seu imóvel</a></span><br></br>
                                    <span className="texto"><a className="text-decoration-none" href="#">Financiamento</a></span><br></br>
                                    <span className="texto"><a className="text-decoration-none" href="#">Lançamento</a></span><br></br>
                                </div>
                            </div>
                            <div class="input-group">
                                <div>
                                    SERVIÇOS
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" />
                                        <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </div>
                                <div>
                                    <br></br>
                                    <span className="texto"><a className="text-decoration-none" href="#">Solicite um imóvel</a></span><br></br>
                                    <span className="texto"><a className="text-decoration-none" href="#">Nós ligamos para você</a></span><br></br>
                                    <span className="texto"><a className="text-decoration-none" href="#">Painel de controle</a></span><br></br>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;


