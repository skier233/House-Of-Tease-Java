main();
function main()
{
    CMessage("This is a setup file for House of Tease " + "4 for TeaseAI");
    getLocalTeasePicture("images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg");
    lockImages();
    //--UNINTERPRETED LINE:You will need to restart TeaseAI to begin a new session after this one time setup @RTOn
    CMessage("This questions should be asked by your Domme, but since HoT has too many modules now, will take too many time to get all these question *maybe never*");
    CMessage("And a lot of things need this to work better.");
    CMessage("You will see some of the original Domme comments on your aswers, because I did not edit that parts.");
    //--UNINTERPRETED LINE:If this is the first time ever you are running House of Tease, dont skip any question, same thing if you reseted all the variables and flags. @RTOff
    //--UNINTERPRETED LINE:First thing, <Font color="blue">we have 4 Crushes to select, Actress, Singer, PornStar and your Secret Crush.</Font>
    CMessage("If you are missing at least one, you need to say \"no\", TeaseAI should skip the one you already have, but in case you are asked again, just type the same name.");
    let answer0 = getInput("So, did you have all your crushes set?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("Yes or no?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("OK");
        a004();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("OK");
    }
    if(getVar("AV_Know_00", false))
    {
        a001();
        return;
    }
    CMessage("Who is your Celeb Crush? *Actress*");
    setVar("AV_Persona01", createInput().getAnswer());
    CMessage("Hmm... she is hot!");
    setVar("AV_Know_00", true);
    //--UNINTERPRETED LINE:Put some #Var[AV_Persona01] pictures and put in the folder TeaseAI\Images\av_imagens\02\
    CMessage("So, maybe I can make a good use of that in the future");
    a001();
}
function a001()
{
    if(getVar("AV_Know_01", false))
    {
        a002();
        return;
    }
    CMessage("Who is your Celeb Crush? *Singer*");
    setVar("AV_Persona02", createInput().getAnswer());
    CMessage("I don\'f know if you like her music or other thing %EmoteFace%");
    setVar("AV_Know_01", true);
    //--UNINTERPRETED LINE:Can you get a #Var[AV_Persona02] music video and put in Tease AI\Video\AV_Clips folder with the name AV_01.mp4
    //--UNINTERPRETED LINE:And pics in the folder TeaseAI\Images\av_imagens\03\
    CMessage("I can make a good use of that in the future");
    a002();
}
function a002()
{
    if(getVar("AV_Know_03", false))
    {
        a003();
        return;
    }
    CMessage("Who is your favourite Pornstar?");
    setVar("AV_Persona04", createInput().getAnswer());
    //--UNINTERPRETED LINE:Can you get a #Var[AV_Persona04] music video and put in the folder TeaseAI\Images\av_imagens\04\ @SetFlag(AV_Know_03)
    a003();
}
function a003()
{
    if(getVar("AV_Know_12", false))
    {
        a004();
        return;
    }
    CMessage("Who is your Secret Crush? *Someone you know*");
    setVar("AV_Persona13", createInput().getAnswer());
    CMessage("Let me tell you... %EmoteFace%");
    setVar("AV_Know_12", true);
    CMessage("Look at her Facebook, instagram, etc");
    //--UNINTERPRETED LINE:Find some #Var[AV_Persona13] pictures and put in the folder TeaseAI\Images\av_imagens\01\
    CMessage("Please, take note of the folders before contining, and put the pictures there before start a new session");
    a004();
}
function a004()
{
    if(getVar("AV_Know_04", false))
    {
        a005();
        return;
    }
    CMessage("What is the girl\'s name you lost your virginity?");
    setVar("AV_Persona05", createInput().getAnswer());
    CMessage("OK");
    setVar("AV_Know_04", true);
    a005();
}
function a005()
{
    if(getVar("AV_Know_06", false))
    {
        a006();
        return;
    }
    CMessage("Which sex toy would you like I had?");
    setVar("AV_Persona07", createInput().getAnswer());
    CMessage("Putting on my Shop list");
    setVar("AV_Know_06", true);
    a006();
}
function a006()
{
    if(getVar("AV_Know_11", false))
    {
        a007();
        return;
    }
    let answer0 = getInput("Are you actually interested in Post Orgasm Torture?");
    setVar("AV_Know_11", true);
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("Yes or no %PetName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%Great%");
        setVar("AV_Persona30", true);
    }
    else if (answer0.isLike("no"))
    {
        CMessage("%EmoteSad%");
    }
    a007();
}
function a007()
{
    CMessage("Now, we need to check what fetishes you like.");
    CMessage("This is important, because a lot of things in HoT will only run if you have set that.");
    let answer0 = getInput("Do you enjoy bondage?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("yes or no?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("I think that %Cock% could use a little bondage.");
        setVar("av_fetish_bondage", true);
    }
    else if (answer0.isLike("no"))
    {
        CMessage("It\'s %Okay%");
    }
    let answer1 = getInput("Are you into playing with hot wax?");
    while (!(answer1.isLike("yes") || answer1.isLike("no")))
    {
        answer1 = getInput("yes or no?");
    }
    if (answer1.isLike("yes"))
    {
        CMessage("Hmm");
        setVar("av_fetish_hothax", true);
    }
    else if (answer1.isLike("no"))
    {
        CMessage("It\'s %Okay%");
    }
    let answer2 = getInput("Do you enjoy pegging? This may include anal play, but your Domme probably will ask this first.");
    while (!(answer2.isLike("yes") || answer2.isLike("no")))
    {
        answer2 = getInput("yes or no?");
    }
    if (answer2.isLike("yes"))
    {
        CMessage("I\'m gonna train you to be a good anal whore.");
        setVar("av_fetish_pegging", true);
    }
    else if (answer2.isLike("no"))
    {
        CMessage("ok");
    }
    CMessage("That one its important, because pain teases are too mixed with stroking/edges");
    CMessage("I tried my best to skip the pain part for those who did not enabled that part");
    CMessage("Note, you should NOT disable CBT from the menu of TeaseAI and uncheck the files with that requirement, because all files have 4 modules inside, and you will disable some without CBT");
    CMessage("HoT should deal with this even with CBT enabled");
    let answer3 = getInput("Do you like receiving pain? Slaping your balls, using clothespins, etc - remember to respect your limits -");
    while (!(answer3.isLike("yes") || answer3.isLike("no")))
    {
        answer3 = getInput("yes or no?");
    }
    if (answer3.isLike("yes"))
    {
        CMessage("I already knew it");
        setVar("av_fetish_pain", true);
    }
    else if (answer3.isLike("no"))
    {
        CMessage("%Okay%");
    }
    let answer4 = getInput("Do you like being handled roughly? This mean the Domme will call you names and be more hard with you in some aspects. It\'s like the Supremacist and Degrading options on the TeaseAI-Domme menu");
    while (!(answer4.isLike("yes") || answer4.isLike("no")))
    {
        answer4 = getInput("yes or no?");
    }
    if (answer4.isLike("yes"))
    {
        CMessage("%Yes%, you like that %Slave%");
        setVar("av_fetish_rough", true);
    }
    else if (answer4.isLike("no"))
    {
        CMessage("It\'s %Okay%");
    }
    let answer5 = getInput("Do you like CEI *cum eating*");
    while (!(answer5.isLike("yes") || answer5.isLike("no")))
    {
        answer5 = getInput("yes or no?");
    }
    if (answer5.isLike("yes"))
    {
        CMessage("I\'m gonna train you to be a good slut.");
        setVar("av_fetish_cei", true);
    }
    else if (answer5.isLike("no"))
    {
        CMessage("It\'s %Okay%");
    }
    let answer6 = getInput("Do you like Titjobs?");
    while (!(answer6.isLike("yes") || answer6.isLike("no")))
    {
        answer6 = getInput("yes or no?");
    }
    if (answer6.isLike("yes"))
    {
        CMessage("Mmm, we have a tit slave here");
        setVar("av_fetish_titjob", true);
    }
    else if (answer6.isLike("no"))
    {
        CMessage("It\'s %Okay%");
    }
    let answer7 = getInput("Do you like CFNM? *clothed female, nude male*");
    while (!(answer7.isLike("yes") || answer7.isLike("no")))
    {
        answer7 = getInput("yes or no?");
    }
    if (answer7.isLike("yes"))
    {
        CMessage("Mmm, good thing is, you are already naked for me");
        setVar("av_fetish_cfnm", true);
    }
    else if (answer7.isLike("no"))
    {
        CMessage("It\'s %Okay%");
    }
    let answer8 = getInput("Do you like Gag ball?");
    while (!(answer8.isLike("yes") || answer8.isLike("no")))
    {
        answer8 = getInput("yes or no?");
    }
    if (answer8.isLike("yes"))
    {
        CMessage("Mmm, shut up %Lol%");
    }
    else if (answer8.isLike("no"))
    {
        CMessage("It\'s %Okay%");
    }
    let answer9 = getInput("Do you like facesitting?");
    while (!(answer9.isLike("yes") || answer9.isLike("no")))
    {
        answer9 = getInput("yes or no?");
    }
    if (answer9.isLike("yes"))
    {
        CMessage("So this is the kind of stuff that turns you on huh?");
        setVar("av_fetish_facesitting", true);
    }
    else if (answer9.isLike("no"))
    {
        CMessage("It\'s %Okay%");
    }
    CMessage("Almost done");
    setVar("av_quest_done", true);
    let answer10 = getInput("Do you want to keep the slave position trainning, where you need to remember the stand and kneeling positions?");
    while (!(answer10.isLike("yes") || answer10.isLike("no")))
    {
        answer10 = getInput("yes or no?");
    }
    if (answer10.isLike("yes"))
    {
        CMessage("OK");
        setVar("AV_MantPositions", true);
    }
    else if (answer10.isLike("no"))
    {
        CMessage("OK");
    }
    let answer11 = getInput("Do you want to be asked to go to slave positions in some situations?");
    while (!(answer11.isLike("yes") || answer11.isLike("no")))
    {
        answer11 = getInput("yes or no?");
    }
    if (answer11.isLike("yes"))
    {
        CMessage("OK");
        setVar("AV_WantPositions", true);
    }
    else if (answer11.isLike("no"))
    {
        CMessage("OK");
    }
    CMessage("Setting...");
    setVar("AV_HoTv4", true);
    CMessage("All done");
    //--UNINTERPRETED LINE:You should not see that again, but sometimes I saw TeaseAI ignore a flag on the start and run what should not run. @RTOn
    CMessage("If this happens to you, just close TeaseAI when in this file and try again.");
    //--UNINTERPRETED LINE:In the case you find any bugs on House of Tease, please first enter "@" on the chat, to see where is the bug 
    CMessage("*This will be saved in the chat log too, where you can see later*");
    //--UNINTERPRETED LINE:The important part it's something like that <Font color="green">"::: FileText = C:\Tease AI\Scripts\House of Tease\Modules\AV_ModGames2.txt ::: LineVal = 180"</Font>
    CMessage("After that, you can enter \"debug\" on the chat, and the script will try to:");
    //--UNINTERPRETED LINE:Unlock Images, Stop Slideshows, add the Domme and remove any Glitter from the chat.  @RTOff
    CMessage("If you are stucked, try to type \"fix\", a CBT will be called *for some reason, its the only thing able to unlock teaseai*");
    //--UNINTERPRETED LINE: and try to type your safeword after the cbt part.
    //--UNINTERPRETED LINE:<Font color="red">And remember to play safe...Dont do anything you think you should not.</Font> @UnlockImages
    endSession();
    return;
}