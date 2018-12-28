let activeContacts = [];
let lastTypeSpeed = null;

function setUpTAIUtils()
{
    activeContacts.push(1);
}

function setAFK(state)
{
    if (getVar("dommeafk", true) && state)
    {
        SMessage("<><c=coral b>%DomName% has gone afk.");
    }
    else
    {
        if (getVar("dommeafk", false))
        {
            SMessage("<><c=coral b>%DomName% is no longer afk.");
        }
    }
    setVar("dommeafk", state);
}

function addContact(contactNumber)
{
    activeContacts.push(contactNumber);
    switch (contactNumber)
    {
        case 1:
            SMessage("%DomName% has connected.");
        case 2:
            SMessage("%domfriend1name% has connected.");
        case 3:
            SMessage("%domfriend2name% has connected.");
        case 4:
            SMessage("%domfriend3name% has connected.");
    }
}
function removeContact(contactNumber)
{

    for (var i = 0; i < activeContacts.length; i++)
    {
        if (activeContacts[i] == contactNumber)
        {
            delete activeContacts[i];
        }
    }
    switch (contactNumber) {
        case 1:
            SMessage("%DomName% has disconnected.");
        case 2:
            SMessage("%domfriend1name% has disconnected.");
        case 3:
            SMessage("%domfriend2name% has disconnected.");
        case 4:
            SMessage("%domfriend3name% has disconnected.");
    }
}

function inGroup()
{
    for (var i = 0; i < arguments.length; i++)
    {
        var temp = false;
        for (var j; j < activeContacts.length; j++)
        {
            if (activeContacts[j] == arguments[i])
            {
                temp = true;
            }
        }
        if (!temp) {
            return false;
        }
    }
    return true;
}

function decideOrgasm()
{
    if (calculateOrgasm())
    {
        if (calculateRuin())
        {
            setDate("lastRuin");
            return 1;
        }
        else
        {
            setDate("lastOrgasm");
            return 2;
        }
    }
    else
    {
        return 0;
    }
}

function edgeToRuinHold()
{
    startEdging("%edge%");
    holdEdge();
    let answer0 = getInput("%RuinYourOrgasm%");
    if (answer0.isLike("ruined", "did")) {
        CMessage("Good %Grin%");
    }
    else if (answer0.isLike("fuck")) {
        CMessage("%Grin%");
    }
    else {
        CMessage("hehe just calm down now");
    }
    if (getVar("AV_EatCum", false)) {
        CMessage("%AV_CumEat%");
        wait(20);
    }
    CMessage("I love building up all that pleasure just to snatch it away from you");
}

function edgeToOrgasmHold() {
    startEdging("%edge%");
    holdEdge();
    let answer0 = getInput("%CumForMe%");
    if (answer0.isLike("came", "finished", "did")) {
        CMessage("Good %Grin%");
    }
    else if (answer0.isLike("thank", "gracias", "merci", "grateful", "good", "amazing", "incredible")) {
        CMessage("You\'re welcome %PetName% %Grin%");
    }
    else {
        CMessage("Hehe just calm down now");
    }
    if (getVar("AV_EatCum", false)) {
        CMessage("%AV_CumEat%");
        wait(20);
    }
    if (getVar("AV_EatCum", false)) {
        CMessage(random("You\'re going to swallow all of it", "Swallow all of it %PetName%"));
    }
}

function edgeToRuin() {
    startEdging("%edge%");
    if (randomInteger(1, 100) <= 30) {
        holdEdge();
    }
    let answer0 = getInput("%RuinYourOrgasm%");
    if (answer0.isLike("ruined", "did")) {
        CMessage("Good %Grin%");
    }
    else if (answer0.isLike("fuck")) {
        CMessage("%Grin%");
    }
    else {
        CMessage("hehe just calm down now");
    }
    if (getVar("AV_EatCum", false)) {
        CMessage("%AV_CumEat%");
        wait(20);
    }
    CMessage("I love building up all that pleasure just to snatch it away from you");
}

function setRapidText(state)
{
    if (state)
    {
        lastTypeSpeed = getTypeSpeed();
        setTypeSpeed("FASTEST");
    }
    else
    {
        setTypeSpeed(lastTypeSpeed);
    }
}