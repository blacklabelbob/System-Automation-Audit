import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

type FormData = {
  name: string;
  businessName: string;
  businessType: string;
  email: string;
};

const LandingPageForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await axios.post('http://localhost:3001/api/tailor-questionnaire', {
        businessType: data.businessType
      });
      
      const tailoredQuestions = response.data;
      
      localStorage.setItem('landingFormData', JSON.stringify(data));
      localStorage.setItem('tailoredQuestions', JSON.stringify(tailoredQuestions));
      
      navigate('/questionnaire');
    } catch (error) {
      console.error('Error tailoring questionnaire:', error);
      alert('Failed to generate tailored questionnaire. Please try again.');
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Systems Automation Audit - Landing Page</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block mb-2">Name:</label>
          <input {...register("name", { required: true })} className="w-full p-2 border rounded" />
          {errors.name && <span className="text-red-500">This field is required</span>}
        </div>
        <div>
          <label className="block mb-2">Business Name:</label>
          <input {...register("businessName", { required: true })} className="w-full p-2 border rounded" />
          {errors.businessName && <span className="text-red-500">This field is required</span>}
        </div>
        <div>
          <label className="block mb-2">Business Type:</label>
          <input {...register("businessType", { required: true })} className="w-full p-2 border rounded" />
          {errors.businessType && <span className="text-red-500">This field is required</span>}
        </div>
        <div>
          <label className="block mb-2">Email:</label>
          <input {...register("email", { required: true, pattern: /^\S+@\S+$/i })} className="w-full p-2 border rounded" />
          {errors.email && <span className="text-red-500">Please enter a valid email address</span>}
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Continue to Questionnaire
        </button>
      </form>
    </div>
  );
};

export default LandingPageForm;