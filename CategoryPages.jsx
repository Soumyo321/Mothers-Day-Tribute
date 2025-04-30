import { useParams } from 'react-router-dom';
import MotherStories from './MotherStories';
import MothersRecipes from './MothersRecipes';
import GiftIdeas from './GiftIdeas';
import LifeLessons from './LifeLessons.jsx';
import MemorableMoments from './MemorableMoments';
import MotherDaughterBond from './MotherDaughterBond';


const CategoryPage = () => {

  const { id } = useParams(); 


  let categoryComponent;

  switch (id) {
    case '1':
      
      break;
    case '2':
      categoryComponent = <MothersRecipes />;
      console.log("hi")
      break;
    case '3':
      categoryComponent = <GiftIdeas />;
      break;
    case '4':
      categoryComponent = <LifeLessons />;
      break;
    case '5':
      categoryComponent = <MemorableMoments />;
      break;
    case '6':
      categoryComponent = <MotherDaughterBond />;
      break;
    default:
      categoryComponent = <div>Category not found</div>;
      break;
  }

  return (
    <div>
      {/* {categoryComponent} */}
      <h1>hi</h1>
      
    </div>
  );
};

export default CategoryPage;
