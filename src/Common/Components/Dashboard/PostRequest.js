import React from 'react';

// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    NavItem, 
    NavLink, 
    Nav,
    Form,
    Input,
    Container,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
  } from "reactstrap";



const PostRequest = () => {
  
  const [selected, setSelected] = React.useState("selected1");
  const [budgetFocus, setBudgetFocus] = React.useState(false);
  return (

          <div className="header bg-gradient-default pb-10 pt-5 pt-md-8">
        
        <Container className="mt--10" fluid>
       
          
       <Card className="bg-secondary shadow">
         <CardHeader className="bg-white border-0">
           <h3 className="mb-0">Post a Request</h3>
         </CardHeader>
         <CardBody>
           <Form>
              Describe the service you're looking to purchase - please be as detailed as possible:
              <br />
              <br />
              
        
      
               {/**<TextField
                   
                    label="Decribe what you want"
                    multiline
                    rows={5}
                    placeholder="I'm looking for..."
                    variant="outlined"
                  />
               */}   
                  <Input type="textarea" name="text" id="exampleText" 
                    rows={4}
                    //label="Decribe what you want"
                    multiline
                    placeholder="I'm looking for..."
                    //variant="outlined"
                    />

<br />
<br />
<div class="form-group form-file-upload form-file-multiple">
    <div class="input-group">
        <span class="input-group-btn">
            <Button outline color="default" type="button" class="btn btn-fab btn-round btn-primary">
                <i class="ni ni-cloud-upload-96"> Upload File</i>
            </Button>
            &emsp;&emsp;&emsp;
            <Button outline color="default" type="button" class="btn btn-fab btn-round btn-primary">
                <i class="ni ni-cloud-upload-96"> Upload Photo</i>
            </Button>
        </span>
    </div>
  </div>

            <hr className="my-4" />
            
           <div className="pl-lg-4">
              
             Choose a category:
             <br />
             <br />
             <UncontrolledDropdown>
        <DropdownToggle caret color="default" id="navbarDropdownMenuLink2">
               Category
        </DropdownToggle>

        <DropdownMenu aria-labelledby="navbarDropdownMenuLink2">
          <li>
            <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
              Graphic designing
            </DropdownItem>
          </li>

          <li>
            <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
             Photoshop
            </DropdownItem>
          </li>

          <li>
            <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
              CAD Drawing
            </DropdownItem>
          </li>
        </DropdownMenu>
      </UncontrolledDropdown>
    </div>
    <br />
  <br />    
             Once you place your order, when would you like your service delivered?
  <br />
  <br />
  <Nav
        className=" nav-fill flex-column flex-sm-row"
        id="tabs-text"
        pills
        role="tablist"
      >
        <NavItem>
          <NavLink
            aria-controls="tabs-text-1"
            aria-selected={selected === "selected1"}
            className={
              "mb-sm-3 mb-md-0 " + (selected === "selected1" ? "active" : "")
            }
            data-toggle="tab"
            href="#pablo"
            id="tabs-text-1-tab"
            onClick={(e) => {
              e.preventDefault();
              setSelected("selected1");
            }}
            role="tab"
          >
            24 Hours
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            aria-controls="tabs-text-2"
            aria-selected={selected === "selected2"}
            className={
              "mb-sm-3 mb-md-0 " + (selected === "selected2" ? "active" : "")
            }
            data-toggle="tab"
            href="#pablo"
            id="tabs-text-2-tab"
            onClick={(e) => {
              e.preventDefault();
              setSelected("selected2");
            }}
            role="tab"
          >
            3 Days
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            aria-controls="tabs-text-3"
            aria-selected={selected === "selected3"}
            className={
              "mb-sm-3 mb-md-0 " + (selected === "selected3" ? "active" : "")
            }
            data-toggle="tab"
            href="#pablo"
            id="tabs-text-3-tab"
            onClick={(e) => {
              e.preventDefault();
              setSelected("selected3");
            }}
            role="tab"
          >
            7 Days
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            aria-controls="tabs-text-4"
            aria-selected={selected === "selected4"}
            className={
              "mb-sm-3 mb-md-0 " + (selected === "selected4" ? "active" : "")
            }
            data-toggle="tab"
            href="#pablo"
            id="tabs-text-4-tab"
            onClick={(e) => {
              e.preventDefault();
              setSelected("selected4");
            }}
            role="tab"
          >
            Other
          </NavLink>
        </NavItem>
      </Nav>
      <br />
  <br />

             What is your budget for this service?
             <br />
  <br />

                  <Input
                    className=" form-control-alternative"
                    placeholder="$"
                    type="Number"
                    onFocus={() => setBudgetFocus(true)}
                    onBlur={() => setBudgetFocus(false)}
                  ></Input>

  <br />
  <br />
             <div className="pl-lg-4">              
               <Button
                 color="default"
                 href="#"
                 onClick={(e) => e.preventDefault()}
                 size="lg"
               >
                 Post & make it work
               </Button>
             </div>
           </Form>
         </CardBody>
       </Card>
       <br />
 </Container>

        
       </div>
  );
}

export default PostRequest