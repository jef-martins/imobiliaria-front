import '../App.css';
import '../bootstrap.css';



function Menu() {
    return (
        <div className="mb-4">
            <div className="card">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <h5 className="text-center">Referência</h5>
                        <hr />
                        <div className="input-group-sm mb-3">
                            <input type="text" className="form-control texto" placeholder="Exemplo: REF1515" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                        </div>
                        <div className="d-grid gap-2">
                            <button className="btn bg-warning text-white btn-sm">Buscar</button>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <h5 className="text-center mt-2">Informações</h5>
                        <hr />
                        <div className="input-group-sm mb-3">
                            <label className="texto">Negócio</label>
                            <select className="form-select form-select-sm texto" aria-label=".form-select-sm example">
                                <option defaultValue={true}>Venda</option>
                                <option value="1">Aluguel</option>
                            </select>
                        </div>
                        <div className="input-group-sm mb-3">
                            <label className="texto">Tipo de imóvel</label>
                            <select className="form-select form-select-sm texto" aria-label=".form-select-sm example">
                                <option >Todos</option>
                                <option value="1">Terreno</option>
                                <option value="2">Apartamento</option>
                            </select>
                        </div>
                        <div className="input-group-sm mb-3">
                            <label className="texto">Preço de venda (R$)</label>
                            <select className="form-select form-select-sm texto" aria-label=".form-select-sm example">
                                <option >Todos os valores</option>
                                <option value="1">50.000,00 até 100.000,00</option>
                            </select>
                        </div>
                        <div className="text-center"><a href="#" className="text-decoration-none">+ Mais filtros</a></div>
                        <div className="input-group-sm mb-3">
                            <label className="texto">Dormitório</label>
                            <select className="form-select form-select-sm texto" aria-label=".form-select-sm example">
                                <option >Indiferente</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                        <div className="input-group-sm mb-3">
                            <label className="texto">Banheiro</label>
                            <select className="form-select form-select-sm texto" aria-label=".form-select-sm example">
                                <option >Indiferente</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                        <div className="input-group-sm mb-3">
                            <label className="texto">Vaga na garagem</label>
                            <select className="form-select form-select-sm texto" aria-label=".form-select-sm example">
                                <option >Indiferente</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <h5 className="text-center">Localidade</h5>
                        <hr />
                        <div className="input-group-sm mb-3">
                            <label className="texto">Estado</label>
                            <select className="form-select form-select-sm texto" aria-label=".form-select-sm example">
                                <option >São Paulo</option>
                                <option value="1">Paraná</option>
                            </select>
                        </div>
                        <div className="input-group-sm mb-3">
                            <label className="texto">Cidade</label>
                            <select className="form-select form-select-sm texto" aria-label=".form-select-sm example">
                                <option >Todos</option>
                                <option >Marília</option>
                                <option value="1">Bauru</option>
                            </select>
                        </div>
                        <div className="input-group-sm mb-3">
                            <label className="texto">Bairro</label>
                            <select className="form-select form-select-sm texto" aria-label=".form-select-sm example">
                                <option >Todos</option>
                                <option >Jd. Domingos de leo</option>
                                <option value="1">Castelo Branco</option>
                            </select>
                        </div>
                        <div className="d-grid gap-2">
                            <button className="btn bg-warning text-white btn-sm">Filtrar</button>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    );
}

export default Menu;
