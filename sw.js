// Enregistrement du Service Worker pour la PWA
registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
          // Vérifier si la PWA est déjà installée
          if (window.matchMedia('(display-mode: standalone)').matches) {
            const installButton = document.getElementById('install-button');
            if (installButton) {
              installButton.style.display = 'none';
            }
          }
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    });
  }
}
