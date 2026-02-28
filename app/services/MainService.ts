import type { $Fetch } from 'nitropack';
import type { RuntimeConfig } from 'nuxt/schema';

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

export class MainService {
  constructor(
    protected api: $Fetch,
    protected runtimeConfig: RuntimeConfig
  ) {}

  async getUsers(): Promise<User[]> {
    return this.api<User[]>('/users');
  }
}
