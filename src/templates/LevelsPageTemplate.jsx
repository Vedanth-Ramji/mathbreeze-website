import SubHeader from '../components/SubHeader';
import LevelsMenu from '../components/LevelsMenu';

export default function LevelsPageTemplate({operationName}) {
    return (
        <div className='levelsPageTemplate'>
            <SubHeader title={operationName} link='/practice' />
            <LevelsMenu operationName={operationName} />
        </div>
    );
}
