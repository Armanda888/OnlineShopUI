import { helper } from '@ember/component/helper';

export function lineBreak(value/*, hash*/) {
  if (value % 4 === 0) {
    return true;
  }
  return false;
}

export default helper(lineBreak);
