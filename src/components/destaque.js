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
                        <img style={{width: "240px"}} src={road} alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <label className="card-title bg-secondary text-white texto">Ref.: 151515</label>&nbsp;
                            <label className="card-title bg-info text-white texto">Apartamento</label>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Destaque;
