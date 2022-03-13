import wallet from '../gifs/wallet/wallet.gif';
import starWars from '../gifs/star-wars-search-planets/search-by-name.gif';
import Todo from '../gifs/Todo/editing-task.gif';
import type { ProjectsDataTypes } from '../types/ProjectsDataTypes';

const projectsArray: Array<ProjectsDataTypes> = [{
  id: 1,
  name: 'Wallet',
  description: 'A simple wallet application that allows you to store and manage your finance assets.',
  image: wallet,
  gitHubUrl: 'https://github.com/thiago-ximenes/wallet',
  liveUrl: 'https://wallet-thiago-ximenes.netlify.app/',
}, {
  id: 2,
  name: 'Star Wars Search Planets',
  description: 'A simple application that allows you to search for planets in Star Wars.',
  image: starWars,
  gitHubUrl: 'https://github.com/thiago-ximenes/star-wars-planet-search',
  liveUrl: 'https://star-wars-planet-search-thiago-ximenes.netlify.app/',
},
{
  id: 3,
  name: 'Todo List',
  description: 'A simple todo list application that allows you to create, edit and delete your tasks.',
  image: Todo,
  gitHubUrl: 'https://github.com/thiago-ximenes/todo-typescript',
  liveUrl: 'https://todolistts.herokuapp.com/',
}];

export default projectsArray;
