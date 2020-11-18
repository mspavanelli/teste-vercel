import styled from "styled-components";

export const Wrapper = styled.div`
  border: 2px solid #222;
  width: 300px;
  padding: 20px;
`;

export const Items = styled.div`
  display: flex;
  overflow-x: auto;

  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
`;

export const Item = styled.div`
  flex: none;
  padding: 0 30px;

  scroll-snap-align: start;
`;
