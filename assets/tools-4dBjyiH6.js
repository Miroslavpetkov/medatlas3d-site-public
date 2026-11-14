const c=`
hand-hygiene|🧼|Hand hygiene|Хигиена на ръцете|Alcohol rub or washing before touching the patient.|Дезинфекция или миене на ръцете преди контакт с пациента.|hands|1
gloves|🧤|Gloves|Ръкавици|Clean gloves protect you and the patient.|Чисти ръкавици пазят теб и пациента.|hands
sterile-gloves|🧤|Sterile gloves and gown|Стерилни ръкавици и престилка|Full sterile barrier for invasive procedures.|Пълна стерилна бариера при инвазивни процедури.|hands
consent|📝|Explain and get consent|Обясни и вземи съгласие|Tell the patient what will happen and why, and get agreement.|Обясни на пациента какво ще стане и защо и получи съгласие.|none|1
identify|🪪|Check patient identity|Провери самоличността|Name, date of birth and wristband match the order.|Име, дата на раждане и гривна съвпадат с назначението.|none|1
timeout|⏸️|Surgical time-out|Хирургичен тайм-аут|Team confirms patient, side, procedure and allergies.|Екипът потвърждава пациент, страна, процедура и алергии.|none|1
position|🛏️|Position the patient|Позиционирай пациента|Put the patient in the right position for the procedure.|Постави пациента в правилната позиция за процедурата.|none|1
landmarks|👆|Palpate landmarks|Опипай ориентирите|Find the bony and soft-tissue landmarks by touch.|Намери костните и мекотъканните ориентири с опипване.|hands|1
antiseptic|🧴|Antiseptic (chlorhexidine)|Антисептик (хлорхексидин)|Cleans the skin; let it dry for full effect.|Почиства кожата; изчакай да изсъхне за пълен ефект.|gauze
drape|🟦|Sterile drape|Стерилен чаршаф|Creates a sterile field around the site.|Създава стерилно поле около мястото.|none
lidocaine|💉|Local anaesthetic (lidocaine)|Локален анестетик (лидокаин)|Numbs skin and deeper tissue. Aspirate before injecting.|Обезболява кожата и по-дълбоките тъкани. Аспирирай преди инжектиране.|syringe
syringe|💉|Syringe|Спринцовка|For injecting or drawing fluid.|За инжектиране или изтегляне на течност.|syringe
needle|📍|Needle|Игла|Hollow needle for puncture.|Куха игла за пункция.|needle
scalpel|🔪|Scalpel|Скалпел|Blade for skin incision.|Острие за разрез на кожата.|scalpel
forceps|🥢|Forceps|Пинсета|Holds tissue gently.|Държи тъканите внимателно.|forceps
scissors|✂️|Scissors|Ножица|Cuts suture or tissue.|Реже конци или тъкан.|scissors
needle-holder|🪡|Needle holder and suture|Иглодържател и конец|Drives a curved needle through tissue.|Прекарва извита игла през тъканта.|holder
clamp|🗜️|Artery clamp|Кохер / артериална клампа|Clamps vessels or holds tubes.|Притиска съдове или държи тръби.|clamp
gauze|🩹|Gauze|Марля|Absorbs blood and fluid; applies pressure.|Попива кръв и течност; притиска.|gauze
dressing|🩹|Dressing|Превръзка|Covers and protects the wound or line.|Покрива и пази раната или катетъра.|gauze
tourniquet|🎗️|Tourniquet|Турникет (Есмарх)|Makes veins fill so they are easier to find.|Пълни вените, за да се виждат по-лесно.|tourniquet
cannula|🔹|IV cannula|Венозна канюла (абокат)|Plastic tube over a needle that stays in the vein.|Пластмасова тръбичка върху игла, която остава във вената.|cannula
flush|💧|Saline flush|Промивка с физиологичен разтвор|Checks the line is open and not leaking.|Проверява, че линията е проходима и не изтича.|syringe
vacutainer|🧪|Blood tubes (vacutainer)|Епруветки (вакутейнер)|Vacuum tubes in the correct order of draw.|Вакуумни епруветки в правилния ред на вземане.|bottle
ultrasound|📡|Ultrasound probe|Ехограф (сонда)|Shows vessels, fluid and needle in real time.|Показва съдове, течност и иглата в реално време.|probe
guidewire|〰️|Guidewire|Водач|Flexible wire for Seldinger technique.|Гъвкав водач за техниката на Селдингер.|wire
dilator|🔺|Dilator|Дилататор|Widens the track over the wire.|Разширява канала по водача.|cannula
cvc|🟨|Central venous catheter|Централен венозен катетър|Multi-lumen catheter into a large vein.|Многолуменен катетър в голяма вена.|catheter
xray|🩻|Chest X-ray|Рентген на гръдния кош|Confirms position and rules out pneumothorax.|Потвърждава позицията и изключва пневмоторакс.|none|1
stethoscope|🩺|Stethoscope|Стетоскоп|Listen to breath and heart sounds.|Слушай дишане и сърдечни тонове.|stetho
check-resp|🗣️|Check responsiveness|Провери реакцията|Shake the shoulders and shout.|Разтърси раменете и извикай.|hands|1
call-help|📞|Call for help / 112|Повикай помощ / 112|Get help and a defibrillator early.|Рано повикай помощ и дефибрилатор.|none|1
check-breath|👂|Check breathing (10 s)|Провери дишането (10 s)|Look, listen and feel for no more than 10 seconds.|Гледай, слушай и усещай не повече от 10 секунди.|none|1
open-airway|🙆|Head tilt, chin lift|Отвори дихателните пътища|Tilt the head back and lift the chin.|Наклони главата назад и повдигни брадичката.|hands|1
compressions|🫸|Chest compressions|Гръдни компресии|30 compressions, 5–6 cm deep, 100–120 per minute.|30 компресии, 5–6 cm дълбоко, 100–120 в минута.|hands|1
bvm|🫁|Bag-valve-mask|Амбу балон с маска|Gives breaths with oxygen.|Подава вдишвания с кислород.|bvm
aed|⚡|Defibrillator pads|Електроди на дефибрилатора|Pads: right below the clavicle and left side of the chest.|Електродите: под дясната ключица и отляво отстрани на гърдите.|pads
analyse|📈|Analyse rhythm|Анализ на ритъма|Pause compressions briefly while the rhythm is checked.|Кратка пауза на компресиите за проверка на ритъма.|none|1
shock|⚡|Deliver shock|Шок|Everyone clear, then press shock.|Всички настрана, след това натисни „шок“.|pads|1
sync-shock|⚡|Synchronised shock|Синхронизиран шок|Shock timed to the R wave (cardioversion).|Шок, синхронизиран с R-вълната (кардиоверсия).|pads|1
adrenaline|💉|Adrenaline 1 mg IV|Адреналин 1 mg IV|Vasopressor in cardiac arrest every 3–5 minutes.|Вазопресор при сърдечен арест на всеки 3–5 минути.|syringe
adrenaline-im|💉|Adrenaline 0.5 mg IM|Адреналин 0,5 mg IM|First-line in anaphylaxis, into the outer thigh.|Първо средство при анафилаксия, в бедрото отвън.|syringe
amiodarone|💉|Amiodarone 300 mg IV|Амиодарон 300 mg IV|Antiarrhythmic after the third shock.|Антиаритмик след третия шок.|syringe
atropine|💉|Atropine|Атропин|Speeds up a slow heart (vagal block).|Ускорява бавното сърце (блокира вагуса).|syringe
sedation|😴|Sedation|Седация|Short sedation before a painful procedure.|Кратка седация преди болезнена процедура.|syringe
oxygen|🫧|Oxygen mask|Кислородна маска|High-flow oxygen.|Кислород с висок поток.|mask
monitor|🖥️|Attach monitor|Включи монитор|ECG, blood pressure and saturation.|ЕКГ, кръвно налягане и сатурация.|electrode|1
iv-access|🔹|IV access|Венозен достъп|Secure a vein for drugs and fluids.|Осигури вена за лекарства и течности.|cannula|1
fluids|💧|IV fluids|Венозни течности|Crystalloid bolus for low blood pressure.|Кристалоиди болус при ниско кръвно налягане.|bag
preoxygenate|🫧|Pre-oxygenate|Преоксигенация|3 minutes of 100% oxygen before intubation.|3 минути 100% кислород преди интубация.|mask|1
induction|💉|Induction drugs|Индукция (анестетик + релаксант)|Hypnotic and muscle relaxant (rapid sequence).|Хипнотик и мускулен релаксант (бърза последователност).|syringe
laryngoscope|🔦|Laryngoscope|Ларингоскоп|Lifts the tongue to see the vocal cords.|Повдига езика, за да се видят гласните връзки.|laryngoscope
ett|🟢|Endotracheal tube|Ендотрахеална тръба|Tube through the cords into the trachea.|Тръба през гласните връзки в трахеята.|tube
cuff|🎈|Inflate cuff|Надуй балончето|Seals the trachea around the tube.|Уплътнява трахеята около тръбата.|syringe|1
capno|📉|Capnography|Капнография|Exhaled CO2 confirms the tube is in the trachea.|Издишаният CO2 потвърждава, че тръбата е в трахеята.|none|1
secure|📎|Secure the tube/line|Фиксирай тръбата/линията|Tie or stitch it so it cannot move.|Завържи или заший, за да не се измести.|none|1
spinal-needle|📍|Spinal needle|Спинална игла|Thin needle with a stylet for lumbar puncture.|Тънка игла със стилет за лумбална пункция.|needle
manometer|📏|Manometer|Манометър|Measures the opening CSF pressure.|Измерва началното налягане на ликвора.|tube
csf-tubes|🧪|Collect CSF|Вземи ликвор|Collect drops into numbered tubes.|Събери капки в номерирани епруветки.|bottle|1
chest-drain|🟡|Chest drain|Гръден дрен|Tube into the pleural space with an underwater seal.|Тръба в плевралната кухина с подводна клапа.|drain
blunt-dissect|🖐️|Blunt dissection|Тъпа дисекция|Spread tissue with forceps over the rib, finger sweep.|Раздели тъканите с пинсета над ребро, опипай с пръст.|clamp|1
underwater|🫙|Underwater seal bottle|Подводен дренаж (буркан)|Lets air and fluid out but not back in.|Пуска въздух и течност навън, но не обратно.|bottle
aspirate|⬆️|Aspirate|Аспирирай|Pull back on the syringe to check what you are in.|Изтегли буталото, за да провериш къде си.|syringe|1
catheter-u|🟠|Urinary catheter|Уринарен катетър|Foley catheter with a balloon.|Катетър на Фоли с балонче.|catheter
lube|🧴|Anaesthetic gel|Анестетичен гел|Lubricates and numbs the urethra.|Овлажнява и обезболява уретрата.|syringe
balloon|🎈|Inflate balloon (10 ml water)|Надуй балончето (10 ml вода)|Only after urine flows.|Само след като потече урина.|syringe|1
urine-bag|🛍️|Drainage bag|Торба за урина|Hangs below bladder level.|Окачва се под нивото на пикочния мехур.|bag
irrigate|💧|Irrigate the wound|Промий раната|Saline washes out dirt and bacteria.|Физиологичният разтвор отмива замърсяване и бактерии.|syringe|1
explore|🔍|Explore the wound|Огледай раната|Check depth, foreign bodies, tendons and nerves.|Провери дълбочина, чужди тела, сухожилия и нерви.|forceps|1
tie|🪢|Tie knots|Вържи възли|Instrument tie, three throws.|Инструментален възел, три хвърляния.|holder|1
abg-syringe|💉|Heparinised syringe|Хепаринизирана спринцовка|For arterial blood gas.|За артериални кръвни газове.|syringe
allen|✋|Allen test|Тест на Ален|Checks the ulnar artery supplies the hand.|Проверява дали лакътната артерия кръвоснабдява ръката.|hands|1
pressure|🤚|Firm pressure 5 min|Силен натиск 5 min|Stops bleeding from an artery puncture.|Спира кървенето след артериална пункция.|gauze|1
electrodes|🔴|ECG electrodes|ЕКГ електроди|Sticky pads for the leads.|Лепящи електроди за отвежданията.|electrode
limb-leads|🔴|Limb leads|Крайникови отвеждания|RA, LA, RL, LL on wrists and ankles.|RA, LA, RL, LL на китките и глезените.|electrode|1
chest-leads|🟣|Chest leads V1–V6|Гръдни отвеждания V1–V6|V1 4th space right of sternum … V6 mid-axillary.|V1 IV междуребрие вдясно от гръдната кост … V6 средна аксиларна линия.|electrode|1
record|🖨️|Record ECG|Запиши ЕКГ|Patient still and relaxed.|Пациентът е неподвижен и отпуснат.|none|1
anticoag|💊|Anticoagulation|Антикоагулация|Prevents stroke from clots in AF.|Предпазва от инсулт от тромби при ПМ.|syringe
sheath|🔹|Introducer sheath|Интродюсер (шийт)|Port into the vein for leads.|Порт във вената за електродите.|cannula
lead|〰️|Pacing lead|Електрод за пейсинг|Wire with a screw tip into the heart muscle.|Проводник с винтов връх в сърдечния мускул.|wire
fluoro|🩻|Fluoroscopy|Рентгеноскопия|Live X-ray to steer wires.|Рентгеново изображение на живо за насочване.|none|1
test-lead|📊|Test the lead|Тествай електрода|Threshold, sensing and impedance.|Праг, сензинг и импеданс.|none|1
generator|🔋|Pulse generator|Пейсмейкър (генератор)|Battery and electronics in a skin pocket.|Батерия и електроника в джоб под кожата.|none
pocket|🔪|Create pocket|Направи джоб|Below the clavicle, above the muscle fascia.|Под ключицата, над мускулната фасция.|scalpel|1
peri-needle|📍|Pericardiocentesis needle|Игла за перикардиоцентеза|Long needle under the xiphoid, towards the left shoulder.|Дълга игла под мечовидния израстък към лявото рамо.|needle
pigtail|🌀|Pigtail drain|Пигтейл дрен|Curled catheter left in the pericardium.|Извит катетър, оставен в перикарда.|catheter
trocar|🔩|Trocar ports|Троакари|Ports for camera and instruments.|Портове за камерата и инструментите.|trocar
insufflate|🫧|CO2 insufflation|Инсуфлация на CO2|Inflates the abdomen to 12–15 mmHg.|Надува корема до 12–15 mmHg.|none|1
laparoscope|📹|Laparoscope|Лапароскоп|Camera with light.|Камера със светлина.|scope
grasper|🥢|Grasper|Граспер|Laparoscopic forceps.|Лапароскопска пинсета.|forceps
clip|📎|Clip applier|Клипс апликатор|Places metal clips on ducts and arteries.|Поставя метални клипсове на канали и артерии.|clip
cautery|⚡|Diathermy hook|Диатермия (кука)|Cuts and seals tissue with heat.|Реже и запечатва тъкан с топлина.|cautery
endoloop|➰|Endoloop|Ендоприм|Pre-tied loop for the appendix base.|Готова примка за основата на апендикса.|wire
endobag|🛍️|Retrieval bag|Торбичка за изваждане|Removes the organ without spilling.|Изважда органа, без да се разлее.|bag
close|🪡|Close the wounds|Затвори раните|Fascia and skin sutures.|Шевове на фасцията и кожата.|holder|1
arthroscope|📹|Arthroscope|Артроскоп|4 mm camera into the joint.|4 mm камера в ставата.|scope
probe-hook|🪝|Probe hook|Сонда (кукичка)|Feels and lifts meniscus tears.|Опипва и повдига разкъсвания на менискуса.|probe
drill|🪛|Bone drill|Костна бормашина|Drills holes for screws and wires.|Пробива отвори за винтове и игли.|drill
shaver|🌀|Shaver|Шейвър|Trims torn tissue.|Изрязва разкъсаната тъкан.|drill
punch|✂️|Basket punch|Щипка (пънч)|Bites away the unstable flap.|Отхапва нестабилното ламбо.|scissors
traction|💪|Traction–countertraction|Тракция–контратракция|Gentle steady pull in line with the limb.|Плавно постоянно дърпане по оста на крайника.|hands|1
reduce|🔄|Reduction manoeuvre|Маньовър за наместване|External rotation, then gentle lift.|Външна ротация, след това леко повдигане.|hands|1
nv-check|✅|Neurovascular check|Невро-съдова проверка|Pulse, colour, sensation and movement.|Пулс, цвят, чувствителност и движение.|hands|1
sling|🎗️|Sling|Превръзка за рамо (ортеза)|Rest after reduction.|Покой след наместване.|none
padding|🧻|Padding and stockinette|Подложка и чорап|Protects skin and bony points under the cast.|Пази кожата и костните издатини под гипса.|cast
plaster|🧱|Plaster cast|Гипсова лонгета|Moulded to hold the fracture.|Моделира се, за да държи счупването.|cast
mould|👐|Mould three-point|Моделирай с 3 точки|Three-point pressure keeps the reduction.|Натиск в три точки задържа наместването.|hands|1
speculum|🔧|Lid speculum|Блефаростат|Keeps the eyelids open.|Държи клепачите отворени.|retractor
eye-drops|💧|Anaesthetic drops|Анестетични капки|Topical anaesthesia of the eye.|Локална упойка на окото.|bottle
keratome|🔪|Keratome|Кератом|Makes the 2.2 mm corneal incision.|Прави 2,2 mm разрез на роговицата.|scalpel
ovd|💧|Viscoelastic (OVD)|Вискоеластик (OVD)|Protects the corneal endothelium, deepens the chamber.|Пази ендотела, задълбочава камерата.|syringe
capsulorhexis|⭕|Capsulorhexis|Капсулорексис|Round tear in the front of the lens capsule.|Кръгло отваряне на предната капсула на лещата.|forceps|1
phaco|🌀|Phaco probe|Факоемулсификатор|Ultrasound breaks up and sucks out the cloudy lens.|Ултразвук разбива и изсмуква мътната леща.|probe
ia|🧹|Irrigation–aspiration|Иригация–аспирация|Removes the soft cortex.|Отстранява мекия кортекс.|probe
iol|👁️|Lens implant (IOL)|Изкуствена леща (ИОЛ)|Folded lens unfolds in the capsule bag.|Сгъната леща, която се разгъва в капсулата.|gun
mirror|🪞|Dental mirror|Дентално огледало|Indirect view and retraction.|Индиректен изглед и отдръпване.|mirror
explorer|🪝|Explorer|Сонда|Checks for soft, carious dentin.|Проверява за мек, кариозен дентин.|probe
anaesthetic-carpule|💉|Dental anaesthetic|Дентална анестезия|Articaine or lidocaine with adrenaline.|Артикаин или лидокаин с адреналин.|syringe
rubber-dam|🟩|Rubber dam|Кофердам|Isolates the tooth from saliva.|Изолира зъба от слюнката.|none
bur|🌀|High-speed bur|Турбина (борер)|Removes enamel and decay with water spray.|Отнема емайл и кариес с водно охлаждане.|bur
etch|🧪|Etch 37%|Ецване 37%|Phosphoric acid roughens enamel for bonding.|Фосфорна киселина награпява емайла за бондинг.|syringe
bond|🖌️|Bonding agent|Бонд|Adhesive layer, light-cured.|Адхезивен слой, полимеризира се със светлина.|probe
composite|🦷|Composite resin|Композит|Tooth-coloured filling in 2 mm layers.|Фотополимер на слоеве по 2 mm.|probe
curing-light|💡|Curing light|Фотополимеризираща лампа|Blue light hardens the resin.|Синята светлина втвърдява материала.|light
polish|✨|Shape and polish|Оформи и полирай|Check the bite with articulating paper.|Провери захапката с артикулационна хартия.|bur|1
files|〰️|Endodontic files|Ендодонтски пили|Clean and shape the canals.|Почистват и оформят каналите.|file
apex-locator|📟|Apex locator|Апекслокатор|Measures working length electronically.|Измерва работната дължина електронно.|none
naocl|💧|Sodium hypochlorite|Натриев хипохлорит|Disinfects and dissolves pulp tissue.|Дезинфекцира и разтваря пулпната тъкан.|syringe
paper-points|📄|Paper points|Хартиени щифтове|Dry the canals.|Подсушават каналите.|file
gutta|🟧|Gutta-percha and sealer|Гутаперча и силър|Fills and seals the canals.|Запълва и запечатва каналите.|file
elevator|🔧|Elevator|Елеватор (лост)|Loosens the tooth from its socket.|Разклаща зъба от алвеолата.|elevator
ext-forceps|🦷|Extraction forceps|Клещи за екстракция|Grip the root and rotate or rock out.|Хващат корена и с ротация или люлеене го изваждат.|forceps
bite-gauze|🩹|Bite on gauze|Захапи марля|Pressure for 30 minutes to form a clot.|Натиск 30 минути, за да се образува съсирек.|gauze|1
ct-head|🧠|CT head|КТ на главата|Rules out bleeding before thrombolysis.|Изключва кръвоизлив преди тромболиза.|none|1
glucose|🩸|Check glucose|Провери кръвната захар|Hypoglycaemia can mimic stroke.|Хипогликемията може да наподобява инсулт.|none|1
nihss|📋|NIHSS score|Скала NIHSS|Grades stroke severity.|Оценява тежестта на инсулта.|none|1
alteplase|💉|Alteplase (tPA)|Алтеплаза (tPA)|Dissolves the clot within 4.5 hours.|Разтваря тромба до 4,5 часа.|syringe
thrombectomy|🧲|Thrombectomy|Тромбектомия|Catheter pulls out a large-vessel clot.|Катетър изважда тромба от голям съд.|catheter
aspirin|💊|Aspirin 300 mg|Аспирин 300 mg|Antiplatelet loading dose.|Антиагрегант, натоварваща доза.|none
back-blows|🤚|5 back blows|5 удара по гърба|Between the shoulder blades, leaning forward.|Между лопатките, при наведен напред пациент.|hands|1
abd-thrusts|🫴|5 abdominal thrusts|5 коремни тласъка|Heimlich: fist above the navel, in and up.|Хаймлих: юмрук над пъпа, навътре и нагоре.|hands|1
encourage-cough|🗣️|Encourage coughing|Насърчи кашляне|While the cough is effective.|Докато кашлицата е ефективна.|none|1
remove-trigger|🚫|Remove the trigger|Премахни причината|Stop the drug or infusion that caused it.|Спри лекарството или инфузията, която е причина.|none|1
legs-up|🦵|Lie flat, legs up|Легнал, крака нагоре|Helps blood return to the heart.|Помага на кръвта да се върне към сърцето.|none|1
antihistamine|💊|Antihistamine|Антихистамин|Second-line, for itch and hives.|Второ средство, за сърбеж и уртики.|syringe
steroid|💊|Hydrocortisone|Хидрокортизон|Helps prevent a late reaction.|Помага да се предотврати късна реакция.|syringe
salbutamol|🌬️|Salbutamol nebuliser|Салбутамол (инхалация)|Opens narrowed airways.|Разширява стеснените бронхи.|mask
ctg|📈|CTG monitoring|КТГ мониториране|Fetal heart rate and contractions.|Сърдечна честота на плода и контракции.|electrode|1
deliver-head|👶|Control the head|Контролирай главата|Slow, flexed delivery of the head.|Бавно, флектирано раждане на главата.|hands|1
check-cord|🔍|Check for cord around neck|Провери за пъпна връв около врата|Slip it over the head if loose.|Ако е хлабава, плъзни я над главата.|hands|1
shoulders|🤲|Deliver the shoulders|Изведи раменете|Gentle downward then upward traction.|Леко надолу, после нагоре.|hands|1
oxytocin|💉|Oxytocin 10 IU IM|Окситоцин 10 IU IM|Active third stage, prevents bleeding.|Активно трето време, предотвратява кървене.|syringe
clamp-cord|🗜️|Clamp and cut the cord|Клампирай и среж пъпната връв|After 1–3 minutes (delayed clamping).|След 1–3 минути (отложено клампиране).|clamp|1
placenta|🫀|Deliver the placenta|Изведи плацентата|Controlled cord traction, check it is complete.|Контролирана тракция, провери че е цяла.|hands|1
dry-baby|🧣|Dry and warm the baby|Подсуши и стопли бебето|Skin-to-skin, check breathing and tone.|Кожа до кожа, провери дишането и тонуса.|gauze|1
apgar|📋|APGAR score|Оценка по Апгар|At 1 and 5 minutes.|На 1-ва и 5-а минута.|none|1
spacer|🌬️|Inhaler with spacer|Инхалатор със спейсър|Puff into spacer, slow breaths.|Впръскване в спейсъра, бавни вдишвания.|mask|1
peak-flow|📏|Peak flow|Пикфлоуметрия|Measures how open the airways are.|Измерва колко са отворени дихателните пътища.|tube|1
magnesium|💉|Magnesium IV|Магнезий IV|For severe asthma not responding.|При тежка астма без отговор.|syringe
topical-gel|🧴|Topical anaesthetic gel|Повърхностна упойка (гел)|Numbs the mucosa so the needle itself is not felt.|Обезболява лигавицата, за да не се усети самата игла.|gauze
check-numb|👅|Check the numbness|Провери изтръпването|Ask about the lip and test the gum before starting.|Попитай за устната и изпробвай венеца, преди да започнеш.|probe|1
cbct|🩻|CBCT scan|КТ с конусен лъч|3D image of the bone: height, width and where the nerve runs.|3D образ на костта: височина, ширина и къде минава нервът.|none
flap|🔪|Raise a mucoperiosteal flap|Отпрепарирай ламбо|Lift the gum off the bone to see the ridge.|Повдигни венеца от костта, за да видиш гребена.|scalpel
pilot-drill|🛠️|Pilot drill|Пилотен борер|First narrow hole, with cooling and at low speed.|Първи тесен отвор, с охлаждане и на ниски обороти.|drill
implant|🔩|Titanium implant|Титаниев имплант|Screwed into the prepared site at controlled torque.|Завинтва се в подготвеното легло с контролиран въртящ момент.|drill
cover-screw|⚙️|Cover screw|Покривен винт|Closes the implant while the bone heals around it.|Затваря импланта, докато костта зараства около него.|clip
perio-probe|📏|Periodontal probe|Пародонтална сонда|Measures the depth of the pocket around every tooth.|Измерва дълбочината на джоба около всеки зъб.|probe
scaler|🧽|Ultrasonic scaler|Ултразвуков скалер|Vibration plus water washes hard deposits off the tooth.|Вибрация плюс вода отмиват твърдите отлагания от зъба.|drill
curette|🥄|Curette|Кюрета|Cleans the root surface under the gum by hand.|Почиства кореновата повърхност под венеца на ръка.|elevator
oral-hygiene|🪥|Teach brushing and flossing|Обучение по хигиена|Without daily cleaning the deposits come straight back.|Без ежедневно почистване отлаганията се връщат веднага.|none|1
glucose-test|🩸|Capillary blood glucose|Кръвна захар от пръст|One drop of blood gives the answer in seconds.|Капка кръв дава отговора за секунди.|needle|1
glucose-iv|🍬|IV glucose|Венозна глюкоза|Concentrated glucose into a vein when swallowing is unsafe.|Концентрирана глюкоза венозно, когато гълтането е опасно.|syringe
glucagon|💉|Glucagon IM|Глюкагон мускулно|Releases glucose from the liver when there is no IV line.|Освобождава глюкоза от черния дроб, когато няма венозен път.|syringe
food|🥪|Long-acting carbohydrate|Бавни въглехидрати|A sandwich or similar, so the sugar does not fall again.|Сандвич или подобно, за да не падне захарта пак.|none|1
recovery|↩️|Recovery position|Странично положение|Keeps the airway open in someone not fully awake.|Държи дихателния път отворен при човек, който не е напълно буден.|none|1
seizure-time|⏱️|Time the seizure|Засечи времето|Note the start: five minutes changes the treatment.|Отбележи началото: пет минути променят лечението.|none|1
protect-head|🛡️|Protect the head|Пази главата|Something soft under it; never restrain the limbs.|Нещо меко под нея; никога не задържай крайниците.|hands|1
benzo|💉|Benzodiazepine|Бензодиазепин|First-line: stops most seizures within minutes.|Първа линия: спира повечето гърчове за минути.|syringe
antiseizure|💊|Second-line antiseizure drug|Второлинейно противогърчово|Levetiracetam, valproate or phenytoin by infusion.|Леветирацетам, валпроат или фенитоин на инфузия.|bag
naloxone|💉|Naloxone|Налоксон|Reverses opioids in minutes; shorter-acting than they are.|Обръща действието на опиоидите за минути; действа по-кратко от тях.|syringe
blood-cultures|🧪|Blood cultures|Хемокултури|Taken before antibiotics, or the growth is lost.|Вземат се преди антибиотика, иначе културата не хваща.|vacutainer
antibiotics|💊|IV antibiotics|Венозни антибиотици|Broad spectrum, within the first hour.|Широк спектър, в рамките на първия час.|bag
lactate|🧪|Lactate|Лактат|How badly the tissues are starved of oxygen.|Колко зле тъканите са лишени от кислород.|vacutainer
urine-output|📏|Measure urine output|Измери диурезата|Hourly urine shows whether the kidneys are being perfused.|Часовата диуреза показва дали бъбреците се кръвоснабдяват.|catheter|1
ng-tube|〰️|Nasogastric tube|Назогастрална сонда|A soft tube through the nose into the stomach.|Мека сонда през носа до стомаха.|tube
measure-ng|📏|Measure the length|Измери дължината|Nose to ear to xiphoid: the mark that says how far to go.|Нос до ухо до мечовидния израстък: белегът докъде да влезе.|none|1
confirm-ng|🩻|Confirm the position|Потвърди позицията|Aspirate with pH ≤ 5.5, or an X-ray before anything is given.|Аспират с pH ≤ 5,5 или рентген, преди да се влее каквото и да е.|none|1
uterine-massage|✋|Rub up the uterus|Масаж на матката|A firm rub makes the muscle contract and squeeze the vessels shut.|Енергичен масаж кара мускула да се съкрати и да затвори съдовете.|hands|1
txa|💉|Tranexamic acid|Транексамова киселина|Given within three hours, it lowers deaths from bleeding.|Дадена до три часа, намалява смъртността от кървене.|syringe
bimanual|🤲|Bimanual compression|Бимануална компресия|One hand inside, one on the abdomen, pressing the uterus between them.|Една ръка вътре, една на корема, матката се притиска между тях.|hands|1
empty-bladder|🚽|Empty the bladder|Изпразни мехура|A full bladder stops the uterus contracting.|Пълният мехур пречи на матката да се съкрати.|catheter|1
needle-decomp|📍|Needle decompression|Иглена декомпресия|A large-bore cannula into the pleural space lets the trapped air out.|Широка канюла в плевралното пространство изпуска затворения въздух.|cannula
ketones|🧪|Blood ketones|Кетони в кръвта|Capillary β-hydroxybutyrate: the number that drives DKA treatment.|Капилярен β-хидроксибутират: числото, което води лечението на ДКА.|needle
vbg|🧪|Venous blood gas|Венозен кръвно-газов анализ|pH, bicarbonate and potassium in minutes.|pH, бикарбонат и калий за минути.|vacutainer
insulin-infusion|💧|Fixed-rate insulin infusion|Инсулин с фиксирана скорост|0.1 unit/kg/hour IV until the ketones clear.|0,1 единици/kg/час венозно до изчистване на кетоните.|syringe
potassium|💧|Potassium in the fluids|Калий в инфузията|Insulin drives potassium into cells; replace it before it falls.|Инсулинът вкарва калия в клетките; замести го, преди да падне.|bag
glucose-10|💧|10% glucose infusion|10% глюкоза на инфузия|Added when glucose falls, so insulin can keep clearing ketones.|Добавя се, когато захарта спадне, за да може инсулинът да продължи да изчиства кетоните.|bag
bicarbonate|💉|Sodium bicarbonate|Натриев бикарбонат|Rarely helps in DKA and can harm.|Рядко помага при ДКА и може да навреди.|syringe
c-collar|🦴|Cervical spine protection|Защита на шийния гръбнак|Manual in-line stabilisation or a collar until the spine is cleared.|Ръчна стабилизация по оста или яка, докато гръбнакът бъде изчистен.|hands|1
pelvic-binder|🩹|Pelvic binder|Тазов колан|Closes an open-book pelvis and slows the bleeding inside it.|Затваря „отворената книга“ на таза и намалява кървенето в него.|none
blood|🩸|Blood products (1:1:1)|Кръвни продукти (1:1:1)|Red cells, plasma and platelets instead of litres of saline.|Еритроцити, плазма и тромбоцити вместо литри физиологичен разтвор.|bag
fast|🔊|FAST ultrasound|FAST ехография|Free fluid around the liver, spleen, bladder or heart means bleeding.|Свободна течност около черния дроб, слезката, пикочния мехур или сърцето означава кървене.|probe|1
gcs|🧠|GCS and pupils|ГКС и зеници|Eyes, voice and movement scored, and both pupils checked.|Оценка на очите, говора и движенията и проверка на двете зеници.|light|1
log-roll|🔄|Log roll and look|Обръщане по оста и оглед|Turn with the spine in line and examine the back.|Обръщане с гръбнака по оста и оглед на гърба.|hands|1
warm|🔥|Keep warm|Затопли|Blankets and warm fluids: cold blood does not clot.|Одеяла и топли течности: студената кръв не се съсирва.|none|1
cat-tourniquet|🛑|Haemorrhage tourniquet|Кръвоспиращ турникет|Windlass tourniquet above the wound: stops arterial bleeding from a limb.|Турникет с макара над раната: спира артериално кървене от крайник.|tourniquet
`,n={};for(const t of c.trim().split(`
`)){const[e,a,o,r,s,i,l,h]=t.split("|");n[e]={id:e,icon:a,name:{en:o,bg:r},desc:{en:s,bg:i},model:l,act:h==="1"}}const d=t=>{const e=n[t];if(!e)throw new Error("Unknown tool "+t);return e};export{n as TOOLS,d as tool};
