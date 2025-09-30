export interface Role {
  name: string;
  permission: string[];
  can(permission: string): boolean;
  describe(): void;
}
