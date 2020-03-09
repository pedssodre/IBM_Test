import styled from 'styled-components';

export const ButtonContainer = styled.button`
  text-transform:capitalize;
  font-size: 1.0rem;
  background: transparent;
  border:0.04rem solid var(--strongBlue);
  color:var(--strongBlue);
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor:pointer;
  margin: 0.2rem 0.5rem 0.2ream 0;
  transition: all 0.5s ease-in-out;
&:hover{
  background: var(--lightBlue);
  color:var(--strongBlue);
  }
&:focus{
  outline:none;
  }
`