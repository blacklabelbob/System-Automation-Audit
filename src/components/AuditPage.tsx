import React, { useEffect, useState } from 'react';
import Summary from './Summary';
import CurrentSystem from './CurrentSystem';
import FutureSystem from './FutureSystem';
import Solutions from './Solutions';
import Insights from './Insights';
import QuestionnaireResults from './QuestionnaireResults';
import { sendAuditResults } from '../utils/sendEmail';

const AuditPage: React.FC = () => {
  const [landingData, setLandingData] = useState<any>(null);
  const [questionnaireData, setQuestionnaireData] = useState<any>(null);

  useEffect(() => {
    const landing = localStorage.getItem('landingFormData');
    const questionnaire = localStorage.getItem('questionnaireData');
    if (landing) setLandingData(JSON.parse(landing));
    if (questionnaire) setQuestionnaireData(JSON.parse(questionnaire));
  }, []);

  useEffect(() => {
    if (landingData && questionnaireData) {
      const auditResults = `
        Client Information:
        Name: ${landingData.name}
        Business Name: ${landingData.businessName}
        Business Type: ${landingData.businessType}
        Email: ${landingData.email}

        Questionnaire Results:
        ${Object.entries(questionnaireData)
          .map(([key, value]) => `${key}: ${value}`)
          .join('\n')}
      `;

      sendAuditResults(
        'rob@aivoicetech.io',
        'Systems Automation Audit Results',
        auditResults,
        auditResults.replace(/\n/g, '<br>')
      );
    }
  }, [landingData, questionnaireData]);

  if (!landingData || !questionnaireData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h1 className="text-3xl font-bold mb-6">Systems Automation Audit</h1>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Client Information</h2>
        <p>Name: {landingData.name}</p>
        <p>Business Name: {landingData.businessName}</p>
        <p>Business Type: {landingData.businessType}</p>
        <p>Email: {landingData.email}</p>
      </div>
      <div className="space-y-8">
        <Summary />
        <CurrentSystem />
        <FutureSystem />
        <Solutions />
        <Insights />
        <QuestionnaireResults data={questionnaireData} />
      </div>
    </div>
  );
};

export default AuditPage;