document.addEventListener("DOMContentLoaded", () => {
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(question => {
        question.addEventListener("click", () => {
            const faqItem = question.parentElement;
            
            // Check if this item is already open
            const isOpen = faqItem.classList.contains("active");

            // Close all open FAQ items first (Accordion effect)
            document.querySelectorAll(".faq-item").forEach(item => {
                item.classList.remove("active");
            });

            // If it wasn't open, open it now
            if (!isOpen) {
                faqItem.classList.add("active");
            }
        });
    });
});

