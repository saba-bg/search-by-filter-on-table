import React, { createContext, useReducer } from "react";
import CheckBox from "../components/hook/CheckBox";
import CheckReduser from "../Reduser/CheckReduser";

export const MessageShowContex = createContext();
export const MessageShowContexClick = createContext();

const initialState = { stat: true };
export function MessageShowContexProvider(props) {
  const [stat, dispatch] = useReducer(CheckReduser, initialState);

  return (
    <MessageShowContex.Provider value={stat}>
      <MessageShowContexClick.Provider value={dispatch}>
        {props.children}
      </MessageShowContexClick.Provider>
    </MessageShowContex.Provider>
  );
}
