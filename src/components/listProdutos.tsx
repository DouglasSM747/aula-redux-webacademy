import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap";

export default function ListagemProdutos() {
  const produto = useSelector((state: RootState) => state.produto);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Preço</th>
            <th>Estoque</th>
          </tr>
        </thead>
        <tbody>
          {produto.produtos.map((produto) => {
            return (
              <tr>
                <td>{produto.nome}</td>
                <td>{produto.preco}</td>
                <td>{produto.estoque}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
