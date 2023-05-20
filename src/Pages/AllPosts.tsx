import PostCard from "../components/PostCard";
import {Container} from "react-bootstrap";

export const AllPosts = () => {
	return (
		<Container className="d-flex justify-content-center">
			<PostCard/>
		</Container>
	)
}