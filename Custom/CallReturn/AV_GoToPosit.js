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
    CMessage(random("%PetName%", "%SubName%"));
    if(!getVar("AV_PositionSecDone", false))
    {
        AV_Kneel();
        return;
    }
    sorteio();
}
function sorteio()
{
    if (randomInteger(1, 100) <= 50)
    {
        AV_Kneel();
        return;
    }
    AV_Stand();
}
function AV_Stand()
{
    CMessage("Go to your stand slave position");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Bell.mp3");
    setVar("AV_PosStandNumber", getVar("AV_PosStandNumber", 0) + 1);
    wait(10);
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
    let answer0 = getInput("Are you in this position?");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "positions" + java.io.File.separator + "stand" + java.io.File.separator + "01.jpg");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo% %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage(random("Good boy", "Good %PetName%", "Good slave", "Good"));
        AV_RewardS();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage(random("Oh no", "Bad boy", "Bad %PetName%", "Bad slave", "Oh no %SubName%"));
        AV_Punish();
        return;
    }
    AVRamdStanding2();
}
function AVRamdStanding2()
{
    let answer0 = getInput("Are you in this position?");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "positions" + java.io.File.separator + "stand" + java.io.File.separator + "02.jpg");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo% %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage(random("Good boy", "Good %PetName%", "Good slave", "Good"));
        AV_RewardS();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage(random("Oh no", "Bad boy", "Bad %PetName%", "Bad slave", "Oh no %SubName%"));
        AV_Punish();
        return;
    }
    AVRamdStanding3();
}
function AVRamdStanding3()
{
    let answer0 = getInput("Are you in this position?");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "positions" + java.io.File.separator + "stand" + java.io.File.separator + "03.jpg");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo% %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage(random("Good boy", "Good %PetName%", "Good slave", "Good"));
        AV_RewardS();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage(random("Oh no", "Bad boy", "Bad %PetName%", "Bad slave", "Oh no %SubName%"));
        AV_Punish();
        return;
    }
    AVRamdStanding4();
}
function AVRamdStanding4()
{
    let answer0 = getInput("Are you in this position?");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "positions" + java.io.File.separator + "stand" + java.io.File.separator + "04.jpg");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo% %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage(random("Good boy", "Good %PetName%", "Good slave", "Good"));
        AV_RewardS();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage(random("Oh no", "Bad boy", "Bad %PetName%", "Bad slave", "Oh no %SubName%"));
        AV_Punish();
        return;
    }
    AVRamdStanding5();
}
function AVRamdStanding5()
{
    let answer0 = getInput("Are you in this position?");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "positions" + java.io.File.separator + "stand" + java.io.File.separator + "05.jpg");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo% %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage(random("Good boy", "Good %PetName%", "Good slave", "Good"));
        AV_RewardS();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage(random("Oh no", "Bad boy", "Bad %PetName%", "Bad slave", "Oh no %SubName%"));
        AV_Punish();
        return;
    }
    AVRamdStanding6();
}
function AVRamdStanding6()
{
    let answer0 = getInput("Are you in this position?");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "positions" + java.io.File.separator + "stand" + java.io.File.separator + "06.jpg");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo% %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage(random("Good boy", "Good %PetName%", "Good slave", "Good"));
        AV_RewardS();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage(random("Oh no", "Bad boy", "Bad %PetName%", "Bad slave", "Oh no %SubName%"));
        AV_Punish();
        return;
    }
    AVRamdStanding7();
}
function AVRamdStanding7()
{
    let answer0 = getInput("Are you in this position?");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "positions" + java.io.File.separator + "stand" + java.io.File.separator + "07.jpg");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo% %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage(random("Good boy", "Good %PetName%", "Good slave", "Good"));
        AV_RewardS();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage(random("Oh no", "Bad boy", "Bad %PetName%", "Bad slave", "Oh no %SubName%"));
        AV_Punish();
        return;
    }
    AV_Kneel();
}
function AV_Kneel()
{
    CMessage("Go to your kneel slave position");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Bell2.mp3");
    setVar("AV_PosKneelNumber", getVar("AV_PosKneelNumber", 0) + 1);
    wait(10);
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
    let answer0 = getInput("Are you in this position?");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "positions" + java.io.File.separator + "kneel" + java.io.File.separator + "01.jpg");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo% %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage(random("Good boy", "Good %PetName%", "Good slave", "Good"));
        AV_RewardK();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage(random("Oh no", "Bad boy", "Bad %PetName%", "Bad slave", "Oh no %SubName%"));
        AV_Punish();
        return;
    }
    AVRamdKneeling2();
}
function AVRamdKneeling2()
{
    let answer0 = getInput("Are you in this position?");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "positions" + java.io.File.separator + "kneel" + java.io.File.separator + "02.jpg");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo% %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage(random("Good boy", "Good %PetName%", "Good slave", "Good"));
        AV_RewardK();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage(random("Oh no", "Bad boy", "Bad %PetName%", "Bad slave", "Oh no %SubName%"));
        AV_Punish();
        return;
    }
    AVRamdKneeling3();
}
function AVRamdKneeling3()
{
    let answer0 = getInput("Are you in this position?");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "positions" + java.io.File.separator + "kneel" + java.io.File.separator + "03.jpg");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo% %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage(random("Good boy", "Good %PetName%", "Good slave", "Good"));
        AV_RewardK();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage(random("Oh no", "Bad boy", "Bad %PetName%", "Bad slave", "Oh no %SubName%"));
        AV_Punish();
        return;
    }
    AVRamdKneeling4();
}
function AVRamdKneeling4()
{
    let answer0 = getInput("Are you in this position?");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "positions" + java.io.File.separator + "kneel" + java.io.File.separator + "04.jpg");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo% %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage(random("Good boy", "Good %PetName%", "Good slave", "Good"));
        AV_RewardK();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage(random("Oh no", "Bad boy", "Bad %PetName%", "Bad slave", "Oh no %SubName%"));
        AV_Punish();
        return;
    }
    AVRamdKneeling5();
}
function AVRamdKneeling5()
{
    let answer0 = getInput("Are you in this position?");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "positions" + java.io.File.separator + "kneel" + java.io.File.separator + "05.jpg");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo% %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage(random("Good boy", "Good %PetName%", "Good slave", "Good"));
        AV_RewardK();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage(random("Oh no", "Bad boy", "Bad %PetName%", "Bad slave", "Oh no %SubName%"));
        AV_Punish();
        return;
    }
    AVRamdKneeling6();
}
function AVRamdKneeling6()
{
    let answer0 = getInput("Are you in this position?");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "positions" + java.io.File.separator + "kneel" + java.io.File.separator + "06.jpg");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo% %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage(random("Good boy", "Good %PetName%", "Good slave", "Good"));
        AV_RewardK();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage(random("Oh no", "Bad boy", "Bad %PetName%", "Bad slave", "Oh no %SubName%"));
        AV_Punish();
        return;
    }
    AVRamdKneeling7();
}
function AVRamdKneeling7()
{
    let answer0 = getInput("Are you in this position?");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "positions" + java.io.File.separator + "kneel" + java.io.File.separator + "07.jpg");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo% %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage(random("Good boy", "Good %PetName%", "Good slave", "Good"));
        AV_RewardK();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage(random("Oh no", "Bad boy", "Bad %PetName%", "Bad slave", "Oh no %SubName%"));
        AV_Punish();
        return;
    }
    AV_RewardS();
}
function AV_RewardS()
{
    CMessage("You earned one point");
    setVar("AV_PosPoints", getVar("AV_PosPoints", 0) + 1);
    if (getVar("AV_PosStandNumber", 0) > 3)
    {
        ResetStand();
        return;
    }
    return;
    AV_RewardK();
}
function AV_RewardK()
{
    CMessage("You earned one point");
    setVar("AV_PosPoints", getVar("AV_PosPoints", 0) + 1);
    if (getVar("AV_PosKneelNumber", 0) > 3)
    {
        ResetKnee();
        return;
    }
    return;
    AV_Punish();
}
function AV_Punish()
{
    CMessage("You lost one point");
    setVar("AV_PosPoints", getVar("AV_PosPoints", 0) - 1);
    CMessage("And I need to punish you...");
    switch(random("PuMS01", "PuMS02", "PuMS03"))
    {
        case "PuMS01":
        PuMS01();
        return;
        break;
        case "PuMS02":
        PuMS02();
        return;
        break;
        case "PuMS03":
        PuMS03();
        return;
        break;
    }
    PuMS01();
}
function PuMS01()
{
    run("Custom/Miniscripts/AV_Punish1");
    return;
    PuMS02();
}
function PuMS02()
{
    run("Custom/Miniscripts/AV_Punish2");
    return;
    PuMS03();
}
function PuMS03()
{
    run("Custom/Miniscripts/AV_Punish3");
    return;
    CheckNumber();
}
function CheckNumber()
{
    return;
    ResetKnee();
}
function ResetKnee()
{
    CMessage("I think you %Know% " + random("too much ", "well ") + "this position.");
    setVar("AV_PosKneelNumber", 0);
    CMessage("Let\'s change that:");
    setVar("AVRamdomKneel", getVar("#Random1, 7", 0));
    if (getVar("AVRamdomKneel", 0) == 1)
    {
        AVRamdKneeling1a();
        return;
    }
    if (getVar("AVRamdomKneel", 0) == 2)
    {
        AVRamdKneeling2a();
        return;
    }
    if (getVar("AVRamdomKneel", 0) == 3)
    {
        AVRamdKneeling3a();
        return;
    }
    if (getVar("AVRamdomKneel", 0) == 4)
    {
        AVRamdKneeling4a();
        return;
    }
    if (getVar("AVRamdomKneel", 0) == 5)
    {
        AVRamdKneeling5a();
        return;
    }
    if (getVar("AVRamdomKneel", 0) == 6)
    {
        AVRamdKneeling6a();
        return;
    }
    if (getVar("AVRamdomKneel", 0) == 7)
    {
        AVRamdKneeling7a();
        return;
    }
    AVRamdKneeling1a();
}
function AVRamdKneeling1a()
{
    CMessage("Go down in this position");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "positions" + java.io.File.separator + "kneel" + java.io.File.separator + "01.jpg");
    wait(25);
    FimKneel();
    return;
    AVRamdKneeling2a();
}
function AVRamdKneeling2a()
{
    CMessage("Go down in this position");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "positions" + java.io.File.separator + "kneel" + java.io.File.separator + "02.jpg");
    wait(25);
    FimKneel();
    return;
    AVRamdKneeling3a();
}
function AVRamdKneeling3a()
{
    CMessage("Go down in this position");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "positions" + java.io.File.separator + "kneel" + java.io.File.separator + "03.jpg");
    wait(25);
    FimKneel();
    return;
    AVRamdKneeling4a();
}
function AVRamdKneeling4a()
{
    CMessage("Go down in this position");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "positions" + java.io.File.separator + "kneel" + java.io.File.separator + "04.jpg");
    wait(25);
    FimKneel();
    return;
    AVRamdKneeling5a();
}
function AVRamdKneeling5a()
{
    CMessage("Go down in this position");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "positions" + java.io.File.separator + "kneel" + java.io.File.separator + "05.jpg");
    wait(25);
    FimKneel();
    return;
    AVRamdKneeling6a();
}
function AVRamdKneeling6a()
{
    CMessage("Go down in this position");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "positions" + java.io.File.separator + "kneel" + java.io.File.separator + "06.jpg");
    wait(25);
    FimKneel();
    return;
    AVRamdKneeling7a();
}
function AVRamdKneeling7a()
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
    CMessage("This is your new Kneel slave position %PetName%");
    CMessage("and the sound");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Bell2.mp3");
    return;
    ResetStand();
}
function ResetStand()
{
    CMessage("I think you %Know% " + random("too much ", "well ") + "this position.");
    setVar("AV_PosStandNumber", 0);
    CMessage("Let\'s change that:");
    setVar("AVRamdomStand", getVar("#Random1, 7", 0));
    if (getVar("AVRamdomStand", 0) == 1)
    {
        AVRamdStanding1a();
        return;
    }
    if (getVar("AVRamdomStand", 0) == 2)
    {
        AVRamdStanding2a();
        return;
    }
    if (getVar("AVRamdomStand", 0) == 3)
    {
        AVRamdStanding3a();
        return;
    }
    if (getVar("AVRamdomStand", 0) == 4)
    {
        AVRamdStanding4a();
        return;
    }
    if (getVar("AVRamdomStand", 0) == 5)
    {
        AVRamdStanding5a();
        return;
    }
    if (getVar("AVRamdomStand", 0) == 6)
    {
        AVRamdStanding6a();
        return;
    }
    if (getVar("AVRamdomStand", 0) == 7)
    {
        AVRamdStanding7a();
        return;
    }
    AVRamdStanding1a();
}
function AVRamdStanding1a()
{
    CMessage("Stand up in this position");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "positions" + java.io.File.separator + "stand" + java.io.File.separator + "01.jpg");
    wait(25);
    FimStand();
    return;
    AVRamdStanding2a();
}
function AVRamdStanding2a()
{
    CMessage("Stand up in this position");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "positions" + java.io.File.separator + "stand" + java.io.File.separator + "02.jpg");
    wait(25);
    FimStand();
    return;
    AVRamdStanding3a();
}
function AVRamdStanding3a()
{
    CMessage("Stand up in this position");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "positions" + java.io.File.separator + "stand" + java.io.File.separator + "03.jpg");
    wait(25);
    FimStand();
    return;
    AVRamdStanding4a();
}
function AVRamdStanding4a()
{
    CMessage("Stand up in this position");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "positions" + java.io.File.separator + "stand" + java.io.File.separator + "04.jpg");
    wait(25);
    FimStand();
    return;
    AVRamdStanding5a();
}
function AVRamdStanding5a()
{
    CMessage("Stand up in this position");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "positions" + java.io.File.separator + "stand" + java.io.File.separator + "05.jpg");
    wait(25);
    FimStand();
    return;
    AVRamdStanding6a();
}
function AVRamdStanding6a()
{
    CMessage("Stand up in this position");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "positions" + java.io.File.separator + "stand" + java.io.File.separator + "06.jpg");
    wait(25);
    FimStand();
    return;
    AVRamdStanding7a();
}
function AVRamdStanding7a()
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
    CMessage("This is your new Stand lave position %SubName%");
    CMessage("and the sound");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Bell.mp3");
    return;
}