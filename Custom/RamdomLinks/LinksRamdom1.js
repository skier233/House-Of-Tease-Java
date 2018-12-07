main();
function main()
{
    if(getVar("AV_Link1_NotFirstTime", false))
    {
        AV_Link1_NotFirstTime();
        return;
    }
    setVar("AV_Link1", 0);
    setVar("AV_Link1_NotFirstTime", true);
    AV_Link1_NotFirstTime();
}
function AV_Link1_NotFirstTime()
{
    if (getVar("AV_Link1", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_Link1", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_Link1", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_Link1", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_Link1", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_Link1", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_Link1", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_Link1", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_Link1", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_Link1", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_Link1", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_Link1", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_Link1", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_Link1", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_Link1", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_Link1", 0) == 1101)
    {
        Part1_16();
        return;
    }
    Mod1();
}
function Mod1()
{
    setVar("AV_Link1", getVar("AV_Link1", 0) + 1);
    Link1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_Link1", getVar("AV_Link1", 0) + 10);
    Link2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_Link1", getVar("AV_Link1", 0) + 100);
    Link3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_Link1", getVar("AV_Link1", 0) + 1000);
    Link4();
    return;
    Part1_1();
}
function Part1_1()
{
    switch(random("Mod1", "Mod2", "Mod3", "Mod4"))
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
        case "Mod4":
        Mod4();
        return;
        break;
    }
    Part1_2();
}
function Part1_2()
{
    switch(random("Mod2", "Mod3", "Mod4"))
    {
        case "Mod2":
        Mod2();
        return;
        break;
        case "Mod3":
        Mod3();
        return;
        break;
        case "Mod4":
        Mod4();
        return;
        break;
    }
    Part1_3();
}
function Part1_3()
{
    switch(random("Mod1", "Mod3", "Mod4"))
    {
        case "Mod1":
        Mod1();
        return;
        break;
        case "Mod3":
        Mod3();
        return;
        break;
        case "Mod4":
        Mod4();
        return;
        break;
    }
    Part1_4();
}
function Part1_4()
{
    switch(random("Mod1", "Mod2", "Mod4"))
    {
        case "Mod1":
        Mod1();
        return;
        break;
        case "Mod2":
        Mod2();
        return;
        break;
        case "Mod4":
        Mod4();
        return;
        break;
    }
    Part1_5();
}
function Part1_5()
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
    Part1_6();
}
function Part1_6()
{
    switch(random("Mod3", "Mod4"))
    {
        case "Mod3":
        Mod3();
        return;
        break;
        case "Mod4":
        Mod4();
        return;
        break;
    }
    Part1_7();
}
function Part1_7()
{
    switch(random("Mod2", "Mod4"))
    {
        case "Mod2":
        Mod2();
        return;
        break;
        case "Mod4":
        Mod4();
        return;
        break;
    }
    Part1_8();
}
function Part1_8()
{
    Mod4();
    return;
    Part1_9();
}
function Part1_9()
{
    switch(random("Mod1", "Mod4"))
    {
        case "Mod1":
        Mod1();
        return;
        break;
        case "Mod4":
        Mod4();
        return;
        break;
    }
    Part1_10();
}
function Part1_10()
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
    Part1_11();
}
function Part1_11()
{
    Mod3();
    return;
    Part1_12();
}
function Part1_12()
{
    Fim();
    return;
    Part1_13();
}
function Part1_13()
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
    Part1_14();
}
function Part1_14()
{
    Mod1();
    return;
    Part1_15();
}
function Part1_15()
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
    Part1_16();
}
function Part1_16()
{
    Mod2();
    return;
    Fim();
}
function Fim()
{
    setVar("AV_Link1", 0);
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_CrushBreakLink.js");
    CMessage("%StartStroking%");
    Stroking();
    return;
    Link1();
}
function Link1()
{
    CMessage("Mmmm yes");
    CMessage("This is one of the things I love about you, you know");
    CMessage("how deep you let me go inside you.");
    CMessage("You give me this feeling, like");
    CMessage("every part of you that\'s sexual connects back to me");
    if(getVar("AV_Know_11", false))
    {
        AV_Know_11();
        return;
    }
    CMessage("Like...");
    let answer0 = getInput("Are you actually interested in Post Orgasm Torture?");
    setVar("AV_Know_11", true);
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("Yes or no %PetName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%Great%");
        PostTime();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("%EmoteSad%");
    }
    CMessage("%StartStroking%");
    Stroking();
    return;
    PostTime();
}
function PostTime()
{
    CMessage("How long should I torture you with post orgasm stroking?");
    setVar("AV_Persona10", createInput().getAnswer());
    CMessage("%EmoteSquirm%");
    setVar("AV_Persona30", true);
    CMessage("%StartStroking%");
    Stroking();
    return;
    AV_Know_11();
}
function AV_Know_11()
{
    CMessage("I love how easy it is to make you squirm");
    CMessage("feeling your muscles tense up as you fight not to groan");
    CMessage("The whole time I know your cock\'s getting bigger");
    CMessage("Even though your cock must be aching");
    CMessage("%StartStroking%");
    Stroking();
    return;
    Link2();
}
function Link2()
{
    CMessage("a big part of you is praying that I don\'t let you touch it");
    CMessage("Still, I bet there\'s at least some part of you");
    if(getVar("AV_Know_21", false))
    {
        AV_Know_21();
        return;
    }
    CMessage("that would want me to let you touch anyway.");
    CMessage(random("The part of you that just wants to feel good", "The part of you that makes it hard for your body to wait for me"));
    CMessage("The part of you that goes crazy thinking about the next time you get to touch me");
    run("Custom" + java.io.File.separator + "Tasks" + java.io.File.separator + "AV_StrokeNumber.js");
    CMessage("How would you feel if I wanted to show you off to other Dommes?");
    setVar("AV_Persona20", createInput().getAnswer());
    CMessage("%EmoteLaugh%");
    setVar("AV_Know_21", true);
    CMessage("%StartStroking%");
    Stroking();
    return;
    AV_Know_21();
}
function AV_Know_21()
{
    CMessage("Can I tell you a secret?");
    CMessage("That small part of you, that part you have to fight back every day for me");
    CMessage("I LOVE fucking with that part of you");
    CMessage("I know it sounds mean, but...");
    CMessage("nothing gets me hotter than watching you when all you want to do is cum");
    CMessage("but you can\'t");
    CMessage("%StartStroking%");
    Stroking();
    return;
    Link3();
}
function Link3()
{
    CMessage("I\'m going to make you stroke for every part of me");
    CMessage("Edge for every part of me");
    switch(random("a01b", "a02b"))
    {
        case "a01b":
        a01b();
        return;
        break;
        case "a02b":
        a02b();
        return;
        break;
    }
    a01b();
}
function a01b()
{
    CMessage("until I\'ve burned every curve, every shade and every shadow of my body into your mind");
    CMessage("I\'m going to use your ache to make sure you never forget my body");
    a02b();
}
function a02b()
{
    CMessage("%stopstroking%", 0);
    if(getVar("AV_Know_04", false))
    {
        AV_Know_04();
        return;
    }
    CMessage("What is the girl\'s name you lost your virginity?");
    setVar("AV_Persona05", createInput().getAnswer());
    CMessage("I will make you forget about her");
    setVar("AV_Know_04", true);
    CMessage("%StartStroking%");
    Stroking();
    return;
    AV_Know_04();
}
function AV_Know_04()
{
    CMessage("But you need to suffer more to make sure that happens");
    CMessage("%StartStroking%");
    Stroking();
    return;
    Link4();
}
function Link4()
{
    CMessage("If you really think about it");
    CMessage("being in here is just as much a tease for me as it is for you.");
    CMessage("I want you to understand that I know what it\'s like to crave something you can\'t have");
    CMessage("to just feel it pulling at you in the sexiest ways.");
    if(getVar("AV_Know_06", false))
    {
        AV_Know_06();
        return;
    }
    CMessage("Which sex toy would you like I had?");
    setVar("AV_Persona07", createInput().getAnswer());
    CMessage("Putting on my Shop list");
    setVar("AV_Know_06", true);
    CMessage("%StartStroking%");
    Stroking();
    return;
    AV_Know_06();
}
function AV_Know_06()
{
    CMessage("It\'s a feeling like your hands are tied down");
    CMessage("when there\'s this one sweet spot you just want to scratch.");
    CMessage("%StartStroking%");
    Stroking();
    return;
}