import { useContext } from "react";
import CategoriaContext from "./CategoriaContext";
import Alerta from "../../Alerta";


function Tabela() {

    const { alerta, listaObjetos, remover, novoObjeto, editarObjeto } = useContext(CategoriaContext);


    return (
        <div style={{ padding: '20px' }}>
            <h1>Categorias</h1>
            <Alerta alerta={alerta} />
            {listaObjetos.lenght === 0 && <h1>"Nenhum registro encontrado"</h1>}
            {listaObjetos.length > 0 && (<div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col" style={{ textAling: 'center' }}>Ações</th>
                            <th scope="col">Código</th>
                            <th scope="col">Name</th>
                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalEdicao"
                                onClick={() => novoObjeto()}>
                                Novo <i className="bi bi-file-earmark-plus"></i>
                            </button>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            listaObjetos.map(objeto => (
                                <tr key={objeto.codigo}>
                                    <td align="center">
                                        <button className="btn btn-info">
                                            <i class="bi bi-pencil"></i>
                                        </button>
                                        <button className="btn btn-danger" title="Remover"
                                            onClick={() => { remover(objeto); }}>
                                            <i className="bi bi-trash"></i>
                                        </button>
                                      
                                        <button className="btn btn-info"
                                            data-bs-toggle="modal" data-bs-target="#modalEdicao"
                                            onClick={() => editarObjeto(objeto.codigo)}>
                                            <i className="bi bi-pencil-square"></i>
                                        </button>
                                    </td>
                                    <th scope="row">{objeto.codigo}</th>
                                    <td>{objeto.nome}</td>
                                </tr>

                            ))

                        }
                    </tbody>
                </table>
            </div>)}

        </div>
    )
}

export default Tabela;
