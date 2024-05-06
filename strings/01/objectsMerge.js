export function objectsMerge(...objects){
  const mergedObject = {};
  objects.forEach((obj, index) => {
    mergedObject[index] = obj;
  });
  return mergedObject;
};
