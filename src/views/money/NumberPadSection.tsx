import styled from 'styled-components';
import Icon from '../../components/Icon';
import React, {useState} from 'react';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;

  > .output {
    background: white;
    color: #6c71b1;
    font-size: 36px;
    font-family: Consolas, monospace;
    line-height: 72px;
    text-align: right;
    padding: 0 16px;
    box-shadow: inset 0 -3px 3px -3px rgba(0, 0, 0, 0.25),
    inset 0 3px 3px -3px rgba(0, 0, 0, 0.25);
  }

  > .pad {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 56px);
    grid-gap: 4px;
    grid-template-areas:
        "a b c d"
        "e f g h"
        "i j k ok"
        "zero zero l ok";
    padding: 8px 4px;
    background: #d5d8dc;

    > button {
      border: none;
      border-radius: 4px;
      background: #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #333;
      font-size: 18px;

      &.delete {
        background: #ffffff;

        > svg {
          width: 32px;
          height: 32px;
          color: #333;
        }
      }

      &.clear {
        background: #ffffff;
      }

      &.ok {
        grid-area: ok;
        background: #aac9cb;
      }

      &.zero {
        grid-area: zero;
      }
    }
  }
`;

const NumberPadSection = () => {
  const [output, setOutput] = useState<string>('0');

  const onClickPad = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    if (text === null) {return;}
    switch (text) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '.':
        if (output === '0') {
          text === '.' ? setOutput('0.') : setOutput(text);
        } else if (text !== '.') {
          setOutput(output + text);
        } else if (output.indexOf('.') >= 0) {
          return;
        } else (
          setOutput(output + text)
        );
        break;
      case '清空':
        setOutput('0');
        break;
      case 'OK':
        console.log('OK');
        break;
      case '':
        if (output.length > 1) {
          setOutput(output.substring(0, output.length - 1));
        } else {
          setOutput('0');
        }
        break;
    }
  };

  return (
    <Wrapper>
      <div className="output">{output}</div>
      <div className="pad" onClick={onClickPad}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button className="delete">
          <Icon name="delete"/>
        </button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button className="clear">清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="ok">OK</button>
        <button className="zero">0</button>
        <button>.</button>
      </div>
    </Wrapper>
  );
};

export {NumberPadSection};