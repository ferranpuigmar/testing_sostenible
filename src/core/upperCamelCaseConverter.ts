export function upperCamelCaseConverter(text: string){
  const words = text.split(/[ _-]/);

  function transformFirstLetterToUppercase(word: string){
    return `${word.charAt(0).toUpperCase()}${word.substring(1)}`;
  }

  return words.map(word => transformFirstLetterToUppercase(word)).join("");
}