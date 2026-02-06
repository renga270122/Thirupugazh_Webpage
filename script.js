// Thirupugazh songs data - Most Famous Songs
// Popular songs sung by Sivasri, Sudha Raghunathan, and other renowned artists
// TO ADD COMPLETE LYRICS: Visit kaumaram.com or thirupugazh.org
// Search for each song by its first line (shown below)

const thirupugazhSongs = [
    // Most Famous Songs - Pazhani (பழனி)
    {
        number: 1,
        nameTamil: "உம்பர் தரு",
        nameEnglish: "Umbar Tharu",
        place: "Pazhani",
        placeTamil: "பழனி",
        tamilLyrics: `உம்பர் தரு வெள்ளி மலையே...

[Add complete lyrics from kaumaram.com/thiru - Search: "உம்பர் தரு"]

This is one of the most famous Thirupugazh songs, frequently performed in concerts.`,
        englishLyrics: `Umbar tharu velli malaiye...

[Add complete transliteration from kaumaram.com]`
    },
    {
        number: 2,
        nameTamil: "அடி போற்றி",
        nameEnglish: "Adi Potri",
        place: "Pazhani",
        placeTamil: "பழனி",
        tamilLyrics: `அடி போற்றி செயக் கோ தரு போற்றி...

[Add complete lyrics - Very popular song by Sudha Raghunathan]`,
        englishLyrics: `Adi potri seya ko tharu potri...

[Add complete transliteration]`
    },
    {
        number: 3,
        nameTamil: "ஆடும் பொழுதில்",
        nameEnglish: "Aadum Pozhuthil",
        place: "Pazhani",
        placeTamil: "பழனி",
        tamilLyrics: `ஆடும் பொழுதில் ஓடை நடுவில்...

[Famous for its rhythmic pattern - Add from kaumaram.com]`,
        englishLyrics: `Aadum pozhuthil odai naduvil...

[Add transliteration]`
    },
    // Thiruchendur (திருச்செந்தூர்)
    {
        number: 4,
        nameTamil: "முத்தைத் தரு",
        nameEnglish: "Mutthai Tharu",
        place: "Thiruchendur",
        placeTamil: "திருச்செந்தூர்",
        tamilLyrics: `முத்தைத் தரு பத்தி மொழியைத் தரு சத்தி...

[Extremely popular song - Add from kaumaram.com]`,
        englishLyrics: `Mutthai tharu pathi mozhiyai tharu sakthi...

[Add transliteration]`
    },
    {
        number: 5,
        nameTamil: "கண்ணி நுண் சிறுத்தாம்பு",
        nameEnglish: "Kanni Nun Siruthambu",
        place: "Thiruchendur",
        placeTamil: "திருச்செந்தூர்",
        tamilLyrics: `கண்ணி நுண் சிறுத்தாம்பு கனல் அனைய மேனி...

[Famous melodious song - Add complete lyrics]`,
        englishLyrics: `Kanni nun siruthambu kanal anaiya meni...

[Add transliteration]`
    },
    // Thirupparamkundram (திருப்பரங்குன்றம்)
    {
        number: 6,
        nameTamil: "குன்றா ஒளி",
        nameEnglish: "Kundraa Oli",
        place: "Thirupparamkundram",
        placeTamil: "திருப்பரங்குன்றம்",
        tamilLyrics: `குன்றா ஒளி குலாவும் நிலையே...

[Popular song for Thirupparamkundram - Add lyrics]`,
        englishLyrics: `Kundraa oli kulaavum nilaiye...

[Add transliteration]`
    },
    // Swamimalai (சுவாமிமலை)
    {
        number: 7,
        nameTamil: "சித்தம் சிதையும்",
        nameEnglish: "Siththam Sithaiyum",
        place: "Swamimalai",
        placeTamil: "சுவாமிமலை",
        tamilLyrics: `சித்தம் சிதையும் சித்தனாயே...

[Very popular devotional song - Add from kaumaram.com]`,
        englishLyrics: `Siththam sithaiyum siththanaaye...

[Add transliteration]`
    },
    {
        number: 8,
        nameTamil: "மாலை சேர்",
        nameEnglish: "Maalai Ser",
        place: "Swamimalai",
        placeTamil: "சுவாமிமலை",
        tamilLyrics: `மாலை சேர் பொழில் மாதவி வேலை...

[Beautiful composition - Add complete lyrics]`,
        englishLyrics: `Maalai ser pozhil madhavi velai...

[Add transliteration]`
    },
    // Thiruthani (திருத்தணி)
    {
        number: 9,
        nameTamil: "செந்தில் ஆண்ட",
        nameEnglish: "Sendhil Aanda",
        place: "Thiruthani",
        placeTamil: "திருத்தணி",
        tamilLyrics: `செந்தில் ஆண்ட செயுங் குன்ற நாதா...

[Famous Thiruthani song - Sung by many artists]`,
        englishLyrics: `Sendhil aanda seyum kundra naathaa...

[Add transliteration]`
    },
    {
        number: 10,
        nameTamil: "கலை இல்",
        nameEnglish: "Kalai Il",
        place: "Thiruthani",
        placeTamil: "திருத்தணி",
        tamilLyrics: `கலை இல் திகழ் ஒளியால் கதிர் மதியால்...

[Popular devotional song - Add lyrics]`,
        englishLyrics: `Kalai il thigazh oliyaal kathir mathiyaal...

[Add transliteration]`
    },
    // Pazhamudhircholai (பழமுதிர்சோலை)
    {
        number: 11,
        nameTamil: "தேன் ஆர்",
        nameEnglish: "Then Aar",
        place: "Pazhamudhircholai",
        placeTamil: "பழமுதிர்சோலை",
        tamilLyrics: `தேன் ஆர் கூந்தல் திரள் காதல் மங்கையர்...

[Beautiful song for Pazhamudhircholai - Add from kaumaram.com]`,
        englishLyrics: `Then aar koondhal thiral kaathal mangaiyar...

[Add transliteration]`
    },
    // General/Universal Songs (பொது) - Most Famous
    {
        number: 12,
        nameTamil: "சரண சரண என்று",
        nameEnglish: "Sharana Sharana Endru",
        place: "General",
        placeTamil: "பொது",
        tamilLyrics: `சரண சரண என்று அரண அரண என்று...

[★★★ MOST FAMOUS - Sung by Sudha Raghunathan, Sivasri]
[Add from kaumaram.com - Search: "சரண சரண"]`,
        englishLyrics: `Sharana sharana endru arana arana endru...

[Add transliteration]`
    }
];

