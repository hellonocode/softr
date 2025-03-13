document.addEventListener("DOMContentLoaded", function() {
console.log("Skrypt został załadowany i uruchomiony.");
  // Tworzymy obserwatora, który monitoruje zmiany w DOM
  const observer = new MutationObserver(function(mutationsList, observer) {
    mutationsList.forEach(mutation => {
      if (mutation.type === 'childList') {
        // Znajdź wszystkie elementy z data-line-clamp="true"
        const elements = document.querySelectorAll('[data-line-clamp="true"]');
        
        // Zmieniaj atrybut na false
        elements.forEach(element => {
          element.setAttribute('data-line-clamp', 'false');
        });
      }
    });
  });

  // Konfigurujemy obserwatora, aby monitorował zmiany w całym dokumencie
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  // Odpalamy raz na załadowanie strony
  const elements = document.querySelectorAll('[data-line-clamp="true"]');
  elements.forEach(element => {
    element.setAttribute('data-line-clamp', 'false');
  });
});

// Przeszukaj wszystkie elementy na stronie
const elements = document.querySelectorAll('*');

// Dla każdego elementu, sprawdź, czy zawiera -webkit-line-clamp w stylach
elements.forEach(element => {
    const style = window.getComputedStyle(element);
    if (style.webkitLineClamp) {
        // Jeśli element ma -webkit-line-clamp, zmieniamy go na 'none'
        element.style.webkitLineClamp = 'none';
        console.log("Zmieniłem -webkit-line-clamp na none.");
    }
});
