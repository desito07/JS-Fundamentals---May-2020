function solve(arr){
    class Cat{
        constructor(name, age){
            this.name = name;
            this.age = age;
            this.sound = () => console.log(`${this.name}, age ${this.age} says Meow`);

        }
    }
    for(let i = 0; i < arr.length; i++){
        let [name, age] =arr[i].split(' ');
        let cat = new Cat(name, age);
        cat.sound();
    }
}
solve([ 'Mellow 2', 'Tom 5' ]);
