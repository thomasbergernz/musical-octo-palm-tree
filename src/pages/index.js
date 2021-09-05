import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fontsource/lora";
import { Container, Card, Col, Row } from "react-bootstrap";

// styles
const pageStyles = {
  fontFamily: "Lora, serif",
  marginTop: 100,
  fontSize: 14,
}

const headerStyle = {
  fontSize: 20,
}


const IndexPage = () => {
  return (
    <div>
      <Container fluid="lg">
          <Row>
              <Col lg="4" xs="12">
                  <Card style={pageStyles} className="bg-light">
                  <Card.Body>
                      <Card.Title style={headerStyle} className="bg-light">
                          confluence<span class="text-muted"> | ˈkɒnflʊəns | </span>
                      </Card.Title>
                      <p>noun </p>
                        <p>the junction of two rivers, especially rivers of approximately equal width.<strong><em> the confluence of</em></strong><em> the Rivers Ouse and Foss</em>.<em> farther down the Tigris at </em><strong><em>its confluence with</em></strong><em> the Euphrates</em>.
                            </p>
                        <p>• an act or process of merging:<em> a major confluence of the world's financial markets</em>. </p>
                        <p> </p>
                        <p class="text-uppercase header-origin">Origin </p><small>late Middle English: from late Latin<em> confluentia</em>, from Latin<em> confluere </em><strong>‘flow together’</strong> . </small>
                      </Card.Body>
                  </Card>
              </Col>
              <Col lg="8" xs="auto"></Col>
          </Row>
      </Container>
    </div>

  )
}

export default IndexPage
