import MiniLogo from "../Logos/MiniLogo"
import UserImage from "../UserImage";
import { HeaderElement } from "./styles";
import { UserContext } from "../../context/user";
import { useContext } from "react"

export default function Header(){
    const { user } = useContext(UserContext)

    return(
        <HeaderElement>
            <MiniLogo/>
            <UserImage img={user.image}/>
        </HeaderElement>
    )
}