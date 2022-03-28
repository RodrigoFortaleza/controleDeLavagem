import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  margin-top: -20px;
`;

export const Info = styled.div`
  display: flex;
  width: 87%;
  background-color: #06080F;
  padding: 20px;
  box-shadow: 0px 0px 5px #3A8EA5;
  border-radius: 10px;
  color: #999;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  font-size: 8px;
`;

export const Dev = styled.div`
  font-size: 10px;
  color: #3A8EA5;
`;

export const InfoDev = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Contacts = styled.div`
  display: flex;
  width: 85px;
  height: auto;


  .insta {
    display: flex;
    padding: 0 5px;
  }
   
  .link{
    display: flex;
    padding: 0 5px;
  }

  .git {
    display: flex;
    padding: 0 5px;
  }
`;