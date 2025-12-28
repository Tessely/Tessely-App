export type SignUpPayload = {
    email: string;
    full_name: string;
    company: string;
    password: string;
}

export type LoginPayload = {
  email: string;
  password: string;
  rememberMe: boolean;
};