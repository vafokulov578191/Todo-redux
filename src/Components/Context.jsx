import React, {createContext, useState} from 'react'

export const Bgcontext = createContext()

const Context = ({children}) => {
    let [color, setColor] = useState(true)


  return (
    <Bgcontext.Provider value={{color, setColor}}>
        {children}
    </Bgcontext.Provider>
  )
}

export default Context