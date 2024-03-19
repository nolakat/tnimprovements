import React, { useState, useEffect } from 'react';

function PopupForm({ isPopupVisible, setIsPopupVisible }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState('');


  useEffect(() => {
    if (isPopupVisible) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = 'unset'; // Enable scrolling
    }
  }, [isPopupVisible]); // This effect depends on `isPopupVisible`

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formData);
  //   alert('Form submitted. Check console for data.');
  //   setIsPopupVisible(false); // Close the popup after form submission
  // };

  // Function to close the popup
  const handleClose = () => {
    setIsPopupVisible(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading

    console.log('handleSubmit');

    // Simulate an API call
    try {
      // Here you would replace this setTimeout with your actual API call
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate API call delay

      // If successful
      console.log('successful');
      setIsLoading(false);
      setSubmissionMessage('Thank you for your message!');
      // setIsPopupVisible(false); // Optionally close the popup on form submission success
    } catch (error) {
      // If there's an error
      console.log('error');
      setIsLoading(false);
      setSubmissionMessage('An error occurred. Please try again.');
    }
  };

  return (
    <>
      {/* <button
        className="px-4 py-2 text-white transition duration-300 bg-blue-500 rounded hover:bg-blue-700"
        onClick={() => setIsPopupVisible(true)}
      >
        Open Form
      </button> */}

      {isPopupVisible && (
        <div
        className="fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ease-out bg-gray-600 bg-opacity-50"
        style={{ animation: 'fadeIn 0.5s' }}

        >
          <div className="relative w-full max-w-lg p-5 px-12 transition-all duration-300 transform bg-white rounded-lg" style={{ animation: 'dropIn 0.5s' }}>

            <button
              onClick={handleClose}
              className="absolute text-gray-400 top-2 right-2 hover:text-gray-600"
            >
              <span className="text-4xl">&times;</span> {/* Close button */}
            </button>



            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="loader">LOADER</div> {/* Add your spinner here */}
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h2 className="mb-8 text-2xl">Get Your Free Estimate</h2>
                <p className="mb-8">Looking for a home upgrade? Fill out the form below to get a free estimate. We'll provide personalized solutions for your project and help turn your vision into reality.</p>

                <input type="hidden" name="form-name" value="contact" />
                <div class="flex flex-col md:flex-row gap-x-8 gap-y-4">
                  <div className="flex flex-row flex-1 w-full gap-x-8">
                    <div className="flex flex-col items-start flex-1">
                      <label className="text-lg" for="name">Name</label>
                      <input className="w-full border-2" type="text" name="firstName" required />
                    </div>
                  </div>
                  <div className="flex flex-col items-start flex-1">
                    <label className="text-lg" for="phone">Phone Number</label>
                    <input className="w-full border-2" type="tel" name="phone" required/>
                  </div>
                </div>
                <div className="flex flex-col items-start mt-7">
                  <label className="text-lg" for="message">Tell Us About Your Project</label>
                  <textarea className="w-full border-2" type="textarea" name="message" required />
                </div>

                <button type="submit" className="block px-6 py-2 m-auto text-lg font-semibold mt-7 min-w-44 w-fit bg-gold-100 text-darkNavy rounded-4xl font-body">Submit</button>


              </form>
            )}

          </div>
        </div>
      )}
    </>
  );
}

export default PopupForm;

// Add the following styles in your CSS file or inside a <style> tag
/*
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes dropIn {
  from { transform: translateY(-20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
*/
