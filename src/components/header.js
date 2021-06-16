import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import '../bootstrap.css';



class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: true
        }
    }

    render() {
        return (
            <div className="fixed-top bg-primary text-white">
                <div className="btn-toolbar justify-content-between mt-3 mb-2 tamanho" role="toolbar" aria-label="Toolbar with button groups">
                    <div className="btn-group fonte" role="group" aria-label="First group">
                        <Link to="/" className="btn btn-sm link-light" type="button">INÍCIO</Link>
                        <Link to="/venda" className="btn btn-sm link-light" type="button">VENDA</Link>
                        <Link to="/#" className="btn btn-sm link-light" type="button">LOCAÇÃO</Link>
                        <Link to="/#" className="btn btn-sm link-light" type="button">LANÇAMENTO</Link>
                        <Link to="/#" className="btn btn-sm link-light" type="button">CONTATO</Link>
                        <div className="dropdown">
                            <button className="btn btn-sm link-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                INSTITUCIONAL
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">Sobre nós</a></li>
                                <li><a className="dropdown-item" href="#">Trabalhe conosco</a></li>
                                <li><a className="dropdown-item" href="#">Contato</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="input-group">
                        <button type="button" className="btn btn-sm link-light ">IMÓVEIS FAVORITOS (2)</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
