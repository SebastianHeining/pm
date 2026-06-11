import type { IconName } from "@/components/icons/ServiceIcon";

export type Kategorie = "kasse" | "selbstzahler";

export type Leistung = {
  slug: string;
  titel: string;
  kategorie: Kategorie;
  icon: IconName;
  kurzbeschreibung: string;
  heroEyebrow: string;
  heroLead: string;
  bild?: string;
  bildAlt?: string;
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
      "Unsere klassische Krankengymnastik fördert gezielt Ihre Beweglichkeit, stärkt die Muskulatur und lindert Schmerzen. Mit individuell angepassten Übungen unterstützen wir Ihren Heilungsprozess und verbessern Ihre Mobilität im Alltag.",
    bild: "/leistungen/krankengymnastik.jpg",
    bildAlt: "Aktive Übung mit dem Theraband in der Praxis",
    wannHilft: [
      "Rückenschmerzen und Verspannungen",
      "Nach Operationen (Knie, Hüfte, Schulter)",
      "Chronische Beschwerden des Bewegungsapparates",
      "Bei Haltungsproblemen und Fehlbelastungen",
      "Sturz- und Bewegungsangst im Alter",
    ],
    ablauf: [
      "Behandlung auf Grundlage Ihrer ärztlichen Verordnung",
      "Ausführliche Anamnese und Bewegungsanalyse im Erstgespräch",
      "Individuell aufgebaute Übungen — passiv geführt oder aktiv begleitet",
      "Heim-Übungen für den Alltag, damit der Effekt zwischen den Terminen anhält",
    ],
    kostenuebernahme:
      "Kassenleistung — Erstattung durch die gesetzliche Krankenkasse bei ärztlicher Verordnung (Heilmittelverordnung).",
    relatedSlugs: ["manuelle-therapie", "massage-bgm"],
  },
  {
    slug: "manuelle-therapie",
    titel: "Manuelle Therapie (MT)",
    kategorie: "kasse",
    icon: "manuelle",
    kurzbeschreibung:
      "Spezialisierte Handgriffe zur Mobilisation blockierter Gelenke und zur Schmerzlinderung.",
    heroEyebrow: "Gezielte Mobilisation",
    heroLead:
      "Mit spezialisierten Handgriffen mobilisieren wir blockierte Gelenke, lösen Verspannungen und helfen Ihnen, Ihre Bewegungsfreiheit zurückzugewinnen. Unsere erfahrenen Therapeut:innen setzen gezielt manuelle Techniken ein, um Schmerzen zu reduzieren und die Funktionsfähigkeit zu verbessern.",
    bild: "/leistungen/manuelle-therapie.jpg",
    bildAlt: "Manuelle Behandlung des Schulterblatts",
    wannHilft: [
      "Gelenkblockaden und eingeschränkte Bewegungsamplitude",
      "Nacken- und Schulterschmerzen",
      "Hexenschuss / akute Rückenbeschwerden",
      "Kopfschmerzen, die von der Halswirbelsäule ausgehen",
      "Nach Sportverletzungen und Distorsionen",
    ],
    ablauf: [
      "Behandlung auf Grundlage Ihrer ärztlichen Verordnung",
      "Befundung der betroffenen Region und angrenzenden Strukturen",
      "Sanfte, gezielte Mobilisationen — keine ruckartigen Manipulationen",
      "Begleitende Übungen zur Stabilisierung und Beratung für den Alltag",
    ],
    kostenuebernahme:
      "Kassenleistung — Erstattung durch die gesetzliche Krankenkasse bei entsprechender Verordnung.",
    relatedSlugs: ["krankengymnastik", "cmd-kiefergelenk"],
  },
  {
    slug: "cmd-kiefergelenk",
    titel: "CMD — Kiefergelenkbehandlung",
    kategorie: "kasse",
    icon: "cmd",
    kurzbeschreibung:
      "Therapie der Craniomandibulären Dysfunktion bei Kieferknacken, Kopfschmerzen und Nackenverspannung.",
    heroEyebrow: "Kiefer, Kopf & Nacken",
    heroLead:
      "Beschwerden im Kiefergelenk (Craniomandibuläre Dysfunktion, kurz CMD) können sich durch Schmerzen im Kiefer-, Kopf- oder Nackenbereich, Knacken beim Öffnen des Mundes oder Verspannungen bemerkbar machen. Astrid Mally und mehrere Teammitglieder sind speziell qualifiziert.",
    bild: "/leistungen/cmd-kiefergelenk.jpg",
    bildAlt: "CMD-Behandlung am Kiefergelenk in Rückenlage",
    wannHilft: [
      "Kieferknacken oder -reiben beim Öffnen des Mundes",
      "Wiederkehrende Kopfschmerzen, vor allem morgens",
      "Schmerzen im Kiefer-, Gesichts- oder Ohrenbereich",
      "Nacken- und Schulterverspannungen ohne klare Ursache",
      "Zähneknirschen / Pressen (Bruxismus)",
    ],
    ablauf: [
      "Behandlung auf Grundlage Ihrer ärztlichen bzw. zahnärztlichen Verordnung",
      "Ausführlicher Befund inkl. Kiefer-, HWS- und Haltungsanalyse",
      "Spezifische manuelle Techniken am Kiefergelenk und der Kaumuskulatur",
      "Übungen zur Selbstmobilisation für zuhause",
    ],
    hinweise:
      "Wir arbeiten häufig in enger Abstimmung mit Ihrer Zahnärztin oder Ihrem Kieferorthopäden zusammen, um eine ganzheitliche Behandlung sicherzustellen.",
    kostenuebernahme:
      "Kassenleistung — Erstattung durch die gesetzliche Krankenkasse bei entsprechender Verordnung.",
    relatedSlugs: ["manuelle-therapie", "krankengymnastik"],
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
    bild: "/leistungen/manuelle-lymphdrainage.jpg",
    bildAlt: "Sanfter Lymphdrainage-Griff am Unterarm",
    wannHilft: [
      "Lymphödeme nach Brustkrebs- oder Krebstherapien",
      "Schwellungen nach Operationen und Verletzungen",
      "Lipödem",
      "Wassereinlagerungen in der Schwangerschaft",
      "Chronisch venöse Insuffizienz",
    ],
    ablauf: [
      "Behandlung auf Grundlage Ihrer ärztlichen Verordnung",
      "Befunderhebung mit Sichtung der betroffenen Region",
      "Manuelle Lymphdrainage in ruhigem, pumpendem Rhythmus",
      "Auf Wunsch ergänzende Kompressionstherapie und Anleitung zur Selbstmassage",
    ],
    kostenuebernahme:
      "Kassenleistung — verordnungsfähig durch Hausärzt:in oder Fachärzt:in (z. B. Phlebologie, Lymphologie, Onkologie, Chirurgie).",
    relatedSlugs: ["waerme-kaelte", "hausbesuche"],
  },
  {
    slug: "massage-bgm",
    titel: "Massage & Bindegewebsmassage",
    kategorie: "kasse",
    icon: "massage",
    kurzbeschreibung:
      "Klassische Massage und Bindegewebsmassage — lösen Verspannungen und fördern die Regeneration.",
    heroEyebrow: "Lösen & Regenerieren",
    heroLead:
      "Gezielte Massagen lösen Verspannungen, fördern die Durchblutung und unterstützen die Regeneration Ihres Körpers. Die Bindegewebsmassage wirkt über Reflexzonen tief im Gewebe, aktiviert die Selbstheilungskräfte und kann positiv auf innere Organe und das Nervensystem einwirken.",
    bild: "/leistungen/massage-bgm.jpg",
    bildAlt: "Klassische Rückenmassage in der Praxis",
    wannHilft: [
      "Muskuläre Verspannungen und Verhärtungen",
      "Schmerzhafte Bewegungseinschränkungen",
      "Stressbedingte Beschwerden",
      "Begleitend zu Krankengymnastik und Manueller Therapie",
    ],
    ablauf: [
      "Anwendung gemäß Ihrer ärztlichen Verordnung — oder als Wunschleistung nach kurzer Absprache",
      "Klassische Massage oder Bindegewebsmassage am betroffenen Bereich",
      "Häufig in Kombination mit Wärmeanwendungen",
    ],
    hinweise:
      "Sie möchten Ihr Rezept um zusätzliche Leistungen ergänzen — etwa längere Behandlungszeiten oder eine Wärmeanwendung? Sprechen Sie uns an, wir beraten Sie gerne individuell.",
    kostenuebernahme:
      "Kassenleistung bei entsprechender Verordnung — darüber hinaus jederzeit als Selbstzahlerleistung buchbar.",
    relatedSlugs: ["waerme-kaelte", "manuelle-therapie"],
  },
  {
    slug: "waerme-kaelte",
    titel: "Fango, Heißluft & Kälteanwendungen",
    kategorie: "kasse",
    icon: "waerme",
    kurzbeschreibung:
      "Wohltuende Wärme aus Naturmoor, Heißluft, Heiße Rolle — und gezielte Kälte bei akuten Beschwerden.",
    heroEyebrow: "Wärmen & Kühlen",
    heroLead:
      "Wohltuende Wärme aus Naturmoor lockert die Muskulatur, fördert die Durchblutung und bereitet den Körper optimal auf weitere Behandlungen vor. Die Heiße Rolle kombiniert intensive, punktuelle Wärme mit Massagegriffen. Gezielte Kälteanwendungen lindern Schmerzen, hemmen Entzündungen und reduzieren Schwellungen.",
    bild: "/leistungen/waerme-kaelte.jpg",
    bildAlt: "Behandlung am Rücken — Vorbereitung mit Wärme",
    wannHilft: [
      "Muskuläre Verspannungen (Wärme)",
      "Vorbereitung auf Krankengymnastik oder Massage",
      "Akute Entzündungen und Schwellungen (Kälte)",
      "Schmerzlinderung bei akuten und chronischen Beschwerden",
    ],
    ablauf: [
      "Anwendung gemäß Ihrer ärztlichen Verordnung — meist ergänzend zur aktiven Behandlung",
      "Fango, Heißluft oder Heiße Rolle zur Vorbereitung — bzw. Kälte bei akuten Reizungen",
      "Direkt im Anschluss: Massage, Krankengymnastik oder Manuelle Therapie",
    ],
    kostenuebernahme:
      "Kassenleistung als ergänzendes Heilmittel bei entsprechender Verordnung.",
    relatedSlugs: ["massage-bgm", "krankengymnastik"],
  },
  {
    slug: "schlingentisch",
    titel: "Schlingentischtherapie",
    kategorie: "kasse",
    icon: "schlingentisch",
    kurzbeschreibung:
      "Sanfte Entlastung in der Aufhängung — schmerzlindernd und bewegungserleichternd.",
    heroEyebrow: "Schwerelos behandeln",
    heroLead:
      "Sanfte Entlastung durch Aufhängung: Der Körper wird nahezu schwerelos gelagert, wodurch Schmerzen gelindert, Bewegungen erleichtert und die Muskulatur gezielt entspannt werden kann.",
    bild: "/praxis/schlingentisch.jpg",
    bildAlt: "Behandlungsraum mit Schlingentisch-Gerät über der Liege",
    wannHilft: [
      "Akute Rücken- und Nackenschmerzen",
      "Hüft- und Schulterbeschwerden",
      "Bandscheibenbeschwerden",
      "Zur frühen, schmerzarmen Mobilisation nach Operationen",
      "Wenn aktive Übungen noch zu schmerzhaft sind",
    ],
    ablauf: [
      "Behandlung auf Grundlage Ihrer ärztlichen Verordnung",
      "Lagerung in Schlingen — einzelne Körperabschnitte werden schwerelos aufgehängt",
      "Sanfte Mobilisation und Entlastung durch die Therapeut:in",
      "Häufig kombiniert mit Krankengymnastik oder Manueller Therapie",
    ],
    kostenuebernahme:
      "Kassenleistung — Erstattung durch die gesetzliche Krankenkasse bei entsprechender Verordnung.",
    relatedSlugs: ["krankengymnastik", "manuelle-therapie"],
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
      "Ärztliche Verordnung mit dem Vermerk „Hausbesuch“ als Grundlage",
      "Telefonische Terminabsprache mit Ihnen oder Ihren Angehörigen",
      "Behandlung in Ihrer gewohnten Umgebung mit allen nötigen Materialien",
      "Abstimmung mit Pflegekräften oder Angehörigen, falls gewünscht",
    ],
    kostenuebernahme:
      "Kassenleistung bei ärztlicher Verordnung mit dem Vermerk „Hausbesuch“.",
    relatedSlugs: ["manuelle-lymphdrainage", "krankengymnastik"],
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
    bild: "/leistungen/kinesio-taping.jpg",
    bildAlt: "Anlegen eines Kinesio-Tapes an der Schulter",
    wannHilft: [
      "Muskel- und Gelenkbeschwerden",
      "Nach Verletzungen wie Verstauchungen oder Zerrungen",
      "Unterstützung des Lymphabflusses",
      "Haltungsschulung über propriozeptive Reize",
      "Sportliche Belastungen / Prävention",
    ],
    ablauf: [
      "Befundung der zu tapenden Region",
      "Auswahl der passenden Tape-Technik und -form",
      "Anbringen auf der vorbereiteten Haut — hält in der Regel 3 bis 7 Tage",
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
      "Kurze Anamnese und Auswahl relevanter Reflexzonen",
      "Gezielte Drucktechniken am Fuß",
      "Ruhephase zum Nachwirken",
    ],
    kostenuebernahme:
      "Selbstzahlerleistung. Manche private Zusatzversicherungen erstatten.",
    relatedSlugs: ["massage-bgm", "hausbesuche"],
  },
];

export const kategorieLabel: Record<Kategorie, string> = {
  kasse: "Kassenleistungen",
  selbstzahler: "Prävention, Selbstzahler & Wellness",
};

export function getLeistung(slug: string) {
  return leistungen.find((l) => l.slug === slug);
}

export function getRelated(slug: string) {
  const l = getLeistung(slug);
  if (!l?.relatedSlugs) return [];
  return l.relatedSlugs.map(getLeistung).filter(Boolean) as Leistung[];
}
