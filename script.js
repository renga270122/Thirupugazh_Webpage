// MURUGAN DEVOTIONAL SONGS DATABASE
// A comprehensive collection for all Muruga Bhakts
// Categories: Thirupugazh, Kavasam, Anubhoodhi, Classical, Film Songs

const muruganSongs = [
    // ========== SACRED TEXTS (பாராயணங்கள்) ==========
    
    // Kanda Sashti Kavasam (கந்த சஷ்டி கவசம்)
    {
        number: 1,
        nameTamil: "கந்த சஷ்டி கவசம்",
        nameEnglish: "Kanda Sashti Kavasam",
        place: "Sacred Text",
        placeTamil: "பாராயணம்",
        category: "Kavasam",
        artist: "Devaraya Swamigal",
        youtubeId: "dQw4w9WgXcQ", // Replace with actual video ID
        duration: "15:30",
        tamilLyrics: `[Add complete Kanda Sashti Kavasam - 244 lines
Starts with: சுத்தமாய் அருள்வாய் துணைவாய் முருகா...]

Famous recitation by: Sirkazhi Govindarajan, Sulamangalam Sisters`,
        englishLyrics: `[Add complete transliteration
Suththamaay arulvaay thunaivay murugaa...]`,
        contributeUrl: "https://forms.gle/yourform" // For users to contribute lyrics
    },
    
    // Kanda Guru Kavasam (கந்த குரு கவசம்)
    {
        number: 2,
        nameTamil: "கந்த குரு கவசம்",
        nameEnglish: "Kanda Guru Kavasam",
        place: "Sacred Text",
        placeTamil: "பாராயணம்",
        category: "Kavasam",
        artist: "Saint Arunagirinathar",
        tamilLyrics: `[Add complete Kanda Guru Kavasam
Shorter protective hymn, powerful for obstacles]`,
        englishLyrics: `[Add transliteration]`
    },
    
    // Kandhar Anubhoodhi (கந்தர் அநுபூதி)
    {
        number: 3,
        nameTamil: "கந்தர் அநுபூதி",
        nameEnglish: "Kandhar Anubhoodhi",
        place: "Sacred Text",
        placeTamil: "பாராயணம்",
        category: "Anubhoodhi",
        artist: "Saint Arunagirinathar",
        tamilLyrics: `[Add complete Kandhar Anubhoodhi - 51 verses
Starts with: துணையென நினைத்தடிதொழுது துணிவுடன் அகத்துருகி...
One of the most profound mystical poems to Lord Murugan]`,
        englishLyrics: `[Add transliteration
Thunaiyena ninaiththadi thozhuthu thunivudan agaththurugi...]`
    },
    
    // Vel Maral (வேல் மறல்)
    {
        number: 4,
        nameTamil: "வேல் மறல்",
        nameEnglish: "Vel Maral",
        place: "Sacred Text",
        placeTamil: "பாராயணம்",
        category: "Maral",
        artist: "Kumaraguruparar",
        tamilLyrics: `[Add complete Vel Maral
Baby talk to Lord Murugan's Vel (Spear)
Very sweet and playful composition]`,
        englishLyrics: `[Add transliteration]`
    },

    // ========== THIRUPUGAZH (திருப்புகழ்) ==========
    
    {
        number: 5,
        nameTamil: "உம்பர் தரு வெள்ளி மலையே",
        nameEnglish: "Umbar Tharu Velli Malaiye",
        place: "Pazhani",
        placeTamil: "பழனி",
        category: "Thirupugazh",
        artist: "Arunagirinathar",
        tamilLyrics: `[Add from kaumaram.com - One of the most melodious]`,
        englishLyrics: `[Add transliteration]`
    },
    
    {
        number: 6,
        nameTamil: "அடி போற்றி",
        nameEnglish: "Adi Potri",
        place: "Pazhani",
        placeTamil: "பழனி",
        category: "Thirupugazh",
        artist: "Arunagirinathar",
        tamilLyrics: `[Famous by Sudha Raghunathan]`,
        englishLyrics: `[Add transliteration]`
    },
    
    {
        number: 7,
        nameTamil: "முத்தைத் தரு பத்தி",
        nameEnglish: "Mutthai Tharu Pathi",
        place: "Thiruchendur",
        placeTamil: "திருச்செந்தூர்",
        category: "Thirupugazh",
        artist: "Arunagirinathar",
        tamilLyrics: `[Extremely popular - Must have!]`,
        englishLyrics: `[Add transliteration]`
    },
    
    {
        number: 8,
        nameTamil: "சரண சரண என்று",
        nameEnglish: "Sharana Sharana Endru",
        place: "General",
        placeTamil: "பொது",
        category: "Thirupugazh",
        artist: "Arunagirinathar",
        tamilLyrics: `[★★★ MOST FAMOUS Thirupugazh ever!]`,
        englishLyrics: `[Add transliteration]`
    },
    
    // ========== CLASSICAL DEVOTIONAL (TMS, Seerkazhi, etc.) ==========
    
    {
        number: 9,
        nameTamil: "குன்றினில் மேல் ஓர் கொடி",
        nameEnglish: "Kundrinil Mel Or Kodi",
        place: "Devotional",
        placeTamil: "பக்தி பாடல்",
        category: "Classical",
        artist: "T.M. Soundararajan",
        tamilLyrics: `[Add lyrics - Famous TMS Murugan song about flag on hill]`,
        englishLyrics: `[Kundrinil mel or kodi...]`
    },
    
    {
        number: 10,
        nameTamil: "ஆறுமுக பாவலரே",
        nameEnglish: "Aarumuga Paavalarae",
        place: "Devotional",
        placeTamil: "பக்தி பாடல்",
        category: "Classical",
        artist: "Seerkazhi Govindarajan",
        tamilLyrics: `[Famous Seerkazhi song - Add complete lyrics]`,
        englishLyrics: `[Aarumuga paavalarae...]`
    },
    
    {
        number: 11,
        nameTamil: "முருகா முருகா",
        nameEnglish: "Murugaa Murugaa",
        place: "Devotional",
        placeTamil: "பக்தி பாடல்",
        category: "Classical",
        artist: "Various Artists",
        tamilLyrics: `[Simple powerful chant - Very popular]`,
        englishLyrics: `[Murugaa murugaa...]`
    },
    
    {
        number: 12,
        nameTamil: "பாலகுமாரா வா வா வா",
        nameEnglish: "Bala Kumara Vaa Vaa Vaa",
        place: "Devotional",
        placeTamil: "பக்தி பாடல்",
        category: "Classical",
        artist: "Various Artists",
        tamilLyrics: `[Sweet children's song - Add lyrics]`,
        englishLyrics: `[Bala kumara vaa vaa vaa...]`
    },
    
    {
        number: 13,
        nameTamil: "வேலன் தானே வேலன்",
        nameEnglish: "Velan Thane Velan",
        place: "Devotional",
        placeTamil: "பக்தி பாடல்",
        category: "Classical",
        artist: "T.M. Soundararajan",
        tamilLyrics: `[Famous TMS song - Add from devotional albums]`,
        englishLyrics: `[Velan thane velan...]`
    },

    // ========== FILM SONGS (திரைப்பாடல்கள்) ==========
    
    {
        number: 14,
        nameTamil: "வெற்றி வேல் முருகனுக்கு அரோகரா",
        nameEnglish: "Vetri Vel Muruganukku Arohara",
        place: "Film Song",
        placeTamil: "திரைப்பாடல்",
        category: "Film",
        artist: "T.M. Soundararajan",
        movie: "Kandhan Karunai",
        tamilLyrics: `[Most iconic Murugan film song ever! - From Kandhan Karunai (1967)
Singer: TMS, Music: K.V. Mahadevan]`,
        englishLyrics: `[Vetri vel muruganukku arohara...]`
    },
    
    {
        number: 15,
        nameTamil: "வீர வேல் முருகா வீர வேல் முருகா",
        nameEnglish: "Veera Vel Muruga",
        place: "Film Song",
        placeTamil: "திரைப்பாடல்",
        category: "Film",
        artist: "K.J. Yesudas & S.P. Balasubrahmanyam",
        movie: "Padai Veetu Amman",
        tamilLyrics: `[Super hit duet - Add lyrics]`,
        englishLyrics: `[Veera vel muruga...]`
    },
    
    {
        number: 16,
        nameTamil: "கந்தன் கருணை",
        nameEnglish: "Kandhan Karunai",
        place: "Film Song",
        placeTamil: "திரைப்பாடல்",
        category: "Film",
        artist: "T.M. Soundararajan",
        movie: "Kandhan Karunai",
        tamilLyrics: `[Title song from classic film]`,
        englishLyrics: `[Kandhan karunai...]`
    },
    
    {
        number: 17,
        nameTamil: "தனி முருகா தனி முருகா",
        nameEnglish: "Thani Muruga Thani Muruga",
        place: "Film Song",
        placeTamil: "திரைப்பாடல்",
        category: "Film",
        artist: "T.M. Soundararajan",
        movie: "Azhagar Malai",
        tamilLyrics: `[Famous TMS hit - Add complete lyrics]`,
        englishLyrics: `[Thani muruga thani muruga...]`
    },
    
    {
        number: 18,
        nameTamil: "குக்கு குக்கு கூவும் மயிலே",
        nameEnglish: "Kukku Kukku Koovum Mayile",
        place: "Film Song",
        placeTamil: "திரைப்பாடல்",
        category: "Film",
        artist: "S. Janaki",
        movie: "Kurinji Malar",
        tamilLyrics: `[Sweet song about Murugan's peacock]`,
        englishLyrics: `[Kukku kukku koovum mayile...]`
    },
    
    {
        number: 19,
        nameTamil: "முருகா முருகா வாராய் என்று",
        nameEnglish: "Muruga Muruga Vaaraay Endru",
        place: "Film Song",
        placeTamil: "திரைப்பாடல்",
        category: "Film",
        artist: "P. Susheela",
        movie: "Thiruvilayadal",
        tamilLyrics: `[Classic film song - Add lyrics]`,
        englishLyrics: `[Muruga muruga vaaraay endru...]`
    },
    
    {
        number: 20,
        nameTamil: "பழனி ஆண்டவன் பாலக்காட்டு முருகன்",
        nameEnglish: "Pazhani Aandavan Palakkattu Murugan",
        place: "Film Song",
        placeTamil: "திரைப்பாடல்",
        category: "Film",
        artist: "T.M. Soundararajan",
        movie: "Bala Parikshai",
        tamilLyrics: `[TMS devotional film song - Add lyrics]`,
        englishLyrics: `[Pazhani aandavan...]`
    },
    
    {
        number: 21,
        nameTamil: "ஆறு மயில் ஆடுது",
        nameEnglish: "Aaru Mayil Aaduthu",
        place: "Film Song",
        placeTamil: "திரைப்பாடல்",
        category: "Film",
        artist: "Various",
        movie: "Multiple Films",
        tamilLyrics: `[Popular song about six peacocks - Add lyrics]`,
        englishLyrics: `[Aaru mayil aaduthu...]`
    },
    
    {
        number: 22,
        nameTamil: "வள்ளி கல்யாணம்",
        nameEnglish: "Valli Kalyanam",
        place: "Film Song",
        placeTamil: "திரைப்பாடல்",
        category: "Film",
        artist: "Various Artists",
        movie: "Valli",
        tamilLyrics: `[Songs about Murugan-Valli wedding]`,
        englishLyrics: `[Valli kalyanam...]`
    },
    
    {
        number: 23,
        nameTamil: "குமரக் கடவுளே",
        nameEnglish: "Kumara Kadavule",
        place: "Film Song",
        placeTamil: "திரைப்பாடல்",
        category: "Film",
        artist: "S.P. Balasubrahmanyam",
        movie: "Various",
        tamilLyrics: `[Modern devotional film song]`,
        englishLyrics: `[Kumara kadavule...]`
    },
    
    {
        number: 24,
        nameTamil: "திருச்செந்தூர் முருகனே",
        nameEnglish: "Thiruchendur Murugane",
        place: "Film Song",
        placeTamil: "திரைப்பாடல்",
        category: "Film",
        artist: "Various Artists",
        movie: "Multiple Films",
        tamilLyrics: `[Famous Thiruchendur temple song]`,
        englishLyrics: `[Thiruchendur murugane...]`
    }
];

