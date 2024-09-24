import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { FaqData } from "../../Constants/FaqData";

const FAQ = () => {
  return (
    <>
      <div className="container py-4">
        {FaqData.map((elem, id) => {
          return (
            <>
              <Accordion key={id} className="py-1">
                <Accordion.Item
                  eventKey="0"
                  style={{ border: "1px solid #ff6900" }}
                >
                  <Accordion.Header>{elem.title}</Accordion.Header>
                  <Accordion.Body>{elem.desc}</Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </>
          );
        })}
      </div>
    </>
  );
};

export default FAQ;
