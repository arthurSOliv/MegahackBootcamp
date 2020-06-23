import React from 'react';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import loginimg from './images/login.svg';

const LoginStore = (props) => {
  return (
    <Container style={{paddingTop: '100px',paddingBottom: '100px'}}>
        <Row>
            <Col></Col>
            <Col>
                <Card>
                    <CardImg top width="100%" src={loginimg} alt="Card image cap" />
                    <CardBody>
                    <center>
                        <CardTitle><h1>Login Estabelecimento</h1></CardTitle>
                    </center>
                    <Form>
                        <FormGroup>
                            <Label for="cpf">CPF</Label>
                            <Input type="text" name="cpf" id="cpf" placeholder="Digite o seu CPF" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Senha</Label>
                            <Input type="password" name="password" id="password" placeholder="Digite sua senha" />
                        </FormGroup>
                        <center>
                            <Button>Entrar</Button>
                        </center>
                    </Form>
                    </CardBody>
                </Card>
            </Col>
            <Col></Col>
        </Row>
    </Container>
  );
}

export default LoginStore;