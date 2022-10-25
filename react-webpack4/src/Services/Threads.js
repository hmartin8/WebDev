import Parse from "parse";

//gets all thread tiles 
export const getTiles = () => {
  const Thread = Parse.Object.extend("Threads");
  const query = new Parse.Query(Thread);
  return query.find().then((results) => {
    return results;
  });
};

//in future add a create/write method