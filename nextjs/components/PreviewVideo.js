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
          href="https://www.instagram.com/loganwongfitness/"
        >
          IN
        </a>
        <a
          className={styles.socialHeader + " font-zygoregular"}
          href="https://www.facebook.com/Logan-Wong-104860997868823/?view_public_for=104860997868823"
        >
          FB
        </a>
        <a
          className={styles.socialHeader + " font-zygoregular"}
          href="https://www.linkedin.com/in/logan-wong/"
        >
          LI
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
            url="https://youtu.be/tjcTPsitkg4"
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
