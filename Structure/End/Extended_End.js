main();
function main()
{
    delVar("AV_CrashReport");
    if (inGroup(2))
    {
        CMessage("%DomName% just call me");
        addContact(1);
    }
    if (inGroup(2))
    {
        CMessage("Sorry %Contact1%, it\'s time to finish the session");
        removeContact(2);
    }
    if (inGroup(3))
    {
        CMessage("%DomName% just call me");
        addContact(1);
    }
    if (inGroup(3))
    {
        CMessage("Sorry %Contact2%, it\'s time to finish the session");
        removeContact(3);
    }
    if (inGroup(4))
    {
        CMessage("%DomName% just call me");
        addContact(1);
    }
    if (inGroup(4))
    {
        CMessage("Sorry %Contact3%, it\'s time to finish the session");
        removeContact(4);
    }
    CMessage("%TimeToFindIfYouGetToCum%");
    CMessage("You may remove everything attached to your body!");
    if (randomInteger(1, 100) <= 50)
    {
        ww0001();
        return;
    }
    CMessage("That\'s always the big " + random("moment ", "highlight ") + "of " + random("%GeneralTime% ", "this game ") + "right?");
    CMessage("A " + random("possibility ", "chance ") + "of " + random("a orgasm ", "cumming ") + "after you\'ve been " + random("heavily ", "brutally ") + "teased?");
    CMessage("Tease and denial is " + random("great ", "awesome ") + "isnt it?");
    CMessage("So " + random("uncertain ", "unpredictable ") + "... " + random("such a rush", "all the uncertainty"));
    ww0001();
}
function ww0001()
{
    setStrokingNoTaunt("Now give yourself a " + random("good ", "nice ") + random("wank ", "jerk ") + random("till ", "until ") + "you\'re really " + random("close", "hard"));
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    wait(randomInt(10, 20));
    if (randomInteger(1, 100) <= 80)
    {
        NoRuin();
        return;
    }
    if (getRuinChance() == 0)
    {
        NoRuin();
        return;
    }
    CMessage("Now that you\'re so close, is the thought of ruining starting to hurt?");
    CMessage("Is it unbearable? ");
    if (randomInteger(0, 100) <= 50)
    {
        CMessage("Of course it is");
    }
    CMessage("When submission is easy, it isn\'t submission, is it?");
    NoRuin();
}
function NoRuin()
{
    CMessage(random("Your obedience makes me %Happy%", "There, that\'s better...that\'s a real hard dick", "Well you look really frustrated now", "I don\'t know if you get any enjoyment out of it, but I most will. And that\'s all that matters of course!"));
    CMessage(random("Stroke faster", "Stroke harder", "I can see that pressure building up so much in your shaft and your head"), 0);
    speedUpStroking(2);
    CMessage(random("Are you close %SubName%? I see it in your eyes", "Beg me... Beg me to cum", "So beg %PetName%, beg for my cum command", "Now tell me, do you want to cum?", "So, you wanna cum?", "Do you want to cum %PetName%?", "I\'ve never seen you get that big before"));
    CMessage("Get " + random("close ", "ready ") + "...");
    if (randomInteger(1, 100) <= 33)
    {
        FimSk01();
        return;
    }
    startEdging("%Edge%");
    CMessage("%stopstrokingedge%", null, false);
    CMessage("%LetTheEdgeFade%");
    if (randomInteger(1, 100) <= 50)
    {
        FimSk02();
        return;
    }
    if (getRuinChance() <= 20 || getRuinChance() == 0)
    {
        CMessage(random("Tell me that you want to ruin for me ", "You know it will be so pleasurable to ruin for me ") + "because your " + random("suffering ", "obedience ") + "is all the reward you need.");
        if (randomInteger(1, 100) <= 50)
        {
            FimSk03();
            return;
        }
    }
    if(getVar("av_fetish_cei", false))
    {
        CMessage(random("Say \'please Mistress %DomName% please let me eat my cum for you\'", "Won\'t it be nice to taste your own cum for me?"));
        if (randomInteger(1, 100) <= 70)
        {
            FimSk03();
            return;
        }
    }
    FimSk02();
}
function FimSk02()
{
    CMessage(random("Say \'please Mistress %DomName%, Please let me cum\'", "That must have been exhausting", "Come on baby, your cock looks like it\'s ready to cum", "I\'m in complete control of your %Cock%"));
    FimSk03();
}
function FimSk03()
{
    CMessage(random("Not cumming yet", "I want you to think about shooting that load", "I want you to hold it in"));
    wait(randomInt(10, 15));
    setStrokingNoTaunt("%Stroke% that %Cock%.  But don\'t cum yet.")
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    CMessage(random("Stay close", "You\'re right there aren\'t you?", "A little more"));
    CMessage(random("Tell me you\'re ready", "Beg me to let that %Cock% cum", "It\'s going to feel so good", "Just be a good boy and take it"));
    CMessage(random("Wait for it", "I love when we do this"));
    switch(random("FimSk04", "FimSk05", "FimSk01"))
    {
        case "FimSk04":
        FimSk04();
        return;
        break;
        case "FimSk05":
        FimSk05();
        return;
        break;
        case "FimSk01":
        FimSk01();
        return;
        break;
    }
    FimSk04();
}
function FimSk04()
{
    startEdging("%Edge%");
    if (randomInteger(1, 100) <= 100)
    {
        var amountEdges = randomInt(2, 3);
        DoEdges(amountEdges, amountEdges, 0);
    }
    else
    {
        StartEdging()
    }
    var orgasmResult = decideOrgasm();
    if (orgasmResult == 2)
    {
        Orgasm_Allow();
        return;
    }
    else if (orgasmResult == 1)
    {
        Orgasm_Ruin();
        return;
    }
    else if (orgasmResult == 0)
    {
        Orgasm_Deny();
        return;
    }
    FimSk05();
}
function FimSk05()
{
    startEdging("%Edge%");
    var orgasmResult = decideOrgasm();
    if (orgasmResult == 2)
    {
        Orgasm_Allow();
        return;
    }
    else if (orgasmResult == 1)
    {
        Orgasm_Ruin();
        return;
    }
    else if (orgasmResult == 0)
    {
        Orgasm_Deny();
        return;
    }
    FimSk01();
}
function FimSk01()
{
    var orgasmResult = decideOrgasm();
    if (orgasmResult == 2)
    {
        Orgasm_Allow();
        return;
    }
    else if (orgasmResult == 1)
    {
        Orgasm_Ruin();
        return;
    }
    else if (orgasmResult == 0)
    {
        Orgasm_Deny();
        return;
    }
    Orgasm_Allow();
}
function Orgasm_Allow()
{
    startEdging("%Edge%");
    let answer0 = getInput("%CumForMe%");
    if (answer0.isLike("came", "finished", "did"))
    {
        CMessage("Good %Grin%");
    }
    else if (answer0.isLike("thank", "gracias", "merci", "grateful", "good", "amazing", "incredible"))
    {
        CMessage("You\'re welcome %PetName% %Grin%");
    }
    else
    {
        CMessage("Hehe just calm down now");
    }
    if(getVar("AV_EatCum", false))
    {
        if (randomInteger(1, 100) <= 35)
        {
            No_CEIav();
            return;
        }
    }
    if(getVar("AV_EatCum", false))
    {
        CMessage("%AV_CumEat%");
        wait(20);
    }
    if(getVar("AV_EatCum", false))
    {
        CMessage(random("You\'re going to swallow all of it", "Swallow all of it %PetName%"));
    }
    No_CEIav();
}
function No_CEIav()
{
    CMessage("I hope you enjoyed that orgasm %SubName%");
    if(getVar("AV_Persona30", false))
    {
        if (randomInteger(1, 100) <= 30)
        {
            PoT();
            return;
        }
    }
    CMessage("Who knows how many you\'re actually going to get?");
    EndScript();
    return;
    Orgasm_Deny();
}
function Orgasm_Deny()
{
    startEdging("%Edge%");
    CMessage("%AV_NoCum%");
    if (getOrgasmChance() <= 20 || getOrgasmChance() == 0)
    {
        NoSecondChance();
        return;
    }
    if (getApathyMoodIndex() <= 25)
    {
        CMessage("You made me happy %GeneralTime%,");
        if (randomInteger(1, 100) <= 30)
        {
            second();
            return;
        }
    }
    CMessage("Too bad");
    if (randomInteger(1, 100) <= 15)
    {
        second();
        return;
    }
    NoSecondChance();
}
function NoSecondChance()
{
    CMessage("Better luck next time %Grin%");
    EndScript();
    return;
    Orgasm_Ruin();
}
function Orgasm_Ruin()
{
    startEdging("%Edge%");
    let answer0 = getInput("%RuinYourOrgasm%");
    if (answer0.isLike("ruined", "did"))
    {
        CMessage("Good %Grin%");
    }
    else if (answer0.isLike("fuck"))
    {
        CMessage("%Grin%");
    }
    else
    {
        CMessage("hehe just calm down now");
    }
    if(getVar("AV_EatCum", false))
    {
        CMessage("%AV_CumEat%");
        wait(20);
    }
    CMessage("I love building up all that pleasure just to snatch it away from you");
    if (randomInteger(1, 100) <= 50)
    {
        more_ruin();
        return;
    }
    run("Custom/Miniscripts/AV_FinalTaunt");
    CMessage("Better luck next time");
    EndScript();
    return;
    more_ruin();
}
function more_ruin()
{
    CMessage("In fact I love it so much that I\'ll give you a chance to ruin another one for me! %lol%");
    let answer0 = getInput("Do you want?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo% %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%Yay%");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Ohhh");
        EndScript();
        return;
    }
    setStrokingNoTaunt("%StartStroking%");
    CMessage("%StartStroking%");
    CMessage("I want to see more of your ruined orgasms today!");
    CMessage("I wonder how many I can make you ruin like that %lol%");
    if (getApathyLevel <= 2)
    {
        dommeLevel1();
        return;
    }
    else if (getApathyLevel <= 4)
    {
        dommeLevel2();
        return;
    }
    else if (getApathyLevel <= 6)
    {
        dommeLevel3();
        return;
    }
    else if (getApathyLevel <= 8)
    {
        dommeLevel4();
        return;
    }
    else if (getApathyLevel <= 10)
    {
        dommeLevel5();
        return;
    }
    DommeLevel5();
}
function DommeLevel5()
{
    DommeLevel4();
}
function DommeLevel4()
{
    edgeToRuinHold("Edge for me");
    CMessage("Wow this one must have really hurt %lol%");
    CMessage("%stopstroking%", 0);
    DommeLevel3();
}
function DommeLevel3()
{
    DommeLevel2();
}
function DommeLevel2()
{
    CMessage("I want to play with you some more before you ruin again");
    CMessage("Are you dry yet? %lol%");
    CMessage("Let\'s make sure!");
    edgeToRuin("Edge one more time");
    CMessage("Drip, drip...");
    CMessage("I wonder if you can take more than that...");
    CMessage("Awww, poor boy... I bet you wanted release now. But you can\'t.");
    CMessage("And we are not done with you yet, not even close.");
    DommeLevel1();
}
function DommeLevel1()
{
    CMessage("I\'m so mean ruining all your orgasms like that");
    CMessage("I\'m sorry! %Grin%");
    CMessage("Well not really... %lol%");
    CMessage("But this time I\'ll let you come, I swear!");
    if (randomInteger(1, 100) <= 20)
    {
        Orgasm_Allow();
        return;
    }
    edgeToRuin("Bring yourself to the edge one more time");
    CMessage("Well you came... %lol%");
    CMessage("I know i can be so %Mean% to you sometimes");
    let answer0 = getInput("Do you think you can take one more for me?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("It might be the frustration but you don\'t make sense... Can you take one more yes or no?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("ohh I love it when you destroy yourself so willingly %lol%");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Good that means you\'re past your limit!");
        EndScript();
        return;
    }
    CMessage("So let\'s end that session in a bang!");
    CMessage("Or a splurt in this case %lol%");
    edgeToRuinHold("Gather all your remaining forces and edge a last time");
    CMessage("Alright you can rest");
    EndScript();
    return;
    PoT();
}
function PoT()
{
    CMessage("Now, since you like Post Orgasm Torture");
    setStrokingNoTaunt();
    wait(20);
    CMessage("Keep stroking and give yourself a HARD slap every 4 strokes.");
    wait(10);
    CMessage("%Lol%");
    CMessage("%stopstroking%", 0);
    stopStroking();
    EndScript();
    return;
    second();
}
function second()
{
    CMessage(random("Hold on...", "Wait a second", "Don\'t leave yet!", "Oh, hold on a minute, I have some breaking news!", "Wait a second %SubName%, there has been a development", "Don\'t leave yet, you might be in luck %PetName%"));
    CMessage(random("I\'m actually a bit sorry you did not get to cum", "Well...I guess I\'m a bit dissapointed as well, not as much as you of course", "Poor %PetName%, I almost pity you when you look at me so desperately"));
    CMessage(random("But I\'m feeling somewhat lenient today", "But perhaps I\'ll give you another chance", "You are lucky I\'m in a pretty good mood today however"));
    run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AV_CumFun.js");
    EndScript();
}
function EndScript()
{
    if(getVar("AV_DecOrg", false))
    {
        increaseOrgasmChance(8);
    }
    if(getVar("AV_IncRuin", false))
    {
        increaseRuinChance(-8);
    }
    if(getVar("AV_IncOrg", false))
    {
        increaseOrgasmChance(-8);
    }
    if(getVar("AV_DecRuin", false))
    {
        increaseRuinChance(8);
    }
    delVar("AV_DecOrg");
    delVar("AV_IncRuin");
    delVar("AV_IncOrg");
    delVar("AV_DecRuin");
    CMessage("Thanks for giving me such a good time %GeneralTime% %PetName%");
    CMessage("I can\'t wait to see you again %EmoteHappy% Bye");
    setRapidText(true);
    SMessage("<b>END SESSION REPORT<>");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg");
    SMessage("The Domme mood ended in %DomMood%");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg");
    SMessage("The Domme level ended in %DomLevel%");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg");
    SMessage("The Domme apathy ended in %DomApathy%");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg");
    if(getVar("AV_DommeMistress", false))
    {
        CMessage("Mistress Mode actived in this session");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg");
        setRapidText(false);
    }
    SMessage("That Status will be reseted in the next session");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg");
    wait(10);
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg");
    endSession();
    return;
}