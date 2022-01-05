import { useContext } from "react"
import MiniLogo from "../../MiniLogo"
import UserImage from "../../UserImage"
import { Button, Container, Footer, Header, TodayButton } from "../styles"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

import { UserContext } from "../../../context";

export default function Today(){
    const { user } = useContext(UserContext)
    const percentage = 66;

    return(
        <Container>
            <Header>
                <MiniLogo/>
                <UserImage img={user.image}/>
            </Header>
            <Footer>
                <Button to="/habitos">Hábitos</Button>
                <TodayButton to="/hoje">
                    <CircularProgressbar 
                    value={percentage} 
                    text="Hoje" 
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                        backgroundColor:"#52B6FF",
                        textColor: "#fff",
                        pathColor: "#fff",
                        trailColor: "transparent"
                    })}
                    />;
                </TodayButton>
                <Button to="/historico">Histórico</Button>
            </Footer>
        </Container>
    )
}