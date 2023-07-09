function CheckProperties(object) {
  const propertyToCheck;
  
  for (const key in object) {
    if (object[key] === propertyToCheck) {
      return true;
    }
  }
  return false;
}

export { CheckProperties };
