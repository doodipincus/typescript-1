const sumOfQu = (arr: number[]): number => {
    let num: number = 0
    for (const number of arr) {
        if (number % 2 === 0) {
            num += number
        }
    }
    return num
}



const area = (hight: number, width: number): number => {
    return hight * width
}

// console.log(area())

const palindrome = (str: string): boolean => {
    let flag: boolean = false
    for (let i: number = 0; i < Math.floor(str.length / 2); i++) {
        if (str[i] === str[str.length - 1 - i]) {
            flag = true
        } else {
            return false
        }
    }
    return flag
}

console.log(palindrome('outituo'))

const firstUpperCase = (arr: string[]): string[] => {
    const newArr: string[] = []
    for (const str of arr) {
        newArr.push(str[0].toUpperCase() + str.slice(1))
    }
    return newArr
}

// console.log(firstUpperCase(['dir', dudi', 'pincus']))


const uniqueNumbers = (numbers: number[]): number[] => {
    const uniqueNumbers: number[] = []
    for (const num of numbers) {
        if (!uniqueNumbers.includes(num)) {
            uniqueNumbers.push(num)
        }
    }
    return uniqueNumbers
}

// console.log(uniqueNumbers([3, 4, 3, 5, 8, 8, 2]))




// כתוב פונקציה שמקבלת אובייקט עם שדות עבור שם פרטי ושם משפחה
// הפונקציה מחזירה אובייקט המכיל את שתי שדות המתארות את ראשי התיבות של האובייקט
// דוגמה
// Input: { firstName: "John", lastName: "Doe" }
// Output: { firstInitial: "J", lastInitial: "D" }
// השתמשו בממשקים מתאימים עבור הקלט והםלט של הפונקציה

////////////////////////////////




const avgAge = (arr: object[]): number => {
    let avg: number = 0
    for (const man of arr) {
        avg += man.age
    }
    return avg / arr.length
}

const x: object[] = [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    { name: "Bob", age: 40 },
]

// console.log(avgAge(x))


const minAndMax = (arr: number[]): object => {
    let min: number = 0
    let max: number = 0
    for (const num of arr) {
        if (num < min) min = num
        if (num > max) max = num
    }
    return {
        max,
        min,
    }
}


// console.log(minAndMax([2, 5, 8, 2, 7, 0, 1]))


const upsideDown = (arr: any[number | string]): any[number | string] => {

    const reverseArr: any[string | number] = []

    for (let i: number = arr.length - 1; i >= 0; i--) {
        reverseArr.push(arr[i])
    }
    return reverseArr
}

// console.log(upsideDown([1, 2, 3, 'o', 5, 6]))