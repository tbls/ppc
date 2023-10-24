import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../store/auth/authSlice';

export const NavBar = () => {
   const dispatch = useDispatch();

   const cerrarSesion = () => {
      dispatch(logout());
   };

   return (
      <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
         <Container>
         <Navbar.Brand as={Link} to="/">
            Dashboard
         </Navbar.Brand>

         <Navbar.Toggle aria-controls="responsive-navbar-nav" />

         <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">

               <Nav.Link eventKey="1" as={Link} to="/sce">SCE</Nav.Link>
               <Nav.Link eventKey="2" as={Link} to="/equipos-principales">Equipos Principales</Nav.Link>
               <Nav.Link eventKey="3"as={Link} to="/pendientes-por-condicion">Pendientes por Condición</Nav.Link>
               <Nav.Link eventKey="4"as={Link} to="/valvulas-con-pase">Válvulas con Pase</Nav.Link>
               <Nav.Link eventKey="5" as={Link} to="/emisiones-fugitivas">Emisiones Fugitivas</Nav.Link>

            </Nav>
            <Nav className="d-flex align-items-end align-items-lg-center">
               <span className="text-info me-0 me-lg-3 sm">Tommy López</span>
               <Button
               onClick={cerrarSesion}
               variant={'outline-primary'}
               className="mt-2 mt-lg-0"
               >
               Salir
               </Button>
            </Nav>
         </Navbar.Collapse>
         </Container>
      </Navbar>
   );
};