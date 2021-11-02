import {useState} from 'react';
import SubHeader from '../components/SubHeader';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import '../styles/pageStyles/NumberFactsPageStyles.css';

export default function NumberFactsPage() {
    const [num, setNum] = useState('');
    const [outputData, setOutputData] = useState('');

    const handleSearchButtonClick = () => {
        if (num === '' || isNaN(num)) {
            alert('Please enter a proper numeric value');
        } else {
            axios.get(`http://numbersapi.com/${num}/math`).then(res => {
                setOutputData(res.data);
            })
        }
    }

    return (
        <div className='numberFactsPage'>
            <SubHeader title='Number Facts' link='/' />

                <div className='numberFactsPage-inputBox'>
                    <TextField
                        id='filled-basic'
                        label='Enter Number'
                        variant='outlined'
                        value={num}
                        onChange={e => setNum(e.target.value)}
                    />

                    <Button
                        className='numberFactsPage-searchButton'
                        variant='contained'
                        style={{backgroundColor: '#3DB2FF'}}
                        onClick={handleSearchButtonClick}
                    >
                        Search
                    </Button>
                </div>

                <p className='numberFactsPage-output'>{outputData}</p>
        </div>
    );
}
