import React, { useRef, useEffect } from 'react';

const styles = {
  videoContainer: {
    width: '100%',
    height: '100%'
  },
  videoElement: {
    width: '100%',
    height: '100%'
  }
};

const LocalVideoView = props => {
  const { remoteStream } = props;
  const remoteVideoRef = useRef();

  useEffect(() => {
    if (remoteStream) {
      const remoteVideo = remoteVideoRef.current;
      remoteVideo.srcObject = remoteStream;

      remoteVideo.onloadedmetadata = () => {
        remoteVideo.play();
      };
    }
  }, [remoteStream]);

  return (
    <div style={styles.videoContainer}>
      <video style={styles.videoElement} ref={remoteVideoRef} autoPlay />
    </div>
  );
};

export default LocalVideoView;
