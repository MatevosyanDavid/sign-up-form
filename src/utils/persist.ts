export const getFromStorage = (key: string) => {
  try {
    const serializedState = localStorage.getItem(key);

    if (serializedState === null) {
      return;
    }

    return JSON.parse(serializedState);
  } catch (err) {
    console.error(err);
  }
};

export const saveToStorage = (key: string, state: any) => {
  try {
    const serializedState = JSON.stringify(state);

    localStorage.setItem(key, serializedState);
  } catch (err) {
    console.error(err);
  }
};

export const removeFromStorage = (key: string) => {
  try {
    localStorage.removeItem(key);
  } catch (e) {
    console.error(e);
  }
};
