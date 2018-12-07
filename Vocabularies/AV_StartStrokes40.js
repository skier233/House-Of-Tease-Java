function AV_StartStrokes40Vocabulary() {
    CMessage(random("Stroke", "Wank", "Masturbate") + random(" to the", " following the") + " beats");
    switch (randomInt(1, 7)) {
        case 1:
            playAudio("Audio" + separator + "tease" + separator + "circle1.mp3");
            break;
        case 2:
            playAudio("Audio" + separator + "tease" + separator + "circle2.mp3");
            break;
        case 3:
            playAudio("Audio" + separator + "tease" + separator + "circle3.mp3");
            break;
        case 4:
            playAudio("Audio" + separator + "tease" + separator + "circle5.mp3");
            break;
        case 5:
            playAudio("Audio" + separator + "tease" + separator + "overdrive2.mp3");
            break;
        case 6:
            playAudio("Audio" + separator + "tease" + separator + "overdrive3.mp3");
            break;
        case 7:
            playAudio("Audio" + separator + "tease" + separator + "no200300.mp3");
            break;
    }
    return "<dontsend>";
}