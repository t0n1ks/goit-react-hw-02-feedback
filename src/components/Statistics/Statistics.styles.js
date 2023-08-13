import styled from 'styled-components';

export const StatisticsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const StatisticItem = styled.p`
  width: 235px;
  font-size: 16px;
  margin: 5px 0;
  padding: 10px;
  border: 1px solid transparent;
  background-clip: padding-box;

  ${({ color }) => {
    switch (color) {
      case 'salad':
        return `
          background-color: rgba(144, 238, 144, 0.3);
        `;
      case 'yellow':
        return `
          background-color: rgba(255, 255, 0, 0.3);
        `;
      case 'red':
        return `
          background-color: rgba(255, 99, 71, 0.3);
        `;
      case 'gray':
        return `
          background-color: rgba(211, 211, 211, 0.3);
          border: 1px solid #ccc;
        `;
      default:
        return '';
    }
  }};
`;
