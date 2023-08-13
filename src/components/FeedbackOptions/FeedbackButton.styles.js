import styled, { css } from 'styled-components';

export const FeedbackButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
  margin: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f0f0f0;
  }

  &:active {
    background-color: #40e0d0; /* Змінений колір для активної кнопки при натисканні */
    transform: scale(0.98);
  }
`;

export { css };
