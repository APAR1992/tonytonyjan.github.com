var recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.lang = 'cmn-Hant-TW';
recognition.onresult = function(event){
  str = event.results[event.resultIndex][0].transcript
  switch(true){
    case /下一?頁$|next page$|next$/.test(str):
      Reveal.next();
      console.info(str);
      break;
    case /上一?頁$|previous page$|previous$/.test(str):
      Reveal.prev();
      console.info(str);
      break;
    default:
      console.warn(str);
  }
}
recognition.start();