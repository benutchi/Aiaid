// blocks-data.js
// All data för Studiekompisen ligger här.
// Index.html läser bara window.BLOCKS_DATA

window.BLOCKS_DATA = [
  {
    id: 1,
    title: "Block 1: Källkritik",
    icon: "sparkles",
    sections: [
      {
        title: "A: Skröna & Berättelse",
        page: "8–9",
        text: "I ämnet historia läser du om hur det var förr i tiden. Vad hände i Sverige 1520 till exempel, när Gustav Eriksson irrade omkring i Dalarna, jagad av den danske kungen Kristian Tyranns soldater? Så här stod det i Läsebok för folkskolan – alla barn i hela Sverige läste förr om hur bonden Sven Elvsson i Isala i Dalarna räddade livet på Gustav Eriksson.\n\n'Sven Elvsson menade att Gustav nog inte var säker i Isala. Han gömde honom därför i ett stort halmlass och körde det uppåt de ödsliga skogarna. Snart mötte han några av danskarnas utskickade soldater. De misstänkte bonden och stack sina spjut några gånger genom halmlasset. En av spjutspetsarna rispade Gustav i benet, men han låg orörlig. Danskarna märkte ingenting och lät Sven Elvsson köra vidare. Snart såg Sven att blod började rinna ur halmlasset och färga snön. Sven blev rädd att blodet skulle avslöja dem. Han tog därför upp sin kniv, skar ett djupt hål i benet på hästen. När Sven sedan blev tillfrågad om blodfläckarna i snön, skyllde han på hästens sår.'\n\nVisst är det en spännande historia! Men är den sann? Gustav III beundrade Gustav Vasa och ville gärna visa att de var släkt. Kungen beordrade därför landshövdingen i Dalarna att hitta personer som kunde skriva ned Gustav Vasas 'äventyr'. Berättelserna skrevs alltså ner 250 år senare och kallas ofta för skrönor. En skröna kan ha en kärna av sanning men är sedan överdriven och förljugen. Källkritik hjälper oss att fråga: Vem berättar? Varför? Och när hände det?",
        concepts: ["Källkritik", "Skröna", "Fakta", "Historiker", "Propaganda"],
        mustKnow: ["Skillnaden mellan en skröna och fakta.", "Att Vasa-berättelsen skrevs 250 år efteråt.", "Varför kungar använde historier för makt."],
        summary: ["Källkritik granskar information.", "Skrönor är överdrivna historier.", "Vasa-berättelsen i Isala är en skröna."],
        test: [{q: "Vad kallas en överdriven historia?", a: "Skröna"}, {q: "Vem beställde texten 250 år senare?", a: "Gustav III"}, {q: "Var gömde Sven kungen?", a: "I ett halmlass"}],
        reasoning: "Varför ville en kung sprida hjältesagor om sina förfäder?",
        application: "Hitta en rubrik på nätet och ställ källfrågorna."
      },
      {
        title: "B: Källfrågorna",
        page: "10",
        text: "För att granska en källa använder vi källkritik. Det finns fyra viktiga grundfrågor som du alltid ska ha med dig:\n\n1. Äkthet: Är källan vad den utger sig för att vara? Är det ett riktigt brev eller en falsk bild? I den digitala världen kan bilder och filmer enkelt ändras så att de ser äkta ut trots att de är fejk.\n\n2. Tid: När skapades källan? Det är bäst om den skapades precis när något hände. Ju längre tid som går, desto mer glömmer vi bort eller råkar ändra på detaljer i vår berättelse. En person som berättar om något idag som hände för 20 år sedan är inte lika pålitlig som en dagbok skriven samma dag.\n\n3. Beroende: Berättar källan något helt själv eller har den bara skrivit av någon annan? Om tre tidningar skriver samma sak men alla har tagit informationen från samma person, så finns det egentligen bara en enda källan.\n\n4. Syfte (Tendens): Vad vill författaren uppnå? Vill hen informera om sanningen, eller vill hen sälja något eller påverka dig? Om en källas syfte är att påverka kallas det att den har en tendens.",
        concepts: ["Äkthet", "Tid", "Beroende", "Tendens"],
        mustKnow: ["De fyra källfrågorna.", "Tidens påverkan på minnet.", "Vad beroende innebär."],
        summary: ["Äkthet, Tid, Beroende och Syfte.", "Information nära händelsen är bäst.", "Var vaksam på tendens."],
        test: [{q: "Vilken är första källfrågan?", a: "Äkthet"}, {q: "Vad betyder tendens?", a: "Vinklad information"}, {q: "Vad är beroende?", a: "Att man skrivit av andra"}],
        reasoning: "Vilken fråga är svårast på internet?",
        application: "Granska ett inlägg på sociala medier utifrån de 4 frågorna."
      },
      {
        title: "C: Perspektiv & Syfte",
        page: "12",
        text: "En samhällsfråga är en viktig fråga som diskuteras av många och där det finns olika uppfattningar. Man ska försöka se en samhällsfråga från olika håll, ur olika perspektiv. Ett exempel är debatten om läskskatt.\n\nLäkare varnar för att fetma bland barn och unga har femdubblats sedan 1980-talet. De föreslog år 2021 att regeringen skulle införa en skatt på läsk för att få oss att dricka mindre socker. Läkarnas perspektiv är folkhälsan. Men det finns andra perspektiv. Vissa tycker att det är individens ansvar och att staten inte ska bestämma vad man dricker. Andra menar att en skatt slår hårdast mot de som redan har lite pengar. Samhällskunskap tränar oss i att förstå dessa krockar mellan olika intressen och se sambanden i samhället.",
        concepts: ["Samhällsfråga", "Perspektiv", "Folkhälsa", "Värdering"],
        mustKnow: ["Vad en samhällsfråga är.", "Att se en fråga ur olika perspektiv.", "Varför läkare vill ha läskskatt."],
        summary: ["Samhällsfrågor berör många.", "Olika grupper ser frågorna på olika sätt.", "Läskskatt handlar om hälsa mot frihet."],
        test: [{q: "Vad är en samhällsfråga?", a: "En fråga med olika svar"}, {q: "Varför vill läkare ha skatt?", a: "Minska fetma bland unga"}],
        reasoning: "Ska staten bestämma vad vi äter genom att höja priset?",
        application: "Hitta en annan aktuell samhällsfråga i nyheterna."
      }
    ]
  },
  {
    id: 2,
    title: "Block 2: Ekonomi",
    icon: "zap",
    sections: [
      {
        title: "A: Pengar förr & nu",
        page: "43–44",
        text: "Byteshandel har funnits länge. Men för några tusen år sedan uppfanns pengar för att mäta värde. I Sverige var de första mynten av metall. På 1600-talet blev det brist på guld och silver. Man började då använda koppar. Koppar var billigare, så mynten var tvungna att vara enormt stora. De tyngsta kopparmynten vägde över 19 kilo! Folk fick dra sina pengar på skottkärra. År 1660 öppnade Johan Palmstruch den första banken i Stockholm. Han tog emot de tunga mynten och gav ut kvitton på papper – dessa blev Sveriges första sedlar. Idag är de flesta pengar elektroniska digitala siffror.",
        concepts: ["Byteshandel", "Metallen", "Johan Palmstruch", "Digitala pengar"],
        mustKnow: ["Varför pengar uppfanns.", "Svenska mynt vägde 19 kg.", "Första banken 1660."],
        summary: ["Pengar ersatte krånglig byteshandel.", "Första sedlarna var bankkvitton.", "Idag är pengar främst digitala."],
        test: [{q: "Vad vägde tunga mynt?", a: "19 kg"}, {q: "Vem startade första banken?", a: "Johan Palmstruch"}],
        reasoning: "Vad händer om internet slutar funka?",
        application: "Designa ett eget mynt."
      },
      {
        title: "B: Varor & Tjänster",
        page: "44–45",
        text: "Ekonomi handlar om hur vi använder resurser för att köpa och sälja. Vi delar upp det vi handlar i varor och tjänster. En vara är en fysisk sak som du kan ta på. En tjänst är något som någon gör för dig. Du betalar för arbetet som utförs. Förr tillverkade vi nästan allt själva. Idag köper vi de flesta varor i affärer och vi köper många tjänster för att underlätta vardagen. Hela vår ekonomi bygger på att vi byter varor och tjänster med varandra.",
        concepts: ["Vara", "Tjänst", "Resurs", "Lön"],
        mustKnow: ["Definitionen av en vara.", "Definitionen av en tjänst.", "Att anställda får lön."],
        summary: ["Varor är saker, tjänster är arbete.", "Vi äger varor vi köper.", "Tjänster underlättar vardagen."],
        test: [{q: "Vad är en vara?", a: "En sak man kan ta på"}, {q: "Ge en tjänst.", a: "Klippa håret"}],
        reasoning: "Varför köper vi fler tjänster idag än förr?",
        application: "Lista 3 varor och 3 tjänster din familj köpt."
      },
      {
        title: "C: Brutto, Netto & Skatt",
        page: "46–47",
        text: "När en vuxen person arbetar får hen lön. Bruttolön är lönen innan skatten är dragen. I Sverige betalar vi inkomstskatt, ofta ca 30%. Det som blir kvar kallas nettolön. Skattepengarna betalar för den offentliga sektorn: skolor, sjukhus, poliser och vägar. Utöver lön kan ett hushåll få bidrag, som barnbidrag. Genom skatten kan vi ha en bra service som fungerar för alla.",
        concepts: ["Bruttolön", "Nettolön", "Skatt", "Offentlig sektor"],
        mustKnow: ["Brutto vs Netto.", "Skatten är ca 30%.", "Vart skatten går."],
        summary: ["Brutto = före skatt, Netto = efter.", "Skatten betalar välfärd.", "Bidrag hjälper familjer."],
        test: [{q: "Vad är lönen före skatt?", a: "Bruttolön"}, {q: "Vart går skatten?", a: "Offentlig sektor"}],
        reasoning: "Vad händer med skolan om ingen betalar skatt?",
        application: "Räkna ut netto om brutto är 100 kr och skatt 30 kr."
      },
      {
        title: "D: Budget & Hushåll",
        page: "47",
        text: "En budget är en plan för inkomster och utgifter. Fasta utgifter är samma varje månad (t.ex. hyra). Rörliga utgifter ändras (t.ex. nöjen). En viktig regel är att utgifterna inte får vara större än inkomsterna. Om man sparar får man trygghet för framtiden. En budget hjälper dig att prioritera rätt.",
        concepts: ["Budget", "Inkomst", "Utgift", "Sparande"],
        mustKnow: ["Vad en budget är.", "Inkomst mot utgift.", "Vikten av sparande."],
        summary: ["Budget ger kontroll.", "Hyra är fast utgift.", "Spara för framtiden."],
        test: [{q: "Vad är en budget?", a: "En plan för pengar"}, {q: "Vad är en utgift?", a: "Pengar ut"}],
        reasoning: "Varför är det svårt att hålla en budget?",
        application: "Gör en budget för en vecka med 100 kr."
      }
    ]
  },
  {
    id: 3,
    title: "Block 3: Banker & Priser",
    icon: "landmark",
    sections: [
      {
        title: "A: Banken som mellanhand",
        page: "52",
        text: "Banker fungerar som en mellanhand mellan sparare och lånare. De pengar som en bank har kommer från människor och företag som sparar. När du sätter in pengar lånar du egentligen ut dem till banken. Banken samlar ihop pengar från många sparare och lånar ut dem till andra, t.ex. till familjer som vill köpa ett hus. Banken granskar noga de som vill låna för att se att de kan betala tillbaka.",
        concepts: ["Mellanhand", "Sparande", "Låntagare", "Kretslopp"],
        mustKnow: ["Bankens roll som förmedlare.", "Varifrån pengarna kommer.", "Varför de granskar lånare."],
        summary: ["Banken kopplar ihop folk.", "Sparande = lån till banken.", "Banken lånar ut till hus."],
        test: [{q: "Vad är bankens roll?", a: "Mellanhand"}, {q: "Vem sparar?", a: "Privatpersoner/företag"}],
        reasoning: "Varför är det viktigt att lita på banken?",
        application: "Förklara för en kompis varför sparande hjälper andra."
      },
      {
        title: "B: Ränta & Räntegap",
        page: "52–53",
        text: "Banken tjänar pengar på ränta. Ränta är priset på pengar. Inlåningsränta får du när du sparar. Utlåningsränta betalar du när du lånar. Utlåningsräntan är alltid högre. Skillnaden kallas räntegap – det är bankens vinst. Om räntan stiger får folk mindre pengar kvar. Om den sjunker blir det billigare att låna.",
        concepts: ["Ränta", "Inlåning", "Utlåning", "Räntegap"],
        mustKnow: ["Ränta är priset på pengar.", "In- vs utlåningsränta.", "Vad räntegapet är."],
        summary: ["Ränta är en kostnad eller vinst.", "Banken tar mer av lånare.", "Räntegapet betalar löner."],
        test: [{q: "Vad är ränta?", a: "Priset på pengar"}, {q: "Vilken ränta är högst?", a: "Utlåningsräntan"}],
        reasoning: "Varför tar banken ut högre ränta än de ger?",
        application: "Räkna räntegapet om in är 2% och ut 6%."
      },
      {
        title: "C: Riksbanken & Styrränta",
        page: "53",
        text: "Riksbanken är statens bank. Deras viktigaste uppgift är att se till att pengarna behåller sitt värde. De kämpar mot inflation (prishöjningar). De använder styrräntan för att styra ekonomin. Om de höjer styrräntan blir det dyrare att låna, vilket bromsar prishöjningar. Riksbanken fungerar som en gas och broms för ekonomin.",
        concepts: ["Riksbanken", "Inflation", "Styrränta", "Statens bank"],
        mustKnow: ["Riksbankens uppgift.", "Trycker alla pengar.", "Styrräntan styr ekonomin."],
        summary: ["Riksbanken vaktar pengarnas värde.", "Styrräntan påverkar alla lån.", "De bromsar inflationen."],
        test: [{q: "Vilken bank är statens?", a: "Riksbanken"}, {q: "Vad är inflation?", a: "Priser stiger"}],
        reasoning: "Varför är stabil mjölkpris viktigt?",
        application: "Rita Riksbanken som gaspedal och broms."
      },
      {
        title: "D: Utbud & Efterfrågan",
        page: "54–55",
        text: "Priset bestäms av utbud och efterfrågan. Utbud är hur mycket som finns till salu. Efterfrågan är hur många som vill köpa. Litet utbud och hög efterfrågan gör varor dyra (t.ex. första jordgubbarna). Stort utbud gör priser lägre. Samspelet skapar marknadspriset.",
        concepts: ["Utbud", "Efterfrågan", "Prissättning", "Marknad"],
        mustKnow: ["Definition av utbud.", "Definition av efterfrågan.", "Hur priset rör sig."],
        summary: ["Tillgång och sug styr priset.", "Litet utbud = dyrt.", "Stort utbud = billigt."],
        test: [{q: "Vad är utbud?", a: "Hur mycket som finns"}, {q: "Vad händer vid litet utbud?", a: "Priset stiger"}],
        reasoning: "Varför sänks priset på REA?",
        application: "Ge exempel på en säsongsvara."
      }
    ]
  },
  {
    id: 4,
    title: "Block 4: Lag & rätt",
    icon: "scale",
    sections: [
      {
        title: "A: Rättskedjan",
        page: "62-63",
        text: "När ett brott begås startar rättskedjan. Polisen utreder och samlar bevis. Åklagaren beslutar om bevisen räcker för åtal. I tingsrätten dömer en domare och tre nämndemän (vanliga människor). Om personen döms får hen en påföljd (straff), som böter eller fängelse. För unga (15-18 år) används ofta ungdomsvård.",
        concepts: ["Åklagare", "Nämndeman", "Påföljd", "Tingsrätt"],
        mustKnow: ["Stegen i kedjan.", "Vem en nämndeman är.", "Påföljd betyder straff."],
        summary: ["Polisen utreder.", "Åklagaren väcker åtal.", "Domstolen dömer."],
        test: [{q: "Vem utreder brott?", a: "Polisen"}, {q: "Vem beslutar om åtal?", a: "Åklagaren"}],
        reasoning: "Varför har vi nämndemän?",
        application: "Rita en tidslinje över rättskedjan."
      },
      {
        title: "B: Domstol & Nämndemän",
        page: "64-65",
        text: "Den misstänkte kallas tilltalad och har rätt till försvarare. Vittnen måste tala sanning (vittnesed). Att ljuga är mened. Nämndemännen är medborgare som representerar folket. De röstar om dom i en överläggning.",
        concepts: ["Tilltalad", "Försvarare", "Vittnesed", "Mened"],
        mustKnow: ["Vad tilltalad betyder.", "Vikten av sanning i rätten.", "Nämndemännens roll."],
        summary: ["Åklagaren visar bevis.", "Vittnen svär en ed.", "Domen röstas fram."],
        test: [{q: "Vem är tilltalad?", a: "Den misstänkte"}, {q: "Vad är mened?", a: "Att ljuga i rätten"}],
        reasoning: "Varför är vittneseden viktig?",
        application: "Skissa en rättssal."
      },
      {
        title: "C: Påföljder & Unga",
        page: "66-67",
        text: "Vanliga straff är böter eller fängelse. Man blir straffmyndig vid 15 år. Unga får ofta ungdomsvård eller ungdomstjänst. Barn under 15 år döms inte i domstol, utan där ansvarar socialtjänsten och föräldrar.",
        concepts: ["Straffmyndig", "Ungdomsvård", "Socialtjänst"],
        mustKnow: ["Straffmyndig vid 15 år.", "Vård istället för fängelse.", "Socialtjänstens roll."],
        summary: ["Påföljd = straff.", "Gränsen är 15 år.", "Vård hjälper unga."],
        test: [{q: "När blir man straffmyndig?", a: "15 år"}, {q: "Vem hjälper barn?", a: "Socialtjänsten"}],
        reasoning: "Varför sätter vi inte 16-åringar i fängelse?",
        application: "Lista tre olika straff."
      },
      {
        title: "D: Skollagen & Kränkning",
        page: "24–25",
        text: "Alla har rätt till trygghet i skolan. Mobbning kallas kränkande behandling. Personalen har anmälningsplikt till rektorn. Det är alltid den utsatta som avgör om hen är kränkt. Skolan måste ha en plan mot kränkningar varje år.",
        concepts: ["Kränkande behandling", "Anmälningsplikt", "Rektor"],
        mustKnow: ["Typer av kränkning.", "Anmälningsplikten.", "Offrets tolkning."],
        summary: ["Lagen skyddar elever.", "Vuxna måste anmäla.", "Plan mot mobbning krävs."],
        test: [{q: "Vad kallas mobbning i lagen?", a: "Kränkande behandling"}, {q: "Vem har huvudansvaret?", a: "Rektorn"}],
        reasoning: "Varför avgör offret om det är kränkning?",
        application: "Ge 3 förslag för en trygg rast."
      }
    ]
  },
  {
    id: 5,
    title: "Block 5: Demokrati",
    icon: "users",
    sections: [
      {
        title: "A: Vad är demokrati?",
        page: "75",
        text: "Demokrati betyder folkstyre (grekiska demos=folk, kratos=styre). All makt utgår från folket. I Sverige har vi representativ demokrati där vi väljer representanter (politiker) som fattar beslut. I Aten fanns direkt demokrati för fria män.",
        concepts: ["Demokrati", "Diktatur", "Representativ"],
        mustKnow: ["Betydelse av ordet.", "Representativ demokrati.", "Skillnad mot diktatur."],
        summary: ["Folket bestämmer.", "Vi väljer politiker.", "Aten var först."],
        test: [{q: "Vad betyder folkstyre?", a: "Demokrati"}, {q: "Vilken typ har Sverige?", a: "Representativ"}],
        reasoning: "Varför röstar vi inte om allt i mobilen?",
        application: "Hitta direkt demokrati i skolan."
      },
      {
        title: "B: Demokratins spelregler",
        page: "76–77",
        text: "En demokrati kräver: 1. Fria och hemliga val. 2. Yttrandefrihet och tryckfrihet. 3. Rättssäkerhet (lika inför lagen). 4. Majoritetsprincipen (flest röster vinner, men minoriteter skyddas).",
        concepts: ["Hemliga val", "Yttrandefrihet", "Majoritetsprincipen"],
        mustKnow: ["De 4 spelreglerna.", "Vikten av hemliga val.", "Skydd för minoriteter."],
        summary: ["Fria val krävs.", "Rätt att tycka fritt.", "Lagen skyddar alla."],
        test: [{q: "Ser man vad nån röstar?", a: "Nej"}, {q: "Vem bestämmer?", a: "Majoriteten"}],
        reasoning: "Vad händer om valen inte vore hemliga?",
        application: "Gör en checklista för ett demokratiskt land."
      },
      {
        title: "C: Diktatur - Motsatsen",
        page: "78–79",
        text: "I en diktatur bestämmer en person eller liten grupp allt. Samhället styrs genom kontroll och rädsla. Censur innebär att staten styr media och internet. Man får inte kritisera ledarna utan straff. Rättsosäkerhet råder.",
        concepts: ["Diktatur", "Censur", "Kontroll"],
        mustKnow: ["Kännetecken för diktatur.", "Vad censur är.", "Ingen yttrandefrihet."],
        summary: ["En ledare har all makt.", "Staten styr informationen.", "Rädsla styr folk."],
        test: [{q: "Vad är censur?", a: "Statens kontroll av media"}, {q: "Får man tycka fritt?", a: "Nej"}],
        reasoning: "Varför är diktaturer rädda för sociala medier?",
        application: "Jämför skoldag i demokrati vs diktatur."
      },
      {
        title: "D: Val & Rösträtt",
        page: "78",
        text: "I Sverige är det val vart fjärde år (september). Vi röstar till riksdag, region och kommun samtidigt. Krav för riksdagen: 18 år, svensk medborgare, folkbokförd. Alla röster är lika mycket värda.",
        concepts: ["Mandat", "Rösträtt", "Medborgare"],
        mustKnow: ["Vart fjärde år.", "Åldersgräns 18 år.", "Tre nivåer samtidigt."],
        summary: ["Val i september.", "18 år för att rösta.", "Mandat = platser."],
        test: [{q: "Hur ofta är det val?", a: "Vart 4:e år"}, {q: "Ålderskrav?", a: "18 år"}],
        reasoning: "Varför är det viktigt att alla röstar?",
        application: "Namnge tre partier i riksdagen."
      },
      {
        title: "E: Påverka & Opinion",
        page: "79",
        text: "Man kan påverka innan 18 år. Skapa opinion: få folk att tycka likadant via insändare, sociala medier eller namninsamlingar. Man kan gå med i föreningar eller elevråd. Demokratin pågår varje dag.",
        concepts: ["Opinion", "Elevråd", "Rörelse"],
        mustKnow: ["Skapa opinion.", "Sätt att påverka.", "Demokrati i vardagen."],
        summary: ["Du kan höras utan rösträtt.", "Gå samman för att synas.", "Sociala medier påverkar."],
        test: [{q: "Vad är opinion?", a: "Mångas åsikter"}, {q: "Sätt att påverka i skolan?", a: "Elevråd"}],
        reasoning: "Vilket sätt påverkar mest idag?",
        application: "Skriv rubrik till en insändare."
      }
    ]
  },
  {
    id: 6,
    title: "Block 6: Riksdag & Regering",
    icon: "landmark",
    sections: [
      {
        title: "A: Riksdagen",
        page: "84–85",
        text: "Riksdagen har 349 ledamöter valda vart 4:e år. Uppgifter: stiftar lagar och beslutar om statens budget (skattepengarna). Riksdagen kontrollerar även regeringen. En majoritet krävs för beslut i kammaren.",
        concepts: ["Ledamot", "Budget", "Majoritet", "Stifta lagar"],
        mustKnow: ["349 ledamöter.", "Lagar och pengar.", "Vart fjärde år."],
        summary: ["Representerar folket.", "Styr pengarna.", "Kontrollerar regeringen."],
        test: [{q: "Hur många sitter i riksdagen?", a: "349"}, {q: "Vem väljer dem?", a: "Folket"}],
        reasoning: "Varför bestämmer de över budgeten?",
        application: "Hitta ett parti i riksdagen."
      },
      {
        title: "B: Regeringen",
        page: "85–86",
        text: "Regeringen styr landet och genomför riksdagens beslut. Statsministern leder regeringen och väljer sina ministrar. Sverige har parlamentarism: regeringen måste ha riksdagens stöd.",
        concepts: ["Statsminister", "Minister", "Parlamentarism"],
        mustKnow: ["Genomför beslut.", "Statsministerns roll.", "Behöver stöd."],
        summary: ["Styr landet praktiskt.", "Lämnar propositioner.", "Styr myndigheter."],
        test: [{q: "Vem leder regeringen?", a: "Statsministern"}, {q: "Vad gör regeringen?", a: "Styr landet"}],
        reasoning: "Vad händer utan stöd i riksdagen?",
        application: "Vem är statsminister nu?"
      },
      {
        title: "C: Proposition & Motion",
        page: "86",
        text: "Proposition = förslag från regeringen. Motion = förslag från ledamot. Utskott (experter) förbereder besluten i betänkanden. Debatt och röstning sker i kammaren.",
        concepts: ["Proposition", "Motion", "Utskott", "Kammaren"],
        mustKnow: ["Skillnad propp/motion.", "Utskottens roll.", "Stegen till lag."],
        summary: ["Förslag förbereds noga.", "Majoriteten avgör.", "Regeringen verkställer."],
        test: [{q: "Vad är en motion?", a: "Ledamotens förslag"}, {q: "Vart går förslaget först?", a: "Utskottet"}],
        reasoning: "Varför utskott först?",
        application: "Hitta på en 'klassmotion'."
      },
      {
        title: "D: Grundlagarna",
        page: "87",
        text: "Sverige har fyra grundlagar: Regeringsformen, Successionsordningen, Tryckfrihetsförordningen, Yttrandefrihetsgrundlagen. De skyddar demokratin och är svåra att ändra (två beslut, ett val).",
        concepts: ["Regeringsformen", "Grundlag", "Statschef"],
        mustKnow: ["De 4 namnen.", "Svåra att ändra.", "Monarki utan makt."],
        summary: ["Står över alla lagar.", "Skyddar rättigheter.", "Kungen har ingen politisk makt."],
        test: [{q: "Hur många grundlagar?", a: "Fyra"}, {q: "Vilken styr kungen?", a: "Successionsordningen"}],
        reasoning: "Varför svåra att ändra?",
        application: "Gör schema över grundlagarna."
      }
    ]
  },
  {
    id: 7,
    title: "Block 7: Framtiden",
    icon: "briefcase",
    sections: [
      {
        title: "A: Samhällets förändring",
        page: "29–30",
        text: "Arbetsmarknaden har ändrats från jordbruk till industri och nu tjänstesamhälle. Utbildning är viktigare än förr. Vi flyttade från landet till städerna under industrialiseringen.",
        concepts: ["Industrialisering", "Tjänstesamhälle", "Arbetsmarknad"],
        mustKnow: ["Jordbruk till tjänster.", "Vikt av utbildning.", "Städernas växt."],
        summary: ["Förr: Jordbruk.", "Nu: Tjänster.", "Jobben kräver kunskap."],
        test: [{q: "Vad jobbade folk med förr?", a: "Jordbruk"}, {q: "Vart flyttade man?", a: "Städerna"}],
        reasoning: "Hur såg förfäders jobb ut?",
        application: "Fråga en vuxen om första jobbet."
      },
      {
        title: "B: Teknik & Robotar",
        page: "31–32",
        text: "Mekanisering (maskiner tar tunga lyft) och digitalisering (datorer styr) ändrar jobben. Robotar kan jobba dygnet runt. Nya jobb skapas för de som kan laga och styra tekniken.",
        concepts: ["Mekanisering", "Digitalisering", "Robotar"],
        mustKnow: ["Mekanisering vs digitalisering.", "Fördelar robotar.", "Nya typer av jobb."],
        summary: ["Tunga jobb försvinner.", "Teknik gör oss effektiva.", "Lärande behövs alltid."],
        test: [{q: "Vad är mekanisering?", a: "Maskiner tar över"}, {q: "När jobbar robotar?", a: "Dygnet runt"}],
        reasoning: "Kan robotar göra allt?",
        application: "Leta robot i vardagen."
      },
      {
        title: "C: Globalisering & AI",
        page: "33–34",
        text: "Globalisering: länder handlar över hela jorden. AI (artificiell intelligens) lär sig lösa problem. Används i sjukvården för diagnoser. Mänskliga yrken (empati) behövs fortfarande.",
        concepts: ["Globalisering", "AI", "Effektivitet"],
        mustKnow: ["Global handel.", "Vad AI är.", "AI i sjukvården."],
        summary: ["Världen samarbetar.", "Smarta program hjälper oss.", "Människor behövs för känslor."],
        test: [{q: "Vad är globalisering?", a: "Handel mellan länder"}, {q: "Var används AI?", a: "T.ex. sjukvård"}],
        reasoning: "Gör AI livet lättare?",
        application: "Hitta saker gjorda i andra länder."
      },
      {
        title: "D: Barn & Arbete",
        page: "40",
        text: "Arbetsmiljölagen skyddar barn i Sverige. Skolan går alltid först. Under 13 år: bara mycket lätta jobb med lov. 13-15 år: lätta extrajobb, inte natt. Barnarbete är förbjudet enligt FN.",
        concepts: ["Arbetsmiljölagen", "Barnarbete", "Barnkonventionen"],
        mustKnow: ["Regler för barnjobb.", "Skolan är viktigast.", "Föräldrars lov."],
        summary: ["Lagar skyddar barn.", "Inget farligt arbete.", "FN förbjuder barnarbete."],
        test: [{q: "Vilken lag skyddar barn?", a: "Arbetsmiljölagen"}, {q: "När får man jobba lätt?", a: "Under 13 år"}],
        reasoning: "Varför lagar för barn?",
        application: "Lista 3 säkra jobb för 13-åring."
      }
    ]
  }
];
