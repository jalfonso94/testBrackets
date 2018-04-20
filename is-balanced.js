module.exports = (str) => {
  const brackets = {
    openBrackets: [],
    closeBrackets: []
  };

  const openBrackets = ['{', '(', '['];
  const closeBrackets = ['}', ')', ']'];

  const lengthBrackets = str.length;

  for (let i = 0; i < lengthBrackets; i++) {
    let bracket = str.charAt(i);
    let matchOpenBracket = openBrackets.indexOf(bracket);
    let matchCloseBracket = closeBrackets.indexOf(bracket);

    if (matchOpenBracket >= 0) {
      let nextMatchCloseBracket = closeBrackets.indexOf(str.charAt(i + 1));

      if (nextMatchCloseBracket >= 0 && nextMatchCloseBracket !== matchOpenBracket) {
        return false;
      }

      brackets.openBrackets.push(bracket);
    }

    if (matchCloseBracket >= 0) {
      brackets.closeBrackets.push(bracket);
    }
  }

  if (brackets.openBrackets.length !== brackets.closeBrackets.length) {
    return false;
  }

  return true;
};
