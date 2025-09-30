// Observer interface
export interface Driver {
  update(riderName: string, location: string): void;
}
