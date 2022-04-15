export const HandleNumpadClick = (oldValue, clickValue) => {
  let newValue = "";
  if (oldValue.length <= 8) {
    if (clickValue === ".") {
      if (!oldValue.includes(".")) newValue = oldValue + clickValue;
      else newValue = oldValue;
    } else {
      if (oldValue === 0 || oldValue === "0") newValue = clickValue;
      else newValue = oldValue + clickValue;
    }
  } else newValue = oldValue;

  if (clickValue === "D") {
    newValue = oldValue.slice(0, -1);
    if (newValue === "") newValue = "0";
  }
  if (newValue > 5000) newValue = "5000";

  return newValue;
};
