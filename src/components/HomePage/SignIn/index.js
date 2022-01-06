import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from 'react-router';
import Loader from "react-loader-spinner";
import BigLogo from "../../Logos/BigLogo";
import { Container, Form, StyledLink, Input, Button } from "../styles"
import { UserContext } from "../../../context";

export default function Login(){
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext)
    const [disabledFields, setDisabledFields] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    
    function handleInputChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    function handleSignUp(e) {
        e.preventDefault();
        setDisabledFields(true)

        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', formData);

        promise.then(response => {
            setUser(response.data)
            navigate('/hoje')
        });
        promise.catch(error => {
            if(error.response.data.details) alert(error.response.data.message + "\n" + error.response.data.details)
            else alert(error.response.data.message)
            setDisabledFields(false)
        });
    }

    return(
        <Container>
            <BigLogo/>
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
                <Button disabled={disabledFields}>
                    {disabledFields 
                        ?   <Loader
                                type="ThreeDots"
                                color="#FFF"
                                height={45}
                                width={60}
                            /> 
                        :   "Entrar"
                    }
                </Button>
            </Form>
            <StyledLink to="/cadastro">Não tem uma conta? Cadastre-se!</StyledLink>
        </Container>
    )
}