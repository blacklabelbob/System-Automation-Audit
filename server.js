const express = require('express');
const cors = require('cors');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

app.post('/api/tailor-questionnaire', async (req, res) => {
  const { businessType } = req.body;

  const prompt = `Given a business type of "${businessType}", generate a tailored set of questions for a systems automation audit questionnaire. The questions should be relevant to the specific industry and focus on areas where automation could be beneficial. Return the questions in a JSON format with question text and possible answer options.`;

  try {
    const response = await axios.post(
      'https://api.anthropic.com/v1/completions',
      {
        model: "claude-2",
        prompt: prompt,
        max_tokens_to_sample: 1000,
        temperature: 0.7,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': ANTHROPIC_API_KEY,
        },
      }
    );

    const tailoredQuestions = JSON.parse(response.data.completion);
    res.json(tailoredQuestions);
  } catch (error) {
    console.error('Error calling Anthropic API:', error);
    res.status(500).json({ error: 'Failed to generate tailored questionnaire' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});