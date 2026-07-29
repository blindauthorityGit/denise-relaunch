import Head from "next/head";
import BG from "../components/layout/bg";
import { Menu2 } from "../components/menues";
import { ContainerStandard } from "../components/container";
import { RxHamburgerMenu } from "react-icons/rx/index.js";
import { menuItems, socialMedia } from "../components/menues/config";
import LogoLight from "../assets/logoLight.svg";
import LogoDark from "../assets/logoDark.svg";

const List = ({ children }) => (
  <ul className="marker:text-primary mb-6 list-disc space-y-1 pl-6">
    {children}
  </ul>
);
const Section = ({ title, children, sub = false }) => {
  const Tag = sub ? "h3" : "h2";
  return (
    <section className="mb-11">
      <Tag
        className={
          sub
            ? "mb-4 text-xl font-medium text-darkText"
            : "mb-5 text-2xl font-medium text-darkText sm:text-3xl"
        }
      >
        {title}
      </Tag>
      <div className="space-y-5 leading-relaxed text-darkText/90">
        {children}
      </div>
    </section>
  );
};

export default function Datenschutz() {
  return (
    <>
      <Head>
        <title>Denise Bäckerin | Datenschutzerklärung</title>
        <meta
          name="description"
          content="Datenschutzerklärung der Bäckerin Denise Pölzelbauer."
        />
      </Head>
      <Menu2
        logoLight={LogoLight.src}
        logoDark={LogoDark.src}
        menuItems={menuItems}
        socialMedia={socialMedia}
        burgerIcon={<RxHamburgerMenu />}
      />
      <BG />
      <main className="overflow-x-hidden">
        <div className="h-6 xl:h-16" />
        <ContainerStandard>
          <article className="col-span-12 my-8 px-8 font-freight lg:my-16 lg:px-32">
            <header className="border-darkText/15 mb-14 border-b pb-8">
              <p className="text-primary mb-3 text-sm uppercase tracking-[0.2em]">
                Rechtliches
              </p>
              <h1 className="font-freight text-4xl font-thin tracking-widest text-darkText sm:text-5xl xl:text-6xl">
                Datenschutzerklärung
              </h1>
            </header>

            <Section title="1. Allgemeine Hinweise">
              <p>
                Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. In
                dieser Datenschutzerklärung informieren wir Sie darüber, welche
                personenbezogenen Daten wir beim Besuch unserer Websites, bei
                einer Kontaktaufnahme, bei der Anmeldung zu unserem Newsletter
                sowie bei Bestellungen in unserem Onlineshop verarbeiten.
              </p>
              <p>Diese Datenschutzerklärung gilt insbesondere für:</p>
              <List>
                <li>baeckerin.at</li>
                <li>www.baeckerin.at</li>
                <li>shop.baeckerin.at</li>
              </List>
              <p>
                Personenbezogene Daten sind alle Informationen, die sich auf
                eine identifizierte oder identifizierbare natürliche Person
                beziehen. Dazu zählen beispielsweise Name, Anschrift,
                E-Mail-Adresse, Telefonnummer, IP-Adresse sowie Angaben zu
                Bestellungen und Zahlungen.
              </p>
            </Section>
            <Section title="2. Verantwortliche">
              <p>
                Verantwortliche im Sinne der Datenschutz-Grundverordnung ist:
              </p>
              <p>
                <strong>Denise Pölzelbauer</strong>
                <br />
                Hauptstraße 23
                <br />
                2823 Brunn an der Pitten
                <br />
                Österreich
              </p>
              <p>
                Telefon: +43 650 80 11 900
                <br />
                E-Mail:{" "}
                <a
                  className="decoration-primary underline underline-offset-4"
                  href="mailto:office@baeckerin.at"
                >
                  office@baeckerin.at
                </a>
              </p>
            </Section>
            <Section title="3. Rechtsgrundlagen der Verarbeitung">
              <p>
                Wir verarbeiten personenbezogene Daten nur, wenn dafür eine
                rechtliche Grundlage besteht. Abhängig vom jeweiligen
                Verarbeitungsvorgang kommen insbesondere folgende
                Rechtsgrundlagen zur Anwendung:
              </p>
              <List>
                <li>
                  <strong>Art. 6 Abs. 1 lit. a DSGVO:</strong> Sie haben uns
                  Ihre Einwilligung erteilt.
                </li>
                <li>
                  <strong>Art. 6 Abs. 1 lit. b DSGVO:</strong> Die Verarbeitung
                  ist für die Erfüllung eines Vertrags oder für vorvertragliche
                  Maßnahmen erforderlich.
                </li>
                <li>
                  <strong>Art. 6 Abs. 1 lit. c DSGVO:</strong> Die Verarbeitung
                  ist zur Erfüllung einer gesetzlichen Verpflichtung
                  erforderlich.
                </li>
                <li>
                  <strong>Art. 6 Abs. 1 lit. f DSGVO:</strong> Die Verarbeitung
                  ist zur Wahrung unserer berechtigten Interessen erforderlich
                  und Ihre Interessen oder Grundrechte überwiegen nicht.
                </li>
              </List>
              <p>
                Soweit Informationen auf Ihrem Endgerät gespeichert oder aus
                diesem ausgelesen werden, erfolgt dies nach Maßgabe des § 165
                Abs. 3 TKG 2021.
              </p>
            </Section>
            <Section title="4. Hosting der Hauptwebsite durch Vercel">
              <p>
                Unsere Hauptwebsite wird über die Infrastruktur von Vercel
                bereitgestellt.
              </p>
              <p>
                <strong>Vercel Inc.</strong>
                <br />
                440 N Barranca Avenue #4133
                <br />
                Covina, CA 91723
                <br />
                USA
              </p>
              <p>
                Beim Aufruf unserer Website verarbeitet Vercel technisch
                erforderliche Verbindungs- und Zugriffsdaten. Dazu können
                insbesondere gehören:
              </p>
              <List>
                <li>IP-Adresse</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>aufgerufene Seite oder Datei</li>
                <li>zuvor besuchte Seite beziehungsweise Referrer-URL</li>
                <li>Browsertyp und Browserversion</li>
                <li>Betriebssystem</li>
                <li>HTTP-Statuscode</li>
                <li>übertragene Datenmenge</li>
                <li>technische Anfrage- und Sitzungsinformationen</li>
              </List>
              <p>
                Diese Verarbeitung ist erforderlich, um die Website
                auszuliefern, ihre Stabilität und Sicherheit zu gewährleisten,
                technische Fehler zu erkennen und Angriffe oder missbräuchliche
                Zugriffe abzuwehren.
              </p>
              <p>
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser
                berechtigtes Interesse besteht im sicheren, zuverlässigen und
                wirtschaftlichen Betrieb unserer Website.
              </p>
              <p>
                Die Daten werden gelöscht, sobald sie für den Betrieb, die
                Fehleranalyse oder die Sicherheit der Website nicht mehr
                erforderlich sind und keine gesetzlichen Aufbewahrungspflichten
                bestehen.
              </p>
              <p>
                Vercel ist ein Unternehmen mit Sitz in den USA. Daten können
                daher auch außerhalb des Europäischen Wirtschaftsraums
                verarbeitet werden. Eine solche Übermittlung erfolgt nur auf
                Grundlage der gesetzlichen Voraussetzungen der Art. 44 ff.
                DSGVO, insbesondere auf Grundlage eines anwendbaren
                Angemessenheitsbeschlusses oder geeigneter Garantien wie den
                Standardvertragsklauseln der Europäischen Kommission.
              </p>
              <p>
                Mit Vercel besteht, soweit erforderlich, ein Vertrag zur
                Auftragsverarbeitung gemäß Art. 28 DSGVO.
              </p>
            </Section>
            <Section title="5. Vercel Web Analytics">
              <p>
                Auf unserer Hauptwebsite verwenden wir Vercel Web Analytics,
                einen Analysedienst der Vercel Inc. Vercel Web Analytics dient
                dazu, die Nutzung unserer Website statistisch auszuwerten und
                unser Angebot technisch und inhaltlich zu verbessern.
              </p>
              <p>
                Dabei können insbesondere folgende Informationen statistisch
                erfasst werden:
              </p>
              <List>
                <li>aufgerufene Seiten und Zeitpunkt eines Seitenaufrufs</li>
                <li>Herkunft beziehungsweise Referrer</li>
                <li>verwendeter Browser, Betriebssystem und Gerätetyp</li>
                <li>Bildschirmgröße und ungefähre geografische Region</li>
                <li>
                  Interaktionen beziehungsweise benutzerdefinierte Ereignisse,
                  sofern solche eingerichtet wurden
                </li>
              </List>
              <p>
                Vercel Web Analytics verwendet in der Standardkonfiguration
                keine Cookies. Die Analysedaten werden nach Angaben von Vercel
                anonymisiert beziehungsweise aggregiert gespeichert und keinem
                dauerhaften Nutzerprofil zugeordnet. Die technisch übermittelte
                IP-Adresse wird nicht als Bestandteil eines personenbezogenen
                Analyseprofils gespeichert.
              </p>
              <p>
                Soweit im Zuge der technischen Bereitstellung dennoch
                personenbezogene Daten verarbeitet werden, erfolgt dies auf
                Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes
                Interesse besteht darin, die Reichweite, Nutzung und technische
                Funktionsfähigkeit unserer Website datensparsam auszuwerten und
                unser Angebot zu verbessern.
              </p>
              <p>
                Da Vercel Web Analytics in der verwendeten Standardkonfiguration
                keine Cookies oder vergleichbaren Informationen auf Ihrem
                Endgerät speichert oder ausliest, ist dafür grundsätzlich keine
                Einwilligung über ein Cookie-Banner erforderlich. Wir achten
                darauf, über benutzerdefinierte Analyseereignisse keine Namen,
                E-Mail-Adressen, Freitexte oder andere unmittelbar
                personenbezogene Inhalte an Vercel zu übermitteln.
              </p>
              <p>
                Die Speicherdauer der statistischen Analysedaten richtet sich
                nach dem bei Vercel verwendeten Tarif und der jeweiligen
                Produktkonfiguration. Weitere Informationen finden Sie in den
                Datenschutz- und Compliance-Hinweisen von Vercel.
              </p>
            </Section>
            <Section title="6. Hosting des Onlineshops durch World4You">
              <p>
                Der unter shop.baeckerin.at erreichbare Onlineshop basiert auf
                WordPress und WooCommerce und wird bei World4You gehostet.
              </p>
              <p>
                <strong>World4You Internet Services GmbH</strong>
                <br />
                Wolfgang-Pauli-Straße 2, BT3
                <br />
                4020 Linz
                <br />
                Österreich
              </p>
              <p>
                Beim Besuch des Onlineshops verarbeitet World4You technisch
                erforderliche Server- und Zugriffsdaten, insbesondere
                IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seiten
                und Dateien, Referrer-URL, Browsertyp und Browserversion,
                Betriebssystem, HTTP-Statuscode, übertragene Datenmenge sowie
                technische Fehler- und Sicherheitsprotokolle.
              </p>
              <p>
                Die Verarbeitung dient der Bereitstellung, Stabilität und
                Sicherheit des Onlineshops sowie der Erkennung und Abwehr
                missbräuchlicher Zugriffe. Rechtsgrundlage ist Art. 6 Abs. 1
                lit. f DSGVO. Unser berechtigtes Interesse besteht im sicheren
                und zuverlässigen Betrieb unseres Onlineshops.
              </p>
              <p>
                Die Daten werden gelöscht, sobald sie für den jeweiligen Zweck
                nicht mehr erforderlich sind und keine gesetzlichen
                Aufbewahrungspflichten oder berechtigten Sicherheitsinteressen
                bestehen. Mit World4You besteht ein Vertrag zur
                Auftragsverarbeitung gemäß Art. 28 DSGVO.
              </p>
            </Section>
            <Section title="7. Verschlüsselte Datenübertragung">
              <p>
                Unsere Websites verwenden eine TLS- beziehungsweise
                HTTPS-Verschlüsselung. Dadurch werden Daten, die zwischen Ihrem
                Browser und unseren Servern übertragen werden, gegen unbefugtes
                Mitlesen geschützt. Eine verschlüsselte Verbindung erkennen Sie
                insbesondere daran, dass die Adresse der Website mit „https://“
                beginnt.
              </p>
            </Section>
            <Section title="8. Kontaktaufnahme">
              <p>
                Sie können uns über das Kontaktformular, per E-Mail, telefonisch
                oder auf anderem Wege kontaktieren. Dabei verarbeiten wir
                abhängig von der gewählten Kontaktart insbesondere:
              </p>
              <List>
                <li>Name, E-Mail-Adresse und Telefonnummer</li>
                <li>
                  Inhalt Ihrer Nachricht und Zeitpunkt der Kontaktaufnahme
                </li>
                <li>gegebenenfalls weitere freiwillig übermittelte Angaben</li>
              </List>
              <p>
                Die Daten werden verwendet, um Ihre Anfrage zu bearbeiten,
                Rückfragen zu beantworten und die damit verbundene Kommunikation
                zu führen. Bezieht sich Ihre Anfrage auf eine Bestellung, ein
                Angebot oder eine andere vertragliche beziehungsweise
                vorvertragliche Beziehung, erfolgt die Verarbeitung auf
                Grundlage von Art. 6 Abs. 1 lit. b DSGVO. Bei allgemeinen
                Anfragen erfolgt die Verarbeitung auf Grundlage unseres
                berechtigten Interesses gemäß Art. 6 Abs. 1 lit. f DSGVO.
              </p>
              <p>
                Die Daten werden gelöscht, sobald die Anfrage abschließend
                bearbeitet wurde und keine gesetzlichen Aufbewahrungspflichten
                oder berechtigten Gründe für eine weitere Speicherung bestehen.
              </p>
            </Section>
            <Section title="9. Newsletter">
              <p>
                Auf unserer Website können Sie sich zu unserem Newsletter
                anmelden. Der Newsletter enthält Informationen über unsere
                Bäckerei, unsere Produkte, neue Angebote, Aktionen,
                Veranstaltungen und weitere Neuigkeiten.
              </p>
              <p>Für die Anmeldung verarbeiten wir insbesondere:</p>
              <List>
                <li>E-Mail-Adresse und gegebenenfalls Name oder Anrede</li>
                <li>Zeitpunkt der Anmeldung und Bestätigung</li>
                <li>IP-Adresse bei der Anmeldung und Bestätigung</li>
                <li>Informationen über Änderungen und Abmeldungen</li>
              </List>
              <p>
                Die Anmeldung erfolgt im Double-Opt-in-Verfahren.
                Rechtsgrundlage für den Newsletterversand ist Ihre Einwilligung
                gemäß Art. 6 Abs. 1 lit. a DSGVO in Verbindung mit § 174 TKG
                2021. Sie können Ihre Einwilligung jederzeit mit Wirkung für die
                Zukunft über den Abmeldelink oder per E-Mail an{" "}
                <a
                  className="decoration-primary underline underline-offset-4"
                  href="mailto:office@baeckerin.at"
                >
                  office@baeckerin.at
                </a>{" "}
                widerrufen.
              </p>
              <Section title="Newsletterversand über Mailchimp" sub>
                <p>
                  Für die Verwaltung und den Versand unseres Newsletters
                  verwenden wir Mailchimp.
                </p>
                <p>
                  <strong>The Rocket Science Group LLC d/b/a Mailchimp</strong>
                  <br />
                  ein Unternehmen der Intuit-Unternehmensgruppe
                  <br />
                  USA
                </p>
                <p>
                  Die bei der Newsletter-Anmeldung erhobenen Daten werden an
                  Mailchimp übermittelt und dort verarbeitet, insbesondere zur
                  Verwaltung der Empfänger, zum Versand, zur Dokumentation von
                  An- und Abmeldungen, zur technischen Zustellung, zur
                  Verhinderung von Missbrauch und zur statistischen Auswertung.
                </p>
                <p>
                  Newsletter können, sofern diese Funktion aktiviert ist,
                  Zählpixel und personalisierte Links enthalten. Dadurch kann
                  ermittelt werden, ob ein Newsletter geöffnet wurde und welche
                  Links angeklickt wurden. Diese personenbezogene Erfolgsmessung
                  erfolgt auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1
                  lit. a DSGVO.
                </p>
                <p>
                  Mailchimp verarbeitet Daten teilweise in den USA. Mit
                  Mailchimp besteht ein Vertrag zur Auftragsverarbeitung gemäß
                  Art. 28 DSGVO. Die Newsletterdaten werden grundsätzlich so
                  lange gespeichert, wie Sie den Newsletter abonniert haben.
                  Nach der Abmeldung können bestimmte Nachweisdaten für einen
                  angemessenen Zeitraum gespeichert werden.
                </p>
              </Section>
            </Section>
            <Section title="10. Onlineshop mit WooCommerce">
              <p>
                Unser Onlineshop wird mit WordPress und WooCommerce betrieben.
                Beim Besuch und bei der Nutzung des Onlineshops können
                insbesondere IP-Adresse, Browser- und Geräteinformationen,
                aufgerufene Seiten und Produkte, Warenkorbinhalt, Kundennummer,
                Name, Rechnungs- und Lieferanschrift, E-Mail-Adresse,
                Telefonnummer, bestellte Produkte, Bestellwert, Zahlungsart,
                Lieferart, Bestellstatus, Bestelldatum, Kundenmitteilungen und
                gegebenenfalls Daten eines Kundenkontos verarbeitet werden.
              </p>
              <p>
                Diese Daten werden verarbeitet, um Produkte im Warenkorb zu
                speichern, Bestellungen entgegenzunehmen, Verträge abzuwickeln,
                Zahlungen zuzuordnen, Waren auszuliefern, Rechnungen zu
                erstellen und Kundenanfragen zu bearbeiten. Rechtsgrundlage ist
                Art. 6 Abs. 1 lit. b DSGVO; soweit Daten gesetzlich gespeichert
                werden müssen, zusätzlich Art. 6 Abs. 1 lit. c DSGVO.
                Pflichtangaben sind erforderlich, um eine Bestellung bearbeiten
                und den Vertrag durchführen zu können.
              </p>
            </Section>
            <Section title="11. Kundenkonto">
              <p>
                Soweit im Onlineshop die Erstellung eines Kundenkontos angeboten
                wird, können Sie freiwillig ein Kundenkonto anlegen. Im
                Kundenkonto können insbesondere Name, Kontaktdaten, Rechnungs-
                und Lieferadressen, vergangene Bestellungen und
                Kontoeinstellungen gespeichert werden.
              </p>
              <p>
                Die Verarbeitung erfolgt zur Bereitstellung des Kundenkontos und
                zur vereinfachten Abwicklung künftiger Bestellungen auf
                Grundlage von Art. 6 Abs. 1 lit. b DSGVO. Sie können die
                Löschung Ihres Kundenkontos verlangen. Daten, die aufgrund
                gesetzlicher Aufbewahrungspflichten weiterhin gespeichert werden
                müssen, werden für andere Verwendungszwecke gesperrt.
              </p>
            </Section>
            <Section title="12. Zahlungsabwicklung">
              <p>
                In unserem Onlineshop stehen Ihnen folgende Zahlungsarten zur
                Verfügung:
              </p>
              <List>
                <li>Banküberweisung beziehungsweise Vorauskasse</li>
                <li>PayPal</li>
                <li>Kreditkartenzahlung über WooPayments</li>
              </List>
              <p>
                Abhängig von der gewählten Zahlungsart verarbeiten wir
                insbesondere Name, Rechnungsadresse, E-Mail-Adresse,
                Bestellnummer, Rechnungsbetrag, Währung, gewählte Zahlungsart,
                Zahlungsstatus, Transaktionskennung, gegebenenfalls Bank- oder
                Kartendaten sowie gegebenenfalls IP-Adresse und Geräte- und
                Browserinformationen.
              </p>
              <p>
                Die Verarbeitung erfolgt zur Durchführung der von Ihnen
                gewählten Zahlung und damit zur Erfüllung des Kaufvertrags gemäß
                Art. 6 Abs. 1 lit. b DSGVO. Soweit Zahlungs- und
                Transaktionsdaten aufgrund gesetzlicher Buchführungs- und
                Aufbewahrungspflichten gespeichert werden müssen, erfolgt die
                Verarbeitung zusätzlich auf Grundlage von Art. 6 Abs. 1 lit. c
                DSGVO.
              </p>
              <Section
                title="12.1 Banküberweisung beziehungsweise Vorauskasse"
                sub
              >
                <p>
                  Bei Auswahl dieser Zahlungsart erhalten Sie unsere
                  Bankverbindung und überweisen den Rechnungsbetrag selbst an
                  das angegebene Bankkonto. Im Rahmen der Überweisung erhalten
                  wir beziehungsweise unsere Bank insbesondere Name des
                  Kontoinhabers, IBAN beziehungsweise Angaben zum Absenderkonto,
                  überwiesenen Betrag, Buchungsdatum sowie Zahlungsreferenz
                  beziehungsweise Verwendungszweck.
                </p>
                <p>
                  Diese Daten werden zur Zuordnung der Zahlung zu Ihrer
                  Bestellung und zur Abwicklung des Kaufvertrags verarbeitet.
                  Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO. Die
                  beteiligten Kreditinstitute verarbeiten die Zahlungsdaten im
                  Rahmen ihrer gesetzlichen und vertraglichen Aufgaben in
                  eigener datenschutzrechtlicher Verantwortlichkeit.
                </p>
              </Section>
              <Section title="12.2 Zahlung über PayPal" sub>
                <p>
                  Bei Auswahl der Zahlungsart PayPal wird die Zahlung über
                  PayPal abgewickelt.
                </p>
                <p>
                  <strong>PayPal (Europe) S.à r.l. et Cie, S.C.A.</strong>
                  <br />
                  22–24 Boulevard Royal
                  <br />
                  L-2449 Luxemburg
                  <br />
                  Luxemburg
                </p>
                <p>
                  Zur Durchführung der Zahlung übermitteln wir die
                  erforderlichen Bestell- und Zahlungsinformationen,
                  insbesondere Name, Rechnungs- und gegebenenfalls
                  Lieferadresse, E-Mail-Adresse, Bestellnummer, Rechnungsbetrag,
                  Währung, Informationen zu den bestellten Waren, Zahlungsstatus
                  und technische Verbindungsdaten.
                </p>
                <p>
                  PayPal verarbeitet die Daten zur Zahlungsabwicklung und kann
                  sie darüber hinaus für Identitäts- und Kontoprüfung,
                  Betrugsprävention, Risikobewertung, Geldwäscheprävention,
                  gesetzliche Verpflichtungen sowie Rückzahlungen und
                  Zahlungsstreitigkeiten verwenden. Die Übermittlung erfolgt zur
                  Durchführung des Kaufvertrags gemäß Art. 6 Abs. 1 lit. b
                  DSGVO. Für die darüber hinausgehende Verarbeitung durch PayPal
                  ist PayPal grundsätzlich selbst verantwortlich.
                </p>
              </Section>
              <Section title="12.3 Kreditkartenzahlung über WooPayments" sub>
                <p>Für Kreditkartenzahlungen verwenden wir WooPayments.</p>
                <p>
                  <strong>WooCommerce Ireland Ltd.</strong>
                  <br />
                  Grand Canal Dock, 25 Herbert Place
                  <br />
                  Dublin, D02 AY86, Irland
                </p>
                <p>
                  WooPayments verwendet für die technische Zahlungsabwicklung
                  die Infrastruktur von Stripe. Beteiligt sein können
                  insbesondere <strong>Stripe Payments Europe, Limited</strong>,
                  1 Grand Canal Street Lower, Grand Canal Dock, Dublin, D02
                  H210, Irland, sowie{" "}
                  <strong>Stripe Technology Europe, Limited</strong>, 1 Wilton
                  Park, Wilton Place, Dublin 2, D02 FX04, Irland.
                </p>
                <p>
                  Bei einer Kreditkartenzahlung können insbesondere Name,
                  Rechnungs- und Lieferadresse, E-Mail-Adresse, Telefonnummer,
                  Bestellnummer, Rechnungsbetrag, Währung, Informationen zu den
                  bestellten Waren, Kredit- oder Debitkartendaten, Ablaufdatum
                  der Karte, Zahlungsstatus, Transaktionskennung, IP-Adresse,
                  Geräte- und Browserinformationen sowie Informationen zur
                  Betrugs- und Risikoprüfung verarbeitet werden.
                </p>
                <p>
                  Die Eingabe und Verarbeitung der vollständigen Kartendaten
                  erfolgt grundsätzlich innerhalb der Zahlungsinfrastruktur von
                  WooPayments beziehungsweise Stripe. Wir erhalten üblicherweise
                  keine vollständige Kreditkartennummer. Die Verarbeitung dient
                  der Durchführung und Autorisierung der Zahlung, der Zuordnung
                  zur Bestellung, der Betrugsprävention sowie der Bearbeitung
                  von Rückerstattungen und Zahlungsstreitigkeiten.
                  Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.
                </p>
                <p>
                  WooCommerce und Stripe können bestimmte Daten in eigener
                  Verantwortlichkeit verarbeiten. Soweit Daten außerhalb des
                  Europäischen Wirtschaftsraums verarbeitet werden, erfolgt die
                  Übermittlung nur unter den Voraussetzungen der Art. 44 ff.
                  DSGVO.
                </p>
              </Section>
            </Section>
            <Section title="13. Versand mit der Österreichischen Post">
              <p>
                Für die Zustellung unserer Bestellungen verwenden wir
                grundsätzlich die Österreichische Post.
              </p>
              <p>
                <strong>Österreichische Post AG</strong>
                <br />
                Rochusplatz 1<br />
                1030 Wien
                <br />
                Österreich
              </p>
              <p>
                Zur Zustellung einer Bestellung übermitteln wir die
                erforderlichen Daten, insbesondere Name, Lieferanschrift,
                gegebenenfalls E-Mail-Adresse und Telefonnummer, Paket- oder
                Sendungsnummer sowie weitere für die Zustellung erforderliche
                Angaben.
              </p>
              <p>
                Die Übermittlung erfolgt zur Erfüllung des Kaufvertrags und zur
                Zustellung der bestellten Waren gemäß Art. 6 Abs. 1 lit. b
                DSGVO. Die Österreichische Post verarbeitet diese Daten im
                Rahmen ihrer Zustelldienstleistungen in eigener
                datenschutzrechtlicher Verantwortlichkeit.
              </p>
            </Section>
            <Section title="14. Speicherung von Bestell- und Rechnungsdaten">
              <p>
                Bestell-, Vertrags-, Buchungs- und Rechnungsdaten werden
                entsprechend den gesetzlichen Aufbewahrungspflichten
                gespeichert. Nach den österreichischen abgabenrechtlichen
                Vorschriften sind Bücher, Aufzeichnungen und die dazugehörigen
                Belege grundsätzlich sieben Jahre aufzubewahren. Die Frist kann
                sich verlängern, wenn die Unterlagen für ein anhängiges
                Verfahren oder zur Geltendmachung, Ausübung oder Verteidigung
                von Rechtsansprüchen benötigt werden. Nach Ablauf der
                gesetzlichen Fristen werden die Daten gelöscht oder
                anonymisiert.
              </p>
            </Section>
            <Section title="15. Technisch notwendige Cookies im Onlineshop">
              <p>
                Unser Onlineshop verwendet technisch notwendige Cookies oder
                vergleichbare Speichertechnologien. Diese sind erforderlich, um
                grundlegende Funktionen bereitzustellen, beispielsweise die
                Speicherung des Warenkorbs, die Zuordnung einer Sitzung, die
                Anmeldung in einem Kundenkonto, die Durchführung des
                Bestellvorgangs, technische Einstellungen sowie den Schutz vor
                Missbrauch und Angriffen.
              </p>
              <p>
                Technisch notwendige Cookies können ohne gesonderte Einwilligung
                verwendet werden, soweit sie für den ausdrücklich gewünschten
                Dienst unbedingt erforderlich sind. Rechtsgrundlage ist abhängig
                vom jeweiligen Zweck Art. 6 Abs. 1 lit. b oder Art. 6 Abs. 1
                lit. f DSGVO. Sitzungscookies werden regelmäßig nach dem
                Schließen des Browsers gelöscht.
              </p>
            </Section>
            <Section title="16. Externe Links und soziale Netzwerke">
              <p>
                Unsere Websites enthalten Links zu externen Websites und
                sozialen Netzwerken, beispielsweise Instagram und Facebook. Beim
                bloßen Besuch unserer Website werden durch einen gewöhnlichen
                externen Link noch keine Daten an den Betreiber der verlinkten
                Seite übertragen. Erst wenn Sie einen solchen Link anklicken,
                verlassen Sie unsere Website und stellen eine direkte Verbindung
                zum jeweiligen Anbieter her.
              </p>
              <p>
                Ab diesem Zeitpunkt kann der externe Anbieter insbesondere
                IP-Adresse, Browserinformationen, Zeitpunkt des Aufrufs, zuvor
                besuchte Seite und Informationen über Ihr Benutzerkonto
                verarbeiten. Für die Verarbeitung auf den externen Websites ist
                grundsätzlich der jeweilige Betreiber verantwortlich. Wir
                verwenden durch die bloße Verlinkung keine Facebook-Pixel,
                Instagram-Pixel oder vergleichbaren Marketing-Tracker.
              </p>
            </Section>
            <Section title="17. Empfänger personenbezogener Daten">
              <p>
                Personenbezogene Daten können abhängig vom jeweiligen
                Verarbeitungsvorgang insbesondere an folgende Kategorien von
                Empfängern übermittelt werden:
              </p>
              <List>
                <li>Hosting- und IT-Dienstleister</li>
                <li>Newsletteranbieter und Zahlungsdienstleister</li>
                <li>
                  Banken, Kreditinstitute sowie Versand- und
                  Zustelldienstleister
                </li>
                <li>Steuerberatung, Buchhaltung und Rechtsberatung</li>
                <li>
                  Behörden, Gerichte sowie technische Support- und
                  Wartungsdienstleister
                </li>
              </List>
              <p>
                Eine Übermittlung erfolgt nur, soweit sie zur Erfüllung eines
                Vertrags, einer gesetzlichen Verpflichtung, auf Grundlage Ihrer
                Einwilligung oder aufgrund eines überwiegenden berechtigten
                Interesses erforderlich ist.
              </p>
            </Section>
            <Section title="18. Datenübermittlung in Drittländer">
              <p>
                Einige unserer Dienstleister haben ihren Sitz außerhalb des
                Europäischen Wirtschaftsraums oder setzen Unterauftragnehmer in
                Drittländern ein. Eine Datenübermittlung erfolgt nur, wenn die
                gesetzlichen Voraussetzungen der Art. 44 ff. DSGVO erfüllt sind.
              </p>
              <p>
                Als Grundlage können insbesondere ein Angemessenheitsbeschluss
                der Europäischen Kommission, das EU–US Data Privacy Framework,
                Standardvertragsklauseln der Europäischen Kommission,
                zusätzliche technische und organisatorische Schutzmaßnahmen,
                Ihre ausdrückliche Einwilligung oder die Erforderlichkeit zur
                Vertragserfüllung dienen. Trotz dieser Schutzmaßnahmen kann ein
                Zugriff staatlicher Stellen nach den dort geltenden Gesetzen
                nicht vollständig ausgeschlossen werden.
              </p>
            </Section>
            <Section title="19. Speicherdauer">
              <p>
                Wir speichern personenbezogene Daten grundsätzlich nur so lange,
                wie dies für den jeweiligen Zweck erforderlich ist. Darüber
                hinaus können Daten gespeichert werden, wenn gesetzliche
                Aufbewahrungspflichten bestehen, Verjährungsfristen noch nicht
                abgelaufen sind, Daten zur Verteidigung von Rechtsansprüchen
                benötigt werden, eine Einwilligung weiterhin besteht oder
                berechtigte Sicherheits- oder Nachweisinteressen bestehen. Nach
                Wegfall des Verarbeitungszwecks und Ablauf der maßgeblichen
                Fristen werden die Daten gelöscht oder anonymisiert.
              </p>
            </Section>
            <Section title="20. Ihre Rechte">
              <p>
                Nach Maßgabe der gesetzlichen Voraussetzungen haben Sie
                insbesondere folgende Rechte:
              </p>
              <List>
                <li>Recht auf Auskunft gemäß Art. 15 DSGVO</li>
                <li>Recht auf Berichtigung gemäß Art. 16 DSGVO</li>
                <li>Recht auf Löschung gemäß Art. 17 DSGVO</li>
                <li>
                  Recht auf Einschränkung der Verarbeitung gemäß Art. 18 DSGVO
                </li>
                <li>Recht auf Datenübertragbarkeit gemäß Art. 20 DSGVO</li>
                <li>Recht auf Widerspruch gemäß Art. 21 DSGVO</li>
                <li>
                  Recht auf Widerruf einer Einwilligung gemäß Art. 7 Abs. 3
                  DSGVO
                </li>
                <li>
                  Recht auf Beschwerde bei einer Datenschutzaufsichtsbehörde
                  gemäß Art. 77 DSGVO
                </li>
              </List>
              <p>
                Soweit eine Verarbeitung auf Ihrer Einwilligung beruht, können
                Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.
                Soweit eine Verarbeitung auf Art. 6 Abs. 1 lit. f DSGVO beruht,
                können Sie aus Gründen, die sich aus Ihrer besonderen Situation
                ergeben, Widerspruch einlegen. Gegen Direktwerbung können Sie
                jederzeit widersprechen.
              </p>
              <p>
                Zur Ausübung Ihrer Rechte kontaktieren Sie uns unter{" "}
                <a
                  className="decoration-primary underline underline-offset-4"
                  href="mailto:office@baeckerin.at"
                >
                  office@baeckerin.at
                </a>
                .
              </p>
            </Section>
            <Section title="21. Beschwerderecht">
              <p>
                Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde
                zu beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung
                Ihrer personenbezogenen Daten gegen das Datenschutzrecht
                verstößt.
              </p>
              <p>
                <strong>Österreichische Datenschutzbehörde</strong>
                <br />
                Barichgasse 40–42
                <br />
                1030 Wien
                <br />
                Österreich
              </p>
              <p>
                E-Mail:{" "}
                <a
                  className="decoration-primary underline underline-offset-4"
                  href="mailto:dsb@dsb.gv.at"
                >
                  dsb@dsb.gv.at
                </a>
              </p>
            </Section>
            <Section title="22. Keine automatisierte Entscheidungsfindung">
              <p>
                Wir treffen grundsätzlich keine Entscheidungen, die
                ausschließlich auf einer automatisierten Verarbeitung
                einschließlich Profiling beruhen und Ihnen gegenüber rechtliche
                Wirkung entfalten oder Sie in vergleichbarer Weise erheblich
                beeinträchtigen.
              </p>
            </Section>
            <Section title="23. Datensicherheit">
              <p>
                Wir treffen angemessene technische und organisatorische
                Maßnahmen, um personenbezogene Daten gegen Verlust,
                Manipulation, unberechtigten Zugriff, unberechtigte Offenlegung
                und sonstigen Missbrauch zu schützen. Die Maßnahmen werden
                entsprechend dem technischen Fortschritt, der Art der
                verarbeiteten Daten und dem jeweiligen Risiko regelmäßig
                überprüft und angepasst.
              </p>
            </Section>
            <Section title="24. Änderungen dieser Datenschutzerklärung">
              <p>
                Wir können diese Datenschutzerklärung anpassen, wenn sich unsere
                Websites, die eingesetzten Dienste, gesetzliche Vorgaben oder
                behördliche Anforderungen ändern. Es gilt die jeweils auf
                unseren Websites veröffentlichte aktuelle Fassung.
              </p>
            </Section>
          </article>
        </ContainerStandard>
      </main>
    </>
  );
}
