import FontFaceObserver from 'fontfaceobserver';

const Fonts = (): void => {
  const link = document.createElement('link');
  link.href =
    'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap';
  link.rel = 'stylesheet';

  document.head.appendChild(link);

  const poppins = new FontFaceObserver('Poppins');

  poppins.load().then(() => {
    document.documentElement.classList.add('poppins');
  });
};

export default Fonts;
