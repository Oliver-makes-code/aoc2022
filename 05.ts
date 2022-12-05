const text = (await Deno.readTextFile("05.txt"))

function parseStack(str: string): string[][] {
    const output: string[][] = []
    const split = str.split("\n")
    split.pop()
    split.forEach(value => {
        let idx = 0
        for (let i = 1; i < value.length; i += 4) {
            const char = value[i]
            if (char.trim()) {
                if (!output[idx]) output[idx] = []
                output[idx].unshift(char)
            }
            idx++
        }
    })
    return output
}

const REGEX = /^move ([0-9]+) from ([0-9]+) to ([0-9]+)$/i


async function part1() {
    function parseCommand(line: string, stack: string[][]) {
        const parsed = REGEX.exec(line)!
        const move = parseInt(parsed[1])
        const from = parseInt(parsed[2])-1
        const  to  = parseInt(parsed[3])-1
        const fromStack = stack[from]
        const  toStack  = stack[ to ]
        for (let i = 0; i < move; i++)
            toStack.push(fromStack.pop()!)
    }
    const split = text.split("\n\n")
    const stack = parseStack(split[0])
    split[1].split("\n").forEach(value => parseCommand(value, stack))
    let str = ""
    for (const i of stack) {
        str += i.pop()
    }
    console.log(str)
}

async function part2() {
    function parseCommand(line: string, stack: string[][]) {
        const parsed = REGEX.exec(line)!
        const move = parseInt(parsed[1])
        const from = parseInt(parsed[2])-1
        const  to  = parseInt(parsed[3])-1
        const fromStack = stack[from]
        const  toStack  = stack[ to ]
        const temp = []
        for (let i = 0; i < move; i++)
            temp.push(fromStack.pop()!)
        while (temp.length > 0) toStack.push(temp.pop()!)
    }
    const split = text.split("\n\n")
    const stack = parseStack(split[0])
    split[1].split("\n").forEach(value => parseCommand(value, stack))
    let str = ""
    for (const i of stack) {
        str += i.pop()
    }
    console.log(str)
}

await part1()
await part2()