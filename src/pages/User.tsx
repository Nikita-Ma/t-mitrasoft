import {UserProfile} from "../components/UserProfile";
import {Container} from "react-bootstrap";
import {Header} from "../components/Header";


export const User: React.FC = () => {


    return (
        <>
            <Header/>
            <Container>
                    <UserProfile/>
            </Container>
        </>

    )
}