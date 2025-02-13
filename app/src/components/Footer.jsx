import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <p>UpcycleZone &copy {currentYear}</p>
          </Col>
        </Row>
      </Container>
    </Footer>
  );
};
export default Footer;
