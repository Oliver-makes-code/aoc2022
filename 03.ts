const text = (await Deno.readTextFile("03.txt")).trim()

async function part1() {
    let value = 0
    text.split("\n").map(value => {
        const a = value.substring(0, value.length/2)
        const b = value.substring(value.length/2, value.length)
        for (let i = 0; i < b.length; i++) {
            const char = b[i]
            if (a.includes(char)) {
                const num = parseInt(char, 36)-9
                return char.toLowerCase() != char ? num+26 : num
            }
        }
        return 0
    }).forEach(num => value += num)
    console.log(value)
}

async function part2() {
    let value = 0
    const split = text.split("\n")
    const values: string[][] = []
    for (let i = 0; i < split.length; i += 3) {
        values.push([
            split[i], split[i+1], split[i+2]
        ])
    }
    values.map(value => {
        const a = value[0]!
        const b = value[1]!
        const c = value[2]!
        let ab = ""
        for (let i = 0; i < b.length; i++) {
            const char = b[i]
            if (a.includes(char)) {
                ab += char
            }
        }
        for (let i = 0; i < ab.length; i++) {
            const char = ab[i]
            if (c.includes(char)) {
                const num = parseInt(char, 36)-9
                return char.toLowerCase() != char ? num+26 : num
            }
        }
        return 0
    }).forEach(num => value += num)
    console.log(value)
}

await part1()
await part2()