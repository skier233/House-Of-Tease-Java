function setAFK(state)
{
    if (state)
    {
        SMessage("<c=salmon b>%DomName% has gone afk.");
    }
    else
    {
        SMessage("<c=salmon b>%DomName% is no longer afk.");
    }
    setVar("dommeafk", state);
}