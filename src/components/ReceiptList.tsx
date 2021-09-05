import * as React from 'react';
import {
  Accordion, Card, Container,
} from 'react-bootstrap';
import { Receipt } from '../models/Receipt';

export interface ReceiptListProps {
    receipts: Receipt[];
}

const ReceiptList: React.FC<ReceiptListProps> = ({ receipts }) => (
  <Container>
    {receipts.map((receipt, index) => (
      <Accordion>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey={index.toString()}>
            {receipt.superMarket}
            <span> - </span>
            {receipt.date}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={index.toString()}>
            <>
              {receipt.products.map((product) => (
                <Card.Body>{product.name}</Card.Body>
              ))}
            </>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    ))}

  </Container>
);

export default ReceiptList;
