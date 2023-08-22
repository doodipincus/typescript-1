const returnBig = (n1: number, n2: number): number | number[] => {
    if (n1 > n2) {
        return n1
    } else if (n2 > n1) {
        return n2
    } else {
        return [n1, n2]
    }
}

// console.log(returnBig(2, 5))


const printBig = (n1: number, n2: number): void => {
    if (n1 > n2) {
        console.log(n1)
    } else if (n2 > n1) {
        console.log(n2)
    } else {
        console.log(`${n1} ${n2}`)
    }
}

// printBig(3, 8)

const checkingIfTheyAreEqual = (number: number): string => {
    if (number % 2 === 0) {
        return 'Equal'
    } else {
        return 'unequal'
    }
}

// console.log(checkingIfTheyAreEqual(6))

const returnsTheLengthOfAString = (str: string): number => {
    return str.length
}

// console.log(returnsTheLengthOfAString('poiu'))

const kjkj = (num: number): number[] => {
    let numbers: number[] = []
    for (let i: number = 1; i <= num; i++) {
        numbers.push(i)
    }
    return numbers
}

// console.log(kjkj(6))

const kjkjk = (arrNum: number[]): number | null => {
    let num: number = 0
    for (let i: number = 1; i < arrNum.length; i++) {
        if (!num) {
            num = arrNum[i]
        } else if (arrNum[i] > num) {
            num = arrNum[i]
        }
    }
    return num
}

// console.log(kjkjk([1, 5, 3, 8, 6]))

interface Person {
    Name: string;
    Age: number;
    isStudent: boolean;
}

const printPerson = (person: Person): void => {

    console.log(`name ${person.Name}, age ${person.Age}, isStudent ${person.isStudent}`)
}

const isMinor = (person: Person): boolean => {
    if (person.Age < 18) {
        return true
    }
    return false
}

// console.log(isMinor({
//     Name: "Daniel",
//     Age: 12,
//     isStudent: true,
// },))


interface Book {
    Title: string;
    Author: string;
    Year: number;
}


type Reader = Person & {
    favoriteBook?: Book;
};


const arrReaders = (arr: Person[]): Person => {

    let person: Person = arr[0]
    for (let i: number = 1; i < arr.length; i++) {
        if (arr[i].Age > person.Age) {
            person = arr[i]
        }
    }
    return person
}

// const arrReaders2 = (arr: Person[]): Person | undefined => {
//     let year: number  = 2023
//     let person: Person | undefined = undefined
//     for (let i: number = 0; i < arr.length; i++) {
//         if (arr[i].favoriteBook && arr[i].favoriteBook.Year < year) {
//                 year = arr[i].favoriteBook.Year
//                 person = arr[i]
//             }
//     }
//     return person
// }

function findOldestBook(readers: Reader[]): Book | undefined {
    let oldestBook: Book | undefined = undefined;
    let oldestYear: number | undefined = undefined;

    for (const reader of readers) {
        if (reader.favoriteBook) {
            if (!oldestYear || reader.favoriteBook.Year < oldestYear) {
                oldestYear = reader.favoriteBook.Year;
                oldestBook = reader.favoriteBook;
            }
        }
    }
    return oldestBook;
}

const arr: Reader[] = [
    {
        Name: "Adam",
        Age: 25,
        isStudent: true,
        favoriteBook: {
            Title: "Favorite Book",
            Author: "Book Author",
            Year: 2020,
        },
    },
    {
        Name: "Sarah",
        Age: 30,
        isStudent: false,
        favoriteBook: {
            Title: "Interesting Book",
            Author: "Book Author",
            Year: 2018,
        },
    },
    {
        Name: "Daniel",
        Age: 22,
        isStudent: true,
    },
];

// console.log(arrReaders(arr))


// console.log(findOldestBook(arr))