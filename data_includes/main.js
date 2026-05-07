PennController.ResetPrefix(null)

DebugOff()

SetCounter("inc")
     

function thickUnderline(text) {
    return text.replace(
        /<u>(.*?)<\/u>/g, 
        '<span style="border-bottom: 3px solid black; display: inline-block; padding-bottom: 2px;">$1</span>'
    );
}
// Generates random number assigned to participants
var randomCode = Math.random().toString(36).substr(2,9)
// A message to show to participants at completion (useful for confirmation, raffle entry, etc.)
var completionMessage = "Thank you for your participation. You may close the window now."

// Assign ID
Header(
    newVar("ID").global()    
)
.log( "id" , getVar("ID")) // Add the ID to all trials' results lines
      

// Set the order of the elements of experiment and randomize experimental items
var shuffleSequence = seq(
    "Intro-1",
    "Consent",
    "Intro-2",
    "Intro-2b",
    "Intro-2c",
    "Intro-3",
    "practice",
    "Intro-4",
    randomize("experiment-trial"),
    "post-experiment-questions",
    "send",
    "Outro"
);
   
// Consent
newTrial("Consent",
    defaultText
    .css("font-family", "Helvetica, sans-serif")    
    .center()
    .print()
    // .css("font-family", "Helvetica, sans-serif")
    ,
     newText("Consent1", "<p>Before starting the study, we ask that you provide your consent to participate.</p>")
        .css("font-size","1.8em")
        .bold()
    ,
    newText("Consent2", "<p>Click here <a href=https://drive.google.com/file/d/1uojnQXiR9rKg5dB6GBgiyBBecyhr9haI/view?usp=sharing> to review the information letter</a>.</p>") // remember to add the link here, emma
        .print()
    ,
     newButton("consent button", "Click here to consent.")
        .center()
        .css("font-size","1.8em")
        .print()
        .wait()
    )

    
// Outro
newTrial( "Outro",
defaultText.center().print().css("font-family", "Helvetica, sans-serif")
,
newText("<p>You must certify that you have completed this experiment. Click the link below!</p>")
 .color("blue")     
 .bold()
    ,
newText("<p><a href='https://app.prolific.com/submissions/complete?cc=C5QVSR3C' target=_'blank' >"+
"Confirm my participation in Prolific.</a></p>")
    .center()
    .print()
    .wait()
    )

// Instructions
newTrial("Intro-1",
    defaultText
        .css("font-family", "Helvetica, sans-serif")
        .center()
        .print()
        //.css("font-family", "Helvetica, sans-serif")
    ,
    newText("instructions-1", "Thank you for your participation. This is a study conducted by the Université Paris Cité.")
    ,
    newText("instructions-2", "<p>We will ask you to read some stories and to provide responses to questions that involve a scale that ranges from 0 to 6.</p>")
    ,
    newText("instructions-3", "<b>Are you ready to start?</b>")
    ,
    newText("instructions-4", "<p>Please type in your Prolific ID below.</p>")
    ,
    newTextInput("inputID", "")
        .center()
        .css("margin","1em")
        .log()
        .print()
    ,
    newText("warning", "Please enter your ID first.")
        .color("red")
        .bold()
        .remove()
    ,
    newButton("wait", "Click here to begin")
        .center()
        .print()
        // Only validate a click on Start when inputID has been filled
        .wait(  // Make sure the TextInput has been filled
            getTextInput("inputID")
                .testNot.text("")
                .failure( getText("warning").print() )
        )
        ,
        getVar("ID").set( getTextInput("inputID") )
 )
    
newTrial("Intro-2",
    defaultText
        .css("font-family", "Helvetica, sans-serif")
        .css("margin", "0px")
        .css("line-height", "1.0")
        .center()
        .print()
        //.css("font-family", "Helvetica, sans-serif")
    ,
    newText("instructions-5", "<p>In this task, you will see a series of very short stories.</p>")
    ,
    newText("instructions-5a", "<p>Your task will be to read each carefully.</p>")
    ,
    newText("instructions-5c", "<p>After you have read the story, two things might follow.</p>")
    ,
    newText("instructions-6", "<p>One thing that will occur occasionally is that you will be asked to answer a YES/NO question about the story. This will tell us that you are reading the stories attentively.</p>")
    ,
    newText("instructions-6b", "<p>The other thing that will always happen is that, after you have completed reading the story, the program will underline one of its sentences.</p>")
        ,
    newText("instructions-6d", "<p>This will encourage you to reread that sentence. Once you have done so, you will answer a question about that sentence using a scale ranging from 0–6.</p>")
    ,
    newText("instructions-6e", "<p>The question concerns the extent to which the author is making a judgement or sharing their subjective opinion through the underlined sentence.</p>")
    ,
    newText("instructions-8", "<p>To be slightly more technical, you will judge the extent to which the author is sharing an attitude in that sentence. It does not matter whether it is positive or negative.</p>")
    ,
    newText("instructions-9", "<p>To become familiar with the task, check out the examples on the next page.</p>")
    ,
    newText("instructions-10", "<p>Press the SPACEBAR to see the next page of instructions.</p>")
    ,
    newKey(" ")
        // .log()
        .wait()
        // .log()
)
    
