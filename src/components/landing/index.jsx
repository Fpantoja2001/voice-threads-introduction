import './main.scss'

export default function Landing(){
    return (
        <div className='wrapperLanding'>
            <div className='landing'>
                <div className='imageHolder'>
                    <img src={require("./images/image1.JPG")} alt="Me in a museum, located in Siena, Italy."/> 
                    <img src={require("./images/image2.JPG")} alt="Me in front of a condom dispenser."/> 
                </div>
                
                <div className='Q'><div>Q:</div>Your name and pronouns. </div>
                <div className='A'><div>A:</div>My name is Felix Manuel Pantoja and my pronouns are He\Him.</div>

                <div className='Q'><div>Q:</div>One thing that you enjoy doing.</div>
                <div className='A'><div>A:</div>Picking one thing is extremely hard, however, playing basketball is my aboslute favorite thing to do. </div>

                <div className='Q'><div>Q:</div>One thing you do that makes you feel good or feel proud of.</div>
                <div className='A'><div>A:</div>Beating the odds and or seeing minorities prosper.</div>

                <div className='Q'><div>Q:</div>One time you've felt out of place at CICS (in your classes, in the dorms, labs, etc.).</div>
                <div className='A'><div>A:</div>I dont think CICS itself makes me feel out of place, but sometimes imposter syndrome does loom.</div>

                <div className='Q'><div>Q:</div>What you are looking forward to in this course.</div>
                <div className='A'><div>A:</div>I am look towards learning new things, especially in the AI/ML field.</div>
            </div>
        </div>
    )
}