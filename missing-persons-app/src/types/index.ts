export type StatusType = 'missing' | 'located' | undefined;

export interface Person {
  id: string;
  name: string;
  status: StatusType;
  imageUrl: string;
  details: string;
}