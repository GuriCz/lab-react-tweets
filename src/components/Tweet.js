import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Action from "./Action";

function Tweet(props) {
  return (
    <div className="tweet">
        <ProfileImage image={props.tweet.user.image} />
      <div className="body">
        <div className="top">
            <User name={props.tweet.user.name} handle={props.tweet.user.handle} />
            <Timestamp timestamp={props.tweet.timestamp} />
        </div>
          <Message message={props.tweet.message} />
          <Action />
      </div>
      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
