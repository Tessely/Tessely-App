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

export type CaseRoot = {
  root_table: string;
  root_primary_key: string;
  case_count: number;
  percentage: number;
};

export type CaseRootsResponse = {
  case_roots: CaseRoot[];
  total_cases: number;
};

export type UserCSVFile = {
  id: string;
  file_name: string;
  file_url: string;
  uploaded_at: string;
}
