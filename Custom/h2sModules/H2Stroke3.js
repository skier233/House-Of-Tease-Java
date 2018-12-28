main();
function main()
{
    addContact(4);
    CMessage("Look who is sneaking in here %Grin%");
    if(getVar("Contact3_unit", false))
    {
        Contact3_unit();
        return;
    }
    SMessage("Hey %SubName%", -1, 4);
    SMessage("I am here to have a nice workout with you together.", -1, 4);
    SMessage("just stay loose and relaxed", -1, 4);
    SMessage("Or are you not relaxed? %Grin%", -1, 4);
    CMessage("I think he is a bit nervous %Contact3% %LOL%");
    SMessage("Today it is going to be something special for you.", -1, 4);
    CMessage("Sounds very amazing, hmmm i wish i could stay longer %EmoteMoan%");
    SMessage("I have some tasks for you to fulfill", -1, 4);
    SMessage("Randomly selected for you", -1, 4);
    SMessage("If you are lucky, it will get easy for you...", -1, 4);
    SMessage("If not, then it will get very hard for you and you will be sweating", -1, 4);
    CMessage("i hope that he gets sweating a lot %Contact3% %Lol%");
    SMessage("You can be sure of that, %ShortName% %Grin%", -1, 4);
    SMessage("Perhaps only a few tasks", -1, 4);
    SMessage("Maybe lots...", -1, 4);
    SMessage("Rarely, it may sometimes give a break.", -1, 4);
    SMessage("But the only person, who decides that, is me!", -1, 4);
    SMessage("If I am that nice to you %PetName%, to offer you break", -1, 4);
    SMessage("Then use these breaks, you will need them!", -1, 4);
    CMessage("Can you do it without breaks %Contact3%? %Grin%");
    SMessage("sure we can %ShortName%, next time we can also take both care of him %Grin%", -1, 4);
    SMessage("%SubName%, as usual you have to do EVERYTHING i tell you.", -1, 4);
    SMessage("no exceptions!", -1, 4);
    SMessage("no excuses!", -1, 4);
    SMessage("But today is going to be a really special day for you %SubName%!", -1, 4);
    SMessage("So listen carefully and keep in mind what comes next!", -1, 4);
    SMessage("If you are not able to continue during an exercise without cumming", -1, 4);
    SMessage("you have to do as follows", -1, 4);
    Harry_cum_pos2();
    return;
    Harry_cum_pos2();
}
function Harry_cum_pos2()
{
    SMessage("You have to quickly stand up if not already standing", -1, 4);
    SMessage("Dominant hand behind back", -1, 4);
    SMessage("Legs about 50cm apart", -1, 4);
    SMessage("Knees slightly bent", -1, 4);
    SMessage("Open mouth wide", -1, 4);
    SMessage("Tongue out as far as possible", -1, 4);
    SMessage("Non dominant hand grabs %Cock%", -1, 4);
    SMessage("Keep doing until ordered otherwise, but at least for 1 minute!", -1, 4);
    SMessage("So that we have cleared that %SubName%, i think we can move on", -1, 4);
    CMessage("%PetName% is not allowed to stop %Contact3%?")
    SMessage("No %ShortName%, today its so called ?Task_Forced? %Lol%", -1, 4);
    SMessage("This means NO STOP during a task.", -1, 4);
    SMessage("UNDER NO CIRCUMSTANCES!!", -1, 4);
    CMessage("Wow that sounds so fucking hot %Contact3%");
    CMessage("Awesome idea, will have to keep that in mind for later.");
    CMessage("Too bad that I have to leave now.");
    setVar("Contact3_unit", true);
    CMessage("So see ya later.");
    removeContact(1);
    SMessage("See you %ShortName%", -1, 4);
    let answer0 = getInput("%SubName% let me know when you\'re ready?", -1, true, 4);
    while (!(answer0.isLike("ready") || answer0.isLike("ok") || answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("try again");
    }
    if (answer0.isLike("ready", "ok", "yes"))
    {
        SMessage("Ok then get in stroking position and be ready", -1, 4);
        Contact3_decision();
        return;
    }
    else if (answer0.isLike("no"))
    {
        run("CBT" + java.io.File.separator + "CBTBalls_First.js");
    }
    Contact3_unit();
}
function Contact3_unit()
{
    if(getVar("Contact3_unit1", false))
    {
        Contact3_unit1();
        return;
    }
    SMessage("Nice to see you again %SubName%", -1, 4);
    SMessage("and of course thanks %ShortName% that you invited me another time %Grin%", -1, 4);
    CMessage("No problem %Contact3%, you have always such great ideas %EmoteMoan%");
    CMessage("I think I can learn a lot from you " + "-)");
    SMessage("OH thx %ShortName% for the compliment %Grin%", -1, 4);
    SMessage("I am doing my best %Lol%", -1, 4);
    CMessage("Too bad that I dont have time again, so I need to leave you all alone again with %SubName%");
    SMessage("Maybe next time will fit better " + "-)", -1, 4);
    removeContact(1);
    SMessage("So you remember the game Task_forced %PetName%?", -1, 4);
    SMessage("Dont worry %Grin%", -1, 4);
    SMessage("I think this time it will get a bit easier for you " + "-)", -1, 4);
    let answer0 = getInput("But tell me, did you like the game?", -1, true, 4);
    while (!(answer0.isLike("no") || answer0.isLike("yes")))
    {
        answer0 = getInput("Try again");
    }
    if (answer0.isLike("no"))
    {
        SMessage("Thats what i thought, to be honest.", -1, 4);
        Sprinter();
        return;
    }
    else if (answer0.isLike("yes"))
    {
        SMessage("Oh i didnt expect that answer %SubName%", -1, 4);
    }
    SMessage("Makes me happy %SubName%", -1, 4);
    SMessage("I am sure we can do that one day again " + "-)", -1, 4);
    setVar("Contact3_unit1", true);
    let answer1 = getInput("Or you want to push your limits today?", -1, 4);
    if (answer1.isLike("no"))
    {
        SMessage("Ok #Lol,i still have some other things for you", -1, 4);
        Sprinter();
        return;
    }
    else if (answer1.isLike("yes"))
    {
        SMessage("WOW, i am a bit surprised, just as you wish", -1, 4);
        Contact3_pleasure();
        return;
    }
    Contact3_unit1();
}
function Contact3_unit1()
{
    Contact3_decision();
}
function Contact3_decision()
{
    SMessage("Lets figure out, what you have to do %GeneralTime% %SubName%", -1, 4);
    SMessage("You just have 2 options!", -1, 4);
    SMessage("Choose wisely", -1, 4);
    SMessage("And keep the restrictions in mind which we cleared before!", -1, 4);
    SMessage("To spice things up, I will give you just the fraction of a second for your decision!", -1, 4);
    let answer0 = getInput("Pleasure or pain?", -1, true, 4);
    while (!(answer0.isLike("pleasure") || answer0.isLike("pain")))
    {
        answer0 = getInput("......try again");
    }
    if (answer0.isLike("pleasure"))
    {
        SMessage("Just what i thought", -1, 4);
        Contact3_pleasure();
        return;
    }
    else if (answer0.isLike("pain"))
    {
        SMessage("Just as you wish", -1, 4);
    }
    Contact3_pain();
}
function Contact3_pain()
{
    SMessage("so lets bring a bit pain to your balls", -1, 4);
    run("CBT" + java.io.File.separator + "CBTBalls_First.js");
    addContact(1);
    removeContact(4);
    return;
    Contact3_pleasure();
}
function Contact3_pleasure()
{
    SMessage("Thats gonna get interesting %GeneralTime%", -1, 4);
    SMessage("At least you, %SubName%, will be very busy %Lol%", -1, 4);
    SMessage("So we have to set up some numbers :-)", -1, 4);
    setVar("Dice4", 0);
    setVar("Sub_EdgeGoal", 0);
    setVar("Edge_Count", 0);
    SMessage("Let 3 dices decide for us %Lol%", -1, 4);
    setVar("Dice1", randomInteger(1, 6));
    SMessage("The first dice says " + getVar("Dice1"), -1, 4);
    setVar("Dice2", randomInteger(1, 6));
    SMessage("Second one tells me " + getVar("Dice2"), -1, 4);
    setVar("Dice3", randomInteger(1, 6));
    SMessage("And the third one says " + getVar("Dice3"), -1, 4);
    SMessage("And now lets multiply the numbers %Lol%", -1, 4);
    setVar("Dice4", getVar("Dice1", 0) + getVar("Dice2", 0));
    setVar("Sub_EdgeGoal", getVar("Dice3", 0) * getVar("Dice4", 0));
    SMessage("Your luck tell us that their need to be " + getVar("Sub_EdgeGoal", "") + "edges for me tonight %PetName%", -1, 4);
    if (getVar("Sub_EdgeGoal", 0) <= 10)
    {
        Edge_Quicky();
        return;
    }
    SMessage("Looks like you are going to be busy %Grin%", -1, 4);
    SMessage("Let the edging games begin " + "-)", -1, 4);
    SMessage("I\'m going to show you some pictures I found online", -1, 4);
    SMessage("And when I think I have a really good one", -1, 4);
    SMessage("I\'ll let you edge to it %Grin%", -1, 4);
    SMessage("When I think you\'ve edged enough, we can move on", -1, 4);
    SMessage("Get ready %PetName%", -1, 4);
    lockImages();
    Show_Image3();
}
function Show_Image3()
{
    getTeasePicture();
    if (randomInteger(1, 100) <= 75)
    {
        Show_Image3();
        return;
    }
    SMessage("I want you to edge for this one %PetName%", -1, 4);
    SMessage("Get close for me right now", -1, 4);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cEdge.mp3");
    startEdging();
    SMessage("Just sit back and relax", -1, 4);
    unlockImages();
    setVar("Sub_EdgeGoal", getVar("Sub_EdgeGoal", 0) - 1);
    if (getVar("Edge_Count", 0) == getVar("Sub_EdgeGoal", 0))
    {
        Edge_Goal_Met3();
        return;
    }
    SMessage("Let yourself calm down as much as you can", -1, 4);
    setVar("EdgeRemaining", getVar("Sub_EdgeGoal", 0) - getVar("Edge_Count", 0));
    SMessage("You still have " + getVar("EdgeRemaining") + "edges to go %Grin%", -1, 4);
    switch(random("Rocket_man3", "Edge_loop3", "Show_Image3", "Loop_no_hold3", "Loop_no_hold13", "Loop_no_hold23", "Loop_no_hold33", "Loop_no_hold43", "Loop_no_hold53", "Loop_no_hold63"))
    {
        case "Rocket_man3":
        Rocket_man3();
        return;
        break;
        case "Edge_loop3":
        Edge_loop3();
        return;
        break;
        case "Show_Image3":
        Show_Image3();
        return;
        break;
        case "Loop_no_hold3":
        Loop_no_hold3();
        return;
        break;
        case "Loop_no_hold13":
        Loop_no_hold13();
        return;
        break;
        case "Loop_no_hold23":
        Loop_no_hold23();
        return;
        break;
        case "Loop_no_hold33":
        Loop_no_hold33();
        return;
        break;
        case "Loop_no_hold43":
        Loop_no_hold43();
        return;
        break;
        case "Loop_no_hold53":
        Loop_no_hold53();
        return;
        break;
        case "Loop_no_hold63":
        Loop_no_hold63();
        return;
        break;
    }
    Rocket_man3();
}
function Rocket_man3()
{
    SMessage("Lets make a little exciting countdown to get the rocket up", -1, 4);
    SMessage("%SubName%, edge on 0", -1, 4);
    setRapidText(true);
    SMessage("10", -1, 4);
    SMessage("9", -1, 4);
    SMessage("8", -1, 4);
    SMessage("7", -1, 4);
    SMessage("6", -1, 4);
    SMessage("5", -1, 4);
    SMessage("4", -1, 4);
    SMessage("3", -1, 4);
    SMessage("2", -1, 4);
    SMessage("1", -1, 4);
    SMessage("EDGE!", -1, 4);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cEdge.mp3");
    startEdging();
    setVar("Sub_EdgeGoal", getVar("Sub_EdgeGoal", 0) - 1);
    setRapidText(false);
    if (getVar("Edge_Count", 0) == getVar("Sub_EdgeGoal", 0))
    {
        Edge_Goal_Met3();
        return;
    }
    if (getVar("Sub_EdgeGoal", 0) == 0)
    {
        Edge_Goal_Met3();
        return;
    }
    SMessage(getVar("Sub_EdgeGoal") + "dripping edges to go for you %SubName%", -1, 4);
    CMessage("dripping edges to go for you %SubName%");
    switch(random("Edge_loop3", "Show_Image3", "Loop_no_hold3", "Loop_no_hold13", "Loop_no_hold23", "Loop_no_hold33", "Loop_no_hold43", "Loop_no_hold53", "Loop_no_hold63"))
    {
        case "Edge_loop3":
        Edge_loop3();
        return;
        break;
        case "Show_Image3":
        Show_Image3();
        return;
        break;
        case "Loop_no_hold3":
        Loop_no_hold3();
        return;
        break;
        case "Loop_no_hold13":
        Loop_no_hold13();
        return;
        break;
        case "Loop_no_hold23":
        Loop_no_hold23();
        return;
        break;
        case "Loop_no_hold33":
        Loop_no_hold33();
        return;
        break;
        case "Loop_no_hold43":
        Loop_no_hold43();
        return;
        break;
        case "Loop_no_hold53":
        Loop_no_hold53();
        return;
        break;
        case "Loop_no_hold63":
        Loop_no_hold63();
        return;
        break;
    }
    Edge_loop3();
}
function Edge_loop3()
{
    SMessage("Still ok for you?", -1, 4);
    let answer0 = getInput("Do you need a break?", -1, true, 4);
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("..", null, null, true, 4);
    }
    if (answer0.isLike("yes"))
    {
        SMessage("Than take a short break", -1, 4);
        setRapidText(true);
        Break3();
        return;
    }
    else if (answer0.isLike("no"))
    {
        SMessage("I hope, you know what you are doing", -1, 4);
        setRapidText(true);
        switch(random("Rocket_man3", "Show_Image3", "Loop_no_hold3", "Loop_no_hold13", "Loop_no_hold23", "Loop_no_hold33", "Loop_no_hold43", "Loop_no_hold53", "Loop_no_hold63"))
        {
            case "Rocket_man3":
            Rocket_man3();
            return;
            break;
            case "Show_Image3":
            Show_Image3();
            return;
            break;
            case "Loop_no_hold3":
            Loop_no_hold3();
            return;
            break;
            case "Loop_no_hold13":
            Loop_no_hold13();
            return;
            break;
            case "Loop_no_hold23":
            Loop_no_hold23();
            return;
            break;
            case "Loop_no_hold33":
            Loop_no_hold33();
            return;
            break;
            case "Loop_no_hold43":
            Loop_no_hold43();
            return;
            break;
            case "Loop_no_hold53":
            Loop_no_hold53();
            return;
            break;
            case "Loop_no_hold63":
            Loop_no_hold63();
            return;
            break;
        }
    }
    Loop_no_hold3();
}
function Loop_no_hold3()
{
    setRapidText(false);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cEdge.mp3");
    startEdging();
    setVar("Sub_EdgeGoal", getVar("Sub_EdgeGoal", 0) - 1);
    if (getVar("Sub_EdgeGoal", 0) == 0)
    {
        Edge_Goal_Met3();
        return;
    }
    let answer0 = getInput("Wanna try some more?", -1, true, 4);
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("Thats fine", -1, 4);
    }
    if (answer0.isLike("yes"))
    {
        setRapidText(true);
        switch(random("Rocket_man3", "Edge_loop3", "Show_Image3", "Loop_no_hold13", "Loop_no_hold23", "Loop_no_hold33", "Loop_no_hold43", "Loop_no_hold53", "Loop_no_hold63"))
        {
            case "Rocket_man3":
            Rocket_man3();
            return;
            break;
            case "Edge_loop3":
            Edge_loop3();
            return;
            break;
            case "Show_Image3":
            Show_Image3();
            return;
            break;
            case "Loop_no_hold13":
            Loop_no_hold13();
            return;
            break;
            case "Loop_no_hold23":
            Loop_no_hold23();
            return;
            break;
            case "Loop_no_hold33":
            Loop_no_hold33();
            return;
            break;
            case "Loop_no_hold43":
            Loop_no_hold43();
            return;
            break;
            case "Loop_no_hold53":
            Loop_no_hold53();
            return;
            break;
            case "Loop_no_hold63":
            Loop_no_hold63();
            return;
            break;
        }
    }
    else if (answer0.isLike("no"))
    {
        CMessage("%stopstroking%", 0);
        setRapidText(true);
        Break3();
        return;
    }
    Loop_no_hold13();
}
function Loop_no_hold13()
{
    setRapidText(false);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cEdge.mp3");
    startEdging();
    setVar("Sub_EdgeGoal", getVar("Sub_EdgeGoal", 0) - 1);
    if (getVar("Sub_EdgeGoal", 0) == 0)
    {
        Edge_Goal_Met3();
        return;
    }
    let answer0 = getInput("Another one?", -1, true, 4);
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("Thats fine", -1, 4);
    }
    if (answer0.isLike("yes"))
    {
        setRapidText(true);
        switch(random("Rocket_man3", "Edge_loop3", "Show_Image3", "Loop_no_hold3", "Loop_no_hold23", "Loop_no_hold33", "Loop_no_hold43", "Loop_no_hold53", "Loop_no_hold63"))
        {
            case "Rocket_man3":
            Rocket_man3();
            return;
            break;
            case "Edge_loop3":
            Edge_loop3();
            return;
            break;
            case "Show_Image3":
            Show_Image3();
            return;
            break;
            case "Loop_no_hold3":
            Loop_no_hold3();
            return;
            break;
            case "Loop_no_hold23":
            Loop_no_hold23();
            return;
            break;
            case "Loop_no_hold33":
            Loop_no_hold33();
            return;
            break;
            case "Loop_no_hold43":
            Loop_no_hold43();
            return;
            break;
            case "Loop_no_hold53":
            Loop_no_hold53();
            return;
            break;
            case "Loop_no_hold63":
            Loop_no_hold63();
            return;
            break;
        }
    }
    else if (answer0.isLike("no"))
    {
        CMessage("%stopstroking%", 0);
        setRapidText(true);
        Break3();
        return;
    }
    Loop_no_hold23();
}
function Loop_no_hold23()
{
    setRapidText(false);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cEdge.mp3");
    startEdging();
    holdEdge();
    setVar("Sub_EdgeGoal", getVar("Sub_EdgeGoal", 0) - 1);
    if (getVar("Sub_EdgeGoal", 0) == 0)
    {
        Edge_Goal_Met3();
        return;
    }
    let answer0 = getInput("One more possible?", -1, true, 4);
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("Thats fine", -1, 4);
    }
    if (answer0.isLike("yes"))
    {
        setRapidText(true);
        switch(random("Rocket_man3", "Edge_loop3", "Show_Image3", "Loop_no_hold3", "Loop_no_hold13", "Loop_no_hold33", "Loop_no_hold43", "Loop_no_hold53", "Loop_no_hold63"))
        {
            case "Rocket_man3":
            Rocket_man3();
            return;
            break;
            case "Edge_loop3":
            Edge_loop3();
            return;
            break;
            case "Show_Image3":
            Show_Image3();
            return;
            break;
            case "Loop_no_hold3":
            Loop_no_hold3();
            return;
            break;
            case "Loop_no_hold13":
            Loop_no_hold13();
            return;
            break;
            case "Loop_no_hold33":
            Loop_no_hold33();
            return;
            break;
            case "Loop_no_hold43":
            Loop_no_hold43();
            return;
            break;
            case "Loop_no_hold53":
            Loop_no_hold53();
            return;
            break;
            case "Loop_no_hold63":
            Loop_no_hold63();
            return;
            break;
        }
    }
    else if (answer0.isLike("no"))
    {
        CMessage("%stopstroking%", 0);
        setRapidText(true);
        Break3();
        return;
    }
    Loop_no_hold33();
}
function Loop_no_hold33()
{
    setRapidText(false);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cEdge.mp3");
    startEdging();
    holdEdge();
    setVar("Sub_EdgeGoal", getVar("Sub_EdgeGoal", 0) - 1);
    if (getVar("Sub_EdgeGoal", 0) == 0)
    {
        Edge_Goal_Met3();
        return;
    }
    let answer0 = getInput("Can you give me one more edge baby?", -1, true, 4);
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("Thats fine", -1, 4);
    }
    if (answer0.isLike("yes"))
    {
        setRapidText(true);
        switch(random("Rocket_man3", "Edge_loop3", "Show_Image3", "Loop_no_hold3", "Loop_no_hold13", "Loop_no_hold23", "Loop_no_hold43", "Loop_no_hold53", "Loop_no_hold63"))
        {
            case "Rocket_man3":
            Rocket_man3();
            return;
            break;
            case "Edge_loop3":
            Edge_loop3();
            return;
            break;
            case "Show_Image3":
            Show_Image3();
            return;
            break;
            case "Loop_no_hold3":
            Loop_no_hold3();
            return;
            break;
            case "Loop_no_hold13":
            Loop_no_hold13();
            return;
            break;
            case "Loop_no_hold23":
            Loop_no_hold23();
            return;
            break;
            case "Loop_no_hold43":
            Loop_no_hold43();
            return;
            break;
            case "Loop_no_hold53":
            Loop_no_hold53();
            return;
            break;
            case "Loop_no_hold63":
            Loop_no_hold63();
            return;
            break;
        }
    }
    else if (answer0.isLike("no"))
    {
        CMessage("%stopstroking%", 0);
        setRapidText(true);
        Break3();
        return;
    }
    Loop_no_hold43();
}
function Loop_no_hold43()
{
    setRapidText(false);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cEdge.mp3");
    startEdging();
    setVar("Sub_EdgeGoal", getVar("Sub_EdgeGoal", 0) - 1);
    if (getVar("Sub_EdgeGoal", 0) == 0)
    {
        Edge_Goal_Met3();
        return;
    }
    SMessage("Oh baby, you look very frustrated.", -1, 4);
    let answer0 = getInput("Looks like you need a break, dont you?", -1, true, 4);
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("Thats fine", -1, 4);
    }
    if (answer0.isLike("yes"))
    {
        SMessage("I am NOT thinking that you need a break, so we simply move on with the next edge", -1, 4);
        setRapidText(true);
        switch(random("Rocket_man3", "Edge_loop3", "Show_Image3", "Loop_no_hold3", "Loop_no_hold13", "Loop_no_hold23", "Loop_no_hold33", "Loop_no_hold53", "Loop_no_hold63"))
        {
            case "Rocket_man3":
            Rocket_man3();
            return;
            break;
            case "Edge_loop3":
            Edge_loop3();
            return;
            break;
            case "Show_Image3":
            Show_Image3();
            return;
            break;
            case "Loop_no_hold3":
            Loop_no_hold3();
            return;
            break;
            case "Loop_no_hold13":
            Loop_no_hold13();
            return;
            break;
            case "Loop_no_hold23":
            Loop_no_hold23();
            return;
            break;
            case "Loop_no_hold33":
            Loop_no_hold33();
            return;
            break;
            case "Loop_no_hold53":
            Loop_no_hold53();
            return;
            break;
            case "Loop_no_hold63":
            Loop_no_hold63();
            return;
            break;
        }
    }
    else if (answer0.isLike("no"))
    {
        SMessage("Fine so we can still continue edging", -1, 4);
        setRapidText(true);
        switch(random("Rocket_man3", "Edge_loop3", "Show_Image3", "Loop_no_hold3", "Loop_no_hold13", "Loop_no_hold23", "Loop_no_hold33", "Loop_no_hold53", "Loop_no_hold63"))
        {
            case "Rocket_man3":
            Rocket_man3();
            return;
            break;
            case "Edge_loop3":
            Edge_loop3();
            return;
            break;
            case "Show_Image3":
            Show_Image3();
            return;
            break;
            case "Loop_no_hold3":
            Loop_no_hold3();
            return;
            break;
            case "Loop_no_hold13":
            Loop_no_hold13();
            return;
            break;
            case "Loop_no_hold23":
            Loop_no_hold23();
            return;
            break;
            case "Loop_no_hold33":
            Loop_no_hold33();
            return;
            break;
            case "Loop_no_hold53":
            Loop_no_hold53();
            return;
            break;
            case "Loop_no_hold63":
            Loop_no_hold63();
            return;
            break;
        }
    }
    Loop_no_hold53();
}
function Loop_no_hold53()
{
    SMessage("Another slideshow for you comming up", -1, 4);
    Boobs();
}
function Boobs()
{
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cEdge.mp3");
    startEdging();
    setVar("Sub_EdgeGoal", getVar("Sub_EdgeGoal", 0) - 1);
    if (getVar("Sub_EdgeGoal", 0) == 0)
    {
        Edge_Goal_Met3();
        return;
    }
    unlockImages();
    switch(random("Rocket_man3", "Edge_loop3", "Show_Image3", "Loop_no_hold3", "Loop_no_hold13", "Loop_no_hold23", "Loop_no_hold33", "Loop_no_hold43", "Loop_no_hold63"))
    {
        case "Rocket_man3":
        Rocket_man3();
        return;
        break;
        case "Edge_loop3":
        Edge_loop3();
        return;
        break;
        case "Show_Image3":
        Show_Image3();
        return;
        break;
        case "Loop_no_hold3":
        Loop_no_hold3();
        return;
        break;
        case "Loop_no_hold13":
        Loop_no_hold13();
        return;
        break;
        case "Loop_no_hold23":
        Loop_no_hold23();
        return;
        break;
        case "Loop_no_hold33":
        Loop_no_hold33();
        return;
        break;
        case "Loop_no_hold43":
        Loop_no_hold43();
        return;
        break;
        case "Loop_no_hold63":
        Loop_no_hold63();
        return;
        break;
    }
    Butt();
}
function Butt()
{
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cEdge.mp3");
    startEdging();
    setVar("Sub_EdgeGoal", getVar("Sub_EdgeGoal", 0) - 1);
    if (getVar("Sub_EdgeGoal", 0) == 0)
    {
        Edge_Goal_Met3();
        return;
    }
    SMessage("Nice picture by the way", -1, 4);
    unlockImages();
    switch(random("Rocket_man3", "Edge_loop3", "Show_Image3", "Loop_no_hold3", "Loop_no_hold13", "Loop_no_hold23", "Loop_no_hold33", "Loop_no_hold43", "Loop_no_hold63"))
    {
        case "Rocket_man3":
        Rocket_man3();
        return;
        break;
        case "Edge_loop3":
        Edge_loop3();
        return;
        break;
        case "Show_Image3":
        Show_Image3();
        return;
        break;
        case "Loop_no_hold3":
        Loop_no_hold3();
        return;
        break;
        case "Loop_no_hold13":
        Loop_no_hold13();
        return;
        break;
        case "Loop_no_hold23":
        Loop_no_hold23();
        return;
        break;
        case "Loop_no_hold33":
        Loop_no_hold33();
        return;
        break;
        case "Loop_no_hold43":
        Loop_no_hold43();
        return;
        break;
        case "Loop_no_hold63":
        Loop_no_hold63();
        return;
        break;
    }
    Loop_no_hold63();
}
function Loop_no_hold63()
{
    SMessage("%SubName%", -1, 4);
    SMessage("On your marks!", -1, 4);
    SMessage("Set!", -1, 4);
    SMessage("Ready!", -1, 4);
    SMessage("EDGE!", -1, 4);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cEdge.mp3");
    startEdging();
    wait(60);
    switch(random("Rocket_man3", "Edge_loop3", "Show_Image3", "Loop_no_hold3", "Loop_no_hold13", "Loop_no_hold23", "Loop_no_hold33", "Loop_no_hold43", "Loop_no_hold53"))
    {
        case "Rocket_man3":
        Rocket_man3();
        return;
        break;
        case "Edge_loop3":
        Edge_loop3();
        return;
        break;
        case "Show_Image3":
        Show_Image3();
        return;
        break;
        case "Loop_no_hold3":
        Loop_no_hold3();
        return;
        break;
        case "Loop_no_hold13":
        Loop_no_hold13();
        return;
        break;
        case "Loop_no_hold23":
        Loop_no_hold23();
        return;
        break;
        case "Loop_no_hold33":
        Loop_no_hold33();
        return;
        break;
        case "Loop_no_hold43":
        Loop_no_hold43();
        return;
        break;
        case "Loop_no_hold53":
        Loop_no_hold53();
        return;
        break;
    }
    Break3();
}
function Break3()
{
    setRapidText(false);
    SMessage("Just take a break without stroking", -1, 4);
    SMessage("Only watch this video and try to relax.", -1, 4);
    SMessage("Simply watch out, that your %Cock% stays hard.", -1, 4);
    playVideo("Videos" + java.io.File.separator + "*.*");
    SMessage("Ok your break is over", -1, 4);
    SMessage("But before we move on with working on your edgegoal, just give me one extra edge %Grin%", -1, 4);
    setRapidText(false);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cEdge.mp3");
    startEdging();
    switch(random("Rocket_man3", "Edge_loop3", "Show_Image3", "Loop_no_hold3", "Loop_no_hold13", "Loop_no_hold23", "Loop_no_hold33", "Loop_no_hold43"))
    {
        case "Rocket_man3":
        Rocket_man3();
        return;
        break;
        case "Edge_loop3":
        Edge_loop3();
        return;
        break;
        case "Show_Image3":
        Show_Image3();
        return;
        break;
        case "Loop_no_hold3":
        Loop_no_hold3();
        return;
        break;
        case "Loop_no_hold13":
        Loop_no_hold13();
        return;
        break;
        case "Loop_no_hold23":
        Loop_no_hold23();
        return;
        break;
        case "Loop_no_hold33":
        Loop_no_hold33();
        return;
        break;
        case "Loop_no_hold43":
        Loop_no_hold43();
        return;
        break;
    }
    Edge_Goal_Met3();
}
function Edge_Goal_Met3()
{
    SMessage("So you really did all that edges!", -1, 4);
    SMessage("Now i am very impressed %SubName%", -1, 4);
    SMessage("I think thats enough for now", -1, 4);
    unlockImages();
    addContact(1);
    removeContact(4);
    CMessage("Let\'s get back to some teasing %Grin%");
    return;
    Edge_Quicky();
}
function Edge_Quicky()
{
    setRapidText(true);
    SMessage("Looks like we just have a quicky today %EmoteSad%", -1, 4);
    SMessage("I am sad that you were so lucky today and got just " + getVar("Sub_EdgeGoal") + " edges", -1, 4);
    SMessage("In my dreams there where numbers with three digits %EmoteSad%", -1, 4);
    SMessage("Fate is treating me hard today", -1, 4);
    SMessage("so maybe I need to be extra rough on YOU for that?", -1, 4);
    increaseAnger(4)
    SMessage("Nevertheless lets bring this to an end", -1, 4);
    SMessage("%SubName% %Edge%", -1, 4);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cEdge.mp3");
    startEdging();
    SMessage("I\'m going to show you some pictures I found online", -1, 4);
    setVar("Edge_Count", 0);
    SMessage("And when I think I have a really good one", -1, 4);
    SMessage("I\'ll let you edge to it %Grin%", -1, 4);
    SMessage("When you reached your daily edge goal, we can move on to other tasks", -1, 4);
    SMessage("Get ready %PetName%", -1, 4);
    lockImages();
    Show_Image();
}
function Show_Image()
{
    getTeasePicture();
    if (randomInteger(1, 100) <= 75)
    {
        Show_Image();
        return;
    }
    SMessage("I want you to edge for this one %PetName%", -1, 4);
    SMessage("Get close for me right now", -1, 4);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cEdge.mp3");
    startEdging();
    SMessage("Just sit back and relax", -1, 4);
    unlockImages();
    setVar("Sub_EdgeGoal", getVar("Sub_EdgeGoal", 0) - 1);
    if (getVar("Edge_Count", 0) == getVar("Sub_EdgeGoal", 0))
    {
        Edge_Goal_Met();
        return;
    }
    SMessage("Let yourself calm down as much as you can", -1, 4);
    setVar("EdgeRemaining", getVar("Sub_EdgeGoal", 0) - getVar("Edge_Count", 0));
    SMessage("You still have " + getVar("EdgeRemaining") + " to go %Grin%", -1, 4);
    if (randomInteger(1, 100) <= 50)
    {
        Rocket_man();
        return;
    }
    Show_Image();
    return;
    Rocket_man();
}
function Rocket_man()
{
    SMessage("Lets make a little exciting countdown to get the rocket up", -1, 4);
    SMessage("%SubName%, edge on 0", -1, 4);
    setRapidText(true);
    SMessage("10", -1, 4);
    SMessage("9", -1, 4);
    SMessage("8", -1, 4);
    SMessage("7", -1, 4);
    SMessage("6", -1, 4);
    SMessage("5", -1, 4);
    SMessage("4", -1, 4);
    SMessage("3", -1, 4);
    SMessage("2", -1, 4);
    SMessage("1", -1, 4);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cEdge.mp3");
    startEdging("EDGE!!");
    setVar("Sub_EdgeGoal", getVar("Sub_EdgeGoal", 0) - 1);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cEdge.mp3");
    setRapidText(false);
    SMessage(getVar("Sub_EdgeGoal") + " dripping edges to go for you %SubName%", -1, 4);
    if (getVar("Edge_Count", 0) == getVar("Sub_EdgeGoal", 0))
    {
        Edge_Goal_Met();
        return;
    }
    Show_Image();
    return;
    Edge_Goal_Met();
}
function Edge_Goal_Met()
{
    SMessage("So you really did all that edges!", -1, 4);
    SMessage("Now i am very impressed %SubName%", -1, 4);
    SMessage("I think thats enough for now", -1, 4);
    unlockImages();
    addContact(1);
    removeContact(4);
    CMessage("Lets get back to some teasing %Grin%");
    return;
    Contact3_Task_Forced();
}
function Contact3_Task_Forced()
{
    SMessage("So you remember the game Task_forced?", -1, 4);
    SMessage("Does it mean you liked it?", -1, 4);
    SMessage("Makes me happy %SubName%", -1, 4);
    SMessage("I am sure we can do that one day again " + "-)", -1, 4);
    addContact(1);
    removeContact(4);
    return;
    Sprinter();
}
function Sprinter()
{
    SMessage("%SubName%", -1, 4);
    SMessage("On your marks!", -1, 4);
    SMessage("Set!", -1, 4);
    SMessage("Ready!", -1, 4);
    SMessage("EDGE!", -1, 4);
    "dripping edges to go for you %SubName%"
    startEdging();
    wait(10);
    addContact(1);
    removeContact(4);
    return;
}