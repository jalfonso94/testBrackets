module.exports = (code) => {
  const brackets = {
    openBrackets: [],
    closeBrackets: []
  };

  const openBrackets = ['{', '(', '['];
  const closeBrackets = ['}', ')', ']'];
  const lengthCode = code.length;

  for (let i = 0; i < lengthCode; i++) {
    let char = code.charAt(i);
    let matchOpenBracket = openBrackets.indexOf(char);
    let matchCloseBracket = closeBrackets.indexOf(char);

    if (matchOpenBracket >= 0) {
      let nextMatchCloseBracket = closeBrackets.indexOf(code.charAt(i + 1));

      if (nextMatchCloseBracket >= 0 && nextMatchCloseBracket !== matchOpenBracket) {
        return false;
      }
      brackets.openBrackets.push(char);
    }

    if (matchCloseBracket >= 0) {
      brackets.closeBrackets.push(char);
    }
  }

  if (brackets.openBrackets.length !== brackets.closeBrackets.length) {
    return false;
  }

  return true;
};
