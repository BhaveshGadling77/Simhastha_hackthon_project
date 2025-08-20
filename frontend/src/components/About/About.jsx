import "./index.css";
import Section from "./sectionComponent";
function About() {
    let data = [
        {
            id:1,
            name:"Bhavesh Gadling",
            job:"Frontend Developer",
            workDone:"Building user-friendly UI, integrating Backend with Frontend and interfaces for pilgrims."
        },
        {
            id:2,
            name:"Aditi Bhise",
            job:"API integration And System Glue",
            workDone:"Connecting Backend Data with Frontend features and all Api related work."
        },
        {
            id:3,
            name:"Sangram Lohkare",
            job:"Backend And Data Handling",
            workDone:"Managing data Storage, retrieal and ensuring realible access during user load."
        }]
    return (
        <div className="min-h-screen flex flex-col ">
            <div className="mt-36 text-center text-navBgC text-3xl"
                id="about">
                <p className="text-wrap text-5xl" id="about">
                    About
                </p>
            </div>
            <div className="flex justify-center mt-4">
                <div className="text-center w-[500px] align-middle justify-center">
                    <p  className="text-xl">
                        Saarthi guides Pilgrims through health, safety and
                        hygiene During Simhasta 2028.
                    </p>
                </div>
            </div>
            { /* About Section*/}
            <div className="text-center mt-12 text-navBgC" id="about">
                <p className="text-wrap text-2xl">Our Story</p>
            </div>
            <div className="flex justify-center mt-4">
                <div className="text-center w-[500px] align-middle justify-center">
                    <p className="">
                        In Ancient texts, Saarthi (charioteer) is the guide who
                        helps navigate safely, Similarly, our app Saarthi guides
                        millions of pilgrims through health, safety and hygiene
                        during Simhasta 2028.
                    </p>
                </div>
            </div>
            <div className="text-center mt-7 text-navBgC" id="about">
                <p className="text-wrap text-2xl">Meet The Team</p>
            </div>
            {/* this will be the */}
            <div className=" justify-center align-middle text-center flex mb-6">
                <div className="flex flex-3 w-[650px] space-x-2">
                {data.map(data => <Section key={data.id} data={data}/>)}
                {/* <Section props={data}/> */}
            </div>
            </div>
        </div>
    );
}
export default About;