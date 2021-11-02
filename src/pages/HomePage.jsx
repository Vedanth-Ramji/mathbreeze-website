import '../styles/pageStyles/HomePageStyles.css';
import '../styles/GlobalStyles.css'
import Menu from '../components/Menu';
import {HomePageMenuData} from '../data/HomePageMenuData';

export default function HomePage() {
    return (
        <div className='homePage'>
            <h2 className='closedSubheader'>Home</h2>
            <Menu menuData={HomePageMenuData} />
        </div>
    );
}
