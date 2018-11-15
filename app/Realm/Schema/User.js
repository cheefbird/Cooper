import Realm from "realm";

export default class User extends Realm.Object {}

// User schema
User.schema = {
  name: "User",
  primaryKey: "id",
  properties: {
    id: "int",
    firstName: "string",
    lastName: "string",
    address: { type: "Address" },
    children: { type: "list", objectType: "Child" },
    hours: { type: "int", default: 0 }
  }
};
