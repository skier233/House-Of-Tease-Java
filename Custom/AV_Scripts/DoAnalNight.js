main();
function main()
{
    CMessage(random("Anal time!", "fuck time...for me %Lol%", "time to fuck your ass", "how about we put your ass to the test?", "I think it\'s time to give your ass hole some attention"));
    CMessage(random("Make sure you get that dildo nice and lubed ", "Now get your asspussy wet ", "Lube up your dildo and your butt ") + random("because you know where it is going next", "I want you to get that dildo in there", "and prepare to be fucked"));
    wait(30);
    CMessage(random("Stand and bend over the desk", "put your legs over the table...open it"));
    wait(15);
    if(getVar("AV_DommeMistress", false) && getVar("av_fetish_rough", false))
    {
        if (randomInt(1, 100) <= 30)
        {
            CMessage("Oh,that\'s right you little bitch", "prepare to take the whole thing up your ass");
        }
    }
    CMessage("Good boy. " + random("Now find a way to get that lubed dildo into your ass", "Place the tip against your butt...Now slide the dildo into your butt", "Slide it into your once tight little ass hole"));
    wait(20);
    CMessage(random("Go on and force that diddo into your ass", "Can you feel it filling your most private hole?", "I wan\'t it to go all the way in", "Now I want you to moan loudly while you insert more of it in", "Keep on going until your dildo is all filled up"));
    CMessage("Fuck your ass following the beat");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "b055.mp3");
    CMessage(random("Nice and slow", "Ugh. Does that feel good %Slave%? I bet it does", "mmmm", "that\'s right, take it all", "Do you feel it stretching you?"));
    if(getVar("AV_DommeMistress", false) && getVar("av_fetish_rough", false))
    {
        CMessage(random("That\'s a tiny little asshole you have, let\'s make it bigger", "You look so pathetic with a dildo up your ass", "You\'re nothing more than my slave and I can do whatever I want to you"));
    }
    CMessage("%stopstroking%", 0);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStop.mp3");
    if(!getVar("av_fetish_pain", false))
    {
        SkipDor();
        return;
    }
    if(getVar("AV_DommeMistress", false))
    {
        if (randomInteger(1, 100) <= 30)
        {
            SkipDor();
            return;
        }
    }
    if(!getVar("AV_DommeMistress", false))
    {
        if (randomInteger(1, 100) <= 50)
        {
            SkipDor();
            return;
        }
    }
    CMessage("I want you to put 2 clothespins on your nipples and " + randomInt(3, 5) + "on your %Balls%");
    wait(30);
    SkipDor();
}
function SkipDor()
{
    if (randomInteger(1, 100) <= 50)
    {
        NoAudioFuck();
        return;
    }
    CMessage(random("Back to fucking", "start fucking yourself again"));
    SMessage("%DomName% turned on the mic");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "commands" + java.io.File.separator + "Fuck*.mp3");
    AudioGoHere();
    return;
    NoAudioFuck();
}
function NoAudioFuck()
{
    CMessage(random("Back to fucking", "start fucking yourself again"));
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "b055.mp3");
    CMessage(random("fuck yourself in a slow pace", "yeah thats it", "I wan\'t it to go all the way out and then all the way back in", "exactly! like that"));
    AudioGoHere();
}
function AudioGoHere()
{
    let answer0 = getInput("Do you think you can " + random("go ", "fuck ") + "faster?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo% %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%Great%");
        setTempVar("av_75", true);
        a075();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("It\'s %Okay% %SubName%");
        setTempVar("av_55", true);
        a055();
        return;
    }
    a055();
}
function a055()
{
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "b055.mp3");
    Fase1();
    return;
    a075();
}
function a075()
{
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "b075.mp3");
    Fase1();
}
function Fase1()
{
    if (randomInteger(1, 100) <= 30)
    {
        NoStrokingYet();
        return;
    }
    CMessage("%StartStroking%");
    setTempVar("av_Stroking", true);
    CMessage("at the same speed.");
    NoStrokingYet();
}
function NoStrokingYet()
{
    CMessage(random("I wan\'t you to moan through every thrust", "yeah, keep going like that, all the way out and ram it back in", "relentlessly fucking your sorry ass", "Imagine me with a strap on and im fucking you", "I want you to moan while I fuck you"));
    if(getVar("av_75", false))
    {
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "b075.mp3");
    }
    if(getVar("av_55", false))
    {
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "b055.mp3");
    }
    if(!getVar("av_Stroking", false))
    {
        CMessage("%StartStroking%");
    }
    CMessage(random("Good boy", "Brutalize your little ass for me", "Wow it feels so good doesn\'t it?"));
    if (randomInteger(1, 100) <= 50)
    {
        NoEdge();
        return;
    }
    startEdging();
    CMessage("%Edge%");
    End();
    return;
    CMessage("%stopstroking%", 0);
    End();
}
function End()
{
    delVar("av_55");
    delVar("av_75");
    delVar("av_Stroking");
    CMessage(random("You made me very happy ", "I\'m proud of you ", "We\'re just getting into a groove here ") + "%SubName% %EmoteHappy%");
    CMessage("You can remove everything, clean yourself and sit " + "...you have 1 minute to recover");
    wait(60);
    return;
}