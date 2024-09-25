import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import OAuth from '../components/OAuth';
import family from '../assets/family.png';
import { toast } from 'react-toastify'; // Assuming you're using react-toastify for notifications

export default function SignUpAdmin() {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        pwd: '',
        age: '',
        phone_no: '',
        salary: '',
        experience: '',
    });
    const [gender, setGender] = useState('');
    const [role, setRole] = useState('');
    const [isGenderDropdownOpen, setIsGenderDropdownOpen] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
    };

    const handleGenderSelect = (selectedGender) => {
        setGender(selectedGender);
        setIsGenderDropdownOpen(false); // Close dropdown after selection
    };

    const handleRoleChange = (event) => {
        const selectedRole = event.target.value;
        setRole(selectedRole);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log('Submit button clicked!');  // To check if the submit button is clicked

        // Validate form data
        if (!formData.name || !formData.email || !formData.password || !formData.pwd || !formData.experience || !formData.age || !formData.salary || !formData.phone_no) {
            return toast.error('Please fill out all fields!');
        }
        if (formData.password !== formData.pwd) {
            return toast.error('Passwords do not match!');
        }
        if (!gender) {
            return toast.error('Please select a gender!');
        }
        if (!role) {
            return toast.error('Please select a role!');
        }

        try {
            setLoading(true);

            const finalFormData = {
                name: formData.name,
                email: formData.email,
                password: formData.password,
                age: Number(formData.age),
                phone: Number(formData.phone_no),
                charge: Number(formData.salary),
                gender: gender === 'Male' ? 'M' : gender === 'Female' ? 'F' : 'O', // Adjust to match your backend
                profession: role.toLowerCase(),
            };

            console.log('Final Data to Send: ', finalFormData);  // Log final form data being sent

            const res = await fetch('/api/admin/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(finalFormData),
            });

            const data = await res.json();
            console.log('Response: ', data);  // Log the response from the server
            setLoading(false);

            if (!res.ok) {
                return toast.error(data.message || 'Error signing up');
            }

            toast.success('Sign-up successful!');
            navigate('/sign-in');
        } catch (err) {
            setLoading(false);
            console.error('Error during sign-up: ', err);  // Log errors
            toast.error('Internet not connected or server error!');
        }
    };

    return (
        <div>
            <div className='flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900'>
                <div className='w-full max-w-md mx-4 sm:mx-8 p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg mt-5 mb-5'>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                        <div className='flex items-center justify-center gap-2 pb-4'>
                            <img src={family} height={60} width={60} alt="logo" />
                            <span className='text-[#6531e0] text-3xl font-extrabold'>CareBuddy</span>
                        </div>

                        <input type="text" size={40} placeholder='Full Name' className='border border-slate-600 p-3 rounded-lg' id='name' onChange={handleChange} />
                        <input type="email" placeholder='E-mail address' className='border border-slate-600 p-3 rounded-lg' id='email' onChange={handleChange} />
                        <input type="password" placeholder='Password' className='border border-slate-600 p-3 rounded-lg' id='password' onChange={handleChange} />
                        <input type="password" placeholder='Re-type Password' className='border border-slate-600 p-3 rounded-lg' id='pwd' onChange={handleChange} />
                        <input type="number" placeholder='Enter your age' className='border border-slate-600 p-3 rounded-lg' id='age' onChange={handleChange} />
                        <input type="number" placeholder='Experience' className='border border-slate-600 p-3 rounded-lg' id='experience' onChange={handleChange} />
                        <input type="number" placeholder='Expected Salary' className='border border-slate-600 p-3 rounded-lg' id='salary' onChange={handleChange} />
                        <input type="number" placeholder='Enter your Phone-no.' className='border border-slate-600 p-3 rounded-lg' id='phone_no' onChange={handleChange} />

                        {/* Custom Gender Dropdown */}
                        <div className="relative">
                            <button
                                className='border border-slate-600 p-3 rounded-lg w-full text-left'
                                onClick={(e) => {
                                    e.preventDefault();
                                    setIsGenderDropdownOpen(!isGenderDropdownOpen);
                                }}
                            >
                                {gender ? gender : 'Select Gender'}
                            </button>
                            {isGenderDropdownOpen && (
                                <div className='absolute z-10 mt-1 bg-white border border-slate-600 rounded-lg w-full'>
                                    <div
                                        className='p-2 hover:bg-primary cursor-pointer'
                                        onClick={() => handleGenderSelect('Male')}
                                    >
                                        Male
                                    </div>
                                    <div
                                        className='p-2 hover:bg-primary cursor-pointer'
                                        onClick={() => handleGenderSelect('Female')}
                                    >
                                        Female
                                    </div>
                                    <div
                                        className='p-2 hover:bg-primary cursor-pointer'
                                        onClick={() => handleGenderSelect('Other')}
                                    >
                                        Other
                                    </div>
                                </div>
                            )}
                        </div>
                        
                        {/* Role Selection (Radio Buttons) */}
                        <div className='flex flex-col gap-2'>
                            <label className='font-semibold'>Sign up as:</label>
                            <div className='flex items-center gap-4'>
                                <label>
                                    <input
                                        type="radio"
                                        value="Caretaker"
                                        checked={role === 'Caretaker'}
                                        onChange={handleRoleChange}
                                        className='mr-2'
                                    />
                                    Caretaker
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        value="Babysitter"
                                        checked={role === 'Babysitter'}
                                        onChange={handleRoleChange}
                                        className='mr-2'
                                    />
                                    Babysitter
                                </label>
                            </div>
                        </div>

                        <div className='flex gap-4 items-center'>
                            <input type="checkbox" id='privacy' />
                            <label className='text-sm'>I would like to receive communications from<br /> CareBuddy according to the Privacy Policy.**</label>
                        </div>

                        <button type='submit' className='bg-[#6531e0] text-white text-lg outline rounded-full p-2 px-5 hover:text-white hover:bg-[#6531e0]'>
                            {loading ? 'Signing Up...' : 'Sign Up'}
                        </button>

                        <OAuth />

                        <div className='flex flex-col items-center gap-2 mt-4'>
                            <div className='flex gap-2 items-center'>
                                <p className='text-slate-500 text-sm'>Already have an account?</p>
                                <Link to='/sign-in'>
                                    <span className='text-[#6531e0] text-sm hover:underline'>Sign in</span>
                                </Link>
                            </div>
                            <Link to='/sign-up'>
                                <span className='text-[#6531e0] text-sm hover:underline'>Sign up as Customer</span>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
