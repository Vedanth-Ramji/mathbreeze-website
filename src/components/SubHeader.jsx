import '../styles/componentStyles/SubHeaderStyles.css';
import {Link} from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';

export default function SubHeader({title, link}) {
    return (
        <div className='subHeader'>
            <Link to={link}>
                <IconButton aria-label="delete">
                    <ArrowBackIcon />
                </IconButton>
            </Link>

            <div className='subHeader-title'>
                <h2>{title}</h2>
            </div>
        </div>
    );
}
