const text = await Deno.readTextFile("./01.txt")
const textSplit = text.split("\n\n")
const numbers: number[] = []
for (const i of textSplit) {
    const eachLine = i.split("\n")
    let count = 0
    for (const line of eachLine) count += parseInt(line)
    numbers.push(count)
}
numbers.sort((a, b) => {return a - b})
numbers.pop()
console.log(numbers.pop()! + numbers.pop()! + numbers.pop()!)