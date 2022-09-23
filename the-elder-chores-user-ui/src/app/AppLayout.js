import * as React from 'react';
import {
  Flex, FlexItem, Stack, StackItem
} from "@patternfly/react-core";
import { NavLink } from 'react-router-dom';
import logo from '../img/the-elder-chores.png'
import Login from '../pages/Login/Login';
import { usePocketbase } from "../components/Pocketbase";
// import broom from '../img/broom.png'
import './App.css';

const homePath = "/";
const shopPath = "/shop";
const questsPath = "/quests";
const managementPath = '/management';

const Header = ({ user }) => {
  const client = usePocketbase();

  return (
    <div id="header">
      <ul className='display-flex'>
        <li className='item'><NavLink to={homePath}>Home</NavLink></li>
        <li className='item'><NavLink to={questsPath}>Quests</NavLink></li>
        <li className='item'><NavLink to={shopPath}>Shop</NavLink></li>
        <li className='item'><NavLink to={managementPath}>Management</NavLink></li>
        <li style={{flexGrow: 1}} />
        {user && <li className='item'><NavLink onClick={() => client.authStore.clear()}>Logout</NavLink></li>}
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
        <Header user={user} />
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
