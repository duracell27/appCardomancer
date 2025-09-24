import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle, View } from 'react-native';

interface LiquidGlassButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'google';
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export default function LiquidGlassButton({
  title,
  onPress,
  disabled = false,
  variant = 'primary',
  style,
  textStyle,
}: LiquidGlassButtonProps): React.JSX.Element {
  // Animation removed - using solid colors instead of gradients

  const getButtonStyle = () => {
    switch (variant) {
      case 'primary':
        return styles.primaryButton;
      case 'secondary':
        return styles.secondaryButton;
      case 'google':
        return styles.googleButton;
      default:
        return styles.primaryButton;
    }
  };

  const getTextStyle = () => {
    switch (variant) {
      case 'primary':
        return styles.primaryText;
      case 'secondary':
        return styles.secondaryText;
      case 'google':
        return styles.googleText;
      default:
        return styles.primaryText;
    }
  };

  const getButtonColor = (): string => {
    switch (variant) {
      case 'primary':
        return 'rgba(16, 185, 129, 0.9)';
      case 'secondary':
        return 'rgba(255, 255, 255, 0.1)';
      case 'google':
        return 'rgba(255, 255, 255, 0.95)';
      default:
        return 'rgba(16, 185, 129, 0.9)';
    }
  };

  return (
    <View style={[styles.outerContainer, style]}>
      <TouchableOpacity
        style={[styles.container, getButtonStyle(), { backgroundColor: getButtonColor() }, disabled && styles.disabled]}
        onPress={onPress}
        disabled={disabled}
        activeOpacity={0.8}
      >
        <Text style={[getTextStyle(), textStyle, styles.buttonText]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    width: '100%',
  },
  container: {
    borderRadius: 16,
    overflow: 'hidden',
    width: '100%',
  },
  primaryButton: {
    paddingVertical: 18,
    paddingHorizontal: 24,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 60,
    width: '100%',
    overflow: 'hidden',
    position: 'relative',
  },
  buttonText: {
    zIndex: 1,
  },
  secondaryButton: {
    paddingVertical: 18,
    paddingHorizontal: 24,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 60,
    width: '100%',
    overflow: 'hidden',
    position: 'relative',
  },
  googleButton: {
    paddingVertical: 18,
    paddingHorizontal: 24,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 60,
    width: '100%',
    overflow: 'hidden',
    position: 'relative',
  },
  primaryText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    textShadowColor: 'rgba(16, 185, 129, 0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  secondaryText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  googleText: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  disabled: {
    opacity: 0.5,
  },
});
