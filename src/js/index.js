// Import our custom CSS
import '../scss/main.scss';

// Import components
import './components/index';

// Import javascript file as needed
import * as bootstrap from 'bootstrap';
import Home from './pages/home';
import Dashboard from './pages/dashboard';
import AddStory from './pages/add-story';
import EditStory from './pages/edit-story';

const routes = {
  '/': Home,
  '/user/dashboard.html': Dashboard,
  '/user/add-story.html': AddStory,
  '/user/edit-story.html': EditStory,
};

const detectRoute = () => routes[window.location.pathname];

const initPages = () => {
  const header = document.querySelector('header');
  const main = document.querySelector('main');
  const footer = document.querySelector('footer');

  if (header && main && footer) {
    main.style.minHeight = `calc(100vh - ${header.clientHeight + footer.clientHeight}px)`;
  }
};

window.addEventListener('DOMContentLoaded', async () => {
  initPages();

  const route = detectRoute();
  route.init();
});
