import styled from "styled-components";
import { MEDIA_QUERIES } from "shared/mediaQueries";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.h1``;

export const Input = styled.input`
  border-width: 2px;
  border-color: #000;
  width: 200px;
  height: 20px;
  :focus-visible {
    outline: unset;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px;
  height: 200px;
  width: 360px;
  white-space: nowrap;
  margin-top: 24px;
  overflow-y: auto;

  ${MEDIA_QUERIES.sm} {
    overflow-y: hidden;
    height: unset;
    white-space: pre-wrap;
    width: 300px;
  }
`;

export const List = styled.ol`
  counter-reset: item;
  margin-left: 0;
  padding-left: 0;
`;

export const ListItem = styled.li`
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  ::before {
    content: counter(item) ". ";
    counter-increment: item;
    width: 24px;
    opacity: 0.5;
    font-size: 14px;
  }
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const UserName = styled.div`
  font-weight: 600;
  margin-right: 8px;
`;

export const UserNickname = styled.div`
  opacity: 0.4;
  font-size: 14px;
`;
