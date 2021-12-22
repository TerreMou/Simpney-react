import styled from 'styled-components';

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

export {CategorySection};
