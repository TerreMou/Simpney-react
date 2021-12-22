import styled from 'styled-components';

const NumberPadSection = styled.section`
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

export {NumberPadSection};