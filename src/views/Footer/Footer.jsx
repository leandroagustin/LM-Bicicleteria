import "./Footer.css";

const Footer = () => {

    return (
        <div className="footer-container">
            <div>
                <span className="brand">TopMega</span>
            </div>
            <div className="d-flex flex-column text-start mt-3">
                <p className="footer-text">Teléfono: 2932343223</p>
                <p className="footer-text">Email: topmega@hotmail.com</p>
            </div>
        </div>
    );
};

export default Footer;
