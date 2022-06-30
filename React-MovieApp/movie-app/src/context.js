import React, { useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({children})=> {
return <AppContext.Provider value='some'>
          {children}
      </AppContext.Provider>
}
const useGlobalContext = ()=>{
    return useContext(AppContext);
};
export { AppContext, AppProvider, useGlobalContext};