import * as React from 'react';
import Context from "./Context";

const Provider = ({client, children}) => (
    <Context.Provider value={client}>
        {children}
    </Context.Provider>
);

export default Provider;
