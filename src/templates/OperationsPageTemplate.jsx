import SubHeader from '../components/SubHeader';
import LevelsMenu from '../components/LevelsMenu';

export default function OperationsPageTemplate({operationName}) {
    return (
        <div className='operationsPageTemplate'>
            <SubHeader title={operationName} link='/practice' />
            <LevelsMenu operationName={operationName} />
        </div>
    );
}
