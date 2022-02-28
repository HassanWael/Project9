function Post(props) {
    return ( <>
        <div className="post">
        <div class="ui card">
  <div class="content">
    <div class="right floated meta">{props.created}h</div>
    <img class="ui avatar image" src={`https://avatars.dicebear.com/api/male/${props.user_name}.svg`}/> {props.user_name}
  </div>
  <div class="image">
    <h3>
        {props.description}
    </h3>
  </div>
  <div class="content">
    <span class="right floated">
      <i class="heart outline like icon"></i>
      17 likes
    </span>
    <i class="comment icon"></i>
    3 comments
  </div>
  <div class="extra content">
  <div class="ui action input">
  <input type="text" placeholder="Add comment"/>
  <button class="ui button">Add</button>
</div>
  </div>
</div>
        </div>
    </> );
}

export default Post;