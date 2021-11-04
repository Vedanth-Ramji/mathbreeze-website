import {useState} from 'react';
import SubHeader from '../components/SubHeader';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../styles/GlobalStyles.css';
import '../styles/templateStyles/LevelPageTemplateStyles.css';

export default function LevelPageTemplate({level, operationName, operationSymbol}) {
    let scale = 0;
    switch(level) {
        case 'Level 1':
            scale = 10;
            break;
        case 'Level 2':
            scale = 100;
            break;
        default:
            scale = 1000;
    }

    const [num1, setNum1] = useState(Math.floor(Math.random() * scale));
    const [num2, setNum2] = useState(Math.floor(Math.random() * scale));
    const [questionNum, setQuestionNum] = useState(1);
    const [input, setInput] = useState('');

    const checkAnswer = (input, target) => {
        if (parseInt(input) !== target) {
            alert('Your answer is wrong!');
            return;
        }

        alert('Your answer is correct!');
        setNum1(Math.floor(Math.random() * scale));
        setNum2(Math.floor(Math.random() * scale));
        setQuestionNum(questionNum + 1);
    }

    const handleSubmit = () => {
        if (input === '' || isNaN(input)) {
            alert('Please enter a numeric value');
            return;
        }

        switch (operationName) {
            case 'Addition':
                checkAnswer(input, num1 + num2);
                break;
            case 'Subtraction':
                checkAnswer(input, num1 - num2);
                break;
            case 'Multiplication':
                checkAnswer(input, num1 * num2);
                break;
            default:
                checkAnswer(input, num1 / num2);
        }
    }

    return (
        <div className='levelPageTemplate'>
            <SubHeader title={`${operationName} | ${level}`} link={`/practice/${operationName.toLowerCase()}`} />

            <h3 className='levelPageTemplate-questionNum'>Question {questionNum}</h3>
            <h3 className='levelPageTemplate-question'>{num1} + {num2}</h3>

            <div className='levelPageTemplate-formArea'>
                <TextField
                    id='filled-basic'
                    label='Enter Answer'
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
        </div>
    );
}
