import { Container, Title } from "../styles"
import Header from "../Header"
import Footer from "../Footer"

export default function Historic(){
    return(
        <Container>
            <Header/>
            <Title><h2>Histórico</h2></Title>
            <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            <Footer/>
        </Container>
    )
}