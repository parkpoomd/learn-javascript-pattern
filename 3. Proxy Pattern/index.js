const person = {
  name: "John Doe",
  age: 42,
  email: "john@doe.com",
  country: "Canada",
};

const personProxy = new Proxy(person, {
  get: (target, prop) => {
    console.log(`The value of ${prop} is ${target[prop]}`);
    return target[prop];
  },
  set: (target, prop, value) => {
    console.log(`Changed ${prop} from ${target[prop]} to ${value}`);
    target[prop] = value;
    return true;
  },
});

/*
Reflect
The built-in Reflect object makes it easier to manipulate the target object.

Instead of accessing properties through obj[prop] or setting properties through obj[prop] = value, we can
access or modify properties on the target object through Reflect.get() and Reflect.set(). The methods
receive the same arguments as the methods on the handler object.

new Proxy(person, {
  get: (target, property) => {
    return Reflect.get(target, property)
  },

  set: (target, property, value) => {
    return Reflect.set(target, property, value)
  }
})
*/
