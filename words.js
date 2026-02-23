// Schlummershuffle – Deutsche Wortliste
// Regeln (aus RESEARCH.md):
//   - Konkrete Substantive, Alltagsgegenstände
//   - Emotional neutral, angenehm
//   - Einfach, vertraut, leicht visualisierbar
//   - Nicht bedrohlich, nicht angsterzeugend
//   - Nicht abstrakt (keine Gefühle, keine Konzepte)

const words = {

// ============================================================
//  NATUR
// ============================================================
Natur: [
  'Baum','Berg','See','Wolke','Stein','Blume','Moos','Fels','Wurzel','Gras',
  'Pilz','Blatt','Ast','Rinde','Quelle','Farn','Kiesel','Muschel','Feder','Bernstein',
  'Koralle','Kristall','Tropfen','Welle','Schatten','Lichtung','Nebel','Tau','Regenbogen','Horizont',
  'Baumstamm','Felsbrocken','Sandkorn','Meeresschaum','Tannenzapfen','Eichel','Harz','Lehm',
  'Gestein','Klippe','Schotter','Geröll','Lavagestein','Sandstein','Granit','Quarz',
  'Obsidian','Achat','Jade','Opal','Saphir','Amethyst','Bergkristall','Feuerstein',
  'Kalkstein','Schiefer','Bimsstein','Kreide','Mergel','Basalt','Gneis',
  'Stalaktit','Stalagmit','Geode','Findling','Felsspitze','Berggipfel','Hochebene',
  'Erdschicht','Humus','Lehmboden','Sanddüne','Flussbett','Seeufer','Baumkrone',
  'Baumwurzel','Baumhöhle','Astgabel','Blattader','Baumrinde','Borkenkäfer',
  'Pilzhut','Moosbett','Farnwedel','Flechte','Treibholz','Schwemmholz',
  'Wellenkamm','Gischt','Brandung','Strömung','Strudel','Wasserwirbel','Wellental',
  'Morgenrot','Abendrot','Mondschein','Sonnenstrahl','Lichtfleck','Schattenspiel',
  'Nebelschleier','Nebelbank','Dunstschleier','Wolkendecke','Wolkenband',
  'Tautropfen','Raureif','Eiskristall','Schneeflocke','Hagelkorn',
  'Regentropfen','Regenpfütze','Rinnsaal','Rinnsal','Wasserfall','Sturzbach',
  'Springquelle','Geysir','Thermalquelle','Moorwasser','Sumpfgras',
  'Waldlichtung','Waldrand','Waldweg','Waldbach','Waldboden',
  'Gebirgsbach','Bergwiese','Almwiese','Bergsee','Gletschersee',
  'Felswand','Felsnase','Felsvorsprung','Gebirgspass','Bergsattel',
  'Flussaue','Flussmündung','Flussdelta','Altarm','Flussschleife',
  'Meeresbrise','Seeluft','Waldluft','Bergluft','Morgenluft',
],

// ============================================================
//  TIERE
// ============================================================
Tiere: [
  'Katze','Delfin','Eule','Schmetterling','Igel','Schildkröte','Pinguin','Seepferdchen',
  'Flamingo','Koala','Waschbär','Otter','Reh','Marienkäfer','Libelle','Kolibri',
  'Schnecke','Seestern','Fuchs','Hase','Krabbe','Papagei','Faultier','Biber',
  'Robbe','Gecko','Chamäleon','Eisvogel','Goldfisch','Glühwürmchen',
  'Eichhörnchen','Meise','Amsel','Rotkehlchen','Spatz','Schwalbe','Storch',
  'Kranich','Reiher','Pelikan','Albatros','Möwe','Kormoran','Tukan',
  'Pfau','Fasan','Rebhuhn','Wachtel','Taube','Zaunkönig','Nachtigall',
  'Lerche','Drossel','Star','Buchfink','Stieglitz','Zeisig','Kleiber',
  'Specht','Kuckuck','Mauersegler','Schwan','Ente','Gans','Fischadler',
  'Bussard','Falke','Milan','Habicht','Uhu','Kauz','Waldohreule',
  'Dachs','Marder','Wiesel','Hermelin','Feldhase','Wildkaninchen','Murmeltier',
  'Siebenschläfer','Hamster','Maulwurf','Spitzmaus','Fledermaus','Haselmaus',
  'Hirsch','Reh','Gemse','Steinbock','Wisent','Elch','Rentier',
  'Alpaka','Lama','Ziege','Schaf','Lamm','Kalb','Fohlen',
  'Pony','Esel','Kamel','Dromedar','Büffel','Bison','Yak',
  'Erdmännchen','Chinchilla','Meerschweinchen','Kaninchen','Zwerghamster',
  'Schildkröte','Gecko','Leguan','Molch','Salamander','Frosch','Kröte',
  'Axolotl','Chamäleon','Bartagame','Korallenfisch','Clownfisch','Kugelfisch',
  'Seepferdchen','Qualle','Tintenfisch','Krake','Nautilus','Seegurke',
  'Koralle','Anemone','Schwamm','Seelilie','Seeigel','Muschel',
  'Garnele','Hummer','Languste','Krebs','Einsiedlerkrebs',
  'Ameise','Biene','Hummel','Wespe','Grille','Zikade',
  'Glühwürmchen','Leuchtkäfer','Hirschkäfer','Nashornkäfer','Rosenkäfer',
  'Zitronenfalter','Admiral','Tagpfauenauge','Schwalbenschwanz','Bläuling',
  'Nachtfalter','Motte','Seidenraupe','Raupe','Puppe','Kokon',
  'Spinne','Weberknecht','Skorpion','Tausendfüßler','Asseln',
  'Regenwurm','Blutegel','Nacktschnecke','Weinbergschnecke',
  'Seehund','Walross','Seekuh','Narwal','Beluga','Blauwal',
  'Buckelwal','Orca','Delfin','Schweinswal','Rochen','Mantarochen',
  'Schildkröte','Meeresschildkröte','Suppenschildkröte','Karettschildkröte',
  'Panda','Koala','Känguru','Wombat','Schnabeltier','Opossum',
  'Lemur','Loris','Gibbon','Orang-Utan','Gorilla','Schimpanse',
  'Elefant','Nashorn','Nilpferd','Giraffe','Zebra','Okapi',
  'Gazelle','Antilope','Gnu','Springbock','Impala',
  'Löwe','Tiger','Leopard','Gepard','Schneeleopard','Luchs',
  'Wildkatze','Serval','Ozelot','Puma','Jaguar',
],

// ============================================================
//  LEBENSMITTEL
// ============================================================
Lebensmittel: [
  'Apfel','Brot','Käse','Kirsche','Honig','Erdbeere','Traube','Zimt',
  'Olive','Mango','Walnuss','Birne','Mandel','Himbeere','Vanille','Pfirsich',
  'Brombeere','Feige','Ingwer','Kiwi','Melone','Orange','Pflaume','Rosine',
  'Blaubeere','Dattel','Kokosnuss','Pistazie','Banane','Ananas',
  'Haselnuss','Cashew','Macadamia','Paranuss','Pekannuss','Maroni','Erdnuss',
  'Aprikose','Nektarine','Quitte','Mirabelle','Zwetschge','Stachelbeere',
  'Johannisbeere','Holunderbeere','Preiselbeere','Cranberry','Sanddorn',
  'Limette','Zitrone','Grapefruit','Mandarine','Kumquat','Passionsfrucht',
  'Litschi','Drachenfrucht','Papaya','Guave','Granatapfel','Kaki',
  'Rhabarber','Wassermelone','Honigmelone','Cantaloupe','Zuckermelone',
  'Tomate','Gurke','Paprika','Zucchini','Aubergine','Kürbis',
  'Kartoffel','Süßkartoffel','Karotte','Rübe','Radieschen','Rettich',
  'Kohlrabi','Sellerie','Fenchel','Pastinake','Topinambur','Meerrettich',
  'Brokkoli','Blumenkohl','Rosenkohl','Romanesco','Grünkohl','Wirsing',
  'Spinat','Mangold','Rucola','Feldsalat','Kopfsalat','Eisbergsalat',
  'Artischocke','Spargel','Bohne','Erbse','Linse','Kichererbse',
  'Mais','Reis','Hirse','Quinoa','Buchweizen','Hafer','Dinkel',
  'Roggen','Gerste','Bulgur','Couscous','Polenta','Grieß',
  'Nudel','Spaghetti','Penne','Tortellini','Ravioli','Gnocchi',
  'Brezel','Croissant','Brioche','Baguette','Ciabatta','Focaccia',
  'Pfannkuchen','Waffel','Crêpe','Bagel','Toastbrot','Pumpernickel',
  'Butter','Sahne','Quark','Joghurt','Milch','Buttermilch',
  'Mozzarella','Parmesan','Gouda','Brie','Camembert','Emmentaler',
  'Marmelade','Gelee','Kompott','Sirup','Karamell','Schokolade',
  'Marzipan','Nougat','Praline','Bonbon','Keks','Lebkuchen',
  'Zimtschnecke','Hefezopf','Strudel','Gugelhupf','Torte','Biskuit',
  'Pudding','Grütze','Mousse','Sorbet','Eiscreme','Frozen Joghurt',
  'Basilikum','Thymian','Rosmarin','Oregano','Salbei','Minze',
  'Petersilie','Schnittlauch','Dill','Koriander','Estragon','Majoran',
  'Lorbeer','Muskat','Nelke','Kardamom','Kurkuma','Safran',
  'Pfeffer','Paprikapulver','Kreuzkümmel','Anis','Fenchelsamen','Kümmel',
  'Sesam','Mohn','Leinsamen','Sonnenblumenkern','Kürbiskern','Chiasamen',
  'Tofu','Tempeh','Hummus','Tahini','Pesto','Olivenöl',
  'Essig','Senf','Ketchup','Sojasoße','Ahornsirup','Agavendicksaft',
  'Tee','Kakao','Kaffee','Saft','Limonade','Smoothie',
],

// ============================================================
//  HAUSHALT
// ============================================================
Haushalt: [
  'Kissen','Lampe','Tasse','Decke','Kerze','Buch','Schüssel','Vase',
  'Spiegel','Truhe','Korb','Teppich','Hocker','Regal','Dose','Krug',
  'Flasche','Glocke','Rahmen','Laterne','Schale','Tablett','Windlicht','Teekanne',
  'Kanne','Stuhl','Kommode','Vorhang','Gardine','Leselampe',
  'Sofa','Sessel','Ottomane','Schaukelstuhl','Hängematte','Sitzsack',
  'Bett','Matratze','Kopfkissen','Bettdecke','Laken','Überwurf',
  'Nachttisch','Stehlampe','Tischlampe','Wandlampe','Lichterkette','Lampion',
  'Teller','Untertasse','Suppenteller','Müslischale','Eierbecher','Butterdose',
  'Kaffeekanne','Milchkännchen','Zuckerdose','Sahnekännchen','Teesieb','Teelöffel',
  'Weinglas','Sektglas','Bierkrug','Wasserglas','Karaffe','Trinkflasche',
  'Besteck','Gabel','Messer','Löffel','Suppenkelle','Schneebesen',
  'Pfanne','Topf','Kasserolle','Schmortopf','Auflaufform','Backblech',
  'Mörser','Reibe','Sieb','Nudelholz','Teigschaber','Rührlöffel',
  'Brotdose','Vorratsglas','Einmachglas','Keksdose','Brotkorb','Obstschale',
  'Salzstreuer','Pfeffermühle','Ölkännchen','Essigflasche','Gewürzregal','Gewürzmühle',
  'Schneidebrett','Brotmesser','Schälmesser','Wiegemesser','Dosenöffner',
  'Wecker','Standuhr','Wanduhr','Sanduhr','Kuckucksuhr','Sonnenuhr',
  'Bilderrahmen','Wandbild','Poster','Fotobuch','Album','Kalender',
  'Blumentopf','Übertopf','Pflanzgefäß','Gießkanne','Blumenampel',
  'Handtuch','Waschlappen','Bademantel','Badetuch','Duschvorhang',
  'Seifenschale','Seifenspender','Zahnputzbecher','Kosmetikspiegel',
  'Wäschekorb','Kleiderbügel','Hutständer','Schuhregal','Garderobe',
  'Schlüsselbrett','Briefkasten','Türmatte','Fußmatte','Schirmständer',
  'Papierkorb','Mülleimer','Besen','Kehrblech','Staubwedel','Mopp',
  'Nähkästchen','Nähnadel','Garnrolle','Fingerhut','Stecknadel','Maßband',
  'Briefpapier','Umschlag','Stempel','Siegelwachs','Tintenfass','Füllfeder',
  'Lesezeichen','Bücherstütze','Lupe','Brieföffner','Locher','Hefter',
],

// ============================================================
//  KLEIDUNG
// ============================================================
Kleidung: [
  'Schal','Mütze','Handschuh','Stiefel','Hut','Mantel','Socke','Pullover',
  'Weste','Sandalen','Schleife','Gürtel','Kappe','Schuhe','Jacke','Kleid',
  'Hemd','Poncho','Pantoffeln','Fäustlinge',
  'Bluse','Rock','Hose','Jeans','Shorts','Bermuda','Leggins',
  'Blazer','Sakko','Anzug','Smoking','Frack','Wams','Tunika',
  'Krawatte','Fliege','Halstuch','Bandana','Stirnband','Schweißband',
  'Baskenmütze','Strohhut','Zylinder','Melone','Schiebermütze','Sonnenhut',
  'Regenjacke','Windbreaker','Parka','Daunenjacke','Trenchcoat','Cape',
  'Umhang','Kimono','Kaftan','Sarong','Wickelkleid','Sommerkleid',
  'Morgenmantel','Pyjama','Nachthemd','Schlafanzug','Hausschuhe',
  'Turnschuh','Sneaker','Ballerina','Pumps','Mokassin','Slipper',
  'Wanderschuh','Gummistiefel','Schneestiefel','Reiterstiefel','Halbschuh',
  'Armband','Halskette','Brosche','Anstecknadel','Manschettenknopf',
  'Ohrring','Ring','Armreif','Anhänger','Amulett','Medaillon',
  'Brille','Sonnenbrille','Monokel','Lorgnette',
  'Tasche','Rucksack','Beutel','Clutch','Geldbörse','Umhängetasche',
  'Regenschirm','Sonnenschirm','Gehstock','Fächer',
  'Schürze','Lätzchen','Hosenträger','Kummerbund','Gürtelschnalle',
  'Knopf','Reißverschluss','Druckknopf','Schnalle','Kordel','Quaste',
  'Spitze','Rüsche','Volant','Bordüre','Stickerei','Applikation',
],

// ============================================================
//  PFLANZEN
// ============================================================
Pflanzen: [
  'Sonnenblume','Kaktus','Efeu','Löwenzahn','Tulpe','Lavendel','Bambus',
  'Orchidee','Gänseblümchen','Rose','Lilie','Klee','Veilchen','Distel',
  'Hyazinthe','Jasmin','Nelke','Dahlie','Vergissmeinnicht','Primel',
  'Anemone','Aster','Begonie','Chrysantheme','Geranie','Gladiole',
  'Iris','Krokus','Magnolie','Narzisse','Päonie','Ranunkel',
  'Schneeglöckchen','Stiefmütterchen','Zinnie','Cosmea','Kornblume','Mohnblume',
  'Maiglöckchen','Hortensie','Fuchsie','Azalee','Rhododendron','Kamellie',
  'Oleander','Hibiskus','Passionsblume','Bougainvillea','Wisterie','Clematis',
  'Edelweiß','Enzian','Alpenrose','Arnika','Silberdistel','Aurikel',
  'Eiche','Buche','Birke','Linde','Ahorn','Ulme','Esche',
  'Kastanie','Platane','Pappel','Weide','Erle','Eberesche','Robinie',
  'Fichte','Tanne','Kiefer','Lärche','Zeder','Zypresse','Mammutbaum',
  'Olivenbaum','Feigenbaum','Mandelbaum','Kirschbaum','Apfelbaum','Birnbaum',
  'Pflaumenbaum','Walnussbaum','Kastanienbaum','Maulbeerbaum','Quittenbaum',
  'Rosenstrauch','Flieder','Holunder','Schneeball','Liguster','Berberitze',
  'Buchsbaum','Wacholder','Stechpalme','Haselnussstrauch','Johannisbeerstrauch',
  'Weinrebe','Hopfen','Glyzinie','Waldrebe','Jelängerjelieber',
  'Seerose','Lotusblume','Teichrose','Wasserlinse','Schilf','Rohrkolben',
  'Binse','Segge','Riedgras','Sumpfdotterblume','Wollgras',
  'Thymian','Rosmarin','Salbei','Basilikum','Minze','Melisse',
  'Kamille','Baldrian','Johanniskraut','Schafgarbe','Ringelblume','Echinacea',
  'Aloe','Sukkulente','Hauswurz','Fetthenne','Bogenhanf','Grünlilie',
  'Monstera','Philodendron','Gummibaum','Drachenbaum','Yucca','Palme',
  'Bananenstaude','Papyrus','Zyperngras','Ziergras','Pampasgras','Lampenputzergras',
],

// ============================================================
//  LANDSCHAFT
// ============================================================
Landschaft: [
  'Wiese','Hügel','Tal','Pfad','Insel','Strand','Düne','Klippe',
  'Grotte','Höhle','Schlucht','Ufer','Hafen','Brücke','Steg','Allee',
  'Garten','Park','Feld','Lichtung',
  'Waldrand','Waldweg','Waldlichtung','Forstweg','Hohlweg','Trampelpfad',
  'Schneise','Rodung','Schonung','Dickicht','Unterholz','Gestrüpp',
  'Bergwiese','Almwiese','Hochmoor','Niedermoor','Sumpf','Marsch',
  'Heide','Steppe','Savanne','Prärie','Tundra','Taiga',
  'Oase','Wüste','Sandwüste','Salzwüste','Salzpfanne','Canyon',
  'Fjord','Bucht','Lagune','Atoll','Riff','Sandbank',
  'Steilküste','Flachküste','Watt','Gezeiten','Tidenbecken','Priel',
  'Flussufer','Seeufer','Bachufer','Flussaue','Überschwemmungsgebiet',
  'Weinberg','Obstgarten','Olivenhain','Orangenhain','Reisfeld','Teeplantage',
  'Terrassenfeld','Acker','Kornfeld','Weizenfeld','Rapsfeld','Sonnenblumenfeld',
  'Blumenwiese','Kräuterwiese','Streuobstwiese','Wildblumenwiese',
  'Berggipfel','Bergkamm','Bergrücken','Bergpass','Hochplateau','Felsmassiv',
  'Vulkankegel','Krater','Caldera','Geysirfeld','Thermalgebiet',
  'Gletscher','Eisfeld','Moräne','Gletscherzunge','Firnfeld',
  'Tropfsteinhöhle','Eishöhle','Meereshöhle','Grotte','Felsendom',
  'Aussichtspunkt','Panorama','Fernsicht','Talblick','Bergblick',
],

// ============================================================
//  GEBÄUDE & BAUWERKE
// ============================================================
Gebäude: [
  'Leuchtturm','Mühle','Turm','Kapelle','Scheune','Pavillon','Hütte',
  'Schloss','Brunnen','Tor','Bogen','Treppe','Balkon','Terrasse','Kuppel',
  'Gewölbe','Arkade','Pergola','Ruine','Tempel',
  'Kirchturm','Glockenturm','Uhrturm','Aussichtsturm','Wasserturm','Windmühle',
  'Wassermühle','Sägemühle','Hammerschmiede','Schmiede','Werkstatt','Atelier',
  'Fachwerkhaus','Blockhaus','Bauernhaus','Landhaus','Villa','Herrenhaus',
  'Cottage','Bungalow','Chalet','Almhütte','Berghütte','Schutzhütte',
  'Gartenhaus','Gewächshaus','Orangerie','Wintergarten','Laube','Gartenlaube',
  'Rathaus','Marktplatz','Marktstand','Brunnenhaus','Waschhaus','Badehaus',
  'Bibliothek','Museum','Theater','Opernhaus','Konzertsaal','Kino',
  'Bahnhof','Haltestelle','Wartehäuschen','Brücke','Viadukt','Aquädukt',
  'Hafen','Pier','Mole','Anlegestelle','Bootshaus','Werft',
  'Kloster','Abtei','Kreuzgang','Refektorium','Sakristei','Apsis',
  'Dom','Kathedrale','Basilika','Münster','Stiftskirche','Dorfkirche',
  'Burg','Festung','Burgfried','Zugbrücke','Burggraben','Wehrturm',
  'Stadtmauer','Stadttor','Torhaus','Wachtturm','Zinne','Schießscharte',
  'Innenhof','Laubengang','Säulengang','Vorhalle','Portal','Rosette',
  'Giebel','Erker','Dachgaube','Mansarde','Dachfirst','Schornstein',
  'Veranda','Loggia','Söller','Altane','Galerie','Empore',
  'Wendeltreppe','Freitreppe','Stufe','Treppengeländer','Handlauf',
  'Pflasterstein','Kopfsteinpflaster','Gehweg','Promenade','Esplanade','Boulevard',
],

// ============================================================
//  HIMMEL & ASTRONOMIE
// ============================================================
Himmel: [
  'Stern','Mond','Komet','Sonne','Planet','Galaxie','Nordlicht',
  'Sternschnuppe','Halbmond','Morgenrot','Abendrot','Milchstraße',
  'Vollmond','Mondschein','Dämmerung',
  'Neumond','Mondsichel','Mondhof','Mondfinsternis','Sonnenfinsternis',
  'Abendstern','Morgenstern','Polarstern','Sternbild','Sternhaufen',
  'Nebel','Spiralnebel','Ringnebel','Supernova','Roter Riese',
  'Sonnenaufgang','Sonnenuntergang','Sonnenwende','Tagundnachtgleiche',
  'Wolkenformation','Zirruswolke','Kumuluswolke','Schäfchenwolke','Federwolke',
  'Regenbogen','Halo','Korona','Polarlicht','Zodiakallicht',
  'Sternenhimmel','Nachthimmel','Firmament','Zenit','Horizont',
  'Meteoritenschauer','Feuerkugel','Bolide','Iridiumblitz',
  'Mondlandschaft','Mondkrater','Mondsee','Mondgebirge',
  'Planetenring','Saturnring','Jupiterfleck','Marslandschaft',
  'Weltraumstation','Satellit','Raumkapsel','Astronaut','Teleskop',
  'Observatorium','Sternwarte','Planetarium','Astrolabium','Sonnenuhr',
],

// ============================================================
//  MUSIK & INSTRUMENTE
// ============================================================
Musik: [
  'Flöte','Trommel','Harfe','Geige','Glockenspiel','Klavier','Gitarre',
  'Triangel','Mundharmonika','Xylophon','Tambourin','Zither','Orgel',
  'Cello','Dudelsack',
  'Bratsche','Kontrabass','Violine','Viola','Laute','Mandoline',
  'Banjo','Ukulele','Balalaika','Sitar','Koto','Guzheng',
  'Querflöte','Panflöte','Blockflöte','Okarina','Pikkoloflöte','Klarinette',
  'Oboe','Fagott','Saxophon','Englischhorn','Akkordeon','Harmonium',
  'Kirchenorgel','Drehorgel','Spieluhr','Kalimba','Marimba','Vibraphon',
  'Pauke','Bongo','Conga','Djembe','Rahmentrommel','Snare',
  'Becken','Gong','Klangschale','Zimbel','Kastagnette','Rassel',
  'Regenstab','Windspiel','Maultrommel','Didgeridoo','Alphorn','Jagdhorn',
  'Trompete','Posaune','Waldhorn','Tuba','Flügelhorn','Kornett',
  'Notenbuch','Notenständer','Metronom','Stimmgabel','Plektrum','Bogen',
  'Taktstock','Mundstück','Saite','Taste','Pedal','Resonanzboden',
],

// ============================================================
//  MATERIALIEN & STOFFE
// ============================================================
Material: [
  'Seide','Wolle','Holz','Glas','Ton','Leinen','Samt','Kupfer',
  'Marmor','Porzellan','Keramik','Papier','Leder','Baumwolle','Filz',
  'Brokat','Taft','Chiffon','Organza','Tüll','Musselin',
  'Kaschmir','Mohair','Angora','Alpaka','Tweed','Flanell',
  'Cord','Denim','Segeltuch','Wachstuch','Ölzeug','Pergament',
  'Büttenpapier','Reispapier','Seidenpapier','Transparentpapier','Pappe','Karton',
  'Sandstein','Kalkstein','Granit','Basalt','Schiefer','Travertin',
  'Alabaster','Onyx','Jade','Achat','Bernstein','Perlmutt',
  'Koralle','Elfenbein','Horn','Knochen','Muschel','Schildpatt',
  'Eichenholz','Buchenholz','Nussbaum','Kirschholz','Ahornholz','Birkenholz',
  'Mahagoni','Teakholz','Zedernholz','Olivenholz','Bambusholz','Korkholz',
  'Bronze','Messing','Zinn','Silber','Gold','Platin',
  'Schmiedeeisen','Gusseisen','Stahl','Draht','Blattgold','Kupferblech',
  'Kristallglas','Milchglas','Buntglas','Bleiglas','Muranoglas','Fensterglas',
  'Steingut','Fayence','Majolika','Terrakotta','Steinzeug','Biskuitporzellan',
  'Wachs','Bienenwachs','Talg','Paraffin','Harz','Kolophonium',
  'Gips','Zement','Kalk','Lehm','Adobe','Ziegel',
],

// ============================================================
//  HANDWERK & WERKZEUG
// ============================================================
Handwerk: [
  'Pinsel','Nadel','Hammer','Schere','Faden','Stift','Spindel',
  'Webrahmen','Palette','Staffelei','Meißel','Töpferscheibe','Stempel',
  'Knopf','Perle',
  'Hobel','Säge','Feile','Raspel','Zange','Bohrer',
  'Schraubenzieher','Winkel','Wasserwaage','Lot','Zollstock','Lineal',
  'Zirkel','Schablone','Reißbrett','Zeichenstift','Kohle','Kreide',
  'Aquarellfarbe','Ölfarbe','Tempera','Tusche','Tinte','Pigment',
  'Spachtel','Kelle','Glättkelle','Fugenkelle','Maurerkelle',
  'Stricknadel','Häkelnadel','Webschiffchen','Spinnrad','Garnwinde',
  'Webstuhl','Stickrahmen','Nähmaschine','Nähkissen','Fingerhut',
  'Amboss','Esse','Blasebalg','Schmiedezange','Punze','Gravurstichel',
  'Drechselbank','Schnitzmeißel','Schnitzmesser','Laubsäge','Lötkolben',
  'Glasschneider','Glaserbrett','Bleistift','Radiergummi','Anspitzer',
  'Farbroller','Farbtopf','Abdeckband','Spannrahmen','Leinwand',
  'Brennofen','Glasur','Engobe','Modellierwerkzeug','Töpfermesser',
  'Buchdruck','Druckerpresse','Setzkasten','Letter','Walze','Farbband',
  'Lochzange','Ösenzange','Nietenzange','Crimpzange','Abisolierzange',
],

// ============================================================
//  GARTEN
// ============================================================
Garten: [
  'Schaukel','Zaun','Laterne','Gießkanne','Vogelhäuschen','Bank',
  'Sonnenuhr','Windspiel','Hecke','Rasen','Beet','Teich','Springbrunnen',
  'Gartentor','Rankgitter',
  'Gartenbank','Hollywoodschaukel','Hängematte','Liegestuhl','Sonnensegel',
  'Gartentisch','Gartenstuhl','Blumenkasten','Hochbeet','Kräuterbeet',
  'Rosenbogen','Spalier','Pergola','Pavillon','Gartenlaube','Gewächshaus',
  'Vogelhaus','Vogeltränke','Futterhaus','Nistkasten','Insektenhotel',
  'Regentonne','Regenfass','Gartenschlauch','Sprinkler','Bewässerung',
  'Rasenmäher','Harke','Rechen','Spaten','Schaufel','Hacke',
  'Gartenschere','Astschere','Heckenschere','Baumschere','Pflanzstab',
  'Komposthaufen','Kompostsieb','Mulch','Rindenmulch','Kies','Splitt',
  'Trittsteine','Gartenweg','Mäuerchen','Trockenmauer','Natursteinmauer',
  'Zierteich','Goldfischteich','Bachlauf','Wasserspiel','Quellstein',
  'Blumenampel','Hängetopf','Pflanzschale','Terrakottatopf','Zinkeimer',
  'Gartenleuchte','Solarlampe','Fackel','Grablicht','Lampion',
  'Sandkasten','Rutsche','Wippe','Klettergerüst','Baumhaus',
  'Gewürzregal','Kräuterspirale','Kräuterturm','Pflanzenwand',
  'Igelhaus','Bienenweide','Schmetterlingsstrauch','Wildblumensaat',
],

// ============================================================
//  WETTER & JAHRESZEITEN
// ============================================================
Wetter: [
  'Schneeflocke','Regentropfen','Windstille','Raureif','Eiszapfen',
  'Nieselregen','Sonnenschein','Wolkenbruch','Morgentau','Abendnebel',
  'Windhauch','Schneedecke','Lichtstrahl','Pfütze','Reif',
  'Landregen','Sprühregen','Regenschauer','Graupel','Schneeregen',
  'Schneesturm','Schneegestöber','Schneefall','Schneewehe','Schneeverwehung',
  'Frostblume','Eisblume','Eiskristall','Eisnadel','Eisregen',
  'Hagel','Hagelkorn','Hagelschauer','Graupelschauer',
  'Sonnenbrise','Abendwind','Morgenwind','Seewind','Bergwind',
  'Föhn','Passat','Monsun','Zephir','Brise',
  'Nebelschleier','Bodennebel','Hochnebel','Morgennebel','Abendnebel',
  'Gewitter','Wetterleuchten','Blitz','Donner','Donnerhall',
  'Regenprasseln','Windpfeifen','Schneeknirschen','Eisknirschen',
  'Sonnenwärme','Mittagshitze','Abendkühle','Morgenkühle','Nachtfrost',
  'Tauwetter','Schneeschmelze','Frühlingswärme','Herbstkühle','Winterkälte',
  'Sommerabend','Herbstmorgen','Wintermorgen','Frühlingsmorgen',
  'Herbstlaub','Herbstwind','Laubfall','Blätterregen','Blätterwirbel',
  'Frühblüher','Knospe','Blüte','Fruchtstand','Samenstand',
  'Ernte','Erntezeit','Lesezeit','Pflückzeit','Saatzeit',
],

// ============================================================
//  GEWÄSSER
// ============================================================
Gewässer: [
  'Teich','Bach','Wasserfall','Fluss','Lagune','Riff','Bucht',
  'Fjord','Meeresbucht','Geysir','Wildbach','Stausee','Tümpel',
  'Gezeitenbecken','Brandung',
  'Bergsee','Waldsee','Moorsee','Kratersee','Gletschersee','Steppensee',
  'Badesee','Baggersee','Mühlteich','Fischteich','Gartenteich','Zierteich',
  'Gebirgsbach','Waldbach','Wiesenbach','Mühlbach','Quellbach','Talbach',
  'Sturzbach','Gießbach','Rinnsal','Bächlein','Graben','Kanal',
  'Strom','Nebenfluss','Zufluss','Abfluss','Mündung','Delta',
  'Flussarm','Seitenarm','Altarm','Flussschleife','Mäander','Flussbiegung',
  'Stromschnelle','Kaskade','Katarakt','Gumpe','Kolk','Strudel',
  'Quelle','Mineralquelle','Heilquelle','Therme','Sprudel','Brunnen',
  'Ozean','Meer','See','Binnenmeer','Randmeer','Nebenmeer',
  'Meerenge','Sund','Kanal','Wasserstraße','Fahrrinne',
  'Gezeitenzone','Ebbstrom','Flutstrom','Springflut','Nipptide',
  'Wellenkamm','Wellental','Dünung','Schaumkrone','Gischt',
  'Tiefseegraben','Meeresgrund','Kontinentalschelf','Rücken','Schwelle',
  'Korallenriff','Saumriff','Barriereriff','Atoll','Lagune',
  'Mangrove','Watt','Priel','Sandbank','Nehrung','Haff',
],

// ============================================================
//  FAHRZEUGE & TRANSPORT
// ============================================================
Fahrzeuge: [
  'Fahrrad','Dreirad','Laufrad','Einrad','Tandem','Lastenrad',
  'Kutsche','Pferdewagen','Planwagen','Schlitten','Hundeschlitten','Rentierschlitten',
  'Segelboot','Ruderboot','Kanu','Kajak','Floß','Einbaum',
  'Segelschiff','Klipper','Schoner','Brigg','Galeone','Kogge',
  'Dampfschiff','Raddampfer','Fähre','Hausboot','Kahn','Gondel',
  'Fischerboot','Kutter','Jolle','Barkasse','Schaluppe','Pinasse',
  'Leuchtturmschiff','Feuerschiff','Rettungsboot','Beiboot','Boje',
  'Heißluftballon','Zeppelin','Luftschiff','Doppeldecker','Segelflieger',
  'Drachen','Gleiter','Fallschirm','Paraglider','Hängegleiter',
  'Dampflok','Lokomotive','Waggon','Draisine','Straßenbahn','Seilbahn',
  'Gondelbahn','Sessellift','Zahnradbahn','Standseilbahn','Einschienenbahn',
  'Handwagen','Bollerwagen','Schubkarre','Sackkarre','Leiterwagen',
  'Rikscha','Sänfte','Tragstuhl','Ochsenwagen','Karren',
  'Skateboard','Rollschuhe','Inliner','Roller','Kickboard',
  'Kinderwagen','Puppenwagen','Bobbycar','Gokart','Seifenkiste',
],

// ============================================================
//  SPIELZEUG & SPIELE
// ============================================================
Spielzeug: [
  'Teddybär','Puppe','Stofftier','Plüschtier','Holzpferd','Schaukelpferd',
  'Murmel','Kreisel','Jojo','Drachen','Seifenblase','Windrad',
  'Bauklötze','Legosteine','Holzklötze','Stapelturm','Steckspiel','Puzzle',
  'Spieluhr','Rassel','Xylophon','Kindertrompete','Tamburin','Trommel',
  'Ball','Hüpfball','Springball','Gummiball','Federball','Tischtennisball',
  'Springseil','Gummitwist','Hula-Hoop','Stelzen','Dosenstelzen',
  'Sandförmchen','Sandschaufel','Sandeimer','Sandburg','Sandkuchen',
  'Puppenhaus','Puppenstube','Puppenwagen','Puppenkleid','Puppenbett',
  'Kaufmannsladen','Spielküche','Werkbank','Arztkoffer','Verkleidungskiste',
  'Eisenbahn','Holzeisenbahn','Schienen','Bahnhof','Lokomotive',
  'Fingerpuppe','Handpuppe','Marionette','Kasperle','Theaterbühne',
  'Kartenspiel','Würfel','Spielbrett','Spielfigur','Spielstein',
  'Kaleidoskop','Fernrohr','Lupe','Schneekugel','Globus',
  'Knete','Modelliermasse','Fingerfarbe','Buntstift','Wachsmalstift',
  'Malbuch','Stempelbild','Kartoffeldruck','Scherenschnitt','Origami',
  'Diabolo','Jonglierball','Zauberstab','Zauberhut','Kartentrick',
],

// ============================================================
//  KÜCHE & BACKEN
// ============================================================
Küche: [
  'Teigschüssel','Rührschüssel','Messbecher','Küchenwaage','Backform',
  'Kastenform','Springform','Muffinform','Tarteform','Gugelhupfform',
  'Kuchenblech','Backpapier','Plätzchenausstecher','Teigrolle','Teigkarte',
  'Spritzbeutel','Spritztülle','Tortenheber','Kuchengitter','Auskühler',
  'Brotbackform','Gärkorb','Brotleinenttuch','Teigthermometer','Hefewürfel',
  'Waffeleisen','Crêpepfanne','Pfannenwender','Bratpfanne','Grillpfanne',
  'Dampfgarer','Tajine','Wok','Fondue','Raclette',
  'Saftpresse','Zitronenpresse','Knoblauchpresse','Kartoffelpresse',
  'Salatschleuder','Gemüseschäler','Spargelschäler','Apfelschäler',
  'Käsehobel','Trüffelhobel','Eierschneider','Ananasschneider',
  'Eisportionierer','Melonenkugler','Butterlocke','Garnierspritze',
  'Einmachglas','Marmeladenglas','Honigglas','Gewürzglas','Vorratsdose',
  'Pfeffermühle','Muskatreibe','Ingwerreibe','Käsereibe','Zestenreißer',
  'Fleischklopfer','Mörser','Stößel','Reibstein','Mahlstein',
  'Korkenzieher','Flaschenöffner','Nussknacker','Austernmesser',
  'Teesieb','Teeei','Kaffeemühle','Kaffeefilter','Espressokanne',
  'Milchaufschäumer','Teebereiter','Wasserkessel','Samowar','Teezeremonie',
],

// ============================================================
//  SCHREIBTISCH & PAPIER
// ============================================================
Schreibtisch: [
  'Füllfederhalter','Tintenfass','Federhalter','Löschwiege','Löschpapier',
  'Siegelring','Siegelwachs','Petschaft','Briefsiegel','Briefmarke',
  'Postkarte','Ansichtskarte','Briefumschlag','Kuvert','Telegramm',
  'Notizbuch','Tagebuch','Skizzenbuch','Gästebuch','Poesiealbum',
  'Bleistift','Buntstift','Druckbleistift','Radiergummi','Anspitzer',
  'Lineal','Geodreieck','Winkelmesser','Zirkel','Kurvenlineal',
  'Schere','Kleber','Tesafilm','Büroklammer','Reißzwecke','Pinnnadel',
  'Pinnwand','Magnettafel','Kreidetafel','Whiteboard','Flipchart',
  'Globus','Weltkarte','Landkarte','Stadtplan','Seekarte','Kompass',
  'Schreibtischlampe','Tischglobus','Briefbeschwerer','Stiftehalter','Ablagefach',
  'Aktenordner','Hängeregister','Kladde','Ringbuch','Schnellhefter',
  'Kalligraphiepinsel','Tuschefeder','Tuschestein','Tuschekasten','Schreibrohr',
  'Pergamentrolle','Papyrusrolle','Schriftrolle','Kodex','Foliante',
  'Lesebrille','Leselupe','Buchstütze','Lesezeichen','Lesepult',
],

// ============================================================
//  SCHMUCK & KOSTBARKEITEN
// ============================================================
Schmuck: [
  'Perle','Diamant','Rubin','Smaragd','Saphir','Amethyst',
  'Opal','Topas','Granat','Aquamarin','Turmalin','Peridot',
  'Lapislazuli','Türkis','Mondstein','Sonnenstein','Tigerauge','Rosenquarz',
  'Bergkristall','Citrin','Karneol','Aventurin','Jaspis','Hämatit',
  'Goldring','Silberring','Siegelring','Ehering','Freundschaftsring',
  'Halskette','Collier','Perlenkette','Korallenkette','Bernsteinkette',
  'Armband','Armreif','Bettelarmband','Perlenarmband','Lederarmband',
  'Brosche','Kamee','Fibel','Hutnadel','Ansteckblume',
  'Ohrring','Ohrstecker','Creole','Ohrgehänge','Ohrklemme',
  'Anhänger','Medaillon','Talisman','Amulett','Glücksbringer',
  'Diadem','Tiara','Krone','Reif','Stirnband',
  'Haarnadel','Haarspange','Haarkamm','Haarklammer','Haargummi',
  'Manschettenknopf','Krawattennadel','Reversnadel','Gürtelschnalle',
  'Schatulle','Schmuckkästchen','Schmuckrolle','Ringkissen','Samtbeutel',
],

// ============================================================
//  MARITIME WELT
// ============================================================
Maritim: [
  'Anker','Segel','Mast','Ruder','Steuerrad','Kompass',
  'Tau','Seil','Knoten','Poller','Klampe','Winsch',
  'Flagge','Wimpel','Signalfahne','Stander','Gösch',
  'Bullauge','Kajüte','Kombüse','Achterdeck','Bug','Heck',
  'Kiel','Rumpf','Steven','Planke','Bordwand','Reling',
  'Leuchtturm','Leuchtfeuer','Bake','Seezeichen','Boje','Tonne',
  'Lotse','Fernrohr','Sextant','Seekarte','Logbuch','Barometer',
  'Rettungsring','Schwimmweste','Signalhorn','Nebelhorn','Schiffsglocke',
  'Muschel','Seeschnecke','Strandgut','Treibgut','Flaschenpost',
  'Perle','Koralle','Schwamm','Seegras','Seetang','Alge',
  'Möwe','Albatros','Kormoran','Pelikan','Seeschwalbe','Papageientaucher',
  'Sandburg','Strandkorb','Strandmuschel','Strandsegel','Wellenbrecher',
  'Düne','Sandbank','Strandhafer','Strandnelke','Strandgras',
  'Fischernetz','Reuse','Harpune','Angel','Kescher','Fischkorb',
  'Seemannsgarn','Schifferknoten','Palstek','Kreuzknoten','Achterknoten',
],

// ============================================================
//  STOFFE & TEXTILIEN
// ============================================================
Textilien: [
  'Stickerei','Spitze','Häkeldecke','Strickschal','Webstück',
  'Quilt','Patchwork','Flickenteppich','Wandteppich','Gobelin',
  'Tischdecke','Tischläufer','Platzset','Serviette','Stoffserviette',
  'Bettwäsche','Kissenbezug','Bettlaken','Bettüberwurf','Tagesdecke',
  'Wolldecke','Fleecedecke','Kuscheldecke','Babydecke','Steppdecke',
  'Vorhang','Gardine','Rollo','Jalousie','Plissee','Raffrollo',
  'Wandbehang','Banner','Baldachin','Betthimmel','Moskitonetz',
  'Teppich','Läufer','Brücke','Kelim','Perserteppich','Flokatiteppich',
  'Badteppich','Fußmatte','Kokosläufer','Sisalläufer','Strohmatten',
  'Seidenschal','Kaschmirschal','Mohairschal','Wollschal','Pashmina',
  'Stola','Schultertuch','Umschlagtuch','Tragetuch','Wickeltuch',
  'Taschentuch','Stofftaschentuch','Einstecktuch','Halstuch','Kopftuch',
],

// ============================================================
//  ESSEN & TRINKEN (Gerichte)
// ============================================================
Gerichte: [
  'Suppe','Eintopf','Brühe','Bouillon','Consommé','Gazpacho',
  'Salat','Obstsalat','Kartoffelsalat','Nudelsalat','Krautsalat',
  'Omelett','Rührei','Spiegelei','Frittata','Quiche',
  'Pfannkuchen','Crêpe','Blini','Waffel','Kaiserschmarrn',
  'Knödel','Kloß','Nockerl','Spätzle','Schupfnudel',
  'Strudel','Buchteln','Dampfnudel','Germknödel','Marillenknödel',
  'Pizza','Focaccia','Bruschetta','Calzone','Flammkuchen',
  'Risotto','Polenta','Paella','Couscous','Taboulé',
  'Sushi','Maki','Onigiri','Tempura','Gyoza',
  'Curry','Dhal','Samosa','Naan','Chapati',
  'Falafel','Hummus','Taboulé','Baba Ghanoush','Labneh',
  'Guacamole','Tortilla','Burrito','Quesadilla','Empanada',
  'Fondue','Raclette','Rösti','Birchermüsli','Zopf',
  'Brezn','Semmel','Kipferl','Hörnchen','Stollen',
  'Lebkuchen','Zimtstern','Vanillekipferl','Spekulatius','Makrone',
  'Mousse','Crème brûlée','Panna cotta','Tiramisu','Zabaione',
  'Kompott','Grütze','Pudding','Milchreis','Grießbrei',
],

// ============================================================
//  MÄRCHEN & FANTASIE
// ============================================================
Märchen: [
  'Zauberstab','Zauberhut','Zauberspruch','Zaubertrank','Zauberkessel',
  'Krone','Zepter','Thron','Königsmantel','Herrscherkugel',
  'Schloss','Turmzimmer','Burggraben','Zugbrücke','Geheimgang',
  'Schatztruhe','Schatzkarte','Goldmünze','Edelstein','Kristallkugel',
  'Drachenschuppe','Einhornhaar','Feenstaub','Elfenflügel','Zwergenbart',
  'Märchenbuch','Pergamentrolle','Geheimschrift','Runen','Siegel',
  'Fliegender Teppich','Siebenmeilenstiefel','Tarnkappe','Wunschring','Zauberspiegel',
  'Spinnrad','Spindel','Goldener Faden','Silbernadel','Kristallschuh',
  'Rosenhecke','Dornenranke','Wunschbrunnen','Feenring','Pilzkreis',
  'Zauberbohne','Wunderlampe','Glückspfennig','Glücksklee','Hufeisen',
  'Laterne','Fackel','Kerze','Windlicht','Sternenlicht',
  'Feenschloss','Baumhaus','Höhle','Waldhütte','Lebkuchenhaus',
  'Rüstung','Schild','Schwert','Lanze','Bogen',
  'Helm','Kettenhemd','Brustpanzer','Armschiene','Beinschiene',
],

// ============================================================
//  REISE & ABENTEUER
// ============================================================
Reise: [
  'Koffer','Rucksack','Reisetasche','Seesack','Reisekiste',
  'Landkarte','Kompass','Fernglas','Fernrohr','Feldstecher',
  'Reisepass','Stempel','Visum','Bordkarte','Fahrkarte',
  'Zelt','Schlafsack','Isomatte','Campingkocher','Feldflasche',
  'Taschenlampe','Stirnlampe','Petroleumlampe','Sturmlaterne','Fackel',
  'Wanderstab','Wanderstock','Bergstock','Eispickel','Steigeisen',
  'Seil','Karabiner','Klettergurt','Helm','Stirnlampe',
  'Andenken','Souvenir','Ansichtskarte','Reisetagebuch','Fotoalbum',
  'Muschel','Kieselstein','Treibholz','Feder','Blütenblatt',
  'Postkarte','Briefmarke','Stempel','Siegel','Wachssiegel',
  'Schatzkarte','Pergament','Rolle','Spyglass','Astrolabium',
  'Proviant','Brotzeit','Lunchpaket','Trinkflasche','Thermoskanne',
  'Hängematte','Campingstuhl','Picknickdecke','Kühltasche','Grillrost',
  'Lagerfeuer','Grillstelle','Feuerstelle','Holzscheit','Zunder',
],

// ============================================================
//  WINTER & WEIHNACHTEN
// ============================================================
Winter: [
  'Schneemann','Schneekugel','Schneeflocke','Eiszapfen','Raureif',
  'Schlitten','Rodelschlitten','Bobschlitten','Hundeschlitten',
  'Schlittschuh','Eislaufbahn','Eisstockschießen','Schneeschuh','Skistock',
  'Handwärmer','Wollsocke','Ohrenwärmer','Wärmflasche','Heißgetränk',
  'Kamin','Kaminfeuer','Holzscheit','Kohlebecken','Ofenhandschuh',
  'Glühwein','Punsch','Kakao','Kinderpunsch','Bratapfel',
  'Lebkuchen','Zimtstern','Vanillekipferl','Spekulatius','Stollen',
  'Adventskranz','Adventskerze','Adventskalender','Weihnachtsstern','Mistelzweig',
  'Christbaumkugel','Lametta','Lichterkette','Baumspitze','Christbaumständer',
  'Weihnachtskrippe','Hirte','Engel','Stern','Futterkrippe',
  'Nussknacker','Räuchermännchen','Schwibbbogen','Weihnachtspyramide','Bergmann',
  'Geschenkpapier','Geschenkband','Schleife','Anhänger','Paket',
  'Nikolausstiefel','Nikolaussack','Rute','Nüsse','Mandarinen',
  'Schlittenfahrt','Schneeballschlacht','Schneeengel','Iglubau','Eisskulptur',
],

// ============================================================
//  FORMEN & MUSTER
// ============================================================
Formen: [
  'Kreis','Kugel','Ring','Spirale','Schnecke',
  'Dreieck','Pyramide','Kegel','Prisma','Tetraeder',
  'Quadrat','Würfel','Quader','Rechteck','Raute',
  'Sechseck','Wabe','Achteck','Fünfeck','Vieleck',
  'Stern','Kreuz','Herz','Tropfen','Blüte',
  'Welle','Bogen','Halbkreis','Ellipse','Oval',
  'Zylinder','Torus','Halbkugel','Paraboloid',
  'Streifen','Karo','Punkte','Kreise','Rauten',
  'Zickzack','Wellenlinie','Mäander','Labyrinth','Mandala',
  'Rosette','Arabeske','Ornament','Girlande','Ranke',
  'Schachbrett','Gitter','Netz','Geflecht','Gewebe',
  'Fraktal','Mosaik','Kaleidoskop','Symmetrie','Muster',
],

// ============================================================
//  FARBEN & LICHT
// ============================================================
Farben: [
  'Purpur','Indigo','Violett','Lavendel','Flieder','Malve',
  'Kobaltblau','Himmelblau','Eisblau','Taubenblau','Kornblumenblau','Saphirblau',
  'Türkis','Petrol','Aquamarin','Meergrün','Seegrün','Mintgrün',
  'Smaragdgrün','Tannengrün','Moosgrün','Olivgrün','Lindgrün','Pistazie',
  'Zitronengelb','Sonnengelb','Honiggelb','Safrangelb','Bernstein','Ocker',
  'Apricot','Pfirsich','Koralle','Lachs','Terrakotta','Rostrot',
  'Karminrot','Kirschrot','Weinrot','Burgunderrot','Rubinrot','Zinnober',
  'Schokobraun','Kaffeebraun','Kastanie','Karamell','Siena','Umbra',
  'Elfenbein','Champagner','Creme','Ecru','Vanille','Perlmutt',
  'Silber','Platin','Anthrazit','Schiefergrau','Taubengrau','Rauchgrau',
  'Kerzenschein','Fackelschein','Mondlicht','Sternenlicht','Polarlicht',
  'Sonnenglanz','Morgenglühen','Abendschimmer','Dämmerung','Zwielicht',
],

// ============================================================
//  KÖRPER & GESICHT
// ============================================================
Körper: [
  'Hand','Finger','Daumen','Handfläche','Handgelenk','Ellenbogen',
  'Schulter','Nacken','Kinn','Wange','Stirn','Augenbraue',
  'Wimper','Ohrläppchen','Nasenspitze','Unterlippe','Oberlippe',
  'Zeh','Fußsohle','Knöchel','Knie','Schienbein','Wade',
  'Schlüsselbein','Brustkorb','Hüfte','Rücken','Wirbelsäule',
  'Sommersprossen','Grübchen','Lachfalte',
],

// ============================================================
//  BERUFE & FIGUREN
// ============================================================
Berufe: [
  'Bäcker','Gärtner','Töpfer','Schmied','Tischler','Zimmermann',
  'Weber','Schneider','Schuster','Hutmacher','Korbflechter','Seiler',
  'Imker','Schäfer','Fischer','Winzer','Müller','Brauer',
  'Uhrmacher','Goldschmied','Glasbläser','Buchdrucker','Buchbinder','Gerber',
  'Leuchtturmwärter','Förster','Gärtner','Parkwächter','Nachtwächter',
  'Kapitän','Steuermann','Lotse','Matrose','Bootsmann',
  'Briefträger','Laternenanzünder','Schornsteinfeger','Glöckner',
  'Puppenspieler','Zauberkünstler','Seiltänzer','Jongleur','Clown',
  'Dirigent','Organist','Harfenist','Flötist','Geiger',
  'Maler','Bildhauer','Kalligraph','Illustrator','Kartograph',
  'Astronom','Botaniker','Entdecker','Kartograph','Chronist',
],

// ============================================================
//  MÖBEL & EINRICHTUNG
// ============================================================
Möbel: [
  'Sekretär','Vitrine','Anrichte','Sideboard','Kredenz','Buffet',
  'Eckbank','Truhenbank','Fensterbank','Sitzbank','Kirchenbank',
  'Himmelbett','Gitterbett','Etagenbett','Feldbett','Wiege',
  'Schminktisch','Frisiertisch','Konsole','Beistelltisch','Couchtisch',
  'Bücherregal','Wandregal','Eckregal','Gewürzregal','Weinregal',
  'Kleiderschrank','Wäscheschrank','Schuhschrank','Apothekerschrank','Vitrine',
  'Wanduhr','Kuckucksuhr','Pendeluhr','Standuhr','Tischuhr',
  'Ofenbank','Kachelofen','Kamin','Kaminsims','Kaminbesteck',
  'Paravent','Raumteiler','Stellwand','Sichtschutz',
  'Kronleuchter','Lüster','Kandelaber','Wandleuchte','Tischleuchte',
],

// ============================================================
//  SPORT & BEWEGUNG
// ============================================================
Sport: [
  'Federball','Tennisball','Fußball','Volleyball','Basketball',
  'Tischtennisschläger','Badmintonschläger','Tennisschläger','Hockeyschläger',
  'Springseil','Hula-Hoop','Schwungtuch','Gymnastikband','Reifen',
  'Schwimmbrille','Taucherbrille','Schnorchel','Schwimmflügel','Schwimmring',
  'Surfbrett','Wakeboard','Kanu','Paddel','Schwimmweste',
  'Schlittschuh','Langlaufski','Schneeschuh','Rodeln','Schlitten',
  'Kletterwand','Kletterschuh','Kreidebeutel','Sicherungsgerät',
  'Trampolin','Schwebebalken','Turnringe','Barren','Reck',
  'Bogen','Pfeil','Köcher','Zielscheibe','Armbrust',
  'Kompass','Fernglas','Wanderkarte','Trinkflasche','Wanderstock',
],

// ============================================================
//  ORTE & RÄUME
// ============================================================
Orte: [
  'Dachboden','Keller','Speicher','Vorratskammer','Weinkeller',
  'Bibliothek','Leseecke','Arbeitszimmer','Nähstube','Werkstatt',
  'Wintergarten','Veranda','Innenhof','Hinterhof','Vorgarten',
  'Marktplatz','Dorfplatz','Kirchplatz','Rathausplatz','Brunnenplatz',
  'Wochenmarkt','Flohmarkt','Antiquariat','Trödelladen','Kramerladen',
  'Bäckerei','Konditorei','Töpferei','Schreinerei','Sattlerei',
  'Apotheke','Gewürzladen','Teestube','Kräuterladen','Seifenladen',
  'Buchladen','Papierladen','Kurzwarenladen','Stoffladen','Hutladen',
  'Biergarten','Weinstube','Gasthof','Berghütte','Almhütte',
  'Badestube','Waschhaus','Brunnenhaus','Backhaus','Räucherkammer',
],

// ============================================================
//  DÜFTE & AROMEN
// ============================================================
Düfte: [
  'Lavendel','Rosmarin','Zitrone','Orange','Bergamotte',
  'Vanille','Zimt','Kardamom','Nelke','Sternanis',
  'Sandelholz','Zedernholz','Weihrauch','Myrrhe','Patschuli',
  'Rose','Jasmin','Ylang-Ylang','Gardenie','Tuberose',
  'Kamille','Melisse','Minze','Eukalyptus','Teebaum',
  'Honig','Bienenwachs','Heu','Stroh','Walderde',
  'Bratapfel','Lebkuchen','Mandelkuchen','Hefeteig','Sauerteig',
  'Kaffee','Kakao','Tee','Tabak','Leder',
],

// ============================================================
//  JAPAN & OSTASIEN
// ============================================================
Japan: [
  'Kirschblüte','Bambushain','Steingarten','Kiesgarten','Teegarten',
  'Teeschale','Teezeremonie','Bambusquirl','Teekännchen','Reispapier',
  'Fächer','Papierschirm','Papierlaterne','Windspiel','Räucherstäbchen',
  'Origami','Kranich','Faltblatt','Papiertier','Windrad',
  'Torii','Pagode','Brücke','Steinlaterne','Bambuszaun',
  'Bonsai','Ikebana','Lotusblüte','Chrysantheme','Pflaumenblüte',
  'Koi','Goldfisch','Schildkröte','Libelle','Glühwürmchen',
  'Tatami','Shoji','Fusuma','Noren','Futon',
  'Kimono','Obi','Geta','Tabi','Hakama',
  'Kalligraphie','Tuschepinsel','Tuschestein','Siegel','Schriftrolle',
],

// ============================================================
//  MEER & STRAND
// ============================================================
Strand: [
  'Sandburg','Strandkorb','Strandtuch','Sonnenschirm','Liegestuhl',
  'Muschel','Seeschnecke','Seeigel','Seestern','Sanddollar',
  'Strandgut','Treibholz','Seetang','Glasscherbe','Bernstein',
  'Sandkorn','Kieselstein','Felsbrocken','Gezeitenpool','Pfütze',
  'Welle','Brandung','Gischt','Schaum','Spiegelung',
  'Möwe','Sandpiper','Strandkrabbe','Wattwurm','Qualle',
  'Surfbrett','Bodyboard','Schnorchel','Taucherbrille','Schwimmflossen',
  'Leuchtturm','Seebrücke','Pier','Hafenmole','Wellenbrecher',
  'Segel','Segelboot','Katamaran','Surfdrachen','Windfahne',
],

// ============================================================
//  OBERFLÄCHEN & TEXTUREN
// ============================================================
Texturen: [
  'Samt','Velours','Plüsch','Fell','Pelz',
  'Rinde','Borke','Kork','Flechtwerk','Geflecht',
  'Wellblech','Riffelblech','Lochblech','Streckmetall','Maschendraht',
  'Sandpapier','Schleifpapier','Glasur','Emaille','Lack',
  'Stuck','Putz','Rauputz','Klinker','Backstein',
  'Mosaik','Kachel','Fliese','Terrazzo','Naturstein',
  'Parkett','Dielen','Laminat','Korkboden','Estrich',
  'Blattgold','Patina','Rost','Grünspan','Anlauf',
],

// ============================================================
//  ZEIT & MESSUNG
// ============================================================
Zeit: [
  'Sanduhr','Sonnenuhr','Wasseruhr','Kerzenuhr','Pendeluhr',
  'Taschenuhr','Armbanduhr','Wecker','Stoppuhr','Chronometer',
  'Stundenrad','Zeiger','Zifferblatt','Uhrwerk','Unruh',
  'Kalender','Monatsblatt','Jahresring','Kalenderstein','Gnomon',
  'Thermometer','Barometer','Hygrometer','Windmesser','Regenmesser',
  'Waage','Apothekerwaage','Briefwaage','Goldwaage','Federwaage',
  'Kompass','Sextant','Astrolabium','Jakobsstab','Stundenglas',
],

// ============================================================
//  FESTE & FEIER
// ============================================================
Feste: [
  'Girlande','Wimpelkette','Lampion','Papierblume','Konfetti',
  'Luftballon','Luftschlange','Papierhut','Maske','Larve',
  'Torte','Kerze','Wunderkerze','Biskuit','Marzipanfigur',
  'Blumenstrauß','Blumenkranz','Blumengirlande','Tischgesteck','Vaschen',
  'Einladungskarte','Platzkarte','Menükarte','Tischkarte','Dankkarte',
  'Fackel','Feuerwerk','Knallerbse','Tischfeuerwerk','Bengalfeuer',
  'Maypole','Erntekrone','Erntedank','Laternenumzug','Martinsgans',
  'Osterei','Osternest','Osterhase','Osterlamm','Palmzweig',
  'Faschingsmaske','Narrenkappen','Harlekin','Stelzenläufer',
],

// ============================================================
//  WASSER & EIS
// ============================================================
Wasser: [
  'Tropfen','Pfütze','Rinnsal','Quelle','Brunnen',
  'Wasserfall','Kaskade','Fontäne','Springbrunnen','Wasserspiel',
  'Eiszapfen','Eisblume','Eiskristall','Eisscholle','Eisberg',
  'Spiegelung','Kräuselung','Wellenmuster','Strudel','Wirbel',
  'Dampf','Nebel','Dunst','Rauch','Schwaden',
  'Frost','Reif','Raureif','Glatteis','Eisdecke',
  'Morgentau','Abenddunst','Nebelschleier','Wolkendecke','Regenbogen',
],

};
