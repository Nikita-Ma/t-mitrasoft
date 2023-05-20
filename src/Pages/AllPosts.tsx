import PostCard from "../components/PostCard";
import {Col, Container, Row} from "react-bootstrap";
import {Header} from "../components/Header";

export const AllPosts: React.FC = () => {
    return (
        <>
            <Header/>
            <Container>
                <Row className="d-flex justify-content-center">
                <PostCard/>
                </Row>
            </Container>
        </>
    )
}