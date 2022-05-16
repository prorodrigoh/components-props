import React from "react";
import '../styles/footer.css'

function Footer (){
    const isLoggedIn = false;
    const bgcolor = (isLoggedIn)? 'wheat' : 'red';
    return (
        <footer 
            style={{ width: '100%', backgroundColor: bgcolor}}
            className="footer">
            <p>&copy; Boca Code, 2022</p>
        </footer>
    )
}

export default Footer;