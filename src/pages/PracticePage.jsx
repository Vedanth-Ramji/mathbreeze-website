import SubHeader from '../components/SubHeader';
import Menu from '../components/Menu';
import {PracticePageMenuData} from '../data/PracticePageMenuData';

export default function PracticePage() {
    return (
        <div className='practicePage'>
            <SubHeader title='Practice' link='/' />

            <Menu menuData={PracticePageMenuData} />
        </div>
    );
}
