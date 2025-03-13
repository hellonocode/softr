document.addEventListener("DOMContentLoaded", function() {
  const iframe = document.querySelector('iframe');
  
  // Sprawdzamy, czy iframe jest załadowane
  iframe.onload = function() {
    console.log("Iframe załadowany, uruchamiamy skrypt.");
    console.log(window.parent.document);

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
  };
});
