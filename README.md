# AI Chatbot with Gemini API

A lightweight, web-based AI chatbot built with HTML, CSS, and JavaScript that leverages Google's Gemini API to provide intelligent responses to text prompts and image descriptions.

## ✨ Features

- **Text Chat**: Natural language conversations powered by Gemini AI
- **Image Analysis**: Upload and analyze images with AI-generated descriptions
- **Clean UI**: Modern, responsive design for seamless user experience
- **Real-time Responses**: Fast API integration for instant AI interactions
- **Cross-platform**: Works on desktop and mobile browsers

## 🚀 Demo

**Live Demo**: [https://dashing-taffy-11af3d.netlify.app/](https://dashing-taffy-11af3d.netlify.app/)

[Add a screenshot or GIF of your chatbot in action here]

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **AI API**: Google Gemini API
- **Styling**: Custom CSS (responsive design)

## 📋 Prerequisites

Before running this project, make sure you have:

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A Google AI Studio account and Gemini API key
- A local web server (optional but recommended)

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/KAMADO-999/AI-CHATBOT-USING-HTML-CSS-AND-JS.git
   cd AI-CHATBOT-USING-HTML-CSS-AND-JS
   ```

2. **Get your Gemini API Key**
   - Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Create a new API key
   - Copy the API key for configuration

3. **Configure the API Key**
   - Open the JavaScript file (usually `script.js` or `app.js`)
   - Replace `YOUR_API_KEY_HERE` with your actual Gemini API key:
   ```javascript
   const API_KEY = 'your-gemini-api-key-here';
   ```

4. **Run the application**
   - **Option 1**: Open `index.html` directly in your browser
   - **Option 2**: Use a local server (recommended)
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server
     
     # Using PHP
     php -S localhost:8000
     ```
   - Navigate to `http://localhost:8000` in your browser

## 📁 Project Structure

```
AI-CHATBOT-USING-HTML-CSS-AND-JS/
│
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript logic and API integration
├── README.md           # Project documentation
└── assets/             # Images, icons, etc. (if any)
    └── ...
```

## 🔑 API Configuration

The chatbot uses Google's Gemini API. Make sure to:

1. Keep your API key secure and never commit it to public repositories
2. Consider using environment variables or a config file for production
3. Monitor your API usage to avoid exceeding rate limits

## 💡 Usage

1. **Text Chat**: Type your message in the input field and press Enter or click Send
2. **Image Analysis**: 
   - Click the image upload button
   - Select an image file (PNG, JPG, JPEG, WebP)
   - The AI will analyze and describe the image content

## 🎨 Customization

You can customize the chatbot by modifying:

- **Styling**: Edit `styles.css` to change colors, fonts, and layout
- **Functionality**: Modify `script.js` to add new features or change behavior
- **UI Elements**: Update `index.html` to add new components

## 🔒 Security Notes

- **API Key Security**: Never expose your API key in client-side code for production apps
- **Rate Limiting**: Implement proper rate limiting to prevent API abuse
- **Input Validation**: Always validate and sanitize user inputs

## 🐛 Troubleshooting

### Common Issues

1. **API Key Error**
   - Ensure your API key is valid and properly configured
   - Check that the Gemini API is enabled in your Google Cloud project

2. **CORS Issues**
   - Use a local server instead of opening HTML directly
   - Ensure proper headers are set for API requests

3. **Image Upload Not Working**
   - Check file size limits and supported formats
   - Verify image processing code in JavaScript

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Google for providing the Gemini API
- The open-source community for inspiration and resources

## 📞 Contact

KAMADO-999 - [@KAMADO-999](https://github.com/KAMADO-999)

Project Link: [https://github.com/KAMADO-999/AI-CHATBOT-USING-HTML-CSS-AND-JS](https://github.com/KAMADO-999/AI-CHATBOT-USING-HTML-CSS-AND-JS)

Live Demo: [https://dashing-taffy-11af3d.netlify.app/](https://dashing-taffy-11af3d.netlify.app/)

---

**⭐ If you found this project helpful, please give it a star on GitHub!**
