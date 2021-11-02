import MenuCard from './MenuCard';
import '../styles/componentStyles/MenuStyles.css';

export default function LevelsMenu({operationName}) {
    const templateLink = `/practice/${operationName.toLowerCase()}/`;

    return (
        <div className='menu'>
            <MenuCard
                title='Level 1'
                link={templateLink + 'level1'}
                color='#77D970'
            />

            <MenuCard
                title='Level 2'
                link={templateLink + 'level2'}
                color='#FF7600'
            />

            <MenuCard
                title='Level 3'
                link={templateLink + 'level3'}
                color='#f1356d'
            />
        </div>
    );
}
