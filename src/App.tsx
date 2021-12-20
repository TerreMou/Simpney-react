import React from 'react';
import {HashRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import styled from 'styled-components';
import Nav from './components/Nav';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`;

function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
          <Switch>
            <Route path="/tags">
              <Tags/>
            </Route>
            <Route path="/money">
              <Money/>
            </Route>
            <Route path="/statistics">
              <Statistics/>
            </Route>
            <Redirect exact from="/" to="/money"/>
            <Route path="*">
              <NoMatch/>
            </Route>
          </Switch>
        </Main>
        <Nav/>
      </Wrapper>
    </Router>

  );
}

function Tags() {
  return (
    <>
      <div>Tags</div>
    </>
  );
}

function Money() {
  return (
    <>
      <div>Money</div>
    </>

  );
}

function Statistics() {
  return (
    <>
      <div>Statistics</div>
    </>
  );
}

function NoMatch() {
  return (
    <div>找不到页面</div>
  );
}

export default App;