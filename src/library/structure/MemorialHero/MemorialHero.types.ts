import React from "react";

export interface MemorialHeroProps {
    /**
   * Full sized image
   */
     src: string;
     /**
      * smaller version as a placeholder for lazy loading
      */
     placeholder: string;
     /**
      * Alt text for hero
      */
     alt: string;

     /**
      * The name of the sites theme
      */
     theme: object;

     /**
      * Pass through any children to be shown
      */
     children: React.ReactNode;

     /**
      * Anthing in this section will be themed as defined
      */
      councilServices: React.ReactNode;
}
