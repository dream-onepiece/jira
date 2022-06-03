import data from './data.json';
import './index.scss';

const Header = () => {

    const { logo: {
        name,
        path
    } } = data;

    return <header className='header component'>
        <div className='container'>
            <div className='left-block'>
                <div className='logo-block'>
                    <img src={path} alt={name} title={name} className='logo' />
                </div>
                <nav className='nav-block'></nav>
            </div>
            <div className='right-block'>
                <div className='search-block'></div>
                <div className='icons-block'></div>
            </div>
        </div>
    </header>

}

export default Header;