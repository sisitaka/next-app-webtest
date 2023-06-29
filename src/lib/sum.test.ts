import fun from "./sum"

test("1 + 2 = 3", ()=> {
    expect(fun(1,2)).toBe(3)
})
