import { Link } from "react-router-dom";

const Footer = () => {
  return (
    //    <footer className="footer-section bg-info">

    //   <div className="copyright-area">
    //     <div className="container">
    //       <div className="row">
    //         <div className="col-xl-6 col-lg-6 text-lg-left">
    //           <div className="copyright-text">
    //             <p>Copyright © 2024, All Right Reserved <a href="#">Rdw</a></p>
    //           </div>
    //         </div>

    //       </div>
    //     </div>
    //   </div>
    // </footer>
    <footer class="footer pt-5 pb-5 text-center">
      <div class="container">
        <div class="socials-media">
          <ul class="list-unstyled">
            <li class="d-inline-block ml-1 mr-1">
              <Link href="#" class="text-dark">
                <i class="fa fa-facebook"></i>
              </Link>
            </li>
            <li class="d-inline-block ml-1 mr-1">
              <Link href="#" class="text-dark">
                <i class="fa fa-twitter"></i>
              </Link>
            </li>
            <li class="d-inline-block ml-1 mr-1">
              <Link href="#" class="text-dark">
                <i class="fa fa-instagram"></i>
              </Link>
            </li>
            <li class="d-inline-block ml-1 mr-1">
              <Link href="#" class="text-dark">
                <i class="fa fa-google-plus"></i>
              </Link>
            </li>
            <li class="d-inline-block ml-1 mr-1">
              <Link href="#" class="text-dark">
                <i class="fa fa-behance"></i>
              </Link>
            </li>
            <li class="d-inline-block ml-1 mr-1">
              <Link href="#" class="text-dark">
                <i class="fa fa-dribbble"></i>
              </Link>
            </li>
          </ul>
        </div>

        <p>
          ©{" "}
          <span class="credits font-weight-bold">
            <Link
              target="_blank"
              class="text-dark"
              href="https://www.wowthemes.net/pintereso-free-html-bootstrap-template/"
            >
              <u>Pintereso Bootstrap HTML Template</u> by WowThemes.net.
            </Link>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
