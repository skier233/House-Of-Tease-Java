main();
function main()
{
    if (isStroking())
    {
        Sub_Stroking();
        return;
    }
    else
    {
        Sub_Not_Stroking();
        return;
    }
    Sub_Stroking();
}
function Sub_Stroking()
{
    CMessage("%stopstroking%", 0);
    stopStroking();
    Sub_Not_Stroking();
}
function Sub_Not_Stroking()
{
    if(!getVar("AV_PinDone", false))
    {
        CMessage("Go fetch me some clothespins and a spoon. At least 10 of them.");
        wait(20);
        setVar("AV_PinDone", true);
    }
    if(getVar("av_fetish_rough", false))
    {
        CMessage("Now drop to your fucking knees.");
    }
    if(!getVar("av_fetish_rough", false))
    {
        CMessage("%KneelForMe%");
    }
    CMessage("Ass in the air, face on the floor.");
    if(getVar("av_fetish_rough", false))
    {
        CMessage("Like the little whore that you are.");
    }
    CMessage("Take the spoon, and hit your ass with it.");
    CMessage("Ready?");
    CMessage("ONE.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage(random("Pathetic. I couldn\'t hear a thing", "Do it properly."));
    CMessage("This isn\'t a game. ONE.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("Same side. TWO.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("THREE.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("Do it harder. FOUR.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("FIVE.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("SIX.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("SEVEN.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("HARDER. EIGHT.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    if(getVar("AV_DommeMistress", false))
    {
        CMessage("I want that ass cheek to glow, bitch! NINE!");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    }
    if(!getVar("AV_DommeMistress", false))
    {
        CMessage("NINE!");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    }
    CMessage("TEN!");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("Now the other side.");
    if(getVar("av_fetish_pain", false))
    {
        CMessage("You better be putting some fucking power into these.");
    }
    CMessage("ONE.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("TWO.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("THREE.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("FOUR.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("FIVE.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    if (randomInteger(1, 100) <= 50)
    {
        AVRND81();
        return;
    }
    CMessage("Actually, no.");
    if(!getVar("av_fetish_pain", false))
    {
        CMessage("Go back to the first cheek");
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Go back to the first cheek and lash it hard.");
    }
    AVRND81();
}
function AVRND81()
{
    CMessage("SIX.....");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("SEVEN....");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("EIGHT...");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("NINE..");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("TEN.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("Nice and sore now?");
    CMessage("You can sit now");
    return;
}