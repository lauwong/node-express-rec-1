import { Router, getExpressRouter } from "./framework/router";

import { User, WebSession } from "./app";
import { WebSessionDoc } from "./concepts/websession";

class Routes {
  @Router.post("/login")
  async logIn(session: WebSessionDoc, username: string) {
    WebSession.start(session, username);
    return { msg: "Logged in!", user: username };
  }

  @Router.post("/logout")
  async logOut(session: WebSessionDoc) {
    WebSession.end(session);
    return { msg: "Logged out!" };
  }

  @Router.post("/register")
  async register(username: string) {
    User.register(username);
    return { msg: "Username registered!", user: username };
  }

  // If we had more concepts working, we'd add routes for those here too!
}

export default getExpressRouter(new Routes());
