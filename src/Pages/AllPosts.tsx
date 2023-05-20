import PostCard from "../components/PostCard";
import {Container} from "react-bootstrap";
import {Header} from "../components/Header";

export const AllPosts: React.FC = () => {
    return (
        <>
            <Header/>
            <Container className="d-flex justify-content-center">
                <PostCard/>
            </Container>
        </>
    )
}