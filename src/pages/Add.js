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
                areaConstruida: '',
                descricao: '',
                tipoImovel: 'apartamento',
                negocio: 'locacao'
            },
            fotos: {
                foto: [],
                capa: []
            },
            comodos: {
                descricao: [],
                qtd: []
            }
        }
        this.setForm = this.setForm.bind(this);
        this.onSave = this.onSave.bind(this);
        this.setCapa = this.setCapa.bind(this);
        this.setComodo = this.setComodo.bind(this);
        this.previewImage = this.previewImage.bind(this);
        this.fileInput = React.createRef();
    }

    onSave = async () => {
        const formulario = this.state.form;
        let res;

        const response = await api.post('imovel', {
            referencia: formulario.referencia,
            preco: formulario.preco,
            area: formulario.area,
            areaConstruida: formulario.areaConstruida,
            descricao: formulario.descricao,
            tipoImovel: formulario.tipoImovel,
            negocio: formulario.negocio,
            idEstado: 1
        });
        if (response.status === 200){
            res = this.onSaveFoto(response.data.idImovel);

            if(!res)
                return; 
        }
        
        if (response.status === 200) {
            res = this.onSaveComodo(response.data.idImovel);
            if(!res)
                return;
        }
        
        alert("salvou");
    }

    async onSaveFoto(idImovel){
        let cont = 0;
        let response;

        await this.state.fotos.foto.map((item) => {
            response = api.post('foto', {
                url: item,
                capa: this.state.fotos.capa[cont],
                idImovel: idImovel
            });
            cont++;
        })
        return response;
    }

    async onSaveComodo(idImovel){
        let response;

        for (let i = 0; i < this.state.comodos.descricao.length; i++) {
            const response = await api.post('comodo', {
                descricao: this.state.comodos.descricao[i],
                qtd: this.state.comodos.qtd[i],
                idImovel: idImovel
            });
        }
        return response;
    }

    //função que converte imagem 
    convertBase64 (file) {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    }

    setForm(e) {
        let dados = this.state.form;

        dados[e.target.name] = e.target.value;
        this.setState({ form: dados });

        this.previewImage();
    }

    async previewImage(){
        let items = this.state.fotos;
        let tamanho = this.fileInput.current.files.length;
        //Preview da Imagem
        if (tamanho)
            for (let i = 0; i < tamanho; i++) {
                items.foto[i] = await this.convertBase64(this.fileInput.current.files[i]);//converte para salvar no banco

                //define ultimo item como capa do site
                if (i === tamanho - 1)
                    items.capa[i] = true;
                else
                    items.capa[i] = false;
                //salva os itens na state
                this.setState({ fotos: items });
            }
        else
            this.setState({ foto: [] });
    }

    setCapa(e) {
        let items = this.state.fotos;
        let tamanho = this.fileInput.current.files.length;

        for (let i = 0; i < tamanho; i++) {
            if (e.target.value == items.foto[i].length)
                items.capa[i] = true;
            else
                items.capa[i] = false;
        }
        this.setState({ fotos: items });
    }

    setComodo(e) {
        let comodo = this.state.comodos;

        //procura item que já tem e aí exclui para não ter item repetidos e 
        //abaixo adiciona ele novamente atualizado
        for (let i = 0; i < comodo.qtd.length; i++) {
            if (comodo.descricao[i] === e.target.name) {
                comodo.descricao.splice(i, 1);
                comodo.qtd.splice(i, 1);
            }
        }
        //adiciona item na state
        if (e.target.value > 0) {
            comodo.descricao.push(e.target.name);
            comodo.qtd.push(e.target.value);
        }

        this.setState({ comodos: comodo });
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
                                            <label className="form-label">Descrição do Imóvel</label>
                                            <input onChange={this.setForm} name="descricao" type="text" className="form-control" />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Tipo Imovel</label>
                                            <select onChange={this.setForm} name="tipoImovel" class="form-select form-select-sm" aria-label=".form-select-sm example">
                                                <option defaultValue="apartamento">Apartamento</option>
                                                <option value="casa">Casa</option>
                                                <option value="terreno">Terreno</option>
                                                <option value="kitnet">Kitnet</option>

                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Negócio</label>
                                            <select onChange={this.setForm} name="negocio" class="form-select form-select-sm" aria-label=".form-select-sm example">
                                                <option defaultValue="locacao">Aluguel</option>
                                                <option value="venda">Venda</option>
                                            </select>
                                        </div>
                                        <div class="input-group mb-3">
                                            <span class="input-group-text">Sala</span>
                                            <select onChange={this.setComodo} name="Sala" class="form-select form-select-sm" aria-label=".form-select-sm example">
                                                <option defaultValue="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                            </select>
                                            <span class="input-group-text">Quarto</span>
                                            <select onChange={this.setComodo} name="Quarto" class="form-select form-select-sm" aria-label=".form-select-sm example">
                                                <option defaultValue="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                            </select>
                                            <span class="input-group-text">Area Gourmet</span>
                                            <select onChange={this.setComodo} name="Area Gourmet" class="form-select form-select-sm" aria-label=".form-select-sm example">
                                                <option defaultValue="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                            </select>
                                        </div>
                                        <div class="input-group mb-3">
                                            <span class="input-group-text">Banheiro</span>
                                            <select onChange={this.setComodo} name="Banheiro" class="form-select form-select-sm" aria-label=".form-select-sm example">
                                                <option defaultValue="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                            </select>
                                            <span class="input-group-text">Garagem</span>
                                            <select onChange={this.setComodo} name="Garagem" class="form-select form-select-sm" aria-label=".form-select-sm example">
                                                <option defaultValue="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                            </select>
                                            <span class="input-group-text">Copa</span>
                                            <select onChange={this.setComodo} name="Copa" class="form-select form-select-sm" aria-label=".form-select-sm example">
                                                <option defaultValue="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                            </select>
                                        </div>
                                        <div className="mb-2">
                                            {
                                                this.state.fotos.foto.map((item) =>
                                                    <div key={item}>
                                                        <div className="btn-toolbar mb-2" role="toolbar" aria-label="Toolbar with button groups">
                                                            <div className="btn-group me-2" role="group" aria-label="First group">
                                                                <img style={{ width: "120px", height: "90px" }} src={item} className="img-thumbnail"></img>
                                                            </div>
                                                            <div className="input-group" style={{ width: "320px", height: "90px" }}>
                                                                <div className="input-group-text" id="btnGroupAddon">
                                                                    <input onClick={this.setCapa} value={item.length} className="form-check-input" type="radio" name="capa" id="flexRadioDefault2" defaultChecked />
                                                                </div>
                                                                <input type="text" className="form-control" placeholder="Escolher como capa do anuncio" aria-label="Input group example" aria-describedby="btnGroupAddon" disabled />
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                            <br></br>
                                            <input onChange={this.setForm} name="foto" ref={this.fileInput} className="form-control" type="file" id="formFileMultiple" multiple />
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
