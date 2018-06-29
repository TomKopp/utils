export const mapValueFromInputToOutputRange = (val, inputMin, inputMax, outputMin, outputMax) => (outputMax - outputMin) * (val - inputMin) / (inputMax - inputMin) + outputMin;

export default mapValueFromInputToOutputRange;