newTrial("Intro-2b",
    defaultText
        .css("font-family", "Helvetica, sans-serif")
        .center()
        .print()
        //.css("font-family", "Helvetica, sans-serif")
    ,
    newText("instructions-7c", "<p>In other words, we want you to say to what extent you think the author is <em>sharing an attitude</em>, if at all.</p>")
    ,
    newText("instructions-7d", "<p>To illustrate, imagine a story that concerns a meeting that takes place.</p>")
    ,
    newText("instructions-7e","<p>The story includes the line 'Mary finished her meeting.' This is arguably a neutral, descriptive statement.</p>")
    ,
    newText("instructions-7f","<p>However, if the line goes 'Mary finished her damn meeting', this arguably reveals the narrator's subjective attitude.</p>")
    ,
    newText("instructions-7g","<p>Here, the speaker is sharing a subjective (in this case, negative) opinion about the meeting.</p>"),
    newText("instructions-8", "<p>Press the SPACEBAR to see the next page of instructions.</p>")
    ,
    newKey(" ")
        // .log()
        .wait()
        // .log()
)

    newTrial("Intro-2c",
    defaultText
        .css("font-family", "Helvetica, sans-serif")
        .center()
        .print()
        //.css("font-family", "Helvetica, sans-serif")
    ,
    newText("instructions-7h","<p>Now, imagine the story says 'Thankfully, Mary finished her meeting'.</p>")
    ,
    newText("instructions-7x","<p>This also (arguably) shows that the narrator is sharing their opinion.</p>")
    ,
    newText("instructions-7i","<p>In this case, it could be viewed positively (because the speaker is expressing relief).</p>")
    ,
    newText("instructions-7xy","<p>It can also be viewed negatively (perhaps the meeting was tough and the relief is kind of negative).</p>")
    ,
    newText("instructions-7j","<p>Our point is that we are not concerned with the positivity or the negativity of the revealed subjective opinion.</p>")
    ,
    newText("instructions-7k", "<p>We are interested in the <em>degree to which</em> a sentence is revealing of a subjective opinion. Again, we call this <em>sharing an attitude.</em></p>")
    ,
    newText("instructions-8", "<p>Press the SPACEBAR to see the next page of instructions.</p>")
    ,
    newKey(" ")
        // .log()
        .wait()
        // .log()
)


newTrial("Intro-3",
    defaultText
        .center().css("font-family", "Helvetica, sans-serif")
        .print()
        //.css("font-family", "Helvetica, sans-serif")
    ,
    newText("instructions-9", "<p>Let’s go through a few practice trials in order to see how the task works.</p>")
    ,
    newText("instructions-10", "<p>As a reminder, you will be asked to rate the degree of 'attitude' in a sentence from 0 to 6.</p>")
    ,
    newText("instructions-10a", "<p>0 will represent 'Not at all – the author is neutral and not sharing an attitude'.</p>")
    ,
    newText("instructions-10b", "<p>6 will represent 'Very much – the author is sharing a positive or negative attitude'.</p>")
    ,
    newText("instructions-7d", "<p>It is very important for us that you stay focused on the task throughout the study and that you complete the experiment in one sitting.</p>")
    ,
    newText("instructions-11", "<p>Press the SPACEBAR to start the practice trials.</p>")
    ,
    newKey(" ")
        // .log()
        .wait()
        // .log()
)

