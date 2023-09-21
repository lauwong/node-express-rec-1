import UserConcept from "./concepts/user";
import WebSessionConcept from "./concepts/websession";

// App Definition using concepts. Right now, we only have our WebSession concept implemented.
export const WebSession = new WebSessionConcept();
export const User = new UserConcept();
