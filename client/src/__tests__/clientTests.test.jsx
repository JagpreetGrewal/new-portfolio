import { render, screen, fireEvent } from '@testing-library/react';
import {createMemoryHistory} from 'history'
import {BrowserRouter, MemoryRouter, Router} from 'react-router-dom'
import "@testing-library/jest-dom/extend-expect";
import userEvent from '@testing-library/user-event'
import React, { useState as useStateMock } from 'react';
import MyBody from '../Body';
import MyGame from '../Game';
import Headers from '../Header';
import { myEmailCall } from '../Header';
import App from '../App';
import axios from 'axios';  // Import axios directly
// import Image1 from '../../public/images/Stock-coding.jpg'

jest.mock('react', () => ({
	...jest.requireActual('react'),
	useState: jest.fn()
}))
const setState = jest.fn()

beforeAll(() => {
  delete window.location; // Clear any previous mock
  window.location = { pathname: '/' }; // Mock window.location.pathname
});

afterEach(() => {
    // restore the spy created with spyOn
    jest.restoreAllMocks();
  });

// Mocking axios since myEmailCall uses it to make the API call
jest.mock('axios'); 

test("Body renders successfully", () => {
    render(<MyBody/>);

    const elementExperience = screen.getByText(/Manufacturing Test Engineer, Co-op/i);
    const elementProjects = screen.getByText(/Pathloss Testing/i)

    expect(elementExperience).toBeInTheDocument();
    expect(elementProjects).toBeInTheDocument();
});

