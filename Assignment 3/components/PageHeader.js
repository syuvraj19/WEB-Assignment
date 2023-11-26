import React from "react";
import { Card } from "react-bootstrap";
const PageHeader = (props) => {
  return (
    <>
      <Card>  
        <Card.Body>
          <h3>{props.title}</h3>
          {props.text}
          <div className="float-end">
          {props.showSubscriber?<button className="Subscriber">Subscriber</button>: null}
          {props.showCustomer?<button className="Customer">Customer</button>: null}
          </div>
        </Card.Body>
      </Card>
      <br/>
    </>
  );
};

export default PageHeader;