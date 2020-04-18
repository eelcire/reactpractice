import React, { useState } from 'react';

import Button from '../components/Button';
import Output from '../components/Output';

export default function CalculatorContainer() {
  const [prevInput, setPrevInput] = useState('');
  const [input, setInput] = useState('0');
  const [operator, setOperator] = useState('');
  const [clear, setClear] = useState(false);

  const math = {
    '+': (x, y) => {
      return parseInt(x) + parseInt(y);
    },
    '-': (x, y) => {
      return x - y;
    },
    '*': (x, y) => {
      return x * y;
    },
    '%': (x, y) => {
      return x / y;
    },
  };

  const onButtonClick = (e) => {
    const value = e.target.innerHTML;

    if (value !== '=' && !parseInt(value)) {
      if (!operator) {
        setOperator(value);
        setPrevInput(input);
        setClear(true);
      } else {
        setInput(math[operator](prevInput, input));
        setOperator(value);
      }
    } else if (value === '=') {
      setInput(math[operator](prevInput, input));
      console.log('hello');
    } else if (value === 'AC') {
    } else {
      if (input === '0') {
        setInput(value);
      } else {
        if (clear === true) {
          setPrevInput(input);
          setInput(value);
        } else {
          setInput(input + value);
        }
      }
    }

    // if (value !== '=') {
    //   if (operators.includes(value)) {
    //     if (operator) {
    //       if (isNaN(math[operator](prevInput, input))) {
    //         return;
    //       } else {
    //         setInput(math[operator](prevInput, input));
    //         setOperator(value);
    //       }
    //     } else {
    //       setInput(input);
    //       setOperator(value);
    //     }
    //   } else {
    //     if (input === '0') {
    //       setInput(value);
    //     } else {
    //       setInput(input + value);
    //     }
    //   }
    // } else if (value === '=') {
    //   setInput(math[operator](prevInput, input));
    //   setOperator('');
    // }
  };

  const buttons = [7, 8, 9, '%', 4, 5, 6, '*', 1, 2, 3, '-', 0, '=', '+'];

  const renderButtons = buttons.map((button) => {
    return typeof button === 'number' ? (
      <Button
        onClick={onButtonClick}
        key={button}
        className="number"
        text={button}
      />
    ) : (
      <Button
        onClick={onButtonClick}
        key={button}
        className="string"
        text={button}
      />
    );
  });

  return (
    <div className="main-div">
      <Output input={input} />
      {renderButtons}
    </div>
  );
}
