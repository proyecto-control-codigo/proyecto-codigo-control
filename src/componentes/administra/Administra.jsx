import React from "react";
import "./Administra.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "../navbar-usuario/Navbar_usuario";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";
import Footer from "../footer/Footer";

const data = [
  {
    id: 1,
    nombre: "Luis Gutierres",
    descripcion: "Computadora",
    creacion: "21-04-21",
    estado: "operativo",
  },
];

class Admin extends React.Component {
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      nombre: "",
      descripcion: "",
      creacion: "",
      estado: "",
    },
  };

  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.id == registro.id) {
        arreglo[contador].nombre = dato.nombre;
        arreglo[contador].descripcion = dato.descripcion;
        arreglo[contador].creacion = dato.creacion;
        arreglo[contador].estado = dato.estado;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm(
      "Estás Seguro que deseas Eliminar el elemento " + dato.id
    );
    if (opcion == true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.id == registro.id) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
    }
  };

  insertar = () => {
    var valorNuevo = { ...this.state.form };
    valorNuevo.id = this.state.data.length + 1;
    var lista = this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <>
        <div className="admin-container">
          <Nav />
          <div className="form-cont">
            <Container>
              <br />
              <Button
                className="btn-crear"
                color="success"
                onClick={() => this.mostrarModalInsertar()}
              >
                Crear
              </Button>
              <br />
              <br />
              <Table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Descripcion</th>
                    <th>Creacion</th>
                    <th>Estado</th>
                    <th>Acción</th>
                  </tr>
                </thead>

                <tbody>
                  {this.state.data.map((dato) => (
                    <tr key={dato.id}>
                      <td>{dato.id}</td>
                      <td>{dato.nombre}</td>
                      <td>{dato.descripcion}</td>
                      <td>{dato.creacion}</td>
                      <td>{dato.estado}</td>
                      <td>
                        <Button
                          color="primary"
                          onClick={() => this.mostrarModalActualizar(dato)}
                        >
                          Editar
                        </Button>{" "}
                        <Button
                          color="danger"
                          onClick={() => this.eliminar(dato)}
                        >
                          Eliminar
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Container>

            <Modal isOpen={this.state.modalActualizar}>
              <ModalHeader>
                <div>
                  <h3>Editar Registro</h3>
                </div>
              </ModalHeader>

              <ModalBody>
                <FormGroup>
                  <label>Id:</label>

                  <input
                    className="form-control"
                    readOnly
                    type="text"
                    value={this.state.form.id}
                  />
                </FormGroup>

                <FormGroup>
                  <label>Nombre:</label>
                  <input
                    className="form-control"
                    name="nombre"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.form.nombre}
                  />
                </FormGroup>

                <FormGroup>
                  <label>Descripcion:</label>
                  <input
                    className="form-control"
                    name="descripcion"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.form.descripcion}
                  />
                </FormGroup>

                <FormGroup>
                  <label>Creacion:</label>
                  <input
                    className="form-control"
                    name="creacion"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.form.creacion}
                  />
                </FormGroup>

                <FormGroup>
                  <label>Estado:</label>
                  <input
                    className="form-control"
                    name="estado"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.form.estado}
                  />
                </FormGroup>
              </ModalBody>

              <ModalFooter>
                <Button
                  color="primary"
                  onClick={() => this.editar(this.state.form)}
                >
                  Editar
                </Button>
                <Button
                  color="danger"
                  onClick={() => this.cerrarModalActualizar()}
                >
                  Cancelar
                </Button>
              </ModalFooter>
            </Modal>

            <Modal isOpen={this.state.modalInsertar}>
              <ModalHeader>
                <div>
                  <h3>Nuevo objeto</h3>
                </div>
              </ModalHeader>

              <ModalBody>
                <FormGroup>
                  <label>Id:</label>

                  <input
                    className="form-control"
                    readOnly
                    type="text"
                    value={this.state.data.length + 1}
                  />
                </FormGroup>

                <FormGroup>
                  <label>Nombre:</label>
                  <input
                    className="form-control"
                    name="nombre"
                    type="text"
                    onChange={this.handleChange}
                  />
                </FormGroup>

                <FormGroup>
                  <label>Descripcion:</label>
                  <input
                    className="form-control"
                    name="descripcion"
                    type="text"
                    onChange={this.handleChange}
                  />
                </FormGroup>

                <FormGroup>
                  <label>Creacion:</label>
                  <input
                    className="form-control"
                    name="creacion"
                    type="text"
                    onChange={this.handleChange}
                  />
                </FormGroup>

                <FormGroup>
                  <label>Estado:</label>
                  <input
                    className="form-control"
                    name="estado"
                    type="text"
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </ModalBody>

              <ModalFooter>
                <Button color="primary" onClick={() => this.insertar()}>
                  Insertar
                </Button>
                <Button
                  className="btn btn-danger"
                  onClick={() => this.cerrarModalInsertar()}
                >
                  Cancelar
                </Button>
              </ModalFooter>
            </Modal>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}
export default Admin;
