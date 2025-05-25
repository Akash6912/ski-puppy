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

const track = document.getElementById("carouselTrack");
const items = track.querySelectorAll(".carousel-item");
let index = 0;

function autoSlide() {
  if (window.innerWidth < 768) {
    index = (index + 1) % items.length;
    const offset = -index * track.clientWidth;
    track.style.transform = `translateX(${offset}px)`;
  } else {
    track.style.transform = "none";
  }
}

setInterval(autoSlide, 4000);

window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    track.style.transform = "none";
  }
});



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
