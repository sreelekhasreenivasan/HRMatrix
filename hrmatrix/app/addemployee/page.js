'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';

const Page = () => {

    const router = useRouter();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        department: '',
        phoneNumber: '',
        personalId: '',
        email: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const response = await fetch('/api/addemployee', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert('Employee added successfully!');
            router.push('/manageemployee'); 
        } else {
            alert('Error adding employee');
        }
    };

    return (
        <>
            <Header />
            <div className="body">
                <div className="position-relative">
                    <h2 className="text-center pt-5 text-white fw-semibold">ADD EMPLOYEE</h2>
                    <div className="form-container">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">FULL NAME <span style={{ color: 'red' }}>*</span></label>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <input type="text" name="firstName" className="form-control" placeholder="First Name" required onChange={handleChange} />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" name="lastName" className="form-control" placeholder="Last Name" required onChange={handleChange} />
                                    </div>
                                </div>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">DEPARTMENT <span style={{ color: 'red' }}>*</span></label>
                                <select className="form-control" name="department" required onChange={handleChange}>
                                    <option value="">Select a department</option>
                                    <option value="Class A">Class A</option>
                                    <option value="Class B">Class B</option>
                                    <option value="Class C">Class C</option>
                                    <option value="Class D">Class D</option>
                                </select>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">PHONE NUMBER <span style={{ color: 'red' }}>*</span></label>
                                <input type="text" name="phoneNumber" className="form-control" required onChange={handleChange} />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">PERSONAL IDENTIFICATION <span style={{ color: 'red' }}>*</span></label>
                                <input type="text" name="personalId" className="form-control" placeholder="Adhaar Number/ Voter's ID/ PAN Card ID" required onChange={handleChange} />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">EMAIL ADDRESS <span style={{ color: 'red' }}>*</span></label>
                                <input type="email" name="email" className="form-control" required onChange={handleChange} />
                            </div>

                            <button type="submit" className="btn btn-submit mt-4 w-100">SUBMIT</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;
