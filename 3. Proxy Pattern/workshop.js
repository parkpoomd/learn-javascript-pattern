import { isValidEmail, isAllLetters } from "./validator.js";

const user = {
  firstName: "John",
  lastName: "Doe",
  username: "johndoe",
  age: 42,
  email: "john@doe.com",
};

const userProxy = new Proxy(user, {
  get: (target, property) => {
    console.log(
      `${new Date()} | The value of ${property} is ${Reflect.get(
        target,
        property
      )}`
    );
  },

  set: (target, property, value) => {
    if (property === "username") {
      if (!isAllLetters(value)) {
        throw new Error("You can only use letters in your username.");
      }

      if (value.length < 3) {
        throw new Error("Please provide a valid username");
      }
    }

    if (property === "email") {
      if (!isValidEmail(value)) {
        throw new Error("Please provide a valid email.");
      }
    }

    if (property === "age") {
      if (typeof value !== "number") {
        throw new Error("Please provide a valid age.");
      }

      if (value < 18) {
        throw new Error("You have to be at least 18 years old.");
      }
    }

    console.log("Successfully updated!");
    return Reflect.set(target, property, value);
  },
});

userProxy.age = 17;
