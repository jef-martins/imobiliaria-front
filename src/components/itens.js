import { Component } from 'react';
import '../App.css';
import '../bootstrap.css';
import Destaque from './destaque';
import api from '../services/api';


class Itens extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fotos: [],
            qtd: props.qtd
        }
    }

    async componentDidMount() {
        const response = await api.get('foto');
        this.setState({ fotos: response.data });
    }

    render() {
        return (
            <div>
                <h1 className="text-center">{this.state.qtd} imóveis encontrados</h1>
                <hr className="mb-4"></hr>
                <div className="row">
                    <div className="col-8"></div>
                    <div className="col-4">
                        <div className="input-group">
                            <label className="input-group-text texto" for="inputGroupSelect01">Ordenar por</label>
                            <select className="form-select form-select-sm texto" id="inputGroupSelect01">
                                <option >Menor Preço</option>
                                <option value="1">Maior Preço</option>
                                <option value="2">Maior numeros de quartos</option>
                                <option value="3">Menor numeros de quartos</option>
                            </select>
                        </div>
                    </div>
                </div>
                {
                    this.state.fotos.map((item) =>
                        <div key={item.idFoto} style={{ width: "900px" }}><Destaque foto={item.url} /></div>
                    )
                }
                {/*  <div style={{ width: "900px" }}><Destaque /></div>
            <div style={{ width: "900px" }}><Destaque /></div> */}
                <div className="row">
                    <div className="col-4"></div>
                    <div className="btn-group btn-group-sm col-4" role="group" aria-label="...">
                        <button type="button" className="btn btn-outline-light text-secondary disabled">Anterior</button>
                        <button type="button" className="btn btn-outline-light text-primary">1</button>
                        <button type="button" className="btn btn-outline-light text-primary">2</button>
                        <button type="button" className="btn btn-outline-light text-primary">3</button>
                        <button type="button" className="btn btn-outline-light text-primary">Próximo</button>
                    </div>
                    <div className="col-4"></div>
                </div>
            </div>
        );
    }
}
export default Itens;
