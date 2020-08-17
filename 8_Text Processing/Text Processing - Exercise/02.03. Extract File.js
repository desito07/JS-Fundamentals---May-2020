function solution(inputString){
    let lastIndexOfDashes = inputString.lastIndexOf('\\');
    // console.log(lastIndexOfDashes);
    let fileInfo = inputString.substring(lastIndexOfDashes + 1);
    // console.log(fileInfo);
    let lastIndexOfDot = fileInfo.lastIndexOf('.');
    let file = fileInfo.substring(0, lastIndexOfDot);
    let ext = fileInfo.substring(lastIndexOfDot + 1);
    console.log(`File name: ${file}`);   
    console.log(`File extension: ${ext}`);       
}
solution('C:\\Internal\\training-internal\\Template.pptx');
