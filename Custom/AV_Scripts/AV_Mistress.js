main();
function main()
{
    if (isStroking())
    {
        Sub_Stroking();
        return;
    }
    else
    {
        Sub_Not_Stroking();
        return;
    }
    Sub_Stroking();
}
function Sub_Stroking()
{
    CMessage("%stopstroking%", 0);
    stopStroking();
    Sub_Not_Stroking();
}
function Sub_Not_Stroking()
{
    if(getVar("AV_DommeMistress", false))
    {
        run("Interrupt/AV_Controle");
    }
    let answer0 = getInput("Are you sure %PetName%");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("Yes or no %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Hmm");
        youslave();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("You don\'t?");
        skip();
        return;
    }
    promise();
}
function promise()
{
    CMessage("What I want is a slave, a toy that I can play with, someone who will do ANYTHING I demand");
    let answer0 = getInput("You need to make a decision do you want to commit to being my slave today?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("Yes or no %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Ok, I am glad you have agreed");
        youslave();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("You don\'t?");
        skip2();
        return;
    }
    youslave();
}
function youslave()
{
    CMessage(random("Well there\'s no going back now", "I got some inspiration from the internet... but it\'s tailored to our situation"));
    increaseAnger(-3)
    increaseAnger(4)
    increaseAnger(4)
    setTempVar("AV_DommeMistress", true);
    if (randomInteger(1, 100) <= 50)
    {
        WhisperMiss();
        return;
    }
    if (randomInteger(1, 100) <= 50)
    {
        slaveLife();
        return;
    }
    CMessage("Let\'s go over it, shall we?");
    if (randomInteger(1, 100) <= 75)
    {
        ReadLimits();
        return;
    }
    CMessage("Ok, I\'ve already signed it as the Dominant");
    CMessage("Ah, here it is. \'Henceforth, the undersigned- that\'s you- shall be referred to as the submissive.");
    ReadLimits();
}
function ReadLimits()
{
    CMessage("I want to write some articles to this Contract, like");
    setRapidText(true);
    CMessage("Names and Titles");
    CMessage("Authority");
    CMessage("Limits");
    setRapidText(false);
    CMessage("Hmm yes...lets talk about limits");
    CMessage("I remember some of the kinks you dont like");
    CMessage("Since today I will be your Mistress...");
    CMessage("I think I can push  some of them %EmoteLaugh%");
    setTempVar("av_fetish_pain", true);
    setTempVar("av_fetish_rough", true);
    if (randomInteger(1, 100) <= 70)
    {
        n01();
        return;
    }
    setTempVar("av_fetish_bondage", true);
    n01();
}
function n01()
{
    if (randomInteger(1, 100) <= 70)
    {
        n02();
        return;
    }
    setTempVar("av_fetish_hothax", true);
    n02();
}
function n02()
{
    if (randomInteger(1, 100) <= 70)
    {
        n03();
        return;
    }
    setTempVar("av_fetish_pegging", true);
    n03();
}
function n03()
{
    if (randomInteger(1, 100) <= 70)
    {
        n04();
        return;
    }
    setTempVar("av_fetish_cei", true);
    n04();
    return;
    WhisperMiss();
}
function WhisperMiss()
{
    CMessage("I\'m the slave whisper and this colar its the mark of obediance.");
    CMessage("Kneel down puppet, its time for our training lesson.");
    setTempVar("AV_SubKnees", true);
    CMessage("Eager to begin your total submission to me?");
    CMessage("Training will be very thorough and I have very high expectations of those who kneel before me.");
    CMessage("I will require total servitude and your life will be completely focused and dedicated to pleasing me.");
    CMessage("The training to mold you into my perfect slave begins here...");
    n04();
    return;
    slaveLife();
}
function slaveLife()
{
    CMessage("Today is a special day for you");
    CMessage("it\'s the day you become my slave.");
    CMessage("I\'m going to tell you in detail how you\'re going to live");
    CMessage("I and I alone now decide your fate, what you will be and how you will do it.");
    CMessage("Are you nervous?");
    CMessage("Are you thinking about backing out?");
    CMessage("Too bad you can\'t, even if you wanted to.");
    CMessage("I own you now!");
    n04();
    return;
    n04();
}
function n04()
{
    if(!getVar("AV_PinDone", false))
    {
        CMessage("I want you to fetch some nipple clamps or clothespins");
        setVar("AV_PinDone", true);
    }
    if(!getVar("AV_PinDone", false))
    {
        CMessage("And a spoon or ruler");
        wait(25);
    }
    CMessage("Let\'s the fun begin");
    return;
    skip2();
}
function skip2()
{
    if (randomInteger(1, 100) <= 50)
    {
        Brava();
        return;
    }
    skip();
    return;
    Brava();
}
function Brava()
{
    increaseAnger(3)
    return;
    skip();
}
function skip()
{
    return;
    CMessage("MAYBE A ERROR WITH END SCRIPT. ADDING RAMDOM LINES TO TRY TO FIX");
    CMessage("MAYBE A ERROR WITH END SCRIPT. ADDING RAMDOM LINES TO TRY TO FIX");
    CMessage("MAYBE A ERROR WITH END SCRIPT. ADDING RAMDOM LINES TO TRY TO FIX");
    CMessage("MAYBE A ERROR WITH END SCRIPT. ADDING RAMDOM LINES TO TRY TO FIX");
    CMessage("MAYBE A ERROR WITH END SCRIPT. ADDING RAMDOM LINES TO TRY TO FIX");
    CMessage("MAYBE A ERROR WITH END SCRIPT. ADDING RAMDOM LINES TO TRY TO FIX");
    CMessage("MAYBE A ERROR WITH END SCRIPT. ADDING RAMDOM LINES TO TRY TO FIX");
    CMessage("MAYBE A ERROR WITH END SCRIPT. ADDING RAMDOM LINES TO TRY TO FIX");
    CMessage("MAYBE A ERROR WITH END SCRIPT. ADDING RAMDOM LINES TO TRY TO FIX");
    CMessage("MAYBE A ERROR WITH END SCRIPT. ADDING RAMDOM LINES TO TRY TO FIX");
    CMessage("MAYBE A ERROR WITH END SCRIPT. ADDING RAMDOM LINES TO TRY TO FIX");
    CMessage("MAYBE A ERROR WITH END SCRIPT. ADDING RAMDOM LINES TO TRY TO FIX");
    CMessage("MAYBE A ERROR WITH END SCRIPT. ADDING RAMDOM LINES TO TRY TO FIX");
    CMessage("MAYBE A ERROR WITH END SCRIPT. ADDING RAMDOM LINES TO TRY TO FIX");
    CMessage("MAYBE A ERROR WITH END SCRIPT. ADDING RAMDOM LINES TO TRY TO FIX");
    return;
}