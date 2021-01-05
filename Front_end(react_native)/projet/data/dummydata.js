import Domain from './model';
import sports from '../assets/sports.jpg';
import mentalhealth from '../assets/mentalhealth.jpg';
import spirituality from '../assets/spirituality.jpg';
import studies from '../assets/studies.jpeg';
import family from '../assets/family.jpg';
import skills from '../assets/skills.png';
import music from '../assets/music.jpg';
import sleep from '../assets/sleep.jpg';
import reading from '../assets/reading.jpg';
import travel from '../assets/travel.jpg';
import books from '../assets/books.jpg'
export const DOMAINS=[
    new Domain('c1',sports,'Sports'),
    new Domain('c2',mentalhealth,'Mental health'),
    new Domain('c3',spirituality,'Spirituality'),
    new Domain('c4',studies,'Studies'),
    new Domain('c5',family,'Family'),
    new Domain('c6',skills,'Personal skills'),
    new Domain('c7',music,'Music'),
    new Domain('c8',sleep,'Sleep'),
    new Domain('c9',books,'Reading'),
    new Domain('c10',travel,'Travel'),

]