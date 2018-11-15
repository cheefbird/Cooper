import Realm from "realm";

export default class Child extends Realm.Object {}

// Child schema
Child.schema = {
  name: "Child",
  primaryKey: "id",
  properties: {
    id: "int",
    firstName: "string",
    lastName: "string",
    age: "int",
    gender: "string",
    parent: { type: "linkingObjects", objectType: "User", property: "children" }
  }
};
