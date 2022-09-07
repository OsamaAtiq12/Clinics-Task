import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "./style.css";
import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Icon } from "@iconify/react";
import Form from "react-bootstrap/Form";

import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div>
      <Navbar bg="white" expand="lg" className="nav-style">
        <Container fluid>
          <Navbar.Brand href="#">Clinics</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 ms-5"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1" className="nav-head">
                Home
              </Nav.Link>
              <Nav.Link href="#action2" className="nav-head ">
                About Us
              </Nav.Link>
              <Nav.Link href="#action2" className="nav-head ">
                Testimonials
              </Nav.Link>
            </Nav>

            <Button className="btn-style">LOGIN</Button>
            <Button className="btn-style">SIGN UP</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="doctor-banner">
        <div className="get-started">
          <h1>
            Change Smaile <br></br> with Dentist
          </h1>
          <p>
            We have done it carefully and simply <br></br> Combine with the
            ingredients
          </p>

          <Button className="bg-dark">Get Started</Button>
        </div>
        <img
          className="my-img"
          src="https://www.pngall.com/wp-content/uploads/2018/05/Doctor-PNG-Clipart.png"
          alt="Girl in a jacket"
          width="500"
          height="600"
        ></img>
        <div className="form">
          <Form clasName="inner-form">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>LastName</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Email</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button type="submit" className="Form-btn">
              Appointment
            </Button>
          </Form>
        </div>
      </div>

      <Container className="my-container">
        <div className="text-center creatorDesc">
          <Row className="my-row">
            <Col md="3">
              <div className="count">
                <p>Doctors</p>
                <h4>+824</h4>
              </div>
            </Col>

            <Col md="3">
              <div className="count">
                <p>Customer Services</p>
                <h4>+20K</h4>
              </div>
            </Col>

            <Col md="3">
              <div className="count">
                <p>Pion Services</p>
                <h4>+10K</h4>
              </div>
            </Col>
          </Row>
        </div>
      </Container>

      <div>
        <h1 className="heading-style">
          {" "}
          Best Known for Pro <br></br> Treatment and Services
        </h1>
      </div>

      <div className="cards">
        <div className="card-move">
          {" "}
          <Card style={{ width: "15rem" }} className="card-cus">
            <Card.Img
              className="card-img"
              variant="top"
              src="https://irp-cdn.multiscreensite.com/985aeeca/dms3rep/multi/2.jpg"
            />
            <Card.Body>
              <Card.Title className="card-title">Cavities</Card.Title>
              <Card.Text className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="card-move">
          {" "}
          <Card style={{ width: "15rem" }} className="card-cus">
            <Card.Img
              className="card-img"
              variant="top"
              src="https://healthnfitnessmag.com/wp-content/uploads/2019/12/what-to-do-for-sensitive-tooth.jpg"
            />
            <Card.Body>
              <Card.Title className="card-title">Sensitive teeth</Card.Title>
              <Card.Text className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="card-move">
          <Card style={{ width: "15rem" }} className="card-cus">
            <Card.Img
              className="card-img"
              variant="top"
              src="https://www.smiledental.co.nz/wp-content/uploads/2019/08/emer_dd168878450fe613682f3871fc01d118.jpg"
            />
            <Card.Body className="card-style">
              <Card.Title className="card-title">Oral cancer</Card.Title>
              <Card.Text className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className="doctor-banner-2 ">
        <div className="create-account">
          <p className="my-text">
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
          </p>

          <br></br>
          <Button className="bg-dark  c-btn"> Create a New Account</Button>
        </div>
        <img
          className="my-img-2"
          src="	https://pluspng.com/img-png/png-woman-doctor--602.png"
          alt="Girl in a jacket"
          width="500"
          height="600"
        ></img>
      </div>

      <div className="Recent-post">
        <div className="rec-div">
          <h1 className="recent-head">
            Recent posts on <br></br> Dental Health{" "}
          </h1>
        </div>

        <div className="content-div">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley
          </p>
        </div>
      </div>

      <div className="main-img-div">
        <div>
          <img
            className="my-img-1"
            src="	https://img.freepik.com/free-photo/dentist-doing-check-up-patient_23-2149206225.jpg?w=2000
"
            alt="Girl in a jacket"
          ></img>
        </div>

        <div className="img-div2">
          {" "}
          <img
            className="my-img1-2"
            src="		https://thumbs.dreamstime.com/b/happy-women-perfec…ist-office-ready-to-treatment-woman-128796715.jpg"
            alt="Girl in a jacket"
          ></img>
          <div className="Container">
            <img
              className="my-img1"
              src="		https://image.shutterstock.com/image-photo/young-man-dentist-dental-care-260nw-1487158082.jpg"
              alt="Girl in a jacket"
            ></img>

            <div class="text-block"></div>
          </div>
        </div>
      </div>
      <div className="about">
        <p>about blog portfolio freebies resources contact</p>
      </div>
      <div className="icon-div">
        <Icon icon="bi:facebook" className="icon" />
        <Icon icon="ant-design:instagram-filled" className="icon" />
        <Icon icon="akar-icons:pinterest-fill" className="icon" />
      </div>

      <div>
        <h1 className="heading-style-2"> Follow us on Insta</h1>
      </div>

      <div className="footer-img">
        <img
          className="my-img-3"
          src="	https://www.lifeofpix.com/wp-content/uploads/2018/07/308-name5390-chim-1600x1071.jpg
"
          alt="Girl in a jacket"
        ></img>
        <img
          className="my-img-3"
          src="	https://www.lifeofpix.com/wp-content/uploads/2018/07/308-name5390-chim-1600x1071.jpg
"
          alt="Girl in a jacket"
        ></img>
        <img
          className="my-img-3"
          src="	https://www.lifeofpix.com/wp-content/uploads/2018/07/308-name5390-chim-1600x1071.jpg
"
          alt="Girl in a jacket"
        ></img>
        <img
          className="my-img-3"
          src="	https://www.lifeofpix.com/wp-content/uploads/2018/07/308-name5390-chim-1600x1071.jpg
"
          alt="Girl in a jacket"
        ></img>
      </div>
      <div className="my-footer">
        Made by Osama Atiq © 2022, All rights Reserved
      </div>
    </div>
  );
}

export default App;
