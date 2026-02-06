# 🤖 AI Assistant Guide

## Overview
The AI-powered assistant helps you find, search, and add lyrics to the Thirupugazh webpage interactively!

## Features

### 🔍 Find Songs
Ask the AI to search for any song in the database:
- "Find lyrics for Umbar Tharu"
- "Search Kanda Sashti Kavasam"
- "Get lyrics for Sharana Sharana"

### 📝 Add Lyrics
The AI guides you through adding lyrics step-by-step:
- Provides links to authorized sources (Kaumaram.com, Thirupugazh.org)
- Helps format Tamil and transliteration
- Validates and saves to the database

### 📚 Song Information
Ask about any song details:
- "Tell me about Umbar Tharu"
- "Information on Kanda Sashti Kavasam"
- Get temple, artist, category details

### ➕ Add New Songs
The AI can help add brand new songs:
- Guides you through required fields
- Helps with Tamil/English names
- Associates with temples and categories

## How to Use

### 1. Open AI Assistant
Click the **"🤖 AI Assistant"** button in the search bar

### 2. Ask Your Question
Type or click an example query:
- "Find lyrics for [song name]"
- "Add lyrics for [song name]"
- "Tell me about [song name]"

### 3. Follow AI Guidance
The AI will:
- ✅ Check if the song exists in the database
- ✅ Provide links to find lyrics from authorized sources
- ✅ Guide you through the formatting
- ✅ Help save the lyrics

## Example Conversations

### Finding Existing Lyrics
**You:** "Find Kanda Sashti Kavasam lyrics"
**AI:** "Found கந்த சஷ்டி கவசம் (Kanda Sashti Kavasam)! ✅ The lyrics are already in our database. Click the song card to view them."

### Adding Missing Lyrics
**You:** "Find Umbar Tharu lyrics"
**AI:** "Found உம்பர் தரு (Umbar Tharu) in our database! 📝 However, the complete lyrics haven't been added yet.

**Where to find lyrics:**
- 🔗 Kaumaram.com - Best source for Thirupugazh
- 🔗 Thirupugazh.org - Official resource
- 📱 Search on YouTube for "Umbar Tharu lyrics"

**How to add:**
1. Find the Tamil lyrics from above sources
2. Copy and paste them back here
3. I'll help you format and add them!"

### Getting Song Info
**You:** "Tell me about Vel Muruganukku"
**AI:** "வேல் முருகனுக்கு
**English:** Vel Muruganukku
**Place:** திருப்பரங்குன்றம் (Thirupparankundram)
**Category:** Classical
**Artist:** T.M. Soundararajan"

## Tips

### ✨ Best Practices
1. **Be Specific:** Mention the exact song name
2. **Use Quotes:** "Find lyrics for 'Umbar Tharu'"
3. **Check Sources:** Always verify lyrics from authorized websites
4. **Format Properly:** Follow the Tamil + Transliteration format

### 📌 Authorized Sources
- [Kaumaram.com](http://www.kaumaram.com/thiru/index.html) - Primary source for Thirupugazh
- [Thirupugazh.org](https://www.thirupugazh.org/) - Official organization
- YouTube channels with authentic lyrics
- Books by Thirupugazh scholars

### ⚠️ Important Notes
- **Copyright:** Only add lyrics from public domain or with permission
- **Accuracy:** Verify Tamil text and transliteration
- **Format:** Maintain consistent formatting for readability
- **Sources:** Always attribute the source

## Future Enhancements

### 🚀 Coming Soon
- **Real AI Integration:** Connect to OpenAI/Gemini/Claude APIs
- **Auto-Translation:** Automatic transliteration generation
- **Bulk Import:** Upload multiple songs at once
- **Community Validation:** Vote on lyrics accuracy
- **Audio Sync:** Align lyrics with audio timestamps

### 🔧 API Integration (Optional)
You can connect your own AI API:
1. Click settings (⚙️) in the AI chat
2. Select provider (OpenAI/Gemini/Claude)
3. Enter your API key
4. Get smarter, context-aware responses!

**Without API:** The AI works in demo mode with smart pattern matching

**With API:** Get natural language understanding and better responses

## Technical Details

### How It Works
1. **Pattern Matching:** Detects intent from your message
2. **Database Search:** Searches through 24 songs in the database
3. **Smart Responses:** Provides relevant guidance based on song status
4. **Link Generation:** Creates direct links to song cards and sources
5. **Form Assistance:** Guides through lyrics addition process

### Supported Intents
- `find_lyrics` - Search for song lyrics
- `add_lyrics` - Add missing lyrics
- `song_info` - Get song details
- `general` - General help and guidance

### Data Format
Lyrics are stored in this structure:
```javascript
{
    number: 1,
    nameTamil: "கந்த சஷ்டி கவசம்",
    nameEnglish: "Kanda Sashti Kavasam",
    place: "General",
    placeTamil: "பொது",
    category: "Kavasam",
    tamilLyrics: "[Tamil text]",
    englishLyrics: "[Transliteration]"
}
```

## Support

### Need Help?
- Check the main [README.md](README.md) for general information
- Browse existing songs for format examples
- Ask the AI: "How do I add lyrics?"

### Contributing
All contributions are welcome! The AI makes it easy to:
- Add missing lyrics
- Fix errors
- Add new songs
- Improve transliterations

### Contact
Created for preserving and sharing Lord Murugan's devotional songs.
Maintained by the Thirupugazh community 🙏

---

**Last Updated:** January 2025
**Version:** 1.0.0
**Status:** ✅ Fully Functional
