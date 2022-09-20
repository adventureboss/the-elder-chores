import * as React from 'react';
import {
  Flex, FlexItem,
  Masthead,
  MastheadContent,
  MastheadMain,
  Page, PageSection, PageSectionVariants, Stack, StackItem, Text, TextContent, TextVariants,
  Toolbar,
  ToolbarContent, ToolbarItem
} from "@patternfly/react-core";
import { NavLink } from 'react-router-dom';
import logo from '../img/logo.png'

const homePath = "/";
const dashPath = "/dashboard";
const shopPath = "/shop";
const questsPath = "/quests";

const Header = () => (
  <Masthead>
    <MastheadMain>
      <MastheadContent>
        <Toolbar>
          <ToolbarContent>
            <ToolbarItem><NavLink to={homePath}>Home</NavLink></ToolbarItem>
            <ToolbarItem><NavLink to={shopPath}>Shop</NavLink></ToolbarItem>
            <ToolbarItem><NavLink to={questsPath}>Quests</NavLink></ToolbarItem>
            <ToolbarItem><NavLink to={dashPath}>Restricted area</NavLink></ToolbarItem>
          </ToolbarContent>
        </Toolbar>
      </MastheadContent>
    </MastheadMain>
  </Masthead>
);

const AppLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Flex>
        <FlexItem style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          <img src={logo} alt="The Elder Chores" />
        </FlexItem>
      </Flex>
      <Page header={<Header />}>
        <PageSection variant={PageSectionVariants.dark}>
          <Stack style={{ alignItems: "center" }}>
            <StackItem>
              {children}
            </StackItem>
          </Stack>
        </PageSection>
      </Page>
    </React.Fragment>
  );
}

export default AppLayout;
