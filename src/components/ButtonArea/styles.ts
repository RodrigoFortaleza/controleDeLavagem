import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 0px 0px 5px #3A8EA5;
  background-color: #06080F;
  margin-top: 20px;
  padding: 20px;
  border-radius: 10px;
  flex-direction: column;
`;


export const AreaUp = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 40px;
  flex: 1;
`;


export const AreaDown = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 40px;
  flex: 1;
`;


export const InputLabel = styled.div`
  flex: 1;
  margin: 10px;
`;


export const InputTitle = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Input = styled.div`
  
input {
  width: 250px;
  color: #FFF;
  font-size: 15px;
  height: 35px;
  padding: 0 5px;
  border: 1px solid #3A8EA5;
  border-radius: 5px;
  background-color: #06080F;
    
    data{
      cursor: pointer;
    }
  }
`;

export const Select = styled.div`
select {
  width: 250px;
  height: 35px;
  color: #FFF;
  font-size: 15px;
  padding: 0 5px;
  border: 1px solid #3A8EA5;
  border-radius: 5px;
  background-color: #06080F;
  cursor: pointer;
  }
`;

export const Button = styled.div`
  width: 250px;
  height: 35px;
  padding: 0 5px;
  border: 1px solid #3A8EA5;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 20px;
  font-weight: bold;
  background-color: #4682B4;
  margin-top: 25px;
  cursor: pointer;
`;





