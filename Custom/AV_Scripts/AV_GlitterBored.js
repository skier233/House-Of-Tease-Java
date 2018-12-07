main();
function main()
{
    setTempVar("AV_GlitterJoinOnce", true);
    switch(random("G1", "G2", "G3"))
    {
        case "G1":
        G1();
        return;
        break;
        case "G2":
        G2();
        return;
        break;
        case "G3":
        G3();
        return;
        break;
    }
    G1();
}
function G1()
{
    setTempVar("AV_GlitterJoin1", true);
    addContact(2);
    Greet();
    return;
    G2();
}
function G2()
{
    setTempVar("AV_GlitterJoin2", true);
    addContact(3);
    Greet();
    return;
    G3();
}
function G3()
{
    setTempVar("AV_GlitterJoin3", true);
    addContact(4);
    Greet();
    return;
    Greet();
}
function Greet()
{
    switch(random("a01", "a02"))
    {
        case "a01":
        a01();
        return;
        break;
        case "a02":
        a02();
        return;
        break;
    }
    a01();
}
function a01()
{
    SMessage(random("Hey, what\'s going on ", "Hey you ", "Hey you guys and girls %Smile% ") + "%Smile%", randomInt(2, 4));
    CMessage(random("What\'s up", "%GlitterName%?", "Hey %GlitterName%"));
    GlitterTalk();
    return;
    a02();
}
function a02()
{
    CMessage(random("Look who just logged on to say hi", "Look who just came in %EmoteHappy%"));
    if (inGroup(1, 2))
    {
        SMessage(random("Hi %ShortName% and %SubName%", "Hi %Smile%"), -1, 2);
    }
    if (inGroup(1, 3))
    {
        SMessage(random("Hi %ShortName% and %SubName%", "Hi %Smile%"), -1, 3);
    }
    if (inGroup(1, 4))
    {
        SMessage(random("Hi %ShortName% and %SubName%", "Hi %Smile%"), -1, 4);
    }
    CMessage(random("Good to see you", "%GlitterName%", "Hi %GlitterName%, what bring you to there parts?"));
    GlitterTalk();
    return;
    GlitterTalk();
}
function GlitterTalk()
{
    if (inGroup(1, 2))
    {
        SMessage(random("I\'m not interrupting anything, am I?", "Always good to see %SubName% suffer some well deserved abuse %Grin%"), -1, 2);
    }
    if (inGroup(1, 3))
    {
        SMessage(random("I\'m not interrupting anything, am I?", "Always good to see %SubName% suffer some well deserved abuse %Grin%"), -1, 3);
    }
    if (inGroup(1, 4))
    {
        SMessage(random("I\'m not interrupting anything, am I?", "Always good to see %SubName% suffer some well deserved abuse %Grin%"), -1, 4);
    }
    if (inGroup(1, 2))
    {
        SMessage("But I am " + random("a little bored ", "bored ") + "can I " + random("join ", "lurk ") + "here for a while?", -1, 2);
    }
    if (inGroup(1, 3))
    {
        SMessage("But I am " + random("a little bored ", "bored ") + "can I " + random("join ", "lurk ") + "here for a while?", -1, 3);
    }
    if (inGroup(1, 4))
    {
        SMessage("But I am " + random("a little bored ", "bored ") + "can I " + random("join ", "lurk ") + "here for a while?", -1, 4);
    }
    CMessage(random("Sure", "Of course"));
    CMessage("Feel free to " + random("take the lead", "take actions", "help me"));
    if (inGroup(1, 2))
    {
        SMessage(random("Cool", "Thanks", "Nice"), -1, 2);
    }
    if (inGroup(1, 3))
    {
        SMessage(random("Cool", "Thanks", "Nice"), -1, 3);
    }
    if (inGroup(1, 4))
    {
        SMessage(random("Cool", "Thanks", "Nice"), -1, 4);
    }
    setDate("AV_GlitterJoin");
    return;
}