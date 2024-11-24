
import logo from '../../svg/blog-logo.svg';
//link
import { Link, useNavigate } from 'react-router-dom';
//hooks
import { useState } from 'react';

const Header = () => {
    const initialValueForm = {
        search: ''
    }

    const [form, setForm] = useState(initialValueForm);

    //usenavigate pra redirecionar
    const navigate = useNavigate();

    function onChange(event) {
        const {value, name} = event.target;
        setForm({...form, [name]: value});
        
    }

    function handleSearch(e){
        e.preventDefault();

        navigate(`/search/${form.search}`); 
    }
    return(
        <>
        <header className="px-2 py-1">
        <nav>
            <div className="logo">
                <Link to="/"><img src={logo} alt=""/></Link>
            </div>
            <ul className="menu">
                <li><Link to="/about" className="p-1">Sobre</Link></li>
                <li><Link to="/contact" className="p-1">Contato</Link></li>
            </ul>
        </nav>

        <div className="bx"></div>

        <div className="flex-start-row">
            <div className="search">
                <form className="flex" onSubmit={handleSearch}>
                    <input type="text" name="search" placeholder="Buscar..." onChange={onChange}/>
                    <button className="btn-search"></button>
                </form>
            </div>

            <div className="cta-desktop ml-3">
                <Link to="/login" className="btn">Login</Link>
            </div>

            <div className="cta-mobile">
                <Link to="/login" className="link color-primary">Login</Link>
            </div>
        </div>
    </header>

    <div className="relative">
        <div className="menu-mobile">
            <ul className="nav-mobile">
                <li><Link to="/about" className="link-menu-mobile">Sobre</Link></li>
                <li><Link to="/contact" className="link-menu-mobile">Contato</Link></li>
                <li className="py-2 px-2">
                    <form className="flex">
                        <input type="text" name="search" placeholder="Buscar..."/>
                        <button className="btn-search"></button>
                    </form>
                </li>
            </ul>
        </div>
    </div>
        </>
    );
}

export default Header;