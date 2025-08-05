// Slideshow functionality
class SlideshowManager {
    constructor() {
        this.currentSlide = 1;
        this.totalSlides = 5; // Updated for JavaScript slideshow
        this.isFullscreen = false;
        this.init();
    }

    init() {
        this.bindEvents();
        this.updateSlideCounter();
        this.updateProgressBar();
        this.setupTabs();
        this.animateSlideContent();
        

        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            console.log('Key pressed:', e.key);
            
            switch(e.key) {
                case 'ArrowLeft':
                    e.preventDefault();
                    console.log('Previous slide triggered by keyboard');
                    this.previousSlide();
                    break;
                case 'ArrowRight':
                case ' ':
                    e.preventDefault();
                    console.log('Next slide triggered by keyboard');
                    this.nextSlide();
                    break;
                case 'Home':
                    e.preventDefault();
                    console.log('Going to first slide');
                    this.goToSlide(1);
                    break;
                case 'End':
                    e.preventDefault();
                    console.log('Going to last slide');
                    this.goToSlide(this.totalSlides);
                    break;
                case 'F11':
                case 'f':
                    e.preventDefault();
                    console.log('Toggle fullscreen');
                    this.toggleFullscreen();
                    break;
                case 'Escape':
                    if (this.isFullscreen) {
                        e.preventDefault();
                        console.log('Exit fullscreen');
                        this.exitFullscreen();
                    }
                    break;
            }
        });

        // Prevent context menu on right click
        document.addEventListener('contextmenu', (e) => {
            if (e.target.closest('.slide-content')) {
                e.preventDefault();
            }
        });

        // Touch/swipe support for mobile
        this.setupTouchEvents();
    }

    bindEvents() {
        // Navigation buttons
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                console.log('Previous button clicked');
                this.previousSlide();
            });
        } else {
            console.error('Previous button not found');
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                console.log('Next button clicked');
                this.nextSlide();
            });
        } else {
            console.error('Next button not found');
        }
        
        // Export buttons removed
        
        // Fullscreen button
        const fullscreenBtn = document.getElementById('fullscreenBtn');
        if (fullscreenBtn) {
            fullscreenBtn.addEventListener('click', () => this.toggleFullscreen());
        }
        
        // Home button
        const homeBtn = document.getElementById('homeBtn');
        if (homeBtn) {
            homeBtn.addEventListener('click', () => {
                console.log('Home button clicked');
                window.location.href = 'index.html';
            });
        }
        
        // Export functionality removed

        // Slide indicators functionality removed as it's not in the current HTML
    }

    setupTabs() {
        const tabs = document.querySelectorAll('.tab');
        
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const targetTab = tab.dataset.tab;
                const parentContainer = tab.closest('.code-example, .python-example');
                
                if (parentContainer) {
                    // Remove active from all tabs in this container
                    parentContainer.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
                    parentContainer.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
                    
                    // Add active to clicked tab and corresponding content
                    tab.classList.add('active');
                    const targetContent = parentContainer.querySelector(`.tab-content[data-tab="${targetTab}"]`);
                    if (targetContent) {
                        targetContent.classList.add('active');
                    }
                }
            });
        });
        

    }

    setupTouchEvents() {
        let startX = 0;
        let startY = 0;
        let endX = 0;
        let endY = 0;

        document.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        });

        document.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            endY = e.changedTouches[0].clientY;
            this.handleSwipe();
        });

        const handleSwipe = () => {
            const deltaX = endX - startX;
            const deltaY = endY - startY;
            const minSwipeDistance = 50;

            if (Math.abs(deltaX) > Math.abs(deltaY)) {
                if (Math.abs(deltaX) > minSwipeDistance) {
                    if (deltaX > 0) {
                        this.previousSlide();
                    } else {
                    this.nextSlide();
                    }
                }
            }
        };

        this.handleSwipe = handleSwipe;
    }

    // Slide indicators functionality removed as it's not needed for current layout

    nextSlide() {
        console.log(`Next slide called. Current: ${this.currentSlide}, Total: ${this.totalSlides}`);
        if (this.currentSlide < this.totalSlides) {
            this.goToSlide(this.currentSlide + 1);
        } else {
            // Loop back to first slide
            this.goToSlide(1);
        }
    }

    previousSlide() {
        console.log(`Previous slide called. Current: ${this.currentSlide}, Total: ${this.totalSlides}`);
        if (this.currentSlide > 1) {
            this.goToSlide(this.currentSlide - 1);
        } else {
            // Loop to last slide
            this.goToSlide(this.totalSlides);
        }
    }

    goToSlide(slideNumber) {
        console.log(`Attempting to go to slide ${slideNumber}`);
        if (slideNumber < 1 || slideNumber > this.totalSlides) {
            console.log(`Invalid slide number: ${slideNumber}`);
            return;
        }
        
        // Get current and new slides
        const currentActiveSlide = document.querySelector('.slide.active');
        const newSlide = document.querySelector(`[data-slide="${slideNumber}"]`);
        
        if (!newSlide) {
            console.log(`Slide ${slideNumber} not found in DOM`);
            return;
        }
        
        // Determine slide direction for animation
        const isNext = slideNumber > this.currentSlide || (this.currentSlide === this.totalSlides && slideNumber === 1);
        const isPrev = slideNumber < this.currentSlide || (this.currentSlide === 1 && slideNumber === this.totalSlides);
        
        // Add direction classes for smooth transitions
        if (currentActiveSlide) {
            currentActiveSlide.classList.remove('active');
            currentActiveSlide.classList.add(isNext ? 'prev' : 'next');
            console.log('Removed active class from current slide');
        }
        
        // Add active class to new slide with direction
        newSlide.classList.add('active');
        newSlide.classList.remove('prev', 'next');
        
        this.currentSlide = slideNumber;
        this.updateSlideCounter();
        this.updateProgressBar();
        
        // Add a small delay before animating content for smoother transition
        setTimeout(() => {
            this.animateSlideContent();
        }, 300);
        
        console.log(`Successfully switched to slide ${slideNumber}`);
        
        // Update slide indicators (if they exist)
        document.querySelectorAll('.slide-indicator').forEach((indicator, index) => {
            indicator.classList.toggle('active', index + 1 === slideNumber);
        });
    }

    updateSlideCounter() {
        const counter = document.querySelector('.slide-counter');
        if (counter) {
            counter.textContent = `${this.currentSlide} / ${this.totalSlides}`;
        }
    }

    updateProgressBar() {
        // Progress bar functionality removed as it's not in the current HTML
        // This method is kept for future use if needed
    }

    animateSlideContent() {
        const activeSlide = document.querySelector('.slide.active');
        if (!activeSlide) return;
        
        // Reset all elements to initial state
        const allElements = activeSlide.querySelectorAll('.text-content h2, .text-content h3, .text-content p, .text-content li, .code-example, .slide-header h1, .slide-subtitle');
        allElements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px) scale(0.98)';
            element.style.transition = 'none';
        });
        
        // Animate slide header first
        const slideTitle = activeSlide.querySelector('.slide-header h1');
        const slideSubtitle = activeSlide.querySelector('.slide-subtitle');
        
        if (slideTitle) {
            setTimeout(() => {
                slideTitle.style.transition = 'all 1s cubic-bezier(0.4, 0, 0.2, 1)';
                slideTitle.style.opacity = '1';
                slideTitle.style.transform = 'translateY(0) scale(1)';
            }, 150);
        }
        
        if (slideSubtitle) {
            setTimeout(() => {
                slideSubtitle.style.transition = 'all 1s cubic-bezier(0.4, 0, 0.2, 1)';
                slideSubtitle.style.opacity = '1';
                slideSubtitle.style.transform = 'translateY(0) scale(1)';
            }, 250);
        }
        
        // Animate text content with smoother staggered timing
        const textElements = activeSlide.querySelectorAll('.text-content h2, .text-content h3, .text-content p, .text-content li');
        textElements.forEach((element, index) => {
            setTimeout(() => {
                element.style.transition = 'all 1s cubic-bezier(0.4, 0, 0.2, 1)';
                element.style.opacity = '1';
                element.style.transform = 'translateY(0) scale(1)';
            }, 350 + index * 100);
        });

        // Animate code examples with smoother effects
        const codeExamples = activeSlide.querySelectorAll('.code-example');
        codeExamples.forEach((codeExample, index) => {
            setTimeout(() => {
                codeExample.style.transition = 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)';
                codeExample.style.opacity = '1';
                codeExample.style.transform = 'translateX(0) scale(1)';
            }, 500 + index * 150);
        });
    }

    toggleFullscreen() {
        if (!this.isFullscreen) {
            this.enterFullscreen();
        } else {
            this.exitFullscreen();
        }
    }

    enterFullscreen() {
        const container = document.querySelector('.slideshow-container');
        
        if (container.requestFullscreen) {
            container.requestFullscreen();
        } else if (container.webkitRequestFullscreen) {
            container.webkitRequestFullscreen();
        } else if (container.msRequestFullscreen) {
            container.msRequestFullscreen();
        } else if (container.mozRequestFullScreen) {
            container.mozRequestFullScreen();
        }
        
        container.classList.add('fullscreen');
        this.isFullscreen = true;
        this.updateFullscreenButton();
        
        // Hide cursor after 3 seconds in fullscreen
        this.setupCursorHiding();
    }

    exitFullscreen() {
        const container = document.querySelector('.slideshow-container');
        
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        }
        
        container.classList.remove('fullscreen');
        this.isFullscreen = false;
        this.updateFullscreenButton();
        
        // Clear cursor hiding
        if (this.cursorTimeout) {
            clearTimeout(this.cursorTimeout);
        }
        document.body.style.cursor = '';
    }

    setupCursorHiding() {
        let cursorTimeout;
        
        const hideCursor = () => {
            document.body.style.cursor = 'none';
        };
        
        const showCursor = () => {
            document.body.style.cursor = '';
            clearTimeout(cursorTimeout);
            cursorTimeout = setTimeout(hideCursor, 3000);
        };
        
        if (this.isFullscreen) {
            cursorTimeout = setTimeout(hideCursor, 3000);
            document.addEventListener('mousemove', showCursor);
            
            this.cursorTimeout = cursorTimeout;
        }
    }

    updateFullscreenButton() {
        const fullscreenBtn = document.getElementById('fullscreenBtn');
        const icon = fullscreenBtn.querySelector('i');
        
        if (this.isFullscreen) {
            icon.className = 'fas fa-compress';
            fullscreenBtn.innerHTML = '<i class="fas fa-compress"></i> Exit Fullscreen';
        } else {
            icon.className = 'fas fa-expand';
            fullscreenBtn.innerHTML = '<i class="fas fa-expand"></i> Fullscreen';
        }
    }

    showExportModal() {
        document.getElementById('exportModal').style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    hideExportModal() {
        document.getElementById('exportModal').style.display = 'none';
        document.body.style.overflow = '';
    }

    async exportSlideshow(format) {
        this.hideExportModal();
        
        try {
            switch (format) {
            case 'pptx':
                await this.exportToPowerPoint();
                break;
            case 'pdf':
                await this.exportToPDF();
                break;
            case 'html':
                    await this.exportToHTML();
                break;
                default:
                    this.showError('Unsupported export format');
            }
        } catch (error) {
            console.error('Export failed:', error);
            this.showError('Export failed. Please try again.');
        }
    }

    async exportToPowerPoint() {
        // Create a direct download link to the generated .pptx file
            const a = document.createElement('a');
        a.href = 'slides.pptx'; // Link to the file created by pandoc
        a.download = 'python_basics_slides.pptx';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        this.showSuccess('Downloading PowerPoint file...');
    }

    async exportToPDF() {
        // Use browser's print to PDF functionality
        this.showSuccess('Opening print dialog for PDF export...');
        
        // Set print styles
        document.body.classList.add('printing');
        
        setTimeout(() => {
            window.print();
            document.body.classList.remove('printing');
        }, 100);
    }

    async exportToHTML() {
        // Create a standalone HTML file
        const htmlContent = this.generateStandaloneHTML();
        const blob = new Blob([htmlContent], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = 'python_basics_slideshow.html';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        
        URL.revokeObjectURL(url);
        this.showSuccess('HTML file downloaded successfully!');
    }

    generateStandaloneHTML() {
        const currentHTML = document.documentElement.outerHTML;
        
        // Inline CSS and JS for standalone file
        const css = Array.from(document.styleSheets)
            .map(sheet => {
                try {
                    return Array.from(sheet.cssRules)
                        .map(rule => rule.cssText)
                        .join('\n');
                } catch (e) {
                    return '';
                }
            })
            .join('\n');
            
        return currentHTML.replace(
            '<link rel="stylesheet" href="styles.css">',
            `<style>${css}</style>`
        ).replace(
            '<script src="script.js"></script>',
            `<script>${this.getScriptContent()}</script>`
        );
    }

    getScriptContent() {
        // Return the current script content
        return `
            ${SlideshowManager.toString()}
            
            // Initialize slideshow
            document.addEventListener('DOMContentLoaded', () => {
                new SlideshowManager();
            });
        `;
    }

    showSuccess(message) {
        this.showNotification(message, 'success');
    }

    showError(message) {
        this.showNotification(message, 'error');
    }

    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Style the notification
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '15px 25px',
            borderRadius: '10px',
            color: 'white',
            fontWeight: '500',
            zIndex: '10000',
            transform: 'translateX(100%)',
            transition: 'transform 0.3s ease',
            backgroundColor: type === 'success' ? '#48bb78' : type === 'error' ? '#f56565' : '#4299e1'
        });
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }

    // Auto-advance slides (optional feature)
    startAutoAdvance(intervalMs = 10000) {
        this.autoAdvanceInterval = setInterval(() => {
            this.nextSlide();
        }, intervalMs);
    }

    stopAutoAdvance() {
        if (this.autoAdvanceInterval) {
            clearInterval(this.autoAdvanceInterval);
            this.autoAdvanceInterval = null;
        }
    }

    // Search functionality
    searchSlides(query) {
        const slides = document.querySelectorAll('.slide');
        const results = [];
        
        slides.forEach((slide, index) => {
            const content = slide.textContent.toLowerCase();
            if (content.includes(query.toLowerCase())) {
                results.push({
                    slideNumber: index + 1,
                    title: slide.querySelector('.slide-title')?.textContent || `Slide ${index + 1}`,
                    snippet: this.getSearchSnippet(content, query)
                });
            }
        });
        
        return results;
    }

    getSearchSnippet(content, query, maxLength = 100) {
        const index = content.toLowerCase().indexOf(query.toLowerCase());
        if (index === -1) return '';
        
        const start = Math.max(0, index - 50);
        const end = Math.min(content.length, index + query.length + 50);
        const snippet = content.substring(start, end);
        
        return (start > 0 ? '...' : '') + snippet + (end < content.length ? '...' : '');
    }
}

// Enhanced fullscreen API event listeners
document.addEventListener('fullscreenchange', handleFullscreenChange);
document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
document.addEventListener('mozfullscreenchange', handleFullscreenChange);
document.addEventListener('MSFullscreenChange', handleFullscreenChange);

function handleFullscreenChange() {
    const slideshow = window.slideshowManager;
    if (slideshow) {
        const isFullscreen = !!(document.fullscreenElement || 
                                document.webkitFullscreenElement || 
                                document.mozFullScreenElement || 
                                document.msFullscreenElement);
        
        if (!isFullscreen && slideshow.isFullscreen) {
            slideshow.exitFullscreen();
        }
    }
}

// Initialize slideshow when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.slideshowManager = new SlideshowManager();
    
    // Preload next slides for better performance
    preloadImages();
});

function preloadImages() {
    // Preload any images that might be used in slides
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (img.dataset.src) {
            img.src = img.dataset.src;
        }
    });
}

// Service Worker for offline functionality (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
} 