import React, { useState, createContext, useContext } from "react";

const UiContext = createContext();

export const useUiContext = () => useContext(UiContext);

export const UiProvider = ({ children }) => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [isProfileMenuVisible, setIsProfileMenuVisible] = useState(false);

  const toggleCartVisibility = () => {
    setIsCartVisible(prev => !prev);
  };

  const toggleInputVisibility = () => {
    setIsInputVisible(prev => !prev);
  };

  const toggleProfileMenuVisibility = () => {
    setIsProfileMenuVisible(prev => !prev);
  };

  const value = {
    isCartVisible,
    toggleCartVisibility,
    isInputVisible,
    toggleInputVisibility,
    isProfileMenuVisible,
    toggleProfileMenuVisibility,
  };

  return <UiContext.Provider value={value}>{children}</UiContext.Provider>;
};
