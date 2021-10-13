const request = require('supertest');
const app = require('./app').app;
const build = require('./app').productBuilder;

// TEST THE REST API ENDPOINT FOR GET
describe('GET requests', () => {
    
    test('GET product/read endpoint, expect 200', async () => {
        const res = await request(app).get('/product/read')
        expect(res.statusCode).toBe(200);
    });

    test('GET bad endpoint, expect 404', async () => {
      const res = await request(app).get('/badEndPoint')
      expect(res.statusCode).toBe(404);
    });

});

// TEST THE REST API ENDPOINT FOR POST
describe('CREATE request', () => {
    
    test('POST product/read endpoint, expect 202', async () => {
        const res = await request(app).post('/product/create').send({
            name: "house",
            description: "brick",
            price: 2.50
        });
        expect(res.statusCode).toBe(201);
    });

    test('PUT bad endpoint, expect 404', async () => {
        const res = await request(app).put('/badEndPoint')
        expect(res.statusCode).toBe(404);
    });
      
});

// UNIT TEST THE PRODUCT BUILDER
describe('Unit Test', () => {
    let testStub = { // Create an object to be the test stub to check against the builder
        name: "garage",
        description: "bike",
        price: 999.99
    };

    test('product object builder', () => {
        expect(productBuilder("garage", "bike", 999.99)).toMatchObject(testStub); // validate productBuilder against the testStub variables
    });

});