// Get unique places and categories for filtering
const places = [...new Set(muruganSongs.map(song => song.place))];
const categories = [...new Set(muruganSongs.map(song => song.category))];

// State management
let currentFilter = 'all';
let currentLanguage = 'both';
let currentPlace = 'all';
let currentCategory = 'all';

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
const categoryFilter = document.getElementById('categoryFilter');

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
    createCategoryFilter();
    createPlacesFilter();
    displaySongs(muruganSongs);
    attachEventListeners();
}

// Create category filter dynamically
function createCategoryFilter() {
    const categoryHTML = `
        <button class="category-btn active" data-category="all">All Categories</button>
        <button class="category-btn" data-category="Kavasam">🛡️ Kavasam & Sacred Texts</button>
        <button class="category-btn" data-category="Thirupugazh">🙏 Thirupugazh</button>
        <button class="category-btn" data-category="Classical">🎵 Classical Devotional</button>
        <button class="category-btn" data-category="Film">🎬 Film Songs</button>
    `;
    categoryFilter.innerHTML = categoryHTML;
}

// Create places filter dynamically
function createPlacesFilter() {
    const placesHTML = `
        <button class="place-btn active" data-place="all">All Places</button>
        ${places.map(place => {
            const song = muruganSongs.find(s => s.place === place);
            return `<button class="place-btn" data-place="${place}">${song.placeTamil} - ${place}</button>`;
        }).join('')}
    `;
    placesFilter.innerHTML = placesHTML;
}

