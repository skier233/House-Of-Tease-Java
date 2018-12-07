main();
function main()
{
    if (randomInteger(1, 100) <= 50)
    {
        Positions();
        return;
    }
    LinkCrush();
}
function LinkCrush()
{
    CMessage(random("I want to see your eyes roll back", "Such a good %PetName% you are...always so hard and ready", "do you like how I am is using you?", "I can see you\'re already throbbing at the thought of it"));
    CMessage("I love " + random("watching your frustration", "watching you suffer", "watching you squirm", "denying you", "teasing you", "torturing you", "controlling you"));
    CMessage("So... " + random("let\'s build up you a little", "Let\'s prepare you a little", "You need to be prepared for more", "I understand if you\'re not quite at the edge yet, maybe I can help you with that"));
    if (randomInteger(1, 100) <= 35)
    {
        AV_CrushSelect();
        return;
    }
    switch(random("AVI50", "AVI51", "AVI52", "AVI53", "AVI54", "AVI55", "AVI56", "AVI57", "AVI58", "AVI59"))
    {
        case "AVI50":
        AVI50();
        return;
        break;
        case "AVI51":
        AVI51();
        return;
        break;
        case "AVI52":
        AVI52();
        return;
        break;
        case "AVI53":
        AVI53();
        return;
        break;
        case "AVI54":
        AVI54();
        return;
        break;
        case "AVI55":
        AVI55();
        return;
        break;
        case "AVI56":
        AVI56();
        return;
        break;
        case "AVI57":
        AVI57();
        return;
        break;
        case "AVI58":
        AVI58();
        return;
        break;
        case "AVI59":
        AVI59();
        return;
        break;
    }
    AVI50();
}
function AVI50()
{
    if(getVar("AV_Know_50", false))
    {
        Sim50();
        return;
    }
    AV_CrushSelect();
    return;
    AVI51();
}
function AVI51()
{
    if(getVar("AV_Know_51", false))
    {
        Sim51();
        return;
    }
    AV_CrushSelect();
    return;
    AVI52();
}
function AVI52()
{
    if(getVar("AV_Know_52", false))
    {
        Sim52();
        return;
    }
    AV_CrushSelect();
    return;
    AVI53();
}
function AVI53()
{
    if(getVar("AV_Know_53", false))
    {
        Sim53();
        return;
    }
    AV_CrushSelect();
    return;
    AVI54();
}
function AVI54()
{
    if(getVar("AV_Know_54", false))
    {
        Sim54();
        return;
    }
    AV_CrushSelect();
    return;
    AVI55();
}
function AVI55()
{
    if(getVar("AV_Know_55", false))
    {
        Sim55();
        return;
    }
    AV_CrushSelect();
    return;
    AVI56();
}
function AVI56()
{
    if(getVar("AV_Know_56", false))
    {
        Sim56();
        return;
    }
    AV_CrushSelect();
    return;
    AVI57();
}
function AVI57()
{
    if(getVar("AV_Know_57", false))
    {
        Sim57();
        return;
    }
    AV_CrushSelect();
    return;
    AVI58();
}
function AVI58()
{
    if(getVar("AV_Know_58", false))
    {
        Sim58();
        return;
    }
    AV_CrushSelect();
    return;
    AVI59();
}
function AVI59()
{
    if(getVar("AV_Know_59", false))
    {
        Sim59();
        return;
    }
    AV_CrushSelect();
    return;
    AV_CrushSelect();
}
function AV_CrushSelect()
{
    setVar("AV_QualCrushes", 0);
    if(!getVar("AV_Know_12", false))
    {
        setVar("AV_QualCrushes", getVar("AV_QualCrushes", 0) + 1);
    }
    if(!getVar("AV_Know_00", false))
    {
        setVar("AV_QualCrushes", getVar("AV_QualCrushes", 0) + 10);
    }
    if(!getVar("AV_Know_01", false))
    {
        setVar("AV_QualCrushes", getVar("AV_QualCrushes", 0) + 100);
    }
    if(!getVar("AV_Know_03", false))
    {
        setVar("AV_QualCrushes", getVar("AV_QualCrushes", 0) + 1000);
    }
    if (getVar("AV_QualCrushes", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_QualCrushes", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_QualCrushes", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_QualCrushes", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_QualCrushes", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_QualCrushes", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_QualCrushes", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_QualCrushes", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_QualCrushes", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_QualCrushes", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_QualCrushes", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_QualCrushes", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_QualCrushes", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_QualCrushes", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_QualCrushes", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_QualCrushes", 0) == 1101)
    {
        Part1_16();
        return;
    }
    Part1_1();
}
function Part1_1()
{
    switch(random("Sim12", "Sim00", "Sim01", "Sim03"))
    {
        case "Sim12":
        Sim12();
        return;
        break;
        case "Sim00":
        Sim00();
        return;
        break;
        case "Sim01":
        Sim01();
        return;
        break;
        case "Sim03":
        Sim03();
        return;
        break;
    }
    Part1_2();
}
function Part1_2()
{
    switch(random("Sim00", "Sim01", "Sim03"))
    {
        case "Sim00":
        Sim00();
        return;
        break;
        case "Sim01":
        Sim01();
        return;
        break;
        case "Sim03":
        Sim03();
        return;
        break;
    }
    Part1_3();
}
function Part1_3()
{
    switch(random("Sim12", "Sim01", "Sim03"))
    {
        case "Sim12":
        Sim12();
        return;
        break;
        case "Sim01":
        Sim01();
        return;
        break;
        case "Sim03":
        Sim03();
        return;
        break;
    }
    Part1_4();
}
function Part1_4()
{
    switch(random("Sim12", "Sim00", "Sim03"))
    {
        case "Sim12":
        Sim12();
        return;
        break;
        case "Sim00":
        Sim00();
        return;
        break;
        case "Sim03":
        Sim03();
        return;
        break;
    }
    Part1_5();
}
function Part1_5()
{
    switch(random("Sim12", "Sim00", "Sim01"))
    {
        case "Sim12":
        Sim12();
        return;
        break;
        case "Sim00":
        Sim00();
        return;
        break;
        case "Sim01":
        Sim01();
        return;
        break;
    }
    Part1_6();
}
function Part1_6()
{
    switch(random("Sim01", "Sim03"))
    {
        case "Sim01":
        Sim01();
        return;
        break;
        case "Sim03":
        Sim03();
        return;
        break;
    }
    Part1_7();
}
function Part1_7()
{
    switch(random("Sim00", "Sim03"))
    {
        case "Sim00":
        Sim00();
        return;
        break;
        case "Sim03":
        Sim03();
        return;
        break;
    }
    Part1_8();
}
function Part1_8()
{
    Sim03();
    return;
    Part1_9();
}
function Part1_9()
{
    switch(random("Sim12", "Sim03"))
    {
        case "Sim12":
        Sim12();
        return;
        break;
        case "Sim03":
        Sim03();
        return;
        break;
    }
    Part1_10();
}
function Part1_10()
{
    switch(random("Sim00", "Sim01"))
    {
        case "Sim00":
        Sim00();
        return;
        break;
        case "Sim01":
        Sim01();
        return;
        break;
    }
    Part1_11();
}
function Part1_11()
{
    Sim01();
    return;
    Part1_12();
}
function Part1_12()
{
    SemCrush();
    return;
    Part1_13();
}
function Part1_13()
{
    switch(random("Sim12", "Sim01"))
    {
        case "Sim12":
        Sim12();
        return;
        break;
        case "Sim01":
        Sim01();
        return;
        break;
    }
    Part1_14();
}
function Part1_14()
{
    Sim12();
    return;
    Part1_15();
}
function Part1_15()
{
    switch(random("Sim12", "Sim00"))
    {
        case "Sim12":
        Sim12();
        return;
        break;
        case "Sim00":
        Sim00();
        return;
        break;
    }
    Part1_16();
}
function Part1_16()
{
    Sim00();
    return;
    SemCrush();
}
function SemCrush()
{
    CMessage("I should go deeper in your mind %SubName%");
    return;
    Sim12();
}
function Sim12()
{
    CMessage("Follow the beat for your secret crush, " + getVar("AV_Persona13", ""));
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "StrokePattern" + java.io.File.separator + "*.mp3");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    wait(15);
    CMessage("%KeepStroking%");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    wait(10);
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    wait(10);
    CMessage("%stopstroking%", 0);
    Pausa();
    return;
    Sim00();
}
function Sim00()
{
    CMessage("Follow the beat your " + random("favourite ", "crush ") + "actress, " + getVar("AV_Persona01", ""));
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "02" + java.io.File.separator + "*.jpg");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "StrokePattern" + java.io.File.separator + "*.mp3");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "02" + java.io.File.separator + "*.jpg");
    wait(15);
    CMessage("%KeepStroking%");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "02" + java.io.File.separator + "*.jpg");
    wait(10);
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "02" + java.io.File.separator + "*.jpg");
    wait(10);
    CMessage("%stopstroking%", 0);
    Pausa();
    return;
    Sim01();
}
function Sim01()
{
    CMessage("Follow the beat your " + random("favourite ", "crush ") + "singer, " + getVar("AV_Persona02", ""));
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "03" + java.io.File.separator + "*.jpg");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "StrokePattern" + java.io.File.separator + "*.mp3");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "03" + java.io.File.separator + "*.jpg");
    wait(15);
    CMessage("%KeepStroking%");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "03" + java.io.File.separator + "*.jpg");
    wait(10);
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "03" + java.io.File.separator + "*.jpg");
    wait(10);
    CMessage("%stopstroking%", 0);
    Pausa();
    return;
    Sim03();
}
function Sim03()
{
    CMessage("Follow the beat for " + getVar("AV_Persona04", ""));
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "04" + java.io.File.separator + "*.jpg");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "StrokePattern" + java.io.File.separator + "*.mp3");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "04" + java.io.File.separator + "*.jpg");
    wait(15);
    CMessage("%KeepStroking%");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "04" + java.io.File.separator + "*.jpg");
    wait(10);
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "04" + java.io.File.separator + "*.jpg");
    wait(10);
    CMessage("%stopstroking%", 0);
    Pausa();
    return;
    Sim50();
}
function Sim50()
{
    CMessage("Follow the beat for " + getVar("AV_Persona50", ""));
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "10" + java.io.File.separator + "*.jpg");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "StrokePattern" + java.io.File.separator + "*.mp3");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "10" + java.io.File.separator + "*.jpg");
    wait(15);
    CMessage("%KeepStroking%");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "10" + java.io.File.separator + "*.jpg");
    wait(10);
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "10" + java.io.File.separator + "*.jpg");
    wait(10);
    CMessage("%stopstroking%", 0);
    Pausa();
    return;
    Sim51();
}
function Sim51()
{
    CMessage("Follow the beat for " + getVar("AV_Persona51", ""));
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "11" + java.io.File.separator + "*.jpg");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "StrokePattern" + java.io.File.separator + "*.mp3");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "11" + java.io.File.separator + "*.jpg");
    wait(15);
    CMessage("%KeepStroking%");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "11" + java.io.File.separator + "*.jpg");
    wait(10);
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "11" + java.io.File.separator + "*.jpg");
    wait(10);
    CMessage("%stopstroking%", 0);
    Pausa();
    return;
    Sim52();
}
function Sim52()
{
    CMessage("Follow the beat for " + getVar("AV_Persona52", ""));
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "12" + java.io.File.separator + "*.jpg");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "StrokePattern" + java.io.File.separator + "*.mp3");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "12" + java.io.File.separator + "*.jpg");
    wait(15);
    CMessage("%KeepStroking%");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "12" + java.io.File.separator + "*.jpg");
    wait(10);
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "12" + java.io.File.separator + "*.jpg");
    wait(10);
    CMessage("%stopstroking%", 0);
    Pausa();
    return;
    Sim53();
}
function Sim53()
{
    CMessage("Follow the beat for " + getVar("AV_Persona53", ""));
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "13" + java.io.File.separator + "*.jpg");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "StrokePattern" + java.io.File.separator + "*.mp3");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "13" + java.io.File.separator + "*.jpg");
    wait(15);
    CMessage("%KeepStroking%");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "13" + java.io.File.separator + "*.jpg");
    wait(10);
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "13" + java.io.File.separator + "*.jpg");
    wait(10);
    CMessage("%stopstroking%", 0);
    Pausa();
    return;
    Sim54();
}
function Sim54()
{
    CMessage("Follow the beat for " + getVar("AV_Persona54", ""));
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "14" + java.io.File.separator + "*.jpg");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "StrokePattern" + java.io.File.separator + "*.mp3");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "14" + java.io.File.separator + "*.jpg");
    wait(15);
    CMessage("%KeepStroking%");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "14" + java.io.File.separator + "*.jpg");
    wait(10);
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "14" + java.io.File.separator + "*.jpg");
    wait(10);
    CMessage("%stopstroking%", 0);
    Pausa();
    return;
    Sim55();
}
function Sim55()
{
    CMessage("Follow the beat for " + getVar("AV_Persona55", ""));
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "15" + java.io.File.separator + "*.jpg");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "StrokePattern" + java.io.File.separator + "*.mp3");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "15" + java.io.File.separator + "*.jpg");
    wait(15);
    CMessage("%KeepStroking%");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "15" + java.io.File.separator + "*.jpg");
    wait(10);
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "15" + java.io.File.separator + "*.jpg");
    wait(10);
    CMessage("%stopstroking%", 0);
    Pausa();
    return;
    Sim56();
}
function Sim56()
{
    CMessage("Follow the beat for " + getVar("AV_Persona56", ""));
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "16" + java.io.File.separator + "*.jpg");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "StrokePattern" + java.io.File.separator + "*.mp3");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "16" + java.io.File.separator + "*.jpg");
    wait(15);
    CMessage("%KeepStroking%");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "16" + java.io.File.separator + "*.jpg");
    wait(10);
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "16" + java.io.File.separator + "*.jpg");
    wait(10);
    CMessage("%stopstroking%", 0);
    Pausa();
    return;
    Sim57();
}
function Sim57()
{
    CMessage("Follow the beat for " + getVar("AV_Persona57", ""));
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "17" + java.io.File.separator + "*.jpg");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "StrokePattern" + java.io.File.separator + "*.mp3");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "17" + java.io.File.separator + "*.jpg");
    wait(15);
    CMessage("%KeepStroking%");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "17" + java.io.File.separator + "*.jpg");
    wait(10);
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "17" + java.io.File.separator + "*.jpg");
    wait(10);
    CMessage("%stopstroking%", 0);
    Pausa();
    return;
    Sim58();
}
function Sim58()
{
    CMessage("Follow the beat for " + getVar("AV_Persona58", ""));
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "18" + java.io.File.separator + "*.jpg");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "StrokePattern" + java.io.File.separator + "*.mp3");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "18" + java.io.File.separator + "*.jpg");
    wait(15);
    CMessage("%KeepStroking%");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "18" + java.io.File.separator + "*.jpg");
    wait(10);
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "18" + java.io.File.separator + "*.jpg");
    wait(10);
    CMessage("%stopstroking%", 0);
    Pausa();
    return;
    Sim59();
}
function Sim59()
{
    CMessage("Follow the beat for " + getVar("AV_Persona59", ""));
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "19" + java.io.File.separator + "*.jpg");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "StrokePattern" + java.io.File.separator + "*.mp3");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "19" + java.io.File.separator + "*.jpg");
    wait(15);
    CMessage("%KeepStroking%");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "19" + java.io.File.separator + "*.jpg");
    wait(10);
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "19" + java.io.File.separator + "*.jpg");
    wait(10);
    CMessage("%stopstroking%", 0);
    Pausa();
    return;
    Pausa();
}
function Pausa()
{
    if(getVar("AV_NoControl99", false))
    {
        Pausa2();
        return;
    }
    if(getVar("AV_SimControl99", false))
    {
        PulaIntro();
        return;
    }
    CMessage("I would love it if you\'d let me take more control over you");
    let answer0 = getInput("What do you think %SubName%, will you do that for me?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo% %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("You know that you\'ve been needing this for some time.");
        setVar("AV_SimControl99", true);
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Aww...");
        setVar("AV_NoControl99", true);
        Pausa2();
        return;
    }
    CMessage("So you decided to become my slave for real.");
    CMessage("Although this was not really a decision wasn\'t it?");
    CMessage("Under my strict guidance you will be transformed.");
    CMessage("First your mind, then your body and at last your soul.");
    CMessage("I will help you to become the obedient slave you crave to be.");
    CMessage("The first step on your journey will be...");
    switch(random("Legs", "Bathroom", "Collar", "Plug"))
    {
        case "Legs":
        Legs();
        return;
        break;
        case "Bathroom":
        Bathroom();
        return;
        break;
        case "Collar":
        Collar();
        return;
        break;
        case "Plug":
        Plug();
        return;
        break;
    }
    PulaIntro();
}
function PulaIntro()
{
    switch(random("Legs", "Bathroom", "Collar", "Plug"))
    {
        case "Legs":
        Legs();
        return;
        break;
        case "Bathroom":
        Bathroom();
        return;
        break;
        case "Collar":
        Collar();
        return;
        break;
        case "Plug":
        Plug();
        return;
        break;
    }
    Legs();
}
function Legs()
{
    if(getVar("AV_Cont_Legs", false))
    {
        LegSecond();
        return;
    }
    CMessage("You Must Keep Legs Spread");
    setVar("AV_Cont_Legs", true);
    CMessage("Here is a very simple rule that is designed to keep things awkward for you");
    CMessage("and emphasize that your cock and balls belong to me.");
    CMessage("The rule is that your legs can\'t touch your cock or balls in the sessions.");
    LegSecond();
}
function LegSecond()
{
    CMessage("I want to see his balls hanging down.");
    CMessage("You must keep your legs spread till the end of this session");
    CMessage("Unless I say the other way");
    return;
    Bathroom();
}
function Bathroom()
{
    if(getVar("AV_Cont_Bathroom", false))
    {
        Pausa2();
        return;
    }
    CMessage("From now on...");
    setVar("AV_Cont_Bathroom", true);
    CMessage("You Must Ask Permission to Use the Bathroom during our sessions.");
    CMessage("I will decide how you will pee %Lol%");
    return;
    Collar();
}
function Collar()
{
    if(getVar("AV_Cont_NoCollar", false))
    {
        Pausa2();
        return;
    }
    if(getVar("AV_Cont_Collar", false))
    {
        PutCollar();
        return;
    }
    let answer0 = getInput("Do you have any Collar and/or Cuffs?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo% %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%Good%");
        setVar("AV_Cont_Collar", true);
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Aww...");
        setVar("AV_Cont_NoCollar", true);
        Pausa2();
        return;
    }
    PutCollar();
}
function PutCollar()
{
    if(getVar("AV_Cont_Collar2", false))
    {
        CMessage("I hope you are still using the collar %PetName%");
        Pausa2();
        return;
    }
    CMessage("I want you to wear a collar or ankle cuffs, both if you have, as a symbol that I own you");
    setVar("AV_Cont_Collar2", true);
    let answer0 = getInput("Tell me when you are done");
    while (!(answer0.isLike("done") || answer0.isLike("yes") || answer0.isLike("ready")))
    {
        answer0 = getInput("Are you done %SubName%?");
    }
    if (answer0.isLike("done", "yes", "ready"))
    {
        CMessage("good boy");
    }
    Pausa2();
    return;
    Plug();
}
function Plug()
{
    if(getVar("AV_Cont_NoPlug", false))
    {
        Pausa2();
        return;
    }
    if(getVar("AV_Cont_Plug", false))
    {
        Putplug();
        return;
    }
    let answer0 = getInput("Do you have any Butt-Plug or Strapon?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo% %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%Good%");
        setVar("AV_Cont_Plug", true);
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Aww...");
        setVar("AV_Cont_NoPlug", true);
        Pausa2();
        return;
    }
    Putplug();
}
function Putplug()
{
    if(getVar("AV_Cont_NoPlug2", false))
    {
        CMessage("I hope that you have that plug in your ass %PetName%");
        Pausa2();
        return;
    }
    CMessage("I want you to " + random("wear ", "insert ") + "a butt-plug in your ass");
    setVar("AV_Cont_Plug2", true);
    let answer0 = getInput("Tell me when you are done");
    while (!(answer0.isLike("done") || answer0.isLike("yes") || answer0.isLike("ready")))
    {
        answer0 = getInput("Are you done %SubName%?");
    }
    if (answer0.isLike("done", "yes", "ready"))
    {
        CMessage("good boy");
    }
    CMessage("You must keep till the end of this session");
    CMessage("Unless I want to play with your ass in other ways %EmoteSmile% Goto(Pausa2)");
    Pausa2();
}
function Pausa2()
{
    if (getVar("AV_QteModulos", 0) < 5)
    {
        Pausa3();
        return;
    }
    if (randomInteger(1, 100) <= 60)
    {
        AVBreak();
        return;
    }
    Pausa3();
}
function Pausa3()
{
    if(getVar("AV_EatCum", false))
    {
        Pausa4();
        return;
    }
    if(getVar("av_fetish_cei", false))
    {
        if (randomInteger(1, 100) <= 40)
        {
            AVCEI8();
            return;
        }
    }
    Pausa4();
}
function Pausa4()
{
    CMessage(random("From this point forth I will control every part of you", "Get ready cause it\'s going to be a long way before you will orgasm"));
    wait(20);
    CMessage("%RelaxAndBreathe%");
    wait(20);
    return;
    AVBreak();
}
function AVBreak()
{
    CMessage(random("This session is intense", "We\'ve been at this for some time", "We\'ve been here for some time now", "you look exhausted"));
    let answer0 = getInput("Do you need a break?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo% %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%Okay%");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("%Good%");
        Pausa9();
        return;
    }
    BreakTime();
}
function BreakTime()
{
    if (randomInteger(1, 100) <= 20)
    {
        BR1();
        return;
    }
    CMessage("I will give you a 2 minutes break...");
    CMessage("Go drink water, wash your hands or anything to help you to cool down");
    CMessage("I will play a sound when I want you back " + "...go");
    wait(120);
    CMessage("Back here " + random("%SubName%", "%PetName%"));
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "3S3D.mp3");
    CMessage("Your break is over...");
    wait(10);
    return;
    BR1();
}
function BR1()
{
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "pvCr_BreakStroking.js");
    return;
    AVCEI8();
}
function AVCEI8()
{
    CMessage("I\'ve tried so many ways of getting you to eat your own cum.");
    CMessage("I\'ve been " + random("sweet and sensual", "encouragingly", "seductive"));
    CMessage("I\'ve tried blackmailing you into it");
    CMessage("tough love humiliating you into doing it edging games...");
    CMessage("but you\'re still a little pussy who has chickened out, right?");
    CMessage("So today I just get real about it.");
    CMessage(random("No games", "no fucking around"));
    CMessage("Just tapping right into that logical male mind of yours.");
    CMessage("I tell you straight " + random("how it\'s going to feel", "how it\'s going to taste"));
    CMessage(random("Think of this as no-nonsense CEI", "It\'s not mean but it\'s not sugar coated"));
    CMessage("It\'s just me and your cock");
    CMessage("and getting you to eat that load for me, like you\'ve wanted to all along.");
    CMessage("So, if you get to cum today...");
    CMessage("including a ruined orgasm");
    setTempVar("AV_EatCum", true);
    CMessage("you will eat for me");
    return;
    Pausa9();
}
function Pausa9()
{
    CMessage(random("From this point forth I will control every part of you", "Get ready cause it\'s going to be a long way before you will orgasm"));
    wait(20);
    CMessage("%RelaxAndBreathe%");
    wait(20);
    return;
    Positions();
}
function Positions()
{
    CMessage(random("I think you need some time ", "you need some time ") + "to " + random("recover", "breath"));
    switch(random("Slide1", "Slide2", "Slide3"))
    {
        case "Slide1":
        Slide1();
        return;
        break;
        case "Slide2":
        Slide2();
        return;
        break;
        case "Slide3":
        Slide3();
        return;
        break;
    }
    Slide1();
}
function Slide1()
{
    //Command:Slideshow(Femdom,Slow)
    PositionsStart();
    return;
    Slide2();
}
function Slide2()
{
    //Command:Slideshow(Softcore,General)
    PositionsStart();
    return;
    Slide3();
}
function Slide3()
{
    //Command:Slideshow(Boobs,Butts)
    PositionsStart();
    return;
    PositionsStart();
}
function PositionsStart()
{
    CMessage(random("we take this opportunity ", "Let\'s take advantage of this opportunity ") + "to work on some " + random("slave ", "submissive ") + "positions");
    CMessage(random("Go to ", "stay in ") + "that position until you hear a bell");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "positions" + java.io.File.separator + "all" + java.io.File.separator + "*.jpg");
    wait(15);
    CMessage("And you " + random("may ", "can ") + random("enjoy ", "watch ") + "some " + random("sexy ", "nice ", "hot ") + random("images", "pictures", "girls"));
    //TODO: Turn Slideshow on
    wait(randomInt(30, 60));
    CMessage("%SitDown%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Bell.mp3");
    //TODO: Turn Slideshow off
    return;
}