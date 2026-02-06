# Thirupugazh Webpage

A beautiful webpage to browse and read Thirupugazh songs with Tamil lyrics and English transliteration, organized by sacred places.

## Features

- **Place-wise Categorization**: Songs organized by temples (Pazhani, Thiruchendur, etc.)
- **Voice Search**: Search for songs using voice input
- **Bilingual Display**: View Tamil lyrics and English transliteration
- **Responsive Design**: Works on all devices

## Adding Complete Lyrics

Due to copyright restrictions, this repository contains only the structure. To add complete lyrics:

### Authorized Sources:

1. **Kaumaram Website**: http://www.kaumaram.com/thiru/index.html
   - Contains Tamil lyrics and transliteration
   
2. **Thirupugazh.org**: https://www.thirupugazh.org/
   - Official Thirupugazh resource
   
3. **Published Books**:
   - "Thirupugazh" by Arunagirinathar (various publishers)
   - Available at Tamil bookstores

4. **Mobile Apps**:
   - "Thirupugazh" app on Play Store/App Store
   - Often includes lyrics with transliteration

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
