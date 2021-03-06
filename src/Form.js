import { useState } from "react";

let emojiObjects = {
  "๐": "Smiling face",
  "๐": "Grinning face",
  "๐": "Smiling face with smiling eyes",
  "๐": "Smiling face with tears",
  "๐คฃ": "Rolling on the floor laughing",
  "๐": "Lauging with tears",
  "๐": "Upside down face",
  "๐": "Winking face",
  "๐": "Smiling face with smiling",
  "๐": "Smiling face with halo",
  "๐": "Smiling face with sunglasses",
  "๐ค": "Nerdy face",
  "๐ง": "	Face with monocle",
  "๐ฅณ": "Partying face",
  "๐ค": "Hugs",
  "๐คญ": "Face with hand in mouth",
  "๐คซ": "Shushing face",
  "๐ค": "Thinkin face",
  "๐ค": "Zipped mouth",
  "๐": "Neutral face",
  "๐คจ": "Face with raised eyebrow",
  "๐": "Expressionless face",
  "๐": "Smirking face",
  "๐": "Unamused face",
  "๐ช": "Sleepy face",
  "๐ด": "Sleeping face",
  "๐": "	Relieved face",
  "๐": "Pensive face",
  "๐คค": "Drooling face",
  "๐คฎ": "Vomiting face",
  "๐ฅถ": "Cold face",
  "๐ฅด": "Woozy face",
  "๐ฒ": "Astonished face",
  "๐ณ": "Flushed face",
  "๐ฅบ": "Begging face",
  "๐ฆ": "Frowning face with open mouth",
  "๐ง": "Angushed face",
  "๐จ": "Fearful face",
  "๐ฐ": "Anxious face with sweat",
  "๐ฅ": "Sad but relieved face",
  "๐ข": "Crying face",
  "๐ญ": "Loudly crying face",
  "๐ฑ": "Screaming face",
  "๐": "Confounded face",
  "๐ฃ": "Persevering face",
  "๐": "Disapointed face",
  "๐": "Downcast face with sweat",
  "๐ฉ": "	Weary face",
  "๐ซ": "	Tired face",
  "๐ฅฑ": "	Yawning face",
  "๐ค": "Face with steam",
  "๐ก": "Pouting face",
  "๐ ": "Angry face",
  "๐คฌ": "	Face with symbols on mouth"
};
export default function Form() {
  let [message, setMessage] = useState(
    "Enter emoji or click on Below Emoji's to know the meaning"
  );
  function showEmojiMeaning(event) {
    setMessage(emojiObjects[event.target.textContent]);
  }
  function takeUserInput(event) {
    let userInput = event.target.value;
    let emojiMeaning = emojiObjects[userInput];
    if (emojiMeaning == undefined) {
      emojiMeaning = `we found no
       " ${userInput} "
    emoji in our database`;
    }
    setMessage(emojiMeaning);
  }
  return (
    <div className="formInput">
      <input
        className="formField"
        placeholder="put face emoji here๐."
        onChange={takeUserInput}
      />
      <div className="container">
        <p className="emojiMeaning">{message}</p>
        <div className="emojiBox">
          {Object.keys(emojiObjects).map((item) => (
            <span key={item} className="emojiItem" onClick={showEmojiMeaning}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
