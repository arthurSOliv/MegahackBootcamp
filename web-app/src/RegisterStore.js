import React from 'react';
import './App.css';
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Registerstore = (props) => {
  return (
    <Container style={{paddingTop: '100px'}}>
        <h1 className="title">Cadastro - Estabelecimento</h1>
        <Form>
            <FormGroup>
                <Label for="nome">Nome</Label>
                <Input type="text" name="nome" id="nome" placeholder="Digite o seu nome completo" />
            </FormGroup>
            <FormGroup>
                <Label for="pessoa">Tipo de Pessoa</Label>
                <Input type="select" name="pessoa" id="pessoa">
                    <option value="pf">Pessoa Física</option>
                    <option value="pj">Pessoa Jurídica</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="cpf">CNPJ ou CPF</Label>
                <Input type="text" name="cpf" id="cpf" placeholder="Digite o seu CPF" />
            </FormGroup>
            <FormGroup>
                <Label for="tel">Telefone</Label>
                <Input type="text" name="tel" id="tel" placeholder="Digite seu telefone" />
            </FormGroup>
            <FormGroup>
                <Label for="cep">CEP</Label>
                <Input type="text" name="cep" id="cep" placeholder="Digite o CEP" />
            </FormGroup>
            <FormGroup>
                <Label for="endereco">Endereço</Label>
                <Input type="text" name="endereco" id="endereco" placeholder="Digite seu endereço" />
            </FormGroup>
            <FormGroup>
                <Label for="numero">Número</Label>
                <Input type="number" name="numero" id="numero" placeholder="Digite seu endereço" />
            </FormGroup>
            <FormGroup>
                <Label for="categoria">Categoria</Label>
                <Input type="select" name="categoria" id="categoria">
                    <option value="alimenticia">Alimentícia</option>
                    <option value="vestuario">Vestuário</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="delivery">Entrega?</Label>
                <Input type="select" name="delivery" id="delivery">
                    <option value="s">Sim</option>
                    <option value="n">Não</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="email">E-mail</Label>
                <Input type="email" name="email" id="email" placeholder="Digite seu E-mail" />
            </FormGroup>
            <FormGroup>
                <Label for="email2">Repita o E-mail</Label>
                <Input type="email" name="email2" id="email2" placeholder="Digite seu E-mail novamente" />
            </FormGroup>
            <FormGroup>
                <Label for="password">Senha</Label>
                <Input type="password" name="password" id="password" placeholder="Digite uma senha" />
            </FormGroup>
            <FormGroup>
                <Label for="password2">Confirme sua senha</Label>
                <Input type="password2" name="password2" id="password2" placeholder="Digite uma senha" />
            </FormGroup>
            
            <Button>Cadastrar</Button>
        </Form>
    </Container>
  );
}

export default Registerstore;