const Footer = () => {
  return (
    <footer className="bg-black/40 border-t border-orange/20 py-8 mt-12">
      <div className="container mx-auto px-4 text-center text-white/70">
        <p className="mb-4">© 2024 Miami RP. Все права защищены.</p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="hover:text-orange transition-colors">Discord</a>
          <a href="#" className="hover:text-orange transition-colors">VK</a>
          <a href="#" className="hover:text-orange transition-colors">Telegram</a>
          <a href="#" className="hover:text-orange transition-colors">YouTube</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;