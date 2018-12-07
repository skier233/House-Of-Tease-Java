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
    CMessage("%KneelForMe%");
    CMessage("Pinch your nipples.");
    if(getVar("av_fetish_pain", false))
    {
        CMessage("No, not like you\'re posing for a magazine. Make them hurt.");
    }
    CMessage("Now pull them. Hard.");
    CMessage("Twist them back and forth like you\'re starting a fire.");
    if(getVar("av_fetish_pain", false))
    {
        CMessage("HARDER.");
    }
    if(getVar("av_fetish_rough", false))
    {
        CMessage("Yes little %PetName%, whimper for me...");
    }
    CMessage("Alright, now grab the nipple clamps, and attach them.");
    CMessage("Nice and tight...That should keep you busy.");
    CMessage("Mmmm, now my favorite part.");
    CMessage("Spread your legs and hold that sore dick out of the way.");
    CMessage("It\'s time to punish those balls of yours.");
    CMessage("Those guilty little slut balls full of worthless little slut cum.");
    CMessage("They deserve a beating.");
    CMessage("Are they nice and exposed for me?");
    CMessage("Hold out your hand, facing down.");
    CMessage("Give them a hard slap with the spoon, bring your hand straight down on to them.");
    CMessage("Ready?");
    CMessage("ONE.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    if(getVar("av_fetish_pain", false))
    {
        CMessage("%stopstroking%", 0);
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("That wasn\'t pain you felt, just shock.");
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("I want to hear you cry out when your hand hits that sack.");
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Do it again.");
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("ONE.");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    }
    CMessage("Hmph. TWO.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("%stopstroking%", 0);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("FOUR.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("FIVE.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("%stopstroking%", 0);
    CMessage("and pull the sack skin taut until your balls are held still so they get the full impact.");
    CMessage("Now one more, as hard as before, and you\'d better not hold back.");
    CMessage("SIX.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("AND AGAIN. SEVEN.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("%Lol%");
    CMessage("You can sit and remove the clothespins");
    return;
}