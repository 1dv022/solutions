## Click game
Här är tanken att du ska skriva ett enkelt "klickspel". Spelidén är att ett antal brickor, 9 stycken, 
får för varje spelomgång en slumpmässig färg antingen gul, blå eller röd. Av spelytan bestående av de 9
brickorna ska det alltid vid varje spelstart finnas 3 gula, 3 blå och 3 röd.
Det slumpas också fram en färg som är färgen som användaren ska klicka på. Slumpas t.ex. röd färg fram ska användaren 
så snabbt som möjligt klicka på alla röda brickor.

Filen client/index.html består av ett antal divtaggar som positioneras ut som
i en enkel spelplan med dessa 9 brickor. Från början är alla brickor gråa och tanken är att du 
ska skriva javascriptkod som gör följande:
 
* Först och främst slumpmässigt sätter om färgerna på varje bricka (använd de färdiga css-klasserna),
* Slumpar fram vilken färg som ska klickas. Detta presenteras för användaren vid start.
* När spelet startar ska också en timer starta som hela tiden uppdateras på sidan
* När användaren klickat på en bricka med rätt färg ska den byta färg till grå
* När användaren klickat ner alla brickor med rätt färg ska timern stanna och sluttiden syns.

I bilden nedan har spelet startat och timern står och rullar. Översta vänstra hörnet var en blå bricka
som användaren tryckt på.

Vill man kan man naturligtvis bygga vidare på uppgiften och t.ex. ge tidsstraff ifall användaren klickar på 
fel färg o.s.v.

![exempelbild](exempel.png)
