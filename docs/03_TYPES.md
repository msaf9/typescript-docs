# Types

## Introduction
Different Data Types in TypeScript.

## Code
```typescript
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
```

## Explanation
Using console.log, the types are console logged.

## Navigate to code
> [variables.ts](../src/03_Types/types.ts)
