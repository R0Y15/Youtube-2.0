import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos, Sidebar } from "./";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
    }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />    
      </Box>

      <Box p={2} sx={{ overflowY: "auto", overflowX: "hidden" , height: "90vh", flex: 2, position: 'relative', left: '100px', width: '100%' }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white",  position: 'relative', left: '38%'}}>
          {selectedCategory} <span style={{ color: "#fc0377", position: 'relative' }}>videos</span>
        </Typography>

        <Videos videos={videos} />
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", alignContent: 'center', textAlign: 'center' }}>
          Made with ❤️ by <a href="https://github.com/R0Y15" style={{color: '#fff'}}>Roy</a>
        </Typography>
      </Box>

    </Stack>
  );
};

export default Feed;
