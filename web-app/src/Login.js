import React from 'react';
import { Container, Row, Col, Jumbotron, Button } from 'reactstrap';

import client from './images/client.svg';
import market from './images/market.svg';

const Login = (props) => {
  return (
    <Container style={{paddingTop: '100px',paddingBottom: '100px'}}>
          <Row>
              <Col xs="6">
                  <Jumbotron>
                      <center><img src={client} alt="client" class="addcart" style={{width: '205px', padding: '20px'}}/></center>
                      <h1 className="display-5">Cliente</h1>
                      <p className="lead">Se você é um cliente em busca de estabelecimentos que oferecem uma forma segura e prática de comprar, clique no link abaixo e faça seu cadastro.</p>
                      <hr className="my-2" />
                      <p className="lead">
                          <Button href="/loginclient">Cadastro Cliente</Button>
                      </p>
                  </Jumbotron>
              </Col>
              <Col xs="6">
                  <Jumbotron>
                      <center><img src={market} alt="market" class="addcart" style={{padding: '20px'}}/></center>
                      <h1 className="display-5">Estabelecimento</h1>
                      <p className="lead">Se você é um estabelecimento e deseja oferecer uma forma segura e prática para comprar a seus clientes, e maior segurança à seus funcionários, faça seu cadastro.</p>
                      <hr className="my-2" />
                      <p className="lead">
                          <Button href="/loginstore">Cadastro Estabelecimento</Button>
                      </p>
                  </Jumbotron>
              </Col>
          </Row>
    </Container>
  );
}

export default Login;