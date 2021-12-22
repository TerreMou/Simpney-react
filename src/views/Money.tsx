import React from 'react';
import Layout from 'components/Layout';
import styled from 'styled-components';
import Icon from 'components/Icon';


const TagsSection = styled.section`
  flex-grow: 1;
  background: #ffffff;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  > ol {
    margin: 0 -12px;

    > li {
      display: inline-block;
      background: #aac9cb;
      border-radius: 18px;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;
    }
  }

  > button {
    background: none;
    border: none;
    padding: 2px 4px;
    border-bottom: 2px solid #aac9cb;
    color: #666;
    margin-top: 8px;
  }
`;

const NotesSection = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;

  > label {
    display: flex;
    align-items: center;

    > span {
      margin-right: 16px;
      white-space: nowrap;
    }

    > input {
      width: 100%;
      height: 56px;
      background: none;
      border: none;
    }
  }
`;

const CategorySection = styled.section`
  font-size: 20px;

  > ul {
    display: flex;
    background: transparent;

    > li {
      width: 50%;
      text-align: center;
      padding: 14px 0;
      position: relative;

      &.selected {
        background: #6c71b1;
        color: white;
      }
    }
  }
`;

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

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`

function Money() {
  return (
    <MyLayout>
      <CategorySection>
        <ul>
          <li className="selected">支出</li>
          <li>收入</li>
        </ul>
      </CategorySection>
      <TagsSection>
        <ol>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ol>
        <button>新增标签</button>
      </TagsSection>
      <NotesSection>
        <label>
          <span>备注</span>
          <input type="text" placeholder="请输入备注"/>
        </label>
      </NotesSection>
      <NumberPadSection>
        <div className="output">100</div>
        <div className="pad">
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
      </NumberPadSection>
    </MyLayout>
  );
}

export default Money;