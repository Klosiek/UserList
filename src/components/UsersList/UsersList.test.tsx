import { fireEvent, render, waitFor } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { API_ENDPOINTS, API_URL } from "shared/endpoints";
import usersMock from "shared/mocks/usersMock";
import UsersList from "./UsersList";

describe("UserList", () => {
  var mock = new MockAdapter(axios);
  it("Test search input", async () => {
    mock.onGet(`${API_URL}${API_ENDPOINTS.USERS}`).reply(200, usersMock);
    const { getByTestId, getByText } = render(<UsersList />);
    const searchInput = getByTestId("searchInput");

    fireEvent.change(searchInput, { target: { value: "Patricia" } });
    await waitFor(() => expect(getByText("Patricia Lebsack")).not.toBeNull());

    fireEvent.change(searchInput, { target: { value: "Chel" } });
    await waitFor(() => expect(getByText("Chelsey Dietrich")).not.toBeNull());

    fireEvent.change(searchInput, { target: { value: "Mrs" } });
    await waitFor(() =>
      expect(getByText("Mrs. Dennis Schulist")).not.toBeNull()
    );
  });
});
