# User Adventure

## Plan
    -user is at a skate compition doing tricks
    -user is prompted three random tricks at a time
        -each trick has different score
        -each trick has different odds of landing it
            -math.random
            -if a-b fail
            -else land trick
    -show on top tricks landed and score
    -user has 5 chances to do tricks
    -show results page

## Pages

    1) Home
        -explain what the site is
        -rules
            -the harder the difficulty the more points
        -button to user info page
    2) User info
        -have user input name
        -user chooses character.
        -button to game page
    3) Game page
        -users chooses park from map
            -redirects them to park
        -score and trick tracker on top right
        -cross off parks been to
            -after all parks crossed of redirect to results page
    4) Park page
        -score and trick tracker on top right
        -three tricks given
            -one hard
            -one medium
            -on easy
        -after tricks finish tell them if they land
        -button to go back to Game page
    4) Result page
        -show results of user
        -compair to random results of computer
            -one who landed all easy
            -one who landed 3 easy and 1 medium
            -one who landed 2 easy, 1 medium, 1 hard
            -one who land 4 easy and 1 hard
    