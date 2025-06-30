import React from 'react';
import { RodapeInformations } from './Informations';

export function Footer () {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-logo">
                    <img src="/src/assets/logo-footer.svg" alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, tempore maxime accusamus dolores exercitationem libero debitis ipsa, voluptatem culpa tenetur dolore? Neque voluptatum explicabo deleniti velit esse, qui eaque delectus?</p>
                    <ul className="social-media-links">
                        <li><a href="#"><img src="/src/assets/facebook.svg" alt="" /></a></li>
                        <li><a href="#"><img src="/src/assets/instagram.svg" alt="" /></a></li>
                        <li><a href="#"><img src="/src/assets/twitter.svg" alt="" /></a></li>
                    </ul>
                </div>
                <div className="footer-links">
                    <RodapeInformations />
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p>@ 2025 Digital College</p>
            </div>
        </footer>
    );
}