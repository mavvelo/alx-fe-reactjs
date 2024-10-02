// Inside your BlogPost component
import { useParams } from 'react-router-dom';

function BlogPost() {
  const { postId } = useParams();

  // Fetch the blog post data based on postId and render it
  // ...
}