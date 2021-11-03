import {useState} from 'react';
import SubHeader from '../../../components/SubHeader';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function AdditionLevel1Page() {
    const [questionNum, setQuestionNum] = useState(1);
    const [input, setInput] = useState('');
    const [num1, setNum1] = useState(Math.floor(Math.random() * 100));
    const [num2, setNum2] = useState(Math.floor(Math.random() * 100));

    const handleSubmit = () => {
        if (input === '' || isNaN(input)) {
            alert('Please enter a numeric value');
        } else if (parseInt(input) !== num1 + num2) {
            alert('Oops... Your answer is wrong!');
        } else {
            alert('Yay! Your answer is correct!');

            setNum1(Math.floor(Math.random() * 100));
            setNum2(Math.floor(Math.random() * 100));
            setQuestionNum(questionNum + 1);
        }
    }

    return (
        <div>
            <SubHeader title='Addition | Level 1' link='/practice/addition' />
            Question {questionNum}

            <div style={{textAlign: 'center'}}>
                {num1} + {num2}
            </div>

            <TextField
                id='filled-basic'
                label='Enter Number'
                variant='outlined'
                onChange={e => setInput(e.target.value)}
            />

            <Button
                variant='contained'
                style={{backgroundColor: '#3DB2FF'}}
                onClick={handleSubmit}
            >
                Submit
            </Button>
        </div>
    );
}
