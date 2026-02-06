// Thirupugazh songs data categorized by places
const thirupugazhSongs = [
    // Pazhani (பழனி)
    {
        number: 1,
        nameTamil: "தனதான தத்தனா",
        nameEnglish: "Thanathana Thathanaa",
        place: "Pazhani",
        placeTamil: "பழனி",
        tamilLyrics: `தனதான தத்தனா தந்ததன தத்தனா
தனதான தத்தனா தந்ததன தத்தனா

முருகா முருகா முருகா முருகா
அருளுக அருளுக அருளுக அருளுக

பழனி மலை மேல் வீற்றிருக்கும் பெருமாளே
அழகு மிகு குமரேசா வாழ்த்துகிறேன்

(Add complete lyrics here)`,
        englishLyrics: `Thanathana Thathanaa Thanthathana Thathanaa
Thanathana Thathanaa Thanthathana Thathanaa

Murugaa Murugaa Murugaa Murugaa
Aruluka Aruluka Aruluka Aruluka

Pazhani malai mel veetrirukkum perumale
Azhagu migu kumaresa vaazhthugiren

(Add complete transliteration here)`
    },
    {
        number: 2,
        nameTamil: "முத்தைத் தரு பத்தி",
        nameEnglish: "Mutthai Tharu Pathi",
        place: "Pazhani",
        placeTamil: "பழனி",
        tamilLyrics: `முத்தைத் தரு பத்தி மொழியைத் தரு சத்தி
முருகா உனை அன்றி பிறிதொன்றும் இல்லை

பழனி மலையில் வாழும் பரமனே
அழகுடன் நின்ற ஆண்டவனே

(Add complete lyrics here)`,
        englishLyrics: `Mutthai tharu pathi mozhiyai tharu sakthi
Murugaa unai andri piridondrum illai

Pazhani malaiyil vaazhum paramane
Azhagudan nindra aandavane

(Add complete transliteration here)`
    },
    // Thiruchendur (திருச்செந்தூர்)
    {
        number: 3,
        nameTamil: "கடலோர சிகரத்தில்",
        nameEnglish: "Kadalora Shigarathil",
        place: "Thiruchendur",
        placeTamil: "திருச்செந்தூர்",
        tamilLyrics: `கடலோர சிகரத்தில் கம்பீரமாய் நின்றிடும்
குமரேசா உன் திருவடி சரணம்

திருச்செந்தூர் கோயிலில் செல்வா நீ வீற்றிருக்க
மருத்துவ மலை முருகா வாழ்க

(Add complete lyrics here)`,
        englishLyrics: `Kadalora shigarathil kambiramay nindridum
Kumaresa un thiruvadi sharanam

Thiruchendur koyilil selva nee veetrirrukka
Maruththuva malai murugaa vaazhga

(Add complete transliteration here)`
    },
    {
        number: 4,
        nameTamil: "சண முகா திருச்செந்தூர்",
        nameEnglish: "Shana Mugaa Thiruchendur",
        place: "Thiruchendur",
        placeTamil: "திருச்செந்தூர்",
        tamilLyrics: `சண முகா சண முகா திருச்செந்தூர் சண முகா
கண்ணுதலோன் மைந்தா கருணை தா

கடல் நடுவே எழும் கோயில் வாசா
படை ஏந்திய குமரேசா அருள்வாய்

(Add complete lyrics here)`,
        englishLyrics: `Shana mugaa shana mugaa thiruchendur shana mugaa
Kannuthalon mainthaa karunai thaa

Kadal naduve ezhum koyil vaasaa
Padai enthiya kumaresa arulvaay

(Add complete transliteration here)`
    },
    // Thirupparamkundram (திருப்பரங்குன்றம்)
    {
        number: 5,
        nameTamil: "பரங்குன்று மலை",
        nameEnglish: "Parankundru Malai",
        place: "Thirupparamkundram",
        placeTamil: "திருப்பரங்குன்றம்",
        tamilLyrics: `பரங்குன்று மலை மேல் பதி கொண்ட பெருமாளே
தெய்வானை மணம் புரிந்த தேவா

குன்றில் வீற்றிருக்கும் குமரேசா
அன்பு பொழியும் ஆண்டவனே

(Add complete lyrics here)`,
        englishLyrics: `Parankundru malai mel pathi konda perumale
Theyvaanai manam purindha thevaa

Kundril veetrirukkum kumaresaa
Anbu pozhiyum aandavane

(Add complete transliteration here)`
    },
    {
        number: 6,
        nameTamil: "சுப்பிரமணிய சுவாமி",
        nameEnglish: "Subramanya Swami",
        place: "Thirupparamkundram",
        placeTamil: "திருப்பரங்குன்றம்",
        tamilLyrics: `சுப்பிரமணிய சுவாமி சுப்பிரமணிய சுவாமி
சரவண பவ சுவாமி சரணம் சரணம்

பரங்குன்றம் பதியாக கொண்ட பெருமாளே
அருள்பாலிக்கும் ஆண்டவனே

(Add complete lyrics here)`,
        englishLyrics: `Subramanya swami subramanya swami
Sharavana bava swami sharanam sharanam

Parankundram pathiyaaga konda perumale
Arulpaalikkum aandavane

(Add complete transliteration here)`
    },
    // Swamimalai (சுவாமிமலை)
    {
        number: 7,
        nameTamil: "சுவாமி நாதா",
        nameEnglish: "Swami Naathaa",
        place: "Swamimalai",
        placeTamil: "சுவாமிமலை",
        tamilLyrics: `சுவாமி நாதா சுவாமி நாதா
குமர குருபரா சுவாமி நாதா

ஓங்காரம் உபதேசம் செய்த உத்தமனே
சுவாமிமலை வாசா துணை புரிவாய்

(Add complete lyrics here)`,
        englishLyrics: `Swami naathaa swami naathaa
Kumara guruparaa swami naathaa

Ongaaram upadhesam seytha uththamane
Swamimalai vaasaa thunai purivaay

(Add complete transliteration here)`
    },
    {
        number: 8,
        nameTamil: "குமரக் கடவுளே",
        nameEnglish: "Kumara Kadavule",
        place: "Swamimalai",
        placeTamil: "சுவாமிமலை",
        tamilLyrics: `குமரக் கடவுளே குருபரனே
அமர உலகளித்த ஆண்டவனே

சுவாமிமலையில் சிவனுக்கு உபதேசம்
தந்த தேவா சரணம் சரணம்

(Add complete lyrics here)`,
        englishLyrics: `Kumara kadavule guruparane
Amara ulagaliththa aandavane

Swamimalai sivannukku upadhesam
Thantha thevaa sharanam sharanam

(Add complete transliteration here)`
    },
    // Thiruthani (திருத்தணி)
    {
        number: 9,
        nameTamil: "தணிகை மலை",
        nameEnglish: "Thanigai Malai",
        place: "Thiruthani",
        placeTamil: "திருத்தணி",
        tamilLyrics: `தணிகை மலை மேல் தங்கிய தெய்வமே
அணிவகுத்து நின்ற ஆண்டவனே

திருத்தணி கோயிலில் திகழும் குமரேசா
அருள் புரிவாய் என் ஆண்டவனே

(Add complete lyrics here)`,
        englishLyrics: `Thanigai malai mel thangiya theyvame
Anivaguththu nindra aandavane

Thiruthani koyilil thigazhum kumaresaa
Arul purivaay en aandavane

(Add complete transliteration here)`
    },
    {
        number: 10,
        nameTamil: "வள்ளி மணாளா",
        nameEnglish: "Valli Manaalaa",
        place: "Thiruthani",
        placeTamil: "திருத்தணி",
        tamilLyrics: `வள்ளி மணாளா தெய்வானை மணாளா
செல்வமே குமரேசா சரணம்

திருத்தணி மலை வாசா திருமுருகா
அருள் கொடு என்றும் அன்பனே

(Add complete lyrics here)`,
        englishLyrics: `Valli manaalaa theyvaanai manaalaa
Selvame kumaresaa sharanam

Thiruthani malai vaasaa thirumurugaa
Arul kodu endrum anbane

(Add complete transliteration here)`
    },
    // Pazhamudhircholai (பழமுதிர்சோலை)
    {
        number: 11,
        nameTamil: "பழமுதிர் சோலை",
        nameEnglish: "Pazhamudhir Cholai",
        place: "Pazhamudhircholai",
        placeTamil: "பழமுதிர்சோலை",
        tamilLyrics: `பழமுதிர் சோலை மலை வாழ் முருகனே
அழகுமிகு சோலை ஆண்டவனே

பழம் நிறைந்த சோலையில் பதி கொண்ட பெருமாளே
வழி காட்டும் தெய்வமே வாழ்த்துகிறேன்

(Add complete lyrics here)`,
        englishLyrics: `Pazhamudhir cholai malai vaazh muruganE
Azhagumiku cholai aandavane

Pazham niraintha cholaiyil pathi konda perumale
Vazhi kaattum theyvame vaazhthugiren

(Add complete transliteration here)`
    },
    {
        number: 12,
        nameTamil: "சோலை மலையான்",
        nameEnglish: "Cholai Malaiyaan",
        place: "Pazhamudhircholai",
        placeTamil: "பழமுதிர்சோலை",
        tamilLyrics: `சோலை மலையான் சுப்பிரமணியன்
ஆலயம் கொண்ட ஆண்டவனே

பழமுதிர்ச்சோலை பதியாக கொண்ட
அழகு நாயகனே அருள் புரிவாய்

(Add complete lyrics here)`,
        englishLyrics: `Cholai malaiyaan subramaniyan
Aalayam konda aandavane

Pazhamudhircholai pathiyaaga konda
Azhagu naayagane arul purivaay

(Add complete transliteration here)`
    }
];

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
