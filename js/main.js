// Cherry Blossom Animation
const canvas = document.getElementById('blossomCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Blossom {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = Math.random() * canvas.width;
        this.y = -20;
        this.size = Math.random() * 10 + 5;
        this.speed = Math.random() * 2 + 1;
        this.angle = Math.random() * Math.PI * 2;
        this.rotation = Math.random() * 360;
    }

    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation * Math.PI / 180);
        ctx.fillStyle = `hsla(340, 100%, 80%, ${Math.random() * 0.5 + 0.3})`;
        ctx.beginPath();
        ctx.arc(0, 0, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }

    update() {
        this.y += this.speed;
        this.x += Math.sin(this.angle) * 2;
        this.angle += 0.01;
        this.rotation += 2;

        if (this.y > canvas.height) this.reset();
    }
}

const blossoms = Array.from({ length: 100 }, () => new Blossom());

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    blossoms.forEach(blossom => {
        blossom.update();
        blossom.draw();
    });
    requestAnimationFrame(animate);
}

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    AOS.init();
    animate();

    // Navbar hide/show on scroll
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > lastScroll) {
            document.querySelector('.navbar').classList.add('hidden');
        } else {
            document.querySelector('.navbar').classList.remove('hidden');
        }
        lastScroll = currentScroll;
    });

    // Parallax effect
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        gsap.to('.parallax-img', {
            x: x,
            y: y,
            duration: 1,
            ease: "power2.out"
        });
    });

    // Card hover effects
    document.querySelectorAll('.server-card, .donate-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -10,
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });
});

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
