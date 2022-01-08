import {  Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Home from './components/Home'
import NavMenu from './components/NavMenu'
import StorePage from './components/StorePage';
import Pagestyles from './components/styled/Pagestyles'
import ProductPage from './components/ProductPage';


const Pages = styled.div`
  flex: 1;
  display: flex;
  overflow: hidden;
`;

function App() {
  return (
        <Pagestyles>
          <Pages>
            <Routes>
              <Route path="/store" element={<StorePage />} exact />
              <Route path="/product" element={<ProductPage />}exact/>
              <Route path="/" element={<Home/>} exact />
            </Routes>
          </Pages>
          <NavMenu />
        </Pagestyles>
  );
}

export default App;
