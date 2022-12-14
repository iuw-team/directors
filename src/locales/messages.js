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
        teamTitle: 'Out team',
        articlesTitle: 'Directors',
        timelineTitle: 'Common bibliographic information',
        mapTitle:  'The map of activities',
        workSample: "The sample of author's work",
        authorName: ['Yuri Viktorovich Tarich', 'Dmitry Vladimirovich Iosifov', 'Nikita Georghievich Khubov', 'Yuri Alexandrovich Elkhov', 'Margarita Naimovna Kasymova'],
        birthDateTitle: 'Date of birth',
        birthDate: ['January 24, 1885', 'October 22, 1965', 'April 25, 1936', 'December 7, 1940', 'April 10, 1938'],
        deathDateTitle: 'Date of death',
        deathDate: ['February 21, 1967', '-', 'November 25, 2018', '-', '-'],
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
            [],
            [],
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
        galleryTitle: 'Наиболее известные работы автора',
        timelineTitle: 'Основные библографические сведения',
        teamInfoTitle: 'Об авторах',
        mapTitle:  'Карта активностей',
        workSample: 'Пример произведения автора',
        deathDate: ['21 февраля 1967', '-', '25 ноября 2018', '-', '-'],
        profTitle: 'Профессия',
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
            [],
            [],
        ]
    }
}
