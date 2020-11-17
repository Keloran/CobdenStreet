export function capitalize(s: string): string {
  let returnString: string = "";

  if (s.includes(" ")) {
    let words = s.split(' ');
    for (let word of words) {
      returnString += word.charAt(0).toUpperCase() + word.slice(1) + " ";
    }
  } else {
    returnString =  s.charAt(0).toUpperCase() + s.slice(1);
  }

  return returnString;
}
