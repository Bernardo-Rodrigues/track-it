import { useContext, useState } from "react";
import { useNavigate } from 'react-router';
import { UserContext } from "../../../context/user";
import { SignIn } from "../../../services/Api";
import Loader from "react-loader-spinner";
import BigLogo from "../../Logos/BigLogo";
import { Container, Form, StyledLink, Input, Button } from "../styles"

export default function Login(){
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext)
    const [disabledFields, setDisabledFields] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    
    if(user) {
        SignIn({email:user.email, password:user.password})
        .then(() => {
            navigate('/hoje')
        })
        .catch(error => console.log(error.response))
    }

    function handleInputChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    function handleSignIn(e) {
        e.preventDefault();
        setDisabledFields(true)

        SignIn(formData)
        .then(response => {
            const user = response.data
            localStorage.setItem("user", JSON.stringify(user))
            setUser(user)
            navigate('/hoje')
        })
        .catch(error => {
            if(error.response.data.details) alert(error.response.data.message + "\n" + error.response.data.details)
            else alert(error.response.data.message)
            setDisabledFields(false)
        });
    }

    return(
        <Container>
            <BigLogo/>
            <Form onSubmit={handleSignIn}>
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