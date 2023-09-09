import './main.scss'
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar(){
    return (
        <div className='wrapperNavbar'>
            <div className='navbar'>
                <div className='title'>Voice Threads Introduction</div>
                <div className='menuTog'><MenuIcon id='mi'></MenuIcon></div>
                
            </div>
        </div>
    )
}