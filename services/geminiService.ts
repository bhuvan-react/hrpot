
import { GoogleGenAI, Type } from "@google/genai";
import { UserProfile, Experience } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const parseResume = async (resumeText: string): Promise<Partial<UserProfile>> => {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Parse the following resume text and return a JSON object with: 
      name, jobTitle, and an array of experience objects (each with title, company, period, description).
      Resume text: ${resumeText}`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          name: { type: Type.STRING },
          jobTitle: { type: Type.STRING },
          experience: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                title: { type: Type.STRING },
                company: { type: Type.STRING },
                period: { type: Type.STRING },
                description: { type: Type.STRING },
              },
              required: ["title", "company", "period", "description"]
            }
          }
        },
        required: ["name", "jobTitle", "experience"]
      }
    }
  });

  try {
    return JSON.parse(response.text || '{}');
  } catch (e) {
    console.error("Failed to parse Gemini response", e);
    return {};
  }
};

export const calculateMatchScore = async (userProfile: UserProfile, jobDescription: string): Promise<number> => {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Compare this user profile to this job description and provide a match percentage (0-100).
      Profile: ${JSON.stringify(userProfile)}
      Job: ${jobDescription}
      Return only the number.`,
  });

  const score = parseInt(response.text || '0', 10);
  return isNaN(score) ? 0 : score;
};
