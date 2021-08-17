import styled from "styled-components";
import { MEDIA_QUERIES } from "shared/mediaQueries";

export const PageContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${MEDIA_QUERIES.sm} {
    justify-content: unset;
  }
`;
