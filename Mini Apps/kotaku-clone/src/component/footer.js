import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ImgBlock71 from '../assets/block71.f06f3442.svg';
import ImgGoogleForStartup from '../assets/800px-Google_for_Startups_logo.svg.png';

library.add(fab);

export default function Footer() {
    return (
        <div id="div-footer">
            <div id='footer-atas'>
                <div className='footer-content'>
                    <div className='footer-partnered-with'>
                        <h5>BAGIAN DARI</h5>
                        <div id='footer-partnered-with-img-container'>
                            <img src={ImgBlock71} id='img-block71'></img>
                            <img src={ImgGoogleForStartup} id='img-google-for-startup'></img>
                        </div>
                    </div>
                </div>
                <div className='footer-content'>
                    <div className='footer-menu'>
                        <h5>PRODUK</h5>
                        <p>Pertanyaan</p>
                        <p>Blog</p>
                        <p>Pengguna</p>
                        <p>Events</p>
                        <p>Partnership</p>
                    </div>
                    <div className='footer-menu'>
                        <h5>PERUSAHAAN</h5>
                        <p>About</p>
                        <p>FAQ</p>
                        <p>Rules</p>
                        <p>Legal</p>

                    </div>
                </div>
                <div className='footer-content'>
                    <div className='footer-contact'>
                        <h5>HUBUNGI KAMI</h5>
                        <p>petertanugraha@katakode.com</p>
                        <div id='footer-contact-paltform-option'>
                            <FontAwesomeIcon icon={['fab', 'linkedin']} size='2x' />
                            <FontAwesomeIcon icon={['fab', 'instagram-square']} size='2x' />
                            <FontAwesomeIcon icon={['fab', 'twitter-square']} size='2x' />
                            <FontAwesomeIcon icon={['fab', 'facebook-square']} size='2x' />
                        </div>

                    </div>
                </div>
            </div>
            <div id='footer-bawah'>
                <p>PT. Kota Digital Nusantara</p>
                <p>Copyright 2020 Kotakode. All rights reserved</p>
                <p>Made with ❤️ in 🇮🇩</p>
            </div>
        </div>
    )
}

