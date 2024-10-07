import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

type FormData = {
  [key: string]: string;
};

const Questionnaire: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const navigate = useNavigate();
  const [landingData, setLandingData] = useState<any>(null);
  const [tailoredQuestions, setTailoredQuestions] = useState<any[]>([]);

  useEffect(() => {
    const data = localStorage.getItem('landingFormData');
    const questions = localStorage.getItem('tailoredQuestions');
    if (data) setLandingData(JSON.parse(data));
    if (questions) setTailoredQuestions(JSON.parse(questions));
  }, []);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    localStorage.setItem('questionnaireData', JSON.stringify(data));
    navigate('/audit');
  };

  if (!landingData || tailoredQuestions.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Systems Automation Readiness Questionnaire</h2>
      <p className="mb-4">Business Type: {landingData.businessType}</p>
      <p className="mb-4">Business Name: {landingData.businessName}</p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {tailoredQuestions.map((question, index) => (
          <div key={index}>
            <label className="block mb-2">{question.text}</label>
            {question.type === 'select' ? (
              <select {...register(`question_${index}`, { required: true })} className="w-full p-2 border rounded">
                {question.options.map((option: string, optionIndex: number) => (
                  <option key={optionIndex} value={option}>{option}</option>
                ))}
              </select>
            ) : (
              <input {...register(`question_${index}`, { required: true })} className="w-full p-2 border rounded" />
            )}
            {errors[`question_${index}`] && <span className="text-red-500">This field is required</span>}
          </div>
        ))}
        <button type="submit" className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Questionnaire;
</boltArtifact>

Now, to run the application, you'll need to:

1. Add your Anthropic API key to the `.env` file.
2. Start the backend server.
3. Start the frontend development server.

Here are the commands to do this:

<boltArtifact id="run-application" title="Run the complete application">
<boltAction type="shell">
<command>node server.js</command>