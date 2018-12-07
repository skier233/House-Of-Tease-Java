main();
function main()
{
    setAFK(false);
    unlockImages();
    //TODO: Turn Slideshow off
    delVar("AV_AskedSlow");
    delVar("av_intera_001");
    delVar("av_intera_002");
    delVar("av_intera_003");
    delVar("av_intera_004");
    delVar("av_intera_005");
    delVar("av_intera_006");
    delVar("av_intera_007");
    delVar("av_intera_008");
    delVar("av_intera_009");
    delVar("av_intera_010");
    delVar("av_intera_011");
    delVar("av_intera_012");
    delVar("av_intera_013");
    delVar("av_intera_014");
    delVar("av_intera_015");
    delVar("av_intera_016");
    delVar("av_intera_017");
    delVar("av_intera_018");
    delVar("av_intera_019");
    delVar("av_MAT5a04");
    delVar("av_MAT5a03");
    delVar("av_MAT5a02");
    delVar("av_MAT5a01");
    delVar("av_MG6a03");
    delVar("av_MG6a02");
    delVar("av_MG6a01");
    delVar("av_GlitterPin");
    delVar("StopAllowed");
    delVar("AV_AskedEdge");
    setVar("AV_QteModulos", getVar("AV_QteModulos", 0) + 1);
    if(getVar("av_CamDone", false))
    {
        SkipCam();
        return;
    }
    if (randomInteger(1, 100) <= 85)
    {
        SkipCam();
        return;
    }
    if(getVar("av_CamAlternate", false))
    {
        ResetCam();
        return;
    }
    setVar("moduletorun", "WebCam")
    getLocalTeasePicture("Images" + java.io.File.separator + "WebCam");
    SkipCam();
    return;
    ResetCam();
}
function ResetCam()
{
    delVar("av_CamAlternate");
    setTempVar("av_CamDone", true);
    SkipCam();
}
function SkipCam()
{
    if (getVar("AV_LikedClothes", 0) <= 0)
    {
        AV_ChClothes();
        return;
    }
    if (getVar("AV_LikedClothes", 0) > 0)
    {
        AV_KeepClothes();
        return;
    }
    AV_ChClothes();
}
function AV_ChClothes()
{
    if (randomInteger(1, 100) <= 40)
    {
        NoClothes();
        return;
    }
    CMessage("%AV_ChangeClothes%");
    CMessage("%Brb%");
    getLocalTeasePicture("Images" + java.io.File.separator + "System" + java.io.File.separator + "Black.jpg");
    //TODO: New domme slide show
    NoClothes();
    return;
    AV_KeepClothes();
}
function AV_KeepClothes()
{
    setVar("AV_LikedClothes", getVar("AV_LikedClothes", 0) - 1);
    NoClothes();
}
function NoClothes()
{
    if(getVar("AV_RuinHorny", false))
    {
        AV_RuinHorny();
        return;
    }
    NoRuin();
    return;
    AV_RuinHorny();
}
function AV_RuinHorny()
{
    if (getVar("AV_RuinHorny", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_RuinHorny", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_RuinHorny", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_RuinHorny", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_RuinHorny", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_RuinHorny", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_RuinHorny", 0) == 111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_RuinHorny", 0) == 110)
    {
        Part1_9();
        return;
    }
    Part1_1();
}
function Part1_1()
{
    switch(random("Mod1", "Mod2", "Mod3"))
    {
        case "Mod1":
        Mod1();
        return;
        break;
        case "Mod2":
        Mod2();
        return;
        break;
        case "Mod3":
        Mod3();
        return;
        break;
    }
    Part1_2();
}
function Part1_2()
{
    switch(random("Mod2", "Mod3"))
    {
        case "Mod2":
        Mod2();
        return;
        break;
        case "Mod3":
        Mod3();
        return;
        break;
    }
    Part1_3();
}
function Part1_3()
{
    switch(random("Mod1", "Mod3"))
    {
        case "Mod1":
        Mod1();
        return;
        break;
        case "Mod3":
        Mod3();
        return;
        break;
    }
    Part1_4();
}
function Part1_4()
{
    switch(random("Mod1", "Mod2"))
    {
        case "Mod1":
        Mod1();
        return;
        break;
        case "Mod2":
        Mod2();
        return;
        break;
    }
    Part1_6();
}
function Part1_6()
{
    Mod3();
    return;
    Part1_7();
}
function Part1_7()
{
    Mod2();
    return;
    Part1_9();
}
function Part1_9()
{
    Mod1();
    return;
    Part1_12();
}
function Part1_12()
{
    NoRuin();
    return;
    Mod1();
}
function Mod1()
{
    setVar("moduletorun", "AV_RuinHorny1")
    getLocalTeasePicture("Images" + java.io.File.separator + "AV_RuinHorny1");
    NoRuin();
    return;
    Mod2();
}
function Mod2()
{
    setVar("moduletorun", "AV_RuinHorny2")
    getLocalTeasePicture("Images" + java.io.File.separator + "AV_RuinHorny2");
    NoRuin();
    return;
    Mod3();
}
function Mod3()
{
    setVar("moduletorun", "AV_RuinHorny3")
    getLocalTeasePicture("Images" + java.io.File.separator + "AV_RuinHorny3");
    NoRuin();
    return;
    NoRuin();
}
function NoRuin()
{
    if (randomInteger(1, 100) <= 50)
    {
        continue4();
        return;
    }
    if(getVar("AV_DecOrg", false))
    {
        SMood2();
        return;
    }
    setVar("AV_DecOrg", true);
    if (getApathyMoodIndex() >= 75)
    {
        increaseOrgasmChance(-8);
    }
    SMood2();
}
function SMood2()
{
    if(getVar("AV_IncRuin", false))
    {
        SMood3();
        return;
    }
    setVar("AV_IncRuin", true);
    if (getApathyMoodIndex() >= 75)
    {
        increaseRuinChance(8);
    }
    SMood3();
}
function SMood3()
{
    if(getVar("AV_IncOrg", false))
    {
        SMood4();
        return;
    }
    setVar("AV_IncOrg", true);
    if (getApathyMoodIndex() <= 25)
    {
        increaseOrgasmChance(8);
    }
    SMood4();
}
function SMood4()
{
    if(getVar("AV_DecRuin", false))
    {
        continue4();
        return;
    }
    setVar("AV_DecRuin", true);
    if (getApathyMoodIndex() <= 25)
    {
        increaseRuinChance(-8);
    }
    continue4();
}
function continue4()
{
    if(getVar("AV_SubKnees", false))
    {
        CMessage("%SitDown%");
        delVar("AV_SubKnees");
        wait(20);
    }
    if(getVar("AV_Pins", false))
    {
        CMessage("You can remove all clothespins");
        delVar("AV_Pins");
        wait(20);
    }
    if(getVar("av_GagOn", false))
    {
        CMessage("%BallGagOff%");
        delVar("av_GagOn");
        wait(20);
    }
    if(getVar("AV_BallTied", false))
    {
        CMessage("You " + random("can ", "may ") + random("untie your %Balls% ", "remove the shoelace from your %Balls% ") + random("now", "%PetName%", "%SubName%"));
        wait(10);
    }
    if(getVar("AV_BallTied", false))
    {
        delVar("AV_BallTied");
        continue5();
        return;
    }
    if(getVar("AV_DommeMistress", false))
    {
        if (randomInteger(1, 100) <= 10)
        {
            TieBall();
            return;
        }
    }
    if(!getVar("AV_DommeMistress", false))
    {
        if (randomInteger(1, 100) <= 07)
        {
            TieBall();
            return;
        }
    }
    continue45();
    return;
    TieBall();
}
function TieBall()
{
    CMessage("%TieYourBalls%");
    setTempVar("AV_BallTied", true);
    continue45();
}
function continue45()
{
    if(!getVar("AV_MantPositions", false))
    {
        continue5();
        return;
    }
    if (randomInteger(1, 100) <= 90)
    {
        continue5();
        return;
    }
    if(getVar("AV_PositionSecDone", false))
    {
        run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_GoToPosit.js");
    }
    continue6();
    return;
    continue5();
}
function continue5()
{
    if (randomInteger(1, 100) <= 99)
    {
        continue6();
        return;
    }
    if(!getVar("AV_DisconectOnce", false))
    {
        run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_Disconnect.js");
    }
    continue6();
}
function continue6()
{
    if(getVar("AV_GlitterJoinOnce", false))
    {
        continue7();
        return;
    }
    if (randomInteger(1, 100) <= 95)
    {
        continue7();
        return;
    }
    run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AV_GlitterBored.js");
    continue7();
}
function continue7()
{

    if ((getDate("AV_SessionTime").getTimeInMillis() - setDate().getTimeInMillis()) / 1000 > 3600)
    {
        AV_DommeMistress();
        return;
    }
    if(getVar("AV_DommeMistress", false))
    {
        AV_DommeMistress();
        return;
    }
    if (randomInteger(1, 100) <= 92)
    {
        AV_DommeMistress();
        return;
    }
    if (randomInteger(1, 100) <= 50)
    {
        AV_Opcao2();
        return;
    }
    CMessage("What I want " + random("now ", "today ") + "is a slave, a toy that I can " + random("use ", "play with ") + "someone who will do ANYTHING I " + random("tell", "demand"));
    CMessage("I guess I have a sadistic streak after all.");
    Pergunta();
    return;
    AV_Opcao2();
}
function AV_Opcao2()
{
    CMessage("I think deep down you were hoping I would see your devotion and desire");
    CMessage("But I already had other plans. I want a slave.");
    CMessage("Someone who I could " + random("control ", "use for my pleasure ", "abuse ") + "and they\'d still come crawling back, desperate to worship me.");
    Pergunta();
}
function Pergunta()
{
    let answer0 = getInput("You need to make a decision do you want to commit to being my slave today?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("Yes or no %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Ok, I am glad you have agreed");
        run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AV_Mistress.js");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("You don\'t?");
        AV_DommeMistress();
        return;
    }
    AV_DommeMistress();
}
function AV_DommeMistress()
{
    if (randomInteger(1, 100) <= 95)
    {
        AV_NoPosi();
        return;
    }
    if(!getVar("AV_PositionSecDone", false))
    {
        run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_Positions.js");
    }
    FinalLink();
    return;
    AV_NoPosi();
}
function AV_NoPosi()
{
    if (getVar("AV_QteModulos", 0) > 5)
    {
        Trivia();
        return;
    }
    NoTrivia();
    return;
    Trivia();
}
function Trivia()
{
    if (randomInteger(1, 100) <= 90)
    {
        NoTrivia();
        return;
    }
    run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AV_Trivia.js");
    NoTrivia();
}
function NoTrivia()
{
    if(getVar("av_doanalnight", false))
    {
        DoAnal();
        return;
    }
    if(!getVar("AV_LikeAnal", false))
    {
        Continue9();
        return;
    }
    if(getVar("av_NoAskAnal", false))
    {
        Continue9();
        return;
    }
    if ((getDate("AV_SessionTime").getTimeInMillis() - setDate().getTimeInMillis())/1000 > 3600)
    {
        Continue9();
        return;
    }
    if(getVar("AV_DommeMistress", false))
    {
        if (randomInteger(1, 100) <= 20)
        {
            AskAnal();
            return;
        }
    }
    if(!getVar("AV_DommeMistress", false))
    {
        if (randomInteger(1, 100) <= 10)
        {
            AskAnal();
            return;
        }
    }
    Continue9();
    return;
    AskAnal();
}
function AskAnal()
{
    run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AskAnalNight.js");
    Continue9();
    return;
    DoAnal();
}
function DoAnal()
{
    if(getVar("AV_DommeMistress", false))
    {
        if (randomInteger(1, 100) <= 35)
        {
            CallAnal();
            return;
        }
    }
    if(!getVar("AV_DommeMistress", false))
    {
        if (randomInteger(1, 100) <= 25)
        {
            CallAnal();
            return;
        }
    }
    Continue9();
    return;
    CallAnal();
}
function CallAnal()
{
    run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "DoAnalNight.js");
    CMessage("%RelaxAndBreathe% %PetName%");
    wait(30);
    CMessage("%StartStroking%");
    Stroking();
    return;
    Continue9();
}
function Continue9()
{
    if (randomInteger(1, 100) <= 85)
    {
        FinalLink();
        return;
    }
    if (randomInteger(1, 100) <= 50)
    {
        EdgeAV();
        return;
    }
    if(getVar("AV_BreakOne", false))
    {
        FinalLink();
        return;
    }
    CMessage("I " + random("think I\'ll take ", "need to take ") + "a " + random("short break", "break", "pause", "short pause"));
    setTempVar("AV_BreakOne", true);
    CMessage("%AV_Luxury%");
    CMessage(random("Good thing ", "Thankfully ") + "you have some " + random("porn videos ", "videos ", "nice videos ") + "on your " + random("PC", "computer"));
    CMessage("Have fun");
    playVideo("Videos" + java.io.File.separator + "*.*");
    CMessage("%CensorContinue%");
    FinalLink();
    return;
    EdgeAV();
}
function EdgeAV()
{
    CMessage("%StartStroking%");
    //Command:Slideshow(Softcore,slow)
    //TODO: Turn Slideshow on
    wait(randomInt(15, 20));
    CMessage("%Edge%");
    startEdging("%GetClose%");
    EdgeForGoto();
}
function EdgeForGoto()
{
    //TODO: Turn Slideshow off
    switch(random("V10", "V15", "V60"))
    {
        case "V10":
        V10();
        return;
        break;
        case "V15":
        V15();
        return;
        break;
        case "V60":
        V60();
        return;
        break;
    }
    V10();
}
function V10()
{
    CMessage("stay on the edge");
    playVideo("Videos" + java.io.File.separator + "AV_Clips" + java.io.File.separator + "webm" + java.io.File.separator + "10" + java.io.File.separator + "*.webm");
    CMessage("%stopstroking%", 0);
    FimEdge();
    return;
    V15();
}
function V15()
{
    CMessage("stay on the edge");
    playVideo("Videos" + java.io.File.separator + "AV_Clips" + java.io.File.separator + "webm" + java.io.File.separator + "15" + java.io.File.separator + "*.webm");
    CMessage("%stopstroking%", 0);
    FimEdge();
    return;
    V60();
}
function V60()
{
    CMessage("stay on the edge");
    playVideo("Videos" + java.io.File.separator + "AV_Clips" + java.io.File.separator + "webm" + java.io.File.separator + "60" + java.io.File.separator + "*.webm");
    CMessage("%stopstroking%", 0);
    FimEdge();
    return;
    FimEdge();
}
function FimEdge()
{
    setVar("edgingmode", "Normal");
    FinalLink();
}
function FinalLink()
{
    if (isVar("AV_GlitterJoin") && (getDate("AV_GlitterJoin").getTimeInMillis() - setDate().getTimeInMillis()) / 1000 > 1200)
    {
        run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AV_GlitterBye.js")
    }
    run("Custom" + java.io.File.separator + "RamdomLinks" + java.io.File.separator + "*.js");
    return;
    CMessage("%RelaxAndBreathe% %PetName%");
    wait(30);
    CMessage("%StartStroking%");
    Stroking();
    return;
    //Control file to run
    //some variables and
    //check for conditions
    //Some lines at the end
    //to prevent errors
    //by avatarbr
}