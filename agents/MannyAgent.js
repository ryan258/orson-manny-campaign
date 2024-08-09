// agents/MannyAgent.js
const axios = require('axios')

class MannyAgent {
  constructor() {
    this.apiUrl = process.env.API_URL
    this.modelName = process.env.MODEL_NAME
  }

  async postContent(content) {
    console.log('Posting as Manny...')
    const mannyPost = await this.getAIResponse(
      `As Manny, the manatee running for 'Vice Prez', create a social media post based on this content: ${content}. ` +
        "Ensure the post reflects Manny's calm and wise demeanor. The post should offer gentle insights " +
        "into political events and spread messages of harmony, complementing Orson's boundless optimism."
    )
    return mannyPost
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
      return "Error occurred while generating Manny's post"
    }
  }
}

module.exports = MannyAgent
