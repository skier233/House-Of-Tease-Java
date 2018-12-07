main();
function main()
{
    if(!getVar("AV_MoreTalk", false))
    {
        FirstTalk();
        return;
    }
    if(!getVar("AV_Triv_TVDone", false))
    {
        TVshow();
        return;
    }
    if(!getVar("AV_Triv_MilovanaDone", false))
    {
        Milovana();
        return;
    }
    if(!getVar("AV_Triv_MovieDone", false))
    {
        Movie();
        return;
    }
    if(!getVar("AV_Triv_MusicDone", false))
    {
        Music();
        return;
    }
    if(getVar("TriviaDone", false))
    {
        TriviaDone();
        return;
    }
    setVar("TriviaDone", true);
    switch(random("TVshow", "Movie", "Milovana"))
    {
        case "TVshow":
        TVshow();
        return;
        break;
        case "Movie":
        Movie();
        return;
        break;
        case "Milovana":
        Milovana();
        return;
        break;
    }
    Music();
}
function Music()
{
    let answer0 = getInput("Do you listen to music while chat with me?");
    setVar("AV_Triv_MusicDone", true);
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo% %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("interesting");
        setVar("AV_Triv_MusicPlaying", true);
        what_song();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Mmm");
    }
    let answer1 = getInput("But you like music, right?");
    while (!(answer1.isLike("yes") || answer1.isLike("no")))
    {
        answer1 = getInput("%YesorNo% %SubName%?");
    }
    if (answer1.isLike("yes"))
    {
        CMessage("cool");
        setVar("AV_Triv_MusicStyle", true);
        what_music();
        return;
    }
    else if (answer1.isLike("no"))
    {
        CMessage("oh...strange");
        no_music();
        return;
    }
    what_song();
}
function what_song()
{
    CMessage("What song are you listening to right now?");
    setVar("AV_Triv_MusicPlaying", createInput().getAnswer());
    CMessage("Nice song...");
    CMessage("Let\'s see if the next time you listen to " + getVar("AV_Triv_MusicPlaying", "") + "you will have a erection %Lol%");
    EndTrivia();
    return;
    what_music();
}
function what_music()
{
    CMessage("What is your favorite music style?");
    setVar("AV_Triv_MusicStyle", createInput().getAnswer());
    CMessage("Mine too!!");
    EndTrivia();
    return;
    no_music();
}
function no_music()
{
    CMessage("I thought everyone liked music.");
    EndTrivia();
    return;
    TVshow();
}
function TVshow()
{
    let answer0 = getInput("Do you watch the %AVX_TR_TVShow% show?");
    setVar("AV_Triv_TVDone", true);
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo% %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage(random("cool", "nice"));
        yesshow();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage(random("%Okay%", "ohh", "mmm"));
        noshow();
        return;
    }
    yesshow();
}
function yesshow()
{
    CMessage(random("I love that show ", "I was thinking of watching this show, now I think I should ", "I like that one ", "Me too, it\'s a great show ", "I think everyone watches this series ", "Another thing we have in common ") + "%EmoteHappy%");
    EndTrivia();
    return;
    noshow();
}
function noshow()
{
    CMessage(random("Yeah, I do not like very much", "to bad, I love this show", "to bad, you should watch, it\'s a great show", "yeah, I do not recommend", "aww, too bad", "so, no smaltalk about that one huh?"));
    EndTrivia();
    return;
    Movie();
}
function Movie()
{
    let answer0 = getInput("Have you seen the %AVX_TR_Movie% movie?");
    setVar("AV_Triv_MovieDone", true);
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo% %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage(random("cool", "nice"));
        yesmovie();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage(random("%Okay%", "ohh", "mmm"));
        nomovie();
        return;
    }
    nomovie();
}
function nomovie()
{
    CMessage(random("nevermind then", "ok move on", "And I thought everyone had already watched this", "no problem", "welp", "you should", "you should watch, it\'s a great movie", "it\'s overrated anyway"));
    EndTrivia();
    return;
    yesmovie();
}
function yesmovie()
{
    let answer0 = getInput(random("did you like it", "did you enjoy it", "Did you think it was good??"));
    if (answer0.isLike("yes"))
    {
        yeslikemovie();
        return;
    }
    else if (answer0.isLike("no"))
    {
        nolikemovie();
        return;
    }
    yeslikemovie();
}
function yeslikemovie()
{
    CMessage(random("I liked too", "I loved that movie", "I did not like it very much", "yeah, me too"));
    EndTrivia();
    return;
    nolikemovie();
}
function nolikemovie()
{
    CMessage(random("me neither", "I did not either", "ohh, I loved", "too bad, I liked"));
    EndTrivia();
    return;
    Milovana();
}
function Milovana()
{
    let answer0 = getInput("Have you " + random("played ", "tried ", "experienced ") + "any " + random("tease ", "webtease ") + "on the Milovana site " + random("recently", "lately"));
    setVar("AV_Triv_MilovanaDone", true);
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo% %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        yesmilovana();
        return;
    }
    else if (answer0.isLike("no"))
    {
        nomilovana();
        return;
    }
    nomilovana();
}
function nomilovana()
{
    CMessage(random("Good boy", "good %PetName%", "good slave"));
    CMessage(random("You know that %Cock% belongs to me", "You know I am the only one who can tease you", "But you can try some teases there, it\'s good to keep you %Aching%", "Well, you can try one, but don\'t cum even if the tease says so"));
    EndTrivia();
    return;
    yesmilovana();
}
function yesmilovana()
{
    CMessage(random("Hmm, cheating on me?", "Not enough tease with me?", "OK, but I dont want you cumming there", "OK, but you should deny yourself even if the tease say the opposite", "No problem, but do not do this very often."));
    let answer0 = getInput("Do you remember the last one you did?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo% %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        yesrememb();
        return;
    }
    else if (answer0.isLike("no"))
    {
        norememb();
        return;
    }
    yesrememb();
}
function yesrememb()
{
    CMessage(random("OK, let me take a look", "Hmm, wait a minute, let me see that one", "I need to check that one"));
    wait(30);
    CMessage(random("interesting %SubName%", "really?? that one?", "%Lol% %SubName%", "Hmm...that\'s hot"));
    if (randomInteger(1, 100) <= 50)
    {
        Sug_Tease();
        return;
    }
    EndTrivia();
    return;
    norememb();
}
function norememb()
{
    CMessage(random("No problem", "Ok then", "right then"));
    if (randomInteger(1, 100) <= 50)
    {
        EndTrivia();
        return;
    }
    Sug_Tease();
}
function Sug_Tease()
{
    CMessage(random("You now what", "I had a idea"));
    CMessage("I want you to " + random("play ", "try ") + "one tease for me...of course, dont cum even if the tease say.");
    CMessage("this will be added to your tasks at the end of our session");
    CMessage("You will enter the webteases page and play the first Random Tease you see.");
    EndTrivia();
    return;
    EndTrivia();
}
function EndTrivia()
{
    CMessage(random("Enough of talk, more tease now", "Enough of smalltalk for now", "OK, Let\'s go back to business"));
    return;
    TriviaDone();
}
function TriviaDone()
{
    if(!getVar("AV_Pergunta04", false))
    {
        run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AV_Trivia2.js");
    }
    return;
    FirstTalk();
}
function FirstTalk()
{
    CMessage("Hey %SubName%");
    setVar("AV_MoreTalk", true);
    let answer0 = getInput("Let\'s " + random("chat ", "talk ") + "a little", 6);
    if (answer0.isTimeout())
    {
        how_are_you();
        return;
    }
    if (answer0.isLike("tease", "masturbate", "stroke", "dominate", "domme", "sub", "submit", "submissive", "sex"))
    {
        CMessage("%Laugh% not now");
    }
    else if (answer0.isLike("beautiful", "gorgeous", "attractive", "sexy", "you", "you", "amazing", "incredible", "hot"))
    {
        CMessage("I know...");
    }
    else
    {
    }
    how_are_you();
}
function how_are_you()
{
    let answer0 = getInput("How are you?");
    if (answer0.isLike("good", "fine", "okay", "great", "super", "awesome"))
    {
        CMessage("That\'s good to hear %Smile%");
    }
    else if (answer0.isLike("good", "good", "okay", "bad", "terrible"))
    {
        CMessage("I\'m sorry to hear that");
    }
    else if (answer0.isLike("tease", "masturbate", "stroke", "dominate", "domme", "sub", "submit", "submissive", "sex"))
    {
        CMessage("Are you asking me to be put in chastity?");
    }
    else if (answer0.isLike("beautiful", "gorgeous", "attractive", "sexy", "you", "you", "amazing", "incredible", "hot"))
    {
        CMessage("Aww... %ThankYou%");
    }
    else
    {
        CMessage("%stopstroking%", 0);
    }
    if (answer0.isTimeout())
    {
        talk_more_often();
        return;
    }
    if (answer0.isLike("talk", "talk"))
    {
        CMessage("We definitely should %Smile%");
    }
    else if (answer0.isLike("talk", "often", "talking"))
    {
        CMessage("I know, right?");
    }
    else if (answer0.isLike("tease", "masturbate", "stroke", "dominate", "domme", "sub", "submit", "submissive", "sex"))
    {
        CMessage("So talking is not your strong suit...?");
    }
    else if (answer0.isLike("beautiful", "gorgeous", "attractive", "sexy", "you", "you", "amazing", "incredible", "hot"))
    {
        CMessage("%stopstroking%", 0);
        do_you_mean_that();
        return;
    }
    else
    {
    }
    talk_more_often();
}
function talk_more_often()
{
    let answer0 = getInput("You know, I like you", 10);
    if (answer0.isTimeout())
    {
        anyways_I_should_go();
        return;
    }
    if (answer0.isLike("too", "too", "too", "well", "likewise"))
    {
        CMessage("Well there you go, we seem to have this psychic connection %Laugh%");
    }
    else if (answer0.isLike("tease", "masturbate", "stroke", "dominate", "domme", "sub", "submit", "submissive", "sex"))
    {
        CMessage("Are you asking me to be put in chastity?");
    }
    else if (answer0.isLike("beautiful", "gorgeous", "attractive", "sexy", "you", "you", "amazing", "incredible", "hot"))
    {
        CMessage("%SubName% please...");
        do_you_mean_that();
        return;
    }
    else if (answer0.isLike("really"))
    {
        CMessage("Is that so hard to believe? %Smile%");
    }
    else
    {
        CMessage("I had hoped it would me mutual...");
    }
    anyways_I_should_go();
}
function anyways_I_should_go()
{
    let answer0 = getInput("Anyways, we should continue our session", 6);
    if (answer0.isTimeout())
    {
        talk_later();
        return;
    }
    if (answer0.isLike("wait", "dont go", "dont leave", "stay"))
    {
        CMessage("Well I guess I don't have to go <i>right</i> now...");
        talk_some_more();
        return;
    }
    else if (answer0.isLike("tease", "masturbate", "stroke", "dominate", "domme", "sub", "submit", "submissive", "sex"))
    {
        CMessage("In a minute, %SubName% %Lol%");
    }
    else if (answer0.isLike("beautiful", "gorgeous", "attractive", "sexy", "you", "you", "amazing", "incredible", "hot"))
    {
        do_you_mean_that();
        return;
    }
    talk_later();
}
function talk_later()
{
    return;
    talk_some_more();
}
function talk_some_more()
{
    let answer0 = getInput("What\'s on your mind?");
    if (answer0.isLike("tease", "masturbate", "stroke", "dominate", "domme", "sub", "submit", "submissive", "sex"))
    {
        CMessage("I don\'t know, I feel like you\'re just jerking me around now");
    }
    else if (answer0.isLike("beautiful", "gorgeous", "attractive", "sexy", "you", "you", "amazing", "incredible", "hot"))
    {
        do_you_mean_that();
        return;
    }
    else
    {
        CMessage("OK then");
    }
    return;
    do_you_mean_that();
}
function do_you_mean_that()
{
    let answer0 = getInput("Do you mean that?");
    if (answer0.isLike("yes", "absolutely", "true"))
    {
        CMessage("That\'s so sweet %Smile%");
    }
    else if (answer0.isLike("no", "lie", "lied"))
    {
        CMessage("That\'s very funny %SubName%");
        takes_too_long();
        return;
    }
    else if (answer0.isLike("tease", "masturbate", "stroke", "dominate", "domme", "sub", "submit", "submissive", "sex"))
    {
        CMessage("Now you\'re just messing with me %SubName%");
        takes_too_long();
        return;
    }
    else if (answer0.isLike("beautiful", "gorgeous", "attractive", "sexy", "you", "you", "amazing", "incredible", "hot"))
    {
        CMessage("That\'s so sweet %Smile%");
    }
    else
    {
    }
    let answer1 = getInput("I\'ve got to ask you though, and sorry if I\'m being a little too direct", 6);
    if (answer1.isTimeout())
    {
        are_you_in_love();
        return;
    }
    if (answer1.isLike("okay"))
    {
    }
    else
    {
    }
    are_you_in_love();
}
function are_you_in_love()
{
    let answer0 = getInput("Are you.. in love with me?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("Yes or no?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("That\'s so sweet %Smile%");
        sigh_of_relief();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Ohh");
    }
    let answer1 = getInput("I just make your hormones go all crazy, is that it?");
    while (!(answer1.isLike("yes") || answer1.isLike("no")))
    {
        answer1 = getInput("Yes or no?");
    }
    if (answer1.isLike("yes"))
    {
        CMessage("I\'m not surprised %SubName%");
    }
    else if (answer1.isLike("no"))
    {
        CMessage("Don\'t deny it %SubName%");
    }
    CMessage("Guys stare at me in the street, I know I\'m hot %Smile%");
    CMessage("I\'m a tease %Grin%");
    CMessage("It turns me on to know that guys get hard for me");
    CMessage("It gives me power over them");
    CMessage("And apparently, you\'re no different");
    CMessage("You know I\'m right");
    CMessage("%SubName%...");
    CMessage("You <i>wanted</i> me to know what a pervert you are, didn't you");
    CMessage("I know exactly what you like %SubName%");
    CMessage("And I know what you crave");
    showTaggedImage(4, ["captions"]);
    lockImages();
    CMessage("I know what kind of guy your are");
    CMessage("We have a lot of fun together %Grin%");
    showTaggedImage(4, ["captions"]);
    CMessage("But that is enough for now");
    unlockImages();
    return;
    sigh_of_relief();
}
function sigh_of_relief()
{
    CMessage("Because I\'ve been thinking about you %Smile%");
    CMessage("I\'ve been thinking about all the things I could do to you");
    CMessage("There\'s so much more we can do besides tease and denial");
    CMessage("But we\'ll figure it out along the way, %PetName%");
    takes_too_long();
}
function takes_too_long()
{
    return;
}