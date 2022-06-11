import { useState } from "react";

let emojiObjects = {
  "😀": "Smiling face",
  "😆": "Grinning face",
  "😄": "Smiling face with smiling eyes",
  "😅": "Smiling face with tears",
  "🤣": "Rolling on the floor laughing",
  "😂": "Lauging with tears",
  "🙃": "Upside down face",
  "😉": "Winking face",
  "😊": "Smiling face with smiling",
  "😇": "Smiling face with halo",
  "😎": "Smiling face with sunglasses",
  "🤓": "Nerdy face",
  "🧐": "	Face with monocle",
  "🥳": "Partying face",
  "🤗": "Hugs",
  "🤭": "Face with hand in mouth",
  "🤫": "Shushing face",
  "🤔": "Thinkin face",
  "🤐": "Zipped mouth",
  "😐": "Neutral face",
  "🤨": "Face with raised eyebrow",
  "😑": "Expressionless face",
  "😏": "Smirking face",
  "😒": "Unamused face",
  "😪": "Sleepy face",
  "😴": "Sleeping face",
  "😌": "	Relieved face",
  "😔": "Pensive face",
  "🤤": "Drooling face",
  "🤮": "Vomiting face",
  "🥶": "Cold face",
  "🥴": "Woozy face",
  "😲": "Astonished face",
  "😳": "Flushed face",
  "🥺": "Begging face",
  "😦": "Frowning face with open mouth",
  "😧": "Angushed face",
  "😨": "Fearful face",
  "😰": "Anxious face with sweat",
  "😥": "Sad but relieved face",
  "😢": "Crying face",
  "😭": "Loudly crying face",
  "😱": "Screaming face",
  "😖": "Confounded face",
  "😣": "Persevering face",
  "😞": "Disapointed face",
  "😓": "Downcast face with sweat",
  "😩": "	Weary face",
  "😫": "	Tired face",
  "🥱": "	Yawning face",
  "😤": "Face with steam",
  "😡": "Pouting face",
  "😠": "Angry face",
  "🤬": "	Face with symbols on mouth"
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
        placeholder="put face emoji here😜."
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
