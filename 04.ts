const text = (await Deno.readTextFile("04.txt")).trim()

async function part1() {
    let count = 0;
    text.split("\n").forEach(line => {
        const [a, b] = line.split(",")
        if (a == b) {
            count++
            return
        }
        const [a1, a2] = a.split("-").map(v => parseInt(v))
        const [b1, b2] = b.split("-").map(v => parseInt(v))
        if (a1 >= b1 && a2 <= b2) {
            count++
            return
        }
        if (b1 >= a1 && b2 <= a2) {
            count++
            return
        }
    })
    console.log(count)
}

async function part2() {
    let count = 0;
    text.split("\n").forEach(line => {
        const [a, b] = line.split(",")
        if (a == b) {
            count++
            return
        }
        const [a1, a2] = a.split("-").map(v => parseInt(v))
        const [b1, b2] = b.split("-").map(v => parseInt(v))
        if (a1 >= b1 && a1 <= b2) {
            count++
            return
        }
        if (a2 >= b1 && a2 <= b2) {
            count++
            return
        }
        if (b1 >= a1 && b1 <= a2) {
            count++
            return
        }
        if (b2 >= a1 && b2 <= a2) {
            count++
            return
        }
    })
    console.log(count)
}

await part1()
await part2()