// Display songs in grid (categorized by place/category if needed)
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

    if (currentPlace === 'all' && currentCategory === 'all') {
        // Group by category first
        const groupedByCategory = {};
        songs.forEach(song => {
            if (!groupedByCategory[song.category]) {
                groupedByCategory[song.category] = [];
            }
            groupedByCategory[song.category].push(song);
        });

        let html = '';
        Object.keys(groupedByCategory).forEach(category => {
            const categorySongs = groupedByCategory[category];
            const categoryEmoji = {
                'Kavasam': '🛡️',
                'Anubhoodhi': '📿',
                'Maral': '💫',
                'Thirupugazh': '🙏',
                'Classical': '🎵',
                'Film': '🎬'
            };
            
            html += `
                <div class="place-section">
                    <h2 class="place-title">${categoryEmoji[category] || '🎶'} ${category} Songs</h2>
                    <div class="songs-list">
                        ${categorySongs.map(song => `
                            <div class="song-card" data-song-id="${song.number}">
                                <div class="song-number">Song #${song.number}</div>
                                <div class="song-name-tamil">${song.nameTamil}</div>
                                <div class="song-name-english">${song.nameEnglish}</div>
                                ${song.artist ? `<div class="song-artist">🎤 ${song.artist}</div>` : ''}
                                ${song.movie ? `<div class="song-movie">🎬 ${song.movie}</div>` : ''}
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        });

        songsGrid.innerHTML = html;
    } else if (currentPlace === 'all') {
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
    const song = muruganSongs.find(s => s.number === songNumber);
    if (!song) return;

    modalSongTitle.textContent = `${song.number}. ${song.nameTamil} - ${song.nameEnglish}`;
    let placeInfo = `${song.placeTamil} (${song.place})`;
    if (song.artist) placeInfo += ` • Artist: ${song.artist}`;
    if (song.movie) placeInfo += ` • Film: ${song.movie}`;
    if (song.duration) placeInfo += ` • Duration: ${song.duration}`;
    document.getElementById('modalPlace').textContent = placeInfo;
    tamilLyrics.textContent = song.tamilLyrics;
    englishLyrics.textContent = song.englishLyrics;

    // Setup audio player
    const audioContainer = document.getElementById('audioPlayerContainer');
    const playBtn = document.getElementById('playAudioBtn');
    const contributeBtn = document.getElementById('contributeBtn');
    const shareBtn = document.getElementById('shareBtn');
    
    if (song.youtubeId) {
        playBtn.style.display = 'flex';
        playBtn.onclick = () => toggleAudioPlayer(song.youtubeId);
    } else {
        playBtn.style.display = 'none';
    }
    
    contributeBtn.onclick = () => {
        const url = song.contributeUrl || 'https://github.com/renga270122/Thirupugazh_Webpage/issues';
        window.open(url, '_blank');
    };
    
    shareBtn.onclick = () => shareSong(song);
    
    // Hide audio player initially
    audioContainer.style.display = 'none';

    updateLyricsDisplay();
    lyricsModal.classList.add('show');
}

