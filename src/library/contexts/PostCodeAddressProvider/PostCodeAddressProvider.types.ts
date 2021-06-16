import React from "react";

export interface PostCodeAddressProviderProps {
  /**
   * What is this?
   */
  children: React.ReactNode;
}


export type PostCodeAddressContextType = {
  postcodeValue: {
    state: string,
    actions: Function
  },
  resultsValue: {
      state: () => void,
      actions: Function
  }  
}