import "./App.css";
import FormularioProduto from "./components/formProduto";
import ListagemProdutos from "./components/listProdutos";

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
      <div>
        <FormularioProduto />
      </div>

      <div style={{ width: "50%" }}>
        <ListagemProdutos />
      </div>
    </div>
  );
}

export default App;
