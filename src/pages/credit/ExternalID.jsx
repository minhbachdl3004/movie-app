import React, { useState, useEffect } from "react";

import tmdbApi from "../../api/tmdbApi";

import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';


const ExternalID = (props) => {
    const [external_ids, setExternalID] = useState([]);

  const keyword = "person";

  useEffect(() => {
    const getExternal = async () => {
      const res = await tmdbApi.external_ids(keyword, props.id);
      setExternalID(res);
      // console.log(external_ids);
    };
    getExternal();
  }, [external_ids, props.id]);

  return (
    <>
      <InstagramIcon
        fontSize="large"
        onClick={() =>
          window.open(`https://www.instagram.com/${external_ids.instagram_id}`)
        }
      />
      <TwitterIcon
        fontSize="large"
        onClick={() =>
          window.open(`https://twitter.com/${external_ids.instagram_id}`)
        }
      />
    </>
  );
}

export default ExternalID