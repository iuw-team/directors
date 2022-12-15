import {
	LOCALES
} from './locales';
import {
	IconType 
} from '../modules/Services';

export const messages = {
	[LOCALES.ENGLISH]:{
		langOption: "Chosen language",
		galleryTitle: 'The most famous works of the author',
		mainTitle: 'Main',
		teamTitle: 'Our team',
		articlesTitle: 'Directors',
		timelineTitle: 'Common bibliographic information',
		mapTitle:  'The map of activities',
		workSample: "The sample of author's work",
		articleAbout: 'About the author',
		searchButton: 'Search',
		nextButton: 'Next',
		prevButton: 'Prev',
		dayAuthorTitle: 'Author of the moment',
		about_us: 'About project',
		about_us_info: 'Of all the arts, cinema is the most important for us...', 
		about_us_source: 'Vladimir Ilyich Lenin',
		articlePreInfo: [
			'Yuriy Viktorovich Tarich (real name Alekseev; Belarusian Yury Viktaravich Tarych; January 12, 1885, Plotsk, Russian Empire - February 21, 1967, Moscow, USSR) — Soviet film director and screenwriter. Honored Artist of the RSFSR (1935) and the BSSR. In 1925, he made his debut as a director with productions of the films Moroka (together with E. Ivanov-Barkov) and First Lights. He worked in Leningrad, including at the film factory "Savetskaya Belarus" of the trust "Belgoskino" located there from 1928 to 1939. He is one of the founders of Belarusian cinematography. ',
		' Dmitry Iosifov was born on October 22, 1965 in Minsk in the family of an engineer and a biologist. The older and younger brothers Andrey (b. 1963) and Nikolai (b. 1977) are now working as programmers. At the age of 9, he was noticed by the assistant director of the Belarusfilm studio and approved for the role of Pinocchio in the film The Adventures of Pinocchio, which glorified the boy (initially Dmitry auditioned for Harlequin). After the film, the offers to shoot began to come to him one after another.',
		'Nikita Georgievich Khubov (April 25, 1936 - November 25, 2018) - Soviet and Russian film director, screenwriter and cameraman, Honored Artist of the Russian Federation (2000). He studied at the Moscow Polygraphic Institute. In 1963 he graduated from the camera department of VGIK (workshop of B. I. Volchek). He began his creative career in cinema as one of the operators of Richard Viktorov\'s film The Third Rocket, after which he was for some time a cameraman and director of documentaries in Minsk at the Belarusfilm studio, as well as on Central Television. Later, from 1972, he began working at the M. Gorky film studio, where he staged his films. Co-writer of most of his own films. ',
		'Elkhov Yury Alexandrovich (December 7, 1940, Moscow, Russia), director, cameraman, screenwriter. Graduated from the Chimkent Polytechnic (1960) and VGIK (1970). He worked for the film studio "Kazakhfilm". Since 1971 - at the movie theater "Belarusfilm" as a cameraman, since 1988 - and as a director. Film director of feature and television films of the highest category. Cinematographer of feature and television films of the highest category. Screenwriter of feature and documentary films.',
		'Margarita Naimovna Kasymova (Tajik: Marvorid Kosimova; born April 10, 1938, Stalinabad, Tajik SSR, now Dushanbe, Tajikistan) is a Soviet, Belarusian and Tajik film actress, film director and screenwriter. Honored Artist of the Tajik SSR (1976).'
			],
		authorName: ['Yuri Viktorovich Tarich', 'Dmitry Vladimirovich Iosifov', 'Nikita Georghievich Khubov', 'Yuri Alexandrovich Elkhov', 'Margarita Naimovna Kasymova'],
		birthDateTitle: 'Date of birth',
		birthDate: ['January 24, 1885', 'October 22, 1965', 'April 25, 1936', 'December 7, 1940', 'April 10, 1938'],
		deathDateTitle: 'Date of death',
		deathDate: ['February 21, 1967', '-', 'November 25, 2018', '-', '-'],
		common_info: [
			'Film director, screenwriter', 'Film director, actor', 'Film director, screen writer, film producer, cinematographer', 'Film director, cinematographer', 'Actress, film director, screen writer'
		],
		far_jump: 'View',
		teamMembers: [
		{name: 'Shlyk Pavel', info: 'Positive traits in Pavel\'s character are reliability, kindness, tenderness, affection. Paul\'s character is harmonious. It combines intelligence, sociability and high morality. Paul also has a developed intuition. He is inquisitive. ', link: 'https://github.com/Paval-from-Belarus'},
		{name: 'Malyavko Nikita', info: 'Nikita is an absolute leader who doesn\'t recognize authorities and is able to lead people. He knows how to use his charm and cannot stand superiority over himself. Outwardly, the soul of the company also turned on, he may seem soft, but inside he is a hard and even heavy person.', link: 'https://github.com/Katletos'},
		{name: 'Malinovsky Andrey', info: 'Andrey, this is a person who knows how to admit mistakes and easily accepts someone else\'s opinion, because he does not like conflict situations and manifestations of aggression. Able to think philosophically, excellent listener and adviser, excellent assistant.', link: 'https://github.com/tpouhuk'}], //UPDATE!!
		profTitle: 'Occupation',
		profType: ['Film director, writer', 'Film director, actor', 'Film director, screenwriter, film producer, cinematographer', 'Film direction, cinematographer, screenwriter, film producer', 'Actress, film director, screenwriter'],
		gallery: [
			['Tale of the woods', 'The Captain\'s Daughter', 'Tsogt taij', 'Bulat-Batir', 'The Wings of a Serf'], //first author
			['The Summer of Wolves', 'Passing personality', 'Ekaterina (TV series)', 'Saboteur 3: Crimea', 'Elizabeth (TV series)'], //second author
			['Trade a dog for a locomotive', 'The Traitor', 'Squadron of Flying Hussars', 'The Fatal Mistae', 'The Bracelet Game'], //third author
			['Cat Killer Silver', 'Forgive us, stepmother Russia', 'Anomaly', 'Anastasia Slutskaya'], //fourth author
			['Summer 1943', 'Weavers', 'And happiness is near', 'Today and forever', 'Where the dinosaur\'s trail led'] // fifth author
		],

		mapInfo: [
			['Film factory "Soviet Belarus"' , 'Museum of Belarusian cinema', 'Studio "Belarusfilm"'],
			['Film Factory "Savetskaya Belarus"', 'Museum of Belarusian Cinematography', 'Studio "Belarusfilm"'],
			['Film Factory "Savetskaya Belarus"', 'Museum of Belarusian Cinematography', 'Studio "Belarusfilm"'],
			['Film Factory "Savetskaya Belarus"', 'Museum of Belarusian Cinematography', 'Studio "Belarusfilm"'],
			['Film Factory "Savetskaya Belarus"', 'Museum of Belarusian Cinematography', 'Studio "Belarusfilm"'],
		],
		timelineInfo: [
			[{date: 'January 24, 1885', icon: IconType.Birth, title: 'Birth', subtitle:'', info: 'Born in Polock', },
				{date: '1903 - 1905', icon: IconType.Student, title: 'Education', subtitle:'', info: 'Studied at the Faculty of Law of Moscow University'},
				{date: '1906', icon: IconType.Weapon, title: 'Link', subtitle:'', info: 'Exiled to Siberia for revolutionary propaganda'},
				{date: '1917', icon: IconType.Theater, title: 'Theatrical Beginnings', subtitle:'', info: 'Playing on Stages of the Theater of the Revolution'},
				{date: '1925', icon: IconType.Camera, title: 'Directorial debut', subtitle:'', info: 'First films "Moraka" and "First Lights" filmed'},
				{date: '1928 - 1939', icon: IconType.Award, title: 'The Birth of Belarusian Cinematography', subtitle:'', info: 'Created the first Belarusian sound film program "Coup"'},
				{date: '1945 - 1967', icon: IconType.Moscow, title: 'Moscow Period', subtitle:'', info: 'Actively advises the scenario department of the Soyuzdetfilm film studio. He served as director of the Theater-studio of a film actor.'},
				{date: '1961 - 1967', icon: IconType.Commitment, title: 'Later Years', subtitle:'', info: 'He heads the studio of young filmmakers "Tales of Youth", actively collaborates with Belarusfilm in the filming of popular science and artistic and documentary essays.'},
				{date: '1967', icon: IconType.Monument, title: 'Death', subtitle:'', info: 'The great director died at the age of 82. He was buried in Moscow at the Vagankovsky cemetery.'},
			],
			// Dmitry
			[{date: 'October 22, 1965', icon: IconType.Birth, title: 'Birth', subtitle:'', info: 'Dmitry Iosifov was born on October 22, 1965 in Minsk in the family of an engineer and a biologist. The older and younger brothers Andrey (b. 1963) and Nikolai (b. 1977) are now working as programmers. which glorified the boy (initially Dmitry auditioned for Harlequin). After the film, film offers began to come to him one after another.', },
				{date: '1977', icon: IconType.Student, title: 'Education', subtitle:'', info: 'After graduating from school, Dmitry entered VGIK, where he studied at the course of Alexei Batalov. After graduating from VGIK, Iosifov was assigned to Minsk, where he worked in the Minsk theater-studio of a film actor. At that time, he starred a lot at various film studios, but most of all he played roles in the films of the Lenfilm studio. At the same time, he studied directing at the film department of the Belarusian State Academy of Arts (workshop of V. Turov). '},
				{date: '1990', icon: IconType.Theater, title: 'Theatrical beginnings', subtitle:'', info: 'In the late 1990s he returned to Moscow, where he began his career as a director.'},
				{date: '2009', icon: IconType.Camera, title: 'Directorial debut', subtitle:'', info: 'As of 2009, he has directed about forty commercials (Tefal, Panasonic, Dilmah). '},
				{date: '2009', icon: IconType.Commitment, title: 'Later Years', subtitle:'', info: 'Andrey Iosifov has been working as a cameraman on various television series since 2009. '},
			],
			// Nikita
			[
				{
					date: 'April 25, 1936',
					icon: IconType.Birth,
					title: 'Birth',
					subtitle:'',
					info: 'Born April 25, 1936 in Moscow. The son of musicologist, Honored Art Worker of the RSFSR Georgy Khubov (1902-1981) and translator Revekka Galperina (1902-1976). Grandson of the writer Menashe Galpern. ',
				},
				{
					date: '1963',
					icon: IconType.Student,
					title: 'Training',
					subtitle:'',
					info: 'Studied at the Moscow Polygraphic Institute. In 1963 he graduated from the camera department of VGIK (workshop of B. I. Volchek).',
				},
				{
					date: '1963',
					icon: IconType.Theater,
					title: 'Creative path to cinema',
					subtitle:'',
					info: 'He started his career in cinema as one of the operators of Richard Viktorov\'s film "The Third Rocket", after which he was for some time a cameraman and director of documentary films in Minsk at the Belarusfilm studio, as well as on Central Television. Later, from 1972, he began working at the M. Gorky film studio, where he staged his films. Co-writer of most of his own films.'
				},
				{
					date: '1964',
					icon: IconType.Award,
					title: 'First Award',
					subtitle: '',
					info: 'Diploma of the IV Film Festival of the Baltic and Belorussian Republics (Minsk, 1964) - for the film "The Third Rocket" (together with Andrey Kirillov)',
				},
				{
					date: '2000',
					icon: IconType.Award,
					title: 'Merit',
					subtitle: '',
					info: 'Honored Artist of the Russian Federation (2000) - for services in the field of art.'
				},
				{
					date: 'November 25, 1936',
					icon: IconType.Monument,
					title: 'End',
					subtitle:'',
					info: 'Buried at the Armenian cemetery.'
				},
			],
			// Yuri
			[
				{
					date: 'December 7, 1940',
					icon: IconType.Birth,
					title: 'Birth',
					subtitle:'',
					info: 'December 7, 1940 was born in Moscow.',
				},
				{
					date: '1989',
					icon: IconType.Camera,
					title: 'Cat killer Silver',
					subtitle:'',
					info: 'The film Koshkodav Silver is coming out, where the director and screenwriter is Yuri Aleksandrovich Elkhov.',
				},
				{
					date: '1989',
					icon: IconType.Award,
					title: 'Awards for the director\'s work in the film "Catdog Silver"',
					subtitle:'',
					info: 'Award of the International Film Festival (Leeds, England, 1989). Diploma for the best cinematography at the Minsk Film Festival in 1989.',
				},
				{
					date: '1990',
					icon: IconType.Camera,
					title: 'Forgive Us, Stepmother Russia',
					subtitle:'',
					info: 'Forgive us, stepmother-Russia. Feature film based on the play by Vitaly Razdolsky. Series 1 This film, unknown to the general public, is the most honest look at our history, based on the play of the same name by playwright Vitaly Razdolsky in 1990. The film appeared on TV screens only once, then lay on the shelf. Actors Lyudmila Gurchenko, Juozas Budraitis, Petr Velyaminov starred in the central roles. ',
				},
				{
					date: '1990',
					icon: IconType.Award,
					title: 'Forgive Us, Stepmother Russia Film Director\'s Awards',
					subtitle:'',
					info: 'Diploma and Prize for creative search and high professional skills at the film festival "Kinokalyadki-90" in Minsk in 1990. Diploma and Prize of the cinema club "Amator" for civil courage and insight in the artistic interpretation of the events of our history at the film festival "Kinokalyadki-90" in Minsk in 1990. Participation in the out-of-competition program of the International Film Festival in Lagow (Poland) in 1991 Participation in the competitive program of the International Film Festival in Lodz (Poland) in 1991 Participation in the International Festival of Television Programs in Chicago (USA) in 1991',
				},
				{
					date: '1993',
					icon: IconType.Camera,
					title: 'Anomaly',
					subtitle:'',
					info: 'Based on the short story "All Flesh Is Grass" by Clifford Simak. Strange things have been happening in a small settlement lately, and soon the settlement is cut off from the outside world by an insurmountable wall. Scientist Alexander Kartin is trying to investigate an unusual phenomenon.',
				},
				{
					date: '1994',
					icon: IconType.Award,
					title: 'Anomaly Movie Awards',
					subtitle:'',
					info: 'Participation in the competition program of the International Film Festival "LISTOPAD-94" in Minsk in 1994 Participation in the competition program of the International Film Festival "GOLDEN TAURUS" in Kaunas (Lithuania) in 1994 (Chairman of the Jury V. Zhelakevicius).',
				},
			],
			// Margarita
			[
				{
					date: 'April 10, 1938',
					icon: IconType.Birth,
					title: 'Birth',
					subtitle:'',
					info: 'Birthplace: Stalinabad, Tajik SSR',
				},
				{
					date: '1961',
					icon: IconType.Student,
					title: 'Training',
					subtitle:'',
					info: 'In 1961 she graduated from the directing department of VGIK (workshop of Dovzhenko and Chiaureli) Viktor Turov, Otar Ioseliani, Larisa Shepitko studied directing with Margarita Kasymova in Dovzhenko\'s studio. In the same year, she began working at the Tajikfilm film studio. Filmed chronicles, newsreels, documentaries (more than 40 in total).',
				},
				{
					date: '1967',
					icon: IconType.Camera,
					title: 'Directorial Debut',
					subtitle:'',
					info: 'She was the second director on many tapes, until in 1967 she made her debut as a feature film director "Summer 1943". She shot a number of films at the film studio "Turkmenfilm". ',
				},
				{
					date: '1976',
					icon: IconType.Award,
					title: 'Award',
					subtitle:'',
					info: 'Honored Art Worker of the Tajik SSR',
				},
				{
					date: '5 May 1992',
					icon: IconType.Weapon,
					title: 'Moving to Minsk',
					subtitle:'',
					info: 'With the start of the civil war in Tajikistan, she moved to Minsk (Republic of Belarus), where she works as an editor in the film studio Belarusfilm. Has Russian citizenship.',
				},
				{
					date: '2008',
					icon: IconType.Award,
					title: 'Award',
					subtitle:'',
					info: '',
				},
				{
					date: '2010',
					icon: IconType.Weapon,
					title: 'Master course for film directors',
					subtitle:'',
					info: 'In 2010, Kasymova attended the master course of film directors at the Faculty of Screen Arts.',
				},
				{
					date: '2015',
					icon: IconType.Award,
					title: 'Order of Francysk Skaryna',
					subtitle:'',
					info: 'In 2015, she released a course of film directors, including Andrey Grinko and Dmitry Dedok. In the same year, Margarita Kasymova was awarded the Order of Francysk Skaryna.',
				},
			],
		]
	},
	[LOCALES.RUSSIAN]:{
		langOption: "Выбранный язык",
		authorName: ['Юрий Викторович Тарич', 'Дми́трий Влади́мирович Ио́сифов', 'Ники́та Гео́ргиевич Ху́бов', 'Ю́рий Алекса́ндрович Елхо́в', 'Маргари́та Наи́мовна Касы́мова'],
		birthDateTitle: 'Дата рождения',
		birthDate: ['24 января 1885', '22 октября 1965', '25 апреля 1936', '7 декабря 1939', '10 апреля 1938'],
		deathDateTitle: 'Дата смерти',
		mainTitle: 'Главная',
		teamTitle: 'Наша команда',
		articlesTitle: 'Режиссёры',
		articleAbout: 'Об авторе',
		galleryTitle: 'Наиболее известные работы автора',
		timelineTitle: 'Основные библиографические сведения',
		teamInfoTitle: 'Об авторах',
		mapTitle:  'Карта активностей',
		searchButton: 'Поиск',
		nextButton: 'Следующий',
		prevButton: 'Предыдущий',
		about_us: 'О проекте',
		about_us_info: 'Из всех искусств для нас важнейшим является кино...', 
		about_us_source: 'Владимир Ильич Ленин',
		dayAuthorTitle: 'Автор мгновения',
		articlePreInfo: ['Ю́рий Ви́кторович Та́рич (наст. фамилия Алексе́ев; белор. Юрый Віктаравіч Тарыч; 12 января 1885, Плоцк, Российская империя — 21 февраля 1967, Москва, СССР) — советский кинорежиссёр и сценарист. Заслуженный деятель искусств РСФСР (1935) и БССР. В 1925 году как режиссёр дебютировал постановками фильмов «Морока» (совместно с Е. Ивановым-Барковым) и «Первые огни». Работал в Ленинграде, в том числе и на находившейся там с 1928 по 1939 год кинофабрике «Савецкая Беларусь» треста «Белгоскино». Является одним из основоположников белорусской кинематографии. ',
			' Дмитрий Иосифов родился 22 октября 1965 года в Минске в семье инженера и биолога. Старший и младший братья — Андрей (р. 1963) и Николай (р. 1977), сейчас работают программистами. В возрасте 9 лет был замечен ассистентом режиссёра студии «Беларусьфильм» и утверждён на роль Буратино в фильме «Приключения Буратино», которая прославила мальчика (изначально Дмитрий пробовался на Арлекина). После фильма предложения сниматься стали поступать к нему одно за другим.',
			'Ники́та Гео́ргиевич Ху́бов (25 апреля 1936 — 25 ноября 2018) — советский и российский кинорежиссёр, сценарист и оператор, заслуженный деятель искусств Российской Федерации (2000). Учился в Московском полиграфическом институте. В 1963 году окончил операторский факультет ВГИКа (мастерская Б. И. Волчека). Свой творческий путь в кино начинал как один из операторов фильма Ричарда Викторова «Третья ракета», после чего был какое-то время оператором и режиссёром документального кино в Минске на студии «Беларусьфильм», а также на Центральном Телевидении. В дальнейшем, с 1972 года, стал работать на киностудии имени М. Горького, где и ставил свои фильмы. Соавтор сценария большинства собственных фильмов. ',
			'Елхов Юрий Александрович (7.12.1940, Москва, Россия), режиссер, оператор, сценарист. Окончил Чимкентский политехникум (1960) и ВГИК (1970). Работал на к/с «Казахфильм». С 1971 — на к/с «Беларусьфильм» в качестве оператора, с 1988 — и в качестве режиссера. Кинорежиссёр-постановщик художественных и телевизионных фильмов высшей категории. Кинооператор-постановщик художественных и телевизионных фильмов высшей категории. Кинодраматург игровых и документальных фильмов.', 
			'Маргари́та Наи́мовна Касы́мова (тадж. Марворид Қосимова; род. 10 апреля 1938, Сталинабад, Таджикская ССР, ныне Душанбе, Таджикистан) — советская, белорусская и таджикская киноактриса, кинорежиссёр и сценарист. Заслуженный деятель искусств Таджикской ССР (1976).'
		],
		workSample: 'Пример произведения автора',
		deathDate: ['21 февраля 1967', '-', '25 ноября 2018', '-', '-'],
		profTitle: 'Профессия',
		common_info: [
			'Кинорежиссёр, сценарист', 'Кинорежиссёр, актёр', 'Кинорежиссёр, сценарист, кинопродюсер, кинооператор', 'Кинорежиссёр, кинооператор', 'Актриса, кинорежиссёр, сценарист'
		], //UPDATE!!
		far_jump: 'Перейти', //UPDATE!!
		teamMembers: [
			{name: 'Шлык Павел', info: 'Положительными чертами в характере Павла являются надежность, доброта, нежность, привязанность. Характер у Павла гармоничен. В нем сочетается интеллект, общительность и высокая нравственность. Павел также обладает развитой интуицией. Он любознателен. ', link: 'https://github.com/tpouhuk'}, 
			{name: 'Малявко Никита', info: 'Никита - абсолютный лидер, не признающий авторитетов, способный вести за собой людей. Он умеет пользоваться своим обаянием и не выносит превосходства над собой. Внешне — заводила и душа компании, он может казаться мягким, но внутри это жесткий и даже тяжелый человек.', link: 'https://github.com/Katletos'},
			{name: 'Малиновский Андрей', info: 'Андрей, это человек, который умеет признавать ошибки и легко принимает чужое мнение, потому как не любит конфликтные ситуации и проявления агрессии. Умеет философски рассуждать, отличный слушатель и советчик, прекрасный помощник.', link: 'https://github.com/tpouhuk'}], //UPDATE!!
		profType: ['Кинорежиссёр, сценарист', 'Кинорежиссёр, актёр', 'Кинорежиссёр, сценарист, кинопродюсер, кинооператор', 'Кинорежиссёр, кинооператор', 'Актриса, кинорежиссёр, сценарист'],
		gallery: [
			['Лесная быль', 'Капитанская дочка', 'Цогт Тайж', 'Булат Батыр', 'Крылья холопа'], //first author
			['Лето волков', 'Уходящая натура', 'Екатерина (телесериал)', 'Диверсант 3: Крым', 'Елизавета (телесериал)'], //second author
			['Меняю собаку на паровоз', 'Предательница', 'Эскадрон гусар летучих', 'Роковая ошибка', 'Игра в браслетах'], //third author
			['Кошкодав Сильвер', 'Прости нас, мачеха Россия', 'Аномалия', 'Анастасия Слуцкая'], //fourth author
			['Лето 1943 года', 'Ткачихи', 'А счастье рядом', 'Сегодня и всегда', 'Куда вёл след динозавра'], // fifth author
		],
		mapInfo: [
			['Кинофабрика "Савецкая Беларусь"', 'Музей белорусского кинематографа', 'Студия "Беларусфильм"'],
			['Кинофабрика "Савецкая Беларусь"', 'Музей белорусского кинематографа', 'Студия "Беларусфильм"'],
			['Кинофабрика "Савецкая Беларусь"', 'Музей белорусского кинематографа', 'Студия "Беларусфильм"'],
			['Кинофабрика "Савецкая Беларусь"', 'Музей белорусского кинематографа', 'Студия "Беларусфильм"'],
			['Кинофабрика "Савецкая Беларусь"', 'Музей белорусского кинематографа', 'Студия "Беларусфильм"'],
		],
		timelineInfo: [
			[{date: '24 января 1885', icon: IconType.Birth, title: 'Рождение', subtitle:'', info: 'Родился в г. Плоцке', },
				{date: '1903 - 1905',    icon: IconType.Student, title: 'Обучение', subtitle:'', info: 'Учился на юридическом факультете Московского университета'},
				{date: '1906', icon: IconType.Weapon, title: 'Ссылка', subtitle:'', info: 'Сослан в Сибирь за революционную пропаганду'},
				{date: '1917', icon: IconType.Theater, title: 'Театральные начинания', subtitle:'', info: 'Играет на сценах театра Революции'},
				{date: '1925', icon: IconType.Camera, title: 'Режиссёрский дебют', subtitle:'', info: 'Сняты первые фильмы "Морока" и "Первые огни"'},
				{date: '1928 - 1939', icon: IconType.Award, title: 'Зарождение белорусского кинематографа', subtitle:'', info: 'Создал первую белорусскую звуковую кинопрограмму "Переворот"'},
				{date: '1945 - 1967', icon: IconType.Moscow, title: 'Московский период', subtitle:'', info: 'Активно консультирует сценарный отдел киностудии "Союздетфильм". Занимал пост режиссёра Театра-студии киноактёра.'},
				{date: '1961 - 1967', icon: IconType.Commitment, title: 'Поздние годы', subtitle:'', info: 'Возглавляет студию молодых кинематографистов "Рассказы о молодости", активно сотрудничает с Беларусьфильмом в съёмках научно-по­пулярных и художественно-документальных очерков.'},
				{date: '1967', icon: IconType.Monument, title: 'Кончина', subtitle:'', info: 'Великий режиссёр умер в возрасте 82 лет. Похоронен в Москве на Ваганьковском кладбище.'},
			],
			// Dmitry
			[{date: '22 октября 1965', icon: IconType.Birth, title: 'Рождение', subtitle:'', info: 'Дмитрий Иосифов родился 22 октября 1965 года в Минске в семье инженера и биолога. Старший и младший братья — Андрей (р. 1963) и Николай (р. 1977), сейчас работают программистами. ', },
				{date: '1974', icon: IconType.Award, title: 'Буратино', subtitle:'', info: ' В возрасте 9 лет был замечен ассистентом режиссёра студии «Беларусьфильм» и утверждён на роль Буратино в фильме «Приключения Буратино», которая прославила мальчика (изначально Дмитрий пробовался на Арлекина). После фильма предложения сниматься стали поступать к нему одно за другим. '},
				{date: '1977',    icon: IconType.Student, title: 'Обучение', subtitle:'', info: 'Окончив школу, Дмитрий поступил во ВГИК, где учился на курсе Алексея Баталова. По окончании ВГИКа Иосифов был распределён в Минск, где работал в Минском театре-студии киноактёра. В то время он много снимался на разных киностудиях, но больше всего ролей им было сыграно в картинах студии «Ленфильм». Параллельно учился режиссёрскому мастерству на кинофакультете Белорусской государственной академии искусств (мастерская В. Турова). '},
				{date: '1990', icon: IconType.Theater, title: 'Театральные начинания', subtitle:'', info: 'В конце 1990-х годов вернулся в Москву, где начал карьеру режиссёра.'},
				{date: '2009', icon: IconType.Camera, title: 'Режиссёрский дебют', subtitle:'', info: 'По состоянию на 2009 год снял около сорока рекламных роликов (фирмы Tefal, Panasonic, Dilmah). '},
				{date: '2009', icon: IconType.Commitment, title: 'Поздние годы', subtitle:'', info: 'Андрей Иосифов с 2009 года работает оператором в различных телесериалах. '},
			],
			// Nikita
			[
				{
					date: '25 апреля 1936',
					icon: IconType.Birth, 
					title: 'Рождение',
					subtitle:'', 
					info: 'Родился 25 апреля 1936 года в Москве. Сын музыковеда, заслуженного деятеля искусств РСФСР Георгия Хубова (1902—1981) и переводчицы Ревекки Гальпериной (1902—1976). Внук писателя Менаше Галперна. ',
				},
				{
					date: '1963',
					icon: IconType.Student,
					title: 'Обучение',
					subtitle:'',
					info: 'Учился в Московском полиграфическом институте. В 1963 году окончил операторский факультет ВГИКа (мастерская Б. И. Волчека).',
				},
				{
					date: '1963',
					icon: IconType.Theater,
					title: 'Творческий путь в кино',
					subtitle:'',
					info: 'Свой творческий путь в кино начинал как один из операторов фильма Ричарда Викторова «Третья ракета», после чего был какое-то время оператором и режиссёром документального кино в Минске на студии «Беларусьфильм», а также на Центральном Телевидении. В дальнейшем, с 1972 года, стал работать на киностудии имени М. Горького, где и ставил свои фильмы. Соавтор сценария большинства собственных фильмов.'
				},
				{
					date: '1964',
					icon: IconType.Award,
					title: 'Первая награда',
					subtitle: '',
					info: 'Диплом IV кинофестиваля республик Прибалтики и Белоруссии (Минск, 1964) — за фильм «Третья ракета» (совместно с Андреем Кирилловым)',
				},
				{
					date: '2000',
					icon: IconType.Award,
					title: 'Заслуги',
					subtitle: '',
					info: 'Заслуженный деятель искусств Российской Федерации (2000) — за заслуги в области искусства.'
				},
				{
					date: '25 ноября 1936',
					icon: IconType.Monument,
					title: 'Кончина',
					subtitle:'',
					info: 'Похоронен на Армянском кладбище.'
				},
			],
			// Yuri
			[
				{
					date: '7 декабря 1940',
					icon: IconType.Birth, 
					title: 'Рождение',
					subtitle:'', 
					info: '7 декабря 1940 родился в Москве.',
				},
				{
					date: '1989',
					icon: IconType.Camera, 
					title: 'Кошкодав Сильвер',
					subtitle:'', 
					info: 'Выходит фильм Кошкодав Сильвер, где режиссёром и сценаристом является Юрий Александрович Елхов.',
				},
				{
					date: '1989',
					icon: IconType.Award, 
					title: 'Награды за режиссёрскую работу в фильме "Кошкодав Сильвер"',
					subtitle:'', 
					info: 'Приз международного кинофестиваля (г. Лидс, Англия, 1989 год). Диплом за лучшую операторскую работу на кинофестивале в Минске в 1989 году.',
				},
				{
					date: '1990',
					icon: IconType.Camera, 
					title: 'Прости нас, мачеха Россия',
					subtitle:'', 
					info: ' Прости нас, мачеха-Россия. Художественный фильм по пьесе Виталия Раздольского. Серия 1 Этот неизвестный широкой публике фильм – самый честный взгляд на нашу историю, был снят по одноименной пьесе драматурга Виталия Раздольского в 1990 году. Фильм появился на телеэкранах всего один раз, потом лег на полку. В центральных ролях снялись актеры Людмила Гурченко, Юозас Будрайтис, Петр Вельяминов. ',
				},
				{
					date: '1990',
					icon: IconType.Award, 
					title: 'Награды за режиссёрскую работу в фильме "Прости нас, мачеха Россия"',
					subtitle:'', 
					info: 'Диплом и Приз за творческий поиск, и высокое профессиональное мастерство на кинофестивале «Кинокалядки-90» в Минске в 1990 году. Диплом и Приз кино клуба «Аматор» за гражданское мужество и прозорливость в художественной интерпретации событий нашей истории на кинофестивале «Кинокалядки-90» в Минске в 1990 году. Участие во внеконкурсной программе Международного кинофестиваля в Лагове (Польша) в 1991 г. Участие в конкурсной программе Международного кинофестиваля в Лодзи (Польша) в 1991 г Участие в Международном фестивале телевизионных программ в Чикаго (США) в 1991 г.',
				},
				{
					date: '1993',
					icon: IconType.Camera, 
					title: 'Аномалия',
					subtitle:'', 
					info: 'По мотивам рассказа Клиффорда Саймака "Вся плоть - трава". В маленьком поселении в последнее время творятся странные вещи, и вскоре поселение оказывается отрезанным от внешнего мира непреодолимой стеной. Ученый Александр Картин пытается исследовать необычное явление.',
				},
				{
					date: '1994',
					icon: IconType.Award, 
					title: 'Награды за фильм "Аномалия"',
					subtitle:'', 
					info: 'Участие в конкурсной программе Международного кинофестиваля «ЛИСТОПАД-94» в Минске в 1994 г. Участие в конкурсной программе Международного кинофестиваля «GOLDEN  TAURUS» в Каунасе (Литва) в 1994 г. (Председатель жюри В. Желакявичус).',
				},
			],
			// Margarita
			[
				{
					date: '10 апреля 1938',
					icon: IconType.Birth, 
					title: 'Рождение',
					subtitle:'', 
					info: 'Место рождения: Сталинабад, Таджикская ССР',
				},
				{
					date: '1961',
					icon: IconType.Student, 
					title: 'Обучение',
					subtitle:'', 
					info: 'В 1961 году окончила режиссёрский факультет ВГИКа (мастерская Довженко и Чиаурели) В мастерской Довженко, с Маргаритой Касымовой режиссуре учились Виктор Туров, Отар Иоселиани, Лариса Шепитько. В тот же год начала работать на киностудии «Таджикфильм». Снимала хронику, киножурналы, документальные фильмы (всего более 40).',
				},
				{
					date: '1967',
					icon: IconType.Camera, 
					title: 'Режиссёрский дебют',
					subtitle:'', 
					info: 'Была вторым режиссёром на многих лентах, пока в 1967 году не дебютировала как режиссёр игрового кино «Лето 1943 года». Ряд картин сняла на киностудии «Туркменфильм». ',
				},
				{
					date: '1976',
					icon: IconType.Award, 
					title: 'Награда',
					subtitle:'', 
					info: 'Заслуженный деятель искусств Таджикской ССР',
				},
				{
					date: '5 мая 1992',
					icon: IconType.Weapon, 
					title: 'Переезд в Минск',
					subtitle:'', 
					info: 'С началом гражданской войны в Таджикистане она перебралась в Минск (Республика Беларусь), где состоит в штате киностудии «Беларусьфильм» редактором. Имеет российское гражданство.',
				},
				{
					date: '2008',
					icon: IconType.Award, 
					title: 'Награда',
					subtitle:'', 
					info: '',
				},
				{
					date: '2010',
					icon: IconType.Weapon, 
					title: 'Мастер курса кинорежиссёров',
					subtitle:'', 
					info: 'В 2010 году Касымова мастер курса кинорежиссеров в БГАИ (Факультет экранных искусств).',
				},
				{
					date: '2015',
					icon: IconType.Award, 
					title: 'Орден Франциска Скорины',
					subtitle:'', 
					info: 'В 2015 году выпустила курс кинорежиссеров, среди которых Андрей Гринько и Дмитрий Дедок. В том же году Маргарита Касымова была удостоена Ордена Франциска Скорины.',
				},
			],
		]

	}
}
