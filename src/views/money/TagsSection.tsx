import styled from 'styled-components';

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

export {TagsSection};