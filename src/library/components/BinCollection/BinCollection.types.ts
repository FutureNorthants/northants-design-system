export interface BinCollectionProps {
  /**
   * The selected address
   */
  address: string;

  /**
   * An array of bin collections
   */
  binCollections: BinCollectionRecordProps[];

  /**
   * The optional calendar url
   */
  calendar?: string;

  /**
   * The optional file size for the calendar
   */
  calendarSize?: string;
}

export interface BinCollectionRecordProps {
  /**
   * The collection date in format YYYY-MM-DD
   */
  date: string;

  /**
   * The type of collection
   */
  type: keyof CollectionTypes;
}

export interface CollectionTypes {
  garden: CollectionDetails;
  food: CollectionDetails;
  recycling: CollectionDetails;
  recycling_boxes: CollectionDetails;
  refuse: CollectionDetails;
  sacks: CollectionDetails;
  waste: CollectionDetails;
}

export interface CollectionDetails {
  title: string;
  icon: string;
}
