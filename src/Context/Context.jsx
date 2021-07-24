import React, { createContext } from 'react'

const Context = createContext();

export const {Provider} = Context;

export function useContext() {
    const contexto = React.useContext(Context)

    if(!contexto) {
        throw new Error('No hay contexto')
    }

    return contexto;
}