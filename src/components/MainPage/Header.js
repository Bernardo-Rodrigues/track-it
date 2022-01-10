import { useContext } from "react"
import { UserContext } from "../../context/user";
import MiniLogo from "../Logos/MiniLogo"
import UserImage from "../UserImage";
import { HeaderElement } from "./styles";

export default function Header(){
    const { user } = useContext(UserContext)

    return(
        <HeaderElement>
            <MiniLogo/>
            <UserImage img={user.image}/>
        </HeaderElement>
    )
}