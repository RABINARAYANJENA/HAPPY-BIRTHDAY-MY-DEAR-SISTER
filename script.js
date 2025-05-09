document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('#nav-list a');
  const contentArea = document.getElementById('content-area');
  const navToggle = document.getElementById('nav-toggle');
  const navList = document.getElementById('nav-list');

  // Content for each section
  const sectionsContent = {
    "birthday-wish": `
      <div id="birthday-wish" class="section-content">
        <img src="Screenshot 2025-05-09 171655.gif" alt="Cake" class="sister-pic" />
        <img src="WhatsApp Image 2025-05-09 at 17.00.38_14bec22a.jpg" alt="Sister Picture" class="sister-pic" />
        <p>Happy Birthday to my wonderful sister! Wishing you a day filled with love and joy.</p>
      </div>
    `,
    "about-sis": `
      <section id="about-sis" class="section-content">
        <h2>About My Sister</h2>
        <p>My sister is not just my family — she is the softest whisper of my soul, the reflection of my truest self, and the heartbeat that dances beside mine even across distance and time. She is the gentle keeper of my childhood, the safe haven where my secrets rest peacefully, and the light that never fades even when my world turns dark. In her smile, I find home; in her eyes, I see a love that is endless, unconditional, and pure beyond all words. She holds my hand in silence when my heart is too heavy to speak, and she lifts my spirit when life tries to break me, asking for nothing but my happiness in return. Her laughter wraps around me like sunlight, and her care feels like the warmest embrace the universe could ever offer. No matter how many roads life draws between us, my sister’s love is a golden thread — unbreakable, timeless, and forever woven into the fabric of my heart. She is not just someone who walks beside me — she is the miracle who makes every step of my journey beautiful and worth taking.</p>
      </section>
    `,
    "childhood-memory": `
      <section id="childhood-memory" class="section-content">
        <h2>Childhood Memory</h2>
        <p>Remember those cherished days we spent together, sharing secrets and creating lasting memories? Those moments are priceless.</p>
        <img src="c1.jpg" alt="Childhood Memory" />
        <img src="c2.jpg" alt="Childhood Memory" />
        <img src="c3.jpg" alt="Childhood Memory" />
        <img src="c4.jpg" alt="Childhood Memory" />
        <img src="c5.jpg" alt="Childhood Memory" />
        <img src="c6.jpg" alt="Childhood Memory" />
        <img src="c7.jpg" alt="Childhood Memory" />
      </section>
    `,
    "photo-scroll": `
      <section id="photo-scroll" class="section-content">
        <h2>Swipe Left </h2>
        <div class="photo-scroll-container">
          <img src="p1.jpg" alt="Photo 1" />
          <img src="p2.jpg" alt="Photo 2" />
          <img src="p3.jpg" alt="Photo 3" />
          <img src="p4.jpg" alt="Photo 4" />
          <img src="p5.jpg" alt="Photo 5" />
          <img src="p6.jpg" alt="Photo 1" />
          <img src="p7.jpg" alt="Photo 2" />
          <img src="p8.jpg" alt="Photo 3" />
          <img src="p9.jpg" alt="Photo 4" />
          <img src="p10.jpg" alt="Photo 5" />
        </div>
      </section>
    `,
    "certificate-download": `
      <section id="certificate-download" class="section-content">
        <h2>Birthday Certificate</h2>
        <p>Download your special birthday certificate below:</p>
        <button id="download-certificate-btn">
          <a href="Gold%20And%20Black%20Modern%20Happy%20Birthday%20A4%20Document%20Landscape.pdf" download="Birthday_Certificate.pdf" id="download-certificate-link" style="color: white; text-decoration: none; display: block; width: 100%; height: 100%;">Download Certificate</a>
        </button>
      </section>
    `
  };

  // Function to load content based on section
  function loadContent(section) {
    contentArea.innerHTML = sectionsContent[section] || "<p>Content not found.</p>";
    if (section === "birthday-wish") {
      setupBirthdayWishButtons();
    }
    if (section === "photo-scroll") {
      setupPhotoScroll();
    }
  }

  // Setup buttons in birthday wish section
  function setupBirthdayWishButtons() {
    const specialLinkBtn = document.getElementById('special-link-btn');

    if (specialLinkBtn) {
      specialLinkBtn.addEventListener('click', () => {
        // Replace with your desired link
        window.location.href = "https://example.com";
      });
    }
  }



  // Navigation click handler
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      const section = link.getAttribute('data-section');
      loadContent(section);
      // Hide nav menu on mobile after click
      if (window.innerWidth <= 600) {
        navList.classList.remove('show');
      }
    });
  });

  // Setup photo scroll carousel
  function setupPhotoScroll() {
    const container = document.querySelector('.photo-scroll-container');
    if (!container) return;

    let scrollAmount = 0;
    const scrollStep = 1; // pixels per interval
    const scrollInterval = 20; // ms

    function autoScroll() {
      scrollAmount += scrollStep;
      if (scrollAmount >= container.scrollWidth - container.clientWidth) {
        scrollAmount = 0;
      }
      container.scrollLeft = scrollAmount;
    }

    setInterval(autoScroll, scrollInterval);
  }

  // Navbar toggle button click handler
  navToggle.addEventListener('click', () => {
    navList.classList.toggle('show');
  });

  // Load default section
  loadContent('birthday-wish');
});
