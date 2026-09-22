import type { PlayerData, Question } from '$lib/index';

const playerData: PlayerData[] = [];
const TIME_LEFT = 8; // seconds
const sortQuestions = (questions: { points: number; question: string; answer: string; imgSrc?: string; finalimg?: string; }[]) => questions.sort((a, b) => a.points - b.points).map(q => ({ ...q, answered: false, buzzers: [] as string[] }));
const pastQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question: 'What holiday is March 17th?',
        answer: 'St. Patrick\'s Day',
    },//I was born on st. patricks day
    {
        points: 200,
        question:
            'Which sport has beam, bars, vault, and floor events?',
        
        answer: 'Gymnastics',
        //I did gymnastics growing up for 7 years
    },
    {
        points: 300,
        question:
            'What is the only country flag with no blue, red, or white?',
            finalimg: 'flag.jpeg',
            answer: 'Jamaica',
        //I am half jamaican.
        //HOW TO MAKE IMAGE SHOW UP IN THE ANSWER SECTION OF THE QUESTION CARD?
    },
    {
        points: 400,
        question: 'This is a view from what national park in the United States?',
        imgSrc: 'half-dome-from-clouds-rest-500w.jpg',
        answer: 'Yosemite',
        //I hiked clouds rest in yosemite this summer
    }
]);

const presentQuestions: Question[] =
    sortQuestions([
        {
            points: 400,
            question:
                'What is the oldest pizzeria in the United States?',
            imgSrc: 'lombaris-pizza.jpg',
            answer: 'Lombardi\'s',
            //my mom has been goin to lombardi's for like 30 years and we go all the time
        },
        {
            points: 100,
            question:
                'A wheel is used for what kind of art?',
            answer: 'Pottery',
            //i love pottery
        },
        {
            points: 200,
            question: 'This is a photo of what breed of dog?',
            imgSrc: 'IMG_4946.jpeg',
            answer: 'Poodle',
            //i have the cutest dog in the world and he is a poodle
        },
        {
            points: 300,
            question:
                'Janja Garnbret is the most decorated athlete in which sport?',
            imgSrc:
                "janja-image.jpg",
            answer: 'Climbing',
            //I do compatition climbing a lot and Janja is a huge inspiration to me
        }
    ]);
const futureQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question:
            'what is the capital of Utah?',
        answer: 'Salt Lake City',
        //I climbed at USAC nationals in salt lake last year and hope to gpo again this year
    },
     {
            points: 200,
            question: 'What sport is this ball used in?',
            imgSrc: 'rugby-ball-images.jpg',
            answer: 'Rugby',
            //im doing rugby in the spring
        },
          {
            points: 300,
            question:
                'What NYC based dance group is know for their high kicks?',
            answer: 'Rockettes',
            //the choir that I sing with is doing a perfromence with the rockettes at christmas
        },
          {
            points: 400,
            question:
                'What island country has no sky diving age requirement?',
            imgSrc: 'new-zealand.jpg',
            answer: 'New Zealand',
            // My sister is going to australia for her grad gift and I will convince my parents to let me go skydiving in new zealand
        }
]);


const categories = [
    {
        title: 'Samira\'s Past',
        questions: pastQuestions
    },
    {
        title: `Samira's Present`,
        questions: presentQuestions
    },
    {
        title: "Samira's Future",
        questions: futureQuestions
    }
];

export const state = {
    playerData,
    categories,
    selectedQuestion: null as Question | null | undefined,
    whoControls: null as string | null,
    timeLeft: TIME_LEFT,
    intervalId: null as NodeJS.Timeout | null,
    whoBuzzed: null as string | null,
};

export interface CheckAnswerPayload {
    answer: string;
    question: Question;
    socketId: string;
}