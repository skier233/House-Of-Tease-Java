DMessage("HoTStructure: Beginning");
preferredSessionLength = getVar("prefSessionLength");
DMessage("Starting session");
run("Structure" + separator + "Start" + separator + "*.js");
DMessage("Starting module");
firstRun = true;
while (continueSession() || firstRun)
{
    run("Modules" + separator + "*.js");
    run("Structure" + separator + "Link" + separator + "*.js");
    firstRun = false;
}
run("Structure" + separator + "End" + separator + "*.js");
DMessage("HoTStructure: End");