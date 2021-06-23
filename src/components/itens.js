import { Component } from 'react';
import '../App.css';
import '../bootstrap.css';
import Destaque from './destaque';
import api from '../services/api';


class Itens extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imoveis: [],
            qtd: 0,
            sort: 'menor_preco',
            urlAtual: window.location.href
        }
        this.paginacao = this.paginacao.bind(this);
        this.verifica = this.verifica.bind(this);
    }

    componentDidMount() {
        this.onGet();
        
        //pega o nome da pagina atual
        let url = this.state.urlAtual.split('/');
        this.setState({ urlAtual: url[url.length - 1] });
    }

    async onGet() {
        const response = await api.get('imovel/ordem/' + this.state.sort);
        this.setState({ imoveis: response.data });

        this.verifica();
    }

    verifica(){//retira os imoveis que não sao dessa pagina
        let arr = this.state.imoveis;
        
        for (let i = 0; i < arr.length; i++) 
            if (arr[i].negocio !== this.state.urlAtual) 
                arr.splice(i, 1);

        this.setState({ imoveis: arr });
        this.setState({ qtd: arr.length });
    }

    async paginacao(e) {
        await this.setState({ sort: e.target.value });

        this.onGet();
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
                            <label className="input-group-text texto" htmlFor="inputGroupSelect01">Ordenar por</label>
                            <select onChange={this.paginacao} className="form-select form-select-sm texto" id="inputGroupSelect01">
                                <option value="menor_preco">Menor Preço</option>
                                <option value="maior_preco">Maior Preço</option>
                            </select>
                        </div>
                    </div>
                </div>
                {
                    this.state.imoveis.map((item) =>
                        <div key={item.idImovel} style={{ width: "900px" }}>
                            <Destaque foto={item.url} idDestaque={item.idImovel}
                                preco={item.preco} referencia={item.referencia} tipoImovel={item.tipoImovel}
                            />
                        </div>
                    )
                }
                {/* <div className="row mb-3">
                    <div className="col-4"></div>
                    <div className="btn-group btn-group-sm col-4" role="group" aria-label="...">
                        <button type="button" className="btn btn-outline-light text-secondary disabled">Anterior</button>
                        <button type="button" className="btn btn-outline-light text-primary">1</button>
                        <button type="button" className="btn btn-outline-light text-primary">2</button>
                        <button type="button" className="btn btn-outline-light text-primary">3</button>
                        <button onClick={this.paginacao} type="button" className="btn btn-outline-light text-primary">Próximo</button>
                    </div>
                    <div className="col-4"></div>
                </div> */}
            </div>
        );
    }
}
export default Itens;
