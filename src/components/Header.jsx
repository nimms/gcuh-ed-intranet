import React, { Component } from 'react'
import {
  Container,
  Row,
  Col,
  Jumbotron,
  Form,
  FormGroup,
  Input,
  Button,
  Label
} from 'reactstrap';
export default class Header extends Component {
  render() {
    return (
      <div>
        <Jumbotron className="d-flex align-items-end text-white">
          <Container className="text-center">
            <Row>
              <Col>
                <h1>Welcome to the GCUH ED Intranet</h1>
              </Col>
            </Row>
            
            <Form>
              <Row>
                <Label sm={2}>Search</Label>
                <Col sm={8}>
                  <FormGroup>
                    <Input type="text" name="search" id="search" placeholder="Search" />
                  </FormGroup>
                </Col>
                <Col md={2} className="text-left">
                  <Button>Submit</Button>
                </Col>
              </Row>
            </Form>
          </Container>
        </Jumbotron>        
      </div>
    )
  }
}
