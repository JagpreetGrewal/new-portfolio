import "./Header.css"
import axios from 'axios'
import {useState} from 'react'



const PORT = 8080;
const myServerURI = process.env.REACT_APP_SERVER_URI || `http://localhost:${PORT}`;

export const myEmailCall = (arg) => {
    console.log("Attempting post with arg", arg);
    axios.post(`${myServerURI}/email`,arg ?? 'Nothing sent', { timeout: 5000 }).then((data) => {
      console.log(`Email address is: ${data?.data?.email}`)
      console.log(data.status)
    }).catch(e => {
        console.log(e);
    })
  }

export default function Headers() {
    const [myName, setMyName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevents the default form submission (page reload)
        // Add your API call or any other logic here
        const formData = new FormData(event.target);
        const emailData = formData.get('email'); // Use the 'name' attribute to get the value
      
        console.log("Email Data:", emailData); // This should now output the correct email value
        myEmailCall({ email: emailData });
        setMyName(''); //clearing email field a fter submission
        // myEmailCall({message:'',data: myName.trim()}); 
        console.log('Form submitted');
      };
    
    return(
        <div className="App">
        <header className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <h3>Hello! I am Jagpreet Grewal <span class="wave">👋</span></h3>
            <img src="./images/May2024SFUGraduation_Pic1.jpg" alt='Graduation' class='graduation'></img>
            <p className = "Paragraph-header">
            I am recent SFU graduate with a <u>B.A.Sc. in Computer Engineering</u>. 
            I like reading, running, working out, travelling, and many other activities. In the future, I plan on completing a Master's degree in Business or in a Big Data field - 
            right now, I am eager to get into the workplace.
            </p>
            <p>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            {/* eslint-disable */}
            <a href="https://www.linkedin.com/in/jagpreet-g-587977105/" class="fa fa-linkedin" target="_blank" rel="noopener noreferrer"></a>
            <a href="mailto: Jagpreet Grewal<j.grewal.official@gmail.com>" class="fa fa-google" target="_blank" rel="noopener noreferrer"></a> 
            <a href="tel:778-867-9428" class="fa fa-phone" target="_blank" rel="noopener noreferrer"></a>
            <a href="https://github.com/JagpreetGrewal" class="fa fa-github" target="_blank" rel="noopener noreferrer"></a>
            {/* eslint-enable */}
            </p>
            <form id="myForm" onSubmit={handleSubmit}>
            <label>Alternatively, let me contact you: </label>
            <br />
            <input 
                type="email" 
                name="email"
                label="email"
                data-testid="myEmail"
                className="myInput" 
                placeholder={myName || "Please type your email..."} 
                value={myName || ''} // requires || to show placeholder when myName is empty string
                onChange={(event) => setMyName(event.target.value)}
            />
            <input 
                type="submit"
                name="submit" 
                data-testid="myForm"
                value="Submit" 
                onClick={() => {
                    // setNameChanged(nameChanged + 1); 
                    // setMyName("Submitted!!!"); 
                    setTimeout(() => {
                        console.log("Timeout over");
                    }, 2000);
                  }}
                onSubmit={handleSubmit}
            />
            </form> 
            <p><br></br></p>
            {/* <p><br /></p>
            <button onClick = {myApiCall}>Make API call</button>
            <p>Test 13425</p>
            <p>Name: {myName}</p>
            <p>Times Changed: {nameChanged}</p> */}
        </header>
        </div>
    );
}