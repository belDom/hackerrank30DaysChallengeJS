// Day 16: Exceptions - String to Integer

const S = 'az';

try {
    console.log(parseInt(S).toString().replace('NaN', 'Bad String'));
} catch (error) {
    console.log('Bad String');
}
