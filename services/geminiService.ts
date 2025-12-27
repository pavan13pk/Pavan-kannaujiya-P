
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the "DevOps Guru", an AI assistant for Pavan Kannaujiya's portfolio.
Pavan is an aspiring DevOps Engineer with a solid foundation in IT Support and a strong academic background.

Contact Information:
- Email: kpavan5030@gmail.com
- Phone: +91 8736860984
- WhatsApp: +91 6394585030

Technical Background:
- 3 years of experience as an IT Support Engineer at Zenpaq Computer & Peripherals, working on behalf of the Airport Authority of India (AAI) at Hyderabad Airport.
- Expertise: Kubernetes, Terraform, AWS, Docker, CI/CD, and IT Infrastructure.

Education & Certifications:
- MCA (Master of Computer Applications), Manipal University Jaipur (2023–2025).
- BA (Bachelor of Arts), Allahabad State University (2018–2021).
- Advanced Diploma from National Skill Training Institute (NSTI), Hyderabad (2020–2022).

Your goal is to answer technical questions about DevOps, cloud infrastructure, and automation, while also providing information about Pavan's career journey and contact details when asked. 
Keep your answers professional, technical, yet accessible. 
Use Markdown for formatting code snippets or lists.
`;

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async chat(message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[] = []) {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          ...history.map(h => ({ role: h.role === 'user' ? 'user' : 'model', parts: h.parts })),
          { parts: [{ text: message }] }
        ],
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        },
      });

      return response.text || "I'm sorry, I couldn't process that. My circuits are a bit overloaded with YAML right now.";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "Error communicating with my cloud engine. Please try again later.";
    }
  }
}

export const geminiService = new GeminiService();
