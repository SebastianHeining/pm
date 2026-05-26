import type { IconName } from "@/components/icons/ServiceIcon";

export type Kategorie = "kasse" | "selbstzahler" | "spezial";

export type Leistung = {
  slug: string;
  titel: string;
  kategorie: Kategorie;
  icon: IconName;
  kurzbeschreibung: string;
  heroEyebrow: string;
  heroLead: string;
  wannHilft: string[];
  ablauf: string[];
  hinweise?: string;
  kostenuebernahme: string;
  relatedSlugs?: string[];
};

export const leistungen: Leistung[] = [
  {
    slug: "krankengymnastik",
    titel: "Krankengymnastik",
    kategorie: "kasse",
    icon: "kg",
    kurzbeschreibung:
      "Aktive Bewegungstherapie zur Wiederherstellung von Mobilität, Kraft und Schmerzfreiheit.",
    heroEyebrow: "Bewegung als Therapie",
    heroLead:
      "Unsere klassische Krankengymnastik fördert gezielt Ihre Beweglichkeit, stärkt die Muskulatur und lindert Schmerzen. Mit individuell angepassten Übungen unterstützen wir Ihren Heilungsprozess und verbessern Ihre Mobilität im Alltag — auch als KG am Gerät.",
    wannHilft: [
      "Rückenschmerzen und Verspannungen",
      "Nach Operationen (Knie, Hüfte, Schulter)",
      "Chronische Beschwerden des Bewegungsapparates",
      "Bei Haltungsproblemen und Fehlbelastungen",
      "Sturz- und Bewegungsangst im Alter",
    ],
    ablauf: [
      "Ausführliche Anamnese und Bewegungsanalyse im Erstgespräch",
      "Gemeinsame Zielsetzung und Therapieplan",
      "Individuell aufgebaute Übungen — passiv geführt oder aktiv begleitet",
      "Heim-Übungen für den Alltag, damit der Effekt zwischen den Terminen anhält",
    ],
    kostenuebernahme:
      "Kassen- und Privatleistung. Erstattung durch die gesetzliche Krankenkasse bei ärztlicher Verordnung (Heilmittelverordnung).",
    relatedSlugs: ["manuelle-therapie", "skoliosetherapie-schroth"],
  },
  {
    slug: "manuelle-therapie",
    titel: "Manuelle Therapie",
    kategorie: "kasse",
    icon: "manuelle",
    kurzbeschreibung:
      "Spezialisierte Handgriffe zur Mobilisation blockierter Gelenke und zur Schmerzlinderung.",
    heroEyebrow: "Präzise Mobilisation",
    heroLead:
      "Mit spezialisierten Handgriffen mobilisieren wir blockierte Gelenke, lösen Verspannungen und helfen Ihnen, Ihre Bewegungsfreiheit zurückzugewinnen. Unsere erfahrenen Therapeut:innen setzen gezielt manuelle Techniken ein, um Schmerzen zu reduzieren und die Funktionsfähigkeit zu verbessern.",
    wannHilft: [
      "Gelenkblockaden und eingeschränkte Bewegungsamplitude",
      "Nacken- und Schulterschmerzen",
      "Hexenschuss / akute Rückenbeschwerden",
      "Kopfschmerzen, die von der Halswirbelsäule ausgehen",
      "Nach Sportverletzungen und Distorsionen",
    ],
    ablauf: [
      "Befundung der betroffenen Region und angrenzenden Strukturen",
      "Sanfte, gezielte Mobilisationen — keine ruckartigen Manipulationen",
      "Begleitende Übungen zur Stabilisierung",
      "Beratung zu Belastung im Alltag und Sport",
    ],
    kostenuebernahme:
      "Erstattung durch die gesetzliche Krankenkasse bei entsprechender Verordnung. Privatleistung möglich.",
    relatedSlugs: ["krankengymnastik", "cmd-kiefergelenk"],
  },
  {
    slug: "manuelle-lymphdrainage",
    titel: "Manuelle Lymphdrainage",
    kategorie: "kasse",
    icon: "lymph",
    kurzbeschreibung:
      "Sanfte Behandlung zur Entstauung — bei Ödemen, nach OPs und in der Schwangerschaft.",
    heroEyebrow: "Entstauung & Ödemtherapie",
    heroLead:
      "Diese sanfte Behandlungsmethode reduziert Schwellungen, regt den Lymphfluss an und unterstützt die Heilung nach Operationen oder bei Lymphödemen. Die rhythmischen, pumpenden Bewegungen fördern den Abtransport von Gewebsflüssigkeit und beschleunigen den Heilungsprozess.",
    wannHilft: [
      "Lymphödeme nach Brustkrebs- oder Krebstherapien",
      "Schwellungen nach Operationen und Verletzungen",
      "Lipödem",
      "Wassereinlagerungen in Schwangerschaft",
      "Chronisch venöse Insuffizienz",
    ],
    ablauf: [
      "Befunderhebung mit Vermessung der betroffenen Region",
      "Spezifische manuelle Lymphdrainage in ruhigem Rhythmus",
      "Auf Wunsch ergänzende Kompressionstherapie",
      "Bei Bedarf Hautpflege- und Selbstmassage-Anleitung",
    ],
    kostenuebernahme:
      "Verordnungsfähig durch Hausärzt:in oder Facharzt für Phlebologie, Lymphologie, Onkologie oder Chirurgie.",
    relatedSlugs: ["massage-und-waerme", "hausbesuche"],
  },
  {
    slug: "cmd-kiefergelenk",
    titel: "CMD — Kiefergelenkbehandlung",
    kategorie: "spezial",
    icon: "cmd",
    kurzbeschreibung:
      "Therapie der Craniomandibulären Dysfunktion bei Kieferknacken, Kopfschmerzen und Nackenverspannung.",
    heroEyebrow: "Schwerpunkt unserer Praxis",
    heroLead:
      "Beschwerden im Kiefergelenk (Craniomandibuläre Dysfunktion, kurz CMD) können sich durch Schmerzen im Kiefer-, Kopf- oder Nackenbereich, Knacken beim Öffnen des Mundes oder Verspannungen bemerkbar machen. Astrid Mally und mehrere Teammitglieder sind speziell qualifiziert.",
    wannHilft: [
      "Kieferknacken oder -reiben beim Öffnen des Mundes",
      "Wiederkehrende Kopfschmerzen, vor allem morgens",
      "Schmerzen im Kiefer-, Gesichts- oder Ohrenbereich",
      "Nacken- und Schulterverspannungen ohne klare Ursache",
      "Zähneknirschen / Pressen (Bruxismus)",
    ],
    ablauf: [
      "Ausführlicher Befund inkl. Kiefer-, HWS- und Haltungsanalyse",
      "Spezifische manuelle Techniken am Kiefergelenk und der Kaumuskulatur",
      "Übungen zur Selbstmobilisation für zuhause",
      "Bei Bedarf interdisziplinäre Abstimmung mit Zahnärztin / Kieferorthopädie",
    ],
    hinweise:
      "Wir arbeiten häufig in enger Abstimmung mit Ihrer Zahnärztin oder Ihrem Kieferorthopäden zusammen, um eine ganzheitliche Behandlung sicherzustellen.",
    kostenuebernahme:
      "Erstattung durch die gesetzliche Krankenkasse bei entsprechender Verordnung. Selbstzahlerleistung möglich.",
    relatedSlugs: ["manuelle-therapie", "krankengymnastik"],
  },
  {
    slug: "skoliosetherapie-schroth",
    titel: "Skoliosetherapie nach Schroth",
    kategorie: "spezial",
    icon: "skoliose",
    kurzbeschreibung:
      "Dreidimensionale Therapie bei Wirbelsäulenverkrümmungen — Astrid Mally ist zertifizierte Schroth-Therapeutin.",
    heroEyebrow: "Spezialqualifikation Astrid Mally",
    heroLead:
      "Die Schroth-Therapie ist eine wissenschaftlich anerkannte, dreidimensionale Skoliose-Behandlung. Sie kombiniert gezielte Aufrichtung, Drehwinkelatmung und stabilisierende Kraftübungen — angepasst an die individuelle Krümmungsform der Patient:in.",
    wannHilft: [
      "Idiopathische Skoliose im Kindes- und Jugendalter",
      "Skoliose bei Erwachsenen, auch nach Operationen",
      "Begleitend zur Korsetttherapie",
      "Asymmetrische Haltungsmuster",
    ],
    ablauf: [
      "Dreidimensionale Befundung mit Foto-Dokumentation",
      "Individuelles Übungsprogramm passend zur Krümmungsform",
      'Schulung der Atemtechnik („Drehwinkelatmung")',
      "Heim-Übungen sind zentraler Bestandteil — wir begleiten und korrigieren",
    ],
    hinweise:
      "Die Schroth-Therapie wirkt umso besser, je konsequenter das Heim-Übungsprogramm umgesetzt wird. Wir geben Ihnen Werkzeuge dafür mit nach Hause.",
    kostenuebernahme:
      "Verordnungsfähig durch Fachärztin oder Hausärztin. Privat- und Selbstzahler willkommen.",
    relatedSlugs: ["krankengymnastik", "pilates"],
  },
  {
    slug: "beckenbodentraining-wabaska",
    titel: "Beckenbodentraining nach WABASKA",
    kategorie: "selbstzahler",
    icon: "beckenboden",
    kurzbeschreibung:
      "Spezialisierte Beckenbodentherapie für Frauen — präventiv und therapeutisch.",
    heroEyebrow: "Stark in der Tiefe",
    heroLead:
      "Das WABASKA-Konzept (Wahrnehmung & Aktivierung des Beckenbodens, Stabilisation, Koordination, Atmung) ist ein moderner, ganzheitlicher Trainingsansatz. Es schult Wahrnehmung, Kraft und Koordination des Beckenbodens in funktionalen Bewegungen.",
    wannHilft: [
      "Belastungs- und Drang-Inkontinenz",
      "Vor und nach der Geburt (Rückbildung)",
      "Nach gynäkologischen Operationen",
      "Senkungsbeschwerden",
      "Prävention für Frauen jeden Alters",
    ],
    ablauf: [
      "Persönliches Wahrnehmungs- und Aktivierungstraining",
      "Atemschulung und Koordination",
      "Integration in Alltagsbewegungen — Heben, Stehen, Sport",
      "Heim-Übungen zur Verankerung",
    ],
    kostenuebernahme:
      "Selbstzahlerleistung — Erstattungen durch private Zusatzversicherungen oft möglich.",
    relatedSlugs: ["pilates", "krankengymnastik"],
  },
  {
    slug: "pilates",
    titel: "Pilates",
    kategorie: "selbstzahler",
    icon: "pilates",
    kurzbeschreibung:
      "Kontrollierte Ganzkörperarbeit für Stabilität, Beweglichkeit und Körperwahrnehmung.",
    heroEyebrow: "Körper bewusst bewegen",
    heroLead:
      "Pilates verbindet Kraft, Beweglichkeit und Atmung in präzise geführten Bewegungen. Astrid Mally ist zertifizierte Pilates-Trainerin und integriert die Methode gezielt in die Therapie oder bietet sie als reines Trainingsangebot an.",
    wannHilft: [
      "Rücken- und Nackenbeschwerden",
      "Nachhaltige Stärkung der Rumpfmuskulatur",
      "Verbesserung von Haltung und Körpergefühl",
      "Stressreduktion und mehr Beweglichkeit",
    ],
    ablauf: [
      "Einführung in die Pilates-Prinzipien (Atmung, Zentrierung, Präzision)",
      "Individuelle Übungsfolgen passend zu Ihrem Niveau",
      "Aufbauend, langsam steigerbar",
      "Auf Wunsch Geräteunterstützung",
    ],
    kostenuebernahme: "Selbstzahlerleistung.",
    relatedSlugs: ["beckenbodentraining-wabaska", "krankengymnastik"],
  },
  {
    slug: "sektorale-heilpraktikerin",
    titel: "Sektorale Heilpraktikerin",
    kategorie: "selbstzahler",
    icon: "heilpraktiker",
    kurzbeschreibung:
      "Behandlung ohne ärztliche Verordnung — direkter Zugang zur Physiotherapie als Selbstzahler.",
    heroEyebrow: "Direkter Weg zur Therapie",
    heroLead:
      "Normalerweise sind Physiotherapeut:innen weisungsgebunden und dürfen nur nach ärztlicher Diagnosestellung und Anweisung therapieren. Die Qualifikation als sektorale Heilpraktikerin ermöglicht uns, Sie ohne ärztliche Verordnung direkt physiotherapeutisch zu behandeln.",
    wannHilft: [
      "Schnelle Behandlung ohne Wartezeit auf einen Arzttermin",
      "Selbstzahler:innen und Privatpatient:innen",
      "Beschwerden, bei denen Sie direkt zur Therapie kommen möchten",
    ],
    ablauf: [
      "Ausführliche physiotherapeutische Befunderhebung",
      "Gemeinsame Erarbeitung eines Therapieplans und der angestrebten Ziele",
      "Transparente Besprechung von Dauer und Kosten",
      "Weiterleitung zur Fachärztin, falls die Befundlage unklar ist",
    ],
    hinweise:
      "TODO: Aktuelle Trägerin der sektoralen Heilpraktiker-Qualifikation in der Praxis bestätigen — siehe TODO.md.",
    kostenuebernahme:
      "Selbstzahlerleistung. Privatpatient:innen mit entsprechender Zusatzversicherung erkundigen sich vor Therapiebeginn bei ihrer Kasse.",
    relatedSlugs: ["manuelle-therapie", "cmd-kiefergelenk"],
  },
  {
    slug: "massage-und-waerme",
    titel: "Massage, Wärme & Kälte",
    kategorie: "kasse",
    icon: "waerme",
    kurzbeschreibung:
      "Klassische Massage, Bindegewebsmassage, Fango, Heißluft, Heiße Rolle und Kältetherapie.",
    heroEyebrow: "Lösen, Wärmen, Beruhigen",
    heroLead:
      "Gezielte Wärme- und Massagetechniken lösen Verspannungen, fördern die Durchblutung und unterstützen die Regeneration. Kältetherapie wirkt entzündungshemmend und schmerzlindernd — wir kombinieren passend zu Ihrem Behandlungsziel.",
    wannHilft: [
      "Muskuläre Verspannungen und Verhärtungen",
      "Vorbereitung auf weitere Therapien (Wärme öffnet das Gewebe)",
      "Schmerzhafte Bewegungseinschränkungen",
      "Akute Entzündungen und Schwellungen (Kälte)",
      "Stress und Erschöpfung — als wohltuende Pause",
    ],
    ablauf: [
      "Auswahl der passenden Anwendung gemäß Befund",
      "Wärmebehandlung (Fango, Heißluft, Heiße Rolle) oder Kältepackung",
      "Klassische Massage oder Bindegewebsmassage gezielt am betroffenen Bereich",
      "Häufig in Kombination mit Krankengymnastik oder Manueller Therapie",
    ],
    kostenuebernahme:
      "Erstattung durch die gesetzliche Krankenkasse als Ergänzungsleistung bei entsprechender Verordnung.",
    relatedSlugs: ["manuelle-therapie", "elektrotherapie-schlingentisch"],
  },
  {
    slug: "elektrotherapie-schlingentisch",
    titel: "Elektrotherapie, Ultraschall & Schlingentisch",
    kategorie: "kasse",
    icon: "elektro",
    kurzbeschreibung:
      "Passive Verfahren zur Schmerzlinderung, Durchblutungsförderung und sanften Gelenkmobilisation.",
    heroEyebrow: "Sanfte Tiefenwirkung",
    heroLead:
      "Elektro-, Ultraschall- und Schlingentischtherapie ergänzen die aktive Behandlung dort, wo sie sinnvoll ist: Sie reduzieren Schmerzen, regen die Durchblutung an und entlasten die Gelenke — als Vorbereitung oder Begleitung zur Krankengymnastik.",
    wannHilft: [
      "Akute und chronische Schmerzen",
      "Schwellungen, Reizzustände, Entzündungen tiefer Strukturen",
      "Bewegungseinschränkungen bei akuten Schmerzen (Schlingentisch)",
      "Muskelschwäche / Aktivierung nach Operationen",
    ],
    ablauf: [
      "Befund und Auswahl des passenden Verfahrens",
      "Behandlungsdauer i. d. R. 10–20 Minuten",
      "Oft in Kombination mit aktiver Therapie in derselben Sitzung",
    ],
    kostenuebernahme:
      "Erstattung durch die gesetzliche Krankenkasse bei entsprechender Verordnung.",
    relatedSlugs: ["massage-und-waerme", "krankengymnastik"],
  },
  {
    slug: "kinesio-taping",
    titel: "Kinesiologisches Taping",
    kategorie: "selbstzahler",
    icon: "tape",
    kurzbeschreibung:
      "Elastische Tapes stabilisieren Muskeln und Gelenke, ohne die Beweglichkeit einzuschränken.",
    heroEyebrow: "Unterstützung in Bewegung",
    heroLead:
      "Kinesio-Tapes sind elastische Baumwoll-Tapes, die Muskeln und Gelenke stützen, ohne sie zu blockieren. Sie wirken über die Haut auf das Bindegewebe und die Mikrozirkulation und können Schmerzen lindern, ohne die Bewegungsfreiheit zu beschränken.",
    wannHilft: [
      "Muskel- und Gelenkbeschwerden",
      "Nach Verletzungen wie Verstauchungen oder Zerrungen",
      "Lymphabfluss-Unterstützung",
      "Haltungsschulung über propriozeptive Reize",
      "Sportliche Belastungen / Prävention",
    ],
    ablauf: [
      "Befundung der zu tapenden Region",
      "Auswahl der passenden Tape-Technik und -form",
      "Anbringen auf der vorbereiteten Haut, hält 3–7 Tage",
      "Auf Wunsch ergänzend zu jeder anderen Behandlung",
    ],
    kostenuebernahme:
      "Selbstzahlerleistung. Manche private Zusatzversicherungen erstatten Tapes.",
    relatedSlugs: ["manuelle-therapie", "krankengymnastik"],
  },
  {
    slug: "fussreflexzonentherapie",
    titel: "Fußreflexzonentherapie",
    kategorie: "selbstzahler",
    icon: "reflex",
    kurzbeschreibung:
      "Therapie über Reflexzonen am Fuß — entspannend und ganzkörperlich wirksam.",
    heroEyebrow: "Ganzkörper über den Fuß",
    heroLead:
      "Durch gezielten Druck auf Reflexzonen am Fuß werden Organe und Körperfunktionen positiv beeinflusst. Die Behandlung fördert die Durchblutung, aktiviert die Selbstheilungskräfte und sorgt für tiefe Entspannung.",
    wannHilft: [
      "Chronische Erschöpfung und Stress",
      "Verdauungs- und Schlafprobleme",
      "Begleitend zu anderen Therapien",
      "Allgemeines Wohlbefinden / Prävention",
    ],
    ablauf: [
      "Anamnese und Auswahl relevanter Reflexzonen",
      "Gezielte Drucktechniken am Fuß",
      "Ruhephase zum Nachwirken",
    ],
    kostenuebernahme:
      "Selbstzahlerleistung. Manche private Zusatzversicherungen erstatten.",
    relatedSlugs: ["massage-und-waerme", "sektorale-heilpraktikerin"],
  },
  {
    slug: "hausbesuche",
    titel: "Haus- und Heimbesuche",
    kategorie: "kasse",
    icon: "hausbesuch",
    kurzbeschreibung:
      "Behandlung bei Ihnen zuhause oder im Pflegeheim — wenn der Weg zu uns nicht möglich ist.",
    heroEyebrow: "Wir kommen zu Ihnen",
    heroLead:
      "Wir kommen zu Ihnen — Behandlungen bequem in Ihrer gewohnten Umgebung, individuell, flexibel und ohne Anfahrtsstress. Ideal für Patient:innen mit eingeschränkter Mobilität, im Pflegeheim oder nach Operationen.",
    wannHilft: [
      "Eingeschränkte Mobilität durch Erkrankung oder Alter",
      "Nach Operationen, wenn der Weg zur Praxis zu beschwerlich ist",
      "Patient:innen in Pflegeheimen",
      "Bei akuten Schmerzzuständen",
    ],
    ablauf: [
      "Telefonische Terminabsprache mit Ihnen oder Ihren Angehörigen",
      "Anreise mit allen nötigen Materialien",
      "Behandlung in Ihrer gewohnten Umgebung — Wohnzimmer, Schlafzimmer, Garten",
      "Abstimmung mit Pflegekräften oder Angehörigen, falls gewünscht",
    ],
    kostenuebernahme:
      'Verordnungsfähig bei ärztlicher Verordnung mit dem Vermerk „Hausbesuch". Selbstzahlerleistung ebenfalls möglich.',
    relatedSlugs: ["manuelle-lymphdrainage", "krankengymnastik"],
  },
];

export const kategorieLabel: Record<Kategorie, string> = {
  kasse: "Kassenleistungen",
  selbstzahler: "Prävention & Selbstzahler",
  spezial: "Unsere Schwerpunkte",
};

export function getLeistung(slug: string) {
  return leistungen.find((l) => l.slug === slug);
}

export function getRelated(slug: string) {
  const l = getLeistung(slug);
  if (!l?.relatedSlugs) return [];
  return l.relatedSlugs.map(getLeistung).filter(Boolean) as Leistung[];
}
