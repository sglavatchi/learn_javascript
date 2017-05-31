var moonPhase = 'full';
var foggyNight = false;

if (moonPhase === 'full' || foggyNight) {
    console.log('Howwwlll!!');
} else if (moonPhase === 'mostly full') {
    console.log('Arms and legs are getting hairier.');
} else if (moonPhase === 'mostly new') {
    console.log('Back on two feet');
} else {
    console.log('Invalid moon phase');
}

switch (moonPhase) {
    case 'full':
        console.log('Howwwlll!!');
        break;
    case 'mostly full':
        console.log('Arms and legs are getting hairier.');
        break;
    case 'mostly new':
        console.log('Back on two feet');
        break;
    default:
        console.log('Invalid moon phase');
        break;
}

//https://www.codecademy.com/en/courses/learn-javascript/lessons/functions/exercises/intro-to-functions?action=lesson_resume&link_content_target=interstitial_lesson