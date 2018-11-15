import Realm from "realm";

import Address from "./Schema/Address";
import User from "./Schema/User";
import Child from "./Schema/Child";

export default new Realm({ schema: [User, Address, Child] });