Template("attitude_practice.csv", row =>
    newTrial("practice",
        // 1) Story text (normal first)
        newText("sentence", row.Sentence.replace(/\n/g, "<br>"))
            .css("font-size", "18px")
            .css("font-family", "Helvetica, sans-serif")
            .css("line-height", "1.4")
            .css("background-color", "#f9f9f9")
            .css("padding", "15px")
            .css("border-radius", "8px")
            .css("margin", "10px auto 10px auto")
            .css("max-width", "700px")
            .css("text-align", "center")
        .print()
        ,
        
        newText("continue-instruction1", "Press the SPACEBAR to continue")
            .center()
            .css("margin-top", "20px")
            .css("font-family", "Helvetica, sans-serif")
            .print()
        ,

        newKey("continue1", " ")
            .wait()
        ,
        
        // Remove normal story + instruction before moving on
        getText("sentence").remove()
        ,
        getText("continue-instruction1").remove()
        ,

        // 3) If there is a comprehension question, show it now (story is off-screen)
        ...(row.Question === "YES" ? [
            newText("guidance-question", "You will now answer a comprehension question about the story")
                .center()
                .css("font-family", "Helvetica, sans-serif")
                .css("font-style", "italic")
                .css("color", "#666")
                .css("margin-bottom", "20px")
                .print()
            ,
            newTimer("pauseBeforeQ", 2500).start().wait()
            ,
            getText("guidance-question").remove()
            ,
            
            newText("q-sentence", `<p>${row.QuestionSentence}</p>`)
                .center()
                .css("font-family", "Helvetica, sans-serif")
                .css("margin-top", "10px")
                .print()
            ,
            newText("key-info", "Click N for NO or Y for YES")
                .center()
                .css("font-family", "Helvetica, sans-serif")
                .css("margin-top", "10px")
                .print()
            ,
            newKey("keypress-question", "NY").log().wait()
            ,
            // Feedback in practice
            getKey("keypress-question")
                .test.pressed(row.CorrectResponse)
                .success(
                    newText("correct", "Correct!")
                        .color("green")
                        .italic()
                        .center()
                        .css("font-family", "Helvetica, sans-serif")
                        .print()
                )
                .failure(
                    newText("false", "Wrong answer!")
                        .color("red")
                        .center()
                        .css("font-family", "Helvetica, sans-serif")
                        .print()
                )
            ,
            newTimer("qPause", 1500).start().wait()
            ,
            // Clean up Q UI before proceeding
            getText("q-sentence").remove()
            ,
            getText("key-info").remove()
            ,
            getText("correct").remove()
            ,
            getText("false").remove()
        ] : [])
        ,
        newText("guidance-underline", "You will now see a sentence get underlined")
            .center()
            .css("font-family", "Helvetica, sans-serif")
            .css("font-style", "italic")
            .css("color", "#666")
            .css("margin-bottom", "20px")
            .print()
        ,
        newTimer("pauseBeforeUnderline", 3000).start().wait()
        ,
        getText("guidance-underline").remove()
        ,

        // 4) Show underlined/bold sentence (will stay on screen)
        newText("sentenceBold", thickUnderline(row.SentenceBold).replace(/\n/g, "<br>"))
            .css("font-size", "18px")
            .css("font-family", "Helvetica, sans-serif")
            .css("line-height", "1.4")
            .css("background-color", "#f9f9f9")
            .css("padding", "15px")
            .css("border-radius", "8px")
            .css("margin", "10px auto 10px auto")
            .css("max-width", "700px")
            .css("text-align", "center")
            .print()
        ,

        // Wait 2.5 seconds with sentence visible
        newTimer("boldSentenceTimer", 2500)
            .start()
            .wait()
        ,
        
        newText("guidance-rating", "Finally, you will be asked to rate the extent to which the author is expressing an attitude in the underlined sentence. To do so, click the button to reveal a scale, then select your response.")
            .center()
            .css("font-family", "Helvetica, sans-serif")
            .css("font-style", "italic")
            .css("color", "#666")
            .css("margin-top", "20px")
            .css("margin-bottom", "15px")
            .css("text-align", "center")
            .print()
        ,
        newTimer("pauseBeforeRating", 8800).start().wait()
        ,
        getText("guidance-rating").remove()
        ,

        // 5) Rating question appears BELOW the sentence (sentence stays visible)
        newText("scale_title", "To what degree does the author express an attitude in the underlined sentence?")
            .css("font-size", "20px").css("font-family", "Helvetica, sans-serif")
            .css("margin-top", "30px")
            .css("margin-bottom", "15px")
            .css("text-align", "center")
            .center()
            .print()
        ,
        
        
        newButton("reveal", "Show scale")
            .css("position", "relative")
            .css("top", "-13px")
            .center()
            .print()
            .wait()
            .remove()
        ,
        
        // Start timing here (rating only)
        newVar("ratingStartTime").global().set(v => Date.now())
        ,
        
        newScale("rating", 7)
            .label(0, "0")
            .label(1, "1")
            .label(2, "2")
            .label(3, "3")
            .label(4, "4")
            .label(5, "5")
            .label(6, "6")
            .horizontal()
            .labelsPosition("bottom")
            .before(
                newText("left", "Not at all – the author is neutral and not sharing an attitude")
                    .css("margin-right", "20px")
            )
            .after(
                newText("right", "Very much – the author is sharing a positive or negative attitude")
                    .css("margin-left", "20px")
            )
            .css("margin-top", "20px")   // creates vertical separation from button
            .css("font-family", "Helvetica, sans-serif")
            .size(800)
            .css("margin-top", "30px")
            .center()
            .print()
            .wait()

        
        ,

        // Stop timing immediately after rating
        newVar("ratingDuration").global().set(v => Date.now() - getVar("ratingStartTime").value)
        ,

        newText("continue-instruction2", "Press the SPACEBAR to continue")
            .center()
            .css("margin-top", "20px")
            .css("font-family", "Helvetica, sans-serif")
            .print()
        ,

        newKey("finish", " ")
            .wait()
        ,
        
        clear()
        ,

        // 7) Short delay before next trial
        //  newText("pleasewait2", "Here's another one...")
        //     .css("margin-top", "20px")
        //      .center()
        //      .css("font-family", "Helvetica, sans-serif")
        //      .print()
        //   ,
        //  newTimer("wait3", 1000)
        //      .start()
        //     .wait()
       //  ,
       //  getText("pleasewait2").remove()
       //  ,

        // Log rating response
        getScale("rating").log("last")
    )
    .log("Sentence", row.Sentence)
    .log("SentenceBold", row.SentenceBold)
    .log("Item", row.Item)
    .log("Group", row.Group)
    .log("CorrectResponse", row.CorrectResponse)
    .log("ratingDuration", getVar("ratingDuration"))
);


