import React, { useState } from 'react';
import './App.css';
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import api from './services/api';


export default function Registerclient() {
    const [ name, setName ] = useState('')
    const [ cpf, setCpf ] = useState('')
    const [ telephone, setTelephone ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ email2, setEmail2 ] = useState('')
    const [ password_hash, setPassword_hash ] = useState('')
    const [ zip_code, setZip_code ] = useState('')
    const [ address, setAddress ] = useState('')
    const [ number, setNumber ] = useState('')

    async function handleNewUser(e){
        e.preventDefault()

        const data = {
            name,
            cpf,
            telephone,
            email,
            password_hash,
            zip_code,
            address,
            number
        }

        try {
            await api.post('client', data, {
                // headers: {
                //     Authorization: id_client
                // }
            })
        } catch (error) {
            // alert("Erro ao tentar adicionar usuário, tente novamente!")
            console.log(error);
        }
    }
    return (
        <Container style={{paddingTop: '100px'}}>
            <h1 className="title">Cadastro - Cliente</h1>
            <Form onSubmit={ handleNewUser } >
                <FormGroup>
                    <Label for="nome">Nome</Label>
                    <Input type="text" value={name} placeholder="Digite o seu nome completo" onChange={e => setName(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label for="cpf">CPF</Label>
                    <Input type="text" value={cpf} placeholder="Digite o seu CPF" onChange={e => setCpf(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label for="tel">Telefone</Label>
                    <Input type="text" value={telephone} placeholder="Digite seu telefone" onChange={e => setTelephone(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label for="cep">CEP</Label>
                    <Input type="text" value={zip_code} placeholder="Digite o CEP" onChange={e => setZip_code(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label for="endereco">Endereço</Label>
                    <Input type="text" value={address} placeholder="Digite seu endereço" onChange={e => setAddress(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label for="numero">Número</Label>
                    <Input type="number" value={number} placeholder="Digite seu número" onChange={e => setNumber(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label for="email">E-mail</Label>
                    <Input type="email" value={email} placeholder="Digite seu E-mail" onChange={e => setEmail(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label for="email2">Repita o E-mail</Label>
                    <Input type="email" value={email2} placeholder="Digite seu E-mail novamente" onChange={e => setEmail2(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Senha</Label>
                    <Input type="password" value={password_hash} placeholder="Digite uma senha" onChange={e => setPassword_hash(e.target.value)} />
                </FormGroup>
                {/* <FormGroup>
                    <Label for="password2">Confirme sua senha</Label>
                    <Input type="password" name="password2" id="password2" placeholder="Digite uma senha" />
                </FormGroup> */}
                
                <Button>Cadastrar</Button>
            </Form>
        </Container>
    );
}
