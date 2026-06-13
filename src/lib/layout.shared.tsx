import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig, linkConfig } from './shared';

// Custom SVG path for the Discord Icon
function DiscordIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg viewBox="0 0 127.14 96.36" fill="currentColor" width="1em" height="1em" {...props}>
      <path d="M107.7,8.07A105.15,105.15,0,0,0,77.26,0a77.19,77.19,0,0,0-3.3,6.83A96.67,96.67,0,0,0,53.22,6.83,77.19,77.19,0,0,0,49.88,0,105.15,105.15,0,0,0,19.44,8.07C3.66,31.58-1.86,54.65,1,77.53A105.73,105.73,0,0,0,32,96.36a74.37,74.37,0,0,0,6.73-11A68.51,68.51,0,0,1,28.1,80.13c1-.73,2-1.49,3-2.27a74.12,74.12,0,0,0,64.94,0c1,.78,2,1.54,3,2.27a68.32,68.32,0,0,1-10.61,5.27,74.62,74.62,0,0,0,6.74,11,105.52,105.52,0,0,0,31.05-18.83C129.66,49.1,123.39,26.27,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53S36.18,40.36,42.45,40.36,53.93,46,53.8,53,48.72,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.24,60,73.24,53S78.41,40.36,84.69,40.36,96.17,46,96,53,91,65.69,84.69,65.69Z"/>
    </svg>
  );
}

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      // JSX supported
      title: appName,
    },
    githubUrl: `https://github.com/${gitConfig.user}`,
    links: [
    {
      type: 'icon',
      icon: <DiscordIcon />,
      label: 'Discord',
      text: 'Join our Discord',
      url: `${linkConfig.discord.invite}`,
    },
  ],
  };
}
