main();
function main()
{
    if (inGroup(1, 2))
    {
        SMessage("I need to leave now...", -1, 2);
    }
    if (inGroup(1, 3))
    {
        SMessage("I need to leave now...", -1, 3);
    }
    if (inGroup(1, 4))
    {
        SMessage("I need to leave now...", -1, 4);
    }
    if (inGroup(1, 2))
    {
        SMessage("Thanks for the fun...", -1, 2);
    }
    if (inGroup(1, 3))
    {
        SMessage("Thanks for the fun...", -1, 3);
    }
    if (inGroup(1, 4))
    {
        SMessage("Thanks for the fun...", -1, 4);
    }
    if (inGroup(1))
    {
        Code();
        return;
    }
    CMessage("Cya");
    Code();
}
function Code()
{
    removeContact(2);
    removeContact(3);
    removeContact(4);
    delVar("AV_GlitterJoin");
    delVar("AV_GlitterJoin1");
    delVar("AV_GlitterJoin2");
    delVar("AV_GlitterJoin3");
    return;
}