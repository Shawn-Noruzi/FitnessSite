import React, { useState } from "react";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";
import styles from "./PreviewVideo.module.css";

export default function PreviewVideo({ width }) {
  const [videoPlayer, setVideoPlayer] = useState(false);
  return (
    <motion.div
      className={
        videoPlayer
          ? styles.expandedSocialContainer + " " + styles.socialContainer
          : styles.socialContainer
      }
    >
      <motion.div className={styles.socialMediaContainer}>
        <a
          className={styles.socialHeader + " font-zygoregular"}
          href="www.instagram.com"
        >
          IN
        </a>
        <a
          className={styles.socialHeader + " font-zygoregular"}
          href="www.facebook.com"
        >
          FB
        </a>
        <a
          className={styles.socialHeader + " font-zygoregular"}
          href="www.twitter.com"
        >
          TW
        </a>
        <a
          className={styles.socialHeader + " font-zygoregular"}
          href="www.instagram.com"
        >
          TT
        </a>
        {videoPlayer && width > 960 ? (
          <button
            className={styles.closeButton}
            onClick={() => setVideoPlayer(false)}
          >
            {" "}
            X{" "}
          </button>
        ) : null}
      </motion.div>
      <motion.div
        className={
          videoPlayer
            ? styles.expandedVideoContainer + " " + styles.videoContainer
            : styles.videoContainer
        }
      >
        <motion.div
          className={
            videoPlayer
              ? styles.expandedVideoPlayer + " " + styles.videoWrapper
              : styles.videoWrapper
          }
          onClick={() => setVideoPlayer(true)}
        >
          <ReactPlayer
            width="100%"
            height="100%"
            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            style={videoPlayer ? "" : { pointerEvents: "none" }}
          />
        </motion.div>

        <motion.div
          className={
            videoPlayer
              ? styles.expandedTextWrapper + " " + styles.textWrapper
              : styles.textWrapper
          }
        >
          <motion.p className={styles.videoText + " font-zygoregular"}>
            Check out our latest work out session for body building
          </motion.p>
          <motion.p
            className={
              videoPlayer
                ? styles.expandedHighlightText +
                  " " +
                  styles.highlightText +
                  " font-zygoregular"
                : styles.highlightText + " font-zygoregular"
            }
          >
            See Our Videos
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
