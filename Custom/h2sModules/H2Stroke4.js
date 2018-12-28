main();
function main()
{
    CMessage(random("Time to edge a lot ", "Edge time ", "Let\'s try some more edges ") + random("%PetName%", "%SubName%"));
    CMessage("You will repeat the process until you\'ve deemed it\'s OK to jump over the edge and have an orgasm.");
    CMessage("However our goal is reach a state of edging...");
    CMessage("where " + random("any touch or caress leads to an explosive sensation of elation", "you continue edging, you continue feeling extreme pleasure as your mind and body will become one"));
    CMessage(random("You will be experiencing such concentrated pleasure which can become very expressive", "Your body and face will react to every touch to the %Cock%, resulting in the term \"goon\""));
    CMessage("Relax and spread your legs a bit, so that you have enough space to work on your %Cock%");
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
    switch(random("Loop_no_hold", "Loop_no_hold1", "Loop_no_hold2", "Loop_no_hold3"))
    {
        case "Loop_no_hold":
        Loop_no_hold();
        return;
        break;
        case "Loop_no_hold1":
        Loop_no_hold1();
        return;
        break;
        case "Loop_no_hold2":
        Loop_no_hold2();
        return;
        break;
        case "Loop_no_hold3":
        Loop_no_hold3();
        return;
        break;
    }
    Loop_no_hold();
}
function Loop_no_hold()
{
    setRapidText(false);
    startEdging("%Edge%");
    let answer0 = getInput("Wanna try some more?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("Thats fine");
    }
    if (answer0.isLike("yes"))
    {
        CMessage(random("%Great%", "%Good%", "%ICanKeepThisUp%"));
        setRapidText(true);
        switch(random("Loop_no_hold", "Loop_no_hold1", "Loop_no_hold2", "Loop_no_hold3"))
        {
            case "Loop_no_hold":
            Loop_no_hold();
            return;
            break;
            case "Loop_no_hold1":
            Loop_no_hold1();
            return;
            break;
            case "Loop_no_hold2":
            Loop_no_hold2();
            return;
            break;
            case "Loop_no_hold3":
            Loop_no_hold3();
            return;
            break;
        }
    }
    else if (answer0.isLike("no"))
    {
        CMessage("%stopstroking%", 0);
        setRapidText(true);
        Break7();
        return;
    }
    Loop_no_hold1();
}
function Loop_no_hold1()
{
    setRapidText(false);
    startEdging("%Edge%");
    let answer0 = getInput("Another one?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("Thats fine");
    }
    if (answer0.isLike("yes"))
    {
        CMessage(random("%Great%", "%Good%", "%ICanKeepThisUp%"));
        setRapidText(true);
        switch(random("Loop_no_hold", "Loop_no_hold1", "Loop_no_hold2", "Loop_no_hold3"))
        {
            case "Loop_no_hold":
            Loop_no_hold();
            return;
            break;
            case "Loop_no_hold1":
            Loop_no_hold1();
            return;
            break;
            case "Loop_no_hold2":
            Loop_no_hold2();
            return;
            break;
            case "Loop_no_hold3":
            Loop_no_hold3();
            return;
            break;
        }
    }
    else if (answer0.isLike("no"))
    {
        CMessage("%stopstroking%", 0);
        setRapidText(true);
        Break7();
        return;
    }
    Loop_no_hold2();
}
function Loop_no_hold2()
{
    setRapidText(false);
    startEdging("%Edge%");
    let answer0 = getInput("One more possible?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("Thats fine");
    }
    if (answer0.isLike("yes"))
    {
        CMessage(random("%Great%", "%Good%", "%ICanKeepThisUp%"));
        setRapidText(true);
        switch(random("Loop_no_hold", "Loop_no_hold1", "Loop_no_hold2", "Loop_no_hold3"))
        {
            case "Loop_no_hold":
            Loop_no_hold();
            return;
            break;
            case "Loop_no_hold1":
            Loop_no_hold1();
            return;
            break;
            case "Loop_no_hold2":
            Loop_no_hold2();
            return;
            break;
            case "Loop_no_hold3":
            Loop_no_hold3();
            return;
            break;
        }
    }
    else if (answer0.isLike("no"))
    {
        CMessage("%stopstroking%", 0);
        setRapidText(true);
        Break7();
        return;
    }
    Loop_no_hold3();
}
function Loop_no_hold3()
{
    setRapidText(false);
    startEdging("%Edge%");
    let answer0 = getInput("Can you give me one more edge baby?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("Thats fine");
    }
    if (answer0.isLike("yes"))
    {
        CMessage(random("%Great%", "%Good%", "%ICanKeepThisUp%"));
        setRapidText(true);
        switch(random("Loop_no_hold", "Loop_no_hold1", "Loop_no_hold2", "Loop_no_hold3"))
        {
            case "Loop_no_hold":
            Loop_no_hold();
            return;
            break;
            case "Loop_no_hold1":
            Loop_no_hold1();
            return;
            break;
            case "Loop_no_hold2":
            Loop_no_hold2();
            return;
            break;
            case "Loop_no_hold3":
            Loop_no_hold3();
            return;
            break;
        }
    }
    else if (answer0.isLike("no"))
    {
        CMessage("%stopstroking%", 0);
        setRapidText(true);
        Break7();
        return;
    }
    Break7();
}
function Break7()
{
    setRapidText(false);
    CMessage("Just take a break without stroking");
    wait(randomInt(10, 20));
    return;
}