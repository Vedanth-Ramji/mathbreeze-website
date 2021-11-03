import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import {Link} from 'react-router-dom';

export default function MenuCard({title, link, color}) {
    return (
        <Link style={{textDecoration: 'none'}} to={link}>
            <Card style={{backgroundColor: color, textAlign: 'center'}}>
                <CardActionArea>
                    <CardContent>
                        <h3 style={{fontSize: '1.3em'}}>{title}</h3>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    );
}
