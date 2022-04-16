import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "./Myskills.module.css";

export default function MySkills() {
  return (
    <Box mt={3} sx={{ maxWidth: 852 }} display="flex" flexDirection="column">
      <Typography fontSize={22} fontWeight={600}>
        My Skills
      </Typography>
      <Box className={styles.slider}>
        <Box className={styles.slidetrack}>
          <Box className={styles.slide}>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png"
              height="100"
              width="250"
              alt=""
            />
          </Box>
          <Box className={styles.slide}>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
              height="100"
              width="250"
              alt=""
            />
          </Box>
          <Box className={styles.slide}>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
              height="100"
              width="250"
              alt=""
            />
          </Box>
          <Box className={styles.slide}>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
              height="100"
              width="250"
              alt=""
            />
          </Box>
          <Box className={styles.slide}>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
              height="100"
              width="250"
              alt=""
            />
          </Box>
          <Box className={styles.slide}>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
              height="100"
              width="250"
              alt=""
            />
          </Box>
          <Box className={styles.slide}>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
              height="100"
              width="250"
              alt=""
            />
          </Box>
          <Box className={styles.slide}>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png"
              height="100"
              width="250"
              alt=""
            />
          </Box>
          <Box className={styles.slide}>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
              height="100"
              width="250"
              alt=""
            />
          </Box>
          <Box className={styles.slide}>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
              height="100"
              width="250"
              alt=""
            />
          </Box>
          <Box className={styles.slide}>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
              height="100"
              width="250"
              alt=""
            />
          </Box>
          <Box className={styles.slide}>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
              height="100"
              width="250"
              alt=""
            />
          </Box>
          <Box className={styles.slide}>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
              height="100"
              width="250"
              alt=""
            />
          </Box>
          <Box className={styles.slide}>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
              height="100"
              width="250"
              alt=""
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
