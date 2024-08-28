import "./Header.css"
import logo from './logo.svg';
import axios from 'axios'
import {useState, useEffect} from 'react'

const myApiCall = () => {
    axios.get('http://localhost:8080').then((data) => {
      console.log(data.data)
      console.log(data.status)
      console.log('Test!')
    })
  }

const myEmailCall = (arg) => {
    console.log("Attempting post with arg", arg);
    axios.post('http://localhost:8080/email',arg ?? 'Nothing sent', { timeout: 5000 }).then((data) => {
      console.log(`Email address is: ${data.data.email}`)
      console.log(data.status)
    }).catch(e => {
        console.log(e);
    })
  }

export default function Headers() {
    const [myName, setMyName] = useState("");
    const [nameChanged, setNameChanged] = useState(0);
    useEffect( () => {
      setNameChanged(() => nameChanged + 1)
    }, 
    [myName])


    const handleSubmit = (event) => {
        event.preventDefault(); // Prevents the default form submission (page reload)
        // Add your API call or any other logic here
        const formData = new FormData(event.target);
        const emailData = formData.get('email'); // Use the 'name' attribute to get the value
      
        console.log("Email Data:", emailData); // This should now output the correct email value
        myEmailCall({ email: emailData });
        setMyName(''); //clearing email field after submission
        // myEmailCall({message:'',data: myName.trim()}); 
        console.log('Form submitted');
      };

    return(
        <div className="App">
        <header className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <h3>Hello! I am Jagpreet Grewal!</h3>
            <p className = "Paragraph-header">
            I am recent SFU graduate, with a <u>B.A.Sc. in Computer Engineering</u>. 
            I like reading, working out, travelling, and many other activies. In the future, I plan on completing a Master's degree in Business or in a Big Data field - 
            right now, I am eager to get into the workplace. I have previous co-op experience with Sierra Wireless and Microserve, where I worked for eight months each.
            </p>
            <form id="myForm" onSubmit={handleSubmit}>
            <label>Alternatively, let me contact you: </label>
            <input 
                type="email" 
                name="email"
                className="myInput" 
                placeholder={myName || "Please type your email..."} 
                value={myName || ''} // requires || to show placeholder when myName is empty string
                onChange={(event) => setMyName(event.target.value)}
            />
            <input 
                type="submit" 
                value="Increment" 
                onClick={() => {
                    setNameChanged(nameChanged + 1); 
                    // setMyName("Submitted!!!"); 
                    setTimeout(() => {
                        console.log("Timeout over");
                    }, 2000);
                  }}
                onSubmit={handleSubmit}
            />
            </form>  
            <p><br /></p>
            <button onClick = {myApiCall}>Make API call</button>
            <p>Test 13425</p>
            <p>Name: {myName}</p>
            <p>Times Changed: {nameChanged}</p>
        </header>
        </div>
    );
}