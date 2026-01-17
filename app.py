from flask import Flask, render_template, request, jsonify, flash, redirect, url_for
from openai import OpenAI
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
app.secret_key = os.getenv('SECRET_KEY', 'your-secret-key-change-in-production')

# Configure OpenAI - Get API key from .env file
openai_api_key = os.getenv('OPENAI_API_KEY')
if not openai_api_key:
    raise ValueError("OPENAI_API_KEY not found in .env file. Please add your OpenAI API key to the .env file.")

client = OpenAI(api_key=openai_api_key)

# Website content for chatbot context
WEBSITE_CONTENT = """
TechYa Verse is a premium technology service provider specializing in:
- AI & Machine Learning: Intelligent systems that learn, adapt, and make data-driven decisions including predictive analytics, natural language processing, computer vision, and autonomous systems.
- Advanced Web Development: Immersive, high-performance web applications using modern frameworks, progressive web apps, real-time data streaming, and interactive 3D experiences.
- Neural Networks & Deep Learning: Sophisticated neural architectures for complex pattern recognition, generative models, and advanced predictive systems.
- Blockchain & Web3 Solutions: Decentralized applications, smart contracts, and token economies that revolutionize trust, transparency, and digital ownership.
- Data Science & Analytics: Transform raw data into actionable insights with advanced statistical modeling, data visualization, and business intelligence solutions.
- Cloud & DevOps: Scalable cloud infrastructure, microservices architecture, and automated deployment pipelines for robust and efficient systems.
- Generative AI & Agent Systems: Advanced AI agents and generative models for autonomous decision-making and content generation.

We have 5+ years of specialized expertise in AI, Web Development, and Cloud technologies. We build innovative solutions in Generative AI, Agent Systems, Computer Vision, Algorithmic Trading, and Web Scraping.

Contact Information:
- Location: India
- Phone: +91 1234567899
- Email: ai@techyaverse.com
- Working Hours: Monday - Monday: 9:00 AM - 10:00 PM

Our mission is to empower businesses with Intelligent Solutions for a Connected Future.
"""

@app.route('/')
def home():
    return render_template('pages/home.html')

@app.route('/about')
def about():
    return render_template('pages/about.html')

@app.route('/services')
def services():
    return render_template('pages/services.html')

@app.route('/services/web-development')
def service_web_development():
    return render_template('service_pages/web-development.html')


@app.route('/services/generative-ai')
def service_generative_ai():
    return render_template('service_pages/generative-ai.html')


@app.route('/services/agentic-ai')
def service_agentic_ai():
    return render_template('service_pages/agentic-ai.html')


@app.route('/services/ai-workflows')
def service_ai_workflows():
    return render_template('service_pages/ai-workflows.html')


@app.route('/services/algo-trading')
def service_algo_trading():
    return render_template('service_pages/algo-trading.html')


@app.route('/services/machine-learning')
def service_machine_learning():
    return render_template('service_pages/machine-learning.html')


@app.route('/services/blockchain')
def service_blockchain():
    return render_template('service_pages/blockchain.html')


@app.route('/services/web-scraping')
def service_web_scraping():
    return render_template('service_pages/web-scraping.html')


@app.route('/services/computer-vision')
def service_computer_vision():
    return render_template('service_pages/computer-vision.html')


@app.route('/portfolio')
def portfolio():
    return render_template('pages/portfolio.html')

@app.route('/blog')
def blog():
    return render_template('pages/blog.html')

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        try:
            name = request.form.get('name')
            email = request.form.get('email')
            company = request.form.get('company')
            service_type = request.form.get('service_type')
            description = request.form.get('description')
            
            # Send email
            send_contact_email(name, email, company, service_type, description)
            
            flash('Thank you for your interest! Our team will contact you shortly.', 'success')
            return redirect(url_for('contact'))
        except Exception as e:
            flash('There was an error sending your message. Please try again later.', 'error')
            return redirect(url_for('contact'))
    
    return render_template('contact.html')

def send_contact_email(name, email, company, service_type, description):
    """Send contact form email"""
    # Email configuration - Update these with your email settings
    smtp_server = os.getenv('SMTP_SERVER', 'smtp.gmail.com')
    smtp_port = int(os.getenv('SMTP_PORT', '587'))
    smtp_username = os.getenv('SMTP_USERNAME', '')
    smtp_password = os.getenv('SMTP_PASSWORD', '')
    recipient_email = os.getenv('RECIPIENT_EMAIL', 'info@techyaverse.com')
    
    if not smtp_username or not smtp_password:
        # If email not configured, just print to console (for development)
        print(f"\n=== NEW CONTACT FORM SUBMISSION ===")
        print(f"Name: {name}")
        print(f"Email: {email}")
        print(f"Company: {company}")
        print(f"Service Type: {service_type}")
        print(f"Description: {description}")
        print(f"=====================================\n")
        return
    
    # Create message
    msg = MIMEMultipart()
    msg['From'] = smtp_username
    msg['To'] = recipient_email
    msg['Subject'] = f'New Contact Form Submission - {service_type}'
    
    # Email body
    body = f"""
    New Contact Form Submission from TechYa Verse Website
    
    Name: {name}
    Email: {email}
    Company: {company}
    Service Type: {service_type}
    
    Description:
    {description}
    
    ---
    This email was sent from the TechYa Verse contact form.
    """
    
    msg.attach(MIMEText(body, 'plain'))
    
    # Send email
    try:
        server = smtplib.SMTP(smtp_server, smtp_port)
        server.starttls()
        server.login(smtp_username, smtp_password)
        server.send_message(msg)
        server.quit()
    except Exception as e:
        print(f"Error sending email: {str(e)}")
        raise

# @app.route('/blog')
# def blog():
#     return render_template('blog.html')

@app.route('/chat', methods=['POST'])
def chat():
    try:
        data = request.json
        user_message = data.get('message', '')
        
        if not user_message:
            return jsonify({'error': 'No message provided'}), 400
        
        # Create a prompt that includes website content
        prompt = f"""You are a helpful assistant for TechYa Verse, a technology service provider. 
        
Website Information:
{WEBSITE_CONTENT}

User Question: {user_message}

Please provide a helpful response based on the website content. Be friendly, professional, and informative. If the question is not related to TechYa Verse services, politely redirect the conversation to our services."""

        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a helpful assistant for TechYa Verse. Provide accurate information about their services and help users understand what they offer."},
                {"role": "user", "content": prompt}
            ],
            max_tokens=500,
            temperature=0.7
        )
        
        bot_response = response.choices[0].message.content.strip()
        
        return jsonify({'response': bot_response})
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=8000)

