const rewire = require("rewire")
const cities = rewire("./cities")
const fromObjToArray = cities.__get__("fromObjToArray")
// @ponicode
describe("fromObjToArray", () => {
    test("0", () => {
        let callFunction = () => {
            fromObjToArray(["Paris", "New York", "Roma", "Tokyo", "Skhirat", "Saint-Denis"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            fromObjToArray("Michael")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            fromObjToArray("Pierre Edouard")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            fromObjToArray("George")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            fromObjToArray("Jean-Philippe")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            fromObjToArray(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
