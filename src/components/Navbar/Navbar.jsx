import './Navbar.css';

const Navbar = () => {
  
    return (
        <nav className="navbar navbar-expand-lg sticky-top p-4 px-0">
        <div className="container p-0">
          <a className="navbar-brand" href="#">Start Bootstrap</a>
         
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item mx-0 mx-lg-1">
                <a className="nav-link py-3 px-0 px-lg-3 rounded" aria-current="page" href="#">Portfolio</a>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <a className="nav-link py-3 px-0 px-lg-3 rounded" href="#">About</a>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <a className="nav-link py-3 px-0 px-lg-3 rounded" href="#">Contact</a>
              </li>
             
           
            </ul>
        
          </div>
        </div>
      </nav>
    )
  };

  export default  Navbar;

