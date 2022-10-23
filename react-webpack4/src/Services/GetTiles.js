import Parse from "parse";

//Data currently not reading in correctly from back4app - says Thread class in non existent 
export const getTiles = () => {
  const Thread = Parse.Object.extend("Threads");
  const query = new Parse.Query(Thread);
  return query.find().then((results) => {
    return results;
  });
};