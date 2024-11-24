import Header from "pages/Header";
import Footer from "pages/Footer";
import LogoBlog from 'svg/blog.svg'

const About = () => {
    return (
        <>
            <Header/>
              
            <section className="container flex-center">
        <div className="row mt-9">
            <div className="grid-4">
                <h1 className="h0">blog<span>.</span> </h1>
                <p>
                    O Blog é um projeto desenvolvido em react.js do curso frontpush. Clique abaixo para mais informações.
                </p>
                <a href="#" className="btn mt-2">Saber mais</a>

            </div>
            <div className="grid-1"></div>
            <div className="grid-6 flex-center">
                <img src={LogoBlog} className="ilustration" alt=""/>
            </div>
            <div className="grid-1"></div>
        </div>
    </section>

            <Footer/>
        </>
    )
}

export default About;