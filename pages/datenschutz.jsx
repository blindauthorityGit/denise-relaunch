import Head from "next/head";
import { useState, useEffect } from "react";

// SANITY
import client from "../client";
//COMPS

import BG from "../components/layout/bg";
import { Menu2 } from "../components/menues";
import { ShadowBox, ContainerStandard } from "../components/container";

import { StartKachelLeft, Contact, IntroText, ContactImg } from "../components/sections";

import { Divider1 } from "../components/divider";
import { ImgText1, BGText1, ImgText2 } from "../components/imgText";
import { Element } from "../components/quickLinks";
import Map from "../components/map";
//ASSETS
import { RxHamburgerMenu } from "react-icons/rx";
import { menuItems, socialMedia } from "../components/menues/config";
import LogoLight from "../assets/logoLight.svg";
import LogoDark from "../assets/logoDark.svg";

//FUNCTIONS
import showCurrentURL from "../components/functions/showCurrentURL";

export default function Datenschutz() {
    useEffect(() => {
        console.log();
    }, []);

    return (
        <>
            <Head>
                <title>Denise Bäckerin | Impressum</title>
            </Head>

            <Menu2
                logoLight={LogoLight.src}
                logoDark={LogoDark.src}
                menuItems={menuItems}
                socialMedia={socialMedia}
                burgerIcon={<RxHamburgerMenu />}
                onBurgerClick={(e) => {
                    console.log(e);
                }}
                onClick={() => {
                    console.log("IS CLICKED");
                    setIsOpen(true);
                }}
            ></Menu2>
            <BG />
            <div className="overflow-x-hidden">
                {/* <HeroSimple>Kontakt</HeroSimple> */}
                {/* <Divider1></Divider1> */}
                <div className="h-6 xl:h-16 "></div>

                <ContainerStandard>
                    <div className="col-span-12 my-8 lg:my-16 px-8 lg:px-32 font-freight">
                        <h2 className="font-freight text-2xl sm:text-4xl text-darkText xl:text-6xl font-thin mt-8 tracking-widest mb-8 lg:mb-12">
                            Datenschutzerklärung
                        </h2>
                        <h3 id="einleitung-ueberblick" className="adsimple-112503916 mb-4">
                            Einleitung und Überblick
                        </h3>
                        <p>
                            Wir haben diese Datenschutzerklärung (Fassung 11.05.2023-112503916) verfasst, um Ihnen gemäß
                            der Vorgaben der{" "}
                            <a
                                className="adsimple-112503916"
                                href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679&amp;from=DE&amp;tid=112503916#d1e2269-1-1"
                                target="_blank"
                                rel="noopener"
                            >
                                Datenschutz-Grundverordnung (EU) 2016/679
                            </a>{" "}
                            und anwendbaren nationalen Gesetzen zu erklären, welche personenbezogenen Daten (kurz Daten)
                            wir als Verantwortliche &#8211; und die von uns beauftragten Auftragsverarbeiter (z. B.
                            Provider) &#8211; verarbeiten, zukünftig verarbeiten werden und welche rechtmäßigen
                            Möglichkeiten Sie haben. Die verwendeten Begriffe sind geschlechtsneutral zu verstehen.
                            <br />
                            <strong className="adsimple-112503916">Kurz gesagt:</strong> Wir informieren Sie umfassend
                            über Daten, die wir über Sie verarbeiten.
                        </p>
                        <p>
                            Datenschutzerklärungen klingen für gewöhnlich sehr technisch und verwenden juristische
                            Fachbegriffe. Diese Datenschutzerklärung soll Ihnen hingegen die wichtigsten Dinge so
                            einfach und transparent wie möglich beschreiben. Soweit es der Transparenz förderlich ist,
                            werden technische{" "}
                            <strong className="adsimple-112503916">Begriffe leserfreundlich erklärt</strong>, Links zu
                            weiterführenden Informationen geboten und{" "}
                            <strong className="adsimple-112503916">Grafiken</strong> zum Einsatz gebracht. Wir
                            informieren damit in klarer und einfacher Sprache, dass wir im Rahmen unserer
                            Geschäftstätigkeiten nur dann personenbezogene Daten verarbeiten, wenn eine entsprechende
                            gesetzliche Grundlage gegeben ist. Das ist sicher nicht möglich, wenn man möglichst knappe,
                            unklare und juristisch-technische Erklärungen abgibt, so wie sie im Internet oft Standard
                            sind, wenn es um Datenschutz geht. Ich hoffe, Sie finden die folgenden Erläuterungen
                            interessant und informativ und vielleicht ist die eine oder andere Information dabei, die
                            Sie noch nicht kannten.
                            <br />
                            Wenn trotzdem Fragen bleiben, möchten wir Sie bitten, sich an die unten bzw. im Impressum
                            genannte verantwortliche Stelle zu wenden, den vorhandenen Links zu folgen und sich weitere
                            Informationen auf Drittseiten anzusehen. Unsere Kontaktdaten finden Sie selbstverständlich
                            auch im Impressum.
                        </p>
                        <h2 id="anwendungsbereich" className="adsimple-112503916 mb-4">
                            Anwendungsbereich
                        </h2>
                        <p>
                            Diese Datenschutzerklärung gilt für alle von uns im Unternehmen verarbeiteten
                            personenbezogenen Daten und für alle personenbezogenen Daten, die von uns beauftragte Firmen
                            (Auftragsverarbeiter) verarbeiten. Mit personenbezogenen Daten meinen wir Informationen im
                            Sinne des Art. 4 Nr. 1 DSGVO wie zum Beispiel Name, E-Mail-Adresse und postalische Anschrift
                            einer Person. Die Verarbeitung personenbezogener Daten sorgt dafür, dass wir unsere
                            Dienstleistungen und Produkte anbieten und abrechnen können, sei es online oder offline. Der
                            Anwendungsbereich dieser Datenschutzerklärung umfasst:
                        </p>
                        <ul className="adsimple-112503916">
                            <li className="adsimple-112503916">
                                alle Onlineauftritte (Websites, Onlineshops), die wir betreiben
                            </li>
                            <li className="adsimple-112503916">Social Media Auftritte und E-Mail-Kommunikation</li>
                            <li className="adsimple-112503916">mobile Apps für Smartphones und andere Geräte</li>
                        </ul>
                        <p>
                            <strong className="adsimple-112503916">Kurz gesagt:</strong> Die Datenschutzerklärung gilt
                            für alle Bereiche, in denen personenbezogene Daten im Unternehmen über die genannten Kanäle
                            strukturiert verarbeitet werden. Sollten wir außerhalb dieser Kanäle mit Ihnen in
                            Rechtsbeziehungen eintreten, werden wir Sie gegebenenfalls gesondert informieren.
                        </p>
                        <h2 id="rechtsgrundlagen" className="adsimple-112503916 mb-4">
                            Rechtsgrundlagen
                        </h2>
                        <p>
                            In der folgenden Datenschutzerklärung geben wir Ihnen transparente Informationen zu den
                            rechtlichen Grundsätzen und Vorschriften, also den Rechtsgrundlagen der
                            Datenschutz-Grundverordnung, die uns ermöglichen, personenbezogene Daten zu verarbeiten.
                            <br />
                            Was das EU-Recht betrifft, beziehen wir uns auf die VERORDNUNG (EU) 2016/679 DES
                            EUROPÄISCHEN PARLAMENTS UND DES RATES vom 27. April 2016. Diese Datenschutz-Grundverordnung
                            der EU können Sie selbstverständlich online auf EUR-Lex, dem Zugang zum EU-Recht, unter{" "}
                            <a
                                className="adsimple-112503916"
                                href="https://eur-lex.europa.eu/legal-content/DE/ALL/?uri=celex%3A32016R0679"
                            >
                                https://eur-lex.europa.eu/legal-content/DE/ALL/?uri=celex%3A32016R0679
                            </a>{" "}
                            nachlesen.
                        </p>
                        <p>Wir verarbeiten Ihre Daten nur, wenn mindestens eine der folgenden Bedingungen zutrifft:</p>
                        <ol>
                            <li className="adsimple-112503916">
                                <strong className="adsimple-112503916">Einwilligung</strong> (Artikel 6 Absatz 1 lit. a
                                DSGVO): Sie haben uns Ihre Einwilligung gegeben, Daten zu einem bestimmten Zweck zu
                                verarbeiten. Ein Beispiel wäre die Speicherung Ihrer eingegebenen Daten eines
                                Kontaktformulars.
                            </li>
                            <li className="adsimple-112503916">
                                <strong className="adsimple-112503916">Vertrag</strong> (Artikel 6 Absatz 1 lit. b
                                DSGVO): Um einen Vertrag oder vorvertragliche Verpflichtungen mit Ihnen zu erfüllen,
                                verarbeiten wir Ihre Daten. Wenn wir zum Beispiel einen Kaufvertrag mit Ihnen
                                abschließen, benötigen wir vorab personenbezogene Informationen.
                            </li>
                            <li className="adsimple-112503916">
                                <strong className="adsimple-112503916">Rechtliche Verpflichtung</strong> (Artikel 6
                                Absatz 1 lit. c DSGVO): Wenn wir einer rechtlichen Verpflichtung unterliegen,
                                verarbeiten wir Ihre Daten. Zum Beispiel sind wir gesetzlich verpflichtet Rechnungen für
                                die Buchhaltung aufzuheben. Diese enthalten in der Regel personenbezogene Daten.
                            </li>
                            <li className="adsimple-112503916">
                                <strong className="adsimple-112503916">Berechtigte Interessen</strong> (Artikel 6 Absatz
                                1 lit. f DSGVO): Im Falle berechtigter Interessen, die Ihre Grundrechte nicht
                                einschränken, behalten wir uns die Verarbeitung personenbezogener Daten vor. Wir müssen
                                zum Beispiel gewisse Daten verarbeiten, um unsere Website sicher und wirtschaftlich
                                effizient betreiben zu können. Diese Verarbeitung ist somit ein berechtigtes Interesse.
                            </li>
                        </ol>
                        <p>
                            Weitere Bedingungen wie die Wahrnehmung von Aufnahmen im öffentlichen Interesse und Ausübung
                            öffentlicher Gewalt sowie dem Schutz lebenswichtiger Interessen treten bei uns in der Regel
                            nicht auf. Soweit eine solche Rechtsgrundlage doch einschlägig sein sollte, wird diese an
                            der entsprechenden Stelle ausgewiesen.
                        </p>
                        <p>Zusätzlich zu der EU-Verordnung gelten auch noch nationale Gesetze:</p>
                        <ul className="adsimple-112503916">
                            <li className="adsimple-112503916">
                                In <strong className="adsimple-112503916">Österreich</strong> ist dies das Bundesgesetz
                                zum Schutz natürlicher Personen bei der Verarbeitung personenbezogener Daten (
                                <strong className="adsimple-112503916">Datenschutzgesetz</strong>), kurz{" "}
                                <strong className="adsimple-112503916">DSG</strong>.
                            </li>
                            <li className="adsimple-112503916">
                                In <strong className="adsimple-112503916">Deutschland</strong> gilt das{" "}
                                <strong className="adsimple-112503916">Bundesdatenschutzgesetz</strong>, kurz
                                <strong className="adsimple-112503916"> BDSG</strong>.
                            </li>
                        </ul>
                        <p>
                            Sofern weitere regionale oder nationale Gesetze zur Anwendung kommen, informieren wir Sie in
                            den folgenden Abschnitten darüber.
                        </p>
                        <h2 id="kontaktdaten-verantwortliche" className="adsimple-112503916 mb-4">
                            Kontaktdaten des Verantwortlichen
                        </h2>
                        <p>
                            Sollten Sie Fragen zum Datenschutz oder zur Verarbeitung personenbezogener Daten haben,
                            finden Sie nachfolgend die Kontaktdaten der verantwortlichen Person bzw. Stelle:
                            <br />
                            <span className="adsimple-112503916">
                                Denise Pölzelbauer
                                <br />
                                Hauptstraße 23
                                <br />
                                2823 Brunn an der Pitten
                            </span>
                        </p>
                        <p>
                            E-Mail: <a href="mailto:office@baeckerin.at">office@baeckerin.at</a>
                            <br />
                            Telefon: <a href="tel:+43 650 80 11 900">+43 650 80 11 900</a>
                            <br />
                            Impressum:{" "}
                            <a href="https://www.musterfirma.at/impressum/">https://www.musterfirma.at/impressum/</a>
                        </p>
                        <h2 id="speicherdauer" className="adsimple-112503916 mb-4">
                            Speicherdauer
                        </h2>
                        <p>
                            Dass wir personenbezogene Daten nur so lange speichern, wie es für die Bereitstellung
                            unserer Dienstleistungen und Produkte unbedingt notwendig ist, gilt als generelles Kriterium
                            bei uns. Das bedeutet, dass wir personenbezogene Daten löschen, sobald der Grund für die
                            Datenverarbeitung nicht mehr vorhanden ist. In einigen Fällen sind wir gesetzlich dazu
                            verpflichtet, bestimmte Daten auch nach Wegfall des ursprüngliches Zwecks zu speichern, zum
                            Beispiel zu Zwecken der Buchführung.
                        </p>
                        <p>
                            Sollten Sie die Löschung Ihrer Daten wünschen oder die Einwilligung zur Datenverarbeitung
                            widerrufen, werden die Daten so rasch wie möglich und soweit keine Pflicht zur Speicherung
                            besteht, gelöscht.
                        </p>
                        <p>
                            Über die konkrete Dauer der jeweiligen Datenverarbeitung informieren wir Sie weiter unten,
                            sofern wir weitere Informationen dazu haben.
                        </p>
                        <h2 id="rechte-dsgvo" className="adsimple-112503916 mb-4">
                            Rechte laut Datenschutz-Grundverordnung
                        </h2>
                        <p>
                            Gemäß Artikel 13, 14 DSGVO informieren wir Sie über die folgenden Rechte, die Ihnen
                            zustehen, damit es zu einer fairen und transparenten Verarbeitung von Daten kommt:
                        </p>
                        <ul className="adsimple-112503916">
                            <li className="adsimple-112503916">
                                Sie haben laut Artikel 15 DSGVO ein Auskunftsrecht darüber, ob wir Daten von Ihnen
                                verarbeiten. Sollte das zutreffen, haben Sie Recht darauf eine Kopie der Daten zu
                                erhalten und die folgenden Informationen zu erfahren:
                                <ul className="adsimple-112503916">
                                    <li className="adsimple-112503916">
                                        zu welchem Zweck wir die Verarbeitung durchführen;
                                    </li>
                                    <li className="adsimple-112503916">
                                        die Kategorien, also die Arten von Daten, die verarbeitet werden;
                                    </li>
                                    <li className="adsimple-112503916">
                                        wer diese Daten erhält und wenn die Daten an Drittländer übermittelt werden, wie
                                        die Sicherheit garantiert werden kann;
                                    </li>
                                    <li className="adsimple-112503916">wie lange die Daten gespeichert werden;</li>
                                    <li className="adsimple-112503916">
                                        das Bestehen des Rechts auf Berichtigung, Löschung oder Einschränkung der
                                        Verarbeitung und dem Widerspruchsrecht gegen die Verarbeitung;
                                    </li>
                                    <li className="adsimple-112503916">
                                        dass Sie sich bei einer Aufsichtsbehörde beschweren können (Links zu diesen
                                        Behörden finden Sie weiter unten);
                                    </li>
                                    <li className="adsimple-112503916">
                                        die Herkunft der Daten, wenn wir sie nicht bei Ihnen erhoben haben;
                                    </li>
                                    <li className="adsimple-112503916">
                                        ob Profiling durchgeführt wird, ob also Daten automatisch ausgewertet werden, um
                                        zu einem persönlichen Profil von Ihnen zu gelangen.
                                    </li>
                                </ul>
                            </li>
                            <li className="adsimple-112503916">
                                Sie haben laut Artikel 16 DSGVO ein Recht auf Berichtigung der Daten, was bedeutet, dass
                                wir Daten richtig stellen müssen, falls Sie Fehler finden.
                            </li>
                            <li className="adsimple-112503916">
                                Sie haben laut Artikel 17 DSGVO das Recht auf Löschung („Recht auf Vergessenwerden“),
                                was konkret bedeutet, dass Sie die Löschung Ihrer Daten verlangen dürfen.
                            </li>
                            <li className="adsimple-112503916">
                                Sie haben laut Artikel 18 DSGVO das Recht auf Einschränkung der Verarbeitung, was
                                bedeutet, dass wir die Daten nur mehr speichern dürfen aber nicht weiter verwenden.
                            </li>
                            <li className="adsimple-112503916">
                                Sie haben laut Artikel 20 DSGVO das Recht auf Datenübertragbarkeit, was bedeutet, dass
                                wir Ihnen auf Anfrage Ihre Daten in einem gängigen Format zur Verfügung stellen.
                            </li>
                            <li className="adsimple-112503916">
                                Sie haben laut Artikel 21 DSGVO ein Widerspruchsrecht, welches nach Durchsetzung eine
                                Änderung der Verarbeitung mit sich bringt.
                                <ul className="adsimple-112503916">
                                    <li className="adsimple-112503916">
                                        Wenn die Verarbeitung Ihrer Daten auf Artikel 6 Abs. 1 lit. e (öffentliches
                                        Interesse, Ausübung öffentlicher Gewalt) oder Artikel 6 Abs. 1 lit. f
                                        (berechtigtes Interesse) basiert, können Sie gegen die Verarbeitung Widerspruch
                                        einlegen. Wir prüfen danach so rasch wie möglich, ob wir diesem Widerspruch
                                        rechtlich nachkommen können.
                                    </li>
                                    <li className="adsimple-112503916">
                                        Werden Daten verwendet, um Direktwerbung zu betreiben, können Sie jederzeit
                                        gegen diese Art der Datenverarbeitung widersprechen. Wir dürfen Ihre Daten
                                        danach nicht mehr für Direktmarketing verwenden.
                                    </li>
                                    <li className="adsimple-112503916">
                                        Werden Daten verwendet, um Profiling zu betreiben, können Sie jederzeit gegen
                                        diese Art der Datenverarbeitung widersprechen. Wir dürfen Ihre Daten danach
                                        nicht mehr für Profiling verwenden.
                                    </li>
                                </ul>
                            </li>
                            <li className="adsimple-112503916">
                                Sie haben laut Artikel 22 DSGVO unter Umständen das Recht, nicht einer ausschließlich
                                auf einer automatisierten Verarbeitung (zum Beispiel Profiling) beruhenden Entscheidung
                                unterworfen zu werden.
                            </li>
                            <li className="adsimple-112503916">
                                Sie haben laut Artikel 77 DSGVO das Recht auf Beschwerde. Das heißt, Sie können sich
                                jederzeit bei der Datenschutzbehörde beschweren, wenn Sie der Meinung sind, dass die
                                Datenverarbeitung von personenbezogenen Daten gegen die DSGVO verstößt.
                            </li>
                        </ul>
                        <p>
                            <strong className="adsimple-112503916">Kurz gesagt:</strong> Sie haben Rechte &#8211; zögern
                            Sie nicht, die oben gelistete verantwortliche Stelle bei uns zu kontaktieren!
                        </p>
                        <p>
                            Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder
                            Ihre datenschutzrechtlichen Ansprüche in sonst einer Weise verletzt worden sind, können Sie
                            sich bei der Aufsichtsbehörde beschweren. Diese ist für Österreich die Datenschutzbehörde,
                            deren Website Sie unter{" "}
                            <a
                                className="adsimple-112503916"
                                href="https://www.dsb.gv.at/?tid=112503916"
                                target="_blank"
                                rel="noopener"
                            >
                                https://www.dsb.gv.at/
                            </a>{" "}
                            finden. In Deutschland gibt es für jedes Bundesland einen Datenschutzbeauftragten. Für
                            nähere Informationen können Sie sich an die{" "}
                            <a
                                className="adsimple-112503916"
                                href="https://www.bfdi.bund.de/DE/Home/home_node.html"
                                target="_blank"
                                rel="noopener"
                            >
                                Bundesbeauftragte für den Datenschutz und die Informationsfreiheit (BfDI)
                            </a>{" "}
                            wenden. Für unser Unternehmen ist die folgende lokale Datenschutzbehörde zuständig:
                        </p>
                        <h2 id="datenuebertragung-drittlaender" className="adsimple-112503916 mb-4">
                            Datenübertragung in Drittländer
                        </h2>
                        <p>
                            Wir übertragen oder verarbeiten Daten nur dann in Länder außerhalb der EU (Drittländer),
                            wenn Sie dieser Verarbeitung zustimmen, dies gesetzlich vorgeschrieben ist oder vertraglich
                            notwendig und in jedem Fall nur soweit dies generell erlaubt ist. Ihre Zustimmung ist in den
                            meisten Fällen der wichtigste Grund, dass wir Daten in Drittländern verarbeiten lassen. Die
                            Verarbeitung personenbezogener Daten in Drittländern wie den USA, wo viele
                            Softwarehersteller Dienstleistungen anbieten und Ihre Serverstandorte haben, kann bedeuten,
                            dass personenbezogene Daten auf unerwartete Weise verarbeitet und gespeichert werden.
                        </p>
                        <p>
                            Wir weisen ausdrücklich darauf hin, dass nach Meinung des Europäischen Gerichtshofs derzeit
                            kein angemessenes Schutzniveau für den Datentransfer in die USA besteht. Die
                            Datenverarbeitung durch US-Dienste (wie beispielsweise Google Analytics) kann dazu führen,
                            dass gegebenenfalls Daten nicht anonymisiert verarbeitet und gespeichert werden. Ferner
                            können gegebenenfalls US-amerikanische staatliche Behörden Zugriff auf einzelne Daten
                            nehmen. Zudem kann es vorkommen, dass erhobene Daten mit Daten aus anderen Diensten
                            desselben Anbieters, sofern Sie ein entsprechendes Nutzerkonto haben, verknüpft werden. Nach
                            Möglichkeit versuchen wir Serverstandorte innerhalb der EU zu nutzen, sofern das angeboten
                            wird.
                        </p>
                        <p>
                            Wir informieren Sie an den passenden Stellen dieser Datenschutzerklärung genauer über
                            Datenübertragung in Drittländer, sofern diese zutrifft.
                        </p>
                        <h2 id="sicherheit-datenverarbeitung" className="adsimple-112503916">
                            Sicherheit der Datenverarbeitung
                        </h2>
                        <p>
                            Um personenbezogene Daten zu schützen, haben wir sowohl technische als auch organisatorische
                            Maßnahmen umgesetzt. Wo es uns möglich ist, verschlüsseln oder pseudonymisieren wir
                            personenbezogene Daten. Dadurch machen wir es im Rahmen unserer Möglichkeiten so schwer wie
                            möglich, dass Dritte aus unseren Daten auf persönliche Informationen schließen können.
                        </p>
                        <p>
                            Art. 25 DSGVO spricht hier von &#8220;Datenschutz durch Technikgestaltung und durch
                            datenschutzfreundliche Voreinstellungen&#8221; und meint damit, dass man sowohl bei Software
                            (z. B. Formularen) also auch Hardware (z. B. Zugang zum Serverraum) immer an Sicherheit
                            denkt und entsprechende Maßnahmen setzt. Im Folgenden gehen wir, falls erforderlich, noch
                            auf konkrete Maßnahmen ein.
                        </p>
                        <h2 id="tls-verschluesselung-https" className="adsimple-112503916">
                            TLS-Verschlüsselung mit https
                        </h2>
                        <p>
                            TLS, Verschlüsselung und https klingen sehr technisch und sind es auch. Wir verwenden HTTPS
                            (das Hypertext Transfer Protocol Secure steht für „sicheres
                            Hypertext-Übertragungsprotokoll“), um Daten abhörsicher im Internet zu übertragen.
                            <br />
                            Das bedeutet, dass die komplette Übertragung aller Daten von Ihrem Browser zu unserem
                            Webserver abgesichert ist &#8211; niemand kann &#8220;mithören&#8221;.
                        </p>
                        <p>
                            Damit haben wir eine zusätzliche Sicherheitsschicht eingeführt und erfüllen den Datenschutz
                            durch Technikgestaltung (
                            <a
                                className="adsimple-112503916"
                                href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679&amp;from=DE&amp;tid=112503916"
                                target="_blank"
                                rel="noopener"
                            >
                                Artikel 25 Absatz 1 DSGVO
                            </a>
                            ). Durch den Einsatz von TLS (Transport Layer Security), einem Verschlüsselungsprotokoll zur
                            sicheren Datenübertragung im Internet, können wir den Schutz vertraulicher Daten
                            sicherstellen.
                            <br />
                            Sie erkennen die Benutzung dieser Absicherung der Datenübertragung am kleinen Schlosssymbol{" "}
                            <img
                                role="img"
                                src="https://www.adsimple.at/wp-content/uploads/2018/03/schlosssymbol-https.svg"
                                width="17"
                                height="18"
                            />{" "}
                            links oben im Browser, links von der Internetadresse (z. B. beispielseite.de) und der
                            Verwendung des Schemas https (anstatt http) als Teil unserer Internetadresse.
                            <br />
                            Wenn Sie mehr zum Thema Verschlüsselung wissen möchten, empfehlen wir die Google Suche nach
                            &#8220;Hypertext Transfer Protocol Secure wiki&#8221; um gute Links zu weiterführenden
                            Informationen zu erhalten.
                        </p>
                        <h2 id="kommunikation" className="adsimple-112503916 mb-4">
                            Kommunikation
                        </h2>
                        <table border="1" cellpadding="15">
                            <tbody>
                                <tr>
                                    <td>
                                        <strong className="adsimple-112503916">Kommunikation Zusammenfassung</strong>
                                        <br />
                                        &#x1f465; Betroffene: Alle, die mit uns per Telefon, E-Mail oder Online-Formular
                                        kommunizieren
                                        <br />
                                        &#x1f4d3; Verarbeitete Daten: z. B. Telefonnummer, Name, E-Mail-Adresse,
                                        eingegebene Formulardaten. Mehr Details dazu finden Sie bei der jeweils
                                        eingesetzten Kontaktart
                                        <br />
                                        &#x1f91d; Zweck: Abwicklung der Kommunikation mit Kunden, Geschäftspartnern usw.
                                        <br />
                                        &#x1f4c5; Speicherdauer: Dauer des Geschäftsfalls und der gesetzlichen
                                        Vorschriften
                                        <br />
                                        &#x2696;&#xfe0f; Rechtsgrundlagen: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung),
                                        Art. 6 Abs. 1 lit. b DSGVO (Vertrag), Art. 6 Abs. 1 lit. f DSGVO (Berechtigte
                                        Interessen)
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <p>
                            Wenn Sie mit uns Kontakt aufnehmen und per Telefon, E-Mail oder Online-Formular
                            kommunizieren, kann es zur Verarbeitung personenbezogener Daten kommen.
                        </p>
                        <p>
                            Die Daten werden für die Abwicklung und Bearbeitung Ihrer Frage und des damit
                            zusammenhängenden Geschäftsvorgangs verarbeitet. Die Daten während eben solange gespeichert
                            bzw. solange es das Gesetz vorschreibt.
                        </p>
                        <h3 className="adsimple-112503916">Betroffene Personen</h3>
                        <p>
                            Von den genannten Vorgängen sind alle betroffen, die über die von uns bereit gestellten
                            Kommunikationswege den Kontakt zu uns suchen.
                        </p>
                        <h3 className="adsimple-112503916">Telefon</h3>
                        <p>
                            Wenn Sie uns anrufen, werden die Anrufdaten auf dem jeweiligen Endgerät und beim
                            eingesetzten Telekommunikationsanbieter pseudonymisiert gespeichert. Außerdem können Daten
                            wie Name und Telefonnummer im Anschluss per E-Mail versendet und zur Anfragebeantwortung
                            gespeichert werden. Die Daten werden gelöscht, sobald der Geschäftsfall beendet wurde und es
                            gesetzliche Vorgaben erlauben.
                        </p>
                        <h3 className="adsimple-112503916">E-Mail</h3>
                        <p>
                            Wenn Sie mit uns per E-Mail kommunizieren, werden Daten gegebenenfalls auf dem jeweiligen
                            Endgerät (Computer, Laptop, Smartphone,&#8230;) gespeichert und es kommt zur Speicherung von
                            Daten auf dem E-Mail-Server. Die Daten werden gelöscht, sobald der Geschäftsfall beendet
                            wurde und es gesetzliche Vorgaben erlauben.
                        </p>
                        <h3 className="adsimple-112503916">Online Formulare</h3>
                        <p>
                            Wenn Sie mit uns mittels Online-Formular kommunizieren, werden Daten auf unserem Webserver
                            gespeichert und gegebenenfalls an eine E-Mail-Adresse von uns weitergeleitet. Die Daten
                            werden gelöscht, sobald der Geschäftsfall beendet wurde und es gesetzliche Vorgaben
                            erlauben.
                        </p>
                        <h3 className="adsimple-112503916">Rechtsgrundlagen</h3>
                        <p>Die Verarbeitung der Daten basiert auf den folgenden Rechtsgrundlagen:</p>
                        <ul className="adsimple-112503916">
                            <li className="adsimple-112503916">
                                Art. 6 Abs. 1 lit. a DSGVO (Einwilligung): Sie geben uns die Einwilligung Ihre Daten zu
                                speichern und weiter für den Geschäftsfall betreffende Zwecke zu verwenden;
                            </li>
                            <li className="adsimple-112503916">
                                Art. 6 Abs. 1 lit. b DSGVO (Vertrag): Es besteht die Notwendigkeit für die Erfüllung
                                eines Vertrags mit Ihnen oder einem Auftragsverarbeiter wie z. B. dem Telefonanbieter
                                oder wir müssen die Daten für vorvertragliche Tätigkeiten, wie z. B. die Vorbereitung
                                eines Angebots, verarbeiten;
                            </li>
                            <li className="adsimple-112503916">
                                Art. 6 Abs. 1 lit. f DSGVO (Berechtigte Interessen): Wir wollen Kundenanfragen und
                                geschäftliche Kommunikation in einem professionellen Rahmen betreiben. Dazu sind gewisse
                                technische Einrichtungen wie z. B. E-Mail-Programme, Exchange-Server und
                                Mobilfunkbetreiber notwendig, um die Kommunikation effizient betreiben zu können.
                            </li>
                        </ul>
                        <h2 id="cookies" className="adsimple-112503916 mb-4">
                            Cookies
                        </h2>
                        <table border="1" cellpadding="15">
                            <tbody>
                                <tr>
                                    <td>
                                        <strong className="adsimple-112503916">Cookies Zusammenfassung</strong>
                                        <br />
                                        &#x1f465; Betroffene: Besucher der Website
                                        <br />
                                        &#x1f91d; Zweck: abhängig vom jeweiligen Cookie. Mehr Details dazu finden Sie
                                        weiter unten bzw. beim Hersteller der Software, der das Cookie setzt.
                                        <br />
                                        &#x1f4d3; Verarbeitete Daten: Abhängig vom jeweils eingesetzten Cookie. Mehr
                                        Details dazu finden Sie weiter unten bzw. beim Hersteller der Software, der das
                                        Cookie setzt.
                                        <br />
                                        &#x1f4c5; Speicherdauer: abhängig vom jeweiligen Cookie, kann von Stunden bis
                                        hin zu Jahren variieren
                                        <br />
                                        &#x2696;&#xfe0f; Rechtsgrundlagen: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung),
                                        Art. 6 Abs. 1 lit.f DSGVO (Berechtigte Interessen)
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <h3 className="adsimple-112503916">Was sind Cookies?</h3>
                        <p>
                            Unsere Website verwendet HTTP-Cookies, um nutzerspezifische Daten zu speichern.
                            <br />
                            Im Folgenden erklären wir, was Cookies sind und warum Sie genutzt werden, damit Sie die
                            folgende Datenschutzerklärung besser verstehen.
                        </p>
                        <p>
                            Immer wenn Sie durch das Internet surfen, verwenden Sie einen Browser. Bekannte Browser sind
                            beispielsweise Chrome, Safari, Firefox, Internet Explorer und Microsoft Edge. Die meisten
                            Websites speichern kleine Text-Dateien in Ihrem Browser. Diese Dateien nennt man Cookies.
                        </p>
                        <p>
                            Eines ist nicht von der Hand zu weisen: Cookies sind echt nützliche Helferlein. Fast alle
                            Websites verwenden Cookies. Genauer gesprochen sind es HTTP-Cookies, da es auch noch andere
                            Cookies für andere Anwendungsbereiche gibt. HTTP-Cookies sind kleine Dateien, die von
                            unserer Website auf Ihrem Computer gespeichert werden. Diese Cookie-Dateien werden
                            automatisch im Cookie-Ordner, quasi dem &#8220;Hirn&#8221; Ihres Browsers, untergebracht.
                            Ein Cookie besteht aus einem Namen und einem Wert. Bei der Definition eines Cookies müssen
                            zusätzlich ein oder mehrere Attribute angegeben werden.
                        </p>
                        <p>
                            Cookies speichern gewisse Nutzerdaten von Ihnen, wie beispielsweise Sprache oder persönliche
                            Seiteneinstellungen. Wenn Sie unsere Seite wieder aufrufen, übermittelt Ihr Browser die
                            „userbezogenen“ Informationen an unsere Seite zurück. Dank der Cookies weiß unsere Website,
                            wer Sie sind und bietet Ihnen die Einstellung, die Sie gewohnt sind. In einigen Browsern hat
                            jedes Cookie eine eigene Datei, in anderen wie beispielsweise Firefox sind alle Cookies in
                            einer einzigen Datei gespeichert.
                        </p>
                        <p>
                            Die folgende Grafik zeigt eine mögliche Interaktion zwischen einem Webbrowser wie z. B.
                            Chrome und dem Webserver. Dabei fordert der Webbrowser eine Website an und erhält vom Server
                            ein Cookie zurück, welches der Browser erneut verwendet, sobald eine andere Seite
                            angefordert wird.
                        </p>
                        <p>
                            <img
                                role="img"
                                src="https://www.adsimple.at/wp-content/uploads/2018/03/http-cookie-interaction.svg"
                                alt="HTTP Cookie Interaktion zwischen Browser und Webserver"
                                width="100%"
                            />
                        </p>
                        <p>
                            Es gibt sowohl Erstanbieter Cookies als auch Drittanbieter-Cookies. Erstanbieter-Cookies
                            werden direkt von unserer Seite erstellt, Drittanbieter-Cookies werden von Partner-Websites
                            (z.B. Google Analytics) erstellt. Jedes Cookie ist individuell zu bewerten, da jedes Cookie
                            andere Daten speichert. Auch die Ablaufzeit eines Cookies variiert von ein paar Minuten bis
                            hin zu ein paar Jahren. Cookies sind keine Software-Programme und enthalten keine Viren,
                            Trojaner oder andere „Schädlinge“. Cookies können auch nicht auf Informationen Ihres PCs
                            zugreifen.
                        </p>
                        <p>So können zum Beispiel Cookie-Daten aussehen:</p>
                        <p>
                            <strong className="adsimple-112503916">Name:</strong> _ga
                            <br />
                            <strong className="adsimple-112503916">Wert:</strong> GA1.2.1326744211.152112503916-9
                            <br />
                            <strong className="adsimple-112503916">Verwendungszweck:</strong> Unterscheidung der
                            Websitebesucher
                            <br />
                            <strong className="adsimple-112503916">Ablaufdatum:</strong> nach 2 Jahren
                        </p>
                        <p>Diese Mindestgrößen sollte ein Browser unterstützen können:</p>
                        <ul className="adsimple-112503916">
                            <li className="adsimple-112503916">Mindestens 4096 Bytes pro Cookie</li>
                            <li className="adsimple-112503916">Mindestens 50 Cookies pro Domain</li>
                            <li className="adsimple-112503916">Mindestens 3000 Cookies insgesamt</li>
                        </ul>
                        <h3 className="adsimple-112503916">Welche Arten von Cookies gibt es?</h3>
                        <p>
                            Die Frage welche Cookies wir im Speziellen verwenden, hängt von den verwendeten Diensten ab
                            und wird in den folgenden Abschnitten der Datenschutzerklärung geklärt. An dieser Stelle
                            möchten wir kurz auf die verschiedenen Arten von HTTP-Cookies eingehen.
                        </p>
                        <p>Man kann 4 Arten von Cookies unterscheiden:</p>
                        <p>
                            <strong className="adsimple-112503916">
                                Unerlässliche Cookies
                                <br />
                            </strong>
                            Diese Cookies sind nötig, um grundlegende Funktionen der Website sicherzustellen. Zum
                            Beispiel braucht es diese Cookies, wenn ein User ein Produkt in den Warenkorb legt, dann auf
                            anderen Seiten weitersurft und später erst zur Kasse geht. Durch diese Cookies wird der
                            Warenkorb nicht gelöscht, selbst wenn der User sein Browserfenster schließt.
                        </p>
                        <p>
                            <strong className="adsimple-112503916">
                                Zweckmäßige Cookies
                                <br />
                            </strong>
                            Diese Cookies sammeln Infos über das Userverhalten und ob der User etwaige Fehlermeldungen
                            bekommt. Zudem werden mithilfe dieser Cookies auch die Ladezeit und das Verhalten der
                            Website bei verschiedenen Browsern gemessen.
                        </p>
                        <p>
                            <strong className="adsimple-112503916">
                                Zielorientierte Cookies
                                <br />
                            </strong>
                            Diese Cookies sorgen für eine bessere Nutzerfreundlichkeit. Beispielsweise werden
                            eingegebene Standorte, Schriftgrößen oder Formulardaten gespeichert.
                        </p>
                        <p>
                            <strong className="adsimple-112503916">
                                Werbe-Cookies
                                <br />
                            </strong>
                            Diese Cookies werden auch Targeting-Cookies genannt. Sie dienen dazu dem User individuell
                            angepasste Werbung zu liefern. Das kann sehr praktisch, aber auch sehr nervig sein.
                        </p>
                        <p>
                            Üblicherweise werden Sie beim erstmaligen Besuch einer Website gefragt, welche dieser
                            Cookiearten Sie zulassen möchten. Und natürlich wird diese Entscheidung auch in einem Cookie
                            gespeichert.
                        </p>
                        <p>
                            Wenn Sie mehr über Cookies wissen möchten und technische Dokumentationen nicht scheuen,
                            empfehlen wir{" "}
                            <a className="adsimple-112503916" href="https://datatracker.ietf.org/doc/html/rfc6265">
                                https://datatracker.ietf.org/doc/html/rfc6265
                            </a>
                            , dem Request for Comments der Internet Engineering Task Force (IETF) namens &#8220;HTTP
                            State Management Mechanism&#8221;.
                        </p>
                        <h3 className="adsimple-112503916">Zweck der Verarbeitung über Cookies</h3>
                        <p>
                            Der Zweck ist letztendlich abhängig vom jeweiligen Cookie. Mehr Details dazu finden Sie
                            weiter unten bzw. beim Hersteller der Software, die das Cookie setzt.
                        </p>
                        <h3 className="adsimple-112503916">Welche Daten werden verarbeitet?</h3>
                        <p>
                            Cookies sind kleine Gehilfen für eine viele verschiedene Aufgaben. Welche Daten in Cookies
                            gespeichert werden, kann man leider nicht verallgemeinern, aber wir werden Sie im Rahmen der
                            folgenden Datenschutzerklärung über die verarbeiteten bzw. gespeicherten Daten informieren.
                        </p>
                        <h3 className="adsimple-112503916">Speicherdauer von Cookies</h3>
                        <p>
                            Die Speicherdauer hängt vom jeweiligen Cookie ab und wird weiter unter präzisiert. Manche
                            Cookies werden nach weniger als einer Stunde gelöscht, andere können mehrere Jahre auf einem
                            Computer gespeichert bleiben.
                        </p>
                        <p>
                            Sie haben außerdem selbst Einfluss auf die Speicherdauer. Sie können über ihren Browser
                            sämtliche Cookies jederzeit manuell löschen (siehe auch unten
                            &#8220;Widerspruchsrecht&#8221;). Ferner werden Cookies, die auf einer Einwilligung beruhen,
                            spätestens nach Widerruf Ihrer Einwilligung gelöscht, wobei die Rechtmäßigkeit der
                            Speicherung bis dahin unberührt bleibt.
                        </p>
                        <h3 className="adsimple-112503916">Widerspruchsrecht &#8211; wie kann ich Cookies löschen?</h3>
                        <p>
                            Wie und ob Sie Cookies verwenden wollen, entscheiden Sie selbst. Unabhängig von welchem
                            Service oder welcher Website die Cookies stammen, haben Sie immer die Möglichkeit Cookies zu
                            löschen, zu deaktivieren oder nur teilweise zuzulassen. Zum Beispiel können Sie Cookies von
                            Drittanbietern blockieren, aber alle anderen Cookies zulassen.
                        </p>
                        <p>
                            Wenn Sie feststellen möchten, welche Cookies in Ihrem Browser gespeichert wurden, wenn Sie
                            Cookie-Einstellungen ändern oder löschen wollen, können Sie dies in Ihren
                            Browser-Einstellungen finden:
                        </p>
                        <p>
                            <a
                                className="adsimple-112503916"
                                href="https://support.google.com/chrome/answer/95647?tid=112503916"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Chrome: Cookies in Chrome löschen, aktivieren und verwalten
                            </a>
                        </p>
                        <p>
                            <a
                                className="adsimple-112503916"
                                href="https://support.apple.com/de-at/guide/safari/sfri11471/mac?tid=112503916"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Safari: Verwalten von Cookies und Websitedaten mit Safari
                            </a>
                        </p>
                        <p>
                            <a
                                className="adsimple-112503916"
                                href="https://support.mozilla.org/de/kb/cookies-und-website-daten-in-firefox-loschen?tid=112503916"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Firefox: Cookies löschen, um Daten zu entfernen, die Websites auf Ihrem Computer
                                abgelegt haben
                            </a>
                        </p>
                        <p>
                            <a
                                className="adsimple-112503916"
                                href="https://support.microsoft.com/de-de/windows/l%C3%B6schen-und-verwalten-von-cookies-168dab11-0753-043d-7c16-ede5947fc64d?tid=112503916"
                            >
                                Internet Explorer: Löschen und Verwalten von Cookies
                            </a>
                        </p>
                        <p>
                            <a
                                className="adsimple-112503916"
                                href="https://support.microsoft.com/de-de/microsoft-edge/cookies-in-microsoft-edge-l%C3%B6schen-63947406-40ac-c3b8-57b9-2a946a29ae09?tid=112503916"
                            >
                                Microsoft Edge: Löschen und Verwalten von Cookies
                            </a>
                        </p>
                        <p>
                            Falls Sie grundsätzlich keine Cookies haben wollen, können Sie Ihren Browser so einrichten,
                            dass er Sie immer informiert, wenn ein Cookie gesetzt werden soll. So können Sie bei jedem
                            einzelnen Cookie entscheiden, ob Sie das Cookie erlauben oder nicht. Die Vorgangsweise ist
                            je nach Browser verschieden. Am besten Sie suchen die Anleitung in Google mit dem
                            Suchbegriff “Cookies löschen Chrome” oder &#8220;Cookies deaktivieren Chrome&#8221; im Falle
                            eines Chrome Browsers.
                        </p>
                        <h3 className="adsimple-112503916">Rechtsgrundlage</h3>
                        <p>
                            Seit 2009 gibt es die sogenannten „Cookie-Richtlinien“. Darin ist festgehalten, dass das
                            Speichern von Cookies eine <strong className="adsimple-112503916">Einwilligung</strong>{" "}
                            (Artikel 6 Abs. 1 lit. a DSGVO) von Ihnen verlangt. Innerhalb der EU-Länder gibt es
                            allerdings noch sehr unterschiedliche Reaktionen auf diese Richtlinien. In Österreich
                            erfolgte aber die Umsetzung dieser Richtlinie in § 96 Abs. 3 des Telekommunikationsgesetzes
                            (TKG). In Deutschland wurden die Cookie-Richtlinien nicht als nationales Recht umgesetzt.
                            Stattdessen erfolgte die Umsetzung dieser Richtlinie weitgehend in § 15 Abs.3 des
                            Telemediengesetzes (TMG).
                        </p>
                        <p>
                            Für unbedingt notwendige Cookies, auch soweit keine Einwilligung vorliegt, bestehen{" "}
                            <strong className="adsimple-112503916">berechtigte Interessen</strong> (Artikel 6 Abs. 1
                            lit. f DSGVO), die in den meisten Fällen wirtschaftlicher Natur sind. Wir möchten den
                            Besuchern der Website eine angenehme Benutzererfahrung bescheren und dafür sind bestimmte
                            Cookies oft unbedingt notwendig.
                        </p>
                        <p>
                            Soweit nicht unbedingt erforderliche Cookies zum Einsatz kommen, geschieht dies nur im Falle
                            Ihrer Einwilligung. Rechtsgrundlage ist insoweit Art. 6 Abs. 1 lit. a DSGVO.
                        </p>
                        <p>
                            In den folgenden Abschnitten werden Sie genauer über den Einsatz von Cookies informiert,
                            sofern eingesetzte Software Cookies verwendet.
                        </p>
                        <h2 id="web-analytics-einleitung" className="adsimple-112503916 mb-4">
                            Web Analytics Einleitung
                        </h2>
                        <table border="1" cellpadding="15">
                            <tbody>
                                <tr>
                                    <td>
                                        <strong className="adsimple-112503916">
                                            Web Analytics Datenschutzerklärung Zusammenfassung
                                        </strong>
                                        <br />
                                        &#x1f465; Betroffene: Besucher der Website
                                        <br />
                                        &#x1f91d; Zweck: Auswertung der Besucherinformationen zur Optimierung des
                                        Webangebots.
                                        <br />
                                        &#x1f4d3; Verarbeitete Daten: Zugriffsstatistiken, die Daten wie Standorte der
                                        Zugriffe, Gerätedaten, Zugriffsdauer und Zeitpunkt, Navigationsverhalten,
                                        Klickverhalten und IP-Adressen enthalten. Mehr Details dazu finden Sie beim
                                        jeweils eingesetzten Web Analytics Tool.
                                        <br />
                                        &#x1f4c5; Speicherdauer: abhängig vom eingesetzten Web-Analytics-Tool
                                        <br />
                                        &#x2696;&#xfe0f; Rechtsgrundlagen: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung),
                                        Art. 6 Abs. 1 lit. f DSGVO (Berechtigte Interessen)
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <h3 className="adsimple-112503916">Was ist Web Analytics?</h3>
                        <p>
                            Wir verwenden auf unserer Website Software zur Auswertung des Verhaltens der
                            Website-Besucher, kurz Web Analytics oder Web-Analyse genannt. Dabei werden Daten gesammelt,
                            die der jeweilige Analytic-Tool-Anbieter (auch Trackingtool genannt) speichert, verwaltet
                            und verarbeitet. Mit Hilfe der Daten werden Analysen über das Nutzerverhalten auf unserer
                            Website erstellt und uns als Websitebetreiber zur Verfügung gestellt. Zusätzlich bieten die
                            meisten Tools verschiedene Testmöglichkeiten an. So können wir etwa testen, welche Angebote
                            oder Inhalte bei unseren Besuchern am besten ankommen. Dafür zeigen wir Ihnen für einen
                            begrenzten Zeitabschnitt zwei verschiedene Angebote. Nach dem Test (sogenannter A/B-Test)
                            wissen wir, welches Produkt bzw. welcher Inhalt unsere Websitebesucher interessanter finden.
                            Für solche Testverfahren, wie auch für andere Analytics-Verfahren, können auch Userprofile
                            erstellt werden und die Daten in Cookies gespeichert werden.
                        </p>
                        <h3 className="adsimple-112503916">Warum betreiben wir Web Analytics?</h3>
                        <p>
                            Mit unserer Website haben wir ein klares Ziel vor Augen: wir wollen für unsere Branche das
                            beste Webangebot auf dem Markt liefern. Um dieses Ziel zu erreichen, wollen wir einerseits
                            das beste und interessanteste Angebot bieten und andererseits darauf achten, dass Sie sich
                            auf unserer Website rundum wohlfühlen. Mit Hilfe von Webanalyse-Tools können wir das
                            Verhalten unserer Websitebesucher genauer unter die Lupe nehmen und dann entsprechend unser
                            Webangebot für Sie und uns verbessern. So können wir beispielsweise erkennen wie alt unsere
                            Besucher durchschnittlich sind, woher sie kommen, wann unsere Website am meisten besucht
                            wird oder welche Inhalte oder Produkte besonders beliebt sind. All diese Informationen
                            helfen uns die Website zu optimieren und somit bestens an Ihre Bedürfnisse, Interessen und
                            Wünsche anzupassen.
                        </p>
                        <h3 className="adsimple-112503916">Welche Daten werden verarbeitet?</h3>
                        <p>
                            Welche Daten genau gespeichert werden, hängt natürlich von den verwendeten Analyse-Tools ab.
                            Doch in der Regel wird zum Beispiel gespeichert, welche Inhalte Sie auf unserer Website
                            ansehen, auf welche Buttons oder Links Sie klicken, wann Sie eine Seite aufrufen, welchen
                            Browser sie verwenden, mit welchem Gerät (PC, Tablet, Smartphone usw.) Sie die Website
                            besuchen oder welches Computersystem Sie verwenden. Wenn Sie damit einverstanden waren, dass
                            auch Standortdaten erhoben werden dürfen, können auch diese durch den
                            Webanalyse-Tool-Anbieter verarbeitet werden.
                        </p>
                        <p>
                            Zudem wird auch Ihre IP-Adresse gespeichert. Gemäß der Datenschutz-Grundverordnung (DSGVO)
                            sind IP-Adressen personenbezogene Daten. Ihre IP-Adresse wird allerdings in der Regel
                            pseudonymisiert (also in unkenntlicher und gekürzter Form) gespeichert. Für den Zweck der
                            Tests, der Webanalyse und der Weboptimierung werden grundsätzlich keine direkten Daten, wie
                            etwa Ihr Name, Ihr Alter, Ihre Adresse oder Ihre E-Mail-Adresse gespeichert. All diese Daten
                            werden, sofern sie erhoben werden, pseudonymisiert gespeichert. So können Sie als Person
                            nicht identifiziert werden.
                        </p>
                        <p>
                            Das folgende Beispiel zeigt schematisch die Funktionsweise von Google Analytics als Beispiel
                            für client-basiertes Webtracking mit Java-Script-Code.
                        </p>
                        <p>
                            <img
                                role="img"
                                src="https://www.adsimple.at/wp-content/uploads/2021/04/google-analytics-dataflow.svg"
                                alt="Schematischer Datenfluss bei Google Analytics"
                                width="100%"
                            />
                        </p>
                        <p>
                            Wie lange die jeweiligen Daten gespeichert werden, hängt immer vom Anbieter ab. Manche
                            Cookies speichern Daten nur für ein paar Minuten bzw. bis Sie die Website wieder verlassen,
                            andere Cookies können Daten über mehrere Jahre speichern.
                        </p>
                        <h3 className="adsimple-112503916">
                            <span
                                className="adsimple-112503916"
                                data-sheets-value='{"1":2,"2":"Wo und wie lange werden Daten gespeichert?"}'
                                data-sheets-userformat='{"2":769,"3":{"1":0},"11":4,"12":0}'
                            >
                                Dauer der Datenverarbeitung
                            </span>
                        </h3>
                        <p>
                            Über die Dauer der Datenverarbeitung informieren wir Sie weiter unten, sofern wir weitere
                            Informationen dazu haben. Generell verarbeiten wir personenbezogene Daten nur so lange wie
                            es für die Bereitstellung unserer Dienstleistungen und Produkte unbedingt notwendig ist.
                            Wenn es, wie zum Beispiel im Fall von Buchhaltung, gesetzlich vorgeschrieben ist, kann diese
                            Speicherdauer auch überschritten werden.
                        </p>
                        <h3 className="adsimple-112503916">Widerspruchsrecht</h3>
                        <p>
                            Sie haben auch jederzeit das Recht und die Möglichkeit Ihre Einwilligung zur Verwendung von
                            Cookies bzw. Drittanbietern zu widerrufen. Das funktioniert entweder über unser
                            Cookie-Management-Tool oder über andere Opt-Out-Funktionen. Zum Beispiel können Sie auch die
                            Datenerfassung durch Cookies verhindern, indem Sie in Ihrem Browser die Cookies verwalten,
                            deaktivieren oder löschen.
                        </p>
                        <h3 className="adsimple-112503916">Rechtsgrundlage</h3>
                        <p>
                            Der Einsatz von Web-Analytics setzt Ihre Einwilligung voraus, welche wir mit unserem Cookie
                            Popup eingeholt haben. Diese Einwilligung stellt laut
                            <strong className="adsimple-112503916">
                                {" "}
                                Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)
                            </strong>{" "}
                            die Rechtsgrundlage für die Verarbeitung personenbezogener Daten, wie sie bei der Erfassung
                            durch Web-Analytics Tools vorkommen kann, dar.
                        </p>
                        <p>
                            Zusätzlich zur Einwilligung besteht von unserer Seite ein berechtigtes Interesse daran, das
                            Verhalten der Websitebesucher zu analysieren und so unser Angebot technisch und
                            wirtschaftlich zu verbessern. Mit Hilfe von Web-Analytics erkennen wir Fehler der Website,
                            können Attacken identifizieren und die Wirtschaftlichkeit verbessern. Die Rechtsgrundlage
                            dafür ist{" "}
                            <strong className="adsimple-112503916">
                                Art. 6 Abs. 1 lit. f DSGVO (Berechtigte Interessen)
                            </strong>
                            . Wir setzen die Tools gleichwohl nur ein, soweit sie eine Einwilligung erteilt haben.
                        </p>
                        <p>
                            Da bei Web-Analytics-Tools Cookies zum Einsatz kommen, empfehlen wir Ihnen auch das Lesen
                            unserer allgemeinen Datenschutzerklärung zu Cookies. Um zu erfahren, welche Daten von Ihnen
                            genau gespeichert und verarbeitet werden, sollten Sie die Datenschutzerklärungen der
                            jeweiligen Tools durchlesen.
                        </p>
                        <p>
                            Informationen zu speziellen Web-Analytics-Tools, erhalten Sie &#8211; sofern vorhanden
                            &#8211; in den folgenden Abschnitten.
                        </p>
                        <h2 id="e-mail-marketing-einleitung" className="adsimple-112503916 mb-4">
                            E-Mail-Marketing Einleitung
                        </h2>
                        <table border="1" cellpadding="15">
                            <tbody>
                                <tr>
                                    <td>
                                        <strong className="adsimple-112503916">E-Mail-Marketing Zusammenfassung</strong>
                                        <br />
                                        &#x1f465; Betroffene: Newsletter-Abonnenten
                                        <br />
                                        &#x1f91d; Zweck: Direktwerbung per E-Mail, Benachrichtigung über systemrelevante
                                        Ereignisse
                                        <br />
                                        &#x1f4d3; Verarbeitete Daten: Eingegebene Daten bei der Registrierung jedoch
                                        mindestens die E-Mail-Adresse. Mehr Details dazu finden Sie beim jeweils
                                        eingesetzten E-Mail-Marketing-Tool.
                                        <br />
                                        &#x1f4c5; Speicherdauer: Dauer des Bestehens des Abonnements
                                        <br />
                                        &#x2696;&#xfe0f; Rechtsgrundlagen: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung),
                                        Art. 6 Abs. 1 lit. f DSGVO (berechtigte Interessen)
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <h3 className="adsimple-112503916">Was ist E-Mail-Marketing?</h3>
                        <p>
                            Um Sie stets auf dem Laufenden zu halten, nutzen wir auch die Möglichkeit des
                            E-Mail-Marketings. Dabei werden, sofern Sie dem Empfang unserer E-Mails bzw. Newsletter
                            zugestimmt haben, auch Daten von Ihnen verarbeitet und gespeichert. E-Mail-Marketing ist ein
                            Teilbereich des Online-Marketings. Dabei werden Neuigkeiten oder allgemeine Informationen
                            über ein Unternehmen, Produkte oder Dienstleistungen per E-Mail an eine bestimmte Gruppe an
                            Menschen, die sich dafür interessieren, gesendet.
                        </p>
                        <p>
                            Wenn Sie an unserem E-Mail-Marketing (meist per Newsletter) teilnehmen wollen, müssen Sie
                            sich im Normalfall einfach nur mit Ihrer E-Mail-Adresse anmelden. Dafür füllen Sie ein
                            Online-Formular aus und senden es ab. Es kann aber auch vorkommen, dass wir Sie etwa um Ihre
                            Anrede und Ihren Namen bitten, damit wir Sie auch persönlich anschreiben können.
                        </p>
                        <p>
                            Grundsätzlich funktioniert das Anmelden zu Newslettern mit Hilfe des sogenannten
                            „Double-Opt-In-Verfahrens“. Nachdem Sie sich für unseren Newsletter auf unserer Website
                            angemeldet haben, bekommen Sie eine E-Mail, über die Sie die Newsletter-Anmeldung
                            bestätigen. So wird sichergestellt, dass Ihnen die E-Mail-Adresse gehört und sich niemand
                            mit einer fremden E-Mail-Adresse angemeldet hat. Wir oder ein von uns verwendetes
                            Benachrichtigungs-Tool protokolliert jede einzelne Anmeldung. Dies ist nötig, damit wir den
                            rechtlich korrekten Anmeldevorgang auch nachweisen können. Dabei wird in der Regel der
                            Zeitpunkt der Anmeldung, der Zeitpunkt der Anmeldebestätigung und Ihre IP-Adresse
                            gespeichert. Zusätzlich wird auch protokolliert, wenn Sie Änderungen Ihrer gespeicherten
                            Daten vornehmen.
                        </p>
                        <h3 className="adsimple-112503916">Warum nutzen wir E-Mail-Marketing?</h3>
                        <p>
                            Wir wollen natürlich mit Ihnen in Kontakt bleiben und Ihnen stets die wichtigsten
                            Neuigkeiten über unser Unternehmen präsentieren. Dafür nutzen wir unter anderem
                            E-Mail-Marketing &#8211; oft auch nur &#8220;Newsletter&#8221; bezeichnet &#8211; als
                            wesentlichen Bestandteil unseres Online-Marketings. Sofern Sie sich damit einverstanden
                            erklären oder es gesetzlich erlaubt ist, schicken wir Ihnen Newsletter, System-E-Mails oder
                            andere Benachrichtigungen per E-Mail. Wenn wir im folgenden Text den Begriff „Newsletter“
                            verwenden, meinen wir damit hauptsächlich regelmäßig versandte E-Mails. Natürlich wollen wir
                            Sie mit unseren Newsletter in keiner Weise belästigen. Darum sind wir wirklich stets bemüht,
                            nur relevante und interessante Inhalte zu bieten. So erfahren Sie etwa mehr über unser
                            Unternehmen, unsere Leistungen oder Produkte. Da wir unsere Angebote auch immer verbessern,
                            erfahren Sie über unseren Newsletter auch immer, wenn es Neuigkeiten gibt oder wir gerade
                            spezielle, lukrative Aktionen anbieten. Sofern wir einen Dienstleister, der ein
                            professionelles Versand-Tool anbietet, für unser E-Mail-Marketing beauftragen, machen wir
                            das, um Ihnen schnelle und sichere Newsletter bieten zu können. Zweck unseres
                            E-Mail-Marketings ist grundsätzlich, Sie über neue Angebote zu informieren und auch unseren
                            unternehmerischen Zielen näher zu kommen.
                        </p>
                        <h3 className="adsimple-112503916">Welche Daten werden verarbeitet?</h3>
                        <p>
                            Wenn Sie über unsere Website Abonnent unseres Newsletters werden, bestätigen Sie per E-Mail
                            die Mitgliedschaft in einer E-Mail-Liste. Neben IP-Adresse und E-Mail-Adresse können auch
                            Ihre Anrede, Ihr Name, Ihre Adresse und Ihre Telefonnummer gespeichert werden. Allerdings
                            nur, wenn Sie dieser Datenspeicherungen zustimmen. Die als solche markierten Daten sind
                            notwendig, damit Sie an dem angebotenen Dienst teilnehmen können. Die Angabe ist freiwillig,
                            die Nichtangabe führt jedoch dazu, dass Sie den Dienst nicht nutzen können. Zusätzlich
                            können etwa auch Informationen zu Ihrem Gerät oder zu Ihren bevorzugten Inhalten auf unserer
                            Website gespeichert werden. Mehr zur Speicherung von Daten, wenn Sie eine Website besuchen,
                            finden Sie im Abschnitt &#8220;Automatische Datenspeicherung&#8221;. Ihre
                            Einwilligungserklärung zeichnen wir auf, damit wir stets nachweisen können, dass dieser
                            unseren Gesetzen entspricht.
                        </p>
                        <h3 className="adsimple-112503916">Dauer der Datenverarbeitung</h3>
                        <p>
                            Wenn Sie Ihre E-Mail-Adresse aus unserem E-Mail/Newsletter-Verteiler austragen, dürfen wir
                            Ihre Adresse bis zu drei Jahren auf Grundlage unserer berechtigten Interessen speichern,
                            damit wir Ihre damalige Einwilligung noch nachweisen können. Verarbeiten dürfen wir diese
                            Daten nur, wenn wir uns gegen etwaige Ansprüche wehren müssen.
                        </p>
                        <p>
                            Wenn Sie allerdings bestätigen, dass Sie uns die Einwilligung zur Newsletter-Anmeldung
                            gegeben haben, können Sie jederzeit einen individuellen Löschantrag stellen. Widersprechen
                            Sie der Einwilligung dauerhaft, behalten wir uns das Recht vor, Ihre E-Mail-Adresse in einer
                            Sperrliste zu speichern. Solange Sie freiwillig unseren Newsletter abonniert haben, solange
                            behalten wir selbstverständlich auch Ihre E-Mail-Adresse.
                        </p>
                        <h3 className="adsimple-112503916">Widerspruchsrecht</h3>
                        <p>
                            Sie haben jederzeit die Möglichkeit Ihre Newsletter-Anmeldung zu kündigen. Dafür müssen Sie
                            lediglich Ihre Einwilligung zur Newsletter-Anmeldung widerrufen. Das dauert im Normalfall
                            nur wenige Sekunden bzw. einen oder zwei Klicks. Meistens finden Sie direkt am Ende jeder
                            E-Mail einen Link, um das Newsletter-Abonnement zu kündigen. Wenn der Link im Newsletter
                            wirklich nicht zu finden ist, kontaktieren Sie uns bitte per Mail und wir werden Ihr
                            Newsletter-Abo unverzüglich kündigen.
                        </p>
                        <h3 className="adsimple-112503916">Rechtsgrundlage</h3>
                        <p>
                            Das Versenden unseres Newsletters erfolgt auf Grundlage Ihrer Einwilligung (Artikel 6 Abs. 1
                            lit. a DSGVO). Das heißt, wir dürfen Ihnen nur dann einen Newsletter schicken, wenn Sie sich
                            zuvor aktiv dafür angemeldet haben. Gegebenenfalls können wir Ihnen auch Werbenachrichten
                            senden, sofern Sie unser Kunde geworden sind und der Verwendung Ihrer E-Mailadresse für
                            Direktwerbung nicht widersprochen haben.
                        </p>
                        <p>
                            Informationen zu speziellen E-Mail-Marketing Diensten und wie diese personenbezogene Daten
                            verarbeiten, erfahren Sie &#8211; sofern vorhanden &#8211; in den folgenden Abschnitten.
                        </p>
                        <h2 id="social-media-einleitung" className="adsimple-112503916 mb-4">
                            Social Media Einleitung
                        </h2>
                        <table border="1" cellpadding="15">
                            <tbody>
                                <tr>
                                    <td>
                                        <strong className="adsimple-112503916">
                                            Social Media Datenschutzerklärung Zusammenfassung
                                        </strong>
                                        <br />
                                        &#x1f465; Betroffene: Besucher der Website
                                        <br />
                                        &#x1f91d; Zweck: Darstellung und Optimierung unserer Serviceleistung, Kontakt zu
                                        Besuchern, Interessenten u.a., Werbung
                                        <br />
                                        &#x1f4d3; Verarbeitete Daten: Daten wie etwa Telefonnummern, E-Mail-Adressen,
                                        Kontaktdaten, Daten zum Nutzerverhalten, Informationen zu Ihrem Gerät und Ihre
                                        IP-Adresse.
                                        <br />
                                        Mehr Details dazu finden Sie beim jeweils eingesetzten Social-Media-Tool.
                                        <br />
                                        &#x1f4c5; Speicherdauer: abhängig von den verwendeten Social-Media-Plattformen
                                        <br />
                                        &#x2696;&#xfe0f; Rechtsgrundlagen: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung),
                                        Art. 6 Abs. 1 lit. f DSGVO (Berechtigte Interessen)
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <h3 className="adsimple-112503916">Was ist Social Media?</h3>
                        <p>
                            Zusätzlich zu unserer Website sind wir auch in diversen Social-Media-Plattformen aktiv.
                            Dabei können Daten von Usern verarbeitet werden, damit wir gezielt User, die sich für uns
                            interessieren, über die sozialen Netzwerke ansprechen können. Darüber hinaus können auch
                            Elemente einer Social-Media-Plattform direkt in unsere Website eingebettet sein. Das ist
                            etwa der Fall, wenn Sie einen sogenannten Social-Button auf unserer Website anklicken und
                            direkt zu unserem Social-Media-Auftritt weitergeleitet werden. Als sogenannte Sozialen
                            Medien oder Social Media werden Websites und Apps bezeichnet, über die angemeldete
                            Mitglieder Inhalte produzieren, Inhalte offen oder in bestimmten Gruppen austauschen und
                            sich mit anderen Mitgliedern vernetzen können.
                        </p>
                        <h3 className="adsimple-112503916">Warum nutzen wir Social Media?</h3>
                        <p>
                            Seit Jahren sind Social-Media-Plattformen der Ort, wo Menschen online kommunizieren und in
                            Kontakt treten. Mit unseren Social-Media-Auftritten können wir unsere Produkte und
                            Dienstleistungen Interessenten näherbringen. Die auf unserer Website eingebundenen
                            Social-Media-Elemente helfen Ihnen, schnell und ohne Komplikationen zu unseren
                            Social-Media-Inhalten wechseln können.
                        </p>
                        <p>
                            Die Daten, die durch Ihre Nutzung eines Social-Media-Kanals gespeichert und verarbeitet
                            werden, haben in erster Linie den Zweck, Webanalysen durchführen zu können. Ziel dieser
                            Analysen ist es, genauere und personenbezogene Marketing- und Werbestrategien entwickeln zu
                            können. Abhängig von Ihrem Verhalten auf einer Social-Media-Plattform, können mit Hilfe der
                            ausgewerteten Daten, passende Rückschlüsse auf Ihre Interessen getroffen werden und
                            sogenannte Userprofile erstellt werden. So ist es den Plattformen auch möglich, Ihnen
                            maßgeschneiderte Werbeanzeigen zu präsentieren. Meistens werden für diesen Zweck Cookies in
                            Ihrem Browser gesetzt, die Daten zu Ihrem Nutzungsverhalten speichern.
                        </p>
                        <p>
                            Wir gehen in der Regel davon aus, dass wir datenschutzrechtlich verantwortlich bleiben, auch
                            wenn wir Dienste einer Social-Media-Plattform nutzen. Der Europäische Gerichtshof hat jedoch
                            entschieden, dass in bestimmten Fällen der Betreiber der Social-Media-Plattform zusammen mit
                            uns gemeinsam verantwortlich im Sinne des Art. 26 DSGVO sein kann. Soweit dies der Fall ist,
                            weisen wir gesondert darauf hin und arbeiten auf Grundlage einer diesbezüglichen
                            Vereinbarung. Das Wesentliche der Vereinbarung ist dann weiter unten bei der betroffenen
                            Plattform wiedergegeben.
                        </p>
                        <p>
                            Bitte beachten Sie, dass bei der Nutzung der Social-Media-Plattformen oder unserer
                            eingebauten Elemente auch Daten von Ihnen außerhalb der Europäischen Union verarbeitet
                            werden können, da viele Social-Media-Kanäle, beispielsweise Facebook oder Twitter,
                            amerikanische Unternehmen sind. Dadurch können Sie möglicherweise Ihre Rechte in Bezug auf
                            Ihre personenbezogenen Daten nicht mehr so leicht einfordern bzw. durchsetzen.
                        </p>
                        <h3 className="adsimple-112503916">Welche Daten werden verarbeitet?</h3>
                        <p>
                            Welche Daten genau gespeichert und verarbeitet werden, hängt vom jeweiligen Anbieter der
                            Social-Media-Plattform ab. Aber für gewöhnlich handelt es sich um Daten wie etwa
                            Telefonnummern, E-Mailadressen, Daten, die Sie in ein Kontaktformular eingeben, Nutzerdaten
                            wie zum Beispiel welche Buttons Sie klicken, wen Sie liken oder wem folgen, wann Sie welche
                            Seiten besucht haben, Informationen zu Ihrem Gerät und Ihre IP-Adresse. Die meisten dieser
                            Daten werden in Cookies gespeichert. Speziell wenn Sie selbst ein Profil bei dem besuchten
                            Social-Media-Kanal haben und angemeldet sind, können Daten mit Ihrem Profil verknüpft
                            werden.
                        </p>
                        <p>
                            Alle Daten, die über eine Social-Media-Plattform erhoben werden, werden auch auf den Servern
                            der Anbieter gespeichert. Somit haben auch nur die Anbieter Zugang zu den Daten und können
                            Ihnen die passenden Auskünfte geben bzw. Änderungen vornehmen.
                        </p>
                        <p>
                            Wenn Sie genau wissen wollen, welche Daten bei den Social-Media-Anbietern gespeichert und
                            verarbeitet werden und wie sie der Datenverarbeitung widersprechen können, sollten Sie die
                            jeweilige Datenschutzerklärung des Unternehmens sorgfältig durchlesen. Auch wenn Sie zur
                            Datenspeicherung und Datenverarbeitung Fragen haben oder entsprechende Rechte geltend machen
                            wollen, empfehlen wir Ihnen, sich direkt an den Anbieter wenden.
                        </p>
                        <h3 className="adsimple-112503916">
                            <span
                                className="adsimple-112503916"
                                data-sheets-value='{"1":2,"2":"Wo und wie lange werden Daten gespeichert?"}'
                                data-sheets-userformat='{"2":769,"3":{"1":0},"11":4,"12":0}'
                            >
                                Dauer der Datenverarbeitung
                            </span>
                        </h3>
                        <p>
                            Über die Dauer der Datenverarbeitung informieren wir Sie weiter unten, sofern wir weitere
                            Informationen dazu haben. Beispielsweise speichert die Social-Media-Plattform Facebook
                            Daten, bis sie für den eigenen Zweck nicht mehr benötigt werden. Kundendaten, die mit den
                            eigenen Userdaten abgeglichen werden, werden aber schon innerhalb von zwei Tagen gelöscht.
                            Generell verarbeiten wir personenbezogene Daten nur so lange wie es für die Bereitstellung
                            unserer Dienstleistungen und Produkte unbedingt notwendig ist. Wenn es, wie zum Beispiel im
                            Fall von Buchhaltung, gesetzlich vorgeschrieben ist, kann diese Speicherdauer auch
                            überschritten werden.
                        </p>
                        <h3 className="adsimple-112503916">Widerspruchsrecht</h3>
                        <p>
                            Sie haben auch jederzeit das Recht und die Möglichkeit Ihre Einwilligung zur Verwendung von
                            Cookies bzw. Drittanbietern wie eingebettete Social-Media-Elemente zu widerrufen. Das
                            funktioniert entweder über unser Cookie-Management-Tool oder über andere Opt-Out-Funktionen.
                            Zum Bespiel können Sie auch die Datenerfassung durch Cookies verhindern, indem Sie in Ihrem
                            Browser die Cookies verwalten, deaktivieren oder löschen.
                        </p>
                        <p>
                            Da bei Social-Media-Tools Cookies zum Einsatz kommen können, empfehlen wir Ihnen auch unsere
                            allgemeine Datenschutzerklärung über Cookies. Um zu erfahren, welche Daten von Ihnen genau
                            gespeichert und verarbeitet werden, sollten Sie die Datenschutzerklärungen der jeweiligen
                            Tools durchlesen.
                        </p>
                        <h3 className="adsimple-112503916">Rechtsgrundlage</h3>
                        <p>
                            Wenn Sie eingewilligt haben, dass Daten von Ihnen durch eingebundene Social-Media-Elemente
                            verarbeitet und gespeichert werden können, gilt diese Einwilligung als Rechtsgrundlage der
                            Datenverarbeitung{" "}
                            <strong className="adsimple-112503916">(Art. 6 Abs. 1 lit. a DSGVO)</strong>. Grundsätzlich
                            werden Ihre Daten bei Vorliegen einer Einwilligung auch auf Grundlage unseres berechtigten
                            Interesses <strong className="adsimple-112503916">(Art. 6 Abs. 1 lit. f DSGVO)</strong> an
                            einer schnellen und guten Kommunikation mit Ihnen oder anderen Kunden und Geschäftspartnern
                            gespeichert und verarbeitet. Wir setzen die Tools gleichwohl nur ein, soweit Sie eine
                            Einwilligung erteilt haben. Die meisten Social-Media-Plattformen setzen auch Cookies in
                            Ihrem Browser, um Daten zu speichern. Darum empfehlen wir Ihnen, unseren Datenschutztext
                            über Cookies genau durchzulesen und die Datenschutzerklärung oder die Cookie-Richtlinien des
                            jeweiligen Dienstanbieters anzusehen.
                        </p>
                        <p>
                            Informationen zu speziellen Social-Media-Plattformen erfahren Sie &#8211; sofern vorhanden
                            &#8211; in den folgenden Abschnitten.
                        </p>
                        <h2 id="facebook-datenschutzerklaerung" className="adsimple-112503916 mb-4">
                            Facebook Datenschutzerklärung
                        </h2>
                        <table border="1" cellpadding="15">
                            <tbody>
                                <tr>
                                    <td>
                                        <strong className="adsimple-112503916">
                                            Facebook Datenschutzerklärung Zusammenfassung
                                        </strong>
                                        <br />
                                        &#x1f465; Betroffene: Besucher der Website
                                        <br />
                                        &#x1f91d; Zweck: Optimierung unserer Serviceleistung
                                        <br />
                                        &#x1f4d3; Verarbeitete Daten: Daten wie etwa Kundendaten, Daten zum
                                        Nutzerverhalten, Informationen zu Ihrem Gerät und Ihre IP-Adresse.
                                        <br />
                                        Mehr Details dazu finden Sie weiter unten in der Datenschutzerklärung.
                                        <br />
                                        &#x1f4c5; Speicherdauer: bis die Daten für Facebooks Zwecke nicht mehr nützlich
                                        sind
                                        <br />
                                        &#x2696;&#xfe0f; Rechtsgrundlagen: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung),
                                        Art. 6 Abs. 1 lit. f DSGVO (Berechtigte Interessen)
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <h3 className="adsimple-112503916">Was sind Facebook-Tools?</h3>
                        <p>
                            Wir verwenden auf unserer Website ausgewählte Tools von Facebook. Facebook ist ein Social
                            Media Network des Unternehmens Meta Platforms Inc. bzw. für den europäischen Raum des
                            Unternehmens Meta Platforms Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour,
                            Dublin 2, Irland. Mithilfe dieser Tools können wir Ihnen und Menschen, die sich für unsere
                            Produkte und Dienstleistungen interessieren, das bestmögliche Angebot bieten.
                        </p>
                        <p>
                            Wenn über unsere eingebetteten Facebook-Elemente oder über unsere Facebook-Seite (Fanpage)
                            Daten von Ihnen erhoben und weitergeleitet werden, sind sowohl wir als auch Facebook Irland
                            Ltd. dafür verantwortlich. Für die weitere Verarbeitung dieser Daten trägt Facebook allein
                            die Verantwortung. Unsere gemeinsamen Verpflichtungen wurden auch in einer öffentlich
                            zugänglichen Vereinbarung unter{" "}
                            <a className="adsimple-112503916" href="https://www.facebook.com/legal/controller_addendum">
                                https://www.facebook.com/legal/controller_addendum
                            </a>{" "}
                            verankert. Darin ist etwa festgehalten, dass wir Sie klar über den Einsatz der
                            Facebook-Tools auf unserer Seite informieren müssen. Weiters sind wir auch dafür
                            verantwortlich, dass die Tools datenschutzrechtlich sicher in unsere Website eingebunden
                            sind. Facebook ist hingegen beispielsweise für die Datensicherheit der Facebook-Produkte
                            verantwortlich. Bei etwaigen Fragen zur Datenerhebung und Datenverarbeitung durch Facebook
                            können Sie sich direkt an das Unternehmen wenden. Wenn Sie die Frage an uns richten, sind
                            wir dazu verpflichtet diese an Facebook weiterleiten.
                        </p>
                        <p>
                            Im Folgenden geben wir einen Überblick über die verschiedenen Facebook Tools, welche Daten
                            an Facebook gesendet werden und wie Sie diese Daten löschen können.
                        </p>
                        <p>
                            Neben vielen anderen Produkten bietet Facebook auch die sogenannten &#8220;Facebook Business
                            Tools&#8221; an. Das ist die offizielle Bezeichnung von Facebook. Da der Begriff aber kaum
                            bekannt ist, haben wir uns dafür entschieden, sie lediglich Facebook-Tools zu nennen.
                            Darunter finden sich unter anderem:
                        </p>
                        <ul className="adsimple-112503916">
                            <li className="adsimple-112503916">Facebook-Pixel</li>
                            <li className="adsimple-112503916">
                                soziale Plug-ins (wie z.B der „Gefällt mir“- oder „Teilen“-Button)
                            </li>
                            <li className="adsimple-112503916">Facebook Login</li>
                            <li className="adsimple-112503916">Account Kit</li>
                            <li className="adsimple-112503916">APIs (Programmierschnittstelle)</li>
                            <li className="adsimple-112503916">SDKs (Sammlung von Programmierwerkzeugen)</li>
                            <li className="adsimple-112503916">Plattform-Integrationen</li>
                            <li className="adsimple-112503916">Plugins</li>
                            <li className="adsimple-112503916">Codes</li>
                            <li className="adsimple-112503916">Spezifikationen</li>
                            <li className="adsimple-112503916">Dokumentationen</li>
                            <li className="adsimple-112503916">Technologien und Dienstleistungen</li>
                        </ul>
                        <p>
                            Durch diese Tools erweitert Facebook Dienstleistungen und hat die Möglichkeit, Informationen
                            über User-Aktivitäten außerhalb von Facebook zu erhalten.
                        </p>
                        <h3 className="adsimple-112503916">Warum verwenden wir Facebook-Tools auf unserer Website?</h3>
                        <p>
                            Wir wollen unsere Dienstleistungen und Produkte nur Menschen zeigen, die sich auch wirklich
                            dafür interessieren. Mithilfe von Werbeanzeigen (Facebook-Ads) können wir genau diese
                            Menschen erreichen. Damit den Usern passende Werbung gezeigt werden kann, benötigt Facebook
                            allerdings Informationen über die Wünsche und Bedürfnisse der Menschen. So werden dem
                            Unternehmen Informationen über das Userverhalten (und Kontaktdaten) auf unserer Webseite zur
                            Verfügung gestellt. Dadurch sammelt Facebook bessere User-Daten und kann interessierten
                            Menschen die passende Werbung über unsere Produkte bzw. Dienstleistungen anzeigen. Die Tools
                            ermöglichen somit maßgeschneiderte Werbekampagnen auf Facebook.
                        </p>
                        <p>
                            Daten über Ihr Verhalten auf unserer Webseite nennt Facebook „Event-Daten“. Diese werden
                            auch für Messungs- und Analysedienste verwendet. Facebook kann so in unserem Auftrag
                            „Kampagnenberichte“ über die Wirkung unserer Werbekampagnen erstellen. Weiters bekommen wir
                            durch Analysen einen besseren Einblick, wie Sie unsere Dienstleistungen, Webseite oder
                            Produkte verwenden. Dadurch optimieren wir mit einigen dieser Tools Ihre Nutzererfahrung auf
                            unserer Webseite. Beispielsweise können Sie mit den sozialen Plug-ins Inhalte auf unserer
                            Seite direkt auf Facebook teilen.
                        </p>
                        <h3 className="adsimple-112503916">Welche Daten werden von Facebook-Tools gespeichert?</h3>
                        <p>
                            Durch die Nutzung einzelner Facebook-Tools können personenbezogene Daten (Kundendaten) an
                            Facebook gesendet werden. Abhängig von den benutzten Tools können Kundendaten wie Name,
                            Adresse, Telefonnummer und IP-Adresse versandt werden.
                        </p>
                        <p>
                            Facebook verwendet diese Informationen, um die Daten mit den Daten, die es selbst von Ihnen
                            hat (sofern Sie Facebook-Mitglied sind) abzugleichen. Bevor Kundendaten an Facebook
                            übermittelt werden, erfolgt ein sogenanntes „Hashing“. Das bedeutet, dass ein beliebig
                            großer Datensatz in eine Zeichenkette transformiert wird. Dies dient auch der
                            Verschlüsselung von Daten.
                        </p>
                        <p>
                            Neben den Kontaktdaten werden auch „Event-Daten“ übermittelt. Unter „Event-Daten“ sind jene
                            Informationen gemeint, die wir über Sie auf unserer Webseite erhalten. Zum Beispiel, welche
                            Unterseiten Sie besuchen oder welche Produkte Sie bei uns kaufen. Facebook teilt die
                            erhaltenen Informationen nicht mit Drittanbietern (wie beispielsweise Werbetreibende), außer
                            das Unternehmen hat eine explizite Genehmigung oder ist rechtlich dazu verpflichtet.
                            „Event-Daten“ können auch mit Kontaktdaten verbunden werden. Dadurch kann Facebook bessere
                            personalisierte Werbung anbieten. Nach dem bereits erwähnten Abgleichungsprozess löscht
                            Facebook die Kontaktdaten wieder.
                        </p>
                        <p>
                            Um Werbeanzeigen optimiert ausliefern zu können, verwendet Facebook die Event-Daten nur,
                            wenn diese mit anderen Daten (die auf andere Weise von Facebook erfasst wurden)
                            zusammengefasst wurden. Diese Event-Daten nützt Facebook auch für Sicherheits-, Schutz-,
                            Entwicklungs- und Forschungszwecke. Viele dieser Daten werden über Cookies zu Facebook
                            übertragen. Cookies sind kleine Text-Dateien, die zum Speichern von Daten bzw. Informationen
                            in Browsern verwendet werden. Je nach verwendeten Tools und abhängig davon, ob Sie
                            Facebook-Mitglied sind, werden unterschiedlich viele Cookies in Ihrem Browser angelegt. In
                            den Beschreibungen der einzelnen Facebook Tools gehen wir näher auf einzelne
                            Facebook-Cookies ein. Allgemeine Informationen über die Verwendung von Facebook-Cookies
                            erfahren Sie auch auf{" "}
                            <a
                                className="adsimple-112503916"
                                href="https://www.facebook.com/policies/cookies?tid=112503916"
                            >
                                https://www.facebook.com/policies/cookies
                            </a>
                            .
                        </p>
                        <h3 className="adsimple-112503916">Wie lange und wo werden die Daten gespeichert?</h3>
                        <p>
                            Grundsätzlich speichert Facebook Daten bis sie nicht mehr für die eigenen Dienste und
                            Facebook-Produkte benötigt werden. Facebook hat auf der ganzen Welt Server verteilt, wo
                            seine Daten gespeichert werden. Kundendaten werden allerdings, nachdem sie mit den eigenen
                            Userdaten abgeglichen wurden, innerhalb von 48 Stunden gelöscht.
                        </p>
                        <h3 className="adsimple-112503916">
                            Wie kann ich meine Daten löschen bzw. die Datenspeicherung verhindern?
                        </h3>
                        <p>
                            Entsprechend der Datenschutz Grundverordnung haben Sie das Recht auf Auskunft, Berichtigung,
                            Übertragbarkeit und Löschung Ihrer Daten.
                        </p>
                        <p>
                            Eine komplette Löschung der Daten erfolgt nur, wenn Sie Ihr Facebook-Konto vollständig
                            löschen. Und so funktioniert das Löschen Ihres Facebook-Kontos:
                        </p>
                        <p>1) Klicken Sie rechts bei Facebook auf Einstellungen.</p>
                        <p>2) Anschließend klicken Sie in der linken Spalte auf „Deine Facebook-Informationen“.</p>
                        <p>3) Nun klicken Sie &#8220;Deaktivierung und Löschung&#8221;.</p>
                        <p>4) Wählen Sie jetzt „Konto löschen“ und klicken Sie dann auf „Weiter und Konto löschen“</p>
                        <p>5) Geben Sie nun Ihr Passwort ein, klicken Sie auf „Weiter“ und dann auf „Konto löschen“</p>
                        <p>
                            Die Speicherung der Daten, die Facebook über unsere Seite erhält, erfolgt unter anderem über
                            Cookies (z.B. bei sozialen Plugins). In Ihrem Browser können Sie einzelne oder alle Cookies
                            deaktivieren, löschen oder verwalten. Je nach dem welchen Browser Sie verwenden,
                            funktioniert dies auf unterschiedliche Art und Weise. Unter dem Abschnitt „Cookies“ finden
                            Sie die entsprechenden Links zu den jeweiligen Anleitungen der bekanntesten Browser.
                        </p>
                        <p>
                            Falls Sie grundsätzlich keine Cookies haben wollen, können Sie Ihren Browser so einrichten,
                            dass er Sie immer informiert, wenn ein Cookie gesetzt werden soll. So können Sie bei jedem
                            einzelnen Cookie entscheiden, ob Sie es erlauben oder nicht.
                        </p>
                        <h3 className="adsimple-112503916">Rechtsgrundlage</h3>
                        <p>
                            Wenn Sie eingewilligt haben, dass Daten von Ihnen durch eingebundene Facebook-Tools
                            verarbeitet und gespeichert werden können, gilt diese Einwilligung als Rechtsgrundlage der
                            Datenverarbeitung{" "}
                            <strong className="adsimple-112503916">(Art. 6 Abs. 1 lit. a DSGVO)</strong>. Grundsätzlich
                            werden Ihre Daten auch auf Grundlage unseres berechtigten Interesses{" "}
                            <strong className="adsimple-112503916">(Art. 6 Abs. 1 lit. f DSGVO)</strong> an einer
                            schnellen und guten Kommunikation mit Ihnen oder anderen Kunden und Geschäftspartnern
                            gespeichert und verarbeitet. Wir setzen die Tools gleichwohl nur ein, soweit Sie eine
                            Einwilligung erteilt haben. Die meisten Social-Media-Plattformen setzen auch Cookies in
                            Ihrem Browser, um Daten zu speichern. Darum empfehlen wir Ihnen, unseren Datenschutztext
                            über Cookies genau durchzulesen und die Datenschutzerklärung oder die Cookie-Richtlinien von
                            Facebook anzusehen.
                        </p>
                        <p>
                            Facebook verarbeitet Daten von Ihnen u.a. auch in den USA. Wir weisen darauf hin, dass nach
                            Meinung des Europäischen Gerichtshofs derzeit kein angemessenes Schutzniveau für den
                            Datentransfer in die USA besteht. Dies kann mit verschiedenen Risiken für die Rechtmäßigkeit
                            und Sicherheit der Datenverarbeitung einhergehen.
                        </p>
                        <p>
                            Als Grundlage der Datenverarbeitung bei Empfängern mit Sitz in Drittstaaten (außerhalb der
                            Europäischen Union, Island, Liechtenstein, Norwegen, also insbesondere in den USA) oder
                            einer Datenweitergabe dorthin verwendet Facebook sogenannte Standardvertragsklauseln (= Art.
                            46. Abs. 2 und 3 DSGVO). Standardvertragsklauseln (Standard Contractual Clauses – SCC) sind
                            von der EU-Kommission bereitgestellte Mustervorlagen und sollen sicherstellen, dass Ihre
                            Daten auch dann den europäischen Datenschutzstandards entsprechen, wenn diese in Drittländer
                            (wie beispielsweise in die USA) überliefert und dort gespeichert werden. Durch diese
                            Klauseln verpflichtet sich Facebook, bei der Verarbeitung Ihrer relevanten Daten, das
                            europäische Datenschutzniveau einzuhalten, selbst wenn die Daten in den USA gespeichert,
                            verarbeitet und verwaltet werden. Diese Klauseln basieren auf einem Durchführungsbeschluss
                            der EU-Kommission. Sie finden den Beschluss und die entsprechenden Standardvertragsklauseln
                            u.a. hier:{" "}
                            <a
                                className="adsimple-112503916"
                                href="https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj?locale=de"
                                target="_blank"
                                rel="follow noopener"
                            >
                                https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj?locale=de
                            </a>
                        </p>
                        <p>
                            Die Facebook Datenverarbeitungsbedingung, welche den Standardvertragsklauseln entsprechen,
                            finden Sie unter{" "}
                            <a
                                className="adsimple-112503916"
                                href="https://www.facebook.com/legal/terms/dataprocessing"
                            >
                                https://www.facebook.com/legal/terms/dataprocessing
                            </a>
                            .
                        </p>
                        <p>
                            Wir hoffen, wir haben Ihnen die wichtigsten Informationen über die Nutzung und
                            Datenverarbeitung durch die Facebook-Tools nähergebracht. Wenn Sie mehr darüber erfahren
                            wollen, wie Facebook Ihre Daten verwendet, empfehlen wir Ihnen die Datenrichtlinien auf{" "}
                            <a className="adsimple-112503916" href="https://www.facebook.com/about/privacy/update">
                                https://www.facebook.com/about/privacy/update
                            </a>
                            .
                        </p>
                        <h2 id="erklaerung-verwendeter-begriffe" className="adsimple-112503916 mb-4">
                            Erklärung verwendeter Begriffe
                        </h2>
                        <p>
                            Wir sind stets bemüht unsere Datenschutzerklärung so klar und verständlich wie möglich zu
                            verfassen. Besonders bei technischen und rechtlichen Themen ist das allerdings nicht immer
                            ganz einfach. Es macht oft Sinn juristische Begriffe (wie z. B. personenbezogene Daten) oder
                            bestimmte technische Ausdrücke (wie z. B. Cookies, IP-Adresse) zu verwenden. Wir möchte
                            diese aber nicht ohne Erklärung verwenden. Nachfolgend finden Sie nun eine alphabetische
                            Liste von wichtigen verwendeten Begriffen, auf die wir in der bisherigen
                            Datenschutzerklärung vielleicht noch nicht ausreichend eingegangen sind. Falls diese
                            Begriffe der DSGVO entnommen wurden und es sich um Begriffsbestimmungen handelt, werden wir
                            hier auch die DSGVO-Texte anführen und gegebenenfalls noch eigene Erläuterungen hinzufügen.
                        </p>
                        <h2 id="auftragsverarbeiter" className="adsimple-112503916">
                            Auftragsverarbeiter
                        </h2>
                        <p>
                            <strong className="adsimple-112503916">Begriffsbestimmung nach Artikel 4 der DSGVO</strong>
                        </p>
                        <p>Im Sinne dieser Verordnung bezeichnet der Ausdruck:</p>
                        <blockquote>
                            <p>
                                <em>
                                    <strong className="adsimple-112503916">„Auftragsverarbeiter“</strong> eine
                                    natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die
                                    personenbezogene Daten im Auftrag des Verantwortlichen verarbeitet;
                                </em>
                            </p>
                        </blockquote>
                        <p>
                            <strong className="adsimple-112503916">Erläuterung:</strong> Wir sind als Unternehmen und
                            Websiteinhaber für alle Daten, die wir von Ihnen verarbeiten verantwortlich. Neben den
                            Verantwortlichen kann es auch sogenannte Auftragsverarbeiter geben. Dazu zählt jedes
                            Unternehmen bzw. jede Person, die in unserem Auftrag personenbezogene Daten verarbeitet.
                            Auftragsverarbeiter können folglich, neben Dienstleistern wie Steuerberater, etwa auch
                            Hosting- oder Cloudanbieter, Bezahlungs- oder Newsletter-Anbieter oder große Unternehmen wie
                            beispielsweise Google oder Microsoft sein.
                        </p>
                        <h2 id="einwilligung" className="adsimple-112503916 mb-4">
                            Einwilligung
                        </h2>
                        <p>
                            <strong className="adsimple-112503916">Begriffsbestimmung nach Artikel 4 der DSGVO</strong>
                        </p>
                        <p>Im Sinne dieser Verordnung bezeichnet der Ausdruck:</p>
                        <blockquote>
                            <p>
                                <em>
                                    <strong className="adsimple-112503916">„Einwilligung“</strong> der betroffenen
                                    Person jede freiwillig für den bestimmten Fall, in informierter Weise und
                                    unmissverständlich abgegebene Willensbekundung in Form einer Erklärung oder einer
                                    sonstigen eindeutigen bestätigenden Handlung, mit der die betroffene Person zu
                                    verstehen gibt, dass sie mit der Verarbeitung der sie betreffenden personenbezogenen
                                    Daten einverstanden ist;
                                </em>
                            </p>
                        </blockquote>
                        <p>
                            <strong className="adsimple-112503916">Erläuterung: </strong>In der Regel erfolgt bei
                            Websites eine solche Einwilligung über ein Cookie-Consent-Tool. Sie kennen das bestimmt.
                            Immer wenn Sie erstmals eine Website besuchen, werden Sie meist über einen Banner gefragt,
                            ob Sie der Datenverarbeitung zustimmen bzw. einwilligen. Meist können Sie auch individuelle
                            Einstellungen treffen und so selbst entscheiden, welche Datenverarbeitung Sie erlauben und
                            welche nicht. Wenn Sie nicht einwilligen, dürfen auch keine personenbezogene Daten von Ihnen
                            verarbeitet werden. Grundsätzlich kann eine Einwilligung natürlich auch schriftlich, also
                            nicht über ein Tool, erfolgen.
                        </p>
                        <h2 id="personenbezogene-daten" className="adsimple-112503916 mb-4">
                            Personenbezogene Daten
                        </h2>
                        <p>
                            <strong className="adsimple-112503916">Begriffsbestimmung nach Artikel 4 der DSGVO</strong>
                        </p>
                        <p>Im Sinne dieser Verordnung bezeichnet der Ausdruck:</p>
                        <blockquote>
                            <p>
                                <strong className="adsimple-112503916">
                                    <em>„personenbezogene Daten“</em>
                                </strong>
                                <em>
                                    {" "}
                                    alle Informationen, die sich auf eine identifizierte oder identifizierbare
                                    natürliche Person (im Folgenden „betroffene Person“) beziehen; als identifizierbar
                                    wird eine natürliche Person angesehen, die direkt oder indirekt, insbesondere
                                    mittels Zuordnung zu einer Kennung wie einem Namen, zu einer Kennnummer, zu
                                    Standortdaten, zu einer Online-Kennung oder zu einem oder mehreren besonderen
                                    Merkmalen, die Ausdruck der physischen, physiologischen, genetischen, psychischen,
                                    wirtschaftlichen, kulturellen oder sozialen Identität dieser natürlichen Person
                                    sind, identifiziert werden kann;
                                </em>
                            </p>
                        </blockquote>
                        <p>
                            <strong className="adsimple-112503916">Erläuterung:</strong> Personenbezogene Daten sind
                            also all jene Daten, die Sie als Person identifizieren können. Das sind in der Regel Daten
                            wie etwa:
                        </p>
                        <ul className="adsimple-112503916">
                            <li className="adsimple-112503916">Name</li>
                            <li className="adsimple-112503916">Adresse</li>
                            <li className="adsimple-112503916">E-Mail-Adresse</li>
                            <li className="adsimple-112503916">Post-Anschrift</li>
                            <li className="adsimple-112503916">Telefonnummer</li>
                            <li className="adsimple-112503916">Geburtsdatum</li>
                            <li className="adsimple-112503916">
                                Kennnummern wie Sozialversicherungsnummer, Steueridentifikationsnummer,
                                Personalausweisnummer oder Matrikelnummer
                            </li>
                            <li className="adsimple-112503916">
                                Bankdaten wie Kontonummer, Kreditinformationen, Kontostände uvm.
                            </li>
                        </ul>
                        <p>
                            Laut Europäischem Gerichtshof (EuGH) zählt auch Ihre{" "}
                            <strong className="adsimple-112503916">IP-Adresse zu den personenbezogenen Daten</strong>.
                            IT-Experten können anhand Ihrer IP-Adresse zumindest den ungefähren Standort Ihres Geräts
                            und in weiterer Folge Sie als Anschlussinhabers feststellen. Daher benötigt auch das
                            Speichern einer IP-Adresse eine Rechtsgrundlage im Sinne der DSGVO. Es gibt auch noch
                            sogenannte <strong className="adsimple-112503916">„besondere Kategorien“</strong> der
                            personenbezogenen Daten, die auch besonders schützenswert sind. Dazu zählen:
                        </p>
                        <ul className="adsimple-112503916">
                            <li className="adsimple-112503916">rassische und ethnische Herkunft</li>
                            <li className="adsimple-112503916">politische Meinungen</li>
                            <li className="adsimple-112503916">religiöse bzw. weltanschauliche Überzeugungen</li>
                            <li className="adsimple-112503916">die Gewerkschaftszugehörigkeit</li>
                            <li className="adsimple-112503916">
                                genetische Daten wie beispielsweise Daten, die aus Blut- oder Speichelproben entnommen
                                werden
                            </li>
                            <li className="adsimple-112503916">
                                biometrische Daten (das sind Informationen zu psychischen, körperlichen oder
                                verhaltenstypischen Merkmalen, die eine Person identifizieren können).
                                <br />
                                Gesundheitsdaten
                            </li>
                            <li className="adsimple-112503916">
                                Daten zur sexuellen Orientierung oder zum Sexualleben
                            </li>
                        </ul>
                        <h2 id="profiling" className="adsimple-112503916 mb-4">
                            Profiling
                        </h2>
                        <p>
                            <strong className="adsimple-112503916">Begriffsbestimmung nach Artikel 4 der DSGVO</strong>
                        </p>
                        <p>Im Sinne dieser Verordnung bezeichnet der Ausdruck:</p>
                        <blockquote>
                            <p>
                                <em>
                                    <strong className="adsimple-112503916">„Profiling“</strong> jede Art der
                                    automatisierten Verarbeitung personenbezogener Daten, die darin besteht, dass diese
                                    personenbezogenen Daten verwendet werden, um bestimmte persönliche Aspekte, die sich
                                    auf eine natürliche Person beziehen, zu bewerten, insbesondere um Aspekte bezüglich
                                    Arbeitsleistung, wirtschaftliche Lage, Gesundheit, persönliche Vorlieben,
                                    Interessen, Zuverlässigkeit, Verhalten, Aufenthaltsort oder Ortswechsel dieser
                                    natürlichen Person zu analysieren oder vorherzusagen;
                                </em>
                            </p>
                        </blockquote>
                        <p>
                            <strong className="adsimple-112503916">Erläuterung:</strong> Beim Profiling werden
                            verschiedene Informationen über eine Person zusammengetragen, um daraus mehr über diese
                            Person zu erfahren. Im Webbereich wird Profiling häufig für Werbezwecke oder auch für
                            Bonitätsprüfungen angewandt. Web- bzw. Werbeanalyseprogramme sammeln zum Beispiel Daten über
                            Ihre Verhalten und Ihre Interessen auf einer Website. Daraus ergibt sich ein spezielles
                            Userprofil, mit dessen Hilfe Werbung gezielt an eine Zielgruppe ausgespielt werden kann.
                        </p>
                        <p>&nbsp;</p>
                        <h2 id="verantwortlicher" className="adsimple-112503916 mb-4">
                            Verantwortlicher
                        </h2>
                        <p>
                            <strong className="adsimple-112503916">Begriffsbestimmung nach Artikel 4 der DSGVO</strong>
                        </p>
                        <p>Im Sinne dieser Verordnung bezeichnet der Ausdruck:</p>
                        <blockquote>
                            <p>
                                <em>
                                    <strong className="adsimple-112503916">„Verantwortlicher“</strong> die natürliche
                                    oder juristische Person, Behörde, Einrichtung oder andere Stelle, die allein oder
                                    gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von
                                    personenbezogenen Daten entscheidet; sind die Zwecke und Mittel dieser Verarbeitung
                                    durch das Unionsrecht oder das Recht der Mitgliedstaaten vorgegeben, so kann der
                                    Verantwortliche beziehungsweise können die bestimmten Kriterien seiner Benennung
                                    nach dem Unionsrecht oder dem Recht der Mitgliedstaaten vorgesehen werden;
                                </em>
                            </p>
                        </blockquote>
                        <p>
                            <strong className="adsimple-112503916">Erläuterung:</strong> In unserem Fall sind wir für
                            die Verarbeitung Ihrer personenbezogenen Daten verantwortlich und folglich der
                            &#8220;Verantwortliche&#8221;. Wenn wir erhobene Daten zur Verarbeitung an andere
                            Dienstleister weitergeben, sind diese &#8220;Auftragsverarbeiter&#8221;. Dafür muss ein
                            &#8220;Auftragsverarbeitungsvertrag (AVV)&#8221; unterzeichnet werden.
                        </p>
                        <p>&nbsp;</p>
                        <h2 id="verarbeitung" className="adsimple-112503916 mb-4">
                            Verarbeitung
                        </h2>
                        <p>
                            <strong className="adsimple-112503916">Begriffsbestimmung nach Artikel 4 der DSGVO</strong>
                        </p>
                        <p>Im Sinne dieser Verordnung bezeichnet der Ausdruck:</p>
                        <blockquote>
                            <p>
                                <strong className="adsimple-112503916">
                                    <em>„Verarbeitung“</em>
                                </strong>
                                <em>
                                    {" "}
                                    jeden mit oder ohne Hilfe automatisierter Verfahren ausgeführten Vorgang oder jede
                                    solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten wie das Erheben,
                                    das Erfassen, die Organisation, das Ordnen, die Speicherung, die Anpassung oder
                                    Veränderung, das Auslesen, das Abfragen, die Verwendung, die Offenlegung durch
                                    Übermittlung, Verbreitung oder eine andere Form der Bereitstellung, den Abgleich
                                    oder die Verknüpfung, die Einschränkung, das Löschen oder die Vernichtung;
                                </em>
                            </p>
                        </blockquote>
                        <p>
                            <strong className="adsimple-112503916">Anmerkung: </strong>Wenn wir in unserer
                            Datenschutzerklärung von Verarbeitung sprechen, meinen wir damit jegliche Art von
                            Datenverarbeitung. Dazu zählt, wie oben in der originalen DSGVO-Erklärung erwähnt, nicht nur
                            das Erheben sondern auch das Speichern und Verarbeiten von Daten.
                        </p>
                        <p>Alle Texte sind urheberrechtlich geschützt.</p>
                    </div>
                </ContainerStandard>
            </div>
        </>
    );
}
