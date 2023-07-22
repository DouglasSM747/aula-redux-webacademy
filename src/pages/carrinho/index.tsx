import { useSelector } from "react-redux";
import { ListGroup, ListGroupItem } from "reactstrap";
import NavBarCustom from "../../components/navbar";
import { RootState } from "../../redux/store";
import "./index.css";

export default function Carrinho() {
  const produto = useSelector((state: RootState) => state.carrinho);

  return (
    <div className="containerCart">
      <div style={{ width: "100%" }}>
        <NavBarCustom />
      </div>
      <h2>CARRINHO</h2>

      <div style={{ overflow: "scroll", height: "500px" }}>
        <ListGroup flush>
          {produto.produtos.map((produto) => {
            return <ListGroupItem>{produto}</ListGroupItem>;
          })}
        </ListGroup>
      </div>
    </div>
  );
}
