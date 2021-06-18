import '../App.css';
import { Link } from 'react-router-dom';
import '../bootstrap.css';
import Header from '../components/header';
import Logo from '../components/logo';
import Footer from '../components/footer';
import React, { Component } from 'react';
import api from '../services/api';


class Venda extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                referencia: '',
                preco: '',
                area: '',
                areaConstruida: ''
            },
            foto: '',
        }
        this.setForm = this.setForm.bind(this);
        this.onSave = this.onSave.bind(this);
        this.fileInput = React.createRef();
    }

    onSave = async () => {
        const response = await api.post('imovel', {
            referencia: this.state.form.referencia,
            preco: this.state.form.preco,
            area: this.state.form.area,
            areaConstruida: this.state.form.areaConstruida,
            idEstado: 1
        });
        if (response.status === 200) {
            console.log(response.data.idImovel)
            const response2 = await api.post('foto', {
                url: this.state.foto,
                idImovel: response.data.idImovel
            });

            if (response2.status === 200)
                alert('Salvo');
        }
    }

    setForm(e) {
        let dados = this.state.form;

        dados[e.target.name] = e.target.value;
        this.setState({ form: dados });

        //Previw da Imagem
        if (this.fileInput.current.files[0])
            this.setState({ foto: (URL.createObjectURL(this.fileInput.current.files[0])) });
        else
            this.setState({ foto: "" });
    }

    render() {
        return (
            <div>
                <Header />
                <Logo />
                <div className="container mb-4 mt-4">
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-6">
                            <div className="card">
                                <div className="card-body">
                                    <form>
                                        <div className="mb-3">
                                            <label className="form-label">Referencia</label>
                                            <input onChange={this.setForm} name="referencia" type="text" className="form-control" />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Preço</label>
                                            <input onChange={this.setForm} name="preco" type="text" className="form-control" />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Area</label>
                                            <input onChange={this.setForm} name="area" type="text" className="form-control" />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Area Construída</label>
                                            <input onChange={this.setForm} name="areaConstruida" type="text" className="form-control" />
                                        </div>
                                        <div className="mb-3">
                                            <img style={{ width: "100px" }} src={this.state.foto}></img><br></br>
                                            <label htmlFor="formFile" className="form-label">Escolha uma foto</label>
                                            <input onChange={this.setForm} name="foto" ref={this.fileInput} className="form-control" type="file" id="formFile" />
                                        </div>
                                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                            <Link to="/" className="btn btn-danger me-md-2" type="button">Cancelar</Link>
                                            <button onClick={this.onSave} className="btn btn-success" type="button">Salvar</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-3"></div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
export default Venda;
