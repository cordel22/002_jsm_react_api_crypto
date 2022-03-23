import React from 'react';
//  import { BrowserRouter, Routes/* , Switch */, Route, Link } from 'react-router-dom';
//  import { Link } from 'react-router-dom';
//  import { Layout, Typography, Space } from 'antd';

import { Navbar, Exchanges, Homepage, Cryptocurrencies, News, CryptoDetails/* , Layout, Footer */ } from './components';
import './App.css';

import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//  import LayKokotout from "./pages/LayKokotout";
// import Home from "./pages/Home";
// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";


const App = () => {
  return (

<div className="app">
      

<div className="main">
   
     <div className='routes'>


    <BrowserRouter>
        <Routes>
          

            <Route path="/" element={<Navbar />}>
             <Route index="/" element={<Homepage />} />
             <Route path="/exchanges" element={<Exchanges />} />
             <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
             <Route path="/crypto/:coinId" element={<CryptoDetails />} />
             <Route path="/news" element={<News />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </div>

     </div>

      <div className="footer">

 </div>


 </div>      
   
  )
}



ReactDOM.render(<App />, document.getElementById("root"));

export default App



// const App = () => {
//   return (


// <div className="app">
      
// <div className="navbar">
//   <Navbar />
// </div>
// <div className="main">
//   <Layout>
//     <div className='routes'>
//       <BrowserRouter>
//         <Routes>
          
//           {/* <Route path="/" element={<Nav />}>
//             <Route  index element={<Home 
//             isLoading={isLoading}
//             fetchError={fetchError} /></Route> */}
//             <Route path="/" element={<Homepage />} />
//             <Route path="/exchanges" element={<Exchanges />} />
//             <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
//             <Route path="/crypto/:coinId" element={<CryptoDetails />} />
//             <Route path="/news" element={<News />} />
          
//         </Routes>
//       </BrowserRouter>
//     </div>
//   </Layout>
// </div>



// <div className="footer">

// </div>
// </div>

// )
// }
