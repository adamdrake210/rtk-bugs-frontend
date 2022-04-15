export type Bug = {
  id: number;
  title: string;
  description: string;
  resolved: boolean;
  user: User;
};

export type CreateBugPayload = {
  title: string;
  description: string;
  userId: number;
  resolved: boolean;
};

export type UpdateBugPayload = {
  title?: string;
  description?: string;
  userId?: number;
};

export type User = {
  id: number;
  firstname: string;
  lastname: string;
  bugs?: Bug[];
};
