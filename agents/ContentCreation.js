const axios = require('axios')

class ContentCreation {
  constructor() {
    this.apiUrl = process.env.API_URL
    this.modelName = process.env.MODEL_NAME
  }

  async createContent(strategy) {
    console.log('Creating content based on strategy...')
    try {
      const content = await this.getAIResponse(
        `Create social media content for Orson and Manny based on this strategy: ${strategy}. ` +
          "Include tweets, Instagram post ideas, and meme concepts that reflect Orson's naive, " +
          "optimistic personality and Manny's calm, wise approach. Ensure the content is humorous, " +
          'relevant to current events, and showcases the dynamic between Orson and Manny.'
      )
      console.log('Content created:', content)
      return content
    } catch (error) {
      console.error('Error creating content:', error)
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

module.exports = ContentCreation
