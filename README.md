# TechYa Verse Flask Website

A modern Flask-based website for TechYa Verse, featuring separate pages for different sections and an AI-powered chatbot.

## Features

- **Multiple Pages**: Home, About, Services, Portfolio, Contact, and Blog
- **7 Service Pages**: Each service has its own dedicated page accessible via dropdown menu
- **AI Chatbot**: OpenAI-powered chatbot on the home page that responds based on website content
- **Modern UI**: Beautiful, responsive design with animations and interactive elements

## Setup Instructions

1. **Install Dependencies**
   ```bash
   pip install -r requirements.txt
   ```

2. **Set Up Environment Variables**
   Create a `.env` file in the root directory:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   ```

3. **Run the Application**
   ```bash
   python app.py
   ```

4. **Access the Website**
   Open your browser and navigate to `http://localhost:5000`

## Project Structure

```
techya_website/
├── app.py                      # Main Flask application
├── requirements.txt            # Python dependencies
├── .env                        # Environment variables (create this)
├── templates/
│   ├── base.html              # Base template
│   ├── home.html              # Home page with chatbot
│   ├── about.html             # About page
│   ├── services.html          # Services listing page
│   ├── portfolio.html         # Portfolio page
│   ├── contact.html           # Contact page
│   ├── blog.html              # Blog page
│   └── service_pages/         # Individual service pages
│       ├── ai_ml.html
│       ├── web_dev.html
│       ├── neural_networks.html
│       ├── blockchain.html
│       ├── data_science.html
│       ├── cloud_devops.html
│       └── generative_ai.html
└── static/                     # Static files (images, CSS, JS)
    └── techya_verse_logo.jpeg  # Logo file
```

## Pages

- **Home** (`/`): Main landing page with hero section, services overview, and chatbot
- **About** (`/about`): Company information and statistics
- **Services** (`/services`): Overview of all services with links to individual pages
- **Service Pages** (`/services/[service-name]`): Detailed pages for each service
  - AI & Machine Learning
  - Web Development
  - Neural Networks
  - Blockchain & Web3
  - Data Science
  - Cloud & DevOps
  - Generative AI & Agents
- **Portfolio** (`/portfolio`): Showcase of projects and case studies
- **Contact** (`/contact`): Contact form and company information
- **Blog** (`/blog`): Blog posts and articles

## Chatbot

The chatbot on the home page uses OpenAI's GPT-3.5-turbo model to answer questions about TechYa Verse services. It's trained on the website content and provides relevant information about the company's offerings.

## Notes

- Make sure to add your OpenAI API key to the `.env` file
- The logo file should be placed in the `static/` directory
- The application runs in debug mode by default (change in `app.py` for production)

