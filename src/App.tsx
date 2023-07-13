import ProdutosList from "./components/listProdutos";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap";
import FormularioProduto from "./components/formProduto";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        justifyItems: "center",
      }}
    >
      <div style={{ width: "50%" }}>
        <FormularioProduto />
        <ProdutosList />
      </div>
    </div>
  );
}

export default App;
