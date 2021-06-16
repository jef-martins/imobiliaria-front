import '../App.css';
import '../bootstrap.css';


function PesquisaAvancada() {
    return (
        <div className="container mt-4 mb-4">
            <div className="card">
                <div className="card-body">
                    <div className="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
                        <div className="btn-group" role="group" aria-label="First group">
                            <table>
                                <thead>
                                    <tr><td>Negócio</td></tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <select className="form-select form-select-sm" id="inputGroupSelect01">
                                                <option >Negócio</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="btn-group" role="group" aria-label="First group">
                            <table>
                                <thead>
                                    <tr><td>Tipo de imóvel</td></tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <select className="form-select form-select-sm" id="inputGroupSelect01">
                                                <option >Tipo de imóvel</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="btn-group" role="group" aria-label="First group">
                            <table>
                                <thead>
                                    <tr><td>Estado</td></tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <select className="form-select form-select-sm" id="inputGroupSelect01">
                                                <option >Estado</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="btn-group" role="group" aria-label="First group">
                            <table>
                                <thead>
                                    <tr><td>Cidade</td></tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <select className="form-select form-select-sm" id="inputGroupSelect01">
                                                <option >Cidade</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="btn-group" role="group" aria-label="First group">
                            <table className="text-center">
                                <thead>
                                    <tr>
                                        <td>
                                            <a href="#" className="text-decoration-none">Pesquisa avançada</a>
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <button style={{ width: '240px' }} className="btn bg-primary text-white">Buscar</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PesquisaAvancada;
