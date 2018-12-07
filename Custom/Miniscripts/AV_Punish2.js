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
    CMessage("Your %Cock% is probably still hard, but if it\'s not then MAKE it hard.");
    CMessage("Get it as erect as possible so I have a nice big target.");
    if (getVar("cocksize", "NA") == "small")
    {
        CMessage("Ha. Well, a target anyway.");
    }
    CMessage("Hurry up, I don\'t like to be kept waiting.");
    CMessage("%KneelForMe%");
    CMessage("You will swat your dick with the spoon");
    CMessage("from underneath, aiming right under the head where it\'s most sensitive.");
    if(getVar("av_fetish_pain", false))
    {
        CMessage("And don\'t fuck around by tapping it lightly.");
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("I want to hear the SMACK of leather hitting flesh, and the involuntary gasp of pain from your little bitch mouth.");
    }
    CMessage("This is what your cock deserves, %PetName%.");
    if(getVar("av_fetish_rough", false))
    {
        CMessage("Now shut up and get ready.");
    }
    CMessage("ONE.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("TWO. Stings, doesn\'t it?");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("THREE.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("That cock better be bouncing off your stomach when you hit it.");
    CMessage("FOUR.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("FIVE.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("SIX. Making noise now, aren\'t you %PetName%?");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("Do it harder. SEVEN.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("EIGHT.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("HARDER. NINE.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("TEN.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("Now strike it from the other side.");
    CMessage("ELEVEN.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("TWELVE.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("THIRTEEN.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("Ugh, you\'re lucky I\'m not there.");
    CMessage("I\'d beat the fuck out of that dick harder than you ever would.");
    CMessage("You can sit now");
    return;
}