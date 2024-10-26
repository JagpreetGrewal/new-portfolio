const request = require('supertest');
const app = require('./app')

test('returning simple server greeting', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toEqual('Hello from our server!');
  });

test('returning email data submission', async () => {
    const response = await request(app).post('/email').send({email: 'testEmail@email.com'});
    expect(response.status).toBe(200);
    expect(response.text).toEqual(JSON.stringify({ email: 'testEmail@email.com', message: 'Data submitted' }));
  }); 

test('returning email data submission with no email', async () => {
    const response = await request(app).post('/email').send(null);
    expect(response.status).toBe(200);
    expect(response.text).toEqual(JSON.stringify({message: 'Data submitted' }));
  }); 
