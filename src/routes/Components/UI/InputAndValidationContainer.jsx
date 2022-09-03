import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 220px;

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    width: 100%;
  }
`;

export default Container;
