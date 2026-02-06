# Thirupugazh Webpage

A beautiful webpage to browse and read Thirupugazh songs with Tamil lyrics and English transliteration, organized by sacred places.

## ⭐ Featured Songs

This webpage currently features **12 most famous Thirupugazh songs** commonly performed by renowned artists like:
- **Sudha Raghunathan**
- **Sivasri**
- **Nithyasree Mahadevan**
- **T.M. Krishna**

### Song List:

**Pazhani (பழனி):**
1. உம்பர் தரு (Umbar Tharu)
2. அடி போற்றி (Adi Potri)
3. ஆடும் பொழுதில் (Aadum Pozhuthil)

**Thiruchendur (திருச்செந்தூர்):**
4. முத்தைத் தரு (Mutthai Tharu) ⭐
5. கண்ணி நுண் சிறுத்தாம்பு (Kanni Nun Siruthambu)

**Thirupparamkundram (திருப்பரங்குன்றம்):**
6. குன்றா ஒளி (Kundraa Oli)

**Swamimalai (சுவாமிமலை):**
7. சித்தம் சிதையும் (Siththam Sithaiyum) ⭐
8. மாலை சேர் (Maalai Ser)

**Thiruthani (திருத்தணி):**
9. செந்தில் ஆண்ட (Sendhil Aanda)
10. கலை இல் (Kalai Il)

**Pazhamudhircholai (பழமுதிர்சோலை):**
11. தேன் ஆர் (Then Aar)

**General/Universal (பொது):**
12. சரண சரண என்று (Sharana Sharana Endru) ⭐⭐⭐

## Features

- **Place-wise Categorization**: Songs organized by temples (Pazhani, Thiruchendur, etc.)
- **Voice Search**: Search for songs using voice input
- **Bilingual Display**: View Tamil lyrics and English transliteration
- **Responsive Design**: Works on all devices

## Adding Complete Lyrics

Due to copyright restrictions, this repository contains only the structure. To add complete lyrics:

### Authorized Sources:

1. **Kaumaram Website** ⭐ RECOMMENDED: http://www.kaumaram.com/thiru/index.html
   - Has both Tamil lyrics AND transliteration
   - Easy to search by first line
   - **How to use:**
     - Click on "திருப்புகழ் பாடல்கள்" (Thirupugazh Songs)
     - Use search or browse by place
     - Each song shows Tamil + Roman transliteration
   
2. **Thirupugazh.org**: https://www.thirupugazh.org/
   - Official resource with audio
   
3. **YouTube Channels**:
   - Search: "Thirupugazh [song name] lyrics"
   - Many videos show scrolling lyrics

4. **Mobile Apps**:
   - "Thirupugazh" app on Play Store
   - "Murugan Songs" apps often include lyrics

### Quick Start - Adding Your First Song:

1. Open `script.js` in any text editor
2. Find song #12: "சரண சரண என்று" (most famous)
3. Visit: http://www.kaumaram.com/thiru/index.html
4. Search for: "சரண சரண"
5. Copy the Tamil text → paste into `tamilLyrics`
6. Copy the transliteration → paste into `englishLyrics`
7. Save file and refresh your webpage!

### How to Add Lyrics:

1. Open `script.js`
2. For each song object, replace the placeholder text in:
   - `tamilLyrics`: Add complete Tamil text
   - `englishLyrics`: Add transliteration (NOT translation)
   
**Example Format:**
```javascript
tamilLyrics: `முருகா முருகா முருகா
வேலவா வேலவா வேலவா
(complete verses...)`,

englishLyrics: `Murugaa Murugaa Murugaa
Velavaa Velavaa Velavaa
(complete transliteration...)`
```

### Note on Transliteration vs Translation:

- ✅ **Transliteration**: முருகா = Murugaa (sound representation)
- ❌ **Translation**: முருகா = Lord Murugan (meaning)

We use transliteration only, not translation.

## Six Abodes (Arupadai Veedu):

1. **பழனி** (Pazhani) - Palani
2. **திருச்செந்தூர்** (Thiruchendur) - Tiruchendur  
3. **திருப்பரங்குன்றம்** (Thirupparamkundram) - Thiruparankundram
4. **சுவாமிமலை** (Swamimalai) - Swamimalai
5. **திருத்தணி** (Thiruthani) - Tiruttani
6. **பழமுதிர்சோலை** (Pazhamudhircholai) - Pazhamudircholai

## Technology Stack:

- HTML5
- CSS3 (with gradient backgrounds)
- Vanilla JavaScript
- Web Speech API (for voice search)

## Deployment:

Deployed on GitHub Pages: https://renga270122.github.io/Thirupugazh_Webpage/

## Contributing:

Feel free to contribute by:
- Adding more songs
- Improving the UI/UX
- Adding audio files (if permitted)
- Translating interface to other languages

## Copyright Notice:

Thirupugazh songs are compositions by Saint Arunagirinathar (14th century). When adding lyrics, please ensure you have the right to use them and cite your sources appropriately.

## License:

Code: MIT License
Content: Please respect copyright of lyrics sources
