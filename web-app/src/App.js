import React, { Component } from 'react';
import { Container, Jumbotron, Button } from 'reactstrap';
import './App.css';


import video from './videos/video.mp4';
import addcart from './images/addcart.svg';

const handleSubmit = values => alert(JSON.stringify(values))
const initialValues = {}

class App extends Component {
    render() {
        return (
                <div>
                    <div className="hero-wrapper">
                        <div className="hero">
                            <figure>
                                <video loop="loop" muted="muted" autoPlay="autoplay">
                                    <source src={video}/>
                                </video>
                                <div className="back"></div>
                                <figcaption>
                                    <h1>Segurança e Praticidade em suas compras/vendas diárias.</h1>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div className="stretch">
                        <Container>
                            <Jumbotron>
                                <h1 className="display-4">Venha conhecer.</h1>
                                <p className="lead">Com o aplicativo Seek, você poderá fazer o pedido de uma compra e apenas buscar no mercado ou solicitar entrega a domicílio, trazendo mais segurança e comodidade para você e sua família.</p>
                                <hr className="my-2" />
                                <center>
                                    <Button href="/register">Faça seu cadastro</Button>
                                </center>
                                <center>
                                    <img src={addcart} alt="addcart" className="addcart"/>
                                </center>
                            </Jumbotron>
                        </Container>
                    </div>
                </div>
        )
    }
}

export default App;