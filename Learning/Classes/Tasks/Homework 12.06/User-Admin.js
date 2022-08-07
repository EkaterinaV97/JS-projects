/* Task */
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  canVote() {
    return this.age >= 18;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

class Admin extends User {
  getFullName() {
    return `${this.firstName} ${this.lastName} [admin]`
  }

  updateConfig() {
    return "Config updated";
  }
}

// Sample usage - do not modify
const user = new User("Sam", "Green", 17);
console.log(user.canVote()); // false
console.log(user.getFullName()); // "Sam Green"

const admin = new Admin("Alex", "Blue", 20);
console.log(admin.canVote()); // true
console.log(admin.getFullName()); // "Alex Blue [admin]"
console.log(admin.updateConfig()); // "Config updated"



/* Необходимо отрефакторить класс Admin, чтобы он принимал четвертый параметр с именем userType. Например, const admin = new Admin("Alex", "Blue", 20, "superadmin"). Метод getFullName() захардкоден, т.к. в конце возвращает строку [admin]. Вместо этого вам необходимо вернуть тип пользователя, полученного из параметра. Также обратите внимание на возврат firstName и lastName в методе getFullName(). Здесь есть что переписать. */
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  canVote() {
    return this.age >= 18;
  }
}

class Admin extends User {
  constructor(firstName, lastName, age, userType) {
    super(firstName, lastName, age);
    this.userType = userType;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName} [${this.userType}]`;
  }

  updateConfig() {
    return "Config updated";
  }
}

// Sample usage - do not modify
const user = new User("Sam", "Green", 17);
console.log(user.canVote()); // false
console.log(user.getFullName()); // "Sam Green"

const admin = new Admin("Alex", "Blue", 20, "superadmin");
console.log(admin.canVote()); // true
console.log(admin.getFullName()); // "Alex Blue [superadmin]"
console.log(admin.updateConfig()); // "Config updated"