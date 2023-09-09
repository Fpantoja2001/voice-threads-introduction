import './main.scss'
import CopyrightIcon from '@mui/icons-material/Copyright';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer(){
    return (
        <div className='wrapperFooter'>
            <div className='footer'>
                <div className='left'><
                    div className='icon'><CopyrightIcon></CopyrightIcon></div>
                    <div className='iconText'> This Looked like it belonged here</div>
                </div>
                <div className='right'>
                    <a className='linkedIn' href="https://www.linkedin.com/in/felix-manuel-pantoja/">
                        <div className='logos'>
                            <LinkedInIcon></LinkedInIcon>
                        </div>
                        <div className='logoTitles'>LinkedIn</div>  
                    </a>
                    
                    <a className='gitHub' href="https://github.com/Fpantoja2001">
                        <div className='logos'>
                            <GitHubIcon></GitHubIcon>
                        </div>
                        <div className='logoTitles'>Github</div>
                    </a>
                </div>
            </div>
        </div>
    )
}