newTrial("Intro-4",
    defaultText
        .center().css("font-family", "Helvetica, sans-serif")
        .print()
        //.css("font-family", "Helvetica, sans-serif")
    ,
    newText("instructions-11", "<p>Great! Now that you are familiar with the task, let's start the study!</p>")
    ,
    newText("instructions-11a", "<b> We ask that you stay focused on this task and remove all distractions. </b>")
    ,
    newText("instructions-13", "<p>Press the SPACEBAR to start.</p>")
    ,
    newKey(" ")
        // .log()
        .wait()
        // .log()
)
    
// trials

Template("attitude_items.csv", row =>
    newTrial("experiment-trial",
        // 1) Story text (normal first)
        newText("sentence", row.Sentence.replace(/\n/g, "<br>"))
            .css("font-size", "18px").css("font-family", "Helvetica, sans-serif")
            .css("line-height", "1.4")
            .css("background-color", "#f9f9f9")
            .css("padding", "15px")
            .css("border-radius", "8px")
            .css("margin", "10px auto 10px auto")
            .css("max-width", "1000px")
            .css("text-align", "center")
            .print()
        ,

        newText("continue-instruction1", "Press the SPACEBAR to continue")
            .center()
            .css("margin-top", "20px")
            .css("font-family", "Helvetica, sans-serif")
            .print()
        ,

        newKey("continue1", " ")
            .wait()
        ,
        
        // Remove normal story + instruction before moving on
        getText("sentence").remove()
        ,
        getText("continue-instruction1").remove()
        ,

        // 3) If there is a comprehension question, show it now (story is off-screen)
        ...(row.Question === "YES" ? [
            newText("q-sentence", `<p>${row.QuestionSentence}</p>`)
                .center().css("font-family", "Helvetica, sans-serif")
                .css("margin-top", "10px")
                .print()
            ,
            newText("key-info", "Click N for NO or Y for YES")
                .center().css("font-family", "Helvetica, sans-serif")
                .css("margin-top", "10px")
                .print()
            ,
            newKey("keypress-question", "NY").log().wait()
            ,
            // brief pause and clean up question UI
            newTimer("qPause", 300).start().wait()
            ,
            getText("q-sentence").remove()
            ,
            getText("key-info").remove()
        ] : [])
        ,

        // 4) Show underlined/bold sentence (will stay on screen)
        newText("sentenceBold", thickUnderline(row.SentenceBold).replace(/\n/g, "<br>"))
            .css("font-size", "18px").css("font-family", "Helvetica, sans-serif")
            .css("line-height", "1.4")
            .css("background-color", "#f9f9f9")
            .css("padding", "15px")
            .css("border-radius", "8px")
            .css("margin", "10px auto 10px auto")
            .css("max-width", "1500px")
            .css("text-align", "center")
            .print()
        ,

        // Wait 5 seconds with sentence visible
        newTimer("boldSentenceTimer", 2500)
            .start()
            .wait()
        ,

        // 5) Rating question appears BELOW the sentence (sentence stays visible)
        newText("scale_title", "To what degree does the author express an attitude in the underlined sentence?")
            .css("font-size", "20px").css("font-family", "Helvetica, sans-serif")
            .css("margin-top", "30px")
            .css("margin-bottom", "15px")
            .css("text-align", "center")
            .center()
            .print()
        ,
        
        
        newButton("reveal", "Show scale")
            .css("position", "relative")
            .css("top", "-13px")   // move up (adjust: -20 to -60)
            .center()
            .print()
            .wait()
            .remove()
        ,
        
        // Start timing here (rating only)
        newVar("ratingStartTime").global().set(v => Date.now())
        ,

        newScale("rating", 7)
            .label(0, "0")
            .label(1, "1")
            .label(2, "2")
            .label(3, "3")
            .label(4, "4")
            .label(5, "5")
            .label(6, "6")
            .horizontal()
            .labelsPosition("bottom")
            .before(
                newText("left", "Not at all")
                .css("margin-right", "20px")
                .css("vertical-align", "middle")
                .css("margin-top", "40px")
            )
            .after(
                newText("right", "Very much")
                .css("margin-left", "20px")
                .css("vertical-align", "middle")
                .css("margin-top", "40px")
            )
            .css("font-family", "Helvetica, sans-serif")
            .css("margin-bottom", "10px")
            .size(800)
            .css("margin-top", "40px")
            .center()
            .print()
            .wait()
        ,

        // Stop timing immediately after rating
        
        newVar("ratingDuration").global().set(v => Date.now() - getVar("ratingStartTime").value)
        ,
    

        newText("continue-instruction2", "Press the SPACEBAR to continue")
            .center()
            .css("margin-top", "20px")
            .css("font-family", "Helvetica, sans-serif")
            .print()
        ,

        newKey("finish", " ")
            .wait()
        ,
        
        clear()
        ,

        // 7) Short delay before next trial
        newText("pleasewait2", "Next story")
            .css("margin-top", "20px")
            .center()
            .css("font-family", "Helvetica, sans-serif")
            .print()
        ,
        newTimer("wait3", 1000).start().wait()
        ,
        getText("pleasewait2").remove()
        ,

        // Log rating response
        getScale("rating").log("last")
    )
    .log("Sentence", row.Sentence)
    .log("Item", row.Item)
    .log("Group", row.Group)
    .log("CorrectResponse", row.CorrectResponse)
    .log("Condition", row.Condition)
    .log("ratingDuration", getVar("ratingDuration"))
);



// Questions for pilot experiment

newTrial("post-experiment-questions",
    newText("intro",
        "The next questions are voluntary. They have to do with how you experienced the experiment.<br><br>" +
        "You may leave the boxes blank if you wish. Answering them will help us develop better experiments in the future."
    )
        .center()
        .print("questions")
    ,

    newText("<br><br>").print("questions") // spacing
    ,

    newText("Q1", "<b>What do you think the experiment was about?</b>")
        .center()
        .print("questions")
    ,
    newTextInput("experiment_topic")
        .lines(1)
        .size(500, 40)
        .center()
        .print("questions")
        .log()
    ,

    newText("spacer1", "<br><br>").print("questions")
    ,

    newText("Q2", "<b>Did you notice anything unusual during the experiment?</b>")
        .center()
        .print("questions")
    ,
    newTextInput("unusual")
        .lines(3)
        .size(500, 80)
        .center()
        .print("questions")
        .log()
    ,

    newText("spacer2","<br><br>").print("questions")
    ,

    newButton("Continue to confirm participation in Prolific")
        .center()
        .print("questions")
        .wait()
);


PennController.SendResults("send");

