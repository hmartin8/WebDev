import Parse from "parse";
//get comments for a single thread using its id
export const getCommentByThreadId = (id) => {
    console.log(id);
    const Comment = Parse.Object.extend("Comment");
    const query = new Parse.Query(Comment);
    query.equalTo("thread", new Parse.Object("Threads", { id: id }));
    return query.find().then((result) => {
      return result;
    });
  };

  //in future add create/write methods