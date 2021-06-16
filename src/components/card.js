import '../App.css';
import '../bootstrap.css';
import user from '../img/user.png'



function Card(props) {
    return (
        <div>
            <div className="col mb-4">
                <div className="card">
                    <img style={{ width: "140px" }} src={user} className="card-img-top centralizar" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-center">{props.titulo}</h5>
                        <p className="card-text text-center">{props.descricao}</p>
                        <div className="text-center">
                            <button className="btn bg-warning text-white">Saiba mais 
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
    );
}

export default Card;
