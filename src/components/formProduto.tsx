import { useState } from "react";
import { useDispatch } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap";

export default function FormularioProduto() {
  const dispatch = useDispatch();

  const [inputProduto, SetProduto] = useState({
    id: 0,
    nome: "",
    preco: 0,
    estoque: 0,
    createdAt: "",
    updatedAt: "",
  });

  const handleInput = (e: any) => {
    SetProduto({ ...inputProduto, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h3 className="mt-3">Inserir Novo Produto</h3>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <label className="col-sm-3 col-form-lable">Nome</label>
          <div className="col-md-8">
            <input
              type="text"
              className="form-control"
              name="nome"
              value={inputProduto.nome}
              onChange={handleInput}
            />
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-3 col-form-lable">Preço</label>
          <div className="col-md-8">
            <input
              type="text"
              className="form-control"
              name="preco"
              value={inputProduto.preco}
              onChange={handleInput}
            />
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-3 col-form-lable">Estoque</label>
          <div className="col-md-8">
            <input
              type="text"
              className="form-control"
              name="estoque"
              value={inputProduto.estoque}
              onChange={handleInput}
            />
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-3 col-form-lable"></label>
          <div className="col-md-1">
            <button type="submit" className="btn btn-primary bnt-lg">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
