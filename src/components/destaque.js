import '../App.css';
import '../bootstrap.css';
import road from '../img/road.jpg';


function Destaque(props) {
    return (
        <div className="container">
            <h2 className="text-center mb-2">{props.descricao}</h2>
            <div className="card mb-4">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img style={{ width: "240px" }} src={road} alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <label className="card-title bg-secondary text-white texto">Ref.: 151515</label>&nbsp;
                            <label className="card-title bg-info text-white texto">Apartamento</label>
                            <div className="card-title direita"><h3><strong>R$ 150.000,00</strong></h3></div>
                            <label className="card-text"><h4>Jardim Domingos de Léo,&nbsp;</h4></label>
                            <label>Marilia - SP</label>
                            <div>
                                <label className="card-text tag"><small className="text-muted bg-light texto">Quartos: 1</small></label>&nbsp;
                                <label className="card-text tag"><small className="text-muted bg-light texto">Sala: 1</small></label>&nbsp;
                                <label className="card-text tag"><small className="text-muted bg-light texto">Banheiro: 1</small></label>&nbsp;
                                <label className="card-text tag"><small className="text-muted bg-light texto">Garagem: 1</small></label>&nbsp;
                                <label className="card-text tag"><small className="text-muted bg-light texto">Copa: 1</small></label>&nbsp;
                                <label className="card-text tag"><small className="text-muted bg-light texto">Área Gourmet: 1</small></label>
                            </div>
                            <div className="direita">
                                <button className="btn bg-primary text-white btn-sm">Mais detalhes
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-double-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" />
                                        <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Destaque;
