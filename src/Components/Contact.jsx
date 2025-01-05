import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_dw3chiv', 'template_tc6ejbc', form.current, {
            publicKey: 'OREl3XdEFDkvRoa5K',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              Swal.fire({
                title: 'success!',
                text: 'Send Email SuccessFully',
                icon: 'success',
                confirmButtonText: 'Done'
              })
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };


    return (
        <div id='contact' className="bg-base-200 rounded-lg lg:mx-16 p-6 mt-12" >
            <h2 className="text-4xl font-bold text-center pt-4 drop-shadow-xl">Contact Information</h2>
            <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-lg flex flex-col lg:flex-row lg:items-center gap-8 mt-8">
                <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4">Send an Email</h3>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-base font-medium mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name='from_name'
                                className="w-full px-4 py-2 border rounded-lg"
                                placeholder="Your Name"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-base font-medium mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name='from_email'
                                className="w-full px-4 py-2 border rounded-lg"
                                placeholder="Your Email"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-base mb-1 font-medium">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name='message'
                                rows="5"
                                className="w-full px-4 py-2 h-20 border rounded-lg"
                                placeholder="Your Message"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-warning"
                        >
                            Send Email
                        </button>
                    </form>
                </div>
                <div className="flex-1 space-y-4">
                    <div >
                        <p className="text-lg font-bold ">Name : <span className='text-blue-600 text-base'>Md Murad Hossain</span></p>
                    </div>
                    <div>
                        <p className="text-lg font-bold ">Address : <span className='text-blue-600 text-base'>Narayanganj, Dhaka, Bangladesh</span></p>
                    </div>
                    <div>
                        <p className="text-lg font-bold ">Email : <span className='text-blue-600 text-base'>muradssq12@gmail.com</span></p>
                    </div>
                    <div>
                        <p className="text-lg font-bold">WhatsApp : <span className='text-blue-600 text-base'>+8801872687900</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;