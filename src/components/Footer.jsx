import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import IconButton from '@mui/material/IconButton';
import '../styles/componentStyles/FooterStyles.css';

export default function Footer() {
    return (
        <div className='footer'>
            <div className='footer-content'>
                <h3>Created by Vedanth Ramji</h3>

                <div className='footer-links'>
                    <a target='_blank' href='https://github.com/Vedanth-Ramji'>
                        <IconButton><GitHubIcon /></IconButton>
                    </a>

                    <a target='_blank' href='https://www.linkedin.com/in/vedanth-ramji-191530215/'>
                        <IconButton><LinkedInIcon /></IconButton>
                    </a>

                    <a target='_blank' href='https://twitter.com/VedanthRamji'>
                        <IconButton><TwitterIcon /></IconButton>
                    </a>
                </div>
            </div>
        </div>
    );
}
