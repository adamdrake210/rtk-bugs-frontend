export type Bug = {
  id: number;
  title: string;
  description: string;
  resolved: boolean;
  user: User;
};

export type User = {
  id: number;
  firstname: string;
  lastname: string;
};
