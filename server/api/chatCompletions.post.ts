import OpenAI from 'openai'

const openai = new OpenAI({
    apiKey: process.env['OPENAI_API_KEY'],
});

export default defineEventHandler(
    async (event) => {
        const body = await readBody(event)
        const prompt = body.prompt
        // console.log(prompt)
        const chatCompletion = await openai.chat.completions.create({
            messages: [{ role: 'user', content: prompt }],
            model: 'gpt-4',
        })
        // console.log(chatCompletion)
        const msg = chatCompletion.choices[0].message.content
        // console.log(msg)
        return msg
    }
)