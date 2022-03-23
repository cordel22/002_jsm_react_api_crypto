import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          {/* <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li> */}
          <li>
            <Link to="/">Homepage</Link>
          </li>
          <li>
            <Link to="/exchange">Exchange</Link>
          </li>
          <li>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          </li>
          <li>
            <Link to="/crypto/:coinId">Cryptodetails</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;