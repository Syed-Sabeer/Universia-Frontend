// CSS imports file
import './index.css'

// Try to import CSS using different path formats
try {
  require('../public/assets/css/main.min.css');
  require('../public/assets/css/style.css');
  require('../public/assets/css/color.css');
  require('../public/assets/css/responsive.css');
  require('../public/assets/css/login.css');
  require('../public/assets/css/register.css');
} catch (e) {
  console.warn('Failed to load CSS from public/assets:', e);
  
  try {
    // Alternative approach
    require('../../public/assets/css/main.min.css');
    require('../../public/assets/css/style.css');
    require('../../public/assets/css/color.css');
    require('../../public/assets/css/responsive.css');
    require('../../public/assets/css/login.css');
    require('../../public/assets/css/register.css');
  } catch (e2) {
    console.warn('Failed to load CSS from ../../public/assets:', e2);
  }
}

export default {}; 