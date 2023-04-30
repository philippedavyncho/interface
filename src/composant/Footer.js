import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IconTelephone } from "bootstrap-icons/icons/telephone.svg";
import { ReactComponent as IconEnvelope } from "bootstrap-icons/icons/envelope.svg";
import { ReactComponent as IconBriefcase } from "bootstrap-icons/icons/briefcase.svg";
import { ReactComponent as IconBadgeAd } from "bootstrap-icons/icons/badge-ad.svg";
import { ReactComponent as IconGift } from "bootstrap-icons/icons/gift.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faInstagram,
  faYoutube,
  faApple,
  faWindows,
  faAndroid,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <React.Fragment>
      <footer>
        <div className="container-fluid bg-primary mt-3">
          <div className="row ">
            <div className="col-md-3 py-3 text-center text-white">
              <Link to="/" title="Apple">
                <FontAwesomeIcon icon={faApple} className="text-light me-3" />
              </Link>
              <Link to="/" title="Windows">
                <FontAwesomeIcon icon={faWindows} className="text-light me-3" />
              </Link>
              <Link to="/" title="Android">
                <FontAwesomeIcon icon={faAndroid} className="text-light me-3" />
              </Link>
              |
              <Link to="/" title="Twitter">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-light ms-3 me-3"
                />
              </Link>
              <Link to="/" title="Facebook">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="text-light me-3"
                />
              </Link>
              <Link to="/" title="Instagram">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-light me-3"
                />
              </Link>
              <Link to="/" title="Youtube">
                <FontAwesomeIcon icon={faYoutube} className="text-light me-3" />
              </Link>
            </div>
          </div>
        </div>
        <div className="container-fluid bg-dark text-white">
          <div className="row ">
            <div className="col-md-3 py-3 d-none d-md-block">
              <div className="h6">YATTE</div>
              <hr />
              <p>
                Yatte boutique est une  plateforme en ligne qui permet aux clients d'acheter des produits ou des services en utilisant une interface simple et intuitive. Yatte propose un catalogue de produits, des options de paiement sécurisées et une livraison rapide pour offrir une expérience d'achat en ligne pratique et fiable.
              </p>
            </div>
            <div className="col-md-3 py-3 d-none d-md-block">
              <div className="h6">Nos Produits</div>
              <hr />
              <ul className="list-group list-group-flush">
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    High Tech et Eletronique
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Vetements
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Chaussures
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Montres
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Appareil electroménager
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 py-3 d-none d-md-block">
              <div className="h6">Politique</div>
              <hr />
              <ul className="list-group list-group-flush">
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Politique de retour et d'échange
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Politique de livraison
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Politique de confidentialité
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Politique garantie
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Politique de paiement
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 py-3 d-none d-md-block">
              <div className="h6">Addresse</div>
              <hr />
              <div className="h6">Services client</div>
              <hr/>
              <IconTelephone /> +225 07 68 74 30 02
              <br />
              <IconTelephone /> +225 07 68 74 30 02
              <br />
              <IconEnvelope /> info@email.com
            </div>
            
            
            
            <div className="py-3 text-center d-md-none" style={{fontSize:"10px"}}>
              <div style={{fontSize:"12px", fontWeight:"bold"}}>SERVICE CLIENT</div>
              <hr/>
              <IconTelephone /> +225 07 68 74 30 02
              <br />
              <IconTelephone /> +225 07 68 74 30 02
              <br />
              <IconEnvelope /> info@email.com
            </div>
            
            
          </div>
        </div>
        <div className="container-fluid bg-secondary text-white text-center">
          <div className="row">
            <div className="col-md-2 py-2 d-none d-md-block">
              <Link to="/" className="text-white text-decoration-none">
                <IconBriefcase className="text-warning" />Yatte & associés
              </Link>
            </div>
            <div className="col-md-2 py-2 d-none d-md-block">
              <Link to="/" className="text-white text-decoration-none">
                <IconBadgeAd className="text-info" />Yatte Partner
              </Link>
            </div>
            <div className="col-md-2 py-2 d-none d-md-block">
              <Link to="/" className="text-white text-decoration-none">
                <IconGift className="text-dark" /> Yatte-Group
              </Link>
            </div>
            <div className="col-md-3 py-2" style={{fontWeight:"bold"}}>
              ©YATTE
            </div>
            <div className="col-md-3 py-2 bg-white">
              <img
                src="../../img/logo1.png"
                width="32"
                alt="American Express"
                className="me-2"
              />
              <img
                src="../../img/logo2.png"
                width="32"
                alt="Maestro"
                className="me-2"
              />
              <img
                src="../../img/log.png"
                width="32"
                alt="Net Banking"
                className="me-2"
              />
              <img
                src="../../img/log1.png"
                width="32"
                alt="Paypal"
                className="me-2"
              />
              <img
                src="../../img/log2.png"
                width="32"
                alt="Rupay"
                className="me-2"
              />
              <img
                src="../../img/log3.jpeg"
                width="32"
                alt="UPI"
                className="me-2"
              />
              <img
                src="../../img/logo5.jpeg"
                width="32"
                alt="Visa"
                className="me-2"
              />
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};
export default Footer;
