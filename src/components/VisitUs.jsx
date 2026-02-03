import React from 'react'

const VisitUs = () => {
  return (
    <div className='sm:m-10 m-4'>
    <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Visit&nbsp;
        <span className='bg-gradient-to-r from-red-600 to-red-900 text-transparent bg-clip-text'>
            Us </span>
    </h1>
    <div className="flex justify-center mt-10">
        <iframe
            title="Google Maps Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.4812131783876!2d74.46854810208441!3d19.57822017556017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdcf7f7126d5883%3A0xe5ef81c88fd2112c!2sKalpana%20Auto%20(HFH9%2B7CH%2C%20opp.%20BUS%20STAND%2C%20Loni%2C%20Maharashtra%20413736)!5e0!3m2!1sen!2sin!4v1699804779112!5m2!1sen!2sin"
            width="800"
            height="450"
            className="border-0 rounded-lg shadow-md"
            allowFullScreen
            loading="lazy"
        ></iframe>
    </div>

    {/* Button for Directions */}
    <div className="flex justify-center mt-5">
        <a
            href="https://www.google.com/maps/place/Kalpana+Auto/@19.5780303,74.4683418,21z/data=!4m10!1m2!2m1!1sHFH9%2B7CH,+opp.+BUS+STAND,+Loni,+Loni+Bk.,+Maharashtra+413736!3m6!1s0x3bdcf7f7126d5883:0xe5ef81c88fd2112c!8m2!3d19.5782172!4d74.468552!15sCjxIRkg5KzdDSCwgb3BwLiBCVVMgU1RBTkQsIExvbmksIExvbmkgQmsuLCBNYWhhcmFzaHRyYSA0MTM3MzaSARZtb3RvcmN5Y2xlX3JlcGFpcl9zaG9w4AEA!16s%2Fg%2F11ssylyyc5?entry=ttu&g_ep=EgoyMDI0MTExNy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-white px-4 py-3 rounded-lg font-bold shadow-md hover:bg-red-800 transition duration-200"
        >
            Get Directions
        </a>
    </div>

</div>
  )
}

export default VisitUs