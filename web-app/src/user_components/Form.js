import React, { Component } from 'react';
import '../App.css';
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class form extends Component {

    state = {
        errors: {},
        nome: "",
        cpf: "",
        tel: "",
        cep: "",
        endereco: "",
        numero: "",
        email: "",
        email2: "",
        password: ""
    }

    render() {
        const { errors, nome, cpf, tel, cep, endereco, numero, email, email2, password } = this.state
        return (
            <Container style={{paddingTop: '100px'}}>
            <h1 className="title">Cadastro - Cliente</h1>
            <Form onSubmit={this.handleSubmit} >
                <FormGroup>
                    <Label for="nome">Nome</Label>
                    <Input type="text" name="nome" placeholder="Digite o seu nome completo"
                    value={nome} onChange={this.handleNomeChange} onBlur={this.handleNomeBlur} />
                    <span>{ errors.nome }</span>
                </FormGroup>
                <FormGroup>
                    <Label for="cpf">CPF</Label>
                    <Input type="text" name="cpf" placeholder="Digite o seu CPF"
                    value={cpf} onChange={this.handleCpfChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="tel">Telefone</Label>
                    <Input type="text" name="tel" placeholder="Digite seu telefone"
                    value={tel} onChange={this.handleTelChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="cep">CEP</Label>
                    <Input type="text" name="cep" placeholder="Digite o CEP"
                    value={cep} onChange={this.handleCepChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="endereco">Endereço</Label>
                    <Input type="text" name="endereco" placeholder="Digite seu endereço"
                    value={endereco} onChange={this.handleEnderecoChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="numero">Número</Label>
                    <Input type="number" name="numero" placeholder="Digite seu número"
                    value={numero} onChange={this.handleNumeroChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="email">E-mail</Label>
                    <Input type="email" name="email" placeholder="Digite seu E-mail"
                    value={email} onChange={this.handleEmailChange} onBlur={this.handleEmailBlur} />
                </FormGroup>
                <FormGroup>
                    <Label for="email2">Repita o E-mail</Label>
                    <Input type="email" name="email2" placeholder="Digite seu E-mail novamente"
                    value={email2} onChange={this.handleEmail2Change} onBlur={this.handleEmail2Blur} />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Senha</Label>
                    <Input type="password" name="password" placeholder="Digite uma senha"
                    value={password} onChange={this.handlePasswordChange} />
                </FormGroup>
                {/* <FormGroup>
                    <Label for="password2">Confirme sua senha</Label>
                    <Input type="password" name="password2" id="password2" placeholder="Digite uma senha" />
                </FormGroup> */}
                <Button>Cadastrar</Button>
            </Form>
        </Container>
        )
    }

    handleNomeChange = event =>
     this.setState({ nome: event.target.value })
    handleCpfChange = event =>
     this.setState({ cpf: event.target.value })
    handleTelChange = event =>
     this.setState({ tel: event.target.value })
    handleCepChange = event =>
     this.setState({ cep: event.target.value })
    handleEnderecoChange = event =>
     this.setState({ endereco: event.target.value })
    handleNumeroChange = event =>
     this.setState({ numero: event.target.value })
    handleEmailChange = event =>
     this.setState({ email: event.target.value })
    handleEmail2Change = event =>
     this.setState({ email2: event.target.value })
    handlePasswordChange = event =>
     this.setState({ password: event.target.value })
    
    handleNomeBlur = () => {
        const { nome } = this.state
        if (nome.trim().length) {
            this.setState(({ errors }) => ({
                errors: { ...errors, nome: "" }
            }))
        } else {
            this.setState(({ errors }) => ({
                errors: { ...errors, nome: "Deve ser preenchido" }
            }))
        }
    }
    handleCpfBlur = () => {
        const { cpf } = this.state
        if (cpf.trim().length) {
            this.setState(({ errors }) => ({
                errors: { ...errors, cpf: "" }
            }))
        } else {
            this.setState(({ errors }) => ({
                errors: { ...errors, cpf: "Deve ser preenchido" }
            }))
        }
    }
    handleTelBlur = () => {
        const { tel } = this.state
        if (tel.trim().length) {
            this.setState(({ errors }) => ({
                errors: { ...errors, tel: "" }
            }))
        } else {
            this.setState(({ errors }) => ({
                errors: { ...errors, tel: "Deve ser preenchido" }
            }))
        }
    }
    handleCepBlur = () => {
        const { cep } = this.state
        if (cep.trim().length) {
            this.setState(({ errors }) => ({
                errors: { ...errors, cep: "" }
            }))
        } else {
            this.setState(({ errors }) => ({
                errors: { ...errors, cep: "Deve ser preenchido" }
            }))
        }
    }
    handleEnderecoBlur = () => {
        const { endereco } = this.state
        if (endereco.trim().length) {
            this.setState(({ errors }) => ({
                errors: { ...errors, endereco: "" }
            }))
        } else {
            this.setState(({ errors }) => ({
                errors: { ...errors, endereco: "Deve ser preenchido" }
            }))
        }
    }
    handleNumeroBlur = () => {
        const { numero } = this.state
        if (numero.trim().length) {
            this.setState(({ errors }) => ({
                errors: { ...errors, numero: "" }
            }))
        } else {
            this.setState(({ errors }) => ({
                errors: { ...errors, numero: "Deve ser preenchido" }
            }))
        }
    }
    handleEmailBlur = () => {
        const { email } = this.state
        if (email.trim().length) {
            this.setState(({ errors }) => ({
                errors: { ...errors, email: "" }
            }))
        } else {
            this.setState(({ errors }) => ({
                errors: { ...errors, email: "Deve ser preenchido" }
            }))
        }
    }
    handleEmail2Blur = () => {
        const { email2 } = this.state
        if (email2.trim().length || email2 !== this.email) {
            this.setState(({ errors }) => ({
                errors: { ...errors, email2: "" }
            }))
        } else {
            this.setState(({ errors }) => ({
                errors: { ...errors, email2: "Campo deve coincidir com o campo E-mail" }
            }))
        }
    }
    handlePasswordBlur = () => {
        const { password } = this.state
        if (password.trim().length) {
            this.setState(({ errors }) => ({
                errors: { ...errors, password: "" }
            }))
        } else {
            this.setState(({ errors }) => ({
                errors: { ...errors, password: "Deve ser preenchido" }
            }))
        }
    }

    handleSubmit = event => {
        const { nome, cpf, tel, cep, endereco, numero, email, email2, password } = this.state
        event.preventDefault()
        alert(JSON.stringify({ nome, cpf, tel, cep, endereco, numero, email, email2, password }))
    }
}


export default form;