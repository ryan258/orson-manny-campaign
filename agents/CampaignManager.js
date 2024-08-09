// agents/CampaignManager.js
const axios = require('axios')

class CampaignManager {
  constructor() {
    this.apiUrl = process.env.API_URL
    this.modelName = process.env.MODEL_NAME
  }

  async startCampaign() {
    console.log('Starting the campaign...')
    // Implement the campaign workflow here
    await this.coordinateAgents()
  }

  async coordinateAgents() {
    // Coordinate with other agents
    const strategy = await this.getContentStrategy()
    const content = await this.createContent(strategy)
    await this.publishContent(content)
  }

  async getContentStrategy() {
    // Interact with Content Strategy Agent
    const prompt = "Develop a content strategy for Orson and Manny's campaign"
    const strategy = await this.getAIResponse(prompt)
    console.log('Content Strategy:', strategy)
    return strategy
  }

  async createContent(strategy) {
    // Interact with Content Creation Agent
    const prompt = `Create content based on this strategy: ${strategy}`
    const content = await this.getAIResponse(prompt)
    console.log('Created Content:', content)
    return content
  }

  async publishContent(content) {
    // Interact with Orson and Manny Agents to publish content
    await this.publishAsOrson(content)
    await this.publishAsManny(content)
  }

  async publishAsOrson(content) {
    const prompt = `As Orson, post this content: ${content}`
    const orsonPost = await this.getAIResponse(prompt)
    console.log('Orson posted:', orsonPost)
  }

  async publishAsManny(content) {
    const prompt = `As Manny, post this content: ${content}`
    const mannyPost = await this.getAIResponse(prompt)
    console.log('Manny posted:', mannyPost)
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
      return 'Error occurred while generating content'
    }
  }
}

module.exports = CampaignManager
