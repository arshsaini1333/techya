/* -------------------- DATA -------------------- */

const techData = {
  "Web Dev": [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "SCSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "SQL",
    "Angular"
  ],

  "Computer Vision": [
    "OpenCV",
    "YOLO",
    "TensorFlow",
    "PyTorch",
    "MediaPipe",
    "Face Recognition",
    "Tesseract OCR",
    "Real-time Detection"
  ],

  "Web Scraping": [
    "Selenium",
    "Playwright",
    "Puppeteer",
    "BeautifulSoup",
    "Scrapy",
    "Requests",
    "SerpAPI",
    "Proxy Management",
    "Headless Browsers",
    "CAPTCHA Solving"
  ],

  "Generative AI": [
    "OpenAI GPT",
    "Llama",
    "LangChain",
    "Pinecone",
    "FAISS",
    "RAG",
    "Neo4j",
    "Fine-tuning",
    "Hugging Face",
    "Diffusion Models"
  ],

  "Agentic AI": [
    "LangChain",
    "CrewAI",
    "Zapier",
    "n8n",
    "Multi-agent Systems",
    "Human-in-the-loop"
  ],

  "Machine Learning": [
    "Scikit-learn",
    "TensorFlow",
    "PyTorch",
    "Keras",
    "XGBoost",
    "LightGBM",
    "Pandas",
    "NumPy",
    "Feature Engineering"
  ],

  "Cloud": [
    "AWS EC2",
    "AWS S3",
    "AWS Lambda",
    "AWS CloudFront",
    "DynamoDB",
    "SageMaker",
    "EKS",
    "GKE",
    "BigQuery",
    "Vertex AI",
    "Azure ML",
    "Azure Functions",
    "Blob Storage",
    "Cosmos DB"
  ],

  "Algo Trading": [
    "Binance",
    "CCXT",
    "Python",
    "Candlestick Patterns",
    "Technical Indicators",
    "Risk Management",
    "Market Making",
    "Order Management"
  ],

  "Blockchain": [
    "Solana",
    "Ethereum",
    "Smart Contracts",
    "Web3.js",
    "Liquidity Pools",
    "AMMs",
    "NFTs",
    "IPFS",
    "Hardhat",
    "Truffle",
    "Anchor"
  ]
};

/* -------------------- LOCAL ICON MAP -------------------- */
/* Path: /static/media/technologies */

const ICON_BASE = "/static/media/technologies/";

