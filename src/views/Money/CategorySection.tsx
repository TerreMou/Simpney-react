import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
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

const CategorySection: React.FC = () => {
  const [category, setCategory] = useState('-');
  const [categoryList] = useState<keys[]>(['-', '+']);
  const categoryMap = {'-': '支出', '+': '收入'};
  type keys = keyof typeof categoryMap

  return (
    <Wrapper>
      <ul>
        {categoryList.map(c =>
          <li key={c}
              onClick={() => setCategory(c)}
              className={category === c ? 'selected' : ''}
          >{categoryMap[c]}</li>
        )}
      </ul>
    </Wrapper>
  );
};

export {CategorySection};
