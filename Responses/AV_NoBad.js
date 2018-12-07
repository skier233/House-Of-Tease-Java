addResponseIndicator("asldknasldkjalsjx;lkxzjc;kljzhnkl");
//run("allutils.js");

function aV_NoBadResponse(message) {
    /*No?
No?
No?
No? @MoodDown
#No? @MoodDown
Aww...
#IDisagree
Bad boy
#IDisagree @MoodDown
Well, I dont care #Lol
I dont care #Lol
#OhNo
Well, I dont care #Lol
I dont care #Lol
#OhNo @MoodDown
#OhNo 
Well, I dont care #Lol
I dont care #Lol
#OhNo
Just #Surrender, #SubName
Just #Surrender, #PetName
Just #Surrender, #PetName  @MoodDown*/

    var thisRandom = randomInt(1, 22);

    switch (thisRandom)
    {
        case 1:
        case 2:
        case 3:
            CMessage("No?");
            break;
        case 4:
            increaseAnger(2);
            CMessage("No?");
            break;
        case 5:
            increaseAnger(2);
            CMessage("%No%?");
            break;
        case 6:
            CMessage("Aww...");
            break;
        case 7:
            increaseAnger(2);
            CMessage("%IDisagree%");
            break;
        case 8:
            CMessage("Bad Boy");
            break;
        case 9:
            CMessage("%IDisagree%");
            break;
        case 10:
        case 11:
        case 12:
            CMessage("Well, I dont care %Lol%");
            break;
        case 13:
        case 14:
        case 15:
            CMessage("I dont care %Lol%");
            break;
        case 15:
        case 16:
        case 17:
            CMessage("%OhNo%");
            break;
        case 18:
            increaseAnger(2);
            CMessage("%OhNo%");
            break;
        case 19:
            CMessage("Just %Surrender%, %SubName%");
            break;
        case 20:
            CMessage("Just %Surrender%, %PetName%");
            break;
        case 21:
            increaseAnger(2);
            CMessage("Just %Surrender%, %PetName%");
            break;
    }
}