import React from "react";
import Card from "./Card";
import contacts from "./contacts";
import './styles2.css'

function AboutUs() {
  return (
    <>
      <div>
        <h1 className="heading">About us</h1>
        <Card
          name={contacts[0].name}
          img={contacts[0].imgURL}
          email={contacts[0].email}
          phone={contacts[0].phone}
        />
        <Card
          name={contacts[1].name}
          img={contacts[1].imgURL}
          email={contacts[1].email}
          phone={contacts[2].phone}
        />
        <Card
          name={contacts[2].name}
          img={contacts[2].imgURL}
          email={contacts[2].email}
          phone={contacts[2].phone}
        />
        <Card
          name={contacts[3].name}
          img={contacts[3].imgURL}
          email={contacts[3].email}
          phone={contacts[3].phone}
        />
      </div>
    </>
  );
}

export default AboutUs;
