'use client';
import { useState, useEffect } from 'react';
import { 
  Phone, 
  PhoneCall, 
  Truck, 
  Wrench, 
  Car, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  Menu, 
  X, 
  MessageCircle,
  ChevronRight,
  MapPin
} from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

// --- Components ---

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-red-600 text-white p-2 rounded-lg">
            <Truck size={24} strokeWidth={2.5} />
          </div>
          <span className="text-2xl font-bold text-slate-900 tracking-tight">Auto<span className="text-red-600">Hilfe</span>24</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          <a href="#leistungen" className="text-slate-600 hover:text-red-600 font-medium transition-colors">Leistungen</a>
          <a href="#vorteile" className="text-slate-600 hover:text-red-600 font-medium transition-colors">Vorteile</a>
          <a href="#preise" className="text-slate-600 hover:text-red-600 font-medium transition-colors">Preise</a>
        </nav>

        {/* Emergency Contact Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <div className="text-right">
            <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">24/7 Notruf</p>
            <a href="tel:+49123456789" className="text-xl font-bold text-slate-900 hover:text-red-600 transition-colors">
              0800 123 45 67
            </a>
          </div>
          <a href="tel:+49123456789" className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-md font-bold flex items-center gap-2 transition-colors shadow-lg shadow-red-600/20">
            <PhoneCall size={18} />
            <span>Anrufen</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-slate-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl py-4 px-4 flex flex-col gap-4">
          <a href="#leistungen" className="block py-2 text-slate-800 font-medium border-b border-slate-50" onClick={() => setMobileMenuOpen(false)}>Leistungen</a>
          <a href="#vorteile" className="block py-2 text-slate-800 font-medium border-b border-slate-50" onClick={() => setMobileMenuOpen(false)}>Vorteile</a>
          <a href="tel:+49123456789" className="mt-4 bg-red-600 text-white text-center py-3 rounded-md font-bold flex items-center justify-center gap-2">
            <PhoneCall size={20} />
            0800 123 45 67
          </a>
        </div>
      )}
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/ab.png" 
          alt="Abschleppwagen im Einsatz auf Autobahn" 
          className="w-full h-full object-cover opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-500/30 text-red-400 text-sm font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            Hamburgweit 24/7 im Einsatz
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Schnelle Hilfe, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">wenn Sie stehen bleiben.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-xl">
            Pannenhilfe und Abschleppdienst in ganz Europa. Wir sind in 30 Minuten bei Ihnen – transparent, fair und professionell.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href="tel:+49123456789" className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-md font-bold text-lg flex items-center justify-center gap-3 transition-transform hover:scale-105 shadow-xl shadow-red-600/30">
              <PhoneCall size={24} />
              Jetzt Notruf wählen
            </a>
            <a href="https://wa.me/49123456789" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-[#25D366] hover:bg-[#1ebd5a] text-white px-8 py-4 rounded-md font-bold text-lg flex items-center justify-center gap-3 transition-transform hover:scale-105 shadow-xl shadow-[#25D366]/30">
              <MessageCircle size={24} />
              Standort per WhatsApp
            </a>
          </div>

          {/* Quick Trust Indicators */}
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-red-500" />
              <span>Ankunft ø 30 Minuten</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-red-500" />
              <span>Fixpreise ohne versteckte Kosten</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-red-500" />
              <span>Für PKW & LKW</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TrustBar = () => {
  return (
    <div className="bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-slate-100">
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:px-6 pt-4 md:pt-0">
            <div className="bg-slate-50 p-3 rounded-full text-red-600">
              <Clock size={32} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg">24/7 Erreichbar</h3>
              <p className="text-slate-500 text-sm">Rund um die Uhr an 365 Tagen im Jahr für Sie im Einsatz.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 md:px-6 pt-4 md:pt-0">
            <div className="bg-slate-50 p-3 rounded-full text-red-600">
              <MapPin size={32} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg">Überall vor Ort</h3>
              <p className="text-slate-500 text-sm">Dichtes Partnernetzwerk für schnelle Hilfe in ganz Deutschland.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 md:px-6 pt-4 md:pt-0">
            <div className="bg-slate-50 p-3 rounded-full text-red-600">
              <ShieldCheck size={32} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg">Sicher & Zertifiziert</h3>
              <p className="text-slate-500 text-sm">Geschultes Personal und modernste Abschleppfahrzeuge.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: "PKW Abschleppdienst",
      desc: "Schneller und sicherer Transport Ihres defekten PKWs zur nächsten Werkstatt oder Ihrem Wunschort.",
      icon: <Car size={32} />,
      img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "LKW & Nutzfahrzeuge",
      desc: "Spezialisiert auf schwere Fahrzeuge. Wir bergen und schleppen LKW, Busse und Baumaschinen.",
      icon: <Truck size={32} />,
      img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Pannenhilfe vor Ort",
      desc: "Oft können wir das Problem direkt am Straßenrand lösen. Starthilfe, Batterietausch oder Fehlersuche.",
      icon: <Wrench size={32} />,
      img: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="leistungen" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Unsere Leistungen</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Wir bieten ein umfassendes Spektrum an Dienstleistungen rund um Pannenhilfe und Bergung.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-lg z-20 text-red-600">
                  {service.icon}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6 line-clamp-3">
                  {service.desc}
                </p>
                <a href="tel:+49123456789" className="inline-flex items-center text-red-600 font-bold hover:text-red-700 transition-colors">
                  Details ansehen <ChevronRight size={18} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const InfoSection = () => {
  return (
    <section id="vorteile" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Mechaniker bei der Arbeit" 
                className="w-full h-auto object-cover"
              />
              {/* Highlight Box akin to AWHelp24 */}
              <div className="absolute bottom-0 left-0 right-0 bg-[#facc15] p-6 text-slate-900">
                <h4 className="font-bold text-xl mb-2">Warum wir die bessere Wahl sind?</h4>
                <p className="text-sm font-medium">Wir kombinieren die Stärke eines großen Netzwerks mit der Flexibilität lokaler Partner.</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
              Ihre Sicherheit ist unser Auftrag.
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Egal ob Sie mit einem platten Reifen auf der Landstraße stehen, Ihr Motor auf der Autobahn streikt oder Ihr LKW eine Fehlermeldung anzeigt – wir haben die Lösung und das passende Gerät.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "Kostenlose telefonische Erstberatung",
                "Transparente Preisgestaltung vor Auftragsbeginn",
                "Zusammenarbeit mit allen gängigen Schutzbriefen",
                "Sichere Verwahrung von Fahrzeugen auf unserem Hof",
                "Organisation von Mietwagen oder Hotelübernachtungen"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-1 bg-red-100 p-1 rounded-full text-red-600 shrink-0">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <button className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-md font-bold transition-colors">
              Mehr über uns erfahren
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="bg-red-600 py-16 relative overflow-hidden">
      {/* Abstract Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-black blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
          Panne? Warten Sie nicht länger.
        </h2>
        <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
          Unsere Disponenten nehmen Ihren Anruf rund um die Uhr entgegen und schicken sofort den nächstgelegenen Einsatzwagen zu Ihnen.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 w-full px-4 sm:px-0">
          <a href="tel:+49123456789" className="w-full sm:w-auto bg-white text-red-600 px-8 py-4 rounded-md font-bold text-lg flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors shadow-lg">
            <Phone size={22} />
            0800 123 45 67 wählen
          </a>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-red-600 text-white p-1.5 rounded-lg">
                <Truck size={20} strokeWidth={2.5} />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">Auto<span className="text-red-600">Hilfe</span>24</span>
            </div>
            <p className="text-sm text-slate-400 mb-6">
              Ihr zuverlässiger Partner für Pannenhilfe, Bergung und Abschleppdienst in ganz Deutschland. 24 Stunden, 7 Tage die Woche.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Schnelllinks</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-red-400 transition-colors">Startseite</a></li>
              <li><a href="#leistungen" className="hover:text-red-400 transition-colors">Leistungen</a></li>
              <li><a href="#preise" className="hover:text-red-400 transition-colors">Preise & Tarife</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">Über uns</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Rechtliches</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-red-400 transition-colors">Impressum</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">Datenschutz</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">AGB</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">Widerrufsbelehrung</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Kontakt</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-red-500 mt-1 shrink-0" />
                <span>Musterstraße 123<br/>12345 Berlin, Deutschland</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-red-500 shrink-0" />
                <a href="tel:+49123456789" className="hover:text-white">0800 123 45 67</a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle size={16} className="text-red-500 shrink-0" />
                <a href="mailto:info@autohilfe24.de" className="hover:text-white">info@autohilfe24.de</a>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 text-sm text-center text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} AutoHilfe24. Alle Rechte vorbehalten.</p>
          
        </div>
      </div>
    </footer>
  );
};

const PHONE = "49123456789"; // E.164 without +
const DISPLAY_PHONE = "+49 123 45 67 89";

const quickReplies = [
  {
    icon: Car,
    label: "PKW-Pannenhilfe",
    message: "Hallo, ich brauche Pannenhilfe für mein Auto. Mein Standort: ",
  },
  {
    icon: Truck,
    label: "LKW-Abschleppdienst",
    message: "Hallo, ich brauche einen LKW-Abschleppdienst. Mein Standort: ",
  },
  {
    icon: MapPin,
    label: "Standort teilen",
    message: "Hallo, ich brauche sofort Hilfe. Mein Standort ist: ",
  },
  {
    icon: Phone,
    label: "Rückruf anfordern",
    message: "Hallo, bitte rufen Sie mich zurück. Meine Nummer: ",
  },
];

const WhatsAppWidget = () => {
  const [open, setOpen] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      if (!hasInteracted) setShowPrompt(true);
    }, 8000);
    return () => clearTimeout(t);
  }, [hasInteracted]);

  const openWhatsApp = (message: string) => {
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${PHONE}?text=${encoded}`, "_blank");
    setHasInteracted(true);
    setShowPrompt(false);
  };

  const handleToggle = () => {
    setOpen(!open);
    setShowPrompt(false);
    setHasInteracted(true);
  };

  return (
    <>
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[60] flex flex-col items-end gap-3">
        {/* Teaser bubble */}
        <AnimatePresence>
          {showPrompt && !open && (
            <motion.button
              initial={{ opacity: 0, x: 20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.9 }}
              onClick={handleToggle}
              className="relative max-w-[calc(100vw-2rem)] sm:max-w-[280px] bg-white text-slate-900 px-4 py-3 shadow-2xl rounded-lg border border-slate-900/10 hover:border-[#25D366] transition text-left group"
            >
              <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white border-b border-r border-slate-900/10 rotate-45" style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }} />
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                <span className="font-mono text-[9px] uppercase tracking-widest text-slate-400">Einsatzzentrale · Online</span>
              </div>
              <div className="text-sm leading-snug font-medium">
                Brauchen Sie Hilfe? <span className="text-[#25D366]">Antwort in &lt; 2 Min.</span>
              </div>
              {/* Close X */}
              <button onClick={(e) => { e.stopPropagation(); setShowPrompt(false); }} className="absolute -top-2 -right-2 w-5 h-5 bg-slate-900 text-white rounded-full flex items-center justify-center text-xs hover:bg-red-600 transition">
                <X className="w-3 h-3" />
              </button>
            </motion.button>
          )}
        </AnimatePresence>

        {/* Chat Panel */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="w-[360px] max-w-[calc(100vw-2rem)] bg-white shadow-2xl rounded-xl overflow-hidden border border-slate-900/10 flex flex-col max-h-[80vh] sm:max-h-[650px]"
            >
              {/* Fixed Header */}
              <div className="relative bg-[#25D366] text-white p-4 shrink-0">
                <div className="relative flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                        <img src="/whatsapp.png" alt="WhatsApp" className="w-5 h-5 object-contain" />
                      </div>
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#25D366] rounded-full border-2 border-white" />
                    </div>
                    <div>
                      <div className="font-bold text-base leading-tight">AutoHilfe24</div>
                      <div className="flex items-center gap-1.5 text-[10px] opacity-95">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        <span>Einsatzzentrale · Online</span>
                      </div>
                    </div>
                  </div>
                  <button onClick={handleToggle} className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center transition">
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Scrollable Middle Area (Messages + Quick Replies) */}
              <div className="flex-1 overflow-y-auto bg-[#ECE5DD] custom-scrollbar">
                {/* Agent Messages */}
                <div className="px-4 py-5 space-y-3">
                  <div className="flex">
                    <div className="relative max-w-[85%] bg-white px-3.5 py-2 rounded-lg rounded-tl-none shadow-sm">
                      <div className="font-mono text-[9px] text-[#25D366] font-semibold tracking-wider uppercase mb-0.5">Dispatcher · Max</div>
                      <div className="text-sm text-slate-900 leading-relaxed">Hallo! 👋 Ich bin Max. Wobei kann ich helfen?</div>
                    </div>
                  </div>
                </div>

                {/* Quick replies section */}
                <div className="p-4 bg-white/60 backdrop-blur-sm border-t border-slate-900/5 space-y-2">
                  <div className="font-mono text-[9px] tracking-widest uppercase text-slate-500 mb-2 px-1">
                    — Schnellauswahl
                  </div>
                  {quickReplies.map((r, i) => (
                    <motion.button
                      key={r.label}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      onClick={() => openWhatsApp(r.message)}
                      className="active:scale-[0.98] w-full flex items-center gap-3 px-3 py-2.5 border border-slate-900/10 bg-white rounded-lg hover:border-[#25D366] hover:bg-[#25D366]/5 transition text-left group"
                    >
                      <div className="w-7 h-7 rounded-full bg-slate-900/5 group-hover:bg-[#25D366] group-hover:text-white flex items-center justify-center transition shrink-0">
                        <r.icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="flex-1 text-xs font-semibold text-slate-900">
                        {r.label}
                      </span>
                      <span className="text-[#25D366] text-lg opacity-0 group-hover:opacity-100 transition">→</span>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Fixed Footer Actions */}
              <div className="p-3 bg-slate-900 text-white shrink-0">
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`https://wa.me/${PHONE}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md flex items-center justify-center gap-2 bg-[#25D366] py-2.5 text-xs font-bold hover:brightness-110 transition"
                  >
                    <img src="/whatsapp.png" alt="W" className="w-3.5 h-3.5 brightness-0 invert" />
                    WhatsApp
                  </a>
                  <a
                    href={`tel:+${PHONE}`}
                    className="rounded-md flex items-center justify-center gap-2 border border-white/20 py-2.5 text-xs font-bold hover:bg-white/10 transition"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    Anrufen
                  </a>
                </div>
                <div className="mt-3 text-center">
                  <div className="font-mono text-[8px] tracking-wider text-slate-400 uppercase">
                    Verschlüsselt · DSGVO-konform
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Floating Button */}
        <motion.button
          onClick={handleToggle}
          whileTap={{ scale: 0.92 }}
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center transition shadow-xl shadow-[#25D366]/30"
        >
          {open ? <X className="w-6 h-6 sm:w-7 sm:h-7" /> : <img src="/whatsapp.png" className="w-7 h-7 sm:w-8 sm:h-8" />}
          {!open && !hasInteracted && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-600 text-white rounded-full flex items-center justify-center text-[10px] font-bold border-2 border-white">
              1
            </span>
          )}
        </motion.button>
      </div>
    </>
  );
};
export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-red-200 selection:text-red-900 scroll-smooth">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <InfoSection />
        <CTA />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}