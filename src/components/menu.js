import '../App.css';
import '../bootstrap.css';



function Menu() {
    return (
        <div className="mb-4">
            <div class="card">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        <h5 className="text-center">Referência</h5>
                        <hr />
                        <div class="input-group-sm mb-3">
                            <input type="text" class="form-control texto" placeholder="Exemplo: REF1515" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                        </div>
                        <div class="d-grid gap-2">
                            <button className="btn bg-warning text-white btn-sm">Buscar</button>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <h5 className="text-center mt-2">Informações</h5>
                        <hr />
                        <div class="input-group-sm mb-3">
                            <label className="texto">Negócio</label>
                            <select class="form-select form-select-sm texto" aria-label=".form-select-sm example">
                                <option selected>Venda</option>
                                <option value="1">Aluguel</option>
                            </select>
                        </div>
                        <div class="input-group-sm mb-3">
                            <label className="texto">Tipo de imóvel</label>
                            <select class="form-select form-select-sm texto" aria-label=".form-select-sm example">
                                <option >Todos</option>
                                <option value="1">Terreno</option>
                                <option value="2">Apartamento</option>
                            </select>
                        </div>
                        <div class="input-group-sm mb-3">
                            <label className="texto">Preço de venda (R$)</label>
                            <select class="form-select form-select-sm texto" aria-label=".form-select-sm example">
                                <option >Todos os valores</option>
                                <option value="1">50.000,00 até 100.000,00</option>
                            </select>
                        </div>
                        <div className="text-center"><a href="#" className="text-decoration-none">+ Mais filtros</a></div>
                        <div class="input-group-sm mb-3">
                            <label className="texto">Dormitório</label>
                            <select class="form-select form-select-sm texto" aria-label=".form-select-sm example">
                                <option >Indiferente</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                        <div class="input-group-sm mb-3">
                            <label className="texto">Banheiro</label>
                            <select class="form-select form-select-sm texto" aria-label=".form-select-sm example">
                                <option >Indiferente</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                        <div class="input-group-sm mb-3">
                            <label className="texto">Vaga na garagem</label>
                            <select class="form-select form-select-sm texto" aria-label=".form-select-sm example">
                                <option >Indiferente</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <h5 className="text-center">Localidade</h5>
                        <hr />
                        <div class="input-group-sm mb-3">
                            <label className="texto">Estado</label>
                            <select class="form-select form-select-sm texto" aria-label=".form-select-sm example">
                                <option >São Paulo</option>
                                <option value="1">Paraná</option>
                            </select>
                        </div>
                        <div class="input-group-sm mb-3">
                            <label className="texto">Cidade</label>
                            <select class="form-select form-select-sm texto" aria-label=".form-select-sm example">
                                <option >Todos</option>
                                <option >Marília</option>
                                <option value="1">Bauru</option>
                            </select>
                        </div>
                        <div class="input-group-sm mb-3">
                            <label className="texto">Bairro</label>
                            <select class="form-select form-select-sm texto" aria-label=".form-select-sm example">
                                <option >Todos</option>
                                <option >Jd. Domingos de leo</option>
                                <option value="1">Castelo Branco</option>
                            </select>
                        </div>
                        <div class="d-grid gap-2">
                            <button className="btn bg-warning text-white btn-sm">Filtrar</button>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    );
}

export default Menu;
