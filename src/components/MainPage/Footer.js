import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { Button, FooterElement, TodayButton } from "./styles";

export default function Footer(){
    const percentage = 66;
    
    return(
        <FooterElement>
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
        </FooterElement>
    )
}