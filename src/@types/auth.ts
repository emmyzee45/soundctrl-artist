export type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export type AuthUser = null | Record<string, any>;

export type AuthState = {
  isAuthenticated: boolean;
  isInitialized: boolean;
  user: AuthUser;
};

export type JWTContextType = {
  isAuthenticated: boolean;
  isInitialized: boolean;
  user: AuthUser;
  method: 'jwt';
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, firstName: string, lastName: string) => Promise<void>;
  logout: () => Promise<void>;
};

export type EmailType = {
  email: string;
};

export type FirstNameType = {
  firstName: string;
};

export type LastNameType = {
  lastName: string;
};
export type PasswordType = {
  password: string;
  confirmPassword: string;
};

export type RegisterType = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type LoginType = {
  email: string;
  password: string;
};
