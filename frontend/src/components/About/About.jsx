import "./index.css";
import Section from "./sectionComponent";
function About() {
    let data = [
        {
            name:"Bhavesh Gadling",
            job:"Frontend Developer",
            workDone:"Building user-friendly UI, integrating Backend and interfaces for pilgrims."
        },
        {
            name:"Aditi Bhise",
            job:"API integration & System Glue",
            workDone:"Connecting Backend Data with Frontend features and all Api related work."
        },
        {
            name:"Sangram Lohkare",
            job:"Backend And Data Handling",
            workDone:"Managing data Storage, retrieal and ensuring realible access during user load."
        }]
    return (
        <div className="min-h-screen flex flex-col bg-[#FAF7EB]">
            <div className="mt-36 text-center text-[#2F3025] text-3xl"
                id="about">
                <p className="text-wrap text-5xl" id="about">
                    About
                </p>
            </div>
            <div className="flex justify-center mt-4">
                <div className="text-center w-[380px] align-middle justify-center">
                    <p>
                        Saarthi guides Pilgrims through health, safety and
                        hygiene During Simhasta 2028.
                    </p>
                </div>
            </div>
            { /* About Section*/}
            <div className="text-center mt-12 text-[#2F3025]" id="about">
                <p className="text-wrap text-2xl">Our Story</p>
            </div>
            <div className="flex justify-center mt-4">
                <div className="text-center w-[350px] align-middle justify-center">
                    <p>
                        In Ancient texts, Saarthi (charioteer) is the guide who
                        helps navigate safely, Similarly, our app Saarthi guides
                        millions of pilgrims through health, safety and hygiene
                        during Simhasta 2028.
                    </p>
                </div>
            </div>
            <div className="text-center mt-7 text-[#2F3025]" id="about">
                <p className="text-wrap text-2xl">Meet The Team</p>
            </div>
            {/* this will be the */}
            <div className="">
                {data.map(data => <Section data={data}/>)}
            </div>
        </div>
    );
}
export default About;