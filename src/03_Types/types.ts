// Different Types in TypeScript
let thisIsAString: string = 'This is a String';
let thisIsAnInteger: number = 20;
let thisIsABoolean: boolean = true;
enum thisIsAnENUM {
    ENUM1 = 1,
    ENUM2,
    ENUM3
};
let enumValue: any = thisIsAnENUM[2];
let thisIsAnArray: [string, number] = ['Value1', 10];
let thisCanBeAny: any = 'This is any';

function voidFunction(): void {
    console.log('Void function returning nothing!');
}

console.log(thisIsAString);
console.log(thisIsAnInteger);
console.log(thisIsABoolean);
console.log(thisIsAnArray);
// Return ENUM number
console.log(thisIsAnENUM.ENUM2);
// Return ENUM value
console.log(enumValue);
console.log(thisCanBeAny);
voidFunction();