import { onlyNumberRegex } from "./Regex";

const maxLengthCheckReuse = (value, maxLength) => {
  return value.length < maxLength && onlyNumberRegex.test(value);
};

export default maxLengthCheckReuse;
