const createCandy = () => {
    const newCandy = {  }
    return newCandy
}

let candy = createCandy()

const buyChocolate = (candyObject) => {
    candyObject.type = "Milk chocolate"
    return candyObject

}


let chocolateCandy = buyChocolate(candy)

const addFlavoring = (candyObject) => {
    candyObject.flavor = 'Mint'
    return candyObject
}

let candyWithFlavor = addFlavoring(candy)

const makeBarkMixture = (candyObject) => {
    if (candyObject.flavor === "Mint") {
        candyObject.mixed = true
    } else {
        candyObject.mixed = false
    }
    return candyObject
}

let candyWithMixture = makeBarkMixture(candy)

const bakeCandy = (candyObject) => {
    if (candyObject.mixed === true) {
        candyObject.baked = true
    } else {
        candyObject.baked = false
    }
    return candyObject
}

let candyBaked = bakeCandy(candy)

const breakBark = (candyObject) => {
    if (candyObject.baked === true) {
        return [
            "Mint Chocolate Bark Piece",
            "Mint Chocolate Bark Piece",
            "Mint Chocolate Bark Piece",
            "Mint Chocolate Bark Piece",
            "Mint Chocolate Bark Piece",
            "Mint Chocolate Bark Piece"
        ]
    }
}

let candyBreak = breakBark(candy)

console.log(candyBreak)


