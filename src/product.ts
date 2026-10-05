// No1(Partial型の利用)
interface User {
    name: string;
    age: number;
    email: string;
}

const user: Partial<User> = {
    name: "Alice"
};
console.log(user);


// No2(Required型の利用)
interface Profile {
    firstName?: string;
    lastName?: string;
    age?: number;
}

const Taro: Required<Profile> = {
    firstName: "Taro",
    lastName: "Yamada",
    age: 20
};

// No3(Readonly型の利用)
interface Book {
    title: string;
    author: string;
    published: number;
}

const book: Readonly<Book> = {
    title: "掃除",
    author: "山田太郎",
    published: 10
};

// No4(Record型の利用)
interface Student {
    name: string;
    grade: number;
}
type StudentNumber = Record<number,Student>;

const student: StudentNumber = {
    1: { name: "田中 太郎", grade: 2 },
    2: { name: "佐藤 花子", grade: 1 },
}

// No5(Pick型の利用)
interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
}

type ProductEl = Pick<Product, "name" | "price" >

const preview: ProductEl ={
    name: "鈴木",
    price:300,
};

// No6(Omit型の利用)
interface Employee {
    id: number;
    name: string;
    salary: number;
    department: string;
}

type Employeeview = Omit<Employee, "salary" | "department">;

const view: Employeeview ={
    id: 3,
    name: "高橋",
}

// No7(ReturnType型の利用)
function getUser() {
    return {
        id: 1,
        name: "Alice",
        age: 25
    };
}

type  backUser = ReturnType<typeof getUser>;