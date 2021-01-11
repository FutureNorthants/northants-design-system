
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
   * 
   */
  onToggle: ((title, value) => void)
} 
