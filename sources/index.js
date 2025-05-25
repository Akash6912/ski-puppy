let audioUnlocked = false;

function unlockAudio() {
  const unlockDiv = document.getElementById('unlock-audio');
  const audio = document.getElementById('narration');

  if (audio && !audioUnlocked) {
    audio.play().then(() => {
      audio.pause();
      audio.currentTime = 0;
      audioUnlocked = true;
      unlockDiv.style.display = 'none';
    }).catch(err => {
      console.error("Autoplay failed:", err);
    });
  }
}

function playNarration() {
  const audio = document.getElementById('narration');
  if (audio && audioUnlocked) {
    audio.play();
  }
}

function stopNarration() {
  const audio = document.getElementById('narration');
  if (audio && audioUnlocked) {
    audio.pause();
    audio.currentTime = 0;
  }
}

function addTokenToWallet() {
  const tokenAddress = '0xYourTokenAddress'; // Replace with your actual token address
  const tokenSymbol = 'SKIP';
  const tokenDecimals = 18;
  const tokenImage = 'https://yourdomain.com/token-icon.png'; // Optional

  if (window.ethereum) {
    window.ethereum.request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20',
        options: {
          address: tokenAddress,
          symbol: tokenSymbol,
          decimals: tokenDecimals,
          image: tokenImage,
        },
      },
    }).then((success) => {
      if (success) {
        console.log('Token added!');
      } else {
        console.log('User rejected token addition.');
      }
    }).catch(console.error);
  } else {
    alert('MetaMask not detected.');
  }
}

let currentSlide = 0;

function moveCarousel(direction) {
  const track = document.getElementById('carousel-track');
  const items = document.querySelectorAll('.carousel-item');
  const totalSlides = items.length;

  currentSlide += direction;

  if (currentSlide < 0) currentSlide = totalSlides - 1;
  if (currentSlide >= totalSlides) currentSlide = 0;

  const offset = currentSlide * -100;
  track.style.transform = `translateX(${offset}%)`;
}

function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("open");
}

// Smooth scroll (optional if not using scroll-behavior CSS)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById("navLinks").classList.remove("open");
  });
});
