// Navigation function for project cards
function navigateToProject(projectUrl) {
    // Add a subtle click animation
    event.currentTarget.style.transform = 'scale(0.98)';
    
    setTimeout(() => {
        window.location.href = projectUrl;
    }, 150);
}

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll-based animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);



// Add typing effect to the name
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    const nameElement = document.querySelector('.name');
    const originalText = nameElement.textContent;
    typeWriter(nameElement, originalText, 80);
});

// Add particle effect background
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    particlesContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
    `;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(56, 178, 172, 0.3);
            border-radius: 50%;
            animation: float ${Math.random() * 10 + 10}s infinite linear;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
        `;
        particlesContainer.appendChild(particle);
    }
    
    document.body.appendChild(particlesContainer);
}

// Add CSS for particle animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize particles
createParticles();

// Add hover sound effect (optional)
function addHoverSounds() {
    const cards = document.querySelectorAll('.project-card, .social-link, .resume-btn');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // You can add audio here if desired
            // const audio = new Audio('hover-sound.mp3');
            // audio.volume = 0.1;
            // audio.play();
        });
    });
}

addHoverSounds();

// Navbar Active Highlight
const sections = document.querySelectorAll("section, header");
const navLinks = document.querySelectorAll("nav ul li a");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
 
// Responsive Navbar Toggle
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });
}

// Mobile nav toggle that pushes content down
(function() {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector("nav ul");

  if (!menuToggle || !navMenu) return;

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    // Change icon between ☰ and ✖
    if (navMenu.classList.contains("open")) {
      menuToggle.innerHTML = '<i class="fas fa-times"></i>';
    } else {
      menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    }
  });
})();

// Mobile nav toggle that pushes content down
(function() {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector("nav ul");

  if (!menuToggle || !navMenu) return;

  function closeMenu() {
    navMenu.classList.remove("open");
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
  }

  function openMenu() {
    navMenu.classList.add("open");
    menuToggle.innerHTML = '<i class="fas fa-times"></i>';
  }

  menuToggle.addEventListener("click", () => {
    if (navMenu.classList.contains("open")) closeMenu();
    else openMenu();
  });

  // Close after clicking a link so content moves back up
  document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", () => {
      if (navMenu.classList.contains("open")) closeMenu();
    });
  });

  // If user rotates/resizes to desktop width, ensure menu is closed and nav returns to fixed if needed
  window.addEventListener("resize", () => {
    if (window.innerWidth > 500) {
      navMenu.classList.remove("open");
      menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
      // if you want nav fixed again on large screens that's controlled by your main CSS nav rule
    }
  });
})();



