const useLocalStorage = () => {
  const setItem = (key, value) => {
    const storedValue =
      typeof value === "object" && value !== null
        ? JSON.stringify(value)
        : value;
    localStorage.setItem(key, storedValue);
  };

  const getItem = (key) => {
    const storedValue = localStorage.getItem(key);
    try {
      return JSON.parse(storedValue);
    } catch {
      return storedValue;
    }
  };

  const removeItem = (key) => {
    localStorage.removeItem(key);
  };

  return { setItem, getItem, removeItem };
};

export default useLocalStorage;
