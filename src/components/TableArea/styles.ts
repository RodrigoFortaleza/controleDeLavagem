import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  background-color: #06080F;
  padding: 20px;
  box-shadow: 0px 0px 5px #3A8EA5;
  border-radius: 10px;
  margin-top: 20px;
  color: #999;
  font-weight: bold;
`;


export const TableHeadColumn = styled.th<{ width: number }>`
  width: ${props => props.width ? `${props.width}px` : 'auto'};
  padding: 10px 0;
  text-align: left;
  color: #3A8EA5;
`;





