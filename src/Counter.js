import { useState } from "react";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

export function Counter() {
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);
  const incrementlike= ()=> setLike(like + 1)
  const incrementdislike= ()=> setDisLike(disLike + 1)

  return (
    <div className="badge">
      <IconButton aria-label="like"color="primary" onClick={incrementlike}>
  <ThumbUpIcon />  <Badge    badgeContent={like} color="primary">
     </Badge> 
 </IconButton>
<IconButton aria-label="dislike"color="primary" onClick={incrementdislike}>
  <ThumbDownIcon /> <Badge  badgeContent={disLike} color="error" >
     </Badge>  
</IconButton>
      

    </div>
  );
}
