import React, { createContext, useState, useContext } from 'react';

export const ApplicationContext = createContext();

export const useApplicationContext = () => useContext(ApplicationContext);

const Provider = ({ children }) => {
  const [applicationState, setApplicationState] = useState(
    {
      detailedDescription: "",
      accountstep: 1
    }
  );

  return (
    <ApplicationContext.Provider value={{ applicationState, setApplicationState }}>
      {children}
    </ApplicationContext.Provider>
  );
};

export default ({ element }) => <Provider>{element}</Provider>
