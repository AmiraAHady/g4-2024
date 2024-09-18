import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class TvService {
  private tvsData = [
    {
      adult: false,
      backdrop_path: '/9faGSFi5jam6pDWGNd0p8JcJgXQ.jpg',
      genre_ids: [18, 80],
      id: 1396,
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'Breaking Bad',
      overview:
        "Walter White, a New Mexico chemistry teacher, is diagnosed with Stage III cancer and given a prognosis of only two years left to live. He becomes filled with a sense of fearlessness and an unrelenting desire to secure his family's financial future at any cost as he enters the dangerous world of drugs and crime.",
      popularity: 520.415,
      poster_path: '/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg',
      first_air_date: '2008-01-20',
      name: 'Breaking Bad',
      vote_average: 8.915,
      vote_count: 14178,
    },
    {
      adult: false,
      backdrop_path: '/96RT2A47UdzWlUfvIERFyBsLhL2.jpg',
      genre_ids: [16, 18, 10759, 10765],
      id: 209867,
      origin_country: ['JP'],
      original_language: 'ja',
      original_name: '葬送のフリーレン',
      overview:
        'After the party of heroes defeated the Demon King, they restored peace to the land and returned to lives of solitude. Generations pass, and the elven mage Frieren comes face to face with humanity’s mortality. She takes on a new apprentice and promises to fulfill old friends’ dying wishes. Can an elven mind make peace with the nature of life and death? Frieren embarks on her quest to find out.',
      popularity: 285.126,
      poster_path: '/dqZENchTd7lp5zht7BdlqM7RBhD.jpg',
      first_air_date: '2023-09-29',
      name: "Frieren: Beyond Journey's End",
      vote_average: 8.9,
      vote_count: 267,
    },
    {
      adult: false,
      backdrop_path: '/9kyyQXy79YRdY5mhrYKyktbFMev.jpg',
      genre_ids: [16, 35, 10765],
      id: 94954,
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'Hazbin Hotel',
      overview:
        "In attempt to find a non-violent alternative for reducing Hell's overpopulation, the daughter of Lucifer opens a rehabilitation hotel that offers a group of misfit demons a chance at redemption.",
      popularity: 180.789,
      poster_path: '/rXojaQcxVUubPLSrFV8PD4xdjrs.jpg',
      first_air_date: '2024-01-18',
      name: 'Hazbin Hotel',
      vote_average: 8.867,
      vote_count: 1074,
    },
    {
      adult: false,
      backdrop_path: '/wQEW3xLrQAThu1GvqpsKQyejrYS.jpg',
      genre_ids: [16, 10765, 10759],
      id: 94605,
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'Arcane',
      overview:
        'Amid the stark discord of twin cities Piltover and Zaun, two sisters fight on rival sides of a war between magic technologies and clashing convictions.',
      popularity: 115.839,
      poster_path: '/fqldf2t8ztc9aiwn3k6mlX3tvRT.jpg',
      first_air_date: '2021-11-06',
      name: 'Arcane',
      vote_average: 8.75,
      vote_count: 3968,
    },
    {
      adult: false,
      backdrop_path: '/kU98MbVVgi72wzceyrEbClZmMFe.jpg',
      genre_ids: [16, 10759, 10765],
      id: 246,
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'Avatar: The Last Airbender',
      overview:
        'In a war-torn world of elemental magic, a young boy reawakens to undertake a dangerous mystic quest to fulfill his destiny as the Avatar, and bring peace to the world.',
      popularity: 278.415,
      poster_path: '/cHFZA8Tlv03nKTGXhLOYOLtqoSm.jpg',
      first_air_date: '2005-02-21',
      name: 'Avatar: The Last Airbender',
      vote_average: 8.733,
      vote_count: 4058,
    },
    {
      adult: false,
      backdrop_path: '/a6ptrTUH1c5OdWanjyYtAkOuYD0.jpg',
      genre_ids: [10759, 35, 16],
      id: 37854,
      origin_country: ['JP'],
      original_language: 'ja',
      original_name: 'ワンピース',
      overview:
        'Years ago, the fearsome Pirate King, Gol D. Roger was executed leaving a huge pile of treasure and the famous "One Piece" behind. Whoever claims the "One Piece" will be named the new King of the Pirates.\n\nMonkey D. Luffy, a boy who consumed a "Devil Fruit," decides to follow in the footsteps of his idol, the pirate Shanks, and find the One Piece. It helps, of course, that his body has the properties of rubber and that he\'s surrounded by a bevy of skilled fighters and thieves to help him along the way.\n\nLuffy will do anything to get the One Piece and become King of the Pirates!',
      popularity: 196.071,
      poster_path: '/cMD9Ygz11zjJzAovURpO75Qg7rT.jpg',
      first_air_date: '1999-10-20',
      name: 'One Piece',
      vote_average: 8.7,
      vote_count: 4604,
    },
    {
      adult: false,
      backdrop_path: '/A6tMQAo6t6eRFCPhsrShmxZLqFB.jpg',
      genre_ids: [10759, 16, 10765, 35],
      id: 31911,
      origin_country: ['JP'],
      original_language: 'ja',
      original_name: '鋼の錬金術師 FULLMETAL ALCHEMIST',
      overview:
        'Disregard for alchemy’s laws ripped half of Edward Elric’s limbs from his body and left his brother Alphonse’s soul clinging to a suit of armor. To restore what was lost, the brothers seek the Philosopher’s Stone. Enemies and allies – the corrupt military, the Homunculi, and foreign alchemists – will alter the Elric brothers course, but their purpose will remain unchanged and their bond unbreakable.',
      popularity: 275.835,
      poster_path: '/8H4ej2NpujYVBPsW2smmzC8d2xU.jpg',
      first_air_date: '2009-04-05',
      name: 'Fullmetal Alchemist: Brotherhood',
      vote_average: 8.7,
      vote_count: 2013,
    },
    {
      adult: false,
      backdrop_path: '/rBF8wVQN8hTWHspVZBlI3h7HZJ.jpg',
      genre_ids: [16, 35, 10765, 10759],
      id: 60625,
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'Rick and Morty',
      overview:
        "Rick is a mentally-unbalanced but scientifically gifted old man who has recently reconnected with his family. He spends most of his time involving his young grandson Morty in dangerous, outlandish adventures throughout space and alternate universes. Compounded with Morty's already unstable family life, these events cause Morty much distress at home and school.",
      popularity: 1175.917,
      poster_path: '/gdIrmf2DdY5mgN6ycVP0XlzKzbE.jpg',
      first_air_date: '2013-12-02',
      name: 'Rick and Morty',
      vote_average: 8.697,
      vote_count: 9652,
    },
    {
      adult: false,
      backdrop_path: '/7BoRhg8zXP0ca9Zql4p8llCFR2P.jpg',
      genre_ids: [18, 10765, 35],
      id: 221851,
      origin_country: ['KR'],
      original_language: 'ko',
      original_name: '내 남편과 결혼해줘',
      overview:
        'Kang Ji-won, a terminally ill cancer patient, is killed by her husband and best friend after she witnesses them having an affair. She wakes up 10 years before the incident and decides to seek revenge with the help of Yu Ji-hyuk, a director at the company where she works. Now, she must reclaim her fate and eliminate the trash from her life.',
      popularity: 99.03,
      poster_path: '/y2hvE76S6Me0uhYEQ1P8lGf7Wm0.jpg',
      first_air_date: '2024-01-01',
      name: 'Marry My Husband',
      vote_average: 8.678,
      vote_count: 407,
    },
    {
      adult: false,
      backdrop_path: '/hPea3Qy5Gd6z4kJLUruBbwAH8Rm.jpg',
      genre_ids: [80, 18],
      id: 60059,
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'Better Call Saul',
      overview:
        'Six years before Saul Goodman meets Walter White. We meet him when the man who will become Saul Goodman is known as Jimmy McGill, a small-time lawyer searching for his destiny, and, more immediately, hustling to make ends meet. Working alongside, and, often, against Jimmy, is “fixer” Mike Ehrmantraut. The series tracks Jimmy’s transformation into Saul Goodman, the man who puts “criminal” in “criminal lawyer".',
      popularity: 823.675,
      poster_path: '/fC2HDm5t0kHl7mTm7jxMR31b7by.jpg',
      first_air_date: '2015-02-08',
      name: 'Better Call Saul',
      vote_average: 8.683,
      vote_count: 5118,
    },
    {
      adult: false,
      backdrop_path: '/900tHlUYUkp7Ol04XFSoAaEIXcT.jpg',
      genre_ids: [18],
      id: 87108,
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'Chernobyl',
      overview:
        'The true story of one of the worst man-made catastrophes in history: the catastrophic nuclear accident at Chernobyl. A tale of the brave men and women who sacrificed to save Europe from unimaginable disaster.',
      popularity: 81.423,
      poster_path: '/hlLXt2tOPT6RRnjiUmoxyG1LTFi.jpg',
      first_air_date: '2019-05-06',
      name: 'Chernobyl',
      vote_average: 8.677,
      vote_count: 6210,
    },
    {
      adult: false,
      backdrop_path: '/70YdbMELM4b8x8VXjlubymb2bQ0.jpg',
      genre_ids: [18, 10751],
      id: 70785,
      origin_country: ['CA'],
      original_language: 'en',
      original_name: 'Anne with an E',
      overview:
        'A coming-of-age story about an outsider who, against all odds and numerous challenges, fights for love and acceptance and for her place in the world. The series centers on a young orphaned girl in the late 1890’s, who, after an abusive childhood spent in orphanages and the homes of strangers, is mistakenly sent to live with an elderly woman and her aging brother. Over time, 13-year-old Anne will transform their lives and eventually the small town in which they live with her unique spirit, fierce intellect and brilliant imagination.',
      popularity: 229.63,
      poster_path: '/6P6tXhjT5tK3qOXzxF9OMLlG7iz.jpg',
      first_air_date: '2017-03-19',
      name: 'Anne with an E',
      vote_average: 8.675,
      vote_count: 4619,
    },
    {
      adult: false,
      backdrop_path: '/cHyY5z4txdVyGtYMvBJhCqCcJso.jpg',
      genre_ids: [16, 10765, 18, 10759, 35, 10762],
      id: 92685,
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'The Owl House',
      overview:
        "An animated fantasy-comedy series that follows Luz, a self-assured teenage girl who accidentally stumbles upon a portal to a magical world where she befriends a rebellious witch, Eda, and an adorably tiny warrior, King. Despite not having magical abilities, Luz pursues her dream of becoming a witch by serving as Eda's apprentice at the Owl House and ultimately finds a new family in an unlikely setting.",
      popularity: 414.07,
      poster_path: '/zhdy3PcNVE15wj1wrxn45ARZBnx.jpg',
      first_air_date: '2020-01-10',
      name: 'The Owl House',
      vote_average: 8.668,
      vote_count: 1565,
    },
    {
      adult: false,
      backdrop_path: '/3GQKYh6Trm8pxd2AypovoYQf4Ay.jpg',
      genre_ids: [16, 10759, 10765],
      id: 85937,
      origin_country: ['JP'],
      original_language: 'ja',
      original_name: '鬼滅の刃',
      overview:
        'It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for a living, finds his family slaughtered by a demon. To make matters worse, his younger sister Nezuko, the sole survivor, has been transformed into a demon herself. Though devastated by this grim reality, Tanjiro resolves to become a “demon slayer” so that he can turn his sister back into a human, and kill the demon that massacred his family.',
      popularity: 144.492,
      poster_path: '/xUfRZu2mi8jH6SzQEJGP6tjBuYj.jpg',
      first_air_date: '2019-04-06',
      name: 'Demon Slayer: Kimetsu no Yaiba',
      vote_average: 8.661,
      vote_count: 6377,
    },
    {
      adult: false,
      backdrop_path: '/rqbCbjB19amtOtFQbb3K2lgm2zv.jpg',
      genre_ids: [16, 10765, 10759],
      id: 1429,
      origin_country: ['JP'],
      original_language: 'ja',
      original_name: '進撃の巨人',
      overview:
        'Many years ago, the last remnants of humanity were forced to retreat behind the towering walls of a fortified city to escape the massive, man-eating Titans that roamed the land outside their fortress. Only the heroic members of the Scouting Legion dared to stray beyond the safety of the walls – but even those brave warriors seldom returned alive. Those within the city clung to the illusion of a peaceful existence until the day that dream was shattered, and their slim chance at survival was reduced to one horrifying choice: kill – or be devoured!',
      popularity: 213.162,
      poster_path: '/hTP1DtLGFamjfu8WqjnuQdP1n4i.jpg',
      first_air_date: '2013-04-07',
      name: 'Attack on Titan',
      vote_average: 8.658,
      vote_count: 6298,
    },
    {
      adult: false,
      backdrop_path: '/xdTwlG8MYAOkFuAGUqt8LgmgTNZ.jpg',
      genre_ids: [16, 35, 10765],
      id: 62741,
      origin_country: ['JP'],
      original_language: 'ja',
      original_name: '神様はじめました',
      overview:
        'Nanami was just a normal high school girl down on her luck until a stranger’s lips marked her as the new Land God and turned her world upside down. Now, she’s figuring out the duties of a deity with the help of Tomoe, a reformed fox demon who reluctantly becomes her familiar in a contract sealed with a kiss. The new responsibilities—and boys—are a lot to handle, like the crow demon masquerading as a gorgeous pop idol and the adorable snake spirit who’s chosen the newly minted god to be his bride. As the headstrong Tomoe tries to whip her into shape, Nanami finds that love just might have cute, pointed fox ears. With romance in the air, will the human deity be able to prove herself worthy of her new title?',
      popularity: 91.321,
      poster_path: '/5E7GL8KxpFemEFl3Lv8Fu4RuSwa.jpg',
      first_air_date: '2012-10-02',
      name: 'Kamisama Kiss',
      vote_average: 8.654,
      vote_count: 876,
    },
    {
      adult: false,
      backdrop_path: '/2w8FaLwwJTWr6ExUMeVgT2Th5YT.jpg',
      genre_ids: [16, 35, 18, 10759],
      id: 42705,
      origin_country: ['JP'],
      original_language: 'ja',
      original_name: 'はじめの一歩',
      overview:
        "Makunouchi Ippo is an ordinary high school student in Japan. Since he spends most of his time away from school helping his mother run the family business, he doesn't get to enjoy his younger years like most teenagers. Always a target for bullying at school (the family fishing business grants him a distinct odor), Ippo's life is one of hardship. One of these after-school bullying sessions turns Ippo's life around for the better, as he is saved by a boxer named Takamura. He decides to follow in Takamura's footsteps and train to become a boxer, giving his life direction and purpose. Ippo's path to perfecting his pugilistic prowess is just beginning...",
      popularity: 274.174,
      poster_path: '/qC4taY6yB9BWJ8IxcbnXR8yUS4o.jpg',
      first_air_date: '2000-10-03',
      name: 'Fighting Spirit',
      vote_average: 8.652,
      vote_count: 1035,
    },
    {
      adult: false,
      backdrop_path: '/dfmPbyeZZSz3bekeESvMJaH91gS.jpg',
      genre_ids: [16, 10765, 10759, 18],
      id: 95557,
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'INVINCIBLE',
      overview:
        'Mark Grayson is a normal teenager except for the fact that his father is the most powerful superhero on the planet. Shortly after his seventeenth birthday, Mark begins to develop powers of his own and enters into his father’s tutelage.',
      popularity: 186.553,
      poster_path: '/dMOpdkrDC5dQxqNydgKxXjBKyAc.jpg',
      first_air_date: '2021-03-25',
      name: 'INVINCIBLE',
      vote_average: 8.645,
      vote_count: 4405,
    },
    {
      adult: false,
      backdrop_path: '/3MC8VIxq8u1vKOKTfz6FtrFXuMZ.jpg',
      genre_ids: [10765, 18, 10759, 9648],
      id: 135157,
      origin_country: ['KR'],
      original_language: 'ko',
      original_name: '환혼',
      overview:
        "A powerful sorceress in a blind woman's body encounters a man from a prestigious family, who wants her help to change his destiny.",
      popularity: 127.538,
      poster_path: '/q2IiPRSXPOZ6qVRj36WRAYEQyHs.jpg',
      first_air_date: '2022-06-18',
      name: 'Alchemy of Souls',
      vote_average: 8.644,
      vote_count: 569,
    },
    {
      adult: false,
      backdrop_path: '/3ILMlmC30QUnYkY3XEBOyJ82Dqu.jpg',
      genre_ids: [10759, 16, 10765],
      id: 65930,
      origin_country: ['JP'],
      original_language: 'ja',
      original_name: '僕のヒーローアカデミア',
      overview:
        'A superhero-admiring boy without any powers enrolls in a prestigious hero academy and learns what it really means to be a hero.',
      popularity: 153.798,
      poster_path: '/phuYuzqWW9ru8EA3HVjE9W2Rr3M.jpg',
      first_air_date: '2016-04-03',
      name: 'My Hero Academia',
      vote_average: 8.6,
      vote_count: 4837,
    },
  ];

  getAllTvs() {
    return this.tvsData;
  }

  getById(tvId: number) {
    return this.tvsData.find((tv) => tv.id == tvId);
  }
}
