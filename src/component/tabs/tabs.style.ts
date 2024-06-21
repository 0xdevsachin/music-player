import styled from "@emotion/styled";

export const TabsContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const Tab = styled.div<{ isActive?: boolean }>`
  font-weight: 800;
  font-size: 1.2rem;
  color: #fff;
  opacity: ${(props) => (props.isActive ? 1 : 0.5)};
  cursor: pointer;
`;
