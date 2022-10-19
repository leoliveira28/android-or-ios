import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;


  h3 {
    font-size: 20px;
    color: ${props => props.theme.colors.primary};

  }

  p {
    margin-top: 24px;
    font-size: 24px;
    line-height: 32px;
  }

  button {
    padding: 30px;
    font-size: 24px;
    border: none;
    border-radius: 10px;
    cursor: pointer;

  }

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;

  }
`
