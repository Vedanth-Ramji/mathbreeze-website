import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import {Link} from 'react-router-dom';
import '../styles/componentStyles/MenuCardStyles.css';

export default function MenuCard({title, link, color}) {
    return (
        <Link className='menuCard-link' to={link}>
            <Card className='menuCard-card' style={{backgroundColor: color}}>
                <CardActionArea>
                    <CardContent>
                        <h3 className='menuCard-title'>{title}</h3>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    );
}
