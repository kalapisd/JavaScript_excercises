export function numericConverter(decimalNumber) {
    if (
      typeof decimalNumber !== "number" ||
      isNaN(decimalNumber) ||
      !Number.isFinite(decimalNumber)
    ) {
      throw new Error("Input must be a finite number.");
    }
  
    const binary = decimalNumber.toString(2);
    const octal = decimalNumber.toString(8);
    const hexa = decimalNumber.toString(16);
  
    return {
      binary: binary,
      octal: octal,
      hexa: hexa,
    };
  }
  