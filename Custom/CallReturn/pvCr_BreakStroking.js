main();
function main()
{
    switch(random("break_one", "break_two", "break_three"))
    {
        case "break_one":
        break_one();
        return;
        break;
        case "break_two":
        break_two();
        return;
        break;
        case "break_three":
        break_three();
        return;
        break;
    }
    break_one();
}
function break_one()
{
    CMessage("%stopstroking%", 0);
    CMessage("Actually, I want you to sit on your hands, do it %PetName%");
    CMessage("You taking a break means I can take on too");
    CMessage("I wouldn\'t want to bore you too much, tough");
    CMessage("So I\'ll run a slideshow for you %Smile%");
    CMessage("No touching %Name%, see you in a bit!");
    setVar("pthevBreak1", 0);
    setDate("pthevBreak1Timer").addMinutes(2);
    lockImages();
    go_again();
}
function go_again()
{
    if (getDate("pthevBreak1Timer").hasPassed()) {
        pthevBreak1Timer();
        return;
    }
    switch(random("Femdom", "Softcore", "Hardcore", "Lesbian", "Blowjob"))
    {
        case "Femdom":
        Femdom();
        return;
        break;
        case "Softcore":
        Softcore();
        return;
        break;
        case "Hardcore":
        Hardcore();
        return;
        break;
        case "Lesbian":
        Lesbian();
        return;
        break;
        case "Blowjob":
        Blowjob();
        return;
        break;
    }
    Hentai();
}
function Hentai()
{
    showTaggedImage(4, ["bondage"]);
    setVar("pthevBreak1", getVar("pthevBreak1", 0) + 1);
    if (getVar("pthevBreak1", 0) > 8)
    {
        BreakDone();
        return;
    }
    switch(random("Hentai", "Softcore", "Hardcore", "Lesbian", "Blowjob"))
    {
        case "Hentai":
        Hentai();
        return;
        break;
        case "Softcore":
        Softcore();
        return;
        break;
        case "Hardcore":
        Hardcore();
        return;
        break;
        case "Lesbian":
        Lesbian();
        return;
        break;
        case "Blowjob":
        Blowjob();
        return;
        break;
    }
    Femdom();
}
function Femdom()
{
    showTaggedImage(4, ["femdom"]);
    setVar("pthevBreak1", getVar("pthevBreak1", 0) + 1);
    if (getVar("pthevBreak1", 0) > 8)
    {
        BreakDone();
        return;
    }
    switch(random("Hentai", "Softcore", "Hardcore", "Lesbian", "Blowjob"))
    {
        case "Hentai":
        Hentai();
        return;
        break;
        case "Softcore":
        Softcore();
        return;
        break;
        case "Hardcore":
        Hardcore();
        return;
        break;
        case "Lesbian":
        Lesbian();
        return;
        break;
        case "Blowjob":
        Blowjob();
        return;
        break;
    }
    Softcore();
}
function Softcore()
{
    showTaggedImage(4, ["softcore"]);
    setVar("pthevBreak1", getVar("pthevBreak1", 0) + 1);
    if (getVar("pthevBreak1", 0) > 8)
    {
        BreakDone();
        return;
    }
    switch(random("Hentai", "Softcore", "Hardcore", "Lesbian", "Blowjob"))
    {
        case "Hentai":
        Hentai();
        return;
        break;
        case "Softcore":
        Softcore();
        return;
        break;
        case "Hardcore":
        Hardcore();
        return;
        break;
        case "Lesbian":
        Lesbian();
        return;
        break;
        case "Blowjob":
        Blowjob();
        return;
        break;
    }
    Hardcore();
}
function Hardcore()
{
    showTaggedImage(4, ["hardcore"]);
    setVar("pthevBreak1", getVar("pthevBreak1", 0) + 1);
    if (getVar("pthevBreak1", 0) > 8)
    {
        BreakDone();
        return;
    }
    switch(random("Hentai", "Softcore", "Hardcore", "Lesbian", "Blowjob"))
    {
        case "Hentai":
        Hentai();
        return;
        break;
        case "Softcore":
        Softcore();
        return;
        break;
        case "Hardcore":
        Hardcore();
        return;
        break;
        case "Lesbian":
        Lesbian();
        return;
        break;
        case "Blowjob":
        Blowjob();
        return;
        break;
    }
    Lesbian();
}
function Lesbian()
{
    showTaggedImage(4, ["lesbian"]);
    setVar("pthevBreak1", getVar("pthevBreak1", 0) + 1);
    if (getVar("pthevBreak1", 0) > 8)
    {
        BreakDone();
        return;
    }
    switch(random("Hentai", "Softcore", "Hardcore", "Lesbian", "Blowjob"))
    {
        case "Hentai":
        Hentai();
        return;
        break;
        case "Softcore":
        Softcore();
        return;
        break;
        case "Hardcore":
        Hardcore();
        return;
        break;
        case "Lesbian":
        Lesbian();
        return;
        break;
        case "Blowjob":
        Blowjob();
        return;
        break;
    }
    Blowjob();
}
function Blowjob()
{
    showTaggedImage(4, ["blowjob"]);
    setVar("pthevBreak1", getVar("pthevBreak1", 0) + 1);
    if (getVar("pthevBreak1", 0) > 8)
    {
        BreakDone();
        return;
    }
    switch(random("Hentai", "Softcore", "Hardcore", "Lesbian", "Blowjob"))
    {
        case "Hentai":
        Hentai();
        return;
        break;
        case "Softcore":
        Softcore();
        return;
        break;
        case "Hardcore":
        Hardcore();
        return;
        break;
        case "Lesbian":
        Lesbian();
        return;
        break;
        case "Blowjob":
        Blowjob();
        return;
        break;
    }
    BreakDone();
}
function BreakDone()
{
    if (randomInteger(1, 100) <= 80)
    {
        go_again();
        return;
    }
    pthevBreak1Timer();
}
function pthevBreak1Timer()
{
    CMessage("I\'m back %Name% %Smile%");
    unlockImages();
    CMessage("And now that you\'ve cooled down a bit...");
    CMessage("Get off your hands and start stroking again");
    addStrokeTime(45);
    return;
    break_two();
}
function break_two()
{
    CMessage("%stopstroking%", 0);
    CMessage("I\'m going to play you one of your videos to enjoy");
    CMessage("But no touching that %Cock%");
    CMessage("Have fun %Smile%");
    playVideo("Videos" + java.io.File.separator + "*.*");
    wait(15);
    let answer0 = getInput("Hey, did you enjoy your video?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("It must have been hard not to %JerkOff% then");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("It must have been easy to keep your hands off your %Cock% then %Smile%");
    }
    CMessage("Okay, start stroking again %Name%");
    addStrokeTime(45);
    return;
    break_three();
}
function break_three()
{
    CMessage("%stopstroking%", 0);
    CMessage("I\'m going to take a break too %SubName%");
    CMessage("I\'ll leave you with some pictures of boobs and butts");
    CMessage("And to make sure you\'re paying attention");
    CMessage("I\'m going to throw 1 other picture in the mix");
    CMessage("When I\'m get back I\'ll ask you what it was");
    CMessage("See you in a minute %Smile%");
    setVar("pthevBreak1", 0);
    showTaggedImage(4, ["boobs"]);
    lockImages();
    switch(random("Boobs", "Butts"))
    {
        case "Boobs":
        Boobs();
        return;
        break;
        case "Butts":
        Butts();
        return;
        break;
    }
    Boobs();
}
function Boobs()
{
    showTaggedImage(4, ["boobs"]);
    setVar("pthevBreak1", getVar("pthevBreak1", 0) + 1);
    if (getVar("pthevBreak1", 0) == 5)
    {
        Break_two_pic();
        return;
    }
    if (getVar("pthevBreak1", 0) > 7)
    {
        Break_two_done();
        return;
    }
    switch(random("Boobs", "Butts"))
    {
        case "Boobs":
        Boobs();
        return;
        break;
        case "Butts":
        Butts();
        return;
        break;
    }
    Butts();
}
function Butts()
{
    showTaggedImage(4, ["ass"]);
    setVar("pthevBreak1", getVar("pthevBreak1", 0) + 1);
    if (getVar("pthevBreak1", 0) == 5)
    {
        Break_two_pic();
        return;
    }
    if (getVar("pthevBreak1", 0) > 7)
    {
        Break_two_done();
        return;
    }
    switch(random("Boobs", "Butts"))
    {
        case "Boobs":
        Boobs();
        return;
        break;
        case "Butts":
        Butts();
        return;
        break;
    }
    Break_two_pic();
}
function Break_two_pic()
{
    switch(random("two_FD", "two_LB", "two_HC", "two_BJ"))
    {
        case "two_FD":
        two_FD();
        return;
        break;
        case "two_LB":
        two_LB();
        return;
        break;
        case "two_HC":
        two_HC();
        return;
        break;
        case "two_BJ":
        two_BJ();
        return;
        break;
    }
    two_FD();
}
function two_FD()
{
    showTaggedImage(4, ["femdom"]);
    setTempVar("pthevTwoFD", true);
    switch(random("Boobs", "Butts"))
    {
        case "Boobs":
        Boobs();
        return;
        break;
        case "Butts":
        Butts();
        return;
        break;
    }
    two_LB();
}
function two_LB()
{
    showTaggedImage(4, ["lesbian"]);
    setTempVar("pthevTwoLB", true);
    switch(random("Boobs", "Butts"))
    {
        case "Boobs":
        Boobs();
        return;
        break;
        case "Butts":
        Butts();
        return;
        break;
    }
    two_HC();
}
function two_HC()
{
    showTaggedImage(4, ["hardcore"]);
    setTempVar("pthevTwoHC", true);
    switch(random("Boobs", "Butts"))
    {
        case "Boobs":
        Boobs();
        return;
        break;
        case "Butts":
        Butts();
        return;
        break;
    }
    two_BJ();
}
function two_BJ()
{
    showTaggedImage(4, ["blowjob"]);
    setTempVar("pthevTwoBJ", true);
    switch(random("Boobs", "Butts"))
    {
        case "Boobs":
        Boobs();
        return;
        break;
        case "Butts":
        Butts();
        return;
        break;
    }
    Break_two_done();
}
function Break_two_done()
{
    unlockImages();
    CMessage("Okay %Name%, enough boobs and butts for now...");
    let answer0 = getInput("Now tell me, was the extra pic femdom, lesbian, hardcore or blowjob?");
    while (!(answer0.isLike("femdom") || answer0.isLike("lesbian") || answer0.isLike("hardcore") || answer0.isLike("blowjob")))
    {
        answer0 = getInput("Femdom, lesbian, hardcore or blowjob, %SubName%?");
    }
    if (answer0.isLike("femdom"))
    {
        said_femdom();
        return;
    }
    else if (answer0.isLike("lesbian"))
    {
        said_lesbian();
        return;
    }
    else if (answer0.isLike("hardcore"))
    {
        said_hardcore();
        return;
    }
    else if (answer0.isLike("blowjob"))
    {
        said_blowjob();
        return;
    }
    said_femdom();
}
function said_femdom()
{
    if(getVar("pthevTwoFD", false))
    {
        CMessage("I\'m glad you\'re still paying attention %PetName% %Smile%");
        delVar("pthevTwoFD");
        got_it_right();
        return;
    }
    CMessage("Wrong answer %PetName%, I guess you weren\'t paying attention");
    run("CBT" + java.io.File.separator + "CBTBalls_First.js");
    got_it_right();
    return;
    said_lesbian();
}
function said_lesbian()
{
    if(getVar("pthevTwoLB", false))
    {
        CMessage("I\'m glad you\'re still paying attention %PetName% %Smile%");
        delVar("pthevTwoLB");
        got_it_right();
        return;
    }
    CMessage("Wrong answer %PetName%, I guess you weren\'t paying attention");
    run("CBT" + java.io.File.separator + "CBTBalls_First.js");
    got_it_right();
    return;
    said_hardcore();
}
function said_hardcore()
{
    if(getVar("pthevTwoHC", false))
    {
        CMessage("I\'m glad you\'re still paying attention %PetName% %Smile%");
        delVar("pthevTwoHC");
        got_it_right();
        return;
    }
    CMessage("Wrong answer %PetName%, I guess you weren\'t paying attention");
    run("CBT" + java.io.File.separator + "CBTBalls_First.js");
    got_it_right();
    return;
    said_blowjob();
}
function said_blowjob()
{
    if(getVar("pthevTwoBJ", false))
    {
        CMessage("I\'m glad you\'re still paying attention %PetName% %Smile%");
        delVar("pthevTwoBJ");
        got_it_right();
        return;
    }
    CMessage("Wrong answer %PetName%, I guess you weren\'t paying attention");
    run("CBT" + java.io.File.separator + "CBTBalls_First.js");
    got_it_right();
}
function got_it_right()
{
    CMessage("Time to get back to stroking now");
    addStrokeTime(45);
    return;
}