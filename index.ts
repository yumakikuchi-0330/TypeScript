// No1
const age: number = 25;

// No2(文字列型)
const greeting: string = "Hello, TypeScript!";

// No3（配列型）
const names: string[] = ["Alice", "Bob", "Charlie"];

// No4（オブジェクト型）
type User ={
    name: string;
    age: number;
};
const user: User = {
    name: "Taro",
    age: 30
};

// No5（Union型）
let value: string | number;
value = "Hello";
value = 42;

// No6(関数の型）
function add(x: number , y: number ): number{
return x + y;
}

// No7(インターフェースの定義)
interface person  {
    firstName: "John",
    lastName: "Doe",
    age: 28
};

// No8(型エイリアスの利用)
type NumberArray = {
    id: number;
    age: number;
}

const numberArray: NumberArray = {
    id: 3,
    age: 20,
};

// No9(型推論の確認)
const count: number = 10;
const isActive: boolean = true;
const message: string = "Welcome!";

// No10(Optionalプロパティ)
interface UserProfile{
    name: string;
    age?: number;
}

const user1: UserProfile = {
    name: "Jiro"
};

// No11(型の再利用)
let printValue: string | number;
    printValue = "こんにちは";
    printValue = 30;

// No12(型のエイリアスを利用した関数定義)
type StringOrNumber = {
    text: string;
    id: number;
};

const display: StringOrNumber = {
    text: "こんにちは",
    id: 123
};
