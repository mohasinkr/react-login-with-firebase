import {Routes,Route} from 'react-router-dom';
import { Container,Row,Col } from 'react-bootstrap';

import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import {UserAuthContextProvider} from './context/UserAuthContext';

import './App.css'

function App() {

  return (
    <>
      <Container>
        <Row>
          <Col>
          <UserAuthContextProvider>
          <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/home' element={<Home />}/>
          </Routes>
          </UserAuthContextProvider>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App;
