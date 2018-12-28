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
    if (randomInteger(1, 100) <= 50)
    {
        DecidEdge();
        return;
    }
    CMessage("%stopstroking%", 0);
    stopStroking();
    IniModule();
    return;
    DecidEdge();
}
function DecidEdge()
{
    CMessage("%Edge%");
    startEdging();
    Sub_Not_Stroking();
}
function Sub_Not_Stroking()
{
    IniModule();
}
function IniModule()
{
    if(getVar("AV_Harry2stroke1_NotFirstTime", false))
    {
        AV_Harry2stroke1_NotFirstTime();
        return;
    }
    setVar("AV_Harry2stroke1", 0);
    setVar("AV_Harry2stroke1_NotFirstTime", true);
    AV_Harry2stroke1_NotFirstTime();
}
function AV_Harry2stroke1_NotFirstTime()
{
    if (getVar("AV_Harry2stroke1", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_Harry2stroke1", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_Harry2stroke1", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_Harry2stroke1", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_Harry2stroke1", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_Harry2stroke1", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_Harry2stroke1", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_Harry2stroke1", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_Harry2stroke1", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_Harry2stroke1", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_Harry2stroke1", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_Harry2stroke1", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_Harry2stroke1", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_Harry2stroke1", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_Harry2stroke1", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_Harry2stroke1", 0) == 1101)
    {
        Part1_16();
        return;
    }
    Mod1();
}
function Mod1()
{
    setVar("AV_Harry2stroke1", getVar("AV_Harry2stroke1", 0) + 1);
    Modulo1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_Harry2stroke1", getVar("AV_Harry2stroke1", 0) + 10);
    Modulo2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_Harry2stroke1", getVar("AV_Harry2stroke1", 0) + 100);
    Modulo3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_Harry2stroke1", getVar("AV_Harry2stroke1", 0) + 1000);
    Modulo4();
    return;
    Part1_1();
}
function Part1_1()
{
    switch(random("Mod1", "Mod2", "Mod3", "Mod4"))
    {
        case "Mod1":
        Mod1();
        return;
        break;
        case "Mod2":
        Mod2();
        return;
        break;
        case "Mod3":
        Mod3();
        return;
        break;
        case "Mod4":
        Mod4();
        return;
        break;
    }
    Part1_2();
}
function Part1_2()
{
    switch(random("Mod2", "Mod3", "Mod4"))
    {
        case "Mod2":
        Mod2();
        return;
        break;
        case "Mod3":
        Mod3();
        return;
        break;
        case "Mod4":
        Mod4();
        return;
        break;
    }
    Part1_3();
}
function Part1_3()
{
    switch(random("Mod1", "Mod3", "Mod4"))
    {
        case "Mod1":
        Mod1();
        return;
        break;
        case "Mod3":
        Mod3();
        return;
        break;
        case "Mod4":
        Mod4();
        return;
        break;
    }
    Part1_4();
}
function Part1_4()
{
    switch(random("Mod1", "Mod2", "Mod4"))
    {
        case "Mod1":
        Mod1();
        return;
        break;
        case "Mod2":
        Mod2();
        return;
        break;
        case "Mod4":
        Mod4();
        return;
        break;
    }
    Part1_5();
}
function Part1_5()
{
    switch(random("Mod1", "Mod2", "Mod3"))
    {
        case "Mod1":
        Mod1();
        return;
        break;
        case "Mod2":
        Mod2();
        return;
        break;
        case "Mod3":
        Mod3();
        return;
        break;
    }
    Part1_6();
}
function Part1_6()
{
    switch(random("Mod3", "Mod4"))
    {
        case "Mod3":
        Mod3();
        return;
        break;
        case "Mod4":
        Mod4();
        return;
        break;
    }
    Part1_7();
}
function Part1_7()
{
    switch(random("Mod2", "Mod4"))
    {
        case "Mod2":
        Mod2();
        return;
        break;
        case "Mod4":
        Mod4();
        return;
        break;
    }
    Part1_8();
}
function Part1_8()
{
    Mod4();
    return;
    Part1_9();
}
function Part1_9()
{
    switch(random("Mod1", "Mod4"))
    {
        case "Mod1":
        Mod1();
        return;
        break;
        case "Mod4":
        Mod4();
        return;
        break;
    }
    Part1_10();
}
function Part1_10()
{
    switch(random("Mod2", "Mod3"))
    {
        case "Mod2":
        Mod2();
        return;
        break;
        case "Mod3":
        Mod3();
        return;
        break;
    }
    Part1_11();
}
function Part1_11()
{
    Mod3();
    return;
    Part1_12();
}
function Part1_12()
{
    Fim();
    return;
    Part1_13();
}
function Part1_13()
{
    switch(random("Mod1", "Mod3"))
    {
        case "Mod1":
        Mod1();
        return;
        break;
        case "Mod3":
        Mod3();
        return;
        break;
    }
    Part1_14();
}
function Part1_14()
{
    Mod1();
    return;
    Part1_15();
}
function Part1_15()
{
    switch(random("Mod1", "Mod2"))
    {
        case "Mod1":
        Mod1();
        return;
        break;
        case "Mod2":
        Mod2();
        return;
        break;
    }
    Part1_16();
}
function Part1_16()
{
    Mod2();
    return;
    Fim();
}
function Fim()
{
    setVar("AV_Harry2stroke1", 0);
    run("Modules" + java.io.File.separator + "*.js");
    return;
    return;
    Modulo1();
}
function Modulo1()
{
    run("Custom" + java.io.File.separator + "h2sModules" + java.io.File.separator + "H2Stroke1.js");
    return;
    return;
    Modulo2();
}
function Modulo2()
{
    run("Custom" + java.io.File.separator + "h2sModules" + java.io.File.separator + "H2Stroke2.js");
    return;
    return;
    Modulo3();
}
function Modulo3()
{
    run("Custom" + java.io.File.separator + "h2sModules" + java.io.File.separator + "H2Stroke3.js");
    return;
    return;
    Modulo4();
}
function Modulo4()
{
    run("Custom" + java.io.File.separator + "h2sModules" + java.io.File.separator + "H2Stroke4.js");
    return;
    return;
}