// Note: To add complete lyrics:
// 1. Visit: http://www.kaumaram.com/thiru/index.html
// 2. Search for the first line (shown above for each song)
// 3. Copy TAMIL text → paste in tamilLyrics
// 4. Copy TRANSLITERATION (not translation) → paste in englishLyrics

// Get unique places for categorization
const places = [...new Set(thirupugazhSongs.map(song => song.place))];

// State management
let currentFilter = 'all';
let currentLanguage = 'both';
let currentPlace = 'all';

// DOM Elements
const searchInput = document.getElementById('searchInput');
const voiceSearchBtn = document.getElementById('voiceSearchBtn');
const searchBtn = document.getElementById('searchBtn');
const voiceStatus = document.getElementById('voiceStatus');
const songsGrid = document.getElementById('songsGrid');
const lyricsModal = document.getElementById('lyricsModal');
const modalSongTitle = document.getElementById('modalSongTitle');
const tamilLyrics = document.getElementById('tamilLyrics');
const englishLyrics = document.getElementById('englishLyrics');
const closeBtn = document.querySelector('.close-btn');
const placesFilter = document.getElementById('placesFilter');

// Initialize Web Speech API
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = null;

if (SpeechRecognition) {
    recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.continuous = false;
    recognition.interimResults = false;
}

// Initialize the page
function init() {
    createPlacesFilter();
    displaySongs(thirupugazhSongs);
    attachEventListeners();
}

// Create places filter dynamically
function createPlacesFilter() {
    const placesHTML = `
        <button class="place-btn active" data-place="all">All Places</button>
        ${places.map(place => {
            const song = thirupugazhSongs.find(s => s.place === place);
            return `<button class="place-btn" data-place="${place}">${song.placeTamil} - ${place}</button>`;
        }).join('')}
    `;
    placesFilter.innerHTML = placesHTML;
}

