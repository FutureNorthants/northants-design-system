
export interface AccordionProps {
  /**
   * accepts multiple sections
   */
  sections: Array<AccordionSectionProps>;

  /**
   * We reuse this on filter pages - but it looks slightly different
   */
  isFilter?: boolean;
  /**
   * Should there be a read more link at the bottom of each section?
   */
  withReadMore?: boolean;
    
}

export interface AccordionSectionProps {
  /**
   * Section title
   */
  title: string,
  /**
   * Section content
   */
  content: React.ReactNode
  /**
   * Section summary
   */
  summary?: string,
  /**
   * Section summary
   */
  isExpanded?: boolean,
  /**
   * Identify the section so sections can have the same title
   */
  accordionSectionId?: number,
  /**
   * Method used internally for opening closing eelment
   */
  onToggle?: ((title, value) => void)
  /**
   * We reuse this on filter pages - but it looks slightly different
   */
  isFilter?: boolean;
   /**
   * Should there be a read more link at the bottom of each section?
   */
  withReadMore?: boolean;
  /**
   * unique ID for the section
   */
   sectionId?: string
} 
