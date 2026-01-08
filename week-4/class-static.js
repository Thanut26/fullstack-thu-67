class Dog {
    constructor(name) {
        this._name = name;
    }

    introduce() {
        console.log("This dog's name is " + this._name + " !");
    }

    static bark() {
        console.log("Woof! Woof!");
    }
}

const myDog = new Dog("Buddy");
myDog.introduce();

Dog.bark();