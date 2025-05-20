// JavaScript Document
        const navLinks = document.querySelectorAll('nav a');
        const sections = document.querySelectorAll('section');
        
        window.addEventListener('scroll', () => {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (window.pageYOffset >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === current) {
                    link.classList.add('active');
                }
            });
        });
        
        // Eventos para los enlaces de navegación
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Remover clase activa de todos los enlaces
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Añadir clase activa al enlace clicado
                this.classList.add('active');
                
                // Obtener el ID del destino
                const targetId = this.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                
                // Hacer scroll suave hasta la sección
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: 'smooth'
                });
            });
        });
        
        // Botón volver arriba
        const scrollToTopBtn = document.getElementById('scrollToTop');
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.style.display = 'block';
            } else {
                scrollToTopBtn.style.display = 'none';
            }
        });
        
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Modal de galería
        const galleryItems = document.querySelectorAll('.gallery-item');
        const modal = document.getElementById('imageModal');
        const modalImg = document.getElementById('modalImg');
        const closeBtn = document.getElementsByClassName('close')[0];
        
        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                modal.style.display = 'flex';
                modalImg.src = item.querySelector('img').src;
            });
        });
        
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
        
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
        
        // Formulario de contacto
        const contactForm = document.getElementById('contactForm');
        
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Aquí normalmente iría la lógica para enviar el formulario
            // Simulamos un envío exitoso
            alert('¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.');
            contactForm.reset();
        });
        
        // Contador para productos
        const products = document.querySelectorAll('.product');
        
        products.forEach(product => {
            product.addEventListener('mouseenter', () => {
                // Efecto al pasar el mouse
                product.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
            });
            
            product.addEventListener('mouseleave', () => {
                // Restaurar al salir el mouse
                product.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
            });
        });
        
        // Animación simple para características
        const features = document.querySelectorAll('.feature');
        
        window.addEventListener('scroll', () => {
            features.forEach(feature => {
                const featurePosition = feature.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;
                
                if (featurePosition < screenPosition) {
                    feature.style.opacity = '1';
                    feature.style.transform = 'translateY(0)';
                }
            });
        });
        
        // Inicialización
        document.addEventListener('DOMContentLoaded', () => {
            // Establecer opacidad inicial para animación
            features.forEach(feature => {
                feature.style.opacity = '0';
                feature.style.transform = 'translateY(20px)';
                feature.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            });
            
            // Disparar el evento scroll para activar animaciones iniciales
            window.dispatchEvent(new Event('scroll'));
        });