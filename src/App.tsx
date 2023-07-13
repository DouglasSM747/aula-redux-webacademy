import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap";
import FormularioProduto from "./components/formProduto";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./redux/store";
import { fetchProdutos } from "./redux/slices/api.slice.produtos";
import ProdutosList from "./components/listProdutos";

function App() {
  const { error, loading } = useSelector(
    (state: RootState) => state.apiProduto
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProdutos());
  }, []);

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
      {loading ? "Loading..." : (
        <div style={{ width: "50%" }}>
          <FormularioProduto />
          <ProdutosList />
        </div>
      )}
    </div>
  );
}

export default App;
