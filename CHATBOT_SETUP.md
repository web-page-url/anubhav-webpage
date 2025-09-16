# 🤖 Chatbot Setup Guide

## 🚀 Features Added
- **Cyber-themed AI Chatbot** with neon colors
- **Google Gemini AI Integration** for intelligent responses
- **Smooth animations** using Framer Motion
- **Responsive design** that matches your portfolio theme
- **Typing indicators** and professional UI

## 🔧 Setup Instructions

### 1. Get Google Gemini API Key
1. Visit: https://makersuite.google.com/app/apikey
2. Sign in with your Google account
3. Create a new API key
4. Copy the API key

### 2. Create Environment File
Create a `.env.local` file in your project root:

```env
# Google Gemini AI API Key for Chatbot
NEXT_PUBLIC_GEMINI_API_KEY=your_actual_api_key_here
```

### 3. Restart Development Server
```bash
npm run dev
```

## 🎨 Theme Customization

The chatbot uses your existing cyber theme colors:
- **Primary**: `neon-cyan` (#00FFFF)
- **Secondary**: `neon-purple` (#8A2BE2)
- **Accent**: `neon-magenta` (#FF00FF)
- **Background**: `cyber-dark` (#0A0A12)

## 💬 Chatbot Features

### 🤖 AI Capabilities
- Answers questions about **software engineering**
- Discusses **web development** topics
- Talks about **Anubhav's experience** and projects
- Provides information about **coding** and **technology**
- Helps with **technical questions**

### 🎯 User Experience
- **Floating button** with cyber animations
- **Minimize/maximize** functionality
- **Typing indicators** for realistic conversation
- **Smooth animations** throughout
- **Responsive design** for all devices

### 🎨 Visual Design
- **Gradient backgrounds** with neon colors
- **Cyber-themed icons** and animations
- **Backdrop blur** effects
- **Hover animations** and transitions
- **Professional message bubbles**

## 🔧 Technical Details

### Dependencies Added
- `framer-motion`: For smooth animations
- `@google/generative-ai`: For Gemini AI integration

### Files Created/Modified
- `src/components/Chatbot.tsx`: Main chatbot component
- `src/app/page.tsx`: Added chatbot to main page
- `CHATBOT_SETUP.md`: This setup guide

## 🚀 Usage

1. **Click the floating button** (bottom-right corner)
2. **Ask questions** about:
   - Software engineering
   - Web development
   - Anubhav's experience
   - Coding tutorials
   - Technical topics

3. **Minimize** the chat when not needed
4. **Close** completely if desired

## 🔧 Troubleshooting

### API Key Issues
- Make sure `.env.local` is in the project root
- Verify the API key is correct
- Restart the development server after adding the key

### Styling Issues
- Check if Tailwind classes are properly configured
- Ensure the component is imported correctly
- Verify the z-index doesn't conflict with other elements

### Animation Issues
- Framer Motion should work out of the box
- Check browser compatibility
- Disable animations if performance is an issue

## 🎯 Next Steps

1. **Add your Gemini API key** to `.env.local`
2. **Test the chatbot** functionality
3. **Customize responses** if needed
4. **Deploy** with the API key in production

---

**Note**: The chatbot will work without the API key but will provide a fallback message. Add the API key for full AI-powered responses!
