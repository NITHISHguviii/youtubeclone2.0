import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';

import Navbar from "./component/Navbar";
import VideoDetail
 from "./component/VideoDetail";
 import Feed

  from "./component/Feed";
  import SearchFeed from "./component/SearchFeed";
  import ChannelDetail from "./component/ChannelDetail";


const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: '#000' }}>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;