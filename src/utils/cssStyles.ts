import { Theme } from '@mui/material/styles';
import { alpha } from '@mui/system';


// ----------------------------------------------------------------------

type BackgroundBlurProps = {
  blur?: number;
  opacity?: number;
  color?: string;
};

type BackgroundGradientProps = {
  direction?: string;
  startColor?: string;
  endColor?: string;
};

interface BackgroundImageProps extends BackgroundGradientProps {
  url?: string;
}

function getDirection(value = "bottom") {
  return {
    top: "to top",
    right: "to right",
    bottom: "to bottom",
    left: "to left",
  }[value];
}

// ----------------------------------------------------------------------

export default function cssStyles(theme?: Theme) {
  return {
    bgBlur: (props?: BackgroundBlurProps) => {
      const color = props?.color || theme?.palette.background.default || "#000000";

      const blur = props?.blur || 6;
      const opacity = props?.opacity || 0.8;

      return {
        backdropFilter: `blur(${blur}px)`,
        WebkitBackdropFilter: `blur(${blur}px)`, // Fix on Mobile
        backgroundColor: alpha(color, opacity),
      };
    },
    bgGradient: (props?: BackgroundGradientProps) => {
      const direction = getDirection(props?.direction);
      const startColor = props?.startColor || `${alpha('#000000', 0)} 0%`;
      const endColor = props?.endColor || '#000000 75%';

      return {
        background: `linear-gradient(${direction}, ${startColor}, ${endColor});`,
      };
    },
    bgImage: (props?: BackgroundImageProps) => {
      const url =
        props?.url || 'https://minimal-assets-api.vercel.app/assets/images/bg_gradient.jpg';
      const direction = getDirection(props?.direction);
      const startColor = props?.startColor || alpha(theme?.palette.grey[900] || '#000000', 0.88);
      const endColor = props?.endColor || alpha(theme?.palette.grey[900] || '#000000', 0.88);

      return {
        background: `linear-gradient(${direction}, ${startColor}, ${endColor}), url(${url})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
      };
    },
  };
}

export const primaryButtonStyles = {
  bgcolor: "common.black",
  color: "common.white",
  boxShadow: "none",
  ":hover": {
    bgcolor: "common.black",
    color: "rgba(253, 147, 76, 1)",
  },
};

export const secondaryButtonStyles = {
  borderRadius: 1,
  bgcolor: "rgba(253, 147, 76, 1)",
  color: "common.white",
  boxShadow: "none",

  ":hover": {
    bgcolor: "rgba(253, 147, 76, 1)",
    color: "common.white",
    borderColor: "rgba(253, 147, 76, 1)",
  },
};

export const outlineButtonStyles = {
  borderColor: "rgba(253, 147, 76, 1)",
  color: "rgba(253, 147, 76, 1)",
  boxShadow: "none",

  ":hover": {
    bgcolor: "rgba(253, 147, 76, 1)",
    color: "common.white",
    borderColor: "rgba(253, 147, 76, 1)",
  },
};