describe("Game component", () => {
  test("Game loads successfully", async () => {
      let myLoading = false;
      const setMyLoading = jest.fn((newLoading) => { myLoading = newLoading });

      React.useState.mockImplementation(() => [myLoading, setMyLoading]); 
      axios.get.mockResolvedValue({ data: "<html>Game HTML content</html>" }); 
      render(<MyGame/>);
      
      // Mock the loading completion by resolving the promise
      await screen.findByText(/Development in progress. Here's the rapid prototype./i);

      // Verify that loading message disappears and game content loads
      const gameContent = screen.getByText(/Development in progress. Here's the rapid prototype./i);
      expect(gameContent).toBeInTheDocument();
      expect(axios.get).toHaveBeenCalledWith(
        "http://localhost:8080/game/index.html",
        { responseType: "arraybuffer" }
      );    
  });

  test("Game loading screen renders successfully", () => {
    let myLoading = true;
    const setMyLoading = jest.fn((newLoading) => { myLoading = newLoading });
    React.useState.mockImplementation(() => [myLoading, setMyLoading]);  
    axios.get.mockResolvedValue({ data: "<html>Game HTML content</html>" }); 
    render(<MyGame/>);
  
    const elementLoading = screen.getByText(/Loading game.../i);
    expect(elementLoading).toBeInTheDocument();
  });

  test("Testing axios error when game load fails", async () => {
    let myLoading = true;
    const setMyLoading = jest.fn((newLoading) => { myLoading = newLoading });
    React.useState.mockImplementation(() => [myLoading, setMyLoading]); 
    // Mock `axios.get` to reject, simulating a network error
    axios.get.mockRejectedValue(new Error("Network error"));

    render(<MyGame />);

    // Check that the loading message appears initially
    const loadingMessage = screen.getByText(/Loading game.../i);
    expect(loadingMessage).toBeInTheDocument();

    // Verify `axios.get` was called
    expect(axios.get).toHaveBeenCalledWith(
      "http://localhost:8080/game/index.html",
      { responseType: "arraybuffer" }
    ); 
  });

  test("handleFullscreen calls requestFullscreen when available", () => {
    let myLoading = false;
    const setMyLoading = jest.fn((newLoading) => { myLoading = newLoading });
    React.useState.mockImplementation(() => [myLoading, setMyLoading]); 
    axios.get.mockResolvedValue({ data: "<html>Game HTML content</html>" }); 
    render(<MyGame />);

    // Access the iframe via the `iframeRef` and mock fullscreen methods
    const iframe = screen.getByTitle("Godot Game");
    iframe.requestFullscreen = jest.fn();
    iframe.mozRequestFullScreen = jest.fn();
    iframe.webkitRequestFullscreen = jest.fn();
    iframe.msRequestFullscreen = jest.fn();

    // Trigger the fullscreen handler by finding and clicking the fullscreen button
    const fullscreenButton = screen.getByRole("button", { name: /fullscreen/i });
    fireEvent.click(fullscreenButton);

    // Check if the appropriate fullscreen method was called
    expect(
      iframe.requestFullscreen
    ).toHaveBeenCalled();
  }); 

  test("handleFullscreen falls back to mozRequestFullScreen", () => {
    let myLoading = false;
    const setMyLoading = jest.fn((newLoading) => { myLoading = newLoading });
    React.useState.mockImplementation(() => [myLoading, setMyLoading]); 
    axios.get.mockResolvedValue({ data: "<html>Game HTML content</html>" }); 
    render(<MyGame />);

    // Access the iframe via the `iframeRef` and mock fullscreen methods
    const iframe = screen.getByTitle("Godot Game");
    iframe.requestFullscreen = undefined;
    iframe.mozRequestFullScreen = jest.fn();
    iframe.webkitRequestFullscreen = jest.fn();
    iframe.msRequestFullscreen = jest.fn();

    // Trigger the fullscreen handler by finding and clicking the fullscreen button
    const fullscreenButton = screen.getByRole("button", { name: /fullscreen/i });
    fireEvent.click(fullscreenButton);

    // Check if the appropriate fullscreen method was called
    expect(
      iframe.mozRequestFullScreen
    ).toHaveBeenCalled();
  });

  test("handleFullscreen falls back to webkitRequestFullscreen", () => {
    let myLoading = false;
    const setMyLoading = jest.fn((newLoading) => { myLoading = newLoading });
    React.useState.mockImplementation(() => [myLoading, setMyLoading]); 
    axios.get.mockResolvedValue({ data: "<html>Game HTML content</html>" }); 
    render(<MyGame />);

    // Access the iframe via the `iframeRef` and mock fullscreen methods
    const iframe = screen.getByTitle("Godot Game");
    iframe.requestFullscreen = undefined;
    iframe.mozRequestFullScreen = undefined;
    iframe.webkitRequestFullscreen = jest.fn();
    iframe.msRequestFullscreen = jest.fn();

    // Trigger the fullscreen handler by finding and clicking the fullscreen button
    const fullscreenButton = screen.getByRole("button", { name: /fullscreen/i });
    fireEvent.click(fullscreenButton);

    // Check if the appropriate fullscreen method was called
    expect(
      iframe.webkitRequestFullscreen
    ).toHaveBeenCalled();
  });

  test("handleFullscreen falls back to msRequestFullscreen", () => {
    let myLoading = false;
    const setMyLoading = jest.fn((newLoading) => { myLoading = newLoading });
    React.useState.mockImplementation(() => [myLoading, setMyLoading]); 
    axios.get.mockResolvedValue({ data: "<html>Game HTML content</html>" }); 
    render(<MyGame />);

    // Access the iframe via the `iframeRef` and mock fullscreen methods
    const iframe = screen.getByTitle("Godot Game");
    iframe.requestFullscreen = undefined;
    iframe.mozRequestFullScreen = undefined;
    iframe.webkitRequestFullscreen = undefined;
    iframe.msRequestFullscreen = jest.fn();

    // Trigger the fullscreen handler by finding and clicking the fullscreen button
    const fullscreenButton = screen.getByRole("button", { name: /fullscreen/i });
    fireEvent.click(fullscreenButton);

    // Check if the appropriate fullscreen method was called
    expect(
      iframe.msRequestFullscreen
    ).toHaveBeenCalled();
  });       
});


describe('Game Loading Screen renders successfully', () => {
    const realUseState = React.useState
    beforeEach(() => {
          useStateMock.mockImplementation((init) => [init, setState])
    })
        it('Tests the loading screen in the game', () => {
            axios.get.mockResolvedValue({ data: "<html>Game HTML content</html>" }); 
            render(<MyGame />);
            useStateMock.mockImplementationOnce((init) => [init, setState])
            const elementLoading = screen.getByText(/Loading game.../i);
            expect(elementLoading).toBeInTheDocument();
        });
        it('Tests the full screen in the game', () => {
            // useStateMock.mockImplementationOnce(() => [false, setState])
            jest.spyOn(React, 'useState').mockImplementationOnce(() => realUseState(false))
            axios.get.mockResolvedValue({ data: "<html>Game HTML content</html>" }); 
            render(<MyGame />)
            const elementLoaded = screen.getByText(/Fullscreen/i);
            const iframeLoading = document.querySelector("iframe")
            expect(elementLoaded).toBeInTheDocument();
            expect(iframeLoading).toBeTruthy()
            expect(screen.getByRole("button", {name: /fullscreen/i})).toBeInTheDocument();        
        })
  });

test('Test name change in email component in home page', () => {
    let myName = 'Initial Name';
    const setMyName = jest.fn((newName) => { myName = newName });
  
    // Mock useState to return the initial state and the mock setter function
    React.useState.mockImplementation(() => [myName, setMyName]);
    
    render(<Headers/>);

    expect(screen.getByDisplayValue('Initial Name')).toBeInTheDocument();

    // In the component, the placeholder text changes with the text typed in
    fireEvent.change(screen.getByPlaceholderText('Initial Name'), { target: { value: 'Test Name' } });

    // Check if the mock state setter was called with the new value
    expect(setMyName).toHaveBeenCalledWith('Test Name');
    
    // Optionally, re-mock the useState to reflect the new value for further interactions
    React.useState.mockImplementation(() => ['Test Name', setMyName]);
 
     
    const elementIntro = screen.getByText(/I am recent SFU graduate/i);
    expect(elementIntro).toBeInTheDocument();
});

test('Testing text appearance in home page', () => {
    let myName = 'Initial Name';
    const setMyName = jest.fn((newName) => { myName = newName });
    React.useState.mockImplementation(() => [myName, setMyName]);
    
    render(<Headers/>);
     
    const elementIntro = screen.getByText(/I am recent SFU graduate/i);
    expect(elementIntro).toBeInTheDocument();
});
// test('Form submits successfully with valid input', () => {
//     let myName = 'Initial Name';
//     const setMyName = jest.fn((newName) => { myName = newName });
//     React.useState.mockImplementation(() => [myName, setMyName]);
//     // Render the component
//     render(<Headers />);
  
//     // Get the form element
//     const form = screen.getByTestId('myForm');
  
//     // Simulate the form submission
//     fireEvent.submit(form);
  
//     // Assert that the handleSubmit function was called
//     expect(setMyName).toHaveBeenCalledTimes(1);
//   });


describe('Headers component', () => {
   
  test('submits form and calls myEmailCall with correct email data', async () => {
    // Mock axios to avoid making an actual API call
    const axios = require('axios');
    axios.post.mockResolvedValue({ data: { email: 'test@example.com' }, status: 200 });

    let myName = 'Initial Name';
    const setMyName = jest.fn((newName) => { myName = newName });
    React.useState.mockImplementation(() => [myName, setMyName]);
    render(<Headers />);
    expect(screen.getByDisplayValue('Initial Name')).toBeInTheDocument();

    // Forms may not be able to be mocked
  });
  test('Testing form name change again', async () => {
    // Mock axios post response
    const axios = require('axios');
    axios.post.mockResolvedValueOnce({ data: { email: 'test@example.com' }, status: 200 });

    let myName = 'Initial Name';
    const setMyName = jest.fn((newName) => { myName = newName });
    React.useState.mockImplementation(() => [myName, setMyName]);

    // Render the component
    render(<Headers />);

    expect(screen.getByDisplayValue('Initial Name')).toBeInTheDocument();

    // In the component, the placeholder text changes with the text typed in
    fireEvent.change(screen.getByPlaceholderText('Initial Name'), { target: { value: 'TestName' } });

    // Check if the mock state setter was called with the new value
    expect(setMyName).toHaveBeenCalledWith('TestName');
    
    // Optionally, re-mock the useState to reflect the new value for further interactions
    React.useState.mockImplementation(() => ['TestName', setMyName]);
  });

  const mockArg = { email: 'test@example.com' };

  test('Testing emailcall in home page', async () => {
    axios.post.mockResolvedValue({ data: { email: 'test@example.com' }, status: 200 });
    myEmailCall(mockArg);
    await Promise.resolve();
    expect(axios.post).toHaveBeenCalledWith(
      'http://localhost:8080/email', // or replace with your `myServerURI`
      mockArg,
      { timeout: 5000 }
    );
  });

  test('Testing emailcall rejection', async () => {
    // const axios = require('axios');
    const consoleSpy = jest.spyOn(console, 'log');
    const mockError = new Error('Network error');
    axios.post.mockRejectedValue(mockError);

    await myEmailCall(mockArg);
    await Promise.resolve();

    expect(consoleSpy).toHaveBeenCalledWith(mockError);

    // Clean up the console spy
    consoleSpy.mockRestore();
  });
});

describe('App Component', () => {
  jest.doMock('../Header', () => {
    return function MockHeader() {
      return <div>Mock Header Content</div>;
    };
  });
  jest.doMock('../Body', () => {
    return function MockAbout() {
      return <div>Mock About Content</div>;
    };
  });
  jest.doMock('../Game', () => {
    return function MockGame() {
      return <div>Mock Game Content</div>;
    };
  });
  jest.mock('react-router-dom', () => {
    // Require the original module to not be mocked...
    const originalModule = jest.requireActual('react-router-dom');
  
    return {
      __esModule: true,
      ...originalModule,
      // add your noops here
      useParams: jest.fn(),
      useHistory: jest.fn(),
    };
  });   
       
  test("App (Home Page) renders successfully", async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    )
    const user = userEvent.setup()
  
    // verify page content for default route
    expect(screen.getByText(/Mock Header Content/i)).toBeInTheDocument()
  
    // verify page content for expected route after navigating
    await user.click(screen.getByText(/About Me/i))
    expect(screen.getByText(/Mock About Content/i)).toBeInTheDocument()
  })  
})

