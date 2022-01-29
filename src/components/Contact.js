import React from 'react'

const Contact = () => {
    return (
        <div className="bg-dark py-20 " id="contact">
            <div className="max-w-90 mx-auto">
                <h2 className="text-textColor text-2xl text-center ">Get in touch with me to be work with me</h2>
                <div className="my-7  flex flex-col items-center md:flex-row md:items-stretch">
                    <div className=" space-y-10 md:w-9/12 w-full">
                        <div className="w-full  flex md:items-center md:flex-row flex-col" >
                            <label htmlFor="name" className="md:block font-lower font-bold text-2xl text-white w-1/5 flex md:mr-10">Name <span className="text-xl text-underline">*</span></label>
                            <input type="text" className=" bg-textColor  w-full md:w-3/6 outline-none border-none p-4 rounded text-xl focus:bg-underline text-white" id="name" />
                        </div>
                        <div className="w-full  flex md:items-center md:flex-row flex-col" >
                            <label htmlFor="email" className="md:block font-lower font-bold text-2xl text-white w-1/5 flex md:mr-10">Email <span className="text-xl text-underline">*</span></label>
                            <input type="text" className="bg-textColor  w-full md:w-3/6 outline-none border-none p-4 rounded text-xl focus:bg-underline text-white" id="email" />
                        </div>
                        <div className="w-full  flex md:items-center md:flex-row flex-col" >
                            <label htmlFor="subject" className="md:block font-lower font-bold text-2xl text-white w-1/5 flex md:mr-10">Subject <span className="text-xl text-underline">*</span></label>
                            <input type="text" className="bg-textColor  w-full md:w-3/6 outline-none border-none p-4 rounded text-xl focus:bg-underline text-white" id="subject" />
                        </div>
                        <div className="w-full  flex md:items-center md:flex-row flex-col" >
                            <label htmlFor="message" className="md:block font-lower font-bold text-2xl text-white w-1/5 flex md:mr-10">Message <span className="text-xl text-underline">*</span></label>
                            <textarea rows={5} className="bg-textColor  w-full md:w-3/6 outline-none border-none p-4 rounded text-xl focus:bg-underline text-white select-none" id="message" >
                            </textarea>
                        </div>
                        <div className="md:ml-20">
                            <button className="px-5 py-3 w-full md:w-2/6 mb-4 md:mx-auto bg-background  text-base md:text-xl text-white  rounded-sm mt-2">
                                Submit
                            </button>
                        </div>

                    </div>

                    <div className="lg:-ml-44 ">
                        <div className="space-y-7">
                            <h1 className="text-white font-bold text-2xl font-lower">Contact Details</h1>
                            <p className="text-xl font-lower text-textColor " >Muzammil Rafiq</p>
                            <p className="text-xl font-lower text-textColor " > Gulshan-e-Iqbal</p>
                            <p className="text-xl font-lower text-textColor " > Pakistan Karachi, 75330</p>
                            <p className="text-xl font-lower text-textColor " > +923082725497</p>
                            <p className="text-xl font-lower text-textColor " > malikkath78@gmail.com</p>
                            <button className="px-5 py-3 mx-auto bg-background  text-base md:text-xl text-white  rounded-sm mt-5" >

                                <a href="./resume.pdf" download> Download Resume</a>
                            </button>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
