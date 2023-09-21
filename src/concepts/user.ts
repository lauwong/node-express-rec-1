import { NotAllowedError } from "./errors";

export interface UserDoc {
  username: string;
}

export default class UserConcept {
  // Hardcoded users just for recitation purposes
  public readonly users: UserDoc[] = [{ username: "testAccount" }, { username: "grace" }];

  register(username: string) {
    this.isUsernameAvailable(username);
    this.users.push({ username });
  }

  isUsernameAvailable(username: string) {
    if (this.users.filter((user) => user.username === username).length !== 0) {
      throw new NotAllowedError("Username already taken!");
    }
  }

  // TODO: Write code to make sure the username exists
}
