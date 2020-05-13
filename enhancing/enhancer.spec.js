const enhancer = require('./enhancer.js');
// test away!

const sword = {
    name: "sword",
    enhancement: 5,
    durability: 43
}

const unnamed = {
    name: "unnamed",
    durability: 56
}

const improperWeaponName = {
    name: 5,
    enhancement: 16,
    durability: 4
}

const improperWeaponEnhancement = {
    name: "pitchfork",
    enhancement: "really strong",
    durability: 27
}
const improperWeaponDurability = {
    name: "frying pan",
    enhancement: 20,
    durability: "lots of life"
}

const improperEnhancementValue = {
    name: "candlestick",
    enhancement: 24,
    durability: 23
}

const improperDurabilityValue = {
    name: "poison",
    enhancement: 3,
    durability: -4
}

const nunchucks = {
    name: "nunchucks",
    enhancement: 16,
    durability: 83
}

const catOfNineTails = {
    name: "cat of nine tails",
    enhancement: 20,
    durability: 45
}

const morningStar = {
    name: "morning star",
    enhancement: 12,
    durability: 45
}

describe("item functionality test", () => {
    it("should restore item durability", () => {
        expect(enhancer.repair(sword)).toEqual({
            name: "sword",
            enhancement: 5,
            durability: 100
        })
        expect(() => enhancer.repair(unnamed)).toThrow()
        expect(() => enhancer.repair(improperWeaponName)).toThrow()
        expect(() => enhancer.repair(improperWeaponEnhancement)).toThrow()
        expect(() => enhancer.repair(improperWeaponDurability)).toThrow() 
        expect(() => enhancer.repair(improperEnhancementValue)).toThrow() 
        expect(() => enhancer.repair(improperDurabilityValue)).toThrow() 
    })

    it("should increase item enhancement", () => {
        expect(enhancer.succeed(nunchucks).enhancement).toBe(17)
        expect(enhancer.succeed(catOfNineTails).enhancement).toBe(20)
    })

    it("should decrease item enhancement", () => {
        expect(enhancer.fail(nunchucks).enhancement).toBe(6)
        expect(enhancer.fail(catOfNineTails).enhancement).toBe(19)
        expect(enhancer.fail(morningStar).enhancement).toBe(7)
    })
})
