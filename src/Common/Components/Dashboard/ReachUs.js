import React from "react"
import { Component } from "react";
import { Widget, addResponseMessage } from 'react-chat-widget';
import Faq from "react-faq-component"
import logo from './assets/img/img.jpg';
import 'react-chat-widget/lib/styles.css';
import { 
  Container,
  Card,
  CardHeader,
  CardBody,
 } from "reactstrap";


//import {isMobile} from 'react-device-detect';


const data = {
  title: "Frequently Asked Questions",
  rows: [
      {
          title: "Lorem ipsum dolor sit amet,",
          content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
            ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
            In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
            Fusce sed commodo purus, at tempus turpis.`,
      },
      {
          title: "Nunc maximus, magna at ultricies elementum",
          content:
              "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
      },
      {
          title: "Curabitur laoreet, mauris vel blandit fringilla",
          content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
          Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
          Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
          Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
      },
      {
          title: "What is the package version",
          content: <p>current version is 1.2.1</p>,
      },
  ],
};

const styles = {
  // bgColor: 'white',
  titleTextColor: "blue",
  rowTitleColor: "blue",
  // rowContentColor: 'grey',
  // arrowColor: "red",
};

const config = {
  // animate: true,
  // arrowIcon: "V",
  // tabFocus: true
};
// reactstrap components
// core components

//const ReachUs = () => {
  class ReachUs extends Component {
    componentDidMount() {
      addResponseMessage("Welcome! Do you have any query ? ");
    }
  
    handleNewUserMessage = (newMessage) => {
      console.log(`New message incomig! ${newMessage}`);
      // Now send the message throught the backend API
    }
  

    

    render() {
     
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "50px",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-blue opacity-7" />
      {/* Page content */}


      <Container className="mt--7" fluid>
       
      <Widget
          handleNewUserMessage={this.handleNewUserMessage}
          profileAvatar={logo}
          title="ServiHUB Quarters"
          subtitle="We care to serve. We go beyond merely communicating to connecting with people. Chat now!"
        />
        <br />
      </Container>
      
      </div>
      
      <Card className="bg-secondary shadow">
         <CardHeader className="bg-white border-0">
           <h3 className="mb-0">Wanna Know About Us</h3>
         </CardHeader>
         <CardBody>
      <Faq
                data={data}
                styles={styles}
                config={config}
            />
</CardBody>
</Card>
    </>
  );
} 
}

export default ReachUs;
