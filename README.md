# Orson and Manny's Campaign Manager Application

## Description

This NodeJS application manages the social media campaign for Orson, a stuffed animal cow running for 'Prez', and Manny, a manatee running for 'Vice Prez'. The application uses a multi-agent system to coordinate content strategy, creation, and publishing across various social media platforms. It includes a simple web interface to trigger the workflow and view results.

## Features

- Campaign Manager: Coordinates the overall campaign strategy and agent interactions
- Content Strategy Agent: Develops comprehensive content strategies
- Content Creation Agent: Generates social media content based on the strategy
- Orson Agent: Manages Orson's social media presence and content
- Manny Agent: Manages Manny's social media presence and content
- Integration with local AI model for content generation
- Web interface to trigger workflow and view results

## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- Ollama (for running the local AI model)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/orson-manny-campaign.git
   cd orson-manny-campaign
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Ensure Ollama is running with the specified model:
   ```
   ollama run llama3.1:latest
   ```

## Usage

To start the application, run:

```
npm start
```

The server will start on the port specified in your `.env` file (default is 3000).

To use the web interface:
1. Open a web browser and navigate to `http://localhost:3000` (or whatever port you specified).
2. Click the "Trigger Workflow" button to start the campaign process.
3. View the results displayed on the page.

## Project Structure

```
orson-manny-campaign/
├── agents/
│   ├── CampaignManager.js
│   ├── ContentStrategy.js
│   ├── ContentCreation.js
│   ├── OrsonAgent.js
│   └── MannyAgent.js
├── public/
│   └── index.html
├── app.js
├── .env
├── package.json
└── README.md
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Acknowledgments

- Thanks to Anthropic for providing the AI model capabilities.
- Inspired by the whimsical world of stuffed animal politics.

## Contact

For any queries or suggestions, please open an issue in the GitHub repository.
