import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from './Image';
import Description from './Description';
import Name from './Name';
import Price from './Price';

const Productcard = () => {
  const firstName = 'Firas';

  return (
    <>
      <Card style={{ width: '22rem' }}>
      <Image />
        <Card.Body>
          <Card.Title>
            <Name />
          </Card.Title>
          <Card.Text>
            <Description />
            <Price />
          </Card.Text>
          <Button variant="primary">Buy it</Button>
        </Card.Body>
      </Card>
      <div style={{ textAlign: 'center' }}>
        
          <p>Hello, {firstName}!</p>
       
      </div>
    </>
  );
};

export default Productcard;
