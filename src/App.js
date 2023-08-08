import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider as MyProvider } from './providers/Provider';
import Simplelister from './components/Simplelister';
import Simplesetter from './components/Simplesetter';
import Navigation from './components/Navigation';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
  }
`;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

const ContentWrapper = styled.div`
  width: 80%;
  max-width: 800px;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

function App() {
  return (
    <AppWrapper>
      <GlobalStyle />
      <MyProvider>
        <BrowserRouter>
          <Navigation />
          <ContentWrapper>
            <Routes>
              <Route path="/add" element={<Simplesetter />} />
              <Route path="/" element={<Simplelister />} />
            </Routes>
          </ContentWrapper>
        </BrowserRouter>
      </MyProvider>
    </AppWrapper>
  );
}

export default App;
