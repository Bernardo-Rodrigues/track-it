import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router';
import Loader from "react-loader-spinner";
import Logo from "../Logo";
import { Container, Form, StyledLink, Input, Button } from "./styles"

export default function Cadastro(){
    const navigate = useNavigate();
    const [disabledFields, setDisabledFields] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        image: '',
        password: ''
      });

    function handleInputChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    function handleSignUp(e) {
        e.preventDefault();
        setDisabledFields(true)

        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', formData);

        promise.then(response => {
            console.log(response)
            navigate('/')
        });
        promise.catch(error => {
            if(error.response.data.details) alert(error.response.data.message + "\n" + error.response.data.details)
            else alert(error.response.data.message)
            setDisabledFields(false)
        });
    }

    return(
        <Container>
            <Logo/>
            <Form onSubmit={handleSignUp}>
                <Input 
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    name="email"
                    placeholder="email"
                    disabled={disabledFields}
                />
                <Input 
                    type="password" 
                    value={formData.password}
                    onChange={handleInputChange}
                    name="password"
                    placeholder="senha"
                    disabled={disabledFields}
                />
                <Input 
                    type="text" 
                    value={formData.name}
                    onChange={handleInputChange}
                    name="name"
                    placeholder="nome"
                    disabled={disabledFields}
                />
                <Input 
                    type="text" 
                    value={formData.image}
                    onChange={handleInputChange}
                    name="image"
                    placeholder="foto"
                    disabled={disabledFields}
                />
                <Button disabled={disabledFields}>
                    {disabledFields 
                        ?   <Loader
                                type="ThreeDots"
                                color="#FFF"
                                height={45}
                                width={60}
                            /> 
                        :   "Cadastrar"
                    }
                </Button>
            </Form>
            <StyledLink to="/">Já tem uma conta? Faça login!</StyledLink>
        </Container>
    )
}