// Homepage JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('Homepage loaded successfully');
    
    // Add loading animation to buttons
    const openButtons = document.querySelectorAll('.open-btn');
    openButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const originalText = this.innerHTML;
            this.innerHTML = '<span class="loading"></span> Loading...';
            this.disabled = true;
            
            // Simulate loading time
            setTimeout(() => {
                this.innerHTML = originalText;
                this.disabled = false;
            }, 1000);
        });
    });
    
    // Add hover effects to cards
    const cards = document.querySelectorAll('.slideshow-card:not(.coming-soon)');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add click sound effect (optional)
    function playClickSound() {
        // Create a simple click sound using Web Audio API
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);
        
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
    }
    
    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        switch(e.key) {
            case 'Enter':
                // Open the first available slideshow
                const firstCard = document.querySelector('.slideshow-card:not(.coming-soon)');
                if (firstCard) {
                    firstCard.click();
                }
                break;
            case 'Escape':
                // Close any modals or return to previous page
                if (window.history.length > 1) {
                    window.history.back();
                }
                break;
        }
    });
    
    // Add smooth scrolling for better UX
    function smoothScrollTo(element, duration = 500) {
        const targetPosition = element.offsetTop;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;
        
        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }
        
        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }
        
        requestAnimationFrame(animation);
    }
    
    // Add intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all cards for animation
    cards.forEach(card => {
        observer.observe(card);
    });
    
    // Add analytics tracking (optional)
    function trackEvent(eventName, eventData = {}) {
        console.log(`Event: ${eventName}`, eventData);
        // Here you could integrate with Google Analytics, Mixpanel, etc.
    }
    
    // Track card interactions
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const slideshowName = this.querySelector('h3').textContent;
            trackEvent('slideshow_selected', {
                slideshow: slideshowName,
                timestamp: new Date().toISOString()
            });
        });
    });
    
    // Add performance monitoring
    window.addEventListener('load', function() {
        const loadTime = performance.now();
        console.log(`Page loaded in ${loadTime.toFixed(2)}ms`);
        trackEvent('page_load', { loadTime });
    });
});

// Global function to open slideshows
function openSlideshow(slideshowType) {
    console.log(`Opening slideshow: ${slideshowType}`);
    
    // Add loading state
    const button = event.target.closest('.open-btn');
    if (button) {
        const originalText = button.innerHTML;
        button.innerHTML = '<span class="loading"></span> Opening...';
        button.disabled = true;
    }
    
    // Track the event
    const slideshowName = event.target.closest('.slideshow-card').querySelector('h3').textContent;
    console.log(`User selected: ${slideshowName}`);
    
    // Navigate to the appropriate slideshow
    switch(slideshowType) {
        case 'python-basics':
            // Add a small delay for better UX
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 800);
            break;
        case 'javascript-fundamentals':
            // For future slideshows
            console.log('JavaScript Fundamentals coming soon!');
            setTimeout(() => {
                if (button) {
                    button.innerHTML = originalText;
                    button.disabled = false;
                }
            }, 1000);
            break;
        case 'react-basics':
            // For future slideshows
            console.log('React Basics coming soon!');
            setTimeout(() => {
                if (button) {
                    button.innerHTML = originalText;
                    button.disabled = false;
                }
            }, 1000);
            break;
        default:
            console.log('Unknown slideshow type:', slideshowType);
            setTimeout(() => {
                if (button) {
                    button.innerHTML = originalText;
                    button.disabled = false;
                }
            }, 1000);
    }
}

// Add service worker for offline functionality (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed');
            });
    });
}

// Add PWA manifest support (optional)
function addPWAFeatures() {
    // Add to home screen functionality
    let deferredPrompt;
    
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        console.log('PWA install prompt available');
    });
    
    window.addEventListener('appinstalled', () => {
        console.log('PWA was installed');
    });
}

// Initialize PWA features
addPWAFeatures(); 