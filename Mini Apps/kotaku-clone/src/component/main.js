import HalamanHome from '../main-content/1.home'
import HalamanAbout from '../main-content/2.about'
import HalamanSignIn from '../main-content/3.signin'
import HalamanRegister from '../main-content/4.register'

export default function Main() {
    return (
        <>
            <div id="div-main">
                <div className="div-main-content">
                    <HalamanHome/>
                </div>
            </div>
        </>
    )
}