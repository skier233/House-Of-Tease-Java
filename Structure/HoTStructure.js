DMessage("HoTStructure: Beginning");
preferredSessionLength = getVar("prefSessionLength");
DMessage("Starting session");
run("Structure" + separator + "Link" + separator + "*.js");
run("Structure" + separator + "Start" + separator + "*.js");
DMessage("Starting module");
firstRun = true;
while (continueSession() || firstRun)
{
    run("Structure" + separator + "Modules" + separator + "*.js");
    if (randomInteger(1, 4) == 1)
    {
        run("Structure" + separator + "Modules" + separator + "*.js");
    }
    else
    {
        run("Structure" + separator + "Link" + separator + "*.js");
    }
    firstRun = false;
}
run("Structure" + separator + "End" + separator + "*.js");
DMessage("HoTStructure: End");