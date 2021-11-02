import '../styles/componentStyles/MenuStyles.css';
import MenuCard from './MenuCard';

export default function Menu({menuData}) {
    return (
        <div className='menu'>
            {menuData.map((data) => (
                <MenuCard
                    title={data.title}
                    link={data.link}
                    color={data.color}
                    key={data.id}
                />
            ))}
        </div>
    );
}