// Display songs in grid (categorized by place if needed)
function displaySongs(songs) {
    if (songs.length === 0) {
        songsGrid.innerHTML = `
            <div class="no-results">
                <h3>No songs found</h3>
                <p>Try a different search term</p>
            </div>
        `;
        return;
    }

    if (currentPlace === 'all') {
        // Group by place
        const groupedByPlace = {};
        songs.forEach(song => {
            if (!groupedByPlace[song.place]) {
                groupedByPlace[song.place] = [];
            }
            groupedByPlace[song.place].push(song);
        });

        let html = '';
        Object.keys(groupedByPlace).forEach(place => {
            const placeSongs = groupedByPlace[place];
            const placeTamil = placeSongs[0].placeTamil;
            
            html += `
                <div class="place-section">
                    <h2 class="place-title">${placeTamil} - ${place}</h2>
                    <div class="songs-list">
                        ${placeSongs.map(song => `
                            <div class="song-card" data-song-id="${song.number}">
                                <div class="song-number">Song #${song.number}</div>
                                <div class="song-name-tamil">${song.nameTamil}</div>
                                <div class="song-name-english">${song.nameEnglish}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        });

        songsGrid.innerHTML = html;
    } else {
        // Show only selected place
        songsGrid.innerHTML = `
            <div class="songs-list-full">
                ${songs.map(song => `
                    <div class="song-card" data-song-id="${song.number}">
                        <div class="song-number">Song #${song.number}</div>
                        <div class="song-name-tamil">${song.nameTamil}</div>
                        <div class="song-name-english">${song.nameEnglish}</div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    // Attach click events to song cards
    document.querySelectorAll('.song-card').forEach(card => {
        card.addEventListener('click', () => {
            const songId = parseInt(card.dataset.songId);
            showLyrics(songId);
        });
    });
}

// Show lyrics modal
function showLyrics(songNumber) {
    const song = thirupugazhSongs.find(s => s.number === songNumber);
    if (!song) return;

    modalSongTitle.textContent = `${song.number}. ${song.nameTamil} - ${song.nameEnglish}`;
    document.getElementById('modalPlace').textContent = `${song.placeTamil} (${song.place})`;
    tamilLyrics.textContent = song.tamilLyrics;
    englishLyrics.textContent = song.englishLyrics;

    updateLyricsDisplay();
    lyricsModal.classList.add('show');
}

// Update lyrics display based on language selection
function updateLyricsDisplay() {
    tamilLyrics.classList.remove('hidden');
    englishLyrics.classList.remove('hidden');

    if (currentLanguage === 'tamil') {
        englishLyrics.classList.add('hidden');
    } else if (currentLanguage === 'english') {
        tamilLyrics.classList.add('hidden');
    }
}

// Search functionality
function searchSongs() {
    const query = searchInput.value.toLowerCase().trim();
    
    if (!query) {
        const filtered = currentPlace === 'all' 
            ? thirupugazhSongs 
            : thirupugazhSongs.filter(s => s.place === currentPlace);
        displaySongs(filtered);
        return;
    }

    let filtered = thirupugazhSongs.filter(song => {
        const numberMatch = song.number.toString() === query;
        const tamilMatch = song.nameTamil.toLowerCase().includes(query);
        const englishMatch = song.nameEnglish.toLowerCase().includes(query);
        const placeMatch = song.place.toLowerCase().includes(query);
        const placeTamilMatch = song.placeTamil.includes(query);
        
        return numberMatch || tamilMatch || englishMatch || placeMatch || placeTamilMatch;
    });

    if (currentPlace !== 'all') {
        filtered = filtered.filter(s => s.place === currentPlace);
    }

    displaySongs(filtered);
}

// Voice search functionality
function startVoiceSearch() {
    if (!recognition) {
        voiceStatus.textContent = 'Voice recognition not supported in this browser';
        return;
    }

    voiceSearchBtn.classList.add('listening');
    voiceStatus.textContent = 'Listening...';

    recognition.start();

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        searchInput.value = transcript;
        voiceStatus.textContent = `Heard: "${transcript}"`;
        searchSongs();
    };

    recognition.onerror = (event) => {
        voiceStatus.textContent = `Error: ${event.error}`;
        voiceSearchBtn.classList.remove('listening');
    };

    recognition.onend = () => {
        voiceSearchBtn.classList.remove('listening');
        setTimeout(() => {
            if (voiceStatus.textContent === 'Listening...') {
                voiceStatus.textContent = '';
            }
        }, 2000);
    };
}

// Filter by place
function filterByPlace(place) {
    currentPlace = place;
    
    // Update active place button
    document.querySelectorAll('.place-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.place === place) {
            btn.classList.add('active');
        }
    });

    const filtered = place === 'all' 
        ? thirupugazhSongs 
        : thirupugazhSongs.filter(s => s.place === place);
    
    displaySongs(filtered);
}

// Attach event listeners
function attachEventListeners() {
    // Search
    searchBtn.addEventListener('click', searchSongs);
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            searchSongs();
        }
    });

    // Voice search
    if (recognition) {
        voiceSearchBtn.addEventListener('click', startVoiceSearch);
    } else {
        voiceSearchBtn.style.display = 'none';
    }

    // Place filter buttons
    document.querySelectorAll('.place-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            filterByPlace(btn.dataset.place);
        });
    });

    // Language toggle in modal
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            currentLanguage = btn.dataset.lang;
            document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            updateLyricsDisplay();
        });
    });

    // Modal close
    closeBtn.addEventListener('click', () => {
        lyricsModal.classList.remove('show');
    });

    lyricsModal.addEventListener('click', (e) => {
        if (e.target === lyricsModal) {
            lyricsModal.classList.remove('show');
        }
    });

    // ESC key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lyricsModal.classList.contains('show')) {
            lyricsModal.classList.remove('show');
        }
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', init);
