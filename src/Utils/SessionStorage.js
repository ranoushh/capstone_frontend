// Save state to sessionStorage
export function saveToSessionStorage(state) {
    try {
      const serializedState = JSON.stringify(state);
      sessionStorage.setItem('state', serializedState);
    } catch(e) {
      console.warn(e);
    }
  }
  
  // Load state from sessionStorage
 export function loadFromSessionStorage() {
    try {
      const serializedState = sessionStorage.getItem('state');
      if (serializedState === null) return undefined;
      return JSON.parse(serializedState);
    } catch(e) {
      console.warn(e);
      return undefined;
    }
  }

  export const sessionStorageMiddleware = store => next => action => {
    let result = next(action);
    saveToSessionStorage(store.getState());
    return result;
  }