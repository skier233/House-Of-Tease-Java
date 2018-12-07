main();
function main()
{
    CMessage("%GreetSub%");
    if(!getVar("AV_HoTv4", false))
    {
        run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "HoTSetup.js");
        return;
    }
    if(getVar("AV_CrashReport", false))
    {
        TeaseAICrashed();
        return;
    }
    NormalStart();
}
function NormalStart()
{
    setVar("AV_QteModulos", 0);
    setVar("AV_QteEdges", 0);
    setVar("AV_UserEdges", 0);
    setVar("AV_LikedClothes", 0);
    setVar("AV_RuinChance", 0);
    setVar("AV_CumChance", 0);
    setDate("AV_SessionTime");
    delVar("AV_EdgeCount");
    delVar("AV_EdgeGoal");
    delVar("AV_EdgeRemaining");
    delVar("AV_EdgeRepeat");
    delVar("AV_EdgeTimeRemaining");
    delVar("AV_EdgeTimes");
    delVar("AV_EdgeCountGoal");
    delVar("AV_EdgeReal");
    delVar("AV_SubKnees");
    delVar("AV_Pins");
    delVar("AV_task2_First");
    delVar("AV_PinDone");
    delVar("AV_DommeMistress");
    delVar("AV_task2_Second");
    delVar("AV_task2_Third");
    delVar("AV_task2_Forth");
    delVar("AV_task2_Fift");
    delVar("AV_AskedSlow");
    delVar("AV_task2_time1");
    delVar("AV_task2_time2");
    delVar("AV_task2_time3");
    delVar("AV_task2_time4");
    delVar("AV_task2_time5");
    delVar("AV_task2_time6");
    delVar("AV_task2_EdgeCount");
    delVar("AV_DommeMistress");
    delVar("AV_GlitterControl");
    setVar("pvNotWantNormal", true);
    setVar("pthevBreakNormal", true);
    setVar("pthevBegForCEI", 0);
    setVar("pthevEdgesToday", 0);
    setVar("pvBegToCum", 0);
    setVar("AV_CrashReport", true);
    if(getVar("AV_DecOrg", false))
    {
        increaseOrgasmChance(12);
    }
    if(getVar("AV_IncRuin", false))
    {
        increaseRuinChance(-12);
    }
    if(getVar("AV_IncOrg", false))
    {
        increaseOrgasmChance(-12);
    }
    if(getVar("AV_DecRuin", false))
    {
        increaseRuinChance(12);
    }
    delVar("AV_TaskON");
    delVar("AV_DecOrg");
    delVar("AV_IncRuin");
    delVar("AV_IncOrg");
    delVar("AV_DecRuin");
    if(!getVar("av_fetish_pain", false))
    {
        setVar("AV_PinDone", true);
    }
    if(getVar("AV_NewVersion", false))
    {
        AV_NewVersion();
        return;
    }
    SMessage("Everything you do in this tease is at your own risk. Know your limits.");
    CMessage("I am so excited for the new version of \"House of Tease\"");
    CMessage("So you\'re probably curious about the new features in this version");
    CMessage("I do have a couple new tricks up my sleeve %Grin%");
    CMessage("First I can use a mic now");
    SMessage("%DomName% turned on the mic");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "SeSp" + java.io.File.separator + "hello.mp3");
    CMessage("Just in case I need my hands free for somethingh else %Emote%");
    CMessage("Or just to tease you a little more");
    CMessage("Second, I can play some audio files for you");
    CMessage("And I already found a good use for this %EmoteLaugh%");
    CMessage("you know that site with a lot of webteases?");
    CMessage("Milovana?");
    CMessage("I got some beats from there to you stroke along %Lol%");
    CMessage("My favorite its called \"Overdrive\".");
    CMessage("Listen");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "overdrive3.mp3");
    wait(35);
    CMessage("Just imagine you stroking at that speed...");
    CMessage("This are some tools to help me constrain you in be a good %Slave%");
    CMessage("There is something about having a man follow my commands against his basic instincts that just makes me wet.");
    CMessage("But The best use to this is...");
    CMessage("I\'ll give you a command to \'stroke\' and you\'ll become horny.");
    CMessage("You won\'t be able to help it.");
    CMessage("I\'ll tell you to get closer to an orgasm");
    CMessage("and your heart will race with excitment as your cock starts to throb.");
    CMessage("%stopstroking%", 0);
    CMessage("even though you were so close to orgasm you could feel the cum working it\'s way up your cock.");
    CMessage("You are going to love being controlled and you will love knowing how much controlling you turns me on.");
    CMessage("But I\'m getting ahead of myself. For now we are doing conditioning.");
    CMessage("%stopstroking%", 0);
    CMessage("I will play this sound when I want you to start stroking");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    CMessage("This for a edge");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cEdge.mp3");
    CMessage("%stopstroking%", 0);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStop.mp3");
    CMessage("But this isn\'t really a bad thing for you.");
    setVar("AV_NewVersion", true);
    CMessage("You are going to love being controlled and you will love knowing how much controlling you turns me on.");
    Start_Stroking();
    return;
    AV_NewVersion();
}
function AV_NewVersion()
{
    CMessage(random("I\'m having another one of those days where I\'m so excited to start fucking with you", "Just thinking about the things you\'re about to do for me", "I was just thinking about you %SubName%", "I\'m really happy to see you %GeneralTime%", "I think it\'s time for one of our special sessions", "I\'ve been thinking about all the things I could do to you", "Great timing, I just got out of the shower, all fresh and rosy %Smile%"));
    CMessage(random("What makes my pussy tingle a little bit %Smile%", "Your %Cock% must have sensed I\'m feeling a little wicked", "I\'ve been thinking about all these fun ways to torment a cock", "I know we both really enjoy it", "Just knowing you would come crawling back to me, you can\'t imagine how horny that made me", "Are you ready to be teased and denied %SubName% ?"));
    if (randomInteger(1, 100) <= 50)
    {
        HornyStart();
        return;
    }
    let answer0 = getInput("Is your %Cock% hard already?");
    while (!(answer0.isLike("yes") || answer0.isLike("hard") || answer0.isLike("no") || answer0.isLike("isnt") || answer0.isLike("not") || answer0.isLike("soft") || answer0.isLike("flaccid")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes", "hard"))
    {
        CMessage(random("Mmm why doesn\'t that surprise me %Smile%", "Good boy", "of course it is", "Mmmm... I love when you come prepared"));
        start1_not_surprised();
        return;
    }
    else if (answer0.isLike("no", "isnt", "not", "soft", "flaccid"))
    {
        CMessage(random("I think ", "Maybe ") + "you need some encouragement...");
        if (randomInteger(1, 100) <= 50)
        {
            ExtraStart();
            return;
        }
    }
    CMessage("That\'s why you have that nice collection of pictures I guess");
    CMessage("Pictures like this one");
    showTaggedImage(4, ["softcore"]);
    CMessage("Or this video to %Stroke%");
    playVideo("Videos" + java.io.File.separator + "*.*");
    start1_not_surprised();
    return;
    HornyStart();
}
function HornyStart()
{
    let answer0 = getInput("Are you horny already?");
    while (!(answer0.isLike("yes") || answer0.isLike("hard") || answer0.isLike("no") || answer0.isLike("isnt") || answer0.isLike("not") || answer0.isLike("soft") || answer0.isLike("flaccid")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes", "hard"))
    {
        CMessage(random("Mmm why doesn\'t that surprise me %Smile%", "Good boy", "of course it is"));
        start1_not_surprised();
        return;
    }
    else if (answer0.isLike("no", "isnt", "not", "soft", "flaccid"))
    {
        CMessage(random("I think ", "Maybe ") + "you need some encouragement...");
        if (randomInteger(1, 100) <= 50)
        {
            ExtraStart();
            return;
        }
    }
    CMessage("Wouldn\'t you love some of this");
    showTaggedImage(4, ["blowjob"]);
    CMessage("Those lips wrapped around your %Cock%");
    CMessage("%Stroke% to this should help you");
    playVideo("Videos" + java.io.File.separator + "*.*");
    start1_not_surprised();
    return;
    start1_not_surprised();
}
function start1_not_surprised()
{
    CMessage("I " + random("demand ", "want ", "like ") + "your %Cock% " + random("hard ", "erect ") + "all the time, " + random("%SubName%", "%PetName%"));
    if(!getVar("av_fetish_cfnm", false))
    {
        if (randomInteger(1, 100) <= 80)
        {
            NoHard();
            return;
        }
    }
    if(getVar("av_fetish_cfnm", false))
    {
        if (randomInteger(1, 100) <= 50)
        {
            NoHard();
            return;
        }
    }
    let answer0 = getInput("Are you completely naked?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Good, I like it when you\'re all " + random("exposed ", "vulnerable ") + "%Smile%");
        Start_Stroking();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("That\'s no good %PetName%");
    }
    CMessage("I %Want% you %Naked%. Take off your clothes");
    if (randomInteger(1, 100) <= 50)
    {
        NoStripSound();
        return;
    }
    SMessage("%DomName% turned on the mic");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "commands" + java.io.File.separator + "Strip*.mp3");
    AfterStripSound();
    return;
    NoStripSound();
}
function NoStripSound()
{
    CMessage("Go ahead and take everything off");
    AfterStripSound();
}
function AfterStripSound()
{
    CMessage("I\'ll show you some pictures in the meantime");
    showTaggedImage(4, ["lesbian"]);
    CMessage("Just to get you in the mood %Smile%");
    showTaggedImage(4, ["hardcore"]);
    CMessage("To make sure your %Cock% gets hard");
    showTaggedImage(4, ["blowjob"]);
    CMessage("To get your blood pumping");
    showTaggedImage(4, ["hardcore"]);
    NoHard();
}
function NoHard()
{
    let answer0 = getInput(random("Are you ready to be %GeneralTime% \'s entertainment for me", "Are you ready to be my naked and sexy showman for today", "Well come on then %PetName%, Let\'s do this", "Are you ready for the show of a lifetime", "Ready to make me soaking wet with your pain", "Ready to show me how badly you need to cum"));
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesNeutralResponse("");
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoNeutralResponse();
    }
    Start_Stroking();
}
function Start_Stroking()
{
    TaskReady();
    return;
    CMessage("author comment: The line above remove the tasks from the session. If you want that back, just delete the that line and this one too.");
    CMessage("Now before we " + random("start", "continue"));
    CheckPics();
    return;
    CheckPics();
}
function CheckPics()
{
    if(getVar("AV_StartQ_04", false))
    {
        CheckPicsContinue();
        return;
    }
    CMessage("Time to get into your mind.");
    CMessage("You need to be taught how to speak to someone superior");
    CMessage("I love a %PetName% who know how to speak properly.");
    if(!getVar("AV_StartQ_01", false))
    {
        run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AV_StarQ1.js");
    }
    if(!getVar("AV_StartQ_01", false))
    {
        AV_SkipQ_01();
        return;
    }
    if(!getVar("AV_StartQ_02", false))
    {
        run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AV_StarQ2.js");
    }
    if(!getVar("AV_StartQ_02", false))
    {
        AV_SkipQ_02();
        return;
    }
    if(!getVar("AV_StartQ_03", false))
    {
        run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AV_StarQ3.js");
    }
    if(!getVar("AV_StartQ_03", false))
    {
        AV_SkipQ_03();
        return;
    }
    if(!getVar("AV_StartQ_04", false))
    {
        run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AV_StarQ4.js");
    }
    if(!getVar("AV_StartQ_04", false))
    {
        AV_SkipQ_04();
        return;
    }
    AV_SkipQ_01();
}
function AV_SkipQ_01()
{
    setVar("AV_StartQ_01", true);
    CheckPicsContinue();
    return;
    AV_SkipQ_02();
}
function AV_SkipQ_02()
{
    setVar("AV_StartQ_02", true);
    CheckPicsContinue();
    return;
    AV_SkipQ_03();
}
function AV_SkipQ_03()
{
    setVar("AV_StartQ_03", true);
    CheckPicsContinue();
    return;
    AV_SkipQ_04();
}
function AV_SkipQ_04()
{
    setVar("AV_StartQ_04", true);
    CheckPicsContinue();
    return;
    CheckPicsContinue();
}
function CheckPicsContinue()
{
    if(getVar("AV_Know_12_NOTREADY", false))
    {
        AV_Know_12_NOTREADY();
        return;
    }
    if(getVar("AV_Know_03_NOTREADY", false))
    {
        AV_Know_03_NOTREADY();
        return;
    }
    if(getVar("AV_Know_01_NOTREADY", false))
    {
        AV_Know_01_NOTREADY();
        return;
    }
    if(getVar("AV_Know_00_NOTREADY", false))
    {
        AV_Know_00_NOTREADY();
        return;
    }
    CheckTasks();
    return;
    AV_Know_00_NOTREADY();
}
function AV_Know_00_NOTREADY()
{
    SMessage("New folder found: /Images/av_imagens/02/");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg");
    SMessage("There are 10 pictures files and the last file in that folder is " + "txt");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg");
    let answer0 = getInput("Did you want to share this folder with your partner?");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("Yes or no?");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg");
    }
    if (answer0.isLike("yes"))
    {
        delVar("AV_Know_00_NOTREADY");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg");
    }
    else if (answer0.isLike("no"))
    {
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg");
        pula1();
        return;
    }
    setVar("AV_ModGlitter2", getVar("AV_ModGlitter2", 0) - 1);
    pula1();
}
function pula1()
{
    if(getVar("AV_Know_12_NOTREADY", false))
    {
        AV_Know_12_NOTREADY();
        return;
    }
    if(getVar("AV_Know_03_NOTREADY", false))
    {
        AV_Know_03_NOTREADY();
        return;
    }
    if(getVar("AV_Know_01_NOTREADY", false))
    {
        AV_Know_01_NOTREADY();
        return;
    }
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg");
    DommeBack();
    return;
    AV_Know_01_NOTREADY();
}
function AV_Know_01_NOTREADY()
{
    SMessage("New folder found: /Images/av_imagens/03/")
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg");
    SMessage("There are 10 pictures files, 1 video file */Video/AV_Clips* and the last file in that folder is MyCelebCrush_Singer.txt");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg");
    let answer0 = getInput("Did you want to share this folder with your partner?");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("Yes or no?");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg");
    }
    if (answer0.isLike("yes"))
    {
        delVar("AV_Know_01_NOTREADY");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg");
    }
    else if (answer0.isLike("no"))
    {
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg");
        pula2();
        return;
    }
    setVar("AV_ModGlitter2", getVar("AV_ModGlitter2", 0) - 100);
    pula2();
}
function pula2()
{
    if(getVar("AV_Know_12_NOTREADY", false))
    {
        AV_Know_12_NOTREADY();
        return;
    }
    if(getVar("AV_Know_03_NOTREADY", false))
    {
        AV_Know_03_NOTREADY();
        return;
    }
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg");
    DommeBack();
    return;
    AV_Know_03_NOTREADY();
}
function AV_Know_03_NOTREADY()
{
    SMessage("New folder found: Images/av_imagens/04/  and TeaseAI/Video/AV_Clips/04");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg");
    SMessage("There are 10 pics in the first and 1 video file in the second, the last file in that folder is " + "txt");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg");
    let answer0 = getInput("Did you want to share this folder with your partner?");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("Yes or no?");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg");
    }
    if (answer0.isLike("yes"))
    {
        delVar("AV_Know_03_NOTREADY");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg");
    }
    else if (answer0.isLike("no"))
    {
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg");
    }
    if(getVar("AV_Know_12_NOTREADY", false))
    {
        AV_Know_12_NOTREADY();
        return;
    }
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg");
    DommeBack();
    return;
    AV_Know_12_NOTREADY();
}
function AV_Know_12_NOTREADY()
{
    SMessage("New folder found: TeaseAI/Images/av_imagens/01/");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg");
    SMessage("There are 10 pictures files and the last file in that folder is " + "txt");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg");
    let answer0 = getInput("Did you want to share this folder with your partner?");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("Yes or no?");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg");
    }
    if (answer0.isLike("yes"))
    {
        delVar("AV_Know_12_NOTREADY");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg");
    }
    else if (answer0.isLike("no"))
    {
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg");
        DommeBack();
        return;
    }
    setVar("AV_ModGlitter2", getVar("AV_ModGlitter2", 0) - 1000);
    DommeBack();
}
function DommeBack()
{
    CMessage("I see you shared a new folder with me %EmoteSmile%");
    CMessage("I\'ll check this later");
    CMessage("For now");
    CheckTasks();
}
function CheckTasks()
{
    let answer0 = getInput("Did you completed the tasks I sent you in the last session?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("Yes or no %PetName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%Great%");
        TaskReady();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("too bad, now I need to give you some extra tasks in this session");
    }
    if(getVar("AV_knowTask_Rules", false))
    {
        AV_knowTask_Rules();
        return;
    }
    CMessage("You can execute at any moment of this session");
    CMessage("You only need to ask me, typing \"task\" in the chat room");
    CMessage("Sometimes I will ask you to execute the tasks when I want to");
    CMessage("But do not take too long");
    CMessage("If I end our session without you finished your tasks");
    CMessage("will have consequence in you chance to cum");
    setVar("AV_knowTask_Rules", true);
    AV_knowTask_Rules();
}
function AV_knowTask_Rules()
{
    setTempVar("AV_TaskON", true);
    CMessage("Let\'s choose you task for today");
    switch(random("task1", "task2", "task3", "task4", "task5", "task6", "task7", "task8", "task9"))
    {
        case "task1":
        task1();
        return;
        break;
        case "task2":
        task2();
        return;
        break;
        case "task3":
        task3();
        return;
        break;
        case "task4":
        task4();
        return;
        break;
        case "task5":
        task5();
        return;
        break;
        case "task6":
        task6();
        return;
        break;
        case "task7":
        task7();
        return;
        break;
        case "task8":
        task8();
        return;
        break;
        case "task9":
        task9();
        return;
        break;
    }
    task1();
}
function task1()
{
    run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AV_Task1.js");
    return;
    task2();
}
function task2()
{
    run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AV_Task2.js");
    return;
    task3();
}
function task3()
{
    run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AV_Task3.js");
    return;
    task4();
}
function task4()
{
    CMessage("%1_ST_TagState%");
    setTempVar("AV_taskOP4", true);
    CMessage("Your task today: I want you to pick out 1 of your favorite sexy videos.");
    CMessage("It can be long or short, but you are going to stroke through the entire thing. %Grin%");
    CMessage("To make it more interesting, if you get close I want you to take your hands off and pause the video.");
    CMessage("When you\'ve cooled down a little, press play and get back to stroking.");
    TaskReady();
    return;
    task5();
}
function task5()
{
    run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AV_Task5.js");
    return;
    task6();
}
function task6()
{
    run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AV_Task6.js");
    return;
    task7();
}
function task7()
{
    run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AV_Task7.js");
    return;
    task8();
}
function task8()
{
    run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AV_Task8.js");
    return;
    task9();
}
function task9()
{
    CMessage("%1_ST_TagState%");
    setTempVar("AV_taskOP9", true);
    CMessage("For task today I feel like being very, very cruel to you %PetName%.");
    CMessage("I want you to set 10 minutes. Then I want you to start stroking your %Cock%.");
    CMessage("You\'re going to edge yourself as much as possible for me.");
    CMessage("%stopstroking%", 0);
    CMessage("You\'re going to do this for me, edging over and over for the entire amount of time.");
    CMessage("When the time\'s up, you\'re done touching with a painful case of blue balls %Grin%");
    TaskReady();
    return;
    TaskReady();
}
function TaskReady()
{
    if (randomInteger(1, 100) <= 25)
    {
        ExtraStart();
        return;
    }
    CMessage("Now take that %Cock% " + random("out of your pants", "in your hand"));
    CMessage("And %StartStroking%");
    Stroking();
    return;
    TeaseAICrashed();
}
function TeaseAICrashed()
{
    let answer0 = getInput("Did TeaseAI crashed?");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo%?");
    }
    if (answer0.isLike("yes"))
    {
        SMessage("OK, Let\'s try to continue the last session");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg");
    }
    else if (answer0.isLike("no"))
    {
        SMessage("OK");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg");
        NormalStart();
        return;
    }
    let answer1 = getInput("How many minutes (approximately) passed before the crash?");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg");
    while (!(answer1.isLike("10") || answer1.isLike("20") || answer1.isLike("30") || answer1.isLike("40") || answer1.isLike("50") || answer1.isLike("60")))
    {
        answer1 = getInput("The options are: 10, 20, 30, 40, 50 or 60");
    }
    if (answer1.isLike("10"))
    {
        SMessage("OK");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg");
    }
    else if (answer1.isLike("20"))
    {
        SMessage("OK");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg");
    }
    else if (answer1.isLike("30"))
    {
        SMessage("OK");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg");
    }
    else if (answer1.isLike("40"))
    {
        SMessage("OK");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg");
    }
    else if (answer1.isLike("50"))
    {
        SMessage("OK");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg");
    }
    else if (answer1.isLike("60"))
    {
        SMessage("OK");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg");
    }
    let answer2 = getInput("Did you enter in the \"Mistress Mode\"? - %DomName% said \"What I want today is a slave, a toy that I can play with, someone who will do ANYTHING I demand\"");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg");
    while (!(answer2.isLike("yes") || answer2.isLike("no")))
    {
        answer2 = getInput("%YesorNo%?");
    }
    if (answer2.isLike("yes"))
    {
        SMessage("OK");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg");
    }
    else if (answer2.isLike("no"))
    {
        SMessage("OK");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg");
        RamdomMOOD();
        return;
    }
    increaseAnger(-3)
    increaseAnger(4)
    increaseAnger(4)
    setTempVar("AV_DommeMistress", true);
    setTempVar("AV_PinDone", true);
    RamdomMOOD();
}
function RamdomMOOD()
{
    SMessage("Ready to continue the last session...");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg");
    CMessage("%StartStroking%");
    Stroking();
    return;
    ExtraStart();
}
function ExtraStart()
{
    run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "StartVariation.js");
    CMessage("Now " + random("the real fun begins ", "let\'s get serious ", "let\'s start for real ") + "...");
    CMessage("%StartStroking%");
    Stroking();
    return;
}