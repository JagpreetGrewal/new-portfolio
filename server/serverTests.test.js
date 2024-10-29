const request = require('supertest');
// const app = require('./app')
const express = require('express');
const { route, addInterestedEmail } = require('./routes/route1')
const app = express();
app.use(express.json());
app.use('/', route);

const { MongoClient } = require('mongodb');
// const { Resend } = require('resend');

// jest.mock('resend');
jest.mock('mongodb', () => {
  const mCollection = {
      findOne: jest.fn(),
      insertOne: jest.fn(),
  };
  const mDb = { collection: jest.fn(() => mCollection) };
  const mClient = { connect: jest.fn(), db: jest.fn(() => mDb), close: jest.fn() };
  return { MongoClient: jest.fn(() => mClient) };
});

describe('API Endpoints', () => {
  // let connection;
  // let db;

  let client;

  beforeEach(() => {
      client = new MongoClient();
  });

  afterEach(() => {
      jest.clearAllMocks();
  });

  it('should insert a new email if it does not exist', async () => {
    // Mock the behavior for `findOne` and `insertOne`
    client.db().collection().findOne.mockResolvedValue(null);  // Simulate no existing document
    client.db().collection().insertOne.mockResolvedValue({ acknowledged: true });

    const emailObj = { email: "test@example.com" };
    const result = await addInterestedEmail(emailObj, client);

    expect(client.connect).toHaveBeenCalled();
    expect(client.db).toHaveBeenCalledWith("myEmails");
    expect(client.db().collection).toHaveBeenCalledWith("myEmailsCollection");
    expect(client.db().collection().findOne).toHaveBeenCalledWith({ "_id": emailObj });
    expect(client.db().collection().insertOne).toHaveBeenCalledWith({ "_id": emailObj, "contacted": false });
    expect(result).toEqual({ error: null });
    expect(client.close).toHaveBeenCalled();
  });

  test('should not insert the email if it already exists', async () => {
      // Mock the behavior for `findOne` to simulate an existing document
      client.db().collection().findOne.mockResolvedValue({ _id: { email: "test@example.com" } });

      const emailObj = { email: "test@example.com" };
      const result = await addInterestedEmail(emailObj, client);

      expect(client.db().collection().findOne).toHaveBeenCalledWith({ "_id": emailObj });
      expect(client.db().collection().insertOne).not.toHaveBeenCalled();
      expect(result).toEqual({ error: null });
  });

  test('should return an error if emailObj or client is null', async () => {
      const result = await addInterestedEmail(null, client);
      const error = new Error("Invalid parameters: emailObj or client is null");
      expect(result).toEqual(error);
  });

  test('should handle errors and return an error object', async () => {
      // Force an error by making `findOne` throw an exception
      client.db().collection().findOne.mockRejectedValue(new Error("Connection error"));

      const emailObj = { email: "test@example.com" };
      const result = await addInterestedEmail(emailObj, client);

      expect(result).toHaveProperty('error');
      expect(result.error).toBeInstanceOf(Error);
      expect(result.error.message).toBe("Connection error");
  });

  test('returning simple server greeting', async () => {
      const response = await request(app).get('/');
      expect(response.status).toBe(200);
      expect(response.text).toEqual('Hello from our server!');
  });

  test('returning email data submission', async () => {
      const response = await request(app).post('/email').send({ email: 'testEmail@email.com' });
      expect(response.status).toBe(200);
      expect(response.body).toEqual({ email: 'testEmail@email.com', message: 'Data submitted' });
  });

  test('returning email data submission with no email', async () => {
      const response = await request(app).post('/email').send(null);
      expect(response.status).toBe(200);
      expect(response.body).toEqual({ message: 'Data submitted' });
  });
});

// describe('Testing Resend more thoroughly', () => {
//   jest.doMock('./routes/route1', () => ({
//       addInterestedEmail: jest.fn()
//   }));

//   jest.mock('resend');
//   const myResendURI = {
//       emails: {
//           send: jest.fn()
//       }
//   };  

//   beforeEach(() => {
//       jest.clearAllMocks(); // Clear mocks before each test
//   });

//   test('returning email data submission with email transfer failure', async () => {
//       // Mocking the email sending function to return an error
//       myResendURI.emails.send.mockResolvedValue({ data: null, error: 'Email sending failed' });
      
//       const response = await request(app).post('/email').send({ email: 'testEmail@email.com' });
//       expect(response.status).toBe(400);
//       expect(response.body).toEqual({ error: 'Email sending failed' });
//   });

//   test('returning email data submission with MongoDB insertion failure', async () => {
//       // Mocking the email sending function to succeed
//       myResendURI.emails.send.mockResolvedValue({ data: {}, error: null });
//       // Mocking the addInterestedEmail function to return an error
//       addInterestedEmail.mockResolvedValue({ error: 'MongoDB insertion failed' });

//       const response = await request(app).post('/email').send({ email: 'testEmail@email.com' });
//       expect(response.status).toBe(400);
//       expect(response.body).toEqual({ error: 'MongoDB insertion failed' });
//   });

//   test('successful email data submission', async () => {
//       // Mocking both functions to succeed
//       myResendURI.emails.send.mockResolvedValue({ data: {}, error: null });
//       addInterestedEmail.mockResolvedValue({ error: null });

//       const response = await request(app).post('/email').send({ email: 'testEmail@email.com' });
//       expect(response.status).toBe(200);
//       expect(response.body).toEqual({ email: 'testEmail@email.com', message: 'Data submitted' });
//   });
// });