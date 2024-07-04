import React, { useState } from 'react';
import {
  View,
  Image,
  ActivityIndicator,
  StyleSheet,
  type ImageProps,
  type StyleProp,
  type ViewStyle,
  type ImageStyle,
  Text,
} from 'react-native';
import { colors } from '../../constants';

interface ProgressiveImageProps extends ImageProps {
  containerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ImageStyle>;
  indicatorColor?: string;
  indicatorContainerStyle?: StyleProp<ViewStyle>;
  renderCustomIndicator?: (
    progress: number,
    loading: boolean
  ) => React.ReactNode;
}

const ProgressiveImage: React.FC<ProgressiveImageProps> = ({
  containerStyle,
  style,
  indicatorColor = colors.primary,
  indicatorContainerStyle,
  source,
  renderCustomIndicator,
  ...props
}) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const handleLoadStart = () => {
    setLoading(true);
    setProgress(0);
  };

  const handleProgress = (event: any) => {
    const loaded = event.nativeEvent.loaded;
    const total = event.nativeEvent.total;
    const progress = loaded / total;
    setProgress(progress);
  };

  const handleLoadEnd = () => {
    setLoading(false);
    setProgress(1);
  };

  const handleError = (error: any) => {
    console.error(error);
    setLoading(false);
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <Image
        {...props}
        source={source}
        style={[styles.image, style]}
        onLoadStart={handleLoadStart}
        onProgress={handleProgress}
        onLoadEnd={handleLoadEnd}
        onError={handleError}
      />
      {loading && (
        <View style={[styles.indicatorContainer, indicatorContainerStyle]}>
          {renderCustomIndicator ? (
            renderCustomIndicator(progress, loading)
          ) : (
            <>
              <ActivityIndicator size="large" color={indicatorColor} />
              {progress > 0 && progress < 1 && (
                <Text style={styles.progressText}>
                  {Math.round(progress * 100)}%
                </Text>
              )}
            </>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  indicatorContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressText: {
    marginTop: 10,
    color: colors.text,
  },
});

export default ProgressiveImage;
