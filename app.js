// app.js
require('dotenv').config()
const express = require('express')
const path = require('path')
const CampaignManager = require('./agents/CampaignManager')
const ContentStrategy = require('./agents/ContentStrategy')
const ContentCreation = require('./agents/ContentCreation')
const OrsonAgent = require('./agents/OrsonAgent')
const MannyAgent = require('./agents/MannyAgent')

const app = express()
const port = process.env.PORT || 3000

// Initialize agents
const campaignManager = new CampaignManager()
const contentStrategy = new ContentStrategy()
const contentCreation = new ContentCreation()
const orsonAgent = new OrsonAgent()
const mannyAgent = new MannyAgent()

// Serve static files
app.use(express.static(path.join(__dirname, 'public')))

// Parse JSON bodies
app.use(express.json())

// Set up routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.post('/trigger-workflow', async (req, res) => {
  try {
    console.log('Workflow triggered')
    const strategy = await contentStrategy.developStrategy()
    console.log('Strategy developed:', strategy)

    const content = await contentCreation.createContent(strategy)
    console.log('Content created:', content)

    const orsonPost = await orsonAgent.postContent(content)
    console.log('Orson post:', orsonPost)

    const mannyPost = await mannyAgent.postContent(content)
    console.log('Manny post:', mannyPost)

    res.json({
      strategy,
      content,
      orsonPost,
      mannyPost,
    })
  } catch (error) {
    console.error('Error in workflow:', error)
    res
      .status(500)
      .json({
        error: 'An error occurred during the workflow',
        details: error.message,
      })
  }
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ error: 'Something went wrong!', details: err.message })
})

module.exports = app
