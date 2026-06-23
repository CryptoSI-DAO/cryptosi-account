export interface User {
  id: string;
  email: string;
  pumps: number;
  credits: number;
  reputation: number;
  profile_picture_url?: string | null;
  created_at: string;
}

export interface App {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon_url?: string;
  url: string;
  balance_label: string;
  created_at: string;
}

export interface UserBalance {
  user_id: string;
  app_id: string;
  balance: number;
  updated_at: string;
}

export interface Database {
  public: {
    Tables: {
      users: {
        Row: User;
        Insert: Omit<User, "id" | "created_at">;
        Update: Partial<Omit<User, "id" | "created_at">>;
      };
      apps: {
        Row: App;
        Insert: Omit<App, "id" | "created_at">;
        Update: Partial<Omit<App, "id" | "created_at">>;
      };
      user_balances: {
        Row: UserBalance;
        Insert: Omit<UserBalance, "updated_at">;
        Update: Partial<Omit<UserBalance, "updated_at">>;
      };
    };
  };
}
