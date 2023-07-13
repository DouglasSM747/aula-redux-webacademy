import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "../redux/store";

export default function ProdutosList() {
  const { produtos } = useSelector((state: RootState) => state.apiProduto);

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nome</th>
        </tr>
      </thead>
      <tbody>
        {produtos.map((produto) => {
          return (
            <tr key={produto.id}>
              <th scope="row">{produto.id}</th>
              <td>{produto.nome}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
