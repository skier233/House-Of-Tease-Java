main();
function main()
{
    CMessage(random("%PetName%", "%SubName%"));
    CMessage(random("I want to know some more things about you", "I want to know more about you", "I want to get to know you better", "I\'m curious about you"));
    if(!getVar("AV_Pergunta01", false))
    {
        P01();
        return;
    }
    if(!getVar("AV_Pergunta02", false))
    {
        P02();
        return;
    }
    if(!getVar("AV_Pergunta03", false))
    {
        P03();
        return;
    }
    if(!getVar("AV_Pergunta04", false))
    {
        P04();
        return;
    }
    AllDone37();
    return;
    P01();
}
function P01()
{
    CMessage("When was the first time you called someone Mistress?");
    setVar("AV_Perg01", createInput().getAnswer());
    CMessage("%AV_Inter%");
    CMessage("When was the first time you were called slave, %PetName%, etc...?");
    setVar("AV_Perg02", createInput().getAnswer());
    CMessage("%AV_Inter%");
    CMessage("What is your most embarrassing moment ever?");
    setVar("AV_Perg03", createInput().getAnswer());
    CMessage("%AV_Inter%");
    CMessage("%ThatsEnough%");
    setVar("AV_Pergunta01", true);
    return;
    P02();
}
function P02()
{
    let answer0 = getInput("What tends to feel better for you, sex or masturbation?");
    while (!(answer0.isLike("sex") || answer0.isLike("sex") || answer0.isLike("masturbation") || answer0.isLike("stroking") || answer0.isLike("jerking")))
    {
        answer0 = getInput("sex or masturbation %SubName%?");
    }
    if (answer0.isLike("sex", "sex"))
    {
        CMessage("I imagined that");
    }
    else if (answer0.isLike("masturbation", "stroking", "jerking"))
    {
        CMessage("%Lol%, so you are doing your favourite with me...");
    }
    CMessage("Your 5 favorite spots to be stimulated.");
    setVar("AV_Perg04", createInput().getAnswer());
    CMessage("%AV_Inter%");
    CMessage("What\'s the most unusual thing you\'ve done nude?");
    setVar("AV_Perg05", createInput().getAnswer());
    CMessage("%AV_Inter%");
    CMessage("%ThatsEnough%");
    setVar("AV_Pergunta02", true);
    return;
    P03();
}
function P03()
{
    let answer0 = getInput("Have you ever had sex/masturbated while somebody was sleeping near you?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo% %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Kinky!!");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Very risky, right?");
    }
    CMessage("Age you started masturbating?");
    setVar("AV_Perg06", createInput().getAnswer());
    CMessage("%AV_Inter%");
    CMessage("How did you discover/learn about it?");
    setVar("AV_Perg07", createInput().getAnswer());
    CMessage("%AV_Inter%");
    CMessage("%ThatsEnough%");
    setVar("AV_Pergunta03", true);
    return;
    P04();
}
function P04()
{
    let answer0 = getInput("Have you ever given/received a footjob, boobjob, etc.?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo% %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Aww...I will not be your first");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("You don\'t?");
    }
    let answer1 = getInput("Have you ever been caught masturbating/having sex?");
    while (!(answer1.isLike("yes") || answer1.isLike("no")))
    {
        answer1 = getInput("%YesorNo% %SubName%?");
    }
    if (answer1.isLike("yes"))
    {
        CMessage("Ouch %Lol%");
    }
    else if (answer1.isLike("no"))
    {
        CMessage("lucky you, I was once %EmoteSmile%");
    }
    let answer2 = getInput("Have you ever used a homemade sex toy, or a regular object as a sex toy?");
    while (!(answer2.isLike("yes") || answer2.isLike("no")))
    {
        answer2 = getInput("%YesorNo% %SubName%?");
    }
    if (answer2.isLike("yes"))
    {
        CMessage("Kinky!!");
    }
    else if (answer2.isLike("no"))
    {
        CMessage("Boooring %EmoteSmile%");
    }
    CMessage("%ThatsEnough%");
    setVar("AV_Pergunta04", true);
    return;
    AllDone37();
}
function AllDone37()
{
    return;
}