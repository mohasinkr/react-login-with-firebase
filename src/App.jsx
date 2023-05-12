import {Routes,Route} from 'react-router-dom';
import { Container,Row,Col } from 'react-bootstrap';
import Login from './components/Login';
import Signup from './components/Signup';

import './App.css'

function App() {

  return (
    <>
      <Container>
        <Row>
          <Col>
          <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/' element={<Signup/>} />
          </Routes>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
