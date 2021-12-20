import React from 'react';
import {HashRouter, Routes, Route, Navigate} from 'react-router-dom';
import Nav from './components/Nav';
import styled from 'styled-components';

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
    <HashRouter>
      <Wrapper>
        <Main>
          <Routes>
            <Route path="/tags" element={<Tags/>}/>
            <Route path="/money" element={<Money/>}/>
            <Route path="/statistics" element={<Statistics/>}/>
            <Route path="/" element={<Navigate replace to="/Money"/>}/>
            <Route path="*" element={<NoMatch/>}/>
          </Routes>
        </Main>
        <Nav/>
      </Wrapper>
    </HashRouter>

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