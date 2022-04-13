import configureStore from "../configureStore";
// import { apiCallBegan } from "../api";
import { addBug, bugAdded } from "../bugs";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

describe("bugsSlice", () => {
  let fakeAxios;
  let store;

  beforeEach(() => {
    fakeAxios = new MockAdapter(axios);
    store = configureStore();
  });

  const bugsSlice = () => store.getState().entities.bugs;
  it("should add the bug to the store if saved to the server", async () => {
    // Arrange
    const bug = { description: "a" };
    const savedBug = { ...bug, id: 1 };
    fakeAxios.onPost("/bugs").reply(200, savedBug);

    // Act
    await store.dispatch(addBug(bug));

    // Assert
    expect(bugsSlice().list).toContainEqual(savedBug);
  });

  it("should not add the bug to the store if its not saved to the server", async () => {
    // Arrange
    const bug = { description: "a" };
    fakeAxios.onPost("/bugs").reply(500);

    // Act
    await store.dispatch(addBug(bug));

    // Assert
    expect(bugsSlice().list).toHaveLength(0);
  });
});

// describe("action creators", () => {
//   it("addBug", () => {
//     const bug = { description: "a" };
//     const result = addBug(bug);
//     const expected = {
//       type: apiCallBegan.type,
//       payload: {
//         url: "/bugs",
//         method: "post",
//         data: bug,
//         onSuccess: bugAdded.type,
//       },
//     };
//     expect(result).toEqual(expected);
//   });
// });
