import {  Route, Routes } from 'react-router-dom';
import colors from './assets/colors';
import styled from 'styled-components';
import Home from './components/Home'
import NavMenu from './components/NavMenu'

const AppEl = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  overflow: hidden;
  height: 100vh;
`;

const Pages = styled.div`
  flex: 1;
  display: flex;
  overflow: hidden;
`;

function App() {
  return (
        <AppEl>
          <Pages>
            <Routes>
              <Route path="/store" element={<div>Store</div>} exact />
              <Route path="/product" element={<div>Product</div>} exact />
              <Route path="/product" element={<div>Product</div>} exact />
              <Route path="/product" element={<div>Product</div>} exact />
              <Route path="/product" element={<div>Product</div>} exact />
              <Route path="/" element={<Home/>} exact />
            </Routes>
          </Pages>
          <NavMenu />
        </AppEl>
  );
}

export default App;
