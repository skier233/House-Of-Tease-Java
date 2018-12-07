main();
function main()
{
    CMessage("%AV_StartStrokes40%");
    switch (random("a01", "a02", "a03", "a04", "a05", "a06", "a07"))
    {
        case "a01":
        a01();
        return;
        break;
        case "a02":
        a02();
        return;
        case "a03":
            a03();
            return;
            break;
        case "a04":
            a04();
            return;
            break;
        break;
        case "a05":
        a05();
        return;
        break;
        case "a06":
        a06();
        return;
        break;
        case "a07":
            a07();
            return;
            break;
    }
    CMessage("%AV_StartStrokes60%");
    switch(random("a03", "a04", "a07"))
    {
        case "a03":
        a03();
        return;
        break;
        case "a04":
        a04();
        return;
        break;
        case "a07":
        a07();
        return;
        break;
    }
    a01();
}
function a01()
{
    CMessage("I hope you\'re really horny");
    CMessage("Well I hope for your own sake that you are");
    CMessage("Because I\'m going to drive you crazy %GeneralTime% %Grin%");
    CMessage("I\'m going to tease you so bad today, %PetName%");
    CMessage("It\'s going to feel amazing and yet...");
    CMessage("Somehow it\'s inevitably going to hurt too %Grin%");
    CMessage("That\'s just the way I like it, %Name%");
    CMessage("%stopstroking%", 0);
    End();
    return;
    a02();
}
function a02()
{
    let answer0 = getInput("You just can\'t help yourself, can you?", 7);
    if (answer0.isTimeout())
    {
        help_it();
        return;
    }
    if (answer0.isLike("yes", "can"))
    {
        CMessage("Haha, that\'s very funny, %Name%");
    }
    else
    {
        CMessage("%Grin%");
    }
    help_it();
}
function help_it()
{
    CMessage("You just <i>have<> to come back to me");
    if (randomInteger(1, 100) <= 50)
    {
        just_have_to_come_back();
        return;
    }
    CMessage("To %JerkOff%");
    CMessage("Because that\'s all you\'re good for, right? %Smile%");
    CMessage("%stopstroking%", 0);
    End();
    return;
    just_have_to_come_back();
}
function just_have_to_come_back()
{
    let answer0 = getInput("I can probably make you do anything I want, right?");
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    CMessage("You\'re that addicted to me");
    CMessage("You don\'t even have any control over it");
    CMessage("That\'s how bad you want me to tell you to %JerkOff%");
    CMessage("%stopstroking%", 0);
    End();
    return;
    a03();
}
function a03()
{
    CMessage("You know...");
    CMessage("I sometimes wonder if you ever think about this arrangement of ours");
    CMessage("I\'m sure it must be clear to you by now");
    CMessage("That I <i>own<> you");
    CMessage("And not just your %Cock%, %Name%");
    CMessage("I own your orgasms");
    CMessage("Your arousal");
    CMessage("I own your mind");
    CMessage("I control you like a puppet on a string %Grin%");
    CMessage("It\'s amazing how easy that is, %Name%");
    CMessage("I snap my fingers");
    CMessage("And your %Cock% is hard and erect");
    CMessage("%stopstroking%", 0);
    End();
    return;
    a04();
}
function a04()
{
    CMessage("You\'re becoming a bit of an addict, aren\'t you?");
    CMessage("There\'s no denying it");
    CMessage("In fact, you\'ve always been this way, even if you didn\'t always know it");
    CMessage("You need this feeling of helplessness");
    CMessage("And I\'ll tell you why, %SubName%");
    CMessage("Your purpose is to serve a dominant woman");
    CMessage("So when you come crawling back to me like a horny addict...");
    CMessage("That\'s when you fulfil your true purpose in life");
    CMessage("It\'s when you reach your full potential %Smile%");
    CMessage("%stopstroking%", 0);
    End();
    return;
    a05();
}
function a05()
{
    CMessage("I think I know what you really want, %PetName%");
    CMessage("You want to give up control");
    CMessage("You want me to take you by the hand");
    CMessage("No, by the <i>balls<>")
    CMessage("And lead you wherever I want to lead you");
    CMessage("Do with you whatever pleases me");
    CMessage("Oh, I know exactly what you need, %SubName% %Grin%");
    CMessage("%stopstroking%", 0);
    End();
    return;
    a06();
}
function a06()
{
    CMessage("You know that\'s probably not a good thing for you, right? %Grin%");
    CMessage("It means I\'ve been thinking about making you suffer for me");
    CMessage("I know you like that though, that you want to suffer");
    CMessage("But there\'s always a chance that I\'ll find your limit");
    CMessage("Maybe today\'s the day I finally truly break you");
    CMessage("Let\'s find out, %PetName%");
    CMessage("%stopstroking%", 0);
    End();
    return;
    a07();
}
function a07()
{
    CMessage("I don\'t know if you realize just how much I love doing this");
    CMessage("Controlling you, making you squirm");
    CMessage("Knowing that you\'re walking around all day thinking about me");
    CMessage("Feeling the dull ache your %Balls% as you go about your daily life");
    CMessage("That dull ache that constantly reminds you how much I own you");
    CMessage("You have know idea how much that turns me on, %PetName%");
    CMessage("I\'m getting wet just thinking about it right now %Giggles%");
    if (getVar("orgasmrestricted", false))
    {
        already_restricted();
        return;
    }
    if (getOrgasmChance() == 0)
    {
        already_restricted();
        return;
    }
    CMessage("I especially love to keep you denied and frustrated");
    CMessage("So maybe I won\'t let you cum %GeneralTime% %Grin%");
    CMessage("You\'ll just have to wait and see");
    CMessage("%stopstroking%", 0);
    End();
    return;
    already_restricted();
}
function already_restricted()
{
    CMessage("Especially knowing that you don\'t get to cum for me %GeneralTime%");
    if (getOrgasmChance() == 0)
    {
        CMessage("Just like every day");
    }
    CMessage("So that tomorrow you\'ll be walking around with blue balls all day");
    if (getOrgasmChance() == 0)
    {
        CMessage("Just like every tomorrow %Smile%");
    }
    CMessage("%EmoteMoan%");
    CMessage("Nothing turns me on more than that");
    CMessage("%stopstroking%", 0);
    End();
    return;
    End();
}
function End()
{
    return;
}