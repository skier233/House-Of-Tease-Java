addResponseIndicator("asldknasldkjalsjxds;lkxzjc;kljzhnkl");
//run("allutils.js");

function aV_YesGoodResponse(message) {
    var maxRand = 21;
    if (getVar("AV_Know_17", false))
    {
        maxRand = 24;
    }
    var thisRandom = randomInt(1, maxRand);
    switch (thisRandom)
    {
        case 1:
        case 2:
        case 3:
            CMessage("%Good%");
            break;
        case 4:
        case 5:
            increaseAnger(-2);
            CMessage("%Good%");
            break;
        case 6:
            CMessage("Good Boy");
            break;
        case 7:
        case 8:
            CMessage("%GoodBoy%");
            break;
        case 9:
        case 10:
            CMessage("%ImPleased%");
            break;
        case 11:
        case 12:
        case 13:
            CMessage("%Lovingly%");
            break;
        case 14:
            increaseAnger(-2);
            CMessage("%Lovingly%");
            break;
        case 15:
        case 16:
            increaseAnger(-2);
            CMessage("%OfCourse%");
            break;
        case 17:
            CMessage("%OfCourse%");
            break;
        case 18:
            CMessage("This is awesome!");
            break;
        case 19:
            increaseAnger(-2);
            CMessage("I love it!");
            break;
        case 20:
            increaseAnger(-2);
            CMessage("This is what true power feels like!");
            break;
        case 21:
            CMessage(random("Good", "Better") + ", that is how I" + random("want", "expect") + "you to" + 
                random("answer", "respond") + "to all my questions.");
            break;
        case 22:
        case 23:
            CMessage(getVar("AV_Persona09", ""));
            break;
        case 24:
            increaseAnger(-2);
            CMessage(getVar("AV_Persona09", ""));
            break;
    }
}