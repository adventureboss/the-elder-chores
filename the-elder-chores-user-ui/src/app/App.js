import * as React from 'react';
import logo from './logo.svg';
import '@patternfly/react-core/dist/styles/base.css';
import './App.css';
import {
    Bullseye, Flex, FlexItem, Level,
    Masthead,
    MastheadBrand,
    MastheadContent,
    MastheadMain,
    Page, PageSection, PageSectionVariants, Split, SplitItem, Text, TextContent, TextVariants,
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
              <TextContent>
                  <Home />
              </TextContent>
          </PageSection>
      </Page>
    </React.Fragment>
  );
}

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
export default App;
