import React from "react";
import AlexPic from "./AlexPic";
import AlexPaintedImage from "./AlexPaintedImage";
import AlexPicSmall from "./AlexPicSmall";
import { Container, Row, Col } from "reactstrap";
import "./App.css";

class AlexCard extends React.Component {
  // don't understand why we needed constructor or super. Also wtf is a super?
  constructor() {
    super();
    this.state = {
      switchRenderImage: true,
    };
  }

  render() {
    return (
      <Container>
        <Row className="xs">
          <Col className="about-me xs">
            <div className="about-me title xs">about me</div>
            <div className="about-me body xs">
              <p>
                I'm a full stack developer. My tech stack is React.js, C#, and
                SQL.{" "}
              </p>
              <p>
                I enjoying what I do and I get excited when I get to build
                something. In the future, I wish to become a leader in my field,
                recognized for my skill, and teach others to do the same. I
                think it is important to grow and be challenged.
              </p>
              <p>
                When I'm not coding, you can find me at
                <a href="https://www.sgvbc.net/">SGVBC</a>
              </p>
            </div>
          </Col>

          <Col>
            <div
              className="img-stack"
              onMouseEnter={() => {
                this.setState({
                  switchRenderImage: !this.state.switchRenderImage,
                });
              }}
            >
              {/* javascript to check for screen size for conditional rendering */}
              <div className="img-stack_item-top">
                {window.screen.width < 768 ? (
                  <div className="smallPic">
                    <AlexPicSmall></AlexPicSmall>
                  </div>
                ) : (
                  <div>
                    {this.state.switchRenderImage ? (
                      <div>
                        <AlexPaintedImage></AlexPaintedImage>
                      </div>
                    ) : (
                      <div>
                        <AlexPic></AlexPic>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AlexCard;
