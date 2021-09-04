import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fontsource/lora";
import { Container, Card, Col, Row, CloseButton } from "react-bootstrap";

// styles
const pageStyles = {
  fontFamily: "Lora, serif",
  marginTop: 100,
  fontSize: 14,
}

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}

const headerStyle = {
  fontSize: 20,
}

// data
const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
]

// markup
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

// export default () =>
// <div>
// <Container fluid="lg">
//     <Row>
//         <Col>
//             <Card>
//                 <Card.Header>
//                     confluence<span class="text-muted"> | ˈkɒnflʊəns | </span>
//                 </Card.Header>
//                 <Card.Body>

//                 </Card.Body>
//             </Card>
//         </Col>
//     </Row>
// </Container>
// </div>