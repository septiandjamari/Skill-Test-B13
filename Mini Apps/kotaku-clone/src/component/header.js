import Image from '../assets/kotakode-logo.3befef90.svg';

export default function Header() {
    return (
        <div id="div-header">
            <div id='div-header-logo'>
                <img src={Image} className='header-logo'></img>
            </div>
            <div id="div-header-menu-container">
            <div id='div-header-menu-1'>
                <button className='tombol-menu-header'>Beranda</button>
                <button className='tombol-menu-header'>Tentang</button>
            </div>
            <div id='div-header-menu-2'>
                <button className='tombol-menu-header'>Masuk</button>
                <button className='tombol-menu-header active-auto'>Daftar</button>
            </div>
            </div>
        </div>
    )
}



