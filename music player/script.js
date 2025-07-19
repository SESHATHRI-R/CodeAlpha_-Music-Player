const audioPlayer = document.getElementById('audioPlayer');
        const playPauseButton = document.getElementById('playPauseButton');
        const nextButton = document.getElementById('nextButton');
        const prevButton = document.getElementById('prevButton');
        const trackNameElement = document.getElementById('trackName');
        const trackImageElement = document.getElementById('trackImage');

        const audioFiles = [
           { name: 'Pookal Pookum', src: 'music/Pookal-Pookum.mp3', image: 'trackimages/pookal pookum.jpg' },
            { name: 'Nammavemo Gani', src: 'music/Nammavemo-SenSongsMp3.Com.mp3', image: 'trackimages/Parugu-2008.jpg' },
            { name: 'Ae Dil Hai Mushkil Title Track', src: 'music/Ae Dil Hai Mushkil- [MyMp3Bhojpuri.In].mp3', image: 'trackimages/Ae dil hai mushkil.jpg' },
            { name: 'Butter', src: 'music/Butter Bts 320 Kbps.mp3', image: 'trackimages/Butter.jpg' },
            
        ];

        let currentTrack = 0;
        let isPlaying = false;

        function updateTrackName() {
            trackNameElement.textContent = audioFiles[currentTrack].name;
            trackImageElement.src = audioFiles[currentTrack].image;
        }

        function togglePlayPause() {
            if (isPlaying) {
                audioPlayer.pause();
                isPlaying = false;
                playPauseButton.textContent = '\u25BA';
            } else {
                audioPlayer.play();
                isPlaying = true;
                playPauseButton.textContent = '\u275A\u275A';
            }
        }
        playPauseButton.addEventListener('click', () => {
            togglePlayPause();
        });
        nextButton.addEventListener('click', () => {
            currentTrack = (currentTrack + 1) % audioFiles.length;
            audioPlayer.src = audioFiles[currentTrack].src;
            updateTrackName();
            if (isPlaying) {
                audioPlayer.play();
            }
        });
        
        prevButton.addEventListener('click', () => {
            currentTrack = (currentTrack - 1 + audioFiles.length) % audioFiles.length;
            audioPlayer.src = audioFiles[currentTrack].src;
            updateTrackName();
            if (isPlaying) {
                audioPlayer.play();
            }
        });

        updateTrackName();