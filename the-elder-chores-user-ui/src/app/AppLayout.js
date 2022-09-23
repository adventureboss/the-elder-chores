import * as React from 'react';
import {
  Button, ButtonVariant,
  Flex, FlexItem, Stack, StackItem
} from "@patternfly/react-core";
import { NavLink } from 'react-router-dom';
import logo from '../img/the-elder-chores.png'
import Login from '../pages/Login/Login';
import { usePocketbase } from "../components/Pocketbase";
// import broom from '../img/broom.png'
import './App.css';

const homePath = "/";
const dashPath = "/dashboard";
const shopPath = "/shop";
const questsPath = "/quests";

const Header = ({ user }) => {
  const client = usePocketbase();


  // return (
  //   <Masthead>
  //     <MastheadMain>
  //       <MastheadBrand>
  //         <img src={broom} alt="Elder Chores Logo" />
  //       </MastheadBrand>
  //       <MastheadContent>
  //         <Toolbar>
  //           <ToolbarContent>
  //             <ToolbarItem><NavLink to={homePath}>Home</NavLink></ToolbarItem>
  //             <ToolbarItem><NavLink to={shopPath}>Shop</NavLink></ToolbarItem>
  //             <ToolbarItem><NavLink to={questsPath}>Quests</NavLink></ToolbarItem>
  //             <ToolbarItem><NavLink to={dashPath}>Restricted area</NavLink></ToolbarItem>
  //             {user && <ToolbarItem><Button onClick={() => client.authStore.clear()} variant={ButtonVariant.link}>Logout</Button></ToolbarItem>}
  //           </ToolbarContent>
  //         </Toolbar>
  //       </MastheadContent>
  //     </MastheadMain>
  //   </Masthead>
  // )

  return (
    <div id="header">
      <ul className='display-flex'>
        <li className='item'><NavLink to={homePath}>Home</NavLink></li>
        <li className='item'><NavLink to={questsPath}>Quests</NavLink></li>
        <li className='item'><NavLink to={shopPath}>Shop</NavLink></li>
        <li className='item-long'><NavLink to={dashPath}>Restricted area</NavLink></li>
        {user && <li className='item'><Button onClick={() => client.authStore.clear()} variant={ButtonVariant.link}>Logout</Button></li>}
      </ul>
    </div>
  )
};

const AppLayout = ({ user, children }) => {

  // return (
  //   <React.Fragment>
  //     <Flex>
  //       <FlexItem style={{ marginLeft: 'auto', marginRight: 'auto' }}>
  //         <img src={logo} alt="The Elder Chores" />
  //       </FlexItem>
  //     </Flex>
  //     <Page header={<Header user={ user } />}>
  //       <PageSection variant={PageSectionVariants.dark}>
  //         <Stack style={{ alignItems: "center" }}>
  //           <StackItem>
  //             {user ? children : <Login />}
  //           </StackItem>
  //         </Stack>
  //       </PageSection>
  //     </Page>
  //   </React.Fragment>
  // );

  return (
    <React.Fragment>
      <Flex>
        <FlexItem style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '20px' }}>
          <img src={logo} alt="The Elder Chores" />
        </FlexItem>
      </Flex>
      <div>
        <Header />
        <Stack style={{ alignItems: "center" }}>
          <StackItem>
            {user ? children : <Login />}
          </StackItem>
        </Stack>
      </div>
    </React.Fragment>
  );
}

export default AppLayout;
