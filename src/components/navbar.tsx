import { useDispatch, useSelector } from "react-redux";
import { Navbar, NavbarBrand } from "reactstrap";
import { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/slices/api.slice.login";
import { NavItem, NavLink } from "react-bootstrap";

export default function NavBarCustom() {
  const navigate = useNavigate();

  const { isAdmin } = useSelector((state: RootState) => state.apiLogin);
  const dispatch = useDispatch();

  function Logout() {
    dispatch(logout());
    navigate("/");
  }
  return (
    <div>
      <Navbar
        style={{ position: "sticky", top: "0", backgroundColor: "lightblue" }}
      >
        <NavbarBrand>Loja Online</NavbarBrand>

        <NavItem onClick={() => navigate("/home")}>
          <NavLink>Produtos</NavLink>
        </NavItem>

        {/* SE USUARIO ISADMIN MOSTRA OPÇÃO DO CARRINHO */}
        {!isAdmin ? (
          <NavItem onClick={() => navigate("/cart")}>
            <NavLink>Carrinho</NavLink>
          </NavItem>
        ) : null}

        <NavItem onClick={() => Logout()}>
          <NavLink>Logout</NavLink>
        </NavItem>
      </Navbar>
    </div>
  );
}
