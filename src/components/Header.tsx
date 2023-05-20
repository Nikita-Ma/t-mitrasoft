import {Container, Image, Navbar, NavDropdown} from "react-bootstrap";
import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/reducers/rootReducer";

export const Header = () => {
    // * Connect Redux
    const usersState = useSelector((state: RootState) => state.users);
    const dispatch  = useDispatch()
    // React
    const [isOpen, setIsOpen] = useState<Boolean>(false);

    const {postActiveNav, profActiveNav} = usersState

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <NavDropdown title={isOpen ? "=" : "X"}
                             className="bg-dark text-white d-flex justify-content-center align-items-center"
                             style={{width: "50px", height: "50px"}}
                             onClick={toggleMenu}>

                    <NavDropdown.Item
                        onClick={() => dispatch({type: 'ALL_POSTS_ACTIVE'})}
                        className={postActiveNav ? 'bg-primary' : 'none'}

                    >
                        <Link to={"/"}
                              style={{textDecoration: "none", color: postActiveNav ? 'white' : 'black'}}>
                            All posts
                        </Link>
                    </NavDropdown.Item>

                    <NavDropdown.Item
                        onClick={() => dispatch({type: 'CREATOR_PROFILE_ACTIVE'})}
                        className={profActiveNav ? 'bg-primary' : 'none'}
                    >
                        <Link to={"/creator"}
                              style={{textDecoration: "none", color: profActiveNav ? 'white' : 'black'}}>
                            Creator
                        </Link>
                    </NavDropdown.Item>

                    <NavDropdown.Divider/>

                    <NavDropdown.Item className="d-flex align-items-center fw-bolder">
                        <Image width={"45px"} height={"45px"}
                               style={{borderRadius: "50%"}}
                               src={"https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"}
                               alt={"image user avatar"}/>
                        <span className="m-2">Name</span>
                        <span>email@example</span>
                    </NavDropdown.Item>

                </NavDropdown>
            </Container>
        </Navbar>
    );

};