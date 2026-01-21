import OpenAI from "openai";
import 'dotenv/config';

const client = new OpenAI(
    {
        api_key:process.env.OPENAI_API_KEY,
    }
);

const response = await client.responses.create({
  model: "gpt-4o-mini",
  input: "Write a short bedtime story about a unicorn.",
});

console.log(response.output_text);
