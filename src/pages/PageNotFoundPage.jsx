import '../styles/pageStyles/PageNotFoundPageStyles.css';
import '../styles/GlobalStyles.css'
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';

export default function PageNotFoundPage() {
    return (
        <div className='pageNotFoundPage'>
            <h2 className='closedSubheader'>404 Page Not Found</h2>
            <h3>Looks like you have entered uncharted territory!</h3>
            <Link to='/' style={{textDecoration: 'none'}}>
                <Button
                    style={{
                        backgroundColor: '#3DB2FF',
                        marginTop: 20,
                    }}
                    variant='contained'
                >
                    Go Back Home
                </Button>
            </Link>
        </div>
    );
}
