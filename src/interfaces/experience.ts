
export interface Experience {
  date_range:       string;
  enterprise:      string;
  isRecent:        boolean;
  project:         string;
  role:            string;
  type:            Type;
  resume:          string;
  additional_info: string;
}

export type Sizes = 'small' | 'large' | 'medium';

export enum Type {
  List = 'list',
  Paragraph = 'paragraph',
}