// Toggle audio player
function toggleAudioPlayer(youtubeId) {
    const audioContainer = document.getElementById('audioPlayerContainer');
    const youtubePlayer = document.getElementById('youtubePlayer');
    
    if (audioContainer.style.display === 'none') {
        audioContainer.style.display = 'block';
        youtubePlayer.src = `https://www.youtube.com/embed/${youtubeId}?autoplay=1`;
    } else {
        audioContainer.style.display = 'none';
        youtubePlayer.src = '';
    }
}

// Share song
function shareSong(song) {
    const shareData = {
        title: `${song.nameTamil} - ${song.nameEnglish}`,
        text: `Listen to this beautiful Murugan song: ${song.nameTamil}`,
        url: window.location.href
    };
    
    if (navigator.share) {
        navigator.share(shareData).catch(err => console.log('Share failed:', err));
    } else {
        // Fallback - copy to clipboard
        const text = `${shareData.title}\n${shareData.text}\n${shareData.url}`;
        navigator.clipboard.writeText(text).then(() => {
            alert('Link copied to clipboard!');
        });
    }
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
        let filtered = muruganSongs;
        if (currentCategory !== 'all') {
            filtered = filtered.filter(s => s.category === currentCategory);
        }
        if (currentPlace !== 'all') {
            filtered = filtered.filter(s => s.place === currentPlace);
        }
        displaySongs(filtered);
        return;
    }

    let filtered = muruganSongs.filter(song => {
        const numberMatch = song.number.toString() === query;
        const tamilMatch = song.nameTamil.toLowerCase().includes(query);
        const englishMatch = song.nameEnglish.toLowerCase().includes(query);
        const placeMatch = song.place.toLowerCase().includes(query);
        const placeTamilMatch = song.placeTamil.includes(query);
        const artistMatch = song.artist && song.artist.toLowerCase().includes(query);
        const movieMatch = song.movie && song.movie.toLowerCase().includes(query);
        const categoryMatch = song.category && song.category.toLowerCase().includes(query);
        
        return numberMatch || tamilMatch || englishMatch || placeMatch || placeTamilMatch || artistMatch || movieMatch || categoryMatch;
    });

    if (currentCategory !== 'all') {
        filtered = filtered.filter(s => s.category === currentCategory);
    }
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

