import Realm from "realm";

export default class Address extends Realm.Object {}

// Address schema
Address.schema = {
  name: "Address",
  primaryKey: "id",
  properties: {
    id: "int",
    street: "string",
    unit: "string",
    city: "string",
    state: "string",
    zipCode: "int",
    user: { type: "linkingObjects", objectType: "User", property: "address" }
  }
};
