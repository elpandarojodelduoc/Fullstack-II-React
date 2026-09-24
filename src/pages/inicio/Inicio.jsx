import { Button, Card } from 'react-bootstrap'

function Inicio() {
  return (
    <div className="container py-5">
      <h1 className="display-5 fw-bold">Inicio</h1>
      <p className="lead">Bienvenido a mi primera app con React y Bootstrap.</p>

      <Button variant="primary" className="me-2">Botón primario</Button>
      <Button variant="outline-success">Botón outline</Button>

      <Card className="mt-4" style={{ maxWidth: '22rem' }}>
        <Card.Body>
          <Card.Title>¡Funciona!</Card.Title>
          <Card.Text>Este componente viene de react-bootstrap.</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Inicio;