import colorlogo from '../images/Logo.png'
import blacklogo from '../images/logo-black.png'

const Nav = ({minimal, authToken}) => {
   
    return (
    <nav>
        <div className="logo-container">
            <img className="Logo h-[70px]" src= {minimal ? colorlogo : blacklogo}/>
        </div>
        {!authToken && <button className='nav-button'></button>}
    </nav>
    
    )
    }
    export default Nav