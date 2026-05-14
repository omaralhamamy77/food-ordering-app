import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const OrderForm = () => {
    const navigate = useNavigate();
    const { clearCart } = useCart();

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
        paymentMethod: 'cash',
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.phone) newErrors.phone = 'Phone is required';
        if (!formData.address) newErrors.address = 'Address is required';
        return newErrors;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        clearCart();
        navigate('/confirmation');
    };

    return (
        <div className="container my-5" style={{ maxWidth: '600px' }}>
            <h2 className="text-center mb-4" style={{ color: '#ff6b35' }}>
                📝 Order Details
            </h2>

            <div className="card p-4 shadow-sm" style={{ borderRadius: '15px' }}>
                <form onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <label className="form-label fw-bold">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-bold">Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                            placeholder="Enter your phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-bold">Delivery Address</label>
                        <textarea
                            name="address"
                            className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                            placeholder="Enter your address"
                            rows="3"
                            value={formData.address}
                            onChange={handleChange}
                        />
                        {errors.address && <div className="invalid-feedback">{errors.address}</div>}
                    </div>

                    <div className="mb-4">
                        <label className="form-label fw-bold">Payment Method</label>
                        <select
                            name="paymentMethod"
                            className="form-select"
                            value={formData.paymentMethod}
                            onChange={handleChange}
                        >
                            <option value="cash">Cash on Delivery 💵</option>
                            <option value="card">Credit Card 💳</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="btn w-100"
                        style={{ backgroundColor: '#ff6b35', color: 'white', borderRadius: '10px', padding: '12px' }}
                    >
                        Confirm Order ✅
                    </button>

                </form>
            </div>
        </div>
    );
};

export default OrderForm;