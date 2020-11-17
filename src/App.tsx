import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Square from './components/square/Square';
import './App.css';
import 'flexboxgrid';

const App = () => {
  const [colors, setColors] = useState<string[]>([]);
  const [count, setCount] = useState<number[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [visible, setVisible] = useState(false);
  const [colorIndex, setColorIndex] = useState<number>(0);

  const clickHandler = () => {
    if (inputValue) {
      if (!colors.includes(inputValue)) {
        setColors([...colors, inputValue]);
        setCount([...count, 0]);
      } else {
        setColorIndex(colors.indexOf(inputValue));
        setVisible(true);
        const newArr = count.map((i, index) =>
          inputValue === colors[index] ? i + 1 : i
        );
        setCount(newArr);
      }
    }
  };

  const deleteHandler = (index: number) => {
    const newArr = colors.filter((i, ind) => ind !== index);
    const newArr2 = count.filter((i, ind) => ind !== index);
    setCount(newArr2);
    setColors(newArr);
  };

  return (
    <div className="app">
      <div className="container">
        <div className="row center-xs">
          <div className="col-xs-12">
            <h3>Choose a color</h3>
            <input
              type="text"
              className="input"
              value={inputValue.toLowerCase()}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              className="button"
              type="button"
              onClick={() => clickHandler()}
            >
              Submit
            </button>
            <div className="shape__wrapper">
              {colors.map((i, index) => {
                return (
                  <div key={uuidv4()}>
                    <Square
                      num={count[index]}
                      visible={visible}
                      color={i}
                      onClick={() => deleteHandler(index)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
