
export interface AccordionProps {
  /**
   * accepts multiple sections
   */
  sections: Array<AccordionSectionProps>;
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
  accordionSectionId: number,
  /**
   * Method used internally for opening closing eelment
   */
  onToggle?: ((title, value) => void)
} 
