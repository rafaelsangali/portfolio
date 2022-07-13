import { createContext, Dispatch, SetStateAction, useState } from "react";

interface ITabsContextProps {
  toggle: number;
  setToggle: Dispatch<SetStateAction<number>>;
}

interface ITabsProviderProps {
  children?: JSX.Element;
}

export const TabsContext = createContext<ITabsContextProps>({
  toggle: 0,
  setToggle: () => null,
});

export function TabsProvider(props: ITabsProviderProps) {
  const [toggle, setToggle] = useState(0);

  return (
    <TabsContext.Provider
      value={{
        toggle,
        setToggle,
      }}
    >
      {props.children}
    </TabsContext.Provider>
  );
}
