import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";



import Videos from "./Videos";

import { fetchFromAPI } from "../utils/FetchFrom";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const { searchTerm } = useParams();
  const[videos,setvideos]=useState([])
  useEffect(() => {
   

    fetchFromAPI(`search?part=snippet&q=${searchTerm }`)
    .then((data)=>setvideos(data.items))
      
    }, [searchTerm ]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
    <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>search results for:
       <span style={{ color: "#FC1503" }}>{searchTerm}</span>videos
    </Typography>

    <Videos  videos={videos}/>
  </Box>
  );
};

export default SearchFeed;