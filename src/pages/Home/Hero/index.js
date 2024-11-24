import blog from "../../../svg/blog.svg"
//link
import { Link } from 'react-router-dom';

const Hero = () => {
    return(
        <>
        
    <section className="container">
        <div className="row">
            <div className="grid-6">
                <h1 className="h0">Blog <span>.</span></h1>
                <p className="mt-1"> 
                    Um blog para todos. Escrever. Ler. Comentar. Contribuir. Aprender. Conectar.
                </p>
                <Link to="/login" className="btn mt-4">Começar a escrever</Link>
            </div>
            <div className="grid-6">
                <img src={blog} className="ilustration" alt=""/>
            </div>
        </div>
    </section>
        </>
    );
}

export default Hero;