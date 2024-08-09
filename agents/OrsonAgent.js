// agents/OrsonAgent.js
const axios = require('axios')

class OrsonAgent {
  constructor() {
    this.apiUrl = process.env.API_URL
    this.modelName = process.env.MODEL_NAME
  }

  async postContent(content) {
    console.log('Posting as Orson...')
    const orsonPost = await this.getAIResponse(
      `As Orson, the stuffed animal cow running for 'Prez', create a social media post based on this content: ${content}. ` +
        "Ensure the post reflects Orson's naive, optimistic personality and uses his catchphrases. " +
        'The post should be humorous and bring light-hearted positivity to current political events.'
    )
    return orsonPost
  }

  async getAIResponse(prompt) {
    try {
      const response = await axios.post(this.apiUrl, {
        model: this.modelName,
        prompt: prompt,
      })
      return response.data.response
    } catch (error) {
      console.error('Error getting AI response:', error)
      return "Error occurred while generating Orson's post"
    }
  }
}

module.exports = OrsonAgent
