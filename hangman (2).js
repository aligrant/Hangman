// if they loose the game this function happens
M.AutoInit();

startBtn.addEventListener("click", function(){
  setTimeout(startFunction, 450)//got this from Sang, it delays the function so the wave is visible
})
function startFunction(){
    // var backToStart = document.createElement("a")
    // document.body.appendChild(back)
    // backToStart.id = "backToStart"
    // backToStart.className = "btn-floating btn-large waves-effect waves-light red"
    // backToStart.innerHTML = "replay";
    var frontPage = document.getElementById("frontPage");
    frontPage.remove();
    var inputWord = document.createElement("input");
    document.body.appendChild(inputWord);
    inputWord.placeholder = "word"
    inputWord.id = "inputWord"
    var inputHint = document.createElement("input");
    document.body.appendChild(inputHint);
    inputHint.placeholder = "hint/category(optional)"
    inputHint.id = "inputHint"
    var submitWord = document.createElement("button");
    document.body.appendChild(submitWord)
    submitWord.id ="submitWord"
    submitWord.className = "waves-effect waves-light btn-large" //Used materialise 
    submitWord.innerHTML = "ENTER"
    submitWord.addEventListener("click", function(){
      setTimeout(gamePage, 450)//Applied timeout here aswell so the buttons are consistent
    })   
    function gamePage(){
        submitWord.remove();
        inputWord.remove();
        inputHint.remove();
        var image = document.createElement("img");
        document.body.appendChild(image);
        image.id="image";
        document.getElementById("image").src = "https://lh3.googleusercontent.com/Urv6_Gf-7CZKvkXZbCZ52gsqTc0PMZKdYNFt5mX8Y1eZqMKpkamJ6IfO9yN8knefH8w9uqtbw3m_p6zh2rnl72ARdw_ayR-wp7665NTpyGZNcyxOL0bdvurUApdku0SyeoRNSd3S3YSnGFCr8uRXZgOknW0AYy8L2zp1bMPX8ufdU1YS50ndqkloUVPCr4KoYh7ESprrDNGtL2libGI7DCHEEDK0oyV_FCfn-_sHHcRqbsjLaaH7pMU1itmgkZActAGH_tgyYCsYZrlWGKvAheja9UfXsXhNA9X4u4ZtlVdWId37s3IIvfN52ZcdLj1co0h3o5YdifC3um0z-BXaWHcBVMI83hZzuLTeQT59n3w3RHj5ftPWKx7zbmWnvL8I9F0EUNwBoTASiNYmuc2ozDICyVntbUnRbxowtUQGPKlqIsAouEvKfB0zV4Woxa1D8X7VLfIYWjNpSUHjTmhNTWAipH0d-eqPQ6Ki8jdWQbYPWLglkeHEdDNKRYD-cwZzYvrw2kv_ngXEVmEuOCvlecvgTnoLmCuSbGW5pZxq3YWy6y6H2Hu_MAmBpw8rsbiacPThrDMKA8cyahwPxwMHwfq0doCQQaDjiSWT04XHUPbM4fT7LeW027dTxaa9jWnXscBKQe8XtcdoNCZBK2rhQJgUpYHmUbTkl9Ja1jjDxjws_x9n_HChUnBceGS6K8E=w263-h484-no?authuser=2";//https://www.oligalma.com/downloads/images/hangman/hangman/3.jpg
        var hint = document.createElement("button");
        document.body.appendChild(hint);
        hint.id ="hint"
        hint.innerHTML = "HINT"
        hint.addEventListener("click",hintfct)
        hint.className="waves-effect waves-light btn-large"
        function hintfct(){
          if (inputHint.value == ""){//incase player one is mean
            alert("): no hint");
          }
          else{alert(inputHint.value)}
        }
        var wordBeforeFixed = inputWord.value;
        var word = wordBeforeFixed.toLowerCase()
        // guessing section stuff conditionals 
        // if (document. getElementById(letterA).clicked == true && word.contains("a")){
        // }
        // word is an array of letters from the input word
        //var word only exists in this finction which is fine because the rest of the game will as well
        // alert(word.split(""))
        // alert(word[2])
        for (i = 0; i < word.length; i++) {
            var spaces = document.createElement("h1");
            document.body.appendChild(spaces)
            spaces.innerHTML = "__"
            spaces.id = "space"+i//so that i can change them based on letter
            
          }
          
      
          function winner(){//c+p this from loser function and changed names
            image.remove()
            hint.remove();//because its on top
            guessWordBtn.remove()
            var winnerBackground = document.createElement("h2");
            document.body.appendChild(winnerBackground);
            winnerBackground.id = "winnerBackground"
            var winnerCard = document.createElement("h1");
            document.body.appendChild(winnerCard);
            winnerCard.id = "winnerCard"
            winnerCard.innerHTML = "YOU WON"
            var correctWord = document.createElement("h1");
            document.body.appendChild(correctWord);
            correctWord.id = "correctWord"
            correctWord.innerHTML = "Yes, the word was "+ word
            var replayBtn = document.createElement("button")//had to declare here as well as in loser function because isnt global
            document.body.appendChild(replayBtn);
            replayBtn.id="replayBtn"
            replayBtn.innerHTML = "PLAY AGAIN"
            replayBtn.className = "waves-effect waves-light btn-large" //Materialise thing again
            replayBtn.addEventListener("click", function(){
              setTimeout(replay, 450)
            })
            function replay(){
              location.reload()//I searched up how to reload a page
            }


          }
          var guessWordBtn = document.createElement("button");
          document.body.appendChild(guessWordBtn);
          guessWordBtn.id= "guessWordBtn"
          guessWordBtn.className = "waves-effect waves-light btn-large"
          guessWordBtn.innerHTML = "GUESS WORD"
          guessWordBtn.addEventListener("click",function(){
            setTimeout(guessWord, 450)
          })
          function guessWord(){
            var guessWordInput = prompt("What is the word?")
            if (guessWordInput.toLowerCase() == word){//incase they capitalise it
              winner()
            }
            else if(guessWordInput = -1) {
              loser()
            }
          
          }
          var startguess = "6";
          btnguessed = parseInt(startguess);
          var guesscalc = document.createElement("h1");
          document.body.appendChild(guesscalc)
          guesscalc.id ="guesscalc"
          guesscalc.innerHTML = "Guesses left: " + btnguessed
          var image = document.createElement("img");
          document.body.appendChild(image)

          // didnt declare btnguessed so that i could use it in the functions and its a global thing
          //Theres probably alot of ways to avoid typing everything below
          function imageChange(){
            
            if(guesscalc.innerHTML == "Guesses left:5"){//had to use google photos image because that was the only way to get image adress
              document.getElementById("image").src = "https://lh3.googleusercontent.com/Q879nGW8hLruvFwOQKdfztjGW0xTv2dBG6Oo8J56t95sfA4n5sGxnAHRt6V0PItPrNhikXjqOHsVawMLwrCMCe_Snks2egVtkHiUZXbZMNts-43Fx_njQBm13v8-egq5ZDxvErATx7ZRMAktRU0AICpeVm32BgDQ-pIL6yI0qTGUxirdHwOfi6mB9fZvDw0PTRG074mageVUxcXs-szHMMw-r_futdPXjftIW0VoJU7dFyKHX_r9PuZjLSn_MDorIjMihj4VfCExdHiH4j8wzUinykxWhBXU9DJ8etmqoGWc1R9FubntMpK412O6C20HHl2WCFYOIsO8-DaRhY1bio0VUjdhwQfISGZPrNDJcBeScUOdJdDeuQ34wqe0wIJV_NCHvnBDfjzlyAkpcXxFzsUu995WjLmRlbCmIRx2Jsnw4AOQnjuPOAt1cHjpmOylKULFjF-I9ufxafbFj5rmfvJd71YObXOfIATfXI8NXhoJfopA3Uf_30dR1e2Kv4PC_9yoh3B18MGgsupOlwLSoaXoHJir8qSM6sTzDl9qjflBCfGTg9oO9F88Hxv8TvJjv90GHJgHH699P578t8Nev1u88W8Fd58shatXSR-XAjdxpvlDfWyEczjVVoQwGevri0RZBF8ewRDXz2ZzFPndSfNKIYa-_AuoQeo-IElqsvYAsChHjbX8FGN2FkvN5cM=w224-h391-no?authuser=2";
          
            }
            if(guesscalc.innerHTML == "Guesses left:4"){
              document.getElementById("image").src = "https://lh3.googleusercontent.com/RUYnd9fQMLPr5fjE8QfjK3eNDpHbA7z13NFsi6zv52SiBGFC4CdO4e3XS-StQjE05YYWeL7cEB9nm0taIFBxS9-Xuc0pdyHBxwupTJgWSM6-Ak6wUCuVh84CmWhUsDev_E5cQQHsR4rXcUsoBscgf7d124knymvZZ3xF0cke3v9roBXnn_vNGVTWY2KxBW9x2EnSqCOcIjD2PCeMCEEvIEFPwGbEDnGvOcaTkXvPH0sFAvykjUkv5Qt79KUtVS60QeH0NPzdJnriSza2pC0s6mvh-XFz6ojwRk6ZEZhXHYk3KwJNRiPLKN4ujcDM5N_lBca7Wsikr76yNtC_QLToRJUjWcdenVa_r8Epxv--dX3Ykk1mb9oZzHHnRT6fBcDV_mJ1QdJDmrXDG3tjPbR-wPuj9QBVQ0HvR7FBKG5cZG74KkbiZDplO55rOP3ThjaWExoD1xC8Hs6CFOUXCZCdIquF88mAg6b9_rlfNjO8vjhS6qjNJzvOfj6p1HER1FIG82Ui1HG6i1ixv7yRnR0bUw2SgI7HafZWn6S7PaeNeXUHj4ZwYFlw6Mqo-fSalEjOPQPMiyDSbOgL-OrNw-uhssVGbfo3fEq9YOGQJGGhuhCtZzIzcw3LXz-XqvCAy3LLjW8q-RlO9TYZLVZRgtZMf1JDQzUJgMsshiNp_7uG72ggV-8mSBeasRnthcKO4i0=w240-h394-no?authuser=2";
            }
            if(guesscalc.innerHTML == "Guesses left:3"){
              document.getElementById("image").src = "https://lh3.googleusercontent.com/16lcjHhtbnZFt9Nzs9cJyp909K8d5EXDE2I3YmuaTwL3RLbRD0-pHx5x2-WzsdQjs18uyAzTyViBzRN4Me3jRmPIbJqrE7UxMe7FUSJtqR0Rrrz1fPxNKmzSgB7Q2f-QeJTQ-Z7DZBI4E0STcTNV6C5jYEKiH4aKqf8R37tTpwZD8XEC_--NXLhtvc-ZT-bb3zkiwiB77SzD1btbMKUcS7rbaufciyMe-o-ksYvVq_JOVgORQ7pd_14pSw-C3uRKY4ILWqYRl4Q9BnX1z1JPECT0CAQfoA__8xsmBE_M0J69dEG1ZQ3nqY4lTD8e4E53SeZ1v5D3sVZ-1aVsDYPrltRXpBbmDJUWZFozVaw1mGTksHt2Zl4LXEZZ-2oXqL-SP9fkdbzou0WNpaqdpVtan5mefz3A-_IBhi4blkK4ABsvR1_cL5ApybdjzdsgBxRadfmuH8Wr4PJXhHa_ucfG7Xj8iVOU34zfzmdADXGoWAdq4CgH8gv8offUzEvBIDYyvRb4Q5kK1CUeFmwlTDx1t3g6xSDDprAsmtDinAfiPU7LqvmcNGu4DCIW-DlgAV0g1okeb3pLEP60_SNOPgeXG4G9Fg_XEUkilWn2lyZb9slDWJWVBvr17xZT4Cm8512iZz38bo0yBVNc43_r3Mqgl5yN-B7fSEQ1ErrFDCOCfT-gOqZDtaqH1sxPAAy-fSQ=w234-h370-no?authuser=2";
            
            }
            if(guesscalc.innerHTML == "Guesses left:2"){
              document.getElementById("image").src = "https://lh3.googleusercontent.com/1TWaIaNkeyhzHxO1NgdBbSmpNgW2nar-FH_pFqWksFGKJYf-cyU7-FG32tXag_aIp754Rv_etonvKseXypx-SvidRlIbq5rsE9Pjc_T2UbpEyfpw6V7P480mQWR9XPj3kWR0ZJ6pJJ2HOtv8tH19ppRQi_vg1KBl976b0PkTCkY7NTzAx0oHI54anLW83LqNH4_NUfkSttgRfXmrnOOTCntFK8rDHswCHgHcqbZKhaaKJdW1RDVI9gLXB2l8BazmKEiP4CgFs5du3wZFQuOT4rMowcQaMYaV2T-pfhXngfMIj5gstDof7Vyzbm49eUfU6bXY0t2SzLE6qYsTT1mGL9zwnyoh-HFisDvIQqy_dI0pYfvQP2bwnvs4IZ4KF7x8uqrJdauw2m7xWJYwkkLGWT0QzjrodFmkEasyMZDTaN6V6S4sdxUYnvlArV4rwDjCk9rZwtflWmhrh0S__b_ygklKNP_zTZgs-1rc7UGbtOP63_0sJ1fm3x97qwp_-X3KKN0SX75R20tu2n2Lg4_YderJEts-AiQ7K30CZ7DJAUN4Qd1vNAr2DppwTAYlY1hVg2efK32gh2WnhNSVseF30H2rrtyFjxx3WBAaZHgr2B4SO7CrbNc3H04jKIHmokfyFFF-mvZBr40mqCc1X_8f4YM8zAlj60U8XzIKjHLy_XAX5pYyfjVjyEQYkpVBFO8=w234-h371-no?authuser=2";
            
            }
            if(guesscalc.innerHTML == "Guesses left:1"){
              document.getElementById("image").src = "https://lh3.googleusercontent.com/T8QeJQVHy-hHskBzJgeTMlmbNJ10CjeqPJ3jC3l7pgNtHuwDcc1mGRUJQp3rO3AYfViXJ6IbkkEPt4VaBY77VVQ56uvz4A7EpTXLEXuh7v4QPgZu8cnsCYiaMq1hmTlRObqXhp_QwNmuXXiJpe312o-mclwtImzOJxNvz7UWSYAQtNXVkki8qAyGhJDAsHlvYnEpAhDiGnmebKcRhc-E6PkA_vXyZtaZ3Z6jaMjaho8Ud3sLlUdaylJL61GlKeJ5ijf3ezwF3zOn43Xb7m8hnnOak__HKIprqKqJglM-03drEiPkDkCwIXPinItSquAZmBaol1ayzDm2MsXalseZaQxRIcziKuKGdJrsYssypwVxcpxCRCJ3IPCpqvIy_vhdMimvQY2KM_x5TGyzHQQWy2KAQ8o0aBWR14eBkee-yKGfVShZw9bHgepUi_MgldI_D0Ve3G79h2DTfAHxlHmHW1CwMVpkQchQnMO0-5NLSjiEn0aAOiysSTmKH9MnLzXHNcky14eZj_9V-3la-slDVnanCIP6Bl7NLdJPmkE_FhxEscBwzjUSA1tC4_Tocinh5o-thloaubKC1cXyZHmKWENARnDrygBY7KRJXA9PvWf88oOKd4gxqAihBpc6guLdXT3r5x5ivG7yS1tRTfH_t-2FVmPc2Sj9pOYErdB8buVbYTGIFSMeBXsJeCZqD-0=w258-h366-no?authuser=2";
            
            }
            if(guesscalc.innerHTML == "Guesses left:0"){//doesnt actually get to this (family friendly cause the person doesnt die, you just lose)
              document.getElementById("image").src = "https://lh3.googleusercontent.com/waUpglZBIcE_acCQi5Io2RG3hKo-pAb8RqvHbILxNHuMx3o-5EPeAkYy62fPDQzDy26i1VbByW9qvg6npRQ54a6MvOIDTFgCGoQ1zQpP_tDZy6pIqeR0DQ3CDhtVBksceoHoNltahHpnYgD9oyyzQlMQmPBp2f4wbriJoH67aiARjwYT4kgRa_WQXp32wfqlsEqy3Fh4wQu7lofGwUPkowg9vQqnmfg4OOEB9Wl0LQOi8epjKoBJnhU7DZ3hfFxpO2C-Oyl61BBdWzuH8q73tj1PdC53EXfUbRFfjMcy29Zpx73Yg-Hxl1lLbNuNRytdBB5aUZkBup7Ykk73d0VeXTh8GFpa8rPvwRcujM1v_QrbTYEhMt7riRH66E7lNjmQq6oPrTTmQ3T3XeYtwam10HE6gfqyuZaWqM_SuNLrDWRLNFg5rDIPaoYHEHpDKW4hwDFXEdQbBWVW7-xHmHvNR-dU8F-nU2iEG8zosCqlZnGzuYhZx9D1YJeHQzzfABeJ9Nz0mzglyyIuAvXljwoea02iUQFnqhO0Qof8_6z5wnMhW_jm64X7b8MO5jzNJik5-TETgevmzW0zSVadRYE-x4k48peOh-e9RoJ53RoGxnZ2EcmveUhnu0fsciq-gstSo9979ilBB3Bo8KW0M2hzqcQE1zzKjUIZiSFKMGgK_S8ottqT3B3SSklk6WWIGxY=w256-h366-no?authuser=2";
            
            }
          }
          var letterA = document.createElement("button");
          document.body.appendChild(letterA);
          letterA.id ="letterA";
          letterA.innerHTML = "A";
          letterA.addEventListener("click", letterAFnc)
          function letterAFnc(){
            if(document.getElementById("letterA").clicked = true && btnguessed>0){//I searched up how to do .clicked
              btnguessed = btnguessed - 1;
              guesscalc.innerHTML = "Guesses left:" + btnguessed;
            }
            if (word[0]=="a"){
              document.getElementById(space0.innerHTML="a");
            }
            if (word[1]=="a"){
              document.getElementById(space1.innerHTML="a");
            }
            if (word[2]=="a"){
              document.getElementById(space2.innerHTML="a");
            }
            if (word[3]=="a"){
              document.getElementById(space3.innerHTML="a");
            }
            if (word[4]=="a"){
              document.getElementById(space4.innerHTML="a");
            }
            if (word[5]=="a"){
              document.getElementById(space5.innerHTML="a");
            }
            if (word[6]=="a"){
              document.getElementById(space6.innerHTML="a");
            }
            if (word[7]=="a"){
              document.getElementById(space7.innerHTML="a");
            }
            if (word[8]=="a"){
              document.getElementById(space8.innerHTML="a");
            }
            if (word[9]=="a"){
              document.getElementById(space9.innerHTML="a");
            }
            if (word[10]=="a"){
              document.getElementById(space10.innerHTML="a");
            }
            if (word[11]=="a"){
              document.getElementById(space11.innerHTML="a");
            }
            if (word[12]=="a"){
              document.getElementById(space12.innerHTML="a");
            }
            if (word[13]=="a"){
              document.getElementById(space13.innerHTML="a");
            }
            if (word[14]=="a"){
              document.getElementById(space14.innerHTML="a");
            }
            if (word[15]=="a"){
              document.getElementById(space15.innerHTML="a");
            }
            if (btnguessed <= 0){
              alert("You have no geusses left.")
              guessWord()}
            imageChange()
            letterA.remove()//this has to be at the end so that it isnt removed once out of guesses
          
            // remove it after clicked so that if they were to attempt to click again the guesses left number doesnt go down
            // if (btnguessed == 0){   <<<I had this before but it was going off before the guesses were out so I changed it to -1 but then if people stil pressed would have gone off so i made it prompt. 
            //   loser()}
          
          // if (btnguessed<=0){
          //   document.getElementById("letterA").removeEventListener("click", letterAFnc);
          //I had the code above and then realised I could add &&>0 to the conditional 
          }
          var letterB= document.createElement("button");
          document.body.appendChild(letterB);
          letterB.id ="letterB";
          letterB.innerHTML = "B";
          letterB.addEventListener("click", letterBFnc)
          function letterBFnc(){
            if(document.getElementById("letterB").clicked = true && btnguessed>0){
              btnguessed = btnguessed - 1;
              guesscalc.innerHTML = "Guesses left:" + btnguessed;
            }
            if (word[0]=="b"){
              document.getElementById(space0.innerHTML="b");
            }
            if (word[1]=="b"){
              document.getElementById(space1.innerHTML="b");
            }
            if (word[2]=="b"){
              document.getElementById(space2.innerHTML="b");
            }
            if (word[3]=="b"){
              document.getElementById(space3.innerHTML="b");
            }
            if (word[4]=="b"){
              document.getElementById(space4.innerHTML="b");
            }
            if (word[5]=="b"){
              document.getElementById(space5.innerHTML="b");
            }
            if (word[6]=="b"){
              document.getElementById(space6.innerHTML="b");
            }
            if (word[7]=="b"){
              document.getElementById(space7.innerHTML="b");
            }
            if (word[8]=="b"){
              document.getElementById(space8.innerHTML="b");
            }
            if (word[9]=="b"){
              document.getElementById(space9.innerHTML="b");
            }
            if (word[10]=="b"){
              document.getElementById(space10.innerHTML="b");
            }
            if (word[11]=="b"){
              document.getElementById(space11.innerHTML="b");
            }
            if (word[12]=="b"){
              document.getElementById(space12.innerHTML="b");
            }
            if (word[13]=="b"){
              document.getElementById(space13.innerHTML="b");
            }
            if (word[14]=="b"){
              document.getElementById(space14.innerHTML="b");
            }
            if (word[15]=="b"){
              document.getElementById(space15.innerHTML="b");
            }
            if (btnguessed == 0){
              alert("You have no geusses left.")
              guessWord()}
            imageChange()
            letterB.remove()
          }
          // if (btnguessed<=0){
          //   document.getElementById("letterB").removeEventListener("click", letterBFnc);
          // }
          var letterC = document.createElement("button");
          document.body.appendChild(letterC);
          letterC.id ="letterC";
          letterC.innerHTML = "C";
          letterC.addEventListener("click", letterCFnc)
          function letterCFnc(){
            if(document.getElementById("letterC").clicked = true && btnguessed> 0){
              btnguessed = btnguessed - 1;
              guesscalc.innerHTML = "Guesses left:" + btnguessed;
            }
            if (word[0]=="c"){
              document.getElementById(space0.innerHTML="c");
            }
            if (word[1]=="c"){
              document.getElementById(space1.innerHTML="c");
            }
            if (word[2]=="c"){
              document.getElementById(space2.innerHTML="c");
            }
            if (word[3]=="c"){
              document.getElementById(space3.innerHTML="c");
            }
            if (word[4]=="c"){
              document.getElementById(space4.innerHTML="c");
            }
            if (word[5]=="c"){
              document.getElementById(space5.innerHTML="c");
            }
            if (word[6]=="c"){
              document.getElementById(space6.innerHTML="c");
            }
            if (word[7]=="c"){
              document.getElementById(space7.innerHTML="c");
            }
            if (word[8]=="c"){
              document.getElementById(space8.innerHTML="c");
            }
            if (word[9]=="c"){
              document.getElementById(space9.innerHTML="c");
            }
            if (word[10]=="c"){
              document.getElementById(space10.innerHTML="c");
            }
            if (word[11]=="c"){
              document.getElementById(space11.innerHTML="c");
            }
            if (word[12]=="c"){
              document.getElementById(space12.innerHTML="c");
            }
            if (word[13]=="c"){
              document.getElementById(space13.innerHTML="c");
            }
            if (word[14]=="c"){
              document.getElementById(space14.innerHTML="c");
            }
            if (word[15]=="c"){
              document.getElementById(space15.innerHTML="c");
            }
            if (btnguessed == 0){
              alert("You have no guesses left.")
              guessWord()
            }
            imageChange()
            letterC.remove()
          }
          // if (btnguessed<=0){
          //   document.getElementById("letterC").removeEventListener("click", letterCFnc);
          // }
          var letterD = document.createElement("button");
          document.body.appendChild(letterD);
          letterD.id ="letterD"
          letterD.innerHTML = "D"
          letterD.addEventListener("click", letterDFnc)
          function letterDFnc(){
            if(document.getElementById("letterD").clicked = true && btnguessed>0){
              btnguessed = btnguessed - 1;
              guesscalc.innerHTML = "Guesses left:" + btnguessed;
            }
            if (word[0]=="d"){
              document.getElementById(space0.innerHTML="d");
            }
            if (word[1]=="d"){
              document.getElementById(space1.innerHTML="d");
            }
            if (word[2]=="d"){
              document.getElementById(space2.innerHTML="d");
            }
            if (word[3]=="d"){
              document.getElementById(space3.innerHTML="d");
            }
            if (word[4]=="d"){
              document.getElementById(space4.innerHTML="d");
            }
            if (word[5]=="d"){
              document.getElementById(space5.innerHTML="d");
            }
            if (word[6]=="d"){
              document.getElementById(space6.innerHTML="d");
            }
            if (word[7]=="d"){
              document.getElementById(space7.innerHTML="d");
            }
            if (word[8]=="d"){
              document.getElementById(space8.innerHTML="d");
            }
            if (word[9]=="d"){
              document.getElementById(space9.innerHTML="d");
            }
            if (word[10]=="d"){
              document.getElementById(space10.innerHTML="d");
            }
            if (word[11]=="d"){
              document.getElementById(space11.innerHTML="d");
            }
            if (word[12]=="d"){
              document.getElementById(space12.innerHTML="d");
            }
            if (word[13]=="d"){
              document.getElementById(space13.innerHTML="d");
            }
            if (word[14]=="d"){
              document.getElementById(space14.innerHTML="d");
            }
            if (word[15]=="d"){
              document.getElementById(space15.innerHTML="d");
            }
            if (btnguessed == 0){
              alert("You have no geusses left.")
              guessWord()
            }
            imageChange()
            letterD.remove()
          }
          // if (btnguessed<=0){
          //   document.getElementById("letterD").removeEventListener("click", letterDFnc);
          // }
          var letterE = document.createElement("button");
          document.body.appendChild(letterE)
          letterE.id ="letterE"
          letterE.innerHTML = "E"
          letterE.addEventListener("click", letterEFnc)
          function letterEFnc(){
            if(document.getElementById("letterE").clicked = true && btnguessed>0){
              btnguessed = btnguessed - 1;
              guesscalc.innerHTML = "Guesses left:" + btnguessed;
            }
            if (word[0]=="e"){
              document.getElementById(space0.innerHTML="e");
            }
            if (word[1]=="e"){
              document.getElementById(space1.innerHTML="e");
            }
            if (word[2]=="e"){
              document.getElementById(space2.innerHTML="e");
            }
            if (word[3]=="e"){
              document.getElementById(space3.innerHTML="e");
            }
            if (word[4]=="e"){
              document.getElementById(space4.innerHTML="e");
            }
            if (word[5]=="e"){
              document.getElementById(space5.innerHTML="e");
            }
            if (word[6]=="e"){
              document.getElementById(space6.innerHTML="e");
            }
            if (word[7]=="e"){
              document.getElementById(space7.innerHTML="e");
            }
            if (word[8]=="e"){
              document.getElementById(space8.innerHTML="e");
            }
            if (word[9]=="e"){
              document.getElementById(space9.innerHTML="e");
            }
            if (word[10]=="e"){
              document.getElementById(space10.innerHTML="e");
            }
            if (word[11]=="e"){
              document.getElementById(space11.innerHTML="e");
            }
            if (word[12]=="e"){
              document.getElementById(space12.innerHTML="e");
            }
            if (word[13]=="e"){
              document.getElementById(space13.innerHTML="e");
            }
            if (word[14]=="e"){
              document.getElementById(space14.innerHTML="e");
            }
            if (word[15]=="e"){
              document.getElementById(space15.innerHTML="e");
            }
            if (btnguessed <= 0){
              alert("You have no geusses left.")
              guessWord()
            }
            imageChange()
            letterE.remove()
          }
          var letterF = document.createElement("button");
          document.body.appendChild(letterF)
          letterF.id ="letterF"
          letterF.innerHTML = "F"
          letterF.addEventListener("click", letterFFnc)
          function letterFFnc(){
            if(document.getElementById("letterF").clicked = true && btnguessed>0){
              btnguessed = btnguessed - 1;
              guesscalc.innerHTML = "Guesses left:" + btnguessed;
            }
            if (word[0]=="f"){
              document.getElementById(space0.innerHTML="f");
            }
            if (word[1]=="f"){
              document.getElementById(space1.innerHTML="f");
            }
            if (word[2]=="f"){
              document.getElementById(space2.innerHTML="f");
            }
            if (word[3]=="f"){
              document.getElementById(space3.innerHTML="f");
            }
            if (word[4]=="f"){
              document.getElementById(space4.innerHTML="f");
            }
            if (word[5]=="f"){
              document.getElementById(space5.innerHTML="f");
            }
            if (word[6]=="f"){
              document.getElementById(space6.innerHTML="f");
            }
            if (word[7]=="f"){
              document.getElementById(space7.innerHTML="f");
            }
            if (word[8]=="f"){
              document.getElementById(space8.innerHTML="f");
            }
            if (word[9]=="f"){
              document.getElementById(space9.innerHTML="f");
            }
            if (word[10]=="f"){
              document.getElementById(space10.innerHTML="f");
            }
            if (word[11]=="f"){
              document.getElementById(space11.innerHTML="f");
            }
            if (word[12]=="f"){
              document.getElementById(space12.innerHTML="f");
            }
            if (word[13]=="f"){
              document.getElementById(space13.innerHTML="f");
            }
            if (word[14]=="f"){
              document.getElementById(space14.innerHTML="f");
            }
            if (word[15]=="f"){
              document.getElementById(space15.innerHTML="f");
            }
            if (btnguessed == 0){
              alert("You have no geusses left.")
              guessWord()
            }
            imageChange()
            letterF.remove()
          }
          var letterG = document.createElement("button");
          document.body.appendChild(letterG)
          letterG.id ="letterG"
          letterG.innerHTML = "G"
          letterG.addEventListener("click", letterGFnc)
          function letterGFnc(){
            if(document.getElementById("letterG").clicked = true && btnguessed>0){
              btnguessed = btnguessed - 1;
              guesscalc.innerHTML = "Guesses left:" + btnguessed;
            }
            if (word[0]=="g"){
              document.getElementById(space0.innerHTML="g");
            }
            if (word[1]=="g"){
              document.getElementById(space1.innerHTML="g");
            }
            if (word[2]=="g"){
              document.getElementById(space2.innerHTML="g");
            }
            if (word[3]=="g"){
              document.getElementById(space3.innerHTML="g");
            }
            if (word[4]=="g"){
              document.getElementById(space4.innerHTML="g");
            }
            if (word[5]=="g"){
              document.getElementById(space5.innerHTML="g");
            }
            if (word[6]=="g"){
              document.getElementById(space6.innerHTML="g");
            }
            if (word[7]=="g"){
              document.getElementById(space7.innerHTML="g");
            }
            if (word[8]=="g"){
              document.getElementById(space8.innerHTML="g");
            }
            if (word[9]=="g"){
              document.getElementById(space9.innerHTML="g");
            }
            if (word[10]=="g"){
              document.getElementById(space10.innerHTML="g");
            }
            if (word[11]=="g"){
              document.getElementById(space11.innerHTML="g");
            }
            if (word[12]=="g"){
              document.getElementById(space12.innerHTML="g");
            }
            if (word[13]=="g"){
              document.getElementById(space13.innerHTML="g");
            }
            if (word[14]=="g"){
              document.getElementById(space14.innerHTML="g");
            }
            if (word[15]=="g"){
              document.getElementById(space15.innerHTML="g");
            }
            if (btnguessed == 0){
              alert("You have no geusses left.")
              guessWord()
            }
            imageChange()
            letterG.remove()
          }
          var letterH = document.createElement("button");
          document.body.appendChild(letterH)
          letterH.id ="letterH"
          letterH.innerHTML = "H"
          letterH.addEventListener("click", letterHFnc)
          function letterHFnc(){
            if(document.getElementById("letterH").clicked = true &&btnguessed>0){
              btnguessed = btnguessed - 1;
              guesscalc.innerHTML = "Guesses left:" + btnguessed;
            }
            if (word[0]=="h"){
              document.getElementById(space0.innerHTML="h");
            }
            if (word[1]=="h"){
              document.getElementById(space1.innerHTML="h");
            }
            if (word[2]=="h"){
              document.getElementById(space2.innerHTML="h");
            }
            if (word[3]=="h"){
              document.getElementById(space3.innerHTML="h");
            }
            if (word[4]=="h"){
              document.getElementById(space4.innerHTML="h");
            }
            if (word[5]=="h"){
              document.getElementById(space5.innerHTML="h");
            }
            if (word[6]=="h"){
              document.getElementById(space6.innerHTML="h");
            }
            if (word[7]=="h"){
              document.getElementById(space7.innerHTML="h");
            }
            if (word[8]=="h"){
              document.getElementById(space8.innerHTML="h");
            }
            if (word[9]=="h"){
              document.getElementById(space9.innerHTML="h");
            }
            if (word[10]=="h"){
              document.getElementById(space10.innerHTML="h");
            }
            if (word[11]=="h"){
              document.getElementById(space11.innerHTML="h");
            }
            if (word[12]=="h"){
              document.getElementById(space12.innerHTML="h");
            }
            if (word[13]=="h"){
              document.getElementById(space13.innerHTML="h");
            }
            if (word[14]=="h"){
              document.getElementById(space14.innerHTML="h");
            }
            if (word[15]=="h"){
              document.getElementById(space15.innerHTML="h");
            }
            if (btnguessed == 0){
              alert("You have no geusses left.")
              guessWord()
            }
            imageChange()
            letterH.remove()
          }
          var letterI = document.createElement("button");
          document.body.appendChild(letterI)
          letterI.id ="letterI"
          letterI.innerHTML = "I"
          letterI.addEventListener("click", letterIFnc)
          function letterIFnc(){
            if(document.getElementById("letterI").clicked = true &&btnguessed>0){
              btnguessed = btnguessed - 1;
              guesscalc.innerHTML = "Guesses left:" + btnguessed;
            }
            if (word[0]=="i"){
              document.getElementById(space0.innerHTML="i");
            }
            if (word[1]=="i"){
              document.getElementById(space1.innerHTML="i");
            }
            if (word[2]=="i"){
              document.getElementById(space2.innerHTML="i");
            }
            if (word[3]=="i"){
              document.getElementById(space3.innerHTML="i");
            }
            if (word[4]=="i"){
              document.getElementById(space4.innerHTML="i");
            }
            if (word[5]=="i"){
              document.getElementById(space5.innerHTML="i");
            }
            if (word[6]=="i"){
              document.getElementById(space6.innerHTML="i");
            }
            if (word[7]=="i"){
              document.getElementById(space7.innerHTML="i");
            }
            if (word[8]=="i"){
              document.getElementById(space8.innerHTML="i");
            }
            if (word[9]=="i"){
              document.getElementById(space9.innerHTML="i");
            }
            if (word[10]=="i"){
              document.getElementById(space10.innerHTML="i");
            }
            if (word[11]=="i"){
              document.getElementById(space11.innerHTML="i");
            }
            if (word[12]=="i"){
              document.getElementById(space12.innerHTML="i");
            }
            if (word[13]=="i"){
              document.getElementById(space13.innerHTML="i");
            }
            if (word[14]=="i"){
              document.getElementById(space14.innerHTML="i");
            }
            if (word[15]=="i"){
              document.getElementById(space15.innerHTML="i");
            }
            if (btnguessed == 0){
              alert("You have no geusses left.")
              guessWord()
            }
            imageChange()
            letterI.remove()
          }
          var letterJ = document.createElement("button");
          document.body.appendChild(letterJ)
          letterJ.id ="letterJ"
          letterJ.innerHTML = "J"
          letterJ.addEventListener("click", letterJFnc)
          function letterJFnc(){
            if(document.getElementById("letterJ").clicked = true &&btnguessed>0){
              btnguessed = btnguessed - 1;
              guesscalc.innerHTML = "Guesses left:" + btnguessed;
            }
            if (word[0]=="j"){
              document.getElementById(space0.innerHTML="j");
            }
            if (word[1]=="j"){
              document.getElementById(space1.innerHTML="j");
            }
            if (word[2]=="j"){
              document.getElementById(space2.innerHTML="j");
            }
            if (word[3]=="j"){
              document.getElementById(space3.innerHTML="j");
            }
            if (word[4]=="j"){
              document.getElementById(space4.innerHTML="j");
            }
            if (word[5]=="j"){
              document.getElementById(space5.innerHTML="j");
            }
            if (word[6]=="j"){
              document.getElementById(space6.innerHTML="j");
            }
            if (word[7]=="j"){
              document.getElementById(space7.innerHTML="j");
            }
            if (word[8]=="j"){
              document.getElementById(space8.innerHTML="j");
            }
            if (word[9]=="j"){
              document.getElementById(space9.innerHTML="j");
            }
            if (word[10]=="j"){
              document.getElementById(space10.innerHTML="j");
            }
            if (word[11]=="j"){
              document.getElementById(space11.innerHTML="j");
            }
            if (word[12]=="j"){
              document.getElementById(space12.innerHTML="j");
            }
            if (word[13]=="j"){
              document.getElementById(space13.innerHTML="j");
            }
            if (word[14]=="j"){
              document.getElementById(space14.innerHTML="j");
            }
            if (word[15]=="j"){
              document.getElementById(space15.innerHTML="j");
            }
            if (btnguessed == 0){
              alert("You have no geusses left.")
              guessWord()
            }
            imageChange()
            letterJ.remove()
          }
          var letterK = document.createElement("button");
          document.body.appendChild(letterK)
          letterK.id ="letterK"
          letterK.innerHTML = "K"
          letterK.addEventListener("click", letterKFnc)
          function letterKFnc(){
            if(document.getElementById("letterK").clicked = true && btnguessed>0){
              btnguessed = btnguessed - 1;
              guesscalc.innerHTML = "Guesses left:" + btnguessed;
            }
            if (word[0]=="k"){
              document.getElementById(space0.innerHTML="k");
            }
            if (word[1]=="k"){
              document.getElementById(space1.innerHTML="k");
            }
            if (word[2]=="k"){
              document.getElementById(space2.innerHTML="k");
            }
            if (word[3]=="k"){
              document.getElementById(space3.innerHTML="k");
            }
            if (word[4]=="k"){
              document.getElementById(space4.innerHTML="k");
            }
            if (word[5]=="k"){
              document.getElementById(space5.innerHTML="k");
            }
            if (word[6]=="k"){
              document.getElementById(space6.innerHTML="k");
            }
            if (word[7]=="k"){
              document.getElementById(space7.innerHTML="k");
            }
            if (word[8]=="k"){
              document.getElementById(space8.innerHTML="k");
            }
            if (word[9]=="k"){
              document.getElementById(space9.innerHTML="k");
            }
            if (word[10]=="k"){
              document.getElementById(space10.innerHTML="k");
            }
            if (word[11]=="k"){
              document.getElementById(space11.innerHTML="k");
            }
            if (word[12]=="k"){
              document.getElementById(space12.innerHTML="k");
            }
            if (word[13]=="k"){
              document.getElementById(space13.innerHTML="k");
            }
            if (word[14]=="k"){
              document.getElementById(space14.innerHTML="k");
            }
            if (word[15]=="k"){
              document.getElementById(space15.innerHTML="k");
            }
            if (btnguessed == 0){
              alert("You have no geusses left.")
              guessWord()
            }
            imageChange()
            letterK.remove()
          }
          var letterL = document.createElement("button");
          document.body.appendChild(letterL)
          letterL.id ="letterL"
          letterL.innerHTML = "L"
          letterL.addEventListener("click", letterLFnc)
          function letterLFnc(){
            if(document.getElementById("letterL").clicked = true &&btnguessed>0){
              btnguessed = btnguessed - 1;
              guesscalc.innerHTML = "Guesses left:" + btnguessed;
            }
            if (word[0]=="l"){
              document.getElementById(space0.innerHTML="l");
            }
            if (word[1]=="l"){
              document.getElementById(space1.innerHTML="l");
            }
            if (word[2]=="l"){
              document.getElementById(space2.innerHTML="l");
            }
            if (word[3]=="l"){
              document.getElementById(space3.innerHTML="l");
            }
            if (word[4]=="l"){
              document.getElementById(space4.innerHTML="l");
            }
            if (word[5]=="l"){
              document.getElementById(space5.innerHTML="l");
            }
            if (word[6]=="l"){
              document.getElementById(space6.innerHTML="l");
            }
            if (word[7]=="l"){
              document.getElementById(space7.innerHTML="l");
            }
            if (word[8]=="l"){
              document.getElementById(space8.innerHTML="l");
            }
            if (word[9]=="l"){
              document.getElementById(space9.innerHTML="l");
            }
            if (word[10]=="l"){
              document.getElementById(space10.innerHTML="l");
            }
            if (word[11]=="l"){
              document.getElementById(space11.innerHTML="l");
            }
            if (word[12]=="l"){
              document.getElementById(space12.innerHTML="l");
            }
            if (word[13]=="l"){
              document.getElementById(space13.innerHTML="l");
            }
            if (word[14]=="l"){
              document.getElementById(space14.innerHTML="l");
            }
            if (word[15]=="l"){
              document.getElementById(space15.innerHTML="l");
            }
            if (btnguessed == 0){
              alert("You have no geusses left.")
              guessWord()
            }
            imageChange()
            letterL.remove()
          }
          var letterM = document.createElement("button");
          document.body.appendChild(letterM)
          letterM.id ="letterM"
          letterM.innerHTML = "M"
          letterM.addEventListener("click", letterMFnc)
          function letterMFnc(){
            if(document.getElementById("letterM").clicked = true &&btnguessed>0){
              btnguessed = btnguessed - 1;
              guesscalc.innerHTML = "Guesses left:" + btnguessed;
            }
            if (word[0]=="m"){
              document.getElementById(space0.innerHTML="m");
            }
            if (word[1]=="m"){
              document.getElementById(space1.innerHTML="m");
            }
            if (word[2]=="m"){
              document.getElementById(space2.innerHTML="m");
            }
            if (word[3]=="m"){
              document.getElementById(space3.innerHTML="m");
            }
            if (word[4]=="m"){
              document.getElementById(space4.innerHTML="m");
            }
            if (word[5]=="m"){
              document.getElementById(space5.innerHTML="m");
            }
            if (word[6]=="m"){
              document.getElementById(space6.innerHTML="m");
            }
            if (word[7]=="m"){
              document.getElementById(space7.innerHTML="m");
            }
            if (word[8]=="m"){
              document.getElementById(space8.innerHTML="m");
            }
            if (word[9]=="m"){
              document.getElementById(space9.innerHTML="m");
            }
            if (word[10]=="m"){
              document.getElementById(space10.innerHTML="m");
            }
            if (word[11]=="m"){
              document.getElementById(space11.innerHTML="m");
            }
            if (word[12]=="m"){
              document.getElementById(space12.innerHTML="m");
            }
            if (word[13]=="m"){
              document.getElementById(space13.innerHTML="m");
            }
            if (word[14]=="m"){
              document.getElementById(space14.innerHTML="m");
            }
            if (word[15]=="m"){
              document.getElementById(space15.innerHTML="m");
            }
            if (btnguessed == 0){
              alert("You have no geusses left.")
              guessWord()
            }
            imageChange()
            letterM.remove()
          }
          var letterN = document.createElement("button");
          document.body.appendChild(letterN)
          letterN.id ="letterN"
          letterN.innerHTML = "N"
          letterN.addEventListener("click", letterNFnc)
          function letterNFnc(){
            if(document.getElementById("letterN").clicked = true &&btnguessed>0){
              btnguessed = btnguessed - 1;
              guesscalc.innerHTML = "Guesses left:" + btnguessed;
            }
            if (word[0]=="n"){
              document.getElementById(space0.innerHTML="n");
            }
            if (word[1]=="n"){
              document.getElementById(space1.innerHTML="n");
            }
            if (word[2]=="n"){
              document.getElementById(space2.innerHTML="n");
            }
            if (word[3]=="n"){
              document.getElementById(space3.innerHTML="n");
            }
            if (word[4]=="n"){
              document.getElementById(space4.innerHTML="n");
            }
            if (word[5]=="n"){
              document.getElementById(space5.innerHTML="n");
            }
            if (word[6]=="n"){
              document.getElementById(space6.innerHTML="n");
            }
            if (word[7]=="n"){
              document.getElementById(space7.innerHTML="n");
            }
            if (word[8]=="n"){
              document.getElementById(space8.innerHTML="n");
            }
            if (word[9]=="n"){
              document.getElementById(space9.innerHTML="n");
            }
            if (word[10]=="n"){
              document.getElementById(space10.innerHTML="n");
            }
            if (word[11]=="n"){
              document.getElementById(space11.innerHTML="n");
            }
            if (word[12]=="n"){
              document.getElementById(space12.innerHTML="n");
            }
            if (word[13]=="n"){
              document.getElementById(space13.innerHTML="n");
            }
            if (word[14]=="n"){
              document.getElementById(space14.innerHTML="n");
            }
            if (word[15]=="n"){
              document.getElementById(space15.innerHTML="n");
            }
            if (btnguessed == 0){
              alert("You have no guesses left.")
              guessWord()
            }
            imageChange()
            letterN.remove()
          }
          var letterO = document.createElement("button");
          document.body.appendChild(letterO)
          letterO.id ="letterO"
          letterO.innerHTML = "O"
          letterO.addEventListener("click", letterOFnc)
          function letterOFnc(){
            if(document.getElementById("letterO").clicked = true &&btnguessed>0){
              btnguessed = btnguessed - 1;
              guesscalc.innerHTML = "Guesses left:" + btnguessed;
            }
            if (word[0]=="o"){
              document.getElementById(space0.innerHTML="o");
            }
            if (word[1]=="o"){
              document.getElementById(space1.innerHTML="o");
            }
            if (word[2]=="o"){
              document.getElementById(space2.innerHTML="o");
            }
            if (word[3]=="o"){
              document.getElementById(space3.innerHTML="o");
            }
            if (word[4]=="o"){
              document.getElementById(space4.innerHTML="o");
            }
            if (word[5]=="o"){
              document.getElementById(space5.innerHTML="o");
            }
            if (word[6]=="o"){
              document.getElementById(space6.innerHTML="o");
            }
            if (word[7]=="o"){
              document.getElementById(space7.innerHTML="o");
            }
            if (word[8]=="o"){
              document.getElementById(space8.innerHTML="o");
            }
            if (word[9]=="o"){
              document.getElementById(space9.innerHTML="o");
            }
            if (word[10]=="o"){
              document.getElementById(space10.innerHTML="o");
            }
            if (word[11]=="o"){
              document.getElementById(space11.innerHTML="o");
            }
            if (word[12]=="o"){
              document.getElementById(space12.innerHTML="o");
            }
            if (word[13]=="o"){
              document.getElementById(space13.innerHTML="o");
            }
            if (word[14]=="o"){
              document.getElementById(space14.innerHTML="o");
            }
            if (word[15]=="o"){
              document.getElementById(space15.innerHTML="o");
            }
            if (btnguessed == 0){
              alert("You have no guesses left.")
              guessWord()
            }
            imageChange()
            letterO.remove()
          }
          var letterP = document.createElement("button");
          document.body.appendChild(letterP)
          letterP.id ="letterP"
          letterP.innerHTML = "P"
          letterP.addEventListener("click", letterPFnc)
          function letterPFnc(){
            if(document.getElementById("letterP").clicked = true &&btnguessed>0){
              btnguessed = btnguessed - 1;
              guesscalc.innerHTML = "Guesses left:" + btnguessed;
            }
            if (word[0]=="p"){
              document.getElementById(space0.innerHTML="p");
            }
            if (word[1]=="p"){
              document.getElementById(space1.innerHTML="p");
            }
            if (word[2]=="p"){
              document.getElementById(space2.innerHTML="p");
            }
            if (word[3]=="p"){
              document.getElementById(space3.innerHTML="p");
            }
            if (word[4]=="p"){
              document.getElementById(space4.innerHTML="p");
            }
            if (word[5]=="p"){
              document.getElementById(space5.innerHTML="p");
            }
            if (word[6]=="p"){
              document.getElementById(space6.innerHTML="p");
            }
            if (word[7]=="p"){
              document.getElementById(space7.innerHTML="p");
            }
            if (word[8]=="p"){
              document.getElementById(space8.innerHTML="p");
            }
            if (word[9]=="p"){
              document.getElementById(space9.innerHTML="p");
            }
            if (word[10]=="p"){
              document.getElementById(space10.innerHTML="p");
            }
            if (word[11]=="p"){
              document.getElementById(space11.innerHTML="p");
            }
            if (word[12]=="p"){
              document.getElementById(space12.innerHTML="p");
            }
            if (word[13]=="p"){
              document.getElementById(space13.innerHTML="p");
            }
            if (word[14]=="p"){
              document.getElementById(space14.innerHTML="p");
            }
            if (word[15]=="p"){
              document.getElementById(space15.innerHTML="p");
            }
            if (btnguessed == 0){
              alert("You have no guesses left.")
              guessWord()
            }
            imageChange()
            letterP.remove()
          }
          var letterQ = document.createElement("button");
          document.body.appendChild(letterQ)
          letterQ.id ="letterQ"
          letterQ.innerHTML = "Q"
          letterQ.addEventListener("click", letterQFnc)
          function letterQFnc(){
            if(document.getElementById("letterQ").clicked = true &&btnguessed>0){
              btnguessed = btnguessed - 1;
              guesscalc.innerHTML = "Guesses left:" + btnguessed;
            }
            if (word[0]=="q"){
              document.getElementById(space0.innerHTML="q");
            }
            if (word[1]=="q"){
              document.getElementById(space1.innerHTML="q");
            }
            if (word[2]=="q"){
              document.getElementById(space2.innerHTML="q");
            }
            if (word[3]=="q"){
              document.getElementById(space3.innerHTML="q");
            }
            if (word[4]=="q"){
              document.getElementById(space4.innerHTML="q");
            }
            if (word[5]=="q"){
              document.getElementById(space5.innerHTML="q");
            }
            if (word[6]=="q"){
              document.getElementById(space6.innerHTML="q");
            }
            if (word[7]=="q"){
              document.getElementById(space7.innerHTML="q");
            }
            if (word[8]=="q"){
              document.getElementById(space8.innerHTML="q");
            }
            if (word[9]=="q"){
              document.getElementById(space9.innerHTML="q");
            }
            if (word[10]=="q"){
              document.getElementById(space10.innerHTML="q");
            }
            if (word[11]=="q"){
              document.getElementById(space11.innerHTML="q");
            }
            if (word[12]=="q"){
              document.getElementById(space12.innerHTML="q");
            }
            if (word[13]=="q"){
              document.getElementById(space13.innerHTML="q");
            }
            if (word[14]=="q"){
              document.getElementById(space14.innerHTML="q");
            }
            if (word[15]=="q"){
              document.getElementById(space15.innerHTML="q");
            }
            if (btnguessed == 0){
              alert("You have no guesses left.")
              guessWord()
            }
            imageChange()
            letterQ.remove()
          }
          var letterR = document.createElement("button");
          document.body.appendChild(letterR)
          letterR.id ="letterR"
          letterR.innerHTML = "R"
          letterR.addEventListener("click", letterRFnc)
          function letterRFnc(){
            if(document.getElementById("letterR").clicked = true &&btnguessed>0){
              btnguessed = btnguessed - 1;
              guesscalc.innerHTML = "Guesses left:" + btnguessed;
            }
            if (word[0]=="r"){
              document.getElementById(space0.innerHTML="r");
            }
            if (word[1]=="r"){
              document.getElementById(space1.innerHTML="r");
            }
            if (word[2]=="r"){
              document.getElementById(space2.innerHTML="r");
            }
            if (word[3]=="r"){
              document.getElementById(space3.innerHTML="r");
            }
            if (word[4]=="r"){
              document.getElementById(space4.innerHTML="r");
            }
            if (word[5]=="r"){
              document.getElementById(space5.innerHTML="r");
            }
            if (word[6]=="r"){
              document.getElementById(space6.innerHTML="r");
            }
            if (word[7]=="r"){
              document.getElementById(space7.innerHTML="r");
            }
            if (word[8]=="r"){
              document.getElementById(space8.innerHTML="r");
            }
            if (word[9]=="r"){
              document.getElementById(space9.innerHTML="r");
            }
            if (word[10]=="r"){
              document.getElementById(space10.innerHTML="r");
            }
            if (word[11]=="r"){
              document.getElementById(space11.innerHTML="r");
            }
            if (word[12]=="r"){
              document.getElementById(space12.innerHTML="r");
            }
            if (word[13]=="r"){
              document.getElementById(space13.innerHTML="r");
            }
            if (word[14]=="r"){
              document.getElementById(space14.innerHTML="r");
            }
            if (word[15]=="r"){
              document.getElementById(space15.innerHTML="r");
            }
            if (btnguessed == 0){
              alert("You have no guesses left.")
              guessWord()
            }
            imageChange()
            letterR.remove()
          }
          var letterS = document.createElement("button");
          document.body.appendChild(letterS)
          letterS.id ="letterS"
          letterS.innerHTML = "S"
          letterS.addEventListener("click", letterSFnc)
          function letterSFnc(){
            if(document.getElementById("letterS").clicked = true &&btnguessed>0){
              btnguessed = btnguessed - 1;
              guesscalc.innerHTML = "Guesses left:" + btnguessed;
            }
            if (word[0]=="s"){
              document.getElementById(space0.innerHTML="s");
            }
            if (word[1]=="s"){
              document.getElementById(space1.innerHTML="s");
            }
            if (word[2]=="s"){
              document.getElementById(space2.innerHTML="s");
            }
            if (word[3]=="s"){
              document.getElementById(space3.innerHTML="s");
            }
            if (word[4]=="s"){
              document.getElementById(space4.innerHTML="s");
            }
            if (word[5]=="s"){
              document.getElementById(space5.innerHTML="s");
            }
            if (word[6]=="s"){
              document.getElementById(space6.innerHTML="s");
            }
            if (word[7]=="s"){
              document.getElementById(space7.innerHTML="s");
            }
            if (word[8]=="s"){
              document.getElementById(space8.innerHTML="s");
            }
            if (word[9]=="s"){
              document.getElementById(space9.innerHTML="s");
            }
            if (word[10]=="s"){
              document.getElementById(space10.innerHTML="s");
            }
            if (word[11]=="s"){
              document.getElementById(space11.innerHTML="s");
            }
            if (word[12]=="s"){
              document.getElementById(space12.innerHTML="s");
            }
            if (word[13]=="s"){
              document.getElementById(space13.innerHTML="s");
            }
            if (word[14]=="s"){
              document.getElementById(space14.innerHTML="s");
            }
            if (word[15]=="s"){
              document.getElementById(space15.innerHTML="s");
            }
            if (btnguessed == 0){
              alert("You have no guesses left.")
              guessWord()
            }
            imageChange()
            letterS.remove()
          }
          var letterT = document.createElement("button");
          document.body.appendChild(letterT)
          letterT.id ="letterT"
          letterT.innerHTML = "T"
          letterT.addEventListener("click", letterTFnc)
          function letterTFnc(){
            if(document.getElementById("letterT").clicked = true &&btnguessed>0){
              btnguessed = btnguessed - 1;
              guesscalc.innerHTML = "Guesses left:" + btnguessed;
            }
            if (word[0]=="t"){
              document.getElementById(space0.innerHTML="t");
            }
            if (word[1]=="t"){
              document.getElementById(space1.innerHTML="t");
            }
            if (word[2]=="t"){
              document.getElementById(space2.innerHTML="t");
            }
            if (word[3]=="t"){
              document.getElementById(space3.innerHTML="t");
            }
            if (word[4]=="t"){
              document.getElementById(space4.innerHTML="t");
            }
            if (word[5]=="t"){
              document.getElementById(space5.innerHTML="t");
            }
            if (word[6]=="t"){
              document.getElementById(space6.innerHTML="t");
            }
            if (word[7]=="t"){
              document.getElementById(space7.innerHTML="t");
            }
            if (word[8]=="t"){
              document.getElementById(space8.innerHTML="t");
            }
            if (word[9]=="t"){
              document.getElementById(space9.innerHTML="t");
            }
            if (word[10]=="t"){
              document.getElementById(space10.innerHTML="t");
            }
            if (word[11]=="t"){
              document.getElementById(space11.innerHTML="t");
            }
            if (word[12]=="t"){
              document.getElementById(space12.innerHTML="t");
            }
            if (word[13]=="t"){
              document.getElementById(space13.innerHTML="t");
            }
            if (word[14]=="t"){
              document.getElementById(space14.innerHTML="t");
            }
            if (word[15]=="t"){
              document.getElementById(space15.innerHTML="t");
            }
            if (btnguessed == 0){
              alert("You have no guesses left.")
              guessWord()
            }
            imageChange()
            letterT.remove()
          }
          var letterU = document.createElement("button");
          document.body.appendChild(letterU)
          letterU.id ="letterU"
          letterU.innerHTML = "U"
          letterU.addEventListener("click", letterUFnc)
          function letterUFnc(){
            if(document.getElementById("letterU").clicked = true &&btnguessed>0){
              btnguessed = btnguessed - 1;
              guesscalc.innerHTML = "Guesses left:" + btnguessed;
            }
            if (word[0]=="u"){
              document.getElementById(space0.innerHTML="u");
            }
            if (word[1]=="u"){
              document.getElementById(space1.innerHTML="u");
            }
            if (word[2]=="u"){
              document.getElementById(space2.innerHTML="u");
            }
            if (word[3]=="u"){
              document.getElementById(space3.innerHTML="u");
            }
            if (word[4]=="u"){
              document.getElementById(space4.innerHTML="u");
            }
            if (word[5]=="u"){
              document.getElementById(space5.innerHTML="u");
            }
            if (word[6]=="u"){
              document.getElementById(space6.innerHTML="u");
            }
            if (word[7]=="u"){
              document.getElementById(space7.innerHTML="u");
            }
            if (word[8]=="u"){
              document.getElementById(space8.innerHTML="u");
            }
            if (word[9]=="u"){
              document.getElementById(space9.innerHTML="u");
            }
            if (word[10]=="u"){
              document.getElementById(space10.innerHTML="u");
            }
            if (word[11]=="u"){
              document.getElementById(space11.innerHTML="u");
            }
            if (word[12]=="u"){
              document.getElementById(space12.innerHTML="u");
            }
            if (word[13]=="u"){
              document.getElementById(space13.innerHTML="u");
            }
            if (word[14]=="u"){
              document.getElementById(space14.innerHTML="u");
            }
            if (word[15]=="u"){
              document.getElementById(space15.innerHTML="u");
            }
            if (btnguessed == 0){
              alert("You have no guesses left.")
              guessWord()
            }
            imageChange()
            letterU.remove()
          }
          var letterV = document.createElement("button");
          document.body.appendChild(letterV)
          letterV.id ="letterV"
          letterV.innerHTML = "V"
          letterV.addEventListener("click", letterVFnc)
          function letterVFnc(){
            if(document.getElementById("letterV").clicked = true &&btnguessed>0){
              btnguessed = btnguessed - 1;
              guesscalc.innerHTML = "Guesses left:" + btnguessed;
            }
            if (word[0]=="v"){
              document.getElementById(space0.innerHTML="v");
            }
            if (word[1]=="v"){
              document.getElementById(space1.innerHTML="v");
            }
            if (word[2]=="v"){
              document.getElementById(space2.innerHTML="v");
            }
            if (word[3]=="v"){
              document.getElementById(space3.innerHTML="v");
            }
            if (word[4]=="v"){
              document.getElementById(space4.innerHTML="v");
            }
            if (word[5]=="v"){
              document.getElementById(space5.innerHTML="v");
            }
            if (word[6]=="v"){
              document.getElementById(space6.innerHTML="v");
            }
            if (word[7]=="v"){
              document.getElementById(space7.innerHTML="v");
            }
            if (word[8]=="v"){
              document.getElementById(space8.innerHTML="v");
            }
            if (word[9]=="v"){
              document.getElementById(space9.innerHTML="v");
            }
            if (word[10]=="v"){
              document.getElementById(space10.innerHTML="v");
            }
            if (word[11]=="v"){
              document.getElementById(space11.innerHTML="v");
            }
            if (word[12]=="v"){
              document.getElementById(space12.innerHTML="v");
            }
            if (word[13]=="v"){
              document.getElementById(space13.innerHTML="v");
            }
            if (word[14]=="v"){
              document.getElementById(space14.innerHTML="v");
            }
            if (word[15]=="v"){
              document.getElementById(space15.innerHTML="v");
            }
            if (btnguessed == 0){
              alert("You have no guesses left.")
              guessWord()
            }
            imageChange()
            letterV.remove()
          }
          var letterW = document.createElement("button");
          document.body.appendChild(letterW)
          letterW.id ="letterW"
          letterW.innerHTML = "W"
          letterW.addEventListener("click", letterWFnc)
          function letterWFnc(){
            if(document.getElementById("letterW").clicked = true &&btnguessed>0){
              btnguessed = btnguessed - 1;
              guesscalc.innerHTML = "Guesses left:" + btnguessed;
            }
            if (word[0]=="w"){
              document.getElementById(space0.innerHTML="w");
            }
            if (word[1]=="w"){
              document.getElementById(space1.innerHTML="w");
            }
            if (word[2]=="w"){
              document.getElementById(space2.innerHTML="w");
            }
            if (word[3]=="w"){
              document.getElementById(space3.innerHTML="w");
            }
            if (word[4]=="w"){
              document.getElementById(space4.innerHTML="w");
            }
            if (word[5]=="w"){
              document.getElementById(space5.innerHTML="w");
            }
            if (word[6]=="w"){
              document.getElementById(space6.innerHTML="w");
            }
            if (word[7]=="w"){
              document.getElementById(space7.innerHTML="w");
            }
            if (word[8]=="w"){
              document.getElementById(space8.innerHTML="w");
            }
            if (word[9]=="w"){
              document.getElementById(space9.innerHTML="w");
            }
            if (word[10]=="w"){
              document.getElementById(space10.innerHTML="w");
            }
            if (word[11]=="w"){
              document.getElementById(space11.innerHTML="w");
            }
            if (word[12]=="w"){
              document.getElementById(space12.innerHTML="w");
            }
            if (word[13]=="w"){
              document.getElementById(space13.innerHTML="w");
            }
            if (word[14]=="w"){
              document.getElementById(space14.innerHTML="w");
            }
            if (word[15]=="w"){
              document.getElementById(space15.innerHTML="w");
            }
            if (btnguessed == 0){
              alert("You have no guesses left.")
              guessWord()
            }
            imageChange()
            letterW.remove()
          }
          var letterX = document.createElement("button");
          document.body.appendChild(letterX)
          letterX.id ="letterX"
          letterX.innerHTML = "X"
          letterX.addEventListener("click", letterXFnc)
          function letterXFnc(){
            if(document.getElementById("letterX").clicked = true &&btnguessed>0){
              btnguessed = btnguessed - 1;
              guesscalc.innerHTML = "Guesses left:" + btnguessed;
            }
            if (word[0]=="x"){
              document.getElementById(space0.innerHTML="h");
            }
            if (word[1]=="x"){
              document.getElementById(space1.innerHTML="x");
            }
            if (word[2]=="x"){
              document.getElementById(space2.innerHTML="x");
            }
            if (word[3]=="x"){
              document.getElementById(space3.innerHTML="x");
            }
            if (word[4]=="x"){
              document.getElementById(space4.innerHTML="x");
            }
            if (word[5]=="x"){
              document.getElementById(space5.innerHTML="x");
            }
            if (word[6]=="x"){
              document.getElementById(space6.innerHTML="x");
            }
            if (word[7]=="x"){
              document.getElementById(space7.innerHTML="x");
            }
            if (word[8]=="x"){
              document.getElementById(space8.innerHTML="x");
            }
            if (word[9]=="x"){
              document.getElementById(space9.innerHTML="x");
            }
            if (word[10]=="x"){
              document.getElementById(space10.innerHTML="x");
            }
            if (word[11]=="x"){
              document.getElementById(space11.innerHTML="x");
            }
            if (word[12]=="x"){
              document.getElementById(space12.innerHTML="x");
            }
            if (word[13]=="x"){
              document.getElementById(space13.innerHTML="x");
            }
            if (word[14]=="x"){
              document.getElementById(space14.innerHTML="x");
            }
            if (word[15]=="x"){
              document.getElementById(space15.innerHTML="x");
            }
            if (btnguessed == 0){
              alert("You have no guesses left.")
              guessWord()
            }
            imageChange()
            letterX.remove()
          }
          var letterY = document.createElement("button");
          document.body.appendChild(letterY)
          letterY.id ="letterY"
          letterY.innerHTML = "Y"
          letterY.addEventListener("click", letterYFnc)
          function letterYFnc(){
            if(document.getElementById("letterY").clicked = true &&btnguessed>0){
              btnguessed = btnguessed - 1;
              guesscalc.innerHTML = "Guesses left:" + btnguessed;
            }
            if (word[0]=="y"){
              document.getElementById(space0.innerHTML="y");
            }
            if (word[1]=="y"){
              document.getElementById(space1.innerHTML="y");
            }
            if (word[2]=="y"){
              document.getElementById(space2.innerHTML="y");
            }
            if (word[3]=="y"){
              document.getElementById(space3.innerHTML="y");
            }
            if (word[4]=="y"){
              document.getElementById(space4.innerHTML="y");
            }
            if (word[5]=="y"){
              document.getElementById(space5.innerHTML="y");
            }
            if (word[6]=="y"){
              document.getElementById(space6.innerHTML="y");
            }
            if (word[7]=="y"){
              document.getElementById(space7.innerHTML="y");
            }
            if (word[8]=="y"){
              document.getElementById(space8.innerHTML="y");
            }
            if (word[9]=="y"){
              document.getElementById(space9.innerHTML="y");
            }
            if (word[10]=="y"){
              document.getElementById(space10.innerHTML="y");
            }
            if (word[11]=="y"){
              document.getElementById(space11.innerHTML="y");
            }
            if (word[12]=="y"){
              document.getElementById(space12.innerHTML="y");
            }
            if (word[13]=="y"){
              document.getElementById(space13.innerHTML="y");
            }
            if (word[14]=="y"){
              document.getElementById(space14.innerHTML="y");
            }
            if (word[15]=="y"){
              document.getElementById(space15.innerHTML="y");
            }
            if (btnguessed == 0){
              alert("You have no guesses left.")
              guessWord()
            }
            imageChange()
            letterY.remove()
          }
          var letterZ = document.createElement("button");
          document.body.appendChild(letterZ)
          letterZ.id ="letterZ"
          letterZ.innerHTML = "Z"
          letterZ.addEventListener("click", letterZFnc)
          function letterZFnc(){
            if(document.getElementById("letterZ").clicked = true &&btnguessed>0){
              btnguessed = btnguessed - 1;
              guesscalc.innerHTML = "Guesses left:" + btnguessed;
            }
            if (word[0]=="z"){
              document.getElementById(space0.innerHTML="z");
            }
            if (word[1]=="z"){
              document.getElementById(space1.innerHTML="z");
            }
            if (word[2]=="z"){
              document.getElementById(space2.innerHTML="z");
            }
            if (word[3]=="z"){
              document.getElementById(space3.innerHTML="z");
            }
            if (word[4]=="z"){
              document.getElementById(space4.innerHTML="z");
            }
            if (word[5]=="z"){
              document.getElementById(space5.innerHTML="z");
            }
            if (word[6]=="z"){
              document.getElementById(space6.innerHTML="z");
            }
            if (word[7]=="z"){
              document.getElementById(space7.innerHTML="z");
            }
            if (word[8]=="z"){
              document.getElementById(space8.innerHTML="z");
            }
            if (word[9]=="z"){
              document.getElementById(space9.innerHTML="z");
            }
            if (word[10]=="z"){
              document.getElementById(space10.innerHTML="z");
            }
            if (word[11]=="z"){
              document.getElementById(space11.innerHTML="z");
            }
            if (word[12]=="z"){
              document.getElementById(space12.innerHTML="z");
            }
            if (word[13]=="z"){
              document.getElementById(space13.innerHTML="z");
            }
            if (word[14]=="z"){
              document.getElementById(space14.innerHTML="z");
            }
            if (word[15]=="z"){
              document.getElementById(space15.innerHTML="z");
            }
            if (btnguessed == 0){
              alert("You have no guesses left.")
              guessWord()
            }
            imageChange()
            letterZ.remove()
          }
          
          function loser(){
            guessWordBtn.remove()
            hint.remove();//because its on top
            var loserBackground = document.createElement("h2");
            document.body.appendChild(loserBackground);
            loserBackground.id = "loserBackground"
            var loserCard = document.createElement("h1");
            document.body.appendChild(loserCard);
            loserCard.id = "loserCard"
            loserCard.innerHTML = "YOU LOST"
            var correctWord = document.createElement("h1");
            document.body.appendChild(correctWord);
            correctWord.id = "correctWord"
            correctWord.innerHTML = "The word was: "+ word
            var replayBtn = document.createElement("button")
            document.body.appendChild(replayBtn);
            replayBtn.id="replayBtn"
            replayBtn.innerHTML = "PLAY AGAIN"
            replayBtn.className = "waves-effect waves-light btn-large" //Materialise thing again
            replayBtn.addEventListener("click", function(){
              setTimeout(replay, 450)
            })
            function replay(){
              location.reload()//I searched up how to reload a page
            }
  
            //Tried getting rid of the body but then I cant create new elements so I have to do all this
            //I also tried appending a new body element to html but that didnt work
            //I did everything below but then realised that I could make loser have a rly big border so it all appears gone
            // letterA.remove()
            // letterB.remove()
            // letterC.remove()
            // letterD.remove()
            // letterE.remove()
            // letterF.remove()
            // letterG.remove()
            // letterH.remove()
            // letterI.remove()
            // letterJ.remove()
            // letterK.remove()
            // letterL.remove()
            // letterM.remove()
            // letterN.remove()
            // letterO.remove()
            // letterP.remove()
            // letterQ.remove()
            // letterR.remove()
            // letterS.remove()
            // letterT.remove()
            // letterU.remove()
            // letterV.remove()
            // letterW.remove()
            // letterX.remove()
            // letterY.remove()
            // letterZ.remove()
            // hint.remove()
            // guesscalc.remove()
            //     for (i = 0; i < word.length; i++) {
            //       spaces+i.remove()
            // }
            }    



        }
}
