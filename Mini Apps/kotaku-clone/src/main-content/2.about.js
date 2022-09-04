import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import imageProfileTim1 from '../assets/assets-main-content/2.about/peter.834b20a0.svg';
import imageProfileTim2 from '../assets/assets-main-content/2.about/englo.2b28ddd4.svg';
import imageProfileTim3 from '../assets/assets-main-content/2.about/carel.fe6056fb.png';

import imageMascott from '../assets/assets-main-content/2.about/aboutGraphic.de4e5344.svg';

library.add(fab);

export default function HalamanAbout() {
    return (
        <>
            <SuportUs />
            <TimKotaKode />
            <OurMascott />
            <HaveQuestion />
        </>
    );
}

function SuportUs() {
    return (
        <>
            <div id="support-us-container">
                <div id="content-about-support-us-top">
                    <div id="support-us-atas">
                        <hr  class='hr-100-px'></hr>
                        <h1>Dukung kami dalam menciptakan ekosistem yang inklusif bagi programmer di seluruh Indonesia</h1>
                    </div>
                </div>
                <div id="support-us-card">
                    <h2>Tentang Kotakode</h2>
                    <p>Kotakode merupakan platform komunitas bagi para pegiat IT di Indonesia dimana programmer dapat belajar dan berbagi wawasan seputar dunia IT terkini untuk mendukung memberikan pertumbuhan perekonomian di Indonesia.</p>
                </div>

            </div>
        </>
    )
}

function TimKotaKode() {
    return (
        <>
            <div id="content-about-tim-kotakode">
                <h1>Tim Kotakode</h1>
                <div className="tim-kotakode-profile">
                    <div className='tim-kotakode-profile-photo'>
                        <img src={imageProfileTim1} className='tim-kotakode-profile-photo-style'></img>
                    </div>
                    <div className='tim-kotakode-profile-detail'>
                        <p><span className="tim-kotakode-span-0">Peter Tanugraha</span></p>
                        <p><span className="tim-kotakode-span-1">Cofounder & CEO</span></p>
                        <p><span className="tim-kotakode-span-2">Computer Engineering @University of Toronto 2019</span></p>

                        <li>{'Deep Learning Engineer @IBM Canada (1.5 years)'}</li>
                        <li>{'Deep Learning Engineer / Software Engineer @Nightingtale.ai Canada (1.5 years)'}</li>
                        <br />
                        <div className="tim-kota-kode-social-media">
                            <FontAwesomeIcon icon={['fab', 'github-square']} size='2x' /><div class='spasi-fa'></div>
                            <FontAwesomeIcon icon={['fab', 'linkedin']} size='2x' />
                        </div>
                    </div>
                </div>
                <div className="tim-kotakode-profile">
                    <div className='tim-kotakode-profile-photo'>
                        <img src={imageProfileTim2} className='tim-kotakode-profile-photo-style'></img>
                    </div>
                    <div className='tim-kotakode-profile-detail'>
                        <p><span className="tim-kotakode-span-0">Michael Englo</span></p>
                        <p><span className="tim-kotakode-span-1">Cofounder & CTO</span></p>
                        <p><span className="tim-kotakode-span-2">Computer Science @University of British Columbia 2020</span></p>

                        <li>{'Software Engineer @Google Canada (Currently)'}</li>
                        <li>{'Software Engineer @Google Sillcon Valley (4 month)'}</li>
                        <li>{'Software Engineer @Optimal Efficiency (1.6 years)'}</li>
                        <br />
                        <div className="tim-kota-kode-social-media">
                            <FontAwesomeIcon icon={['fab', 'github-square']} size='2x' /><div class='spasi-fa'></div>
                            <FontAwesomeIcon icon={['fab', 'linkedin']} size='2x' />
                        </div>
                    </div>
                </div>
                <div className="tim-kotakode-profile">
                    <div className='tim-kotakode-profile-photo'>
                        <img src={imageProfileTim3} className='tim-kotakode-profile-photo-style'></img>
                    </div>
                    <div className='tim-kotakode-profile-detail'>
                        <p><span className="tim-kotakode-span-0">Anncarel Sanchiabarca</span></p>
                        <p><span className="tim-kotakode-span-1">Cofounder & CBO</span></p>
                        <p><span className="tim-kotakode-span-2">Computing & Information Systems @University of London 2019</span></p>

                        <li>{'Software Engineer @Crowde (3 months)'}</li>
                        <li>CEO @Egglab.id</li>
                        <br />
                        <div className="tim-kota-kode-social-media">
                            <FontAwesomeIcon icon={['fab', 'github-square']} size='2x' /><div class='spasi-fa'></div>
                            <FontAwesomeIcon icon={['fab', 'linkedin']} size='2x' />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

function OurMascott() {
    return (
        <>
            <div id="content-about-our-mascott">
                <div id='our-mascott-detail'>
                    <div>
                        <h5>Maskot Kotakode</h5>
                        <h4>Kucing Robot Koko!</h4>
                        <p>Banyak dari kita yang menyukai kucing, termasuk para programmer. Koko merupakan sebuah robot berbentuk kucing dengan kombinasi warna hijau dan putih. Koko adalah sebuah robot yang fanatik terhadap teknologi, khususnya di bidang IT. Ia datang dari masa depan dan diprogram untuk membantu orang-orang yang memiliki semangat yang sama dengan dirinya. Sama seperti Koko, Kotakode memiliki semangat untuk membantu para fanatik IT di Indonesia untuk mengembangkan ekosistem yang menyenangkan untuk mempelajari hal-hal yang berkaitan dengan dunia IT terkini.</p>
                    </div>
                </div>
                <div id='our-mascott-img'>
                    <img src={imageMascott}></img>
                </div>
            </div>
        </>
    )
}

function HaveQuestion() {
    return (
        <>
            <div id="content-about-have-question">
                <div id="content-about-have-question-container">
                    <h1>Punya Pertanyaan Mengenai Kotakode?</h1>
                    <hr class='hr-100-px'></hr>
                    <p>Kotakode merupakan platform yang dibuat untuk mengatasi permasalahan bagi para pegiat IT di Indonesia. Kami menyadari bahwa kami sangat membutuhkan kontribusi pengguna dalam membangun Kotakode. Agar setiap fitur, tombol, dan warna yang kami buat sesuai dengan kebutuhan pengguna. Oleh karena itu jika kamu memiliki pertanyaan, saran, atau tawaran kerjasama yang ingin ditanyakan dan diskusikan dengan kami. Silakan hubungi kami melalui:</p>
                    <br></br>
                    <h3>Kotakode:</h3>
                    <p>Ariobimo Sentral level 8. Jalan H. R. Rasuna Said Kav X-2 No. 5, Kuningan Timur, Setiabudi, Jakarta Selatan 12950</p>
                    <h3>Email:</h3>
                    <p><a href=''>petertanugraha@kotakode.com</a></p>
                </div>
            </div>
        </>
    )
}