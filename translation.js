var LANGS = {en:"English", es:"Español", fr:"Français", pt:"Português", sw:"Kiswahili", de:"Deutsch"};

var T = {
  en: {
    tag:"Reaching six million souls across six continents", verseLbl:"Verse of Hope", next:"Next Verse",
    install:"Install App", shareApp:"Share App", contact:"Contact Us", about:"About Developer",
    shareTitle:"Share this app", shareSub:"Send Biblefirm to someone who needs hope",
    bt:"Bluetooth", wa:"WhatsApp", fb:"Facebook",
    contactTitle:"Contact Us", contactSub:"Reach out to us anytime",
    devTitle:"About Developer", devRole:"Founder and Lead Developer, Biblefirm",
    devBio:"Building Progressive Web Apps that carry the Gospel to every nation through education, community, productivity and engagement.",
    noInstall:"Open the Chrome menu and tap Install app", installed:"App is already installed", installedOk:"App installed",
    shareFail:"Sharing is not available on this phone", notSet:"This contact is not set up yet",
    shareText:"Biblefirm Reach: the Word of God in six languages.",
    ticker:["Reaching six million souls across six continents","The Word of God in six languages","Install Biblefirm and share it with someone today"]
  },
  es: {
    tag:"Llegando a seis millones de almas en seis continentes", verseLbl:"Versículo de esperanza", next:"Siguiente versículo",
    install:"Instalar app", shareApp:"Compartir app", contact:"Contáctanos", about:"Acerca del desarrollador",
    shareTitle:"Compartir esta app", shareSub:"Envía Biblefirm a alguien que necesita esperanza",
    bt:"Bluetooth", wa:"WhatsApp", fb:"Facebook",
    contactTitle:"Contáctanos", contactSub:"Escríbenos cuando quieras",
    devTitle:"Acerca del desarrollador", devRole:"Fundador y desarrollador principal, Biblefirm",
    devBio:"Creamos aplicaciones web progresivas que llevan el Evangelio a todas las naciones mediante educación, comunidad, productividad y participación.",
    noInstall:"Abre el menú de Chrome y toca Instalar app", installed:"La app ya está instalada", installedOk:"App instalada",
    shareFail:"Compartir no está disponible en este teléfono", notSet:"Este contacto aún no está configurado",
    shareText:"Biblefirm Reach: la Palabra de Dios en seis idiomas.",
    ticker:["Llegando a seis millones de almas en seis continentes","La Palabra de Dios en seis idiomas","Instala Biblefirm y compártela hoy con alguien"]
  },
  fr: {
    tag:"Atteindre six millions d’âmes sur six continents", verseLbl:"Verset d’espérance", next:"Verset suivant",
    install:"Installer l’app", shareApp:"Partager l’app", contact:"Nous contacter", about:"À propos du développeur",
    shareTitle:"Partager cette app", shareSub:"Envoyez Biblefirm à quelqu’un qui a besoin d’espoir",
    bt:"Bluetooth", wa:"WhatsApp", fb:"Facebook",
    contactTitle:"Nous contacter", contactSub:"Écrivez-nous à tout moment",
    devTitle:"À propos du développeur", devRole:"Fondateur et développeur principal, Biblefirm",
    devBio:"Nous créons des applications web progressives qui portent l’Évangile à toutes les nations par l’éducation, la communauté, la productivité et l’engagement.",
    noInstall:"Ouvrez le menu de Chrome et touchez Installer l’application", installed:"L’app est déjà installée", installedOk:"App installée",
    shareFail:"Le partage n’est pas disponible sur ce téléphone", notSet:"Ce contact n’est pas encore configuré",
    shareText:"Biblefirm Reach : la Parole de Dieu en six langues.",
    ticker:["Atteindre six millions d’âmes sur six continents","La Parole de Dieu en six langues","Installez Biblefirm et partagez-la aujourd’hui"]
  },
  pt: {
    tag:"Alcançando seis milhões de almas em seis continentes", verseLbl:"Versículo de esperança", next:"Próximo versículo",
    install:"Instalar app", shareApp:"Compartilhar app", contact:"Fale conosco", about:"Sobre o desenvolvedor",
    shareTitle:"Compartilhar este app", shareSub:"Envie o Biblefirm a alguém que precisa de esperança",
    bt:"Bluetooth", wa:"WhatsApp", fb:"Facebook",
    contactTitle:"Fale conosco", contactSub:"Fale conosco a qualquer momento",
    devTitle:"Sobre o desenvolvedor", devRole:"Fundador e desenvolvedor principal, Biblefirm",
    devBio:"Criamos aplicativos web progressivos que levam o Evangelho a todas as nações por meio de educação, comunidade, produtividade e engajamento.",
    noInstall:"Abra o menu do Chrome e toque em Instalar app", installed:"O app já está instalado", installedOk:"App instalado",
    shareFail:"Compartilhar não está disponível neste telefone", notSet:"Este contato ainda não foi configurado",
    shareText:"Biblefirm Reach: a Palavra de Deus em seis idiomas.",
    ticker:["Alcançando seis milhões de almas em seis continentes","A Palavra de Deus em seis idiomas","Instale o Biblefirm e compartilhe hoje com alguém"]
  },
  sw: {
    tag:"Kuwafikia roho milioni sita katika mabara sita", verseLbl:"Aya ya Matumaini", next:"Aya Inayofuata",
    install:"Sakinisha Programu", shareApp:"Shiriki Programu", contact:"Wasiliana Nasi", about:"Kuhusu Msanidi",
    shareTitle:"Shiriki programu hii", shareSub:"Mtumie Biblefirm mtu anayehitaji matumaini",
    bt:"Bluetooth", wa:"WhatsApp", fb:"Facebook",
    contactTitle:"Wasiliana Nasi", contactSub:"Tuandikie wakati wowote",
    devTitle:"Kuhusu Msanidi", devRole:"Mwanzilishi na Msanidi Mkuu, Biblefirm",
    devBio:"Tunajenga programu za wavuti zinazopeleka Injili kwa mataifa yote kupitia elimu, jamii, tija na ushiriki.",
    noInstall:"Fungua menyu ya Chrome kisha gusa Sakinisha programu", installed:"Programu tayari imesakinishwa", installedOk:"Programu imesakinishwa",
    shareFail:"Kushiriki hakupatikani kwenye simu hii", notSet:"Mawasiliano haya bado hayajawekwa",
    shareText:"Biblefirm Reach: Neno la Mungu kwa lugha sita.",
    ticker:["Kuwafikia roho milioni sita katika mabara sita","Neno la Mungu kwa lugha sita","Sakinisha Biblefirm na umshirikishe mtu leo"]
  },
  de: {
    tag:"Sechs Millionen Seelen auf sechs Kontinenten erreichen", verseLbl:"Vers der Hoffnung", next:"Nächster Vers",
    install:"App installieren", shareApp:"App teilen", contact:"Kontakt", about:"Über den Entwickler",
    shareTitle:"Diese App teilen", shareSub:"Sende Biblefirm an jemanden, der Hoffnung braucht",
    bt:"Bluetooth", wa:"WhatsApp", fb:"Facebook",
    contactTitle:"Kontakt", contactSub:"Schreib uns jederzeit",
    devTitle:"Über den Entwickler", devRole:"Gründer und Lead-Entwickler, Biblefirm",
    devBio:"Wir entwickeln Progressive Web Apps, die das Evangelium durch Bildung, Gemeinschaft, Produktivität und Engagement zu allen Nationen bringen.",
    noInstall:"Öffne das Chrome-Menü und tippe auf App installieren", installed:"App ist bereits installiert", installedOk:"App installiert",
    shareFail:"Teilen ist auf diesem Telefon nicht verfügbar", notSet:"Dieser Kontakt ist noch nicht eingerichtet",
    shareText:"Biblefirm Reach: Gottes Wort in sechs Sprachen.",
    ticker:["Sechs Millionen Seelen auf sechs Kontinenten erreichen","Gottes Wort in sechs Sprachen","Installiere Biblefirm und teile sie noch heute"]
  }
};
