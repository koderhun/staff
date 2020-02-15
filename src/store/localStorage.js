export const loadStorage = () => {
  try {
    const serializedState = localStorage.getItem("personals");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error(err);
    return undefined;
  }
};

export const saveStorage = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("personals", serializedState);
    console.log("Save", state);
  } catch (err) {
    console.error(err);
    return;
  }
};
