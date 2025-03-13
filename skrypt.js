document.addEventListener("DOMContentLoaded", function() {

 try {
        // Sprawdzenie dostępu do strony głównej Softr z iframe
        console.log("Sprawdzam dostęp do window.parent.document...");
        console.log(window.parent.document);
        
        // Jeśli się uda, oznacza to, że iframe ma dostęp do strony głównej
        console.log("Dostęp do window.parent.document jest możliwy!");
    } catch (error) {
        console.error("Brak dostępu do window.parent.document:", error);
    }
  
  const iframe = document.querySelector('iframe');
  
  // Sprawdzamy, czy iframe jest załadowane
  iframe.onload = function() {
    console.log("Iframe załadowany, uruchamiamy skrypt.");
    

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
