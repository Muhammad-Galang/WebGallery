import "./Topbar.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../../auth/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const navigate = useNavigate();
  const { logout, authToken, userName, fotoUser } = useAuth();

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://127.0.0.1:8000/api/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      logout(); // Call the logout function from AuthContext
      navigate("/login"); // Redirect to /login on successful logout
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <div>
      {/* <Navbar expand="lg" className="bg-nav shadow-sm">
        <Container>
          <Nav.Link href="javascript:0;" className="text-white fw-bold fs-4">
            Web Gallery Foto
          </Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-center d-flex justify-content-center align-items-center">
              {authToken ? (
                <>
                  <span className="text-white mr-2">{userName}</span>
                  <img
                    className="img-profile rounded-circle mr-5"
                    width={32}
                    height={32}
                    src={`http://localhost:8000/files/` + fotoUser}
                  ></img>
                  <Link
                    to="/admin"
                    className="text-white mr-3 text-decoration-none border-0"
                  >
                    <Button
                      size="sm"
                      className="bg-white text-dark fw-bold text-decoration-none border-0"
                    >
                      Admin
                    </Button>
                  </Link>
                  <Button
                    size="sm"
                    onClick={handleLogout}
                    className="bg-white text-dark fw-bold text-decoration-none border-0"
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="text-white text-decoration-none border-0"
                  >
                    <Button
                      size="sm"
                      className="bg-white text-dark fw-bold text-decoration-none border-0"
                    >
                      Login
                    </Button>
                  </Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}

      <div className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
        <Nav.Link
          className="navbar-brand font-weight-bolder mr-3"
          href="index.html"
        >
          <img 
          src="%PUBLIC_URL%/assets/vendor_pengerjaan/assets/img/image-default.jpeg"
           />
        </Nav.Link>
        <button
          className="navbar-light navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsDefault"
          aria-controls="navbarsDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarsDefault">
          <ul className="navbar-nav mr-auto align-items-center">
            <form className="bd-search hidden-sm-down">
              <input
                type="text"
                className="form-control bg-graylight border-0 font-weight-bold"
                id="search-input"
                placeholder="Search..."
                autocomplete="off"
              />
              <div
                className="dropdown-menu bd-search-results"
                id="search-results"
              ></div>
            </form>
          </ul>
          <ul className="navbar-nav ml-auto align-items-center">
            <li className="nav-item">
              <a className="nav-link active" href="index.html">
                Home
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="post.html">
                Post
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="author.html">
                {/* <img className="rounded-circle mr-2" src="assets/img/av.png" width="30" /> */}
                <span className="align-middle">Author</span>
              </a>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link"
                href="#"
                id="dropdown02"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {/* <svg style={{"margin-top:10px"}} className="_3DJPT" version="1.1" viewbox="0 0 32 32" width="21" height="21" aria-hidden="false" data-reactid="71"><path d="M7 15.5c0 1.9-1.6 3.5-3.5 3.5s-3.5-1.6-3.5-3.5 1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5zm21.5-3.5c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5-1.6-3.5-3.5-3.5zm-12.5 0c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5-1.6-3.5-3.5-3.5z" data-reactid="22"></path></svg> */}
              </Link>
              <div
                className="dropdown-menu dropdown-menu-right shadow-lg"
                aria-labelledby="dropdown02"
              >
                <h4 className="dropdown-header display-4">
                  Download Pintereso
                  <br /> HTML Bootstrap Template
                </h4>
                <div className="dropdown-divider"></div>
                <span className="dropdown-item">
                  <a
                    href="https://github.com/wowthemesnet/template-pintereso-bootstrap-html/archive/master.zip"
                    className="btn btn-primary d-block"
                  >
                    <i className="fa fa-download"></i> Download
                  </a>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
