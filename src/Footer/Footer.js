import './Footer.css'

const Footer = () =>  {
    return (
        <footer className="footer">
            <div className="list-column">
                <h3>Doormat Navigation</h3>
                <ul className="footer-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#reservations">Reservations</a></li>
                    <li><a href="#order">Order Online</a></li>
                    <li><a href="#login">Login</a></li>
                </ul>
            </div>

            <div className="list-column">
                <h3>Contact</h3>
                <ul className="footer-links">
                    <li><a href="#address">Address</a></li>
                    <li><a href="#phone">Phone</a></li>
                    <li><a href="#email">Email</a></li>
                </ul>
            </div>

            <div className="list-column">
                <h3>Social Media Links</h3>
                <ul className="footer-links">
                    <li><a href="#address">Address</a></li>
                    <li><a href="#phone">Phone</a></li>
                    <li><a href="#email">Email</a></li>
                </ul>
            </div>
            {/* <p>&copy; 2026 Little Lemon. All rights reserved.</p> */}
        </footer>
    )
}
export default Footer;