import React from 'react';
import{BrowserRouter , Route,Routes, Link} from 'react-router-dom';

import Countries from './components/Countries';
import Country from './components/Country';




function App() {
  return (
    <>

<BrowserRouter>
    
    
      
      <Routes>
                  
          <Route path="/" element={<Countries />} ></Route>
          <Route path="/countries/:name" element={<Country />}  ></Route>
          {/*<Route path="/search" element={<SearchPage />} ></Route>*/}
        
      </Routes>

      
      </BrowserRouter>
    </>
  );
}

export default App;
