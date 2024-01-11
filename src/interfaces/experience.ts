
export interface Experience {
  start_date:      string;
  end_date:        string;
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