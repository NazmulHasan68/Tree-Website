// src/pages/Login.js
import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img from '../assets/aboutbanner.jpg'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic, like an API call
    console.log({ email, password });
    // On success, navigate to another page
    navigate('/signup');
  };

  return (
    <div className=" container mx-auto  ">
        <div className='mt-10 flex flex-col md:flex-row justify-center items-center gap-2'>
            <div className='w-[330px] md:w-[460px]'>
                <img src={img} className=' rounded-3xl'/>
            </div>
            <div className='flex justify-center items-center '>
                <form className="p-8 rounded bg-slate-100 w-full" onSubmit={handleSubmit}>
                <h2 className="text-xl font-bold mb-4">Login</h2>
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
                Login
                </button>
                <p className="mt-4">
                Do not have an account?{' '}
                <a href="/signup" className="text-blue-500 ">
                    Sign up
                </a>
                </p>
                </form>
            </div>
        </div>
    </div>
  );
}

export default Login;
