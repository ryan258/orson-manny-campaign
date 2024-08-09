const axios = require('axios')

class ContentStrategy {
  constructor() {
    this.apiUrl = process.env.API_URL
    this.modelName = process.env.MODEL_NAME
  }

  async developStrategy() {
    console.log('Developing content strategy...')
    try {
      const strategy = await this.getAIResponse(
        "Develop a comprehensive content strategy for Orson and Manny's campaign. " +
          'Include daily, weekly, and monthly themes focusing on humor, political satire, ' +
          "and positive messages aligned with current political events. Highlight Orson's " +
          "naive optimism and Manny's calm wisdom."
      )
      console.log('Strategy developed:', strategy)
      return strategy
    } catch (error) {
      console.error('Error developing strategy:', error)
      throw error
    }
  }

  async getAIResponse(prompt) {
    try {
      const response = await axios.post(this.apiUrl, {
        model: this.modelName,
        prompt: prompt,
      })
      if (response.data && response.data.response) {
        return response.data.response
      } else {
        throw new Error('Invalid response from AI model')
      }
    } catch (error) {
      console.error('Error getting AI response:', error)
      throw error
    }
  }
}

module.exports = ContentStrategy
