import {Product} from "../../src/domain";

describe("Products", ()=> {
    test("Should i create a product", () => {
        const product = new Product('balm', 30.0, 2);
        expect(product).toHaveProperty("name", "balm")
        expect(product).toHaveProperty("price", 30)
        expect(product).toHaveProperty("quantity", 2)
    })
})
