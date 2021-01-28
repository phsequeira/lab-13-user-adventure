// IMPORT MODULES under test here:
import { easyscore, mediumscore, hardscore } from '../data.js';

const test = QUnit.test;


test('when landed(1) mediumscore will return 300 pts', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 100 ;
    const expected2 = 0;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = easyscore(1);
    const actual2 = easyscore(0); 

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
    expect.equal(actual2, expected2);
});
test('when landed(1) mediumscore will return 300 pts', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 300 ;
    const expected2 = 0;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = mediumscore(1);
    const actual2 = mediumscore(0); 

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
    expect.equal(actual2, expected2);
});


test('when landed(1) mediumscore will return 300 pts', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 500 ;
    const expected2 = 0;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = hardscore(1);
    const actual2 = hardscore(0); 

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
    expect.equal(actual2, expected2);
});