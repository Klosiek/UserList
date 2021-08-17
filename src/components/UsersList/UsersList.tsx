import * as Types from "./UsersList.types";
import * as Styles from "./UsersList.styles";
import useAxios from "axios-hooks";
import { API_ENDPOINTS, API_URL } from "shared/endpoints";
import { useState } from "react";
import { SyncLoader } from "react-spinners";
import toast from "react-hot-toast";

const UsersList = () => {
  const [{ data, loading, error }] = useAxios<Types.User[]>(
    `${API_URL}${API_ENDPOINTS.USERS}`
  );
  const [searchPhrase, setSearchPhrase] = useState("");

  const searchByName = (user: Types.User) => {
    const phrase = searchPhrase.toLocaleLowerCase();
    return (
      user.name.toLocaleLowerCase().includes(phrase) ||
      user.username.toLocaleLowerCase().includes(phrase)
    );
  };

  if (error) {
    toast.error("Something went wrong, please try again later!");
  }

  return (
    <Styles.Container>
      <Styles.Header>Users list</Styles.Header>
      <Styles.Input
        data-testid="searchInput"
        type="text"
        placeholder="Search by user name..."
        value={searchPhrase}
        onChange={(e) => setSearchPhrase(e.currentTarget.value)}
      ></Styles.Input>
      <Styles.ListContainer>
        {data && !loading && !error && (
          <Styles.List data-testid="usersList">
            {data.filter(searchByName).map((user) => (
              <Styles.ListItem key={user.id}>
                <Styles.UserContainer>
                  <Styles.UserName>{user.name}</Styles.UserName>
                  <Styles.UserNickname>{`@${user.username}`}</Styles.UserNickname>
                </Styles.UserContainer>
              </Styles.ListItem>
            ))}
          </Styles.List>
        )}
        <SyncLoader loading={loading} size={15} />
      </Styles.ListContainer>
    </Styles.Container>
  );
};

export default UsersList;
