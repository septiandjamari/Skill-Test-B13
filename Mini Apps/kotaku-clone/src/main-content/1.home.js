

import gambarCardWhyUs1 from '../assets/assets-main-content/1.home/illustrasi-landing-2-min.7e571b39.png';
import gambarCardWhyUs2 from '../assets/assets-main-content/1.home/illustrasi-landing-3-min.827f5eb7.png';
import gambarCardWhyUs3 from '../assets/assets-main-content/1.home/illustrasi-landing-4-min.b38b89e3.png';

import gambarCardSolution1 from '../assets/assets-main-content/1.home/landingGraphic4.1ed65e42.svg';
import gambarCardSolution2 from '../assets/assets-main-content/1.home/landingGraphic5.16f83186.svg';
import gambarCardSolution3 from '../assets/assets-main-content/1.home/download.png';

import gambarCommunityTelegram from '../assets/assets-main-content/1.home/telegram.f8b93910.svg';

import gambarMediaPartner1 from '../assets/assets-main-content/1.home/dailysocial.0da57eee.png'
import gambarMediaPartner2 from '../assets/assets-main-content/1.home/liputan6.5b32e94c.png'
import gambarMediaPartner3 from '../assets/assets-main-content/1.home/yahoo_minified.3d854ede.png'
import gambarMediaPartner4 from '../assets/assets-main-content/1.home/CNN_Indonesia.a3849125.png'
import gambarMediaPartner5 from '../assets/assets-main-content/1.home/merdeka.d23e894a.jpeg'

export default function HalamanHome() {
    return (
        <>
            <GreetingSection />
            <WhyUsSection />
            <SolutionFromUsSection />
            <JoinOurCommunity />
            <MediaPartner />
        </>
    );
}

function GreetingSection() {
    return (
        <>
            <div id="content-home-greeting">
                <div id="home-greeting-container">
                    <h1>Jadilah Bagian dari Komunitas Tech Terbesar di Indonesia</h1>
                    <p className='p-greeting'>Ikutan diskusi forum tanya jawab, tulis blog dan
                        Membangun portofolio semua di Kotakode</p>
                    <div id="home-greeting-form">
                        <input type='text' placeholder="Masukkan Email Kamu"></input>
                        <button className="tombol-oranye">Daftar</button>
                    </div>
                    <div id="home-greeting-stats-container">
                        <div className="card-stats">
                            <h2>28794</h2>
                            <p>User Bergabung</p>
                        </div>
                        <div className="card-stats">
                            <h2>1028</h2>
                            <p>Blog Ditulis</p>
                        </div>
                        <div className="card-stats">
                            <h2>19156</h2>
                            <p>Total pertanyaan <br />& Jawaban</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function WhyUsSection() {
    return (
        <>
            <div id="content-home-whyus">
                <div id="whyus-statement">
                    <h1>Mengapa perlu menggunakan Katakode?</h1>
                    <p>Ibaratkan sebuah kota dengan penduduk para programmer, Kotakode memberikan fasilitas guna mensejahterakan kehidupan penduduknya.</p>
                </div>
                <div id="whyus-card-container">
                    <div className="whyus-card">
                        <div className="whyus-card-img">
                            <img src={gambarCardWhyUs1}></img>
                        </div>
                        <div className="whyus-card-text">
                            <h3>Jawaban cepat, tepat & gratis</h3>
                            <p>Dapatkan jawaban dalam hitungan menit dari ribuan programmer lainnya.</p>
                        </div>
                    </div>
                    <div className="whyus-card">
                        <div className="whyus-card-img">
                            <img src={gambarCardWhyUs2}></img>
                        </div>
                        <div className="whyus-card-text">
                            <h3>Konsep Gamifikasi</h3>
                            <p>Dapatkan badge menarik yang akan meningkatkan personal branding kamu sebagai seorang programmer.</p>
                        </div>
                    </div>
                    <div className="whyus-card">
                        <div className="whyus-card-img">
                            <img src={gambarCardWhyUs3}></img>
                        </div>
                        <div className="whyus-card-text">
                            <h3>Bangun Online Portofolio</h3>
                            <p>Portofolio ibaratkan sebuah aset yang berharga bagi setiap orang. Semakin kamu aktif di dalam forum, semakin membuktikan bahwa kamu adalah programmer yang berkualitas.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function SolutionFromUsSection() {
    return (
        <>
            <div id="content-home-solution">
                <div id="solution-statement">
                    <h1>Satu Platform Banyak Solusi</h1>
                    <p>Kotakode memfasilitasi dengan memberikan berbagai fitur yang menarik dan terbaik untuk mengembangkan ekosistem IT anak bangsa.</p>
                </div>
                <div id="solution-card-container">
                    <div className="solution-card">
                        <div className="solution-card-img">
                            <img src={gambarCardSolution1}></img>
                        </div>
                        <div className="solution-card-text">
                            <h3>Online Forum</h3>
                            <p>Kotakode dapat menjawab pertanyaan dan membantu programmer dalam memberikan jawaban yang berkualitas</p>
                            <button className="tombol-oranye tombol-oranye-full-width">Tanya Sekarang</button>
                        </div>
                    </div>
                    <div className="solution-card">
                        <div className="solution-card-img">
                            <img src={gambarCardSolution2}></img>
                        </div>
                        <div className="solution-card-text">
                            <h3>Microblogging</h3>
                            <p>Kotakode menyediakan wadah bagi programmer untuk berbagi wawasan terkait info terkini di bidang IT</p>
                            <button className="tombol-oranye tombol-oranye-full-width">Tulis Sekarang</button>
                        </div>
                    </div>
                    <div className="solution-card">
                        <div className="solution-card-img">
                            <img src={gambarCardSolution3} className='solution-card-img-disabled'></img>
                        </div>
                        <div className="solution-card-text">
                            <h3>Job Hiring (Coming Soon)</h3>
                            <p>Kotakode membantu rekruiter dalam mencari talent terbaik yang memenuhi standar perusahaan</p>
                            <button className="tombol-oranye tombol-oranye-full-width tombol-oranye-disable">Cari Kerja</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

function JoinOurCommunity() {
    return (
        <>
            <div id="content-home-join-our-community">

                <img id="join-our-community-telegram" src={gambarCommunityTelegram}></img>
                <h1>Gabung Komunitas Telegram Kotakode</h1>
                <p>Kotakode berkolaborasi dengan berbagai pioneer yang inovatif untuk bersama mencapai tujuan yang besar</p>
                <button className="tombol-oranye">Ikutan Telegram!</button>

            </div>
        </>
    )
}

function MediaPartner() {
    return (
        <>
            <div id="content-home-media-partner">
                <h1>Telah Diliput Oleh</h1>
                <div id='media-parner-logo-container'>
                    <img className="media-parner-logo" src={gambarMediaPartner1}></img>
                    <img className="media-parner-logo" src={gambarMediaPartner2}></img>
                    <img className="media-parner-logo" src={gambarMediaPartner3}></img>
                    <img className="media-parner-logo" src={gambarMediaPartner4}></img>
                    <img className="media-parner-logo" src={gambarMediaPartner5}></img>
                </div>
            </div>
        </>
    )
}

