document.querySelectorAll(".btn-primary").forEach(button => {

button.addEventListener("click", () => {

document.querySelector("#destinations").scrollIntoView({
behavior:"smooth"
});

});

});

let index = 0;

const testimonials = document.querySelectorAll(".testimonial");

setInterval(() => {

testimonials.forEach(item => {
item.style.display = "none";
});

testimonials[index].style.display = "block";

index++;

if(index >= testimonials.length){
index = 0;
}

},3000);
function showPlace(name, type = "destination") {
    const box = document.getElementById("detailsBox");
    const title = document.getElementById("placeTitle");
    const desc = document.getElementById("placeDesc");
    const price = document.getElementById("placePrice");
    const duration = document.getElementById("placeDuration");

    // Sample data (tum isko expand kar sakte ho)
    const data = {
        paris: {
            title: "Paris",
            desc: "City of Love and Lights",
            price: "₹1,20,000",
            duration: "5 Days"
        },
        bali: {
            title: "Bali",
            desc: "Tropical paradise with beaches",
            price: "₹90,000",
            duration: "6 Days"
        },
        tokyo: {
            title: "Tokyo",
            desc: "Modern city with tradition",
            price: "₹1,50,000",
            duration: "7 Days"
        },
        newyork: {
            title: "New York",
            desc: "The city that never sleeps",
            price: "₹1,80,000",
            duration: "5 Days"
        },
        luxury: {
            title: "Luxury Escape",
            desc: "5-star hotels, private tours",
            price: "₹2,50,000",
            duration: "7 Days"
        },
        adventure: {
            title: "Adventure Trek",
            desc: "Mountains, hiking, and thrill",
            price: "₹1,00,000",
            duration: "6 Days"
        },
        romantic: {
            title: "Romantic Getaway",
            desc: "Perfect trip for couples",
            price: "₹1,40,000",
            duration: "5 Days"
        }
    };

     const place = data[name];

    if (!place) return;

    // 💾 SAVE DATA (IMPORTANT)
    localStorage.setItem("package", JSON.stringify(place));

    // 🚀 OPEN PAYMENT PAGE
    window.location.href = "payment.html";
} const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}); const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.style.background = "#111";
        navbar.style.padding = "10px 30px";
    } else {
        navbar.style.background = "rgba(0,0,0,0.9)";
        navbar.style.padding = "15px 30px";
    }
})