const techIcons = {
  // Web
  HTML: ICON_BASE + "icons8-html-96.png",
  CSS: ICON_BASE + "icons8-css-96.png",
  JavaScript: ICON_BASE + "icons8-js-96.png",
  "React.js": ICON_BASE + "icons8-react-96.png",
  "Next.js": ICON_BASE + "icons8-nextjs-96.png",
  "Tailwind CSS": ICON_BASE + "icons8-tailwind-css-96.png",
  SCSS: ICON_BASE + "icons8-sass-96.png",
  "Node.js": ICON_BASE + "icons8-nodejs-96.png",
  "Express.js": ICON_BASE + "icons8-express-js-96.png",
  MongoDB: ICON_BASE + "icons8-mongo-db-96.png",
  SQL: ICON_BASE + "icons8-sql-96.png",
  Angular: ICON_BASE + "icons8-angular-96.png",

    // Agentic AI
    CrewAI: ICON_BASE + "crewai-color.png",
    Zapier: ICON_BASE + "icons8-zapier-96.png",
    n8n: ICON_BASE + "n8n.webp",
    "Multi-agent Systems": ICON_BASE + "multi-agent-system.png",
    "Human-in-the-loop": ICON_BASE + "humaninloop.webp",
  

  // Computer Vision
  OpenCV: ICON_BASE + "icons8-opencv-96.png",
  YOLO: ICON_BASE + "icons8-yolo-96.png",
  TensorFlow: ICON_BASE + "icons8-tensorflow-96.png",
  PyTorch: ICON_BASE + "icons8-pytorch-96.png",
  MediaPipe: ICON_BASE + "mediapipe.png",
  "Face Recognition": ICON_BASE + "icons8-face-recognition-96.png",
  "Tesseract OCR": ICON_BASE + "tessercart.png",
  "Real-time Detection": ICON_BASE + "icons8-detection-96.png",

  // Scraping
  Selenium: ICON_BASE + "icons8-selenium-96.png",
  Playwright: ICON_BASE + "Playwright--Streamline-Svg-Logos.svg",
  Puppeteer: ICON_BASE + "icons8-puppet-96.png",
  BeautifulSoup: ICON_BASE + "beautifulsoup.png",
  Scrapy: ICON_BASE + "scrapy-128px.png",
  Requests: ICON_BASE + "water.png",
  "SerpAPI": ICON_BASE + "seraapi.png",
  "Proxy Management": ICON_BASE + "icons8-proxy-server-96.png",
  "Headless Browsers": ICON_BASE + "headless.png",
  "CAPTCHA Solving": ICON_BASE + "captcha.png",

  // Gen AI
  "OpenAI GPT": ICON_BASE + "icons8-chatgpt-96.png",
  Llama: ICON_BASE + "icons8-llama-96.png",
  LangChain: ICON_BASE + "langchain.webp",
  Pinecone: ICON_BASE + "pine-cone.png",
  FAISS: ICON_BASE + "faiss.png",
  Neo4j: ICON_BASE + "icons8-neo4j-96.png",
  "Hugging Face": ICON_BASE + "icons8-hugging-face-96.png",
  RAG: ICON_BASE + "rag.png",
  "Diffusion Models": ICON_BASE + "diffusion.png",

  // ML
  "Scikit-learn": ICON_BASE + "scikit-learn.png",
  Keras: ICON_BASE + "Keras.png",
  XGBoost: ICON_BASE + "xgboost.png",
  LightGBM: ICON_BASE + "lightgbm-logo.png",
  Pandas: ICON_BASE + "icons8-pandas-96.png",
  NumPy: ICON_BASE + "icons8-numpy-96.png",

  // Cloud
  "AWS EC2": ICON_BASE + "aws-ec2.svg",
  "AWS S3": ICON_BASE + "aws-s3.svg",
  "AWS Lambda": ICON_BASE + "icons8-awslambda-96.png",
  "AWS CloudFront": ICON_BASE + "icons8-aws-cloudfront-96.png",
  DynamoDB: ICON_BASE + "DynamoDB.png",
  SageMaker: ICON_BASE + "segamaker.webp",
  EKS: ICON_BASE + "eks.png",
  GKE: ICON_BASE + "gke.svg",
  BigQuery: ICON_BASE + "bigquery.svg",
  "Vertex AI": ICON_BASE + "vertexai.png",
  "Azure ML": ICON_BASE + "azure-Machine-Learning.svg",
  "Azure Functions": ICON_BASE + "azure-function.jpg",
  "Blob Storage": ICON_BASE + "blob-storage.png",
  "Cosmos DB": ICON_BASE + "azure-cosmos-db.png",

  // Trading
  Binance: ICON_BASE + "binance.png",
  CCXT: ICON_BASE + "ccxt.png",
  Python: ICON_BASE + "icons8-python-96.png",
  "Candlestick Patterns": ICON_BASE + "candlestick.png",
  "Technical Indicators": ICON_BASE + "technicalndicator.png",
  "Risk Management": ICON_BASE + "icons8-risk-management-96.png",
  "Market Making": ICON_BASE + "marketmaking.png",
  "Order Management": ICON_BASE + "icons8-order-management-96.png",

  // Blockchain
  Ethereum: ICON_BASE + "icons8-ethereum-96.png",
  Solana: ICON_BASE + "solana.png",
  "Smart Contracts": ICON_BASE + "smart-contracts.png",
  "Web3.js": ICON_BASE + "web3.png",
  NFTs: ICON_BASE + "nft.png",
  IPFS: ICON_BASE + "ipfs--Streamline-Simple-Icons.svg",
  Hardhat: ICON_BASE + "hard-hat.png",
  Truffle: ICON_BASE + "black-truffle.png",
  Anchor: ICON_BASE + "anchor.png"
};

/* -------------------- ICON RESOLVER -------------------- */

function getIconUrl(tech) {
  return techIcons[tech] || ICON_BASE + "business.png";
}

/* -------------------- SLIDER -------------------- */

function updateSlider(category) {
  const track = document.getElementById("sliderTrack");
  const items = techData[category];
  if (!track || !items) return;

  document.querySelectorAll(".cat-btn").forEach(btn => {
    btn.classList.toggle("active", btn.innerText === category);
  });

  track.innerHTML = [...items, ...items]
    .map(
      tech => `
      <div class="tech-card">
        <img class="tech-icon" src="${getIconUrl(tech)}" alt="${tech}" loading="lazy" />
        <span class="tech-name">${tech}</span>
      </div>
    `
    )
    .join("");

  track.style.animation = "none";
  requestAnimationFrame(() => {
    track.style.animation = "scroll 30s linear infinite";
  });
}

/* -------------------- INIT -------------------- */

document.addEventListener("DOMContentLoaded", () => {
  updateSlider("Web Dev");
});
