function easy() {
    let odds = Math.ceil(Math.random() * 10) + 1;
    if (odds === 1){
        return 0;
    }
    else {
        return 1;
    }
}
const easyresult = easy();

function easyscore(results) {
    if (results === 1){
        return 100;
    }
    else {
        return 0;
    }
}
function medium() {
    let odds = Math.ceil(Math.random() * 10) + 1;
    if (odds <= 3){
        return 0;
    }
    else {
        return 1;
    }
}
const mediumresult = medium();

function mediumscore(results) {
    if (results === 1){
        return 300;
    }
    else {
        return 0;
    }
}

function hard() {
    let odds = Math.ceil(Math.random() * 10) + 1;
    if (odds <= 5){
        return 0;
    }
    else {
        return 1;
    }
}
const hardresult = hard();

function hardscore(results) {
    if (results === 1){
        return 500;
    }
    else {
        return 0;
    }
}

const rail = {
    id: 'rail',
    title: 'Radical Rail',
    map: {
        //top: '%',
        //left: '%'
    },
    image: './assets/rail.PNG',
    description: 'You have come up on the Radical Rail! Which trick would you like to try?',
    choices: [{
        id: 'easy',
        description: 'Frontside 50-50(easy)',
        result: easyresult,
        score: easyscore(easyresult)
    },
    {
        id: 'medium',
        description: 'Backside Tailslide(medium)',
        result: mediumresult,
        score: mediumscore(mediumresult)
    },
    {
        id: 'hard',
        description: 'Frontside Bluntslide(hard)',
        result: hardresult,
        score: hardscore(hardresult)
    }]
};

const ramp = {
    id: 'ramp',
    title: 'Vert Ramp',
    map: {
        //top: '%',
        //left: '%'
    },
    image: './assets/ramp.PNG',
    description: 'Now it is time for the Vert Ramp! Which trick do you want to try?',
    choices: [{
        id: 'easy',
        description: 'Rock to Fakie(easy)',
        result: easyresult,
        score: easyscore(easyresult)
    },
    {
        id: 'medium',
        description: 'Frontside Ollie(medium)',
        result: mediumresult,
        score: mediumscore(mediumresult)
    },
    {
        id: 'hard',
        description: 'Pivot Fakie(hard)',
        result: hardresult,
        score: hardscore(hardresult)
    }]
};

const flat = {
    id: 'flat',
    title: 'Vert Ramp',
    map: {
        //top: '%',
        //left: '%'
    },
    image: './assets/flat.PNG',
    description: 'Prove yourself on Flat Ground! Which trick do you want to try?',
    choices: [{
        id: 'easy',
        description: 'Pop Shuvit(easy)',
        result: easyresult,
        score: easyscore(easyresult)
    },
    {
        id: 'medium',
        description: 'Kickflip(medium)',
        result: mediumresult,
        score: mediumscore(mediumresult)
    },
    {
        id: 'hard',
        description: 'Strawberry Milkshake(hard)',
        result: hardresult,
        score: hardscore(hardresult)
    }]
};

const skate = [
    rail,
    ramp,
    flat,
];

export default skate;