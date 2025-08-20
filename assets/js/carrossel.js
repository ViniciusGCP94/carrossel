let currentSlideIndex = 0;
        const totalSlides = 5;
        
        function showSlide(index) {
            const slides = document.getElementById('carouselSlides');
            const dots = document.querySelectorAll('.dot');
            
            if (index >= totalSlides) currentSlideIndex = 0;
            if (index < 0) currentSlideIndex = totalSlides - 1;
            
            const translateX = -currentSlideIndex * 20; // 20% por slide (100% / 5 slides)
            slides.style.transform = `translateX(${translateX}%)`;
            
            dots.forEach(dot => dot.classList.remove('active'));
            dots[currentSlideIndex].classList.add('active');
        }
        
        function nextSlide() {
            currentSlideIndex++;
            if (currentSlideIndex >= totalSlides) {
                currentSlideIndex = 0;
            }
            showSlide(currentSlideIndex);
        }
        
        function prevSlide() {
            currentSlideIndex--;
            if (currentSlideIndex < 0) {
                currentSlideIndex = totalSlides - 1;
            }
            showSlide(currentSlideIndex);
        }
        
        function currentSlide(index) {
            currentSlideIndex = index - 1;
            showSlide(currentSlideIndex);
        }
        
        
        
        document.addEventListener('keydown', function(event) {
            if (event.key === 'ArrowLeft') {
                prevSlide();
            } else if (event.key === 'ArrowRight') {
                nextSlide();
            }
        });
        
        // Suporte para touch/swipe (básico)
        let startX = 0;
        let endX = 0;
        
        const carousel = document.querySelector('.carousel');
        
        carousel.addEventListener('touchstart', function(event) {
            startX = event.touches[0].clientX;
        });
        
        carousel.addEventListener('touchend', function(event) {
            endX = event.changedTouches[0].clientX;
            
            if (startX - endX > 50) {
                nextSlide(); 
            } else if (endX - startX > 50) {
                prevSlide(); 
            }
        });