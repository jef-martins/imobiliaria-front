import '../App.css';
import '../bootstrap.css';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import Logo from '../components/logo';
import Footer from '../components/footer';


function Contato() {
    return (
        <div>
            <Header />
            <Logo />
            <div className="container mt-4">
                <h2 className="text-center mb-4">Precisa falar com a gente?</h2>
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <form>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Nome</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">E-mail</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Telefone</label>
                                <input type="text" class="form-control" id="exampleInputPassword1" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Cidade</label>
                                <input type="text" class="form-control" id="exampleInputPassword1" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Negocio</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option >Venda</option>
                                    <option value="1">Locação</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Mensagem</label>
                                <div class="form-floating">
                                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "150px"}}></textarea>
                                    <label for="floatingTextarea2">Escreva sua mensagem</label>
                                </div>
                            </div>
                            <div class="d-grid gap-2 d-md-flex justify-content-md-end mb-3">
                                <Link to="/" class="btn btn-danger me-md-2" type="button">Cancelar</Link>
                                <button class="btn btn-success" type="button">Enviar</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-3"></div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contato;
