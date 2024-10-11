
import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img from '../assets/contact-bg.jpg'

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle signup logic, like an API call
      console.log({ name, email, password });
      // On success, navigate to login page or another page
      navigate('/login');
    };
  return (
    <div className=" container mx-auto  ">
        <div className='mt-10 flex flex-col md:flex-row justify-center items-center gap-2'>
            <div className='flex justify-center items-center '>
                <form className="p-6 rounded bg-slate-100" onSubmit={handleSubmit}>
                    <h2 className="text-xl font-bold mb-4">Sign Up</h2>
                    <div className="mb-4">
                    <label className="block text-gray-700">Name:</label>
                    <input
                        type="text"
                        className="border p-2 w-full"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    </div>
                    <div className="mb-4">
                    <label className="block text-gray-700">Email:</label>
                    <input
                        type="email"
                        className="border p-2 w-full"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    </div>
                    <div className="mb-4">
                    <label className="block text-gray-700">Password:</label>
                    <input
                        type="password"
                        className="border p-2 w-full"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    </div>
                    <button type="submit" className="bg-red-500 w-full text-white py-2 px-4 rounded">
                    Sign Up
                    </button>
                    <p className="mt-4">
                    Already have an account?{' '}
                    <a href="/login" className="text-blue-500">
                        Log in
                    </a>
                    </p>
                </form>
            </div>
            <div className='w-[330px] md:w-[560px] '>
                <img src={img} className=' rounded-3xl'/>
            </div>
        </div>
    </div>
  );
}

export default Signup;
