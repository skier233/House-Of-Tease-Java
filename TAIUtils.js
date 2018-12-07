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