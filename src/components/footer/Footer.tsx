import React from 'react';
// import 'bootstrap-icons/icons/heart';

require('./footer.scss')

export default function Footer(){
    return (
        <footer className="footer">
                <h6 className="credits">
                    Made with <i className="bi bi-suit-heart-fill"></i> by Abe Mused
                </h6>
        </footer>
    );
}