var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import path from 'path';
import { createLogger, createTemplate, format, transports } from './logger.js';
var __dirname = path.resolve();
var logger = createLogger({
    level: 'info',
    transports: [
        new transports.console({
            level: 'debug',
            colorize: true,
            template: createTemplate(format.level(), format.text(' :gift:'), format.newLine(), format.message(), format.newLine(), format.text('Logged from '), format.location(), format.text(' :tada:')),
        }),
        new transports.file({
            level: 'info',
            path: path.join(__dirname, '../important.log'),
            template: createTemplate(format.level(), format.text(' :gift:'), format.newLine(), format.message(), format.newLine(), format.text('Logged from '), format.location(), format.text(' :tada:')),
        }),
        new transports.file({
            level: 'info',
            path: path.join(__dirname, '../not-so-important.log'),
            template: createTemplate(format.level(), format.text(' :tada:'), format.newLine(), format.message(), format.newLine(), format.text('Logged from '), format.location(), format.text(' :tada:')),
        }),
        new transports.firebase({
            apiKey: "AIzaSyALQ3lMnq9ks1eDF_cBcYQ744TCop14Iac",
            authDomain: "logs-79539.firebaseapp.com",
            databaseURL: "https://logs-79539-default-rtdb.firebaseio.com",
            projectId: "logs-79539",
            storageBucket: "logs-79539.appspot.com",
            messagingSenderId: "470333488364",
            appId: "1:470333488364:web:737c71a09936252f9379c9",
            measurementId: "G-2MVJS0XC5E"
        })
    ],
});
var collection = [
    {
        _id: '5ba7840f298023585dfd4b7c',
        index: 0,
        guid: '95f14d33-0dd2-43ef-bc1c-1d8de4e72c7d',
        isActive: false,
        balance: '$1,938.64',
        picture: 'http://placehold.it/32x32',
        age: 26,
        eyeColor: 'green',
        name: {
            first: 'Rhea',
            last: 'Clark',
        },
        company: 'AVENETRO',
        email: 'rhea.clark@avenetro.net',
        phone: '+1 (837) 471-3366',
        address: '531 Debevoise Street, Abiquiu, Oregon, 7728',
        about: 'Veniam aliqua eu qui culpa nisi anim qui veniam ex enim.',
        registered: 'Wednesday, September 5, 2018 5:49 AM',
        latitude: '-27.154951',
        longitude: '-125.263789',
        tags: ['consequat', 'ad', 'id', 'sunt', 'occaecat'],
        range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        friends: [
            {
                id: 0,
                name: 'Sampson Hughes',
            },
            {
                id: 1,
                name: 'Mathis Branch',
            },
            {
                id: 2,
                name: 'Sabrina Richmond',
            },
        ],
        greeting: 'Hello, Rhea! You have 7 unread messages.',
        favoriteFruit: 'apple',
    },
    {
        _id: '5ba7840f2b0a77562ca911e9',
        index: 1,
        guid: '6af39bb3-932b-4cea-8a66-3114f33e40cd',
        isActive: false,
        balance: '$3,423.66',
        picture: 'http://placehold.it/32x32',
        age: 29,
        eyeColor: 'blue',
        name: {
            first: 'Robbie',
            last: 'Rollins',
        },
        company: 'MUSANPOLY',
        email: 'robbie.rollins@musanpoly.co.uk',
        phone: '+1 (889) 429-2292',
        address: '737 Village Court, Riceville, Wisconsin, 1234',
        about: 'Veniam aliqua eu qui culpa nisi anim qui veniam ex enim.',
        registered: 'Friday, December 12, 2014 12:04 PM',
        latitude: '-48.466841',
        longitude: '109.167268',
        tags: ['amet', 'laborum', 'excepteur', 'consectetur', 'reprehenderit'],
        range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        friends: [
            {
                id: 0,
                name: 'Lillie Mcmahon',
            },
            {
                id: 1,
                name: 'Briana Sims',
            },
            {
                id: 2,
                name: 'Caldwell Norman',
            },
        ],
        greeting: 'Hello, Robbie! You have 8 unread messages.',
        favoriteFruit: 'apple',
    },
];
function log() {
    logger.info(templateObject_1 || (templateObject_1 = __makeTemplateObject(["heeey, this is my collection: ", ""], ["heeey, this is my collection: ", ""])), collection);
    logger.debug(templateObject_2 || (templateObject_2 = __makeTemplateObject(["nope, not going to happen ", ""], ["nope, not going to happen ", ""])), collection);
}
log();
var templateObject_1, templateObject_2;
//# sourceMappingURL=index.js.map