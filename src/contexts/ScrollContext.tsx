import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ScrollContextType {
  savedScrollPosition: number;
  saveScrollPosition: (position: number) => void;
  clearScrollPosition: () => void;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const useScrollContext = () => {
  const context = useContext(ScrollContext);
  if (context === undefined) {
    throw new Error('useScrollContext must be used within a ScrollProvider');
  }
  return context;
};

interface ScrollProviderProps {
  children: ReactNode;
}

export const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
  const [savedScrollPosition, setSavedScrollPosition] = useState(0);

  const saveScrollPosition = (position: number) => {
    setSavedScrollPosition(position);
  };

  const clearScrollPosition = () => {
    setSavedScrollPosition(0);
  };

  return (
    <ScrollContext.Provider value={{
      savedScrollPosition,
      saveScrollPosition,
      clearScrollPosition,
    }}>
      {children}
    </ScrollContext.Provider>
  );
};
