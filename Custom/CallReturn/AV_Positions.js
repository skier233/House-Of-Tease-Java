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
    if(getVar("AV_PositionGameRules", false))
    {
        SkipInstruction();
        return;
    }
    CMessage("Hey %SubName%");
    setVar("AV_PosKneelNumber", 0);
    CMessage("We are doing this for some time now...");
    setVar("AV_PosPoints", 0);
    CMessage("And I want to bring this to the next level");
    CMessage("Being a slave means more than jerking your cock for me every time you\'re aroused.");
    CMessage("Being a slave means devoting yourself to an ideal, and being MY slave means devoting yourself to being the ideal slave.");
    CMessage("One who rises every morning thinking of me and goes to sleep each night thinking of me.");
    CMessage("One who focuses on the things that can be done to please me, learning my likes and dislikes, trying to make himself useful to me.");
    CMessage("So I will begin with a little training");
    CMessage("Sessions affirmations and mantras for you.");
    CMessage("Because I know how the male mind works,");
    CMessage("my words will burn themselves into your mind.");
    CMessage("Follow the instructions and you\'ll be on your way to being a good little slave boy.");
    CMessage("you\'re gonna work on some slave positions");
    CMessage("I will show you a position (kneel or stand)");
    CMessage("You need to memorize this position for future sessions");
    CMessage("Anytime in the session when you hear a specific sound");
    CMessage("you must go to this position immediately");
    CMessage("If you get the correct position fast, you got points.");
    CMessage("If not, you lose points.");
    CMessage("from time to time, I can change the position, for you do not get spoiled");
    let answer0 = getInput("understood?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo% %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Good");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("You will when we start");
    }
    CMessage("Let\'s begin...");
    setVar("AV_PositionGameRules", true);
    AV_PositionRoll();
    return;
    SkipInstruction();
}
function SkipInstruction()
{
    CMessage("Continuing in My training program, this lesson contains your new position.");
    setVar("AV_PosStandNumber", 0);
    CMessage("Remember its Only My Way.");
    CMessage("you just submit and fallow my rules..");
    setVar("AV_PositionSecDone", true);
    CMessage("I will reprogram you, make you to become my obediant puppet");
    SecondRoll();
    return;
    AV_PositionRoll();
}
function AV_PositionRoll()
{
    CMessage("Your first position is kneeling for me");
    setVar("AVRamdomKneel", getVar("#Random1, 7", 0));
    if (getVar("AVRamdomKneel", 0) == 1)
    {
        AVRamdKneeling1();
        return;
    }
    if (getVar("AVRamdomKneel", 0) == 2)
    {
        AVRamdKneeling2();
        return;
    }
    if (getVar("AVRamdomKneel", 0) == 3)
    {
        AVRamdKneeling3();
        return;
    }
    if (getVar("AVRamdomKneel", 0) == 4)
    {
        AVRamdKneeling4();
        return;
    }
    if (getVar("AVRamdomKneel", 0) == 5)
    {
        AVRamdKneeling5();
        return;
    }
    if (getVar("AVRamdomKneel", 0) == 6)
    {
        AVRamdKneeling6();
        return;
    }
    if (getVar("AVRamdomKneel", 0) == 7)
    {
        AVRamdKneeling7();
        return;
    }
    AVRamdKneeling1();
}
function AVRamdKneeling1()
{
    CMessage("Go down in this position");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "positions" + java.io.File.separator + "kneel" + java.io.File.separator + "01.jpg");
    wait(25);
    FimKneel();
    return;
    AVRamdKneeling2();
}
function AVRamdKneeling2()
{
    CMessage("Go down in this position");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "positions" + java.io.File.separator + "kneel" + java.io.File.separator + "02.jpg");
    wait(25);
    FimKneel();
    return;
    AVRamdKneeling3();
}
function AVRamdKneeling3()
{
    CMessage("Go down in this position");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "positions" + java.io.File.separator + "kneel" + java.io.File.separator + "03.jpg");
    wait(25);
    FimKneel();
    return;
    AVRamdKneeling4();
}
function AVRamdKneeling4()
{
    CMessage("Go down in this position");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "positions" + java.io.File.separator + "kneel" + java.io.File.separator + "04.jpg");
    wait(25);
    FimKneel();
    return;
    AVRamdKneeling5();
}
function AVRamdKneeling5()
{
    CMessage("Go down in this position");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "positions" + java.io.File.separator + "kneel" + java.io.File.separator + "05.jpg");
    wait(25);
    FimKneel();
    return;
    AVRamdKneeling6();
}
function AVRamdKneeling6()
{
    CMessage("Go down in this position");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "positions" + java.io.File.separator + "kneel" + java.io.File.separator + "06.jpg");
    wait(25);
    FimKneel();
    return;
    AVRamdKneeling7();
}
function AVRamdKneeling7()
{
    CMessage("Go down in this position");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "positions" + java.io.File.separator + "kneel" + java.io.File.separator + "07.jpg");
    wait(25);
    FimKneel();
    return;
    FimKneel();
}
function FimKneel()
{
    CMessage("Remember this exact position %PetName%");
    CMessage("This is your kneel slave position");
    CMessage("From now on, when you hear this sound");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Bell2.mp3");
    CMessage("you need to go to this position fast to earn points");
    CMessage("Unless I change to another kneeling position");
    CMessage("You can sit now");
    return;
    SecondRoll();
}
function SecondRoll()
{
    CMessage("Your Second position is standing and waiting for me");
    setVar("AVRamdomStand", getVar("#Random1, 7", 0));
    if (getVar("AVRamdomStand", 0) == 1)
    {
        AVRamdStanding1();
        return;
    }
    if (getVar("AVRamdomStand", 0) == 2)
    {
        AVRamdStanding2();
        return;
    }
    if (getVar("AVRamdomStand", 0) == 3)
    {
        AVRamdStanding3();
        return;
    }
    if (getVar("AVRamdomStand", 0) == 4)
    {
        AVRamdStanding4();
        return;
    }
    if (getVar("AVRamdomStand", 0) == 5)
    {
        AVRamdStanding5();
        return;
    }
    if (getVar("AVRamdomStand", 0) == 6)
    {
        AVRamdStanding6();
        return;
    }
    if (getVar("AVRamdomStand", 0) == 7)
    {
        AVRamdStanding7();
        return;
    }
    AVRamdStanding1();
}
function AVRamdStanding1()
{
    CMessage("Stand up in this position");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "positions" + java.io.File.separator + "stand" + java.io.File.separator + "01.jpg");
    wait(25);
    FimStand();
    return;
    AVRamdStanding2();
}
function AVRamdStanding2()
{
    CMessage("Stand up in this position");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "positions" + java.io.File.separator + "stand" + java.io.File.separator + "02.jpg");
    wait(25);
    FimStand();
    return;
    AVRamdStanding3();
}
function AVRamdStanding3()
{
    CMessage("Stand up in this position");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "positions" + java.io.File.separator + "stand" + java.io.File.separator + "03.jpg");
    wait(25);
    FimStand();
    return;
    AVRamdStanding4();
}
function AVRamdStanding4()
{
    CMessage("Stand up in this position");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "positions" + java.io.File.separator + "stand" + java.io.File.separator + "04.jpg");
    wait(25);
    FimStand();
    return;
    AVRamdStanding5();
}
function AVRamdStanding5()
{
    CMessage("Stand up in this position");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "positions" + java.io.File.separator + "stand" + java.io.File.separator + "05.jpg");
    wait(25);
    FimStand();
    return;
    AVRamdStanding6();
}
function AVRamdStanding6()
{
    CMessage("Stand up in this position");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "positions" + java.io.File.separator + "stand" + java.io.File.separator + "06.jpg");
    wait(25);
    FimStand();
    return;
    AVRamdStanding7();
}
function AVRamdStanding7()
{
    CMessage("Stand up in this position");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "positions" + java.io.File.separator + "stand" + java.io.File.separator + "07.jpg");
    wait(25);
    FimStand();
    return;
    FimStand();
}
function FimStand()
{
    CMessage("Remember this exact position %SubName%");
    CMessage("This is your stand slave position");
    CMessage("From now on, when you hear this sound");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Bell.mp3");
    CMessage("you need to go to this position fast to earn points");
    CMessage("Unless I change to another standing position");
    CMessage("You can sit now");
    return;
}