// Filter by category
function filterByCategory(category) {
    currentCategory = category;
    
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        }
    });

    let filtered = muruganSongs;
    if (category !== 'all') {
        filtered = filtered.filter(s => s.category === category);
    }
    if (currentPlace !== 'all') {
        filtered = filtered.filter(s => s.place === currentPlace);
    }
    
    displaySongs(filtered);
}

// Filter by place
function filterByPlace(place) {
    currentPlace = place;
    
    document.querySelectorAll('.place-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.place === place) {
            btn.classList.add('active');
        }
    });

    let filtered = muruganSongs;
    if (currentCategory !== 'all') {
        filtered = filtered.filter(s => s.category === currentCategory);
    }
    if (place !== 'all') {
        filtered = filtered.filter(s => s.place === place);
    }
    
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

    // Category filter buttons
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            filterByCategory(btn.dataset.category);
        });
    });

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
    const closeModal = () => {
        lyricsModal.classList.remove('show');
        // Stop audio when closing
        const audioContainer = document.getElementById('audioPlayerContainer');
        const youtubePlayer = document.getElementById('youtubePlayer');
        audioContainer.style.display = 'none';
        youtubePlayer.src = '';
        
        // Reset visibility for songs
        document.getElementById('playAudioBtn').style.display = 'flex';
        document.getElementById('contributeBtn').style.display = 'flex';
        document.getElementById('shareBtn').style.display = 'flex';
        document.querySelector('.language-toggle').style.display = 'flex';
        englishLyrics.style.display = 'block';
    };
    
    closeBtn.addEventListener('click', closeModal);

    lyricsModal.addEventListener('click', (e) => {
        if (e.target === lyricsModal) {
            closeModal();
        }
    });

    // ESC key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (lyricsModal.classList.contains('show')) {
                lyricsModal.classList.remove('show');
            }
            if (document.getElementById('aiChatModal').classList.contains('show')) {
                closeAiAssistant();
            }
        }
    });

    // AI Assistant button
    const aiBtn = document.getElementById('aiAssistantBtn');
    if (aiBtn) {
        aiBtn.addEventListener('click', openAiAssistant);
    }

    // AI chat input
    const aiChatInput = document.getElementById('aiChatInput');
    if (aiChatInput) {
        aiChatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                sendAiMessage();
            }
        });
    }

    // AI send button
    const aiSendBtn = document.querySelector('.ai-send-btn');
    if (aiSendBtn) {
        aiSendBtn.addEventListener('click', sendAiMessage);
    }

    // AI modal close
    const aiModalCloseBtn = document.querySelector('#aiChatModal .close-btn');
    if (aiModalCloseBtn) {
        aiModalCloseBtn.addEventListener('click', closeAiAssistant);
    }

    // AI settings toggle
    const settingsBtn = document.querySelector('.settings-btn');
    if (settingsBtn) {
        settingsBtn.addEventListener('click', toggleAiSettings);
    }

    // Example query chips
    document.querySelectorAll('.query-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            document.getElementById('aiChatInput').value = chip.textContent;
            sendAiMessage();
        });
    });

    // Click outside AI modal to close
    const aiModal = document.getElementById('aiChatModal');
    if (aiModal) {
        aiModal.addEventListener('click', (e) => {
            if (e.target === aiModal) {
                closeAiAssistant();
            }
        });
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', init);

// ========== AI ASSISTANT FUNCTIONALITY ==========

let aiChatHistory = [];

function openAiAssistant() {
    document.getElementById('aiChatModal').classList.add('show');
}

function closeAiAssistant() {
    document.getElementById('aiChatModal').classList.remove('show');
}

function toggleAiSettings() {
    const panel = document.getElementById('aiSettingsPanel');
    panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
}

async function sendAiMessage() {
    const input = document.getElementById('aiChatInput');
    const message = input.value.trim();
    
    if (!message) return;
    
    // Add user message to chat
    addMessageToChat(message, 'user');
    input.value = '';
    
    // Show typing indicator
    showTypingIndicator();
    
    // Process with AI
    await processAiRequest(message);
}

function addMessageToChat(content, sender = 'ai') {
    const messagesContainer = document.getElementById('aiChatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = sender === 'user' ? 'user-message' : 'ai-message';
    
    messageDiv.innerHTML = `
        <div class="message-avatar">${sender === 'user' ? '👤' : '🤖'}</div>
        <div class="message-content">${content}</div>
    `;
    
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function showTypingIndicator() {
    const messagesContainer = document.getElementById('aiChatMessages');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'ai-message typing-indicator-msg';
    typingDiv.id = 'typingIndicator';
    
    typingDiv.innerHTML = `
        <div class="message-avatar">🤖</div>
        <div class="message-content">
            <div class="typing-indicator">
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
            </div>
        </div>
    `;
    
    messagesContainer.appendChild(typingDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function removeTypingIndicator() {
    const indicator = document.getElementById('typingIndicator');
    if (indicator) indicator.remove();
}

async function processAiRequest(userMessage) {
    const provider = document.getElementById('aiProvider').value;
    const apiKey = document.getElementById('apiKey').value;
    
    // Simulate AI delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    removeTypingIndicator();
    
    // Parse user intent
    const intent = parseUserIntent(userMessage);
    
    if (intent.type === 'find_lyrics') {
        await handleFindLyrics(intent.songName);
    } else if (intent.type === 'add_lyrics') {
        await handleAddLyrics(intent.songName, intent.lyrics);
    } else if (intent.type === 'song_info') {
        handleSongInfo(intent.songName);
    } else {
        handleGeneralQuery(userMessage);
    }
}

function parseUserIntent(message) {
    const lowerMsg = message.toLowerCase();
    
    // Check for find lyrics intent
    if (lowerMsg.includes('find') || lowerMsg.includes('search') || lowerMsg.includes('get')) {
        if (lowerMsg.includes('lyrics') || lowerMsg.includes('song')) {
            // Extract song name
            const songName = extractSongName(message);
            return { type: 'find_lyrics', songName };
        }
    }
    
    // Check for add lyrics intent
    if (lowerMsg.includes('add') || lowerMsg.includes('update')) {
        const songName = extractSongName(message);
        return { type: 'add_lyrics', songName };
    }
    
    // Check for song info
    if (lowerMsg.includes('about') || lowerMsg.includes('tell me') || lowerMsg.includes('information')) {
        const songName = extractSongName(message);
        return { type: 'song_info', songName };
    }
    
    return { type: 'general' };
}

function extractSongName(message) {
    // Try to match song names from our database
    for (const song of muruganSongs) {
        if (message.toLowerCase().includes(song.nameEnglish.toLowerCase()) ||
            message.includes(song.nameTamil)) {
            return song.nameEnglish;
        }
    }
    
    // Extract quoted text or capitalized words
    const quotedMatch = message.match(/[\"'](.+?)[\"']/);
    if (quotedMatch) return quotedMatch[1];
    
    // Return the message without common words
    const commonWords = ['find', 'search', 'get', 'lyrics', 'for', 'the', 'song', 'add', 'please'];
    const words = message.split(' ').filter(w => !commonWords.includes(w.toLowerCase()));
    return words.join(' ') || 'unknown song';
}

async function handleFindLyrics(songName) {
    const song = muruganSongs.find(s => 
        s.nameEnglish.toLowerCase().includes(songName.toLowerCase()) ||
        s.nameTamil.includes(songName)
    );
    
    if (song) {
        const hasLyrics = !song.tamilLyrics.includes('[Add') && !song.tamilLyrics.includes('[★');
        
        if (hasLyrics) {
            addMessageToChat(`
                <p>Found <strong>${song.nameTamil} (${song.nameEnglish})</strong>! ✅</p>
                <p>The lyrics are already in our database. Click the song card to view them.</p>
                <div class=\"message-actions\">
                    <button class=\"action-btn-small\" onclick=\"showSongFromAi(${song.number})\">View Song</button>
                </div>
            `);
        } else {
            addMessageToChat(`
                <p>Found <strong>${song.nameTamil} (${song.nameEnglish})</strong> in our database! 📝</p>
                <p>However, the complete lyrics haven't been added yet.</p>
                <p><strong>Where to find lyrics:</strong></p>
                <ul>
                    <li>🔗 <a href="http://www.kaumaram.com/thiru/index.html" target="_blank">Kaumaram.com</a> - Best source for Thirupugazh</li>
                    <li>🔗 <a href="https://www.thirupugazh.org/" target="_blank">Thirupugazh.org</a> - Official resource</li>
                    <li>📱 Search on YouTube for "${song.nameEnglish} lyrics"</li>
                </ul>
                <p>💡 <strong>How to add:</strong></p>
                <ol>
                    <li>Find the Tamil lyrics from above sources</li>
                    <li>Copy and paste them back here</li>
                    <li>I'll help you format and add them!</li>
                </ol>
                <div class=\"message-actions\">
                    <button class=\"action-btn-small\" onclick=\"openLyricsForm(${song.number})\">Add Lyrics Now</button>
                </div>
            `);
        }
    } else {
        addMessageToChat(`
            <p>I couldn't find "${songName}" in our database yet. 🤔</p>
            <p>But I can help you add it! Here's what we need:</p>
            <ul>
                <li>✅ Song name in Tamil and English</li>
                <li>✅ Associated temple/place</li>
                <li>✅ Category (Thirupugazh, Kavasam, Classical, Film)</li>
                <li>✅ Lyrics in Tamil</li>
                <li>✅ Transliteration in English</li>
            </ul>
            <p>Would you like to add this as a new song? 🎵</p>
            <div class=\"message-actions\">
                <button class=\"action-btn-small\" onclick=\"openNewSongForm()\">Add New Song</button>
            </div>
        `);
    }
}

async function handleAddLyrics(songName, lyrics) {
    addMessageToChat(`
        <p>Great! Let's add lyrics for <strong>${songName}</strong> 📝</p>
        <p>Please provide the lyrics in the following format:</p>
        <div class=\"lyrics-preview\">TAMIL LYRICS:\n[Paste Tamil text here]\n\nENGLISH TRANSLITERATION:\n[Paste transliteration here]</div>
        <p>You can:</p>
        <ul>
            <li>Copy from <a href="http://www.kaumaram.com/thiru/index.html" target="_blank">Kaumaram.com</a></li>
            <li>Paste from any authorized source</li>
            <li>Type it manually</li>
        </ul>
        <p>Just paste it in the chat and I'll format it for you! ✨</p>
    `);
}

function handleSongInfo(songName) {
    const song = muruganSongs.find(s => 
        s.nameEnglish.toLowerCase().includes(songName.toLowerCase()) ||
        s.nameTamil.includes(songName)
    );
    
    if (song) {
        addMessageToChat(`
            <p><strong>${song.nameTamil}</strong></p>
            <p><strong>English:</strong> ${song.nameEnglish}</p>
            <p><strong>Place:</strong> ${song.placeTamil} (${song.place})</p>
            <p><strong>Category:</strong> ${song.category}</p>
            ${song.artist ? `<p><strong>Artist:</strong> ${song.artist}</p>` : ''}
            ${song.movie ? `<p><strong>Movie:</strong> ${song.movie}</p>` : ''}
            <div class=\"message-actions\">
                <button class=\"action-btn-small\" onclick=\"showSongFromAi(${song.number})\">View Full Details</button>
            </div>
        `);
    } else {
        addMessageToChat(`<p>Sorry, I couldn't find information about "${songName}" in our database. 😔</p>`);
    }
}

function handleGeneralQuery(message) {
    const responses = [
        `<p>I can help you find and add Murugan song lyrics! 🎵</p>
         <p>Try asking me:</p>
         <ul>
            <li>"Find lyrics for Umbar Tharu"</li>
            <li>"Search Kanda Sashti Kavasam"</li>
            <li>"Tell me about Sharana Sharana"</li>
            <li>"Add lyrics for [song name]"</li>
         </ul>`,
        `<p>I'm here to help with Murugan devotional songs! 🙏</p>
         <p>What would you like to know?</p>`,
        `<p>Ask me about any song in our collection or request help finding lyrics! 🎶</p>`
    ];
    
    addMessageToChat(responses[Math.floor(Math.random() * responses.length)]);
}

function showSongFromAi(songNumber) {
    closeAiAssistant();
    setTimeout(() => showLyrics(songNumber), 300);
}

function openLyricsForm(songNumber) {
    const song = muruganSongs.find(s => s.number === songNumber);
    addMessageToChat(`
        <p>Perfect! Please paste the lyrics for <strong>${song.nameEnglish}</strong> below:</p>
        <p><em>Format example:</em></p>
        <div class=\"lyrics-preview\">TAMIL:\nஉம்பர் தரு வெள்ளி மலையே...\n\nENGLISH:\nUmbar tharu velli malaiye...</div>
        <p>Paste in the chat box below and I'll save it! 💾</p>
    `);
}

function openNewSongForm() {
    addMessageToChat(`
        <p>Let's add a new song! Please provide details in this format:</p>
        <div class=\"lyrics-preview\">NAME_TAMIL: [Tamil name]
NAME_ENGLISH: [English name]
PLACE: [Temple/Location]
CATEGORY: [Thirupugazh/Kavasam/Classical/Film]
ARTIST: [Artist name]
TAMIL_LYRICS:
[Paste Tamil lyrics]

ENGLISH_TRANSLITERATION:
[Paste transliteration]</div>
        <p>Paste this information and I'll add the song to our database! 🎵</p>
    `);
}

// ========== TEMPLES FUNCTIONALITY ==========

function showTemplesSection() {
    document.getElementById('templesSection').style.display = 'block';
    document.getElementById('templesSection').scrollIntoView({ behavior: 'smooth' });
    displayTemples('arupadai');
}

function hideTemplesSection() {
    document.getElementById('templesSection').style.display = 'none';
}

function displayTemples(category) {
    const templesGrid = document.getElementById('templesGrid');
    let templesToShow = [];
    
    if (category === 'arupadai') {
        templesToShow = [
            'Thirupparamkundram', 'Thiruchendur', 'Pazhani', 
            'Swamimalai', 'Thiruthani', 'Pazhamudhircholai'
        ];
    } else if (category === 'india') {
        templesToShow = ['Vaidheeswaran Koil', 'Sikkal', 'Kutralam', 'Maruthamalai'];
    } else if (category === 'international') {
        templesToShow = [
            'Batu Caves', 'Nallur Kandaswamy', 'Colombo Kathiresan',
            'Mauritius', 'Singapore', 'USA_Malibu', 'USA_Chicago', 'UK_London'
        ];
    }
    
    templesGrid.innerHTML = templesToShow.map(key => {
        const temple = muruganTemples[key];
        return `
            <div class="temple-card" onclick="showTempleDetail('${key}')">
                <div class="temple-image">
                    ${temple.imageUrl ? `<img src="${temple.imageUrl}" alt="${temple.nameEnglish}" onerror="this.style.display='none'; this.parentElement.innerHTML='🏛️'">` : '🏛️'}
                </div>
                <div class="temple-content">
                    <div class="temple-name-tamil">${temple.nameTamil}</div>
                    <div class="temple-name-english">${temple.nameEnglish}</div>
                    <div class="temple-location">📍 ${temple.location}</div>
                    <div class="temple-significance">${temple.significance}</div>
                    ${temple.speciality ? `<div class="temple-speciality">⭐ ${temple.speciality}</div>` : ''}
                </div>
            </div>
        `;
    }).join('');
    
    // Update active tab
    document.querySelectorAll('.temple-tab').forEach(tab => {
        tab.classList.remove('active');
        if (tab.dataset.tab === category) {
            tab.classList.add('active');
        }
    });
}

function showTempleDetail(templeKey) {
    const temple = muruganTemples[templeKey];
    
    modalSongTitle.textContent = `${temple.nameTamil} - ${temple.nameEnglish}`;
    document.getElementById('modalPlace').textContent = `📍 ${temple.location}`;
    
    // Hide audio player and action buttons for temple details
    document.getElementById('audioPlayerContainer').style.display = 'none';
    document.getElementById('playAudioBtn').style.display = 'none';
    document.getElementById('contributeBtn').style.display = 'none';
    document.getElementById('shareBtn').style.display = 'none';
    
    // Hide language toggle for temples
    document.querySelector('.language-toggle').style.display = 'none';
    
    const templeDetailHTML = `
        <div class="temple-detail">
            <div class="temple-info-grid">
                <div class="info-item">
                    <div class="info-label">Deity</div>
                    <div class="info-value">${temple.deity}</div>
                </div>
                ${temple.coordinates ? `
                <div class="info-item">
                    <div class="info-label">Coordinates</div>
                    <div class="info-value">${temple.coordinates}</div>
                </div>` : ''}
                ${temple.festivals ? `
                <div class="info-item">
                    <div class="info-label">Major Festivals</div>
                    <div class="info-value">${temple.festivals}</div>
                </div>` : ''}
                ${temple.timings ? `
                <div class="info-item">
                    <div class="info-label">Timings</div>
                    <div class="info-value">${temple.timings}</div>
                </div>` : ''}
            </div>
            
            <h3>🏛️ History & Significance</h3>
            <p>${temple.history}</p>
            
            ${temple.legends ? `
                <h3>📖 Legends</h3>
                <p>${temple.legends}</p>
            ` : ''}
            
            ${temple.speciality ? `
                <h3>⭐ Special Features</h3>
                <p>${temple.speciality}</p>
            ` : ''}
        </div>
    `;
    
    tamilLyrics.innerHTML = templeDetailHTML;
    englishLyrics.style.display = 'none';
    
    lyricsModal.classList.add('show');
}

// Add temple tab event listeners
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.temple-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            displayTemples(tab.dataset.tab);
        });
    });
});
