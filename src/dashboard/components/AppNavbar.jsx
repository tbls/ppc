import { useDispatch } from "react-redux"
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';


import { logout } from "../../store/auth/authSlice";

export const AppNavbar = () => {
   const dispatch = useDispatch();

   const cerrarSesion = () => {
      dispatch(logout());
   }
   return (
      <Navbar bg='dark' variant='dark' key='md' expand='xl' className="mb-3">
         <Container fluid="lg">
            <Navbar.Brand as={Link} to="/">Dashboard</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
            <Navbar.Offcanvas
               id={`offcanvasNavbar-expand-lg`}
               aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
               placement="end"
            >
               <Offcanvas.Header >
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                  Menú
                  </Offcanvas.Title>
               </Offcanvas.Header>
               <Offcanvas.Body>
                  <Nav className="d-felx justify-content-end flex-grow-1 pe-3">
                     <Nav.Link as={Link} to="/sce">SCE</Nav.Link>
                     <Nav.Link as={Link} to="/equipos-principales">Equipos Principales</Nav.Link>
                     <Nav.Link as={Link} to="/pendientes-por-condicion">Pendientes por Condición</Nav.Link>
                     <Nav.Link as={Link} to="/valvulas-con-pase">Válvulas con Pase</Nav.Link>
                     <Nav.Link as={Link} to="/emisiones-fugitivas">Emisiones Fugitivas</Nav.Link>
                  </Nav>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Navbar.Text>Tommy López</Navbar.Text>
                  <Button
                     variant="outline-primary" 
                     className='ms-3'
                     onClick={cerrarSesion}
                  >
                     Salir
                  </Button>
               </Nav>
               </Offcanvas.Body>
            </Navbar.Offcanvas>
         </Container>
      </Navbar>
      );
   }
   



   

