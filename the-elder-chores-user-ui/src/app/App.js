import * as React from 'react';
import '@patternfly/react-core/dist/styles/base.css';
import './App.css';
import {
    Flex, FlexItem,
    Masthead,
    MastheadContent,
    MastheadMain,
    Page, PageSection, PageSectionVariants, Stack, StackItem, Text, TextContent, TextVariants,
    Toolbar,
    ToolbarContent, ToolbarItem
} from "@patternfly/react-core";
import Home from "../pages/Home";

const Header = () => (
  <Masthead>
    <MastheadMain>
      <MastheadContent>
        <Toolbar>
          <ToolbarContent>
            <ToolbarItem>Home</ToolbarItem>
            <ToolbarItem>Shop</ToolbarItem>
            <ToolbarItem>Quests</ToolbarItem>
          </ToolbarContent>
        </Toolbar>
      </MastheadContent>
    </MastheadMain>
  </Masthead>
);

const App = () => {
  return (
    <React.Fragment>
        <Flex>
            <FlexItem style={{marginLeft: 'auto', marginRight: 'auto'}}>
                <TextContent>
                    <Text component={ TextVariants.h1 }>
                        The Elder Chores
                    </Text>
                </TextContent>
            </FlexItem>
        </Flex>
      <Page header={ <Header /> }>
          <PageSection variant={ PageSectionVariants.dark }>
              <Stack style={{alignItems: "center"}}>
                  <StackItem>
                      <Home />
                  </StackItem>
              </Stack>
          </PageSection>
      </Page>
    </React.Fragment>
  );
}